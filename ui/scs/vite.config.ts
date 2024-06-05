import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __NODE_ENV__: JSON.stringify(env.NODE_ENV),
    },
    envDir: "./environments",
    envPrefix: "SCS_",
    plugins: [react(), EnvironmentPlugin('all')],
    server: { watch: { usePolling: true } },
  };
});
