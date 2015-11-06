import { createEntity } from 'state/definitions/entities';

const splitter = /\s+\|?\s*/;

export function parseGrounds(data) {
  return data.map((r) => r.split(splitter));
};

export function parseEntities(data) {
  return data
    .map((r) => r.split(splitter))
    .map((r) => r.map(createEntity));
};
