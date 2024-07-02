"use client";
import { useState, useEffect } from 'react';
import { StockInfo, UserProfile } from '@/types';
import { getStocks, getUserProfile } from '@/lib/apiUtils';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
// import withAuth from "@/page-sections/hoc/withAuth";
import StocksDashboard from '@/ui/dashboard/stocks';
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import { useGlabalState } from '@/context/GlobalStateContext';
import withAuth from '@/hoc/withAuth';
import { stocks, profile } from '@/lib/constant';

const Stocks = () => {
    const { isCollapsed, setIsCollapsed } = useGlabalState();
    const { isDarkMode, setIsDarkMode } = useGlabalState();
    const [error, setError] = useState<string | null>(null);

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


    return (
        <>
        <div className="lg:col-span-3 pt-[2rem]">
            <div className={`grid items-start gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
                <StocksDashboard isCollapsed={isCollapsed} stocks={stocks} token={token} profile={profile} />
            </div>
        </div>
    </>
    );
};

export default withAuth(Stocks);
