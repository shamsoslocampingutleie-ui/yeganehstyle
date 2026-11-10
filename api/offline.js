// Midlertidig stengt: alle forespørsler sendes hit via vercel.json.
// 503 + Retry-After forteller søkemotorer at nedetiden er midlertidig.
module.exports = (req, res) => {
  res.statusCode = 503;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Retry-After', '86400');
  res.setHeader('Cache-Control', 'no-store');
  res.end(`<!doctype html>
<html lang="no">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Yeganeh Style – midlertidig stengt</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
       font-family:system-ui,-apple-system,sans-serif;background:#faf7f4;color:#2b2522;text-align:center;padding:16px}
  h1{font-size:1.6rem;margin:0 0 .5rem}
  p{margin:0;color:#6b605a}
</style>
</head>
<body>
<main>
  <h1>Yeganeh Style</h1>
  <p>Nettsiden er midlertidig stengt.</p>
</main>
</body>
</html>`);
};
