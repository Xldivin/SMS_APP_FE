"use client";
import { useState, useEffect } from 'react';
import { StockInfo, UserProfile } from '@/types';
import { getBlogs, getUserProfile, getWatchlistsStocks } from '@/lib/apiUtils';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import withAuth from '@/hoc/withAuth';
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import { useGlabalState } from '@/context/GlobalStateContext';
import Community from '@/ui/dashboard/community';
import { blogs, profile } from '@/lib/constant';

const Blog = () => {
  const { isCollapsed, setIsCollapsed } = useGlabalState();
  const { isDarkMode, setIsDarkMode } = useGlabalState();
  const [stocks, setStocks] = useState<StockInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');

      return () => {
        document.documentElement.classList.remove('light');
      };
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const token = Cookies.get('accessToken');

  console.log(blogs);
  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ fontFamily: "Inter", fontSize: "16px" }}
      />
      <>
        <div className="lg:col-span-3 pt-[2rem]">
          <div className={`grid items-start  gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
            <Community isCollapsed={isCollapsed} profile={profile} blogs={blogs} />
          </div>
        </div>
      </>
    </>
  );
};

export default withAuth(Blog);
