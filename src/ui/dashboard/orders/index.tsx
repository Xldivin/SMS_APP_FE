import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { deleteOrder } from '@/lib/apiUtils';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import CancelModal from '../modals/CancelModal';
import { orders } from '@/lib/constant';

const OrdersPage = ({ token }: any) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [orderId, setOrderId] = useState(0);

    const handleDelete = async (id: any) => {
        const resposne = await deleteOrder(id, token)
    };

    const openModal = (id: any) => {
        setOrderId(id)
        setModalOpen(true);
    }
    const closeModal = () => setModalOpen(false);

    const pending = orders.filter((order:any) => order.status === 'pending');
    const executed = orders.filter((order:any) => order.status !== 'pending');

    return (
        <Tabs defaultValue="pending">
            <div className="flex flex-col px-4 py-1">
                <div className="flex flex-row gap-[2rem]">
                    <div className='pt-2 px-2'>
                        <p className="text-lg text-primary">Orders</p>
                    </div>
                </div>
                <div className="flex w-[100%]">
                    <TabsList className='flex justify-center items-center flex-wrap md:flex-nowrap gap-[0.7rem]'>
                        <TabsTrigger className='inline-flex z-10 border-[1px] text-primary font-normal border-[#000] dark:border-[#fff] rounded-2xl justify-center px-4 py-1.5 text-[9px] transition-all disabled:opacity-50 data-[state=active]:text-[#fff] data-[state=active]:bg-[#000] dark:data-[state=active]:bg-[#fff] dark:data-[state=active]:text-[#000]' value="pending">Pending</TabsTrigger>
                        <TabsTrigger className='inline-flex z-10 border-[1px] text-primary font-normal border-[#000] dark:border-[#fff] rounded-2xl justify-center px-4 py-1.5 text-[9px] transition-all disabled:opacity-50 data-[state=active]:text-[#fff] data-[state=active]:bg-[#000] dark:data-[state=active]:bg-[#fff] dark:data-[state=active]:text-[#000]' value="executed">Executed</TabsTrigger>
                    </TabsList>
                </div>
            </div>
            <TabsContent value="pending">
                <div className='flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px]'>
                    <div>
                        <Card className='w-[100%] mt-[1rem] pt-[1rem] pl-[0.3rem] dark:bg-[#151515] overflow-auto lg:w-[100%]'>
                            <Table className='w-[100%] h-[7rem]'>
                                <TableHeader className='[&_tr]:border-0'>
                                    <TableRow >
                                        <TableHead>Type</TableHead>
                                        <TableHead className="sm:table-cell">Symbol</TableHead>
                                        <TableHead className="hidden sm:table-cell">Shares</TableHead>
                                        <TableHead className="hidden md:table-cell">Status</TableHead>
                                        <TableHead className={`hidden md:table-cell`}>Action</TableHead>
                                        <TableHead className={`sm:table-cell`}>Decline</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody >
                                    {pending.map((order: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="mt-[13px]">
                                                    <p>{order.type}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="sm:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.symbol}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.amount}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.status}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.action}
                                                </div>
                                            </TableCell>
                                            <TableCell className="sm:table-cell">
                                                <div className="mt-[13px]">
                                                    <Button
                                                        variant="outline"
                                                        className="w-[4rem] bg-[#0958D9] text-secondary rounded-3xl"
                                                        onClick={() => openModal(order.id)}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <CancelModal isOpen={modalOpen} onClose={closeModal} onConfirm={handleDelete} orderId={orderId} />
                        </Card>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="executed">
                <div className='flex flex-col gap-[10px] h-[100vh] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px]'>
                    <div>
                        <Card className='w-[100%] mt-[1rem] pt-[1rem] pl-[0.3rem] dark:bg-[#151515] overflow-auto lg:w-[100%]'>
                            <Table className='w-[100%] h-[7rem]'>
                                <TableHeader className='[&_tr]:border-0'>
                                    <TableRow >
                                        <TableHead>Type</TableHead>
                                        <TableHead className="sm:table-cell">Symbol</TableHead>
                                        <TableHead className="hidden sm:table-cell">Shares</TableHead>
                                        <TableHead className="hidden md:table-cell">Status</TableHead>
                                        <TableHead className={`hidden md:table-cell`}>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody >
                                    {executed.map((order: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="mt-[13px]">
                                                    <p>{order.type}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="sm:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.symbol}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.amount}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.status}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="mt-[13px]">
                                                    {order.action}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <CancelModal isOpen={modalOpen} onClose={closeModal} onConfirm={handleDelete} orderId={orderId} />
                        </Card>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default OrdersPage;
