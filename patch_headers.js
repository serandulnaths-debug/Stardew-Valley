const fs = require('fs');
let content = fs.readFileSync('webpack.config.js', 'utf8');

content = content.replace("headers: (req, res, context) => {", "headers: (req, _res, _context) => {");

fs.writeFileSync('webpack.config.js', content);
