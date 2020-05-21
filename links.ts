import links from './links.json';

export interface Link {
  title: string;
  url: string;
}

export function getLink(id: number) {
  return links[id] || null;
}

export function getLinkCount() {
  return links.length;
}
