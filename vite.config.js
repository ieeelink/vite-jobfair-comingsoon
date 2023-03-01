import { resolve } from "path";
export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
      "~fontawesome": resolve(__dirname, "node_modules/@fortawesome"),
    },
  },
  plugins: [
    // VitePluginFonts({
    //   google: {
    //     families: [
    //       {
    //         name: "Open Sans",
    //         styles: "wght@400;500;600,700,800",
    //         defer: true,
    //       },
    //     ],
    //   },
    // }),
  ],
  server: {
    port: 3000,
    hot: true,
  },
};
