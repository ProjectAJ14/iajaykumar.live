import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv } from '../src/content/csv.mjs';

test('quoted commas, escaped quotes, CRLF and header-only files', () => {
  assert.deepEqual(parseCsv('a,b\r\n"x, y","say ""hi"""\r\n'), [{ a: 'x, y', b: 'say "hi"' }]);
  assert.deepEqual(parseCsv('a,b\n'), []);
  assert.deepEqual(parseCsv('a,b\n1,\n'), [{ a: '1', b: '' }]);
});
