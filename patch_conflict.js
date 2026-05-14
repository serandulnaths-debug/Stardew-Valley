const fs = require('fs');
let content = fs.readFileSync('webpack.config.js', 'utf8');

content = content.replace(/<<<<<<< HEAD\nconst process = require\('node:process'\);\nconst \{ resolve \} = require\('path'\);\nconst glob = require\('glob'\);\nconst path = require\('path'\);\n=======\nconst path = require\('path'\);\nconst glob = require\('glob'\);\n>>>>>>> origin\/main/,
"const process = require('node:process');\nconst path = require('path');\nconst glob = require('glob');");

fs.writeFileSync('webpack.config.js', content);
