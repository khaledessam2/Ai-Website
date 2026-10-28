// Vercel serverless proxy: forwards /api/* to the gateway and sets the Origin
// header the backend uses to resolve the organization (same as proxy.conf.json).
const TARGET = 'https://gw.qa.leanacademy.me';
const ORIGIN = 'https://dsd.ksu.qa.leanacademy.me/';

module.exports = async function handler(req, res) {
  const path = String(req.query.path || '');
  const qs = new URLSearchParams(req.query);
  qs.delete('path');
  const query = qs.toString();
  const url = `${TARGET}/api/${path}${query ? `?${query}` : ''}`;

  const headers = {
    'content-type': req.headers['content-type'] || 'application/json',
    origin: ORIGIN,
  };
  for (const h of ['language', 'flag', 'authorization']) {
    if (req.headers[h]) headers[h] = req.headers[h];
  }

  const hasBody = !['GET', 'HEAD'].includes(req.method);
  const body = hasBody
    ? typeof req.body === 'string' || Buffer.isBuffer(req.body)
      ? req.body
      : JSON.stringify(req.body ?? {})
    : undefined;

  try {
    const upstream = await fetch(url, { method: req.method, headers, body });
    res.status(upstream.status);
    res.setHeader('content-type', upstream.headers.get('content-type') || 'application/json');
    res.send(Buffer.from(await upstream.arrayBuffer()));
  } catch (e) {
    res.status(502).json({ error: 'Bad gateway', detail: String(e) });
  }
};
