importScripts("https://cdn.jsdelivr.net/npm/xterm-pty@0.9.3/workerTools.js");

onmessage = (msg) => {
  importScripts(location.origin + "/gap-web-demo/gap.js");

  emscriptenHack(new TtyClient(msg.data));
};
