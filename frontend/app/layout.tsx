import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "FairwayPro — Golf Equipment",
  description: "Premium golf equipment for every level of player.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://widget.primeassist.siddharth.ai/widget.js"
          data-api-key={process.env.NEXT_PUBLIC_PRIMEASSIST_KEY}
          data-agent-slug="fairway-pro-support"
          async={true}
        />
      </body>
    </html>
  );
}
