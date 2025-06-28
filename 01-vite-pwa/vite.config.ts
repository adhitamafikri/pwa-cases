import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      VitePWA({
        strategies: "generateSW",
        registerType: "prompt",
        injectRegister: false,
        devOptions: {
          enabled: process.env.NODE_ENV === "development",
          navigateFallback: "index.html",
          suppressWarnings: false,
          type: "classic",
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          sourcemap: true,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
        },
        manifest: {
          id: "https://vite-pwa.localhost:5173",
          name: "Vite PWA App",
          short_name: "VitePWA",
          description: "An example of PWA built with Vite",
          theme_color: "#a9dfbf",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    server: {
      host: env.VITE_APP_HOST || "localhost",
      port: env.VITE_APP_PORT ? Number(env.VITE_APP_PORT) : 3000,
      https: {
        key: env.APP_CERT_KEY_PATH,
        cert: env.APP_CERT_PATH,
      },
    },
  };
});
