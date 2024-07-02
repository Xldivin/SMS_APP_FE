"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { StockInfo, UserProfile } from '@/types';
import { getStockById, getUserProfile } from '@/lib/apiUtils';
import Cookies from 'js-cookie';
import withAuth from '@/hoc/withAuth';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import StockDashboard from '@/ui/dashboard/stocks/OneBlog';
import { useGlabalState } from '@/context/GlobalStateContext';
import { usePathname } from 'next/navigation';

const StockDetail = ({ params }: { params: { id: string } }) => {
  const { isCollapsed, setIsCollapsed } = useGlabalState();
  const { isDarkMode, setIsDarkMode } = useGlabalState();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stock, setStock] = useState<StockInfo | null>(null);
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

  useEffect(() => {
    const fetchOneStock = async () => {
      const token = Cookies.get('accessToken');
      try {
        if (params?.id) {
          const stockdata = await getStockById(params?.id, token);
          setStock(stockdata);
        }
      } catch (err) {
        console.log(err)
        setError('Failed to fetch profile data');
        toast.error('Failed to fetch profile data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchOneStock();
  }, [params?.id]);

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
            <div className="lg:col-span-3">
              <div className={`grid items-start gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
                <StockDashboard stockdata={stock} isCollapsed={isCollapsed} />
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default withAuth(StockDetail);
