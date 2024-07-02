
import React from 'react';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import rectangle from '../../../assets/images/Rectangle.png'
import { User } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Community = ({ isCollapsed, blogs }: any) => {
    const router = useRouter();
    const cardsData = [
        {
            id: 1,
            title: "EURJPY 12HOURS Aka by Japsku Inpade",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            imageSrc: rectangle,
        },
        {
            id: 2,
            title: "EURJPY 12HOURS Aka by Japsku Inpade",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            imageSrc: rectangle,
        },
        {
            id: 3,
            title: "EURJPY 12HOURS Aka by Japsku Inpade",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            imageSrc: rectangle,
        },
        {
            id: 4,
            title: "EURJPY 12HOURS Aka by Japsku Inpade",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            imageSrc: rectangle,
        },
    ];

    const handleNavigation = (id: number) => {
        router.push(`/dashboard/community/${id}`);
    };
    const stripHtml = (html:any) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };
    const truncateText = (text:any, wordLimit:any) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };
    return (
        <div data-testid="portflio-dashboard" className='flex flex-wrap pb-[1rem] gap-[10px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px]'>
            {blogs?.map((blog:any, index:any) => (
                <Card key={index} className={`w-[100%] h-[100%] mt-[1rem] lg:${isCollapsed ? "w-[21rem]" : "w-[18rem]"} lg:h-[22rem] dark:bg-[#151515]`}>
                    <div className='w-full flex justify-center'>
                        <Image
                            width={90}
                            height={10}
                            src={blog?.imageUrl}
                            alt="User Profile"
                            className="h-[10rem] w-[95%] object-cover pt-[0.3rem]"
                        />
                    </div>
                    <div className='px-[0.5rem] py-[1rem]'>
                        <p>
                            {blog?.title}
                        </p>
                        <p className='text-xs mt-[0.7rem]'>
                        {truncateText(stripHtml(blog?.content), 10)}
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex'>
                                <User strokeWidth={1} className="h-[2rem] w-[2rem] px-[0.5rem] object-cover" />
                                <p className='text-xs mt-[0.6rem]'>{blog?.author?.first_name} {blog?.author?.last_name}</p>
                            </div>
                        </div>
                        <div className='flex gap-[0.4rem] pr-[0.6rem] pb-[0.5rem]'>
                            <div className='w-[2rem] h-[2rem] bg-[#000] rounded-lg flex justify-center items-center'
                                onClick={() => handleNavigation(blog?.id)}>
                                <MoveRight className='text-[#fff]' />
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Community;
