// Nettsiden er skjult: alle forespørsler sendes hit via vercel.json
// (og .vercelignore holder de vanlige filene utenfor deployen).
module.exports = (req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.setHeader('Cache-Control', 'no-store');
  res.end('');
};
