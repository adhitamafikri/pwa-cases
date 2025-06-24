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
        registerType: "autoUpdate",
        injectRegister: "auto",
        devOptions: {
          enabled: process.env.NODE_ENV === "development",
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
        manifest: {
          id: 'https://vite-pwa.localhost:5173',
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
        key: "./certificates/vite-pwa.localhost-key.pem",
        cert: "./certificates/vite-pwa.localhost.pem",
      },
    },
  };
});
