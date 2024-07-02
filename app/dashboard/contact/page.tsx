"use client";
import { useState, useEffect } from 'react';
import { StockInfo, UserProfile } from '@/types';
import { getStocks, getUserProfile, getWatchlistsStocks } from '@/lib/apiUtils';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import withAuth from '@/hoc/withAuth';
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import { useGlabalState } from '@/context/GlobalStateContext';
import ContactForm from '@/ui/dashboard/contact';

const Contact = () => {
  const { isCollapsed, setIsCollapsed } = useGlabalState();
  const { isDarkMode, setIsDarkMode } = useGlabalState();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [watchlistStocks, setWatchlistStocks] = useState<StockInfo[]>([]);
  const [stocks, setStocks] = useState<StockInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');

      return () => {
        document.documentElement.classList.remove('light');
      };
    }
  }, [isDarkMode]);

  const token = Cookies.get('accessToken');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(token);
        const stocks = await getStocks(token)
        const stockwatchlistdata = await getWatchlistsStocks(token);
        if (data && stockwatchlistdata) {
          setProfile(data);
          setStocks(stocks);
          setWatchlistStocks(stockwatchlistdata);
        }
      } catch (err) {
        setError('Failed to fetch profile data');
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);


  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ fontFamily: "Inter", fontSize: "16px" }}
      />
        {isLoading ? (
          <div className="lg:col-span-3 flex justify-center items-center">
            <Loader showText />
          </div>
        ) : (
          <>
            <div className="lg:col-span-3 pt-[2rem]">
              <div className={`grid items-start gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
                <ContactForm />
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default withAuth(Contact);
