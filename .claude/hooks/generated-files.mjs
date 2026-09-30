// Claude Code hook for generated files. Reads the hook JSON from stdin (tool_input.file_path).
//   node generated-files.mjs pre   PreToolUse Edit|Write: block edits to src/styles/tokens.css and dist/ (exit 2)
//   node generated-files.mjs post  PostToolUse Edit|Write: after design-system/tokens.json, run scripts/tokens.mjs
// Fails open: any unexpected error exits 0. Only the intentional block exits 2.
import { relative, resolve, isAbsolute } from 'node:path';
import { execFileSync } from 'node:child_process';

const readStdin = () => new Promise((done) => {
  let data = '';
  const finish = () => { clearTimeout(timer); process.stdin.pause(); done(data); };
  const timer = setTimeout(finish, 2000); // bounded: never wait more than 2s
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (c) => { data += c; if (data.length > 1_000_000) finish(); });
  process.stdin.on('end', finish);
  process.stdin.on('error', finish);
});

try {
  const input = JSON.parse(await readStdin());
  const file = input?.tool_input?.file_path;
  if (typeof file !== 'string' || !file) process.exit(0);
  const root = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
  const rel = relative(root, isAbsolute(file) ? file : resolve(root, file)).split('\\').join('/');

  if (process.argv[2] === 'pre') {
    if (rel === 'src/styles/tokens.css' || rel === 'dist' || rel.startsWith('dist/')) {
      process.stderr.write(`Blocked: ${rel} is generated. ` + (rel.startsWith('dist')
        ? 'dist/ is build output; change src/ or public/ and run `npm run build`.'
        : 'Edit design-system/tokens.json instead; scripts/tokens.mjs regenerates tokens.css.') + '\n');
      process.exit(2);
    }
  } else if (process.argv[2] === 'post' && rel === 'design-system/tokens.json') {
    let msg;
    try {
      execFileSync(process.execPath, ['scripts/tokens.mjs'], { cwd: root, stdio: 'pipe', timeout: 20000 });
      msg = 'Regenerated src/styles/tokens.css from design-system/tokens.json. Recheck contrast in both themes.';
    } catch (e) {
      msg = `scripts/tokens.mjs failed; src/styles/tokens.css was not regenerated: ${String(e.stderr || e.message).slice(0, 500)}`;
    }
    process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: msg } }));
  }
} catch {}
process.exit(0);
