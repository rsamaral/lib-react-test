import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import fs from "fs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
const packageJson = JSON.parse(fs.readFileSync("./package.json", 'utf8'));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: false,
        extract: 'styles.css', // Extract CSS to 'styles.css'
        minimize: true,
      }),
      copy({
        targets: [
            // Need to copy the files over for usage
            { src: "src/fonts", dest: "dist/assets" },
        ],
    }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/], // Ensure CSS files are externalized for type definitions
  },
];
