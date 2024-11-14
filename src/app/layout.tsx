import "normalize.css";
import "@/styles/globals.css"
import type { Metadata } from "next";
import StyledJsxRegistry from './registry'

export const metadata: Metadata = {
  title: "住梦AI",
  description: "用AI设计梦想的居住空间",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh-Hans">
      {/* 设置 height:'100vh' 是为了让 Masonry 能够实现虚拟列表 */}
      {/* style={{height:'100vh'}} */}
      <body id="root" lv-theme-version="2.0" lv-theme="dark" style={{height:'100vh'}}>
        <StyledJsxRegistry>
            {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
