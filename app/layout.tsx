"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeStore, persistor } from "@/store";
import logo from '../public/logo symbol-01 3.svg'

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Tuesday Dashboard",
  description: "Tuesday Customer Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = initializeStore();
  return (
    <html lang="en">
      <link href="https://fonts.cdnfonts.com/css/lufga" rel="stylesheet" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalStateProvider>
              <ToastContainer
                position="top-right"
                style={{ fontFamily: "Inter", fontSize: "16px" }}
              />
              {children}
            </GlobalStateProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
