// External links open in a new tab; internal and mailto links do not.
export const ext = (href?: string) => (/^https?:/.test(href ?? '') ? { target: '_blank', rel: 'noopener noreferrer' } : {});
