/* @ds-bundle: {"format":4,"namespace":"CoralStudio","components":[{"name":"Button"},{"name":"TopicChip"},{"name":"ThemeToggle"},{"name":"SiteHeader"},{"name":"SiteFooter"},{"name":"Hero"},{"name":"MediaFeature"},{"name":"TalkCard"},{"name":"LearningPathCard"},{"name":"ProjectCard"},{"name":"ArticleCard"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function ext(href) { return /^https?:/.test(href || '') ? { target: '_blank', rel: 'noopener noreferrer' } : {}; }
  function Arrow() {
    return h('svg', { className: 'cs-ico cs-arrow', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
      h('path', { d: 'M5 12h14M13 6l6 6-6 6' }));
  }

  function Button(p) {
    var cls = cx('cs-btn', 'cs-btn-' + (p.variant || 'primary'), p.className);
    var kids = [p.children, p.arrow ? h(Arrow, { key: 'a' }) : null];
    if (p.href) return h('a', Object.assign({ className: cls, href: p.href }, ext(p.href)), kids);
    return h('button', { type: p.type || 'button', className: cls, onClick: p.onClick, disabled: p.disabled }, kids);
  }

  function TopicChip(p) {
    return h('button', { type: 'button', className: cx('cs-chip', p.selected && 'is-selected'), 'aria-pressed': !!p.selected, onClick: p.onClick }, p.children);
  }

  function ThemeToggle(p) {
    var init = p.theme || document.documentElement.getAttribute('data-theme') || 'dark';
    var st = React.useState(init), theme = p.theme || st[0];
    function flip() {
      var next = theme === 'dark' ? 'light' : 'dark';
      if (p.onChange) p.onChange(next); else document.documentElement.setAttribute('data-theme', next);
      st[1](next);
    }
    var dark = theme === 'dark';
    return h('button', { type: 'button', className: 'cs-theme', onClick: flip, 'aria-label': dark ? 'Switch to light theme' : 'Switch to dark theme' },
      h('svg', { className: 'cs-ico', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
        dark ? h('path', { d: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' })
             : h('g', null, h('circle', { cx: 12, cy: 12, r: 4 }), h('path', { d: 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' }))));
  }

  var NAV = ['Watch', 'Speaking', 'Learn', 'Writing', 'Projects', 'About'];
  function SiteHeader(p) {
    var items = p.links || NAV.map(function (l) { return { label: l, href: '/' + l.toLowerCase() }; });
    var nav = items.map(function (l) {
      return h('a', { key: l.label, href: l.href, className: 'cs-nav-link', 'aria-current': p.current === l.label ? 'page' : undefined }, l.label);
    });
    return h('header', { className: 'cs-header' },
      h('a', { className: 'cs-wordmark', href: '/' }, 'Ajay Kumar'),
      h('nav', { className: 'cs-nav', 'aria-label': 'Primary' }, nav),
      h('div', { className: 'cs-header-end' },
        h(ThemeToggle, { theme: p.theme, onChange: p.onThemeChange }),
        h(Button, { href: p.contactHref || '/contact', variant: 'primary', className: 'cs-contact' }, 'Contact'),
        h('details', { className: 'cs-menu' },
          h('summary', { 'aria-label': 'Menu' }, h('svg', { className: 'cs-ico', viewBox: '0 0 24 24', 'aria-hidden': 'true' }, h('path', { d: 'M4 7h16M4 12h16M4 17h16' }))),
          h('nav', { className: 'cs-menu-panel', 'aria-label': 'Primary' }, nav, h('a', { href: p.contactHref || '/contact', className: 'cs-nav-link' }, 'Contact')))));
  }

  var SOCIAL = [
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCyV2fy32RyPgOco83tMkR-g' },
    { label: 'GitHub', href: 'https://github.com/ProjectAJ14' },
    { label: 'Medium', href: 'https://medium.com/@ajay.kumar_14' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajaykumar2114/' },
    { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/2868455/ajay-kumar' }
  ];
  function SiteFooter(p) {
    var links = p.links || SOCIAL;
    return h('footer', { className: 'cs-footer' },
      h('div', { className: 'cs-footer-main' },
        h('span', { className: 'cs-wordmark' }, 'Ajay Kumar'),
        h('p', { className: 'cs-muted' }, p.tagline || 'Engineer, builder, and teacher.')),
      h('nav', { className: 'cs-footer-links', 'aria-label': 'Elsewhere' },
        links.map(function (l) { return h('a', Object.assign({ key: l.label, href: l.href }, ext(l.href)), l.label); }),
        h('a', { href: p.contactHref || '/contact' }, 'Contact')),
      h(ThemeToggle, { theme: p.theme, onChange: p.onThemeChange }));
  }

  function Hero(p) {
    var t = p.title || '', w = p.accentWord, i = w ? t.indexOf(w) : -1;
    var title = i < 0 ? t : [t.slice(0, i), h('em', { key: 'w', className: 'cs-accent-word' }, w), t.slice(i + w.length)];
    // The backdrop is a night scene: over it the hero keeps Studio (dark) colors in both themes.
    return h('section', { className: 'cs-hero', 'data-theme': p.backdropSrc ? 'dark' : undefined, style: p.backdropSrc ? { backgroundImage: 'url("' + p.backdropSrc + '")' } : undefined },
      h('div', { className: 'cs-hero-copy' },
        p.eyebrow ? h('p', { className: 'cs-eyebrow' }, p.eyebrow) : null,
        h('h1', { className: 'cs-hero-title' }, title),
        p.lede ? h('p', { className: 'cs-hero-lede' }, p.lede) : null,
        h('div', { className: 'cs-hero-actions' },
          p.primary ? h(Button, { href: p.primary.href, variant: 'primary' }, p.primary.label) : null,
          p.secondary ? h(Button, { href: p.secondary.href, variant: 'secondary' }, p.secondary.label) : null),
        h('span', { className: 'cs-cue', 'aria-hidden': 'true' })),
      h('div', { className: 'cs-hero-art' },
        h('div', { className: 'cs-hero-light', 'aria-hidden': 'true' }),
        p.avatarSrc ? h('img', { className: 'cs-hero-avatar', src: p.avatarSrc, alt: p.avatarAlt || 'Illustration of Ajay Kumar smiling in a coral-orange shirt and pointing left.' }) : null,
        p.propSrc ? h('img', { className: 'cs-hero-prop', src: p.propSrc, alt: '' }) : null));
  }

  function MediaFeature(p) {
    if (!p.href) return null; // real or absent: no destination, no card
    return h('a', Object.assign({ className: 'cs-card cs-media', href: p.href }, ext(p.href)),
      p.thumbnailSrc
        ? h('div', { className: 'cs-media-thumb' },
            h('img', { src: p.thumbnailSrc, alt: p.thumbnailAlt || '' }),
            h('span', { className: 'cs-play', 'aria-hidden': 'true' }, h('svg', { viewBox: '0 0 24 24' }, h('path', { d: 'M8 5v14l11-7z' }))))
        : null,
      h('div', { className: 'cs-media-body' },
        h('p', { className: 'cs-meta' }, [p.topic, p.duration].filter(Boolean).join(' · ')),
        h('h3', { className: 'cs-card-title' }, p.title),
        p.summary ? h('p', { className: 'cs-muted' }, p.summary) : null,
        h('span', { className: 'cs-link' }, p.cta || 'Watch on YouTube', h(Arrow))),
      p.propSrc ? h('img', { className: 'cs-media-prop', src: p.propSrc, alt: '' }) : null);
  }

  function TalkCard(p) {
    var actions = [
      p.recordingUrl ? h('a', Object.assign({ key: 'r', className: 'cs-link', href: p.recordingUrl }, ext(p.recordingUrl)), 'Watch recording', h(Arrow)) : null,
      p.slidesUrl ? h('a', Object.assign({ key: 's', className: 'cs-link', href: p.slidesUrl }, ext(p.slidesUrl)), 'View slides', h(Arrow)) : null
    ].filter(Boolean);
    return h('article', { className: 'cs-card cs-talk', tabIndex: actions.length ? undefined : 0 },
      h('div', { className: 'cs-talk-head' },
        h('span', { className: 'cs-tag' }, p.topic),
        h('span', { className: 'cs-wave', 'aria-hidden': 'true' }, h('i'), h('i'), h('i'))),
      h('h3', { className: 'cs-card-title' }, p.title),
      (p.event || p.date) ? h('p', { className: 'cs-meta' }, [p.event, p.date].filter(Boolean).join(' · ')) : null,
      actions.length ? h('div', { className: 'cs-actions' }, actions) : null);
  }

  function LearningPathCard(p) {
    return h('article', { className: 'cs-card cs-path' },
      p.index != null ? h('span', { className: 'cs-chapter' }, String(p.index).padStart(2, '0')) : null,
      h('h3', { className: 'cs-card-title' }, p.title),
      p.summary ? h('p', { className: 'cs-muted' }, p.summary) : null,
      p.lessons && p.lessons.length ? h('ul', { className: 'cs-lessons' }, p.lessons.map(function (l) {
        return h('li', { key: l.href }, h('a', Object.assign({ href: l.href }, ext(l.href)),
          l.kind ? h('span', { className: 'cs-tag' }, l.kind) : null, h('span', null, l.title), h(Arrow)));
      })) : null);
  }

  function ProjectCard(p) {
    var L = p.links || {};
    var links = [['demo', 'Demo'], ['docs', 'Docs'], ['source', 'Source']].filter(function (k) { return L[k[0]]; })
      .map(function (k) { return h('a', Object.assign({ key: k[0], className: 'cs-link', href: L[k[0]] }, ext(L[k[0]])), k[1], h(Arrow)); });
    return h('article', { className: 'cs-card cs-project' },
      h('div', { className: 'cs-project-head' },
        h('h3', { className: 'cs-card-title' }, p.name),
        p.role ? h('span', { className: 'cs-role' }, p.role) : null),
      p.problem ? h('p', null, p.problem) : null,
      p.outcome ? h('p', { className: 'cs-muted' }, p.outcome) : null,
      p.tags && p.tags.length ? h('p', { className: 'cs-stack' }, p.tags.join(' · ')) : null,
      links.length ? h('div', { className: 'cs-actions' }, links) : null);
  }

  function ArticleCard(p) {
    return h('a', Object.assign({ className: 'cs-card cs-article', href: p.href }, ext(p.href)),
      h('p', { className: 'cs-meta' }, [p.topic, p.date].filter(Boolean).join(' · ')),
      h('h3', { className: 'cs-card-title' }, h('span', { className: 'cs-underline' }, p.title)),
      h('span', { className: 'cs-link' }, 'Read on ' + (p.source || 'Medium'), h(Arrow)));
  }

  window.CoralStudio = Object.assign(window.CoralStudio || {}, {
    Button: Button, TopicChip: TopicChip, ThemeToggle: ThemeToggle, SiteHeader: SiteHeader, SiteFooter: SiteFooter,
    Hero: Hero, MediaFeature: MediaFeature, TalkCard: TalkCard, LearningPathCard: LearningPathCard,
    ProjectCard: ProjectCard, ArticleCard: ArticleCard
  });
})();
