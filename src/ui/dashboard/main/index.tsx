import React, { useEffect, useState } from 'react';
import { Card, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import BarChart from '../graphs/BarChart';
import LineChart from '../graphs/LineChartDays';
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus, Settings } from 'lucide-react';
import { TiArrowSortedUp } from "react-icons/ti";
import LineChartMonths from '../graphs/LineChartMonths';
import LineChartYears from '../graphs/LineChartYears';
import { ArrowDownUp } from 'lucide-react';
import { deleteWatchlist, fetchData, fetchGrowthData, fetchPortfolio, fetchWatchlist, getOrdersMe, getStocks, getUserProfile, sendWatchlist } from '@/lib/apiUtils';
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { truncateNumber } from '@/lib/utils';
import BuySellForm from '../modals/BuySellForm';
import BuySellCard from './BuySellCard';
import { StockInfo, UserProfile } from '@/types';
import { ToastContainer, toast } from "react-toastify";
import { profile, stocks, orders, portfolioStocks, stockTable, graphData } from '@/lib/constant';
import Products from '../products';

const MainDashboard = ({ isCollapsed, token }: any) => {
    const [stocksTable, setstocksTable] = useState([]);
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
    const [month1, setMonth1] = useState('');
    const [month2, setMonth2] = useState('');
    const [tab, setTab] = useState('week');
    const [data, setData] = useState(null);
    const [watchlist, setWatchlist] = useState<any>([]);
    const [buySellModal, setIsBuySellModal] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ]

    const getMovementIcon = (movement: any) => {
        switch (movement) {
            case "up":
                return <TiArrowSortedUp className="relative w-3 h-3 top-1 text-green-500" />;
            case "down":
                return <TiArrowSortedDown className="relative w-3 h-3 top-1 text-red-500" />;
            case "constant":
            default:
                return <TiArrowSortedUp className="relative w-3 h-3 top-1 text-gray-500" />;
        }
    };
    const getTextColor = (movement: any) => {
        switch (movement) {
            case "up":
                return "text-green-500";
            case "down":
                return "text-red-500";
            case "constant":
            default:
                return "text-gray-500";
        }
    };

    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' }
    ];

    const options2 = Array.from({ length: 100 }, (_, index) => {
        const year = new Date().getFullYear() - index;
        return { value: year, label: year };
    });

    const handleChange = (event: any, setState: any) => {
        const selectedValue = event.target.value;
        setState(selectedValue);
        console.log({
            year1,
            month1,
            year2,
            month2,
        });
    };

    const openModal = (asset: any) => {
        setSelectedAsset(asset);
        setIsBuySellModal(true);
    };

    const closeModal = () => {
        setIsBuySellModal(false);
        setSelectedAsset(null);
    };

    useEffect(() => {
        const fetchDataForTab = async () => {
            const growthData = await fetchGrowthData(tab, token);
            console.log(growthData);
            setData(growthData);
        };

        fetchDataForTab();
    }, [tab, token]);

    useEffect(() => {
        const getWatchlist = async () => {
            try {
                const watchlistData = await fetchWatchlist(token);
                setWatchlist(watchlistData);
            } catch (error) {
                console.error('Error fetching watchlist:', error);
            }
        };

        getWatchlist();
    }, [token]);

    const handleBookmarkClick = async (stockId: any) => {
        const watchlistItem = watchlist.find((item: any) => item.stock_id === stockId);
        if (watchlistItem) {
            try {
                await deleteWatchlist(watchlistItem.id, token);
                setWatchlist((prev: any) => prev.filter((item: any) => item.id !== watchlistItem.id));
                console.log('Asset removed from watchlist');
            } catch (error) {
                console.error('Error removing asset from watchlist:', error);
            }
        } else {
            const values = { user_id: profile?.id, stock_id: stockId };
            try {
                const response = await sendWatchlist(values, token);
                setWatchlist((prev: any) => [...prev, response]);
                console.log('Asset added to watchlist:', response);
            } catch (error) {
                console.error('Error adding asset to watchlist:', error);
            }
        }
    };

    const isInWatchlist = (stockId: any) => {
        return watchlist.some((item: any) => item.stock_id === stockId);
    };
    let accountBalance = profile?.account_balance;
    let formattedBalance = accountBalance?.toLocaleString();
    return (
        <div data-testid="main-dashboard" className='flex flex-col gap-[10px] xl:flex-row sm:gap-[12px] md:gap-[16px] lg:gap-[20px] -mt-[1.6rem] xl:gap-[20px]'>
            <div className={`w-full lg:${isCollapsed ? "w-[75%]" : "w-50%"} 2xl:w-[70%]`}>
                <p className='pb-[0.5rem] font-bold text-xl'>Stock </p>
                <div className='flex gap-[1rem] flex-col'>
                    <div className='flex flex-col gap-[1rem] lg:flex-row'>
                        <Card className="w-[100%] h-[24rem] pb-[0.5rem] dark:bg-[#151515] lg:w-[80%] 2xl:w-[50%]">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">
                                    <div className="flex gap-[2rem] justify-between">
                                        <div className="flex flex-row gap-[2rem]">
                                            <div>
                                                <p className="text-sm">Stocks Chart</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardTitle>
                                <CardDescription className="max-w-lg text-balance leading-relaxed">
                                    <div className="mt-[1rem]">
                                        <p className='text-xs'>
                                            Account Balance
                                        </p>
                                        <p className="text-1xl text-primary">
                                            {formattedBalance}
                                        </p>
                                        <div className='flex gap-[7px]'>
                                            <div className="w-[15px] h-[15px] border-2 border-[#FF0000] rounded-full mt-[3px]"></div>
                                            <p>This month</p>
                                            <div className="w-[15px] h-[15px] border-2 border-[#12B76A] rounded-full mt-[3px]"></div>
                                            <p>Last month</p>
                                        </div>
                                    </div>
                                    <BarChart />
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="w-[100%] h-[24rem] pb-[0.5rem] dark:bg-[#151515] lg:w-[80%] 2xl:w-[50%]">
                            <CardDescription>
                                <Tabs defaultValue="week" onValueChange={setTab}>
                                    <div className="flex justify-between px-3 py-1">
                                        <div className="flex flex-row gap-[2rem]">
                                            <div className='relative top-[1rem]'>
                                                <p className="text-sm text-primary font-semibold">Stocks Chart</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-[9rem] relative ml-[2rem]">
                                            <TabsList className=''>
                                                <TabsTrigger className='inline-flex items-center z-10 justify-center whitespace-nowrap px-3 py-1.5 text-[10px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#1890FF] data-[state=active]:border-b-2 data-[state=active]:border-[#1890FF]' value="week">Week</TabsTrigger>
                                                <TabsTrigger className='inline-flex items-center z-10 justify-center whitespace-nowrap px-3 py-1.5 text-[10px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#1890FF] data-[state=active]:border-b-2 data-[state=active]:border-[#1890FF]' value="month">Month</TabsTrigger>
                                                <TabsTrigger className='inline-flex items-center z-10 justify-center whitespace-nowrap px-3 py-1.5 text-[10px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#1890FF] data-[state=active]:border-b-2 data-[state=active]:border-[#1890FF]' value="year">Year</TabsTrigger>
                                            </TabsList>
                                            <span className="absolute bottom-[0.5px] left-0 w-full border-b-2 border-[#ccc]" style={{ transform: 'translateY(-2.5px)' }}></span>
                                        </div>
                                    </div>
                                    <TabsContent value="week">
                                        <p className="ml-[0.7rem] mt-[1rem] text-xs">Account Balance</p>
                                        <p className="text-2xl text-primary ml-[0.7rem] mt-[1rem]">
                                            {profile?.account_balance.toLocaleString()}
                                        </p>
                                        <LineChart datas={graphData} />
                                    </TabsContent>
                                    <TabsContent value="month">
                                        <p className="ml-[0.7rem] mt-[1rem] text-xs">Portfolio Balance</p>
                                        <p className="text-2xl text-primary ml-[0.7rem] mt-[1rem]">
                                            {profile?.account_balance.toLocaleString()}
                                        </p>
                                        <LineChartMonths datas={graphData} />
                                    </TabsContent>
                                    <TabsContent value="year">
                                        <p className="ml-[0.7rem] mt-[1rem] text-xs">Portfolio Balance</p>
                                        <p className="text-2xl text-primary ml-[0.7rem] mt-[1rem]">
                                            {profile?.account_balance.toLocaleString()}
                                        </p>
                                        <LineChartYears datas={graphData} />
                                    </TabsContent>
                                </Tabs>
                            </CardDescription>
                        </Card>
                    </div>
                    <Products />
                </div>
            </div>
        </div>
    );
};
export default MainDashboard;
