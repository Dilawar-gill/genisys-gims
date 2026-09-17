import { useEffect } from 'react';

export function useSEO({ title, description, ogTitle, ogDescription, ogUrl }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:url', ogUrl, true);
    setMeta('og:type', 'website', true);
  }, [title, description, ogTitle, ogDescription, ogUrl]);
}
