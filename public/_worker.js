export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/forum') {
      const rewritten = new Request(new URL('/index.html', url), request);
      return env.ASSETS.fetch(rewritten);
    }
    return env.ASSETS.fetch(request);
  },
};
