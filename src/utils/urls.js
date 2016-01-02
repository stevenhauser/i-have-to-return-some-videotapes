export const EDITOR_PATH = 'editor';
export const BASE_PATH = window.location.pathname
  .replace(`${EDITOR_PATH}`, '')
  .replace(/^\/+/, '')
  .replace(/\/+$/, '');
