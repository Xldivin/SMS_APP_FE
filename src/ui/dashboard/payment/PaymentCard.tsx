import { Input } from '@/components/ui/input';
import { FaCreditCard } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from "@/components/ui/card";
import { useState } from 'react';
import { useFormik } from 'formik';
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import axios from "axios";
import { createCheckoutSession } from '@/lib/stripe';
import { withdrawFlutterWave, withdrawStripe } from '@/lib/apiUtils';
import { getDepositValidationSchema } from '@/formValidation/DepositValidation';
import { CardWithdrawalValidation } from '@/formValidation/CardWithdrawalValidation';
import { MomoWithdrawalValidation } from '@/formValidation/MomoWithdrawalValidation';
import WithdrawalModal from '../modals/WithdrawalModal';

const PaymentCard = ({ profile, token }: any) => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [submitType, setSubmitType] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenMomo, setModalOpenMomo] = useState(false);
    const email = profile?.email;
    const name = profile?.username;

    const handlePayment = async () => {
        setIsLoading(true);
        try {
            const session = await createCheckoutSession(formik.values.amount, profile.id);
            if (session && session.url) {
                window.location.href = session.url;
            } else {
                throw new Error("Failed to create checkout session.");
            }
        } catch (err: any) {
            setError(err.message || "An error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleWithdrawFlutterWave = async () => {
        setIsLoading(true);
        try {
            const values = { userId: profile.id, amount: formik3.values.amount, account_number: formik3.values.number, account_bank: 'MPS' };
            const response = await withdrawFlutterWave(values, token);
        } catch (err: any) {
            setError(err.message || "An error occurred.");
        } finally {
            setIsLoading(false);
            setModalOpenMomo(false)
        }
    }

    const handleWithdrawStripe = async () => {
        setIsLoading(true);
        try {
            const values = { userId: profile.id, amount: formik2.values.amount, bankAccountNumber: formik2.values.bank, sortCode: formik2.values.sortCode, accountHolderName: profile?.first_name };
            const response = await withdrawStripe(values, token);
        } catch (err: any) {
            setError(err.message || "An error occurred.");
            console.log(err)
        } finally {
            setIsLoading(false);
            setModalOpen(false)
        }
    }

    const generateTransactionId = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const length = 12;
        let result = "";

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return result;
    };
    const transactionId = generateTransactionId();
    const handlePaymentSuccess = async (response: any) => {
        console.log("Payment successful:", response);
        try {
            await axios
                .post("https://api.tuesday.africa/api/v1/payments/verify-flutterwave", {
                    transactionId: response.transaction_id,
                    userId: profile.id,
                    amount: parseFloat(amount.toString()),
                    currency: "RWF",
                })
                .then((val: any) => console.log(val.data));
        } catch (error) {
            console.error("Error verifying payment:", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            amount: 0,
        },
        validationSchema: getDepositValidationSchema(profile?.dollarvalue),
        onSubmit: (values) => {
            if (submitType === 'card') {
                handlePayment();
            } else if (submitType === 'momo') {
                handleFlutterPayment({
                    callback: async (response) => {
                        await handlePaymentSuccess(response);
                        closePaymentModal();
                        window.location.reload();
                    },
                    onClose: () => { },
                });
            }
        },
    });
    const formik2 = useFormik({
        initialValues: {
            amount: 0,
            bank: '',
            sortCode: ''
        },
        validationSchema: CardWithdrawalValidation,
        onSubmit: (values) => {
            console.log(values)
            handleWithdrawStripe()
        },
    });
    const formik3 = useFormik({
        initialValues: {
            amount: 0,
            number: '',
        },
        validationSchema: MomoWithdrawalValidation,
        onSubmit: (values) => {
            console.log(values)
            handleWithdrawFlutterWave()
        },
    });
    const amount = formik.values.amount;
    const config = {
        public_key: "FLWPUBK_TEST-9c3589e639443302ce9ba726168069f3-X",
        tx_ref: transactionId,
        amount,
        currency: "RWF",
        payment_options: "mobilemoneyrwanda",
        customer: {
            email,
            phone_number: "08012345678",
            name,
        },
        customizations: {
            title: "Tuesday Markets",
            description: "Deposit Payment",
            logo: "https://example.com/logo.png",
        },
    };
    const handleFlutterPayment = useFlutterwave(config);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const openModalMomo = () => setModalOpenMomo(true);
    const closeModalMomo = () => setModalOpenMomo(false);
    return (
        <Card className='w-[100%] h-[25rem] mt-[1rem] dark:bg-[#151515]'>
            <Tabs defaultValue="deposit">
                <div className="flex items-center">
                    <TabsList className={`inline-flex ml-[0.5rem] w-[95%] h-10 rounded-md p-1 text-muted-foreground bg-muted dark:bg-[#000] mt-[0.5rem] lg:w-[95%]`}>
                        <TabsTrigger className='inline-flex z-10 w-[50%] text-primary rounded-md justify-center whitespace-nowrap px-3 py-1.5 text-sm font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:bg-[#fff] dark:data-[state=active]:bg-[#151515]' value="deposit">Deposit</TabsTrigger>
                        <TabsTrigger className='inline-flex z-10 w-[50%] text-primary rounded-md justify-center whitespace-nowrap px-3 py-1.5 text-sm font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:bg-[#fff] dark:data-[state=active]:bg-[#151515]' value="withdrawal">Withdrawal</TabsTrigger>
                    </TabsList>
                </div>
                {/* DEPOSIT */}
                <TabsContent value="deposit">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            formik.handleSubmit();
                        }}>
                        <p className='flex justify-center text-[1.3rem] pt-[0.5rem]'>Deposit</p>
                        <div className='pl-3'>
                            <Input type="number" name="amount" id="amount" className="mt-[1rem] w-[96%]" placeholder="Amount" value={formik.values.amount} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.amount && formik.errors.amount ? (
                                <div className="text-red-600">{formik.errors.amount}</div>
                            ) : null}
                            <div className='mt-[2rem]'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setSubmitType('card');
                                        formik.handleSubmit();
                                    }}
                                    className="text-white mt-1 bg-[#0757BA] border flex justify-center items-center space-x-2 dark:bg-[#000] dark:border-gray-100 w-[96%] py-2 rounded-md"
                                >
                                    {isLoading ? 'Loading...' : (
                                        <>
                                            <FaCreditCard className="text-white" />
                                            <p>Deposit with Card</p>
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={() => {
                                        setSubmitType('momo');
                                        formik.handleSubmit();
                                    }}
                                    className="text-white mt-2 bg-[#0757BA] border justify-center items-center space-x-2 flex dark:bg-[#000] dark:border-gray-100 w-[96%] py-2 rounded-md"
                                >
                                    <FiSmartphone className="text-white" />
                                    <p>Deposit with Mobile Money</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </TabsContent>
                {/* WITHDRAWAL */}
                <TabsContent value="withdrawal">
                    <Tabs defaultValue="card">
                        <div className="flex px-2">
                            <div className="flex">
                                <TabsList className=''>
                                    <TabsTrigger className='px-1.5 py-1.5 text-xs font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#FFD84A]' value="card">Card</TabsTrigger>
                                    <TabsTrigger className='px-1.5 py-1.5 text-xs font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#FFD84A]' value="momo">Mobile Money</TabsTrigger>
                                </TabsList>
                            </div>
                        </div>
                        {/* CARD WITHDRAWAL */}
                        <TabsContent value="card">
                            <div>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    openModal()
                                }}>
                                    <div className='pl-3'>
                                        <Input type="number" name="amount" id="amount" className="mt-[1rem] w-[96%]" placeholder="Withdrawal Amount" value={formik2.values.amount} onChange={formik2.handleChange} onBlur={formik2.handleBlur} />
                                        {formik2.touched.amount && formik2.errors.amount ? (
                                            <div className="text-red-600">{formik2.errors.amount}</div>
                                        ) : null}
                                        <Input name="bank" id="amount" className="mt-[1rem] w-[96%]" placeholder="Account Number" value={formik2.values.bank} onChange={formik2.handleChange} onBlur={formik2.handleBlur} />
                                        {formik2.touched.bank && formik2.errors.bank ? (
                                            <div className="text-red-600">{formik2.errors.bank}</div>
                                        ) : null}
                                        <Input name="sortCode" id="amount" className="mt-[1rem] w-[96%]" placeholder="Swift Code" value={formik2.values.sortCode} onChange={formik2.handleChange} onBlur={formik2.handleBlur} />
                                        {formik2.touched.sortCode && formik2.errors.sortCode ? (
                                            <div className="text-red-600">{formik2.errors.sortCode}</div>
                                        ) : null}
                                        <button
                                            className="text-white mt-[1rem] bg-[#0757BA] border flex justify-center items-center space-x-2 dark:bg-[#000] dark:border-gray-100 w-[96%] py-2 rounded-md"
                                        >
                                            {isLoading ? 'Loading...' : (
                                                <>
                                                    <p>{"Confirm"}</p>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </TabsContent>
                        {/* MOMO WITHDRAWAL */}
                        <TabsContent value="momo">
                            <div>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    openModalMomo()
                                }}>
                                    <div className='pl-3'>
                                        <Input type="number" name="amount" id="amount" className="mt-[1rem] w-[96%]" placeholder="Withdrawal Amount" value={formik3.values.amount} onChange={formik3.handleChange} onBlur={formik3.handleBlur} />
                                        {formik3.touched.amount && formik3.errors.amount ? (
                                            <div className="text-red-600">{formik3.errors.amount}</div>
                                        ) : null}
                                        <Input name="number" id="amount" className="mt-[1rem] w-[96%]" placeholder="mobile money number" value={formik3.values.number} onChange={formik3.handleChange} onBlur={formik3.handleBlur} />
                                        {formik3.touched.number && formik3.errors.number ? (
                                            <div className="text-red-600">{formik3.errors.number}</div>
                                        ) : null}
                                        <button
                                            className="text-white mt-[1rem] bg-[#0757BA] border flex justify-center items-center space-x-2 dark:bg-[#000] dark:border-gray-100 w-[96%] py-2 rounded-md"
                                        >
                                            {isLoading ? 'Loading...' : (
                                                <>
                                                    <p>{"Confirm"}</p>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </TabsContent>
                        <WithdrawalModal isOpen={modalOpen} onClose={closeModal} onConfirm={handleWithdrawStripe} />
                        <WithdrawalModal isOpen={modalOpenMomo} onClose={closeModalMomo} onConfirm={handleWithdrawFlutterWave} />
                    </Tabs>
                </TabsContent>
            </Tabs>
        </Card>
    )
}

export default PaymentCard;
