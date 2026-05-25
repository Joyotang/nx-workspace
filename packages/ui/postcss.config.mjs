import tailwindcss from "@tailwindcss/postcss";
import postcssOklabFunction from "@csstools/postcss-oklab-function";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    tailwindcss(),
    postcssOklabFunction({
      preserve: true,
    }),
  ],
};

export default config;
