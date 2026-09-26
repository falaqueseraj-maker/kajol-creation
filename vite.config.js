import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],

  appType: "mpa",

  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        customerLogin: resolve(root, "customer-login.html"),
        sellerLogin: resolve(root, "seller-login.html"),
        admin: resolve(root, "admin.html"),
      },
    },
  },
});