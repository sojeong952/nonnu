import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "NONNU",
  description: "여행지 리얼 후기 앱 논누",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <header>
          Header
        </header>
        <main>{children}</main>
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}
