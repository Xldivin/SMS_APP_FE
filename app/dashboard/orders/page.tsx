"use client";
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types';
import { getOrdersMe, getUserProfile } from '@/lib/apiUtils';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import withAuth from '@/hoc/withAuth';
import { ToastContainer, toast } from "react-toastify";
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import { useGlabalState } from '@/context/GlobalStateContext';
import OrdersPage from '@/ui/dashboard/orders';

const Orders = () => {
  const { isCollapsed, setIsCollapsed } = useGlabalState();
  const { isDarkMode, setIsDarkMode } = useGlabalState();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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
        const orders = await getOrdersMe(token);
        if (data && orders) {
          setProfile(data);
          setOrders(orders);
        }
      } catch (err) {
        setError('Failed to fetch profile data');
        toast.error(error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
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
            <div className="lg:col-span-3">
              <div className={`grid items-start gap-4 md:gap-6 2xl:w-full 2xl:flex 2xl:justify-center`}>
                <OrdersPage isCollapsed={isCollapsed} profile={profile} orders={orders} token={token} />
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default withAuth(Orders);
