const immutableToJsMap = new WeakMap();

export default function immutableToJs(immutable) {
  if (!immutableToJsMap.has(immutable)) {
    immutableToJsMap.set(immutable, immutable.toJS());
  }
  return immutableToJsMap.get(immutable);
};
