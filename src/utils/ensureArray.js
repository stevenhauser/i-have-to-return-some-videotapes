export default function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
};
