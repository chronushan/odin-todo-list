import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	output: {
		filename: "main.bundle.js",
		path: path.resolve(import.meta.dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
