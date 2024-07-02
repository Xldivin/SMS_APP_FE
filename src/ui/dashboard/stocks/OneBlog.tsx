import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import Adobe from '../../../../public/Adobe.png';
import ApexChart from '../graphs/CandleStick';
import { TiArrowSortedUp } from "react-icons/ti";
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const StockDashboard = ({ stockdata, isCollapsed }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentChart, setCurrentChart] = useState('ApexChart');
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
    const [month1, setMonth1] = useState('');
    const [month2, setMonth2] = useState('');
    const router = useRouter();

    const data = [
        {
            id: 1,
            name: 'Amazon',
            ticker: 'AMZ',
            price: '$201.01',
            trend: 'trend title',
            percentage: '70.5%',
            lastUpdate: '15:40',
            imageUrl: 'path_to_amazon_image',
        },
        {
            id: 2,
            name: 'Google',
            ticker: 'GOOGL',
            price: '$1520.50',
            trend: 'trend title',
            percentage: '30.2%',
            lastUpdate: '16:00',
            imageUrl: 'path_to_google_image',
        },
        {
            id: 3,
            name: 'Facebook',
            ticker: 'FB',
            price: '$260.10',
            trend: 'trend title',
            percentage: '10.5%',
            lastUpdate: '14:30',
            imageUrl: 'path_to_facebook_image',
        },
    ];

    const handleBack = () => {
        router.back();
    };
    const handleChartChange = (chartType: any) => {
        setCurrentChart(chartType);
    };
    const currentData = data[currentIndex];
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
    return (
        <div className='p-[1rem]'>
            <button
                className="w-[40px] h-[40px] border bg-white dark:bg-[#000000] flex items-center justify-center p-3 z-10 rounded-full cursor-pointer mt-[1rem]"
                onClick={handleBack}
            >
                <MoveLeft strokeWidth={1} className="text-primary " />
            </button>
            <div className='flex flex-col lg:flex-row justify-between pb-[0.6rem]'>
                <div className='flex gap-[2rem]'>
                    <Image
                        width={50}
                        height={50}
                        src={stockdata?.image}
                        className="relative top-[0.5rem] left-[0.5rem] object-contain"
                        alt={`${currentData.name} image`}
                    />
                    <div className='flex flex-col relative top-[0.3rem] gap-[1rem]'>
                        <div className='flex gap-[2rem]'>
                            <div className='flex flex-row gap-[0.5rem] mt-[1rem]'>
                                <p>{stockdata?.name}</p>
                                <p>({stockdata?.symbol})</p>
                            </div>
                        </div>
                        <div className='flex relative bottom-[1rem]'>
                            <div>
                                <p>{stockdata?.price}</p>
                            </div>
                            <div className="flex mt-[0.3rem]">
                                <TiArrowSortedUp className="w-5 h-5 text-green-500 relative bottom-[0.2rem]" />
                                <p className={`text-green-500 text-xs`}>{stockdata?.percentageChange}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-[1rem] gap-[0.4rem]'>

                </div>
            </div>
            <Card className='w-[100%] h-[100%] p-[1rem] dark:bg-[#151515] mb-[1rem]'>
                <div>
                    <div className={`flex justify-between flex-col gap-[1rem] lg:flex-row`}>
                        <div className='flex flex-col gap-[0.1rem]'>
                            <p className='text-sm'>
                                Market Cap
                            </p>
                            <p className='text-xl'> 
                            {stockdata?.price}
                            </p>
                            <div className='flex gap-[0.3rem]'>
                                <p className='text-xs'>trend title</p>
                                <p className='text-xs text-green-500'>{stockdata?.percentageChange}%</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[0.3rem]'>
                            <p className='text-sm'>
                                Volume
                            </p>
                            <p className='text-xl'>
                            {stockdata?.price}
                            </p>
                            <div className='flex gap-[0.3rem]'>
                                <p className='text-xs'>trend title</p>
                                <p className='text-xs text-green-500'>{stockdata?.percentageChange}%</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[0.3rem]'>
                            <p className='text-sm'>
                            Fully Diluted Market Cap
                            </p>
                            <p className='text-xl'>
                            {stockdata?.price}
                            </p>
                            <div className='flex gap-[0.3rem]'>
                                <p className='text-xs'>trend title</p>
                                <p className='text-xs text-green-500'>{stockdata?.percentageChange}%</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[0.3rem]'>
                            <p className='text-sm'>
                            Circulating Supply
                            </p>
                            <p className='text-xl'>
                            {stockdata?.price}
                            </p>
                            <div className='flex gap-[0.3rem]'>
                                <p className='text-xs'>trend title</p>
                                <p className='text-xs text-green-500'>{stockdata?.percentageChange}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='w-full h-[100%] p-[1rem] dark:bg-[#151515]'>
                <ApexChart />
            </Card>
        </div>
    );
};

export default StockDashboard;
