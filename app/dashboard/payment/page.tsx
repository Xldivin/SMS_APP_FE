"use client";
import { useState, useEffect } from 'react';
import { StockInfo, UserProfile } from '@/types';
import { getOrders, getStocks, getUserProfile } from '@/lib/apiUtils';
import Cookies from 'js-cookie';
// import withAuth from "@/page-sections/hoc/withAuth";
import { toast } from "react-toastify";
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import { useGlabalState } from '@/context/GlobalStateContext';
import { ToastContainer } from "react-toastify";
import PaymentDashboard from '@/ui/dashboard/payment';
import withAuth from '@/hoc/withAuth';
import { profile } from '@/lib/constant';

const Payment = () => {
    const { isCollapsed, setIsCollapsed } = useGlabalState();
    const { isDarkMode, setIsDarkMode } = useGlabalState();
    const [stocks, setStocks] = useState<StockInfo[]>([]);
    const [orders, setOrders] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const token = Cookies.get('accessToken');

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

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const orders = await getOrders(token);
                const stockdata = await getStocks(token);
                if (stockdata && orders) {
                    setStocks(stockdata);
                    setOrders(orders);
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
                    <div className="lg:col-span-3">
                        <div className={`grid items-start gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
                            <PaymentDashboard profile={profile} token={token} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default withAuth(Payment);
