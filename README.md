# Redux Basics 

### Project Setup commands 
```
 npm init 
```
```
 npm install -D webpack webpack-cli webpack-dev-server
```
```
 touch webpack.config.js 
```
```
 And create scr/index.js & dist/index.html files
```
```
git init for github initialization 
```
```
 npm install redux@4.0
```
<hr/> 

### content for webpack.config.js

```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development"
};
````

