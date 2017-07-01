// import 'webpack';

// import some modules by regex match
const context = require.context('./test', true, /\.spec.js$/);
context.keys().forEach(context);
