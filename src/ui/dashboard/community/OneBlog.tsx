import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';

const OneBlog = ({ blog }: any) => {
    const router = useRouter();
    const stripHtml = (html: any) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };
    const handleBack = () => {
        router.back();
    };
    return (
        <div>
            <button
                className="w-[40px] h-[40px] mb-[1rem] border bg-white dark:bg-[#000000] flex items-center justify-center p-3 z-10 rounded-full cursor-pointer mt-[1rem]"
                onClick={handleBack}
            >
                <MoveLeft strokeWidth={1} className="text-primary " />
            </button>
            <div className='w-full'>
                <Image
                    width={350}
                    height={350}
                    src={blog?.imageUrl}
                    alt="User Profile"
                    className="h-[20rem] w-[100%] lg:w-[80%] lg:h-[25rem] object-cover pt-[0.3rem] rounded-lg"
                />
            </div>
            <div className='w-full py-[2rem]'>
                <p className='text-xl font-semibold py-2'>
                    {blog?.title}
                </p>
                <p className='w-[100%] lg:w-[80%]'>
                    {stripHtml(blog?.content)}
                </p>
            </div>
        </div>
    );
};

export default OneBlog;
