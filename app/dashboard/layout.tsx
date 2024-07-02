"use client";
import { ReactNode, useEffect } from 'react';
import { UserProfile } from '@/types';
import Header from '@/ui/dashboard/header/header';
import Sidebar from '@/ui/dashboard/sidebar/sidebar';
import { useGlabalState } from '@/context/GlobalStateContext';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
  children: ReactNode;
  isCollapsed: boolean;
  toggleNavbar: () => void;
  profile: UserProfile | null;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Layout = ({ children, profile, isDarkMode, toggleDarkMode }: LayoutProps) => {

  const { isCollapsed, setIsCollapsed } = useGlabalState();
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ fontFamily: "Inter", fontSize: "16px" }}
      />
      <div className={`grid min-h-screen w-full ${isCollapsed ? 'md:grid-cols-[60px_1fr]' : 'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'}`}>
        <Sidebar isCollapsed={isCollapsed} toggleNavbar={toggleNavbar} profile={profile} />
        <div className="flex flex-col font-custom">
          <Header/>
          <main className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 dark:bg-[#000] lg:grid-cols-3 xl:grid-cols-3">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
