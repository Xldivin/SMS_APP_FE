import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Wallet } from 'lucide-react';
import PaymentCard from './PaymentCard';
import { fetchTransaction } from '@/lib/apiUtils';
import { truncateNumber } from '@/lib/utils';
import { transactions } from '@/lib/constant';

const PaymentDashboard = ({ token, profile }: any) => {
    let accountBalance = profile?.account_balance;
    let formattedBalance = accountBalance?.toLocaleString();
    return (
        <div data-testid="portflio-dashboard" className='flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px]'>
            <div className='w-[100%]'>
                <div className='flex flex-col w-[100%] mb-[1rem] lg:flex-row lg:gap-[1rem]'>
                    <div className='flex flex-col mb-[1rem] w-[100%] lg:w-[70%]'>
                        <Card className='w-[100%] h-[20rem] lg:h-[13rem] mt-[1rem] flex flex-col gap-[1rem] px-[2rem] py-[1rem] dark:bg-[#151515]'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-[1.5rem]'>
                                        Wallet
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='mt-[2rem]'>
                                    <div className='flex gap-[0.5rem]'>
                                        <Wallet strokeWidth={1} className='w-[1rem] h-[1rem]' />
                                        <p className='text-xs '>Available Balance</p>
                                    </div>
                                    <div>
                                        <p className='text-[1.5rem]'>{profile?.currency} {formattedBalance}</p>
                                    </div>
                                </div>
                                <div className='flex gap-[1rem]'>
                                    <Card className='w-[10rem] h-[6rem] bg-[#3080FF] px-[1rem]'>
                                        <div className='flex gap-[0.1rem] mt-[1rem]'>
                                            <Wallet strokeWidth={1} className='w-[1rem] h-[1rem] text-[#fff]' />
                                            <p className='text-xs text-[#fff] mt-[0.1rem'>Deposit Balance</p>
                                        </div>
                                        <div className='flex mt-[1rem] text-[#fff] text-[14px]'>
                                            <p>{profile?.currency} {profile?.ledger_balance.toFixed(2)}</p>
                                        </div>
                                    </Card>
                                    <Card className='w-[10rem] h-[6rem] bg-[#FFA800] px-[1rem] '>
                                        <div className='flex gap-[0.1rem] mt-[1rem]'>
                                            <Wallet strokeWidth={1} className='w-[1rem] h-[1rem] text-[#fff]' />
                                            <p className='text-xs text-[#fff] mt-[0.1rem]'>Available Balance</p>
                                        </div>
                                        <div className='flex mt-[1rem]'>
                                            <p className='text-[#fff] text-[14px]'>{profile?.currency}{formattedBalance}</p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card className='w-[100%] h-[100%] mt-[1rem] pt-[1rem] pl-[0.3rem] dark:bg-[#151515] overflow-auto lg:w-[100%]'>
                            <Table className='w-[100%] h-[20rem]'>
                                <TableHeader className='[&_tr]:border-0'>
                                    <TableRow >
                                        <TableHead>Provider</TableHead>
                                        <TableHead className="sm:table-cell">Amount</TableHead>
                                        <TableHead className="hidden sm:table-cell">Date</TableHead>
                                        <TableHead className="hidden md:table-cell">Status</TableHead>
                                        <TableHead className={`hidden md:table-cell`}>Payment Type</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody >
                                    {transactions?.map((transaction: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="mt-[13px]">
                                                    <p>{transaction.provider}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="sm:table-cell">
                                                <div className="mt-[13px]">
                                                    {profile?.currency}{transaction?.amount}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <div className="mt-[13px]">
                                                    {new Date(transaction.createdAt).toLocaleString()}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="mt-[13px]">
                                                    {transaction.status}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="mt-[13px]">
                                                    {transaction.paymentType}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                    <div className='w-[100%] lg:w-[30%]'>
                        <PaymentCard token={token} profile={profile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDashboard;
