/*
 * @Author: randy randy7100@outlook.com
 * @Date: 2022-10-06 00:57:03
 * @LastEditors: randy randy7100@outlook.com
 * @LastEditTime: 2022-10-07 16:32:19
 * @FilePath: \webpack.config.js
 * @Description:
 * Copyright (c) 2022 by randy randy7100@outlook.com, All Rights Reserved.
 */

import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: "./src/index.ts",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  devtool: "inline-source-map",
};
