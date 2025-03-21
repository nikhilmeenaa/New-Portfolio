import type { Metadata } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import { StoreWrapper } from "@/src/contexts/rootContext";
import "../src/styles/font.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/src/themes/antdTheme";
import Navbar from "@/src/components/navbar/Navbar";
import IntroNavigation from "@/src/components/introNavigation/introNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="enUS">
      <StoreWrapper>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <body>
              <div className="appWindow">
                <Navbar />
                <div>{children}</div>
              </div>
              <IntroNavigation />
            </body>
          </ConfigProvider>
        </AntdRegistry>
      </StoreWrapper>
    </html>
  );
}
