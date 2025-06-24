// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { fileURLToPath, URL } from "node:url";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)), // الاختصار ‎@ → src
//     },
//   },
// });


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
// import checker from "vite-plugin-checker";
// import { fileURLToPath, URL } from "node:url";

// export default defineConfig({
//   plugins: [
//     react(),

//     // 1) ESLint plugin: emit warnings, but don't fail on errors
//     eslint({
//       emitWarning: true,
//       emitError: false,
//       // files: ["src/**/*.ts", "src/**/*.tsx"],  // optionally limit to your source files
//     }),

//     // 2) TypeScript checker: disable built-in type-checking error overlay
//     checker({
//       typescript: {
//         // disables the TypeScript checker entirely (it won’t block build)
//         enable: false,
//       },
//       // you can also disable vue-ts or other checkers if you use them
//     }),
//   ],

//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });


// // vite.config.ts
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
// import checker from "vite-plugin-checker";
// import { fileURLToPath, URL } from "node:url";

// export default defineConfig({
//   plugins: [
//     react(),

//     // ESLint: تحذيرات فقط، بلا إيقاف للبناء
//     eslint({
//       emitWarning: true,
//       emitError: false,
//     }),

//     // checker: فقط ESLint، ولا يفحص TypeScript
//     checker({
//       typescript: false,
//     }),
//   ],

//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true,
      emitError: false,
    }),
    checker({
      typescript: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
