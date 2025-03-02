import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(vue-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
	input: "src/vue.js",
	output: [
		{ file: "vue/index.mjs", format: "esm" },
		{ file: "vue/index.js", format: "umd", name },
	],
	plugins: [vue(), commonjs()],
};
