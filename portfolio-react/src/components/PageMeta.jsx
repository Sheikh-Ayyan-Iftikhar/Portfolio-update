import { useEffect } from 'react';

/**
 * Applies per-route document metadata.
 *
 * The initial values live in `index.html` (so the first paint, crawlers and
 * social scrapers all get them without JS); this keeps them correct after a
 * client-side navigation, which crawlers aside is what a visitor sees in the
 * tab and the share menu.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
