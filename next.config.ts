import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            // ...existing patterns...
            {
                protocol: "https",
                hostname: "avsjbrjtuugypafyzbju.supabase.co",
            },
        ],
    },
};

export default nextConfig;
