// SET UP OUR DEPENDENTS AND DEPENDENCES WHICH WILL TRANSPILE ALL OUR FILES
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');



module.exports = (env) => {
  // console.log('/n The process is: ', process);
  // console.log('/n The ENV of the process is: ', process.ENV);
  // const { NODE_ENV } = process.env;
  // console.log('/n The NODE_ENV is: ', NODE_ENV);
  return {
  // string that is 'production' or 'development'; usually controlled through NODE_ENV environment
  // mode: process.env.NODE_ENV, // if this doesn't work try 'production'
  mode: 'production',
  // the file that serves as the entry point of your app's dependency graph; can be string || obj
  entry: './src/index.js',

  output: {
    // the name of the bundled file that webpack creates, defaults to 'main.js'
    filename: 'bundle.js',
    // abosolute path to the directory where the bundled js file will be put
    path: path.resolve(__dirname, './build')
  },
  // enables the use of a development server that bundles your app and serves it from memory
  // devServer: {
  //   static: {
  //     // the route to where the bundled files will be available in the browser on the dev server
  //     // publicPath: '/build'
  //     directory: path.resolve(__dirname, 'build')
  //   },
  //   proxy: {
  //     '/api': 'http://localhost:3000'
  //   }
  // },


 
  
  // obj that sets the options that control how different types of modules in the project are converted
  module: {
    // the rules for which loaders to apply to which files AND in what order
    // Loaders are the transpilers (convert modern code to code that is readable by the browser)
    rules: [
      {
        // condition (usually regex) to match files or directories you want to target
        test: /\.jsx?/, // /\.(js|jsx)$/,
        // more regex or directories you want to exclude
        exclude: /node_modules/,
        // name of a Loader that was installed as a npm package
        loader: 'babel-loader',
        // customize the behavior of the Loader with this options object
        options: {
          //  presets are the array of strings that correspond to installed presets that alter the behavior of the Loader
          presets: [`@babel/preset-env`, `@babel/preset-react`]
          // vs. ['env', 'react'] for the babel-loader 7.x | babel 6.x
        }
      },
      {
        // different syntax for a different rule
        // this rule is for styling
        // if this gives me any trouble, try removing s before [ac] => it was and i did and it worked!
        // with as 's' before [ac] it's checking for a scss file. So i uncommented out the sass-loader since i'm just using css files
        test: /\.[ac]ss$/i, 
        exclude: /node_modules/,
        // we have multiple loaders, so much include this 'use' array; above only one loader so it may be omitted
        use: [
          'style-loader',
          'css-loader',
          // 'sass-loader' // when present and only using css files, it triggers an error
        ],
      }
    ]
  },
  plugins: [
    // i'm not sure the htmlplugin below is necessary, because I link to the bundle in index.html
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {    // Azzie's guided solution
    port: 8080,
    host: 'localhost',
    proxy: {
      '/': {
      target: 'http://localhost:8080/', // target: local host 8080
      router: () => 'http://localhost:3000', // router: 3000 // sends requests
      secure: false,
      changeOrigin: true
        }
      }
    }
  }
};


// devServer: {
//   static: {
//     directory: path.resolve(__dirname, "dist"),      
//   },
//   devMiddleware: {
//     publicPath: "/",
//   }
// },