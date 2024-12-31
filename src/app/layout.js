// import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/assets/fonts/icomoon/style.css";
import Header from "@/components/header/Header";
import Path from "@/components/Path";
import Footer from "@/components/footer/Footer";
import { WalletProvider } from "@/context/WalletProvider";
import TokenProvider from "@/context/TokenProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OriginsProvider } from "@/context/OriginsProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Egg Market",
  description: "Egg Market Shop",
};

export default function RootLayout({ children }) {
  return (
    <html
      className="max-w-[440px] mx-auto border-solid border-l-[1px] border-r-[1px] border-default-400 bg-[#F5F5F5]"
      lang="fa"
      dir="rtl"
    >
      <body className={`relative font-[vazir] overflow-x-hidden`}>
        <TokenProvider>
          <WalletProvider>
            <OriginsProvider>
            {children}
            </OriginsProvider>
          </WalletProvider>
        </TokenProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
