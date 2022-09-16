import links from "../links.json";

export interface Link {
  title: string;
  url: string;
}

export function getLink(id: number): Link | null {
  return links[id] || null;
}

export function getLinkCount(): number {
  return links.length;
}
