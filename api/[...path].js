// Vercel serverless proxy: forwards /api/* to the gateway and sets the Origin
// header the backend uses to resolve the organization (same as proxy.conf.json).
const TARGET = 'https://gw.dev.leanacademy.me';
const ORIGIN = 'https://portal.dev.leanacademy.me';

export default async function handler(req, res) {
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

  const upstream = await fetch(TARGET + req.url, { method: req.method, headers, body });
  res.status(upstream.status);
  res.setHeader('content-type', upstream.headers.get('content-type') || 'application/json');
  res.send(Buffer.from(await upstream.arrayBuffer()));
}
