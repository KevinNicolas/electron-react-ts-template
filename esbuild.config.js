const esbuild = require("esbuild");

esbuild.build({
  outfile: "./build/scripts/main.js",
  sourcemap: true,
  bundle: true,
  jsx: "automatic",
  tsconfig: "./tsconfig.json",
  entryPoints: ["./src/main.tsx"],
  loader: {
    ".js": "jsx",
    ".ts": "tsx",
  },
});
