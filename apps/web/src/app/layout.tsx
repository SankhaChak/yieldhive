import "@yieldhive/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Modal from "../components/layout/modal";
import Navbar from "../components/layout/navbar";
import SandboxModeNotification from "../components/layout/sandbox/notification";
import SandboxModeSwitcher from "../components/layout/sandbox/switcher";
import NprogressProvider from "../components/providers/nprogress";
import Web3ModalProvider from "../components/providers/web3";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YieldHive | The only platform for all your yield farming needs",
  description:
    "YieldHive provides bunch of expert curated yield farming strategies, tools and analytics to help you maximize your yield farming profits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>
          <NprogressProvider>
            <main className="min-h-screen">
              <Navbar />
              {children}
            </main>
            <Modal />
            <SandboxModeNotification />
            <SandboxModeSwitcher />
          </NprogressProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
