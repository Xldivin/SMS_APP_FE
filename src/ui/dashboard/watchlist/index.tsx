import React, { useEffect, useState } from 'react';
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Graph from '../../../assets/images/Graph.png';
import { StockInfo } from '@/types';
import Down from '../../../assets/images/Down.png';
import { useRouter } from 'next/navigation';
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { deleteWatchlist, fetchWatchlist, sendWatchlist } from '@/lib/apiUtils';

const Watchlist = ({ isCollapsed, watchlistStocks, stocks, token, profile }: any) => {
    const router = useRouter();
    const [watchlist, setWatchlist] = useState<any>([]);
    const getMovementImage = (movement: StockInfo['movement']) => {
        switch (movement) {
            case "up":
                return Graph;
            case "down":
                return Down;
            case "constant":
            default:
                return Graph;
        }
    };
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
    return (
        <div data-testid="portflio-dashboard" className='flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px]'>
            <div>
                <p className='pb-[0.5rem] font-bold text-xl'>Watchlist</p>
                <div className='flex flex-col gap-[1rem] mb-[1rem] lg:flex-row '>
                    <Card className='w-[100%] h-[100%] mt-[1rem] lg:w-[70%] dark:bg-[#151515]'>
                        <Table className='w-[100%] ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <TableHeader className='[&_tr]:border-0'>
                                <TableRow >
                                    <TableHead>Asset Name</TableHead>
                                    <TableHead className="sm:table-cell">Price</TableHead>
                                    <TableHead className="hidden sm:table-cell">Change</TableHead>
                                    <TableHead className="hidden md:table-cell">MarketCap</TableHead>
                                    <TableHead className={`hidden md:table-cell`}>Watchlist</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {watchlistStocks?.map((asset: any, index: any) => (
                                    <TableRow key={index} >
                                        <TableCell className='flex relative top-[0.1rem] cursor-pointer'>
                                            <Image
                                                width={30}
                                                height={30}
                                                src={asset.stock.image}
                                                className="relative left-[0.5rem] h-[2rem]"
                                                alt={asset.stock.assetFullName}
                                            />
                                            <div className="font-medium text-xs ml-[15px] mt-[10px] flex gap-[7px]">
                                                <p>{asset.stock.symbol}</p>
                                                <p className='text-[#6F6F6F] text-xs font-light'>{asset.stock.name}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="sm:table-cell">
                                            ${asset.stock.price}
                                        </TableCell>
                                        <TableCell className={`hidden md:flex hidden md:flex relative ${isCollapsed ? "bottom-[0.6rem]" : ""}`}>
                                            <p className='text-md text-green-500'>{asset.stock.dayRangeHigh - asset.stock.dayRangeLow}</p>
                                            <TiArrowSortedDown className={`relative w-3 h-3 text-green-500 top-[0.3rem]`} />
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {asset.stock.price}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {isInWatchlist(asset.stock.id) ? (
                                                <FaBookmark
                                                    strokeWidth={1}
                                                    onClick={() => handleBookmarkClick(asset.id)}
                                                    className={`ml-[1rem] cursor-pointer`}
                                                />
                                            ) : (
                                                <FaRegBookmark
                                                    strokeWidth={1}
                                                    onClick={() => handleBookmarkClick(asset.id)}
                                                    className="ml-[1rem] cursor-pointer"
                                                />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <Card className='w-[100%] h-[30rem] mt-[1rem] pt-[1rem] pl-[0.3rem] dark:bg-[#151515] overflow-auto lg:w-[30%]' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <CardTitle>
                            <div className='flex justify-between'>
                                <p className="text-xl ml-[1rem] font-normal">Stock Market</p>
                                {/* to implement onclick */}
                                <p className="text-sm mr-[1.5rem] mt-[0.5rem] font-normal text-[#0958D9] cursor-pointer">See All</p>
                            </div>
                        </CardTitle>
                        <CardDescription className='pl-[0.5rem] pr-[0.8rem]'>
                            {stocks?.map((item: any) => (
                                <div key={item.id} className={`flex justify-between pt-[2rem] pb-[1rem] ${isCollapsed ? "pl-[1rem] pr-[1rem]" : ""}`}>
                                    <div className='flex w-[12rem] lg:w-[13rem]'>
                                        <Image
                                            width={30}
                                            height={30}
                                            src={item.image}
                                            className="h-[2rem]"
                                            alt={''}
                                        />
                                        <div className="font-medium text-xs ml-[15px] mt-[10px] flex gap-[7px]">
                                            <p className='text-md'>{item.symbol}</p>
                                            <p className='text-[#6F6F6F] text-xs font-light'>{item.name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image
                                            width={80}
                                            height={90}
                                            src={getMovementImage(item.movement)}
                                            className=""
                                            alt={`graph`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Watchlist;
