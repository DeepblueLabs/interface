import { Html, Head, Main, NextScript } from "next/document";
import { Footer } from "@/components/ui/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
