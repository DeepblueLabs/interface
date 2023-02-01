import { Html, Head, Main, NextScript } from "next/document";
import { Footer } from "@/components/ui/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <body className="bg-background">
          <Main />
          <NextScript />
        </body>
      </div>
    </Html>
  );
}
