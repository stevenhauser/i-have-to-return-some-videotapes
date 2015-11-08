// TODO: ensure this gets GC'd
export function createSound(name) {
  return new Audio(`assets/${name}.mp3`);
};

export function playSound(name) {
  createSound(name).play();
}
