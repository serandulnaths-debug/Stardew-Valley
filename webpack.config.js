const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { ProvidePlugin, BannerPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

// deno-lint-ignore no-process-global
const isProd = process.env.NODE_ENV === 'production';
const isDevelopment = !isProd;

const fastRefresh = isDevelopment ? new ReactRefreshWebpackPlugin() : null;

const SANDBOX_SUFFIX = '-sandbox';

const entryObj = glob.sync('./src/widgets/**/*.tsx').reduce((obj, el) => {
  const rel = path
    .relative('src/widgets', el)
    .replace(/\.[tj]sx?$/, '')
    .replace(/\\/g, '/');

  // Prefix value with './' and correctly relativize to __dirname for Webpack
  const elPath = './' + path.relative(__dirname, el).replace(/\\/g, '/');

  obj[rel] = elPath;
  obj[`${rel}${SANDBOX_SUFFIX}`] = elPath;
  return obj;
}, {});

const validWidgetNames = Object.keys(entryObj).filter((k) => !k.includes(SANDBOX_SUFFIX));

const config = {
  mode: isProd ? 'production' : 'development',
  entry: entryObj,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`,
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2020',
          minify: false,
        },
      },
      {
        test: /\.css$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    isDevelopment
      ? undefined
      : new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
    new HtmlWebpackPlugin({
      templateContent: `
      <body></body>
      <script type="text/javascript">
      const validWidgets = ${JSON.stringify(validWidgetNames)};
      const urlSearchParams = new URLSearchParams(window.location.search);
      const widgetName = urlSearchParams.get("widgetName");

      if (!widgetName) {
        document.body.textContent += "Widget ID not specified.";
      } else if (!validWidgets.includes(widgetName)) {
        document.body.textContent += "Invalid Widget ID.";
      } else {
        const s = document.createElement('script');
        s.type = "module";
        s.src = widgetName + "${SANDBOX_SUFFIX}.js";
        document.body.appendChild(s);
      }
      </script>
    `,
      filename: 'index.html',
      inject: false,
    }),
    new ProvidePlugin({
      React: 'react',
      reactDOM: 'react-dom',
    }),
    new BannerPlugin({
      banner: (file) => {
        return !file.chunk.name.includes(SANDBOX_SUFFIX) ? 'const IMPORT_META=import.meta;' : '';
      },
      raw: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '' },
        { from: 'README.md', to: '' },
      ],
    }),
    fastRefresh,
  ].filter(Boolean),
};

if (isProd) {
  config.optimization = {
    minimize: isProd,
    minimizer: [new ESBuildMinifyPlugin()],
  };
} else {
  // for more information, see https://webpack.js.org/configuration/dev-server
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    watchFiles: ['src/*'],
    headers: (req, _res, _context) => {
      const allowedOrigins = [
        'https://www.remnote.com',
        'https://remnote.com',
        'https://remnote.io',
      ];
      const origin = req.headers.origin;
      const headers = {
        'Access-Control-Allow-Headers': 'baggage, sentry-trace',
      };

      let isAllowed = false;
      if (allowedOrigins.includes(origin)) {
        isAllowed = true;
      } else if (origin) {
        try {
          const url = new URL(origin);
          if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
            isAllowed = true;
          }
        } catch (_e) {
          // ignore invalid URLs
        }
      }

      if (isAllowed) {
        headers['Access-Control-Allow-Origin'] = origin;
        headers['Vary'] = 'Origin';
      }

      return headers;
    },
  };
}

module.exports = config;
