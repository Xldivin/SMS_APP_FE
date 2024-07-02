import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ContactForm = ({ isCollapsed, blogs }: any) => {
    return (
        <div data-testid="portflio-dashboard" className='h-[100vh]'>
            <h1>
                Sumbit a request
            </h1>
            <div className='flex flex-col'>
                <Input name="quantity" className="mt-[1rem] w-[100%] lg:w-[70%] dark:border border-[#ccc]" placeholder="Category" />
                <Input name="quantity" className="mt-[1rem] w-[100%] lg:w-[70%] dark:border border-[#ccc]" placeholder="Enter Your Email" />
                <textarea
                    name="message"
                    className="mt-[1rem] w-[100%] lg:w-[70%] dark:border border-[#ccc] p-2 dark:bg-[#000] rounded-md"
                    placeholder="Enter Your Message"
                ></textarea>
                <Button className='bg-[#2E90FA] mt-[2rem] w-[8rem] dark:text-[#fff]'>
                    Send
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
