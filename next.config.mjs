/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Horodatage du build, affiché en pied de page (« version du carnet »)
    NEXT_PUBLIC_VERSION: new Date().toISOString(),
  },
  async headers() {
    return [
      {
        // Le service worker doit toujours être revérifié par le navigateur
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
