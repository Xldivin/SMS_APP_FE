"use client";
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types';
import { getBlog, getUserProfile, } from '@/lib/apiUtils';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import withAuth from '@/hoc/withAuth';
import Loader from '@/ui/dashboard/utilscomponent/Loader';
import { useGlabalState } from '@/context/GlobalStateContext';
import OneBlog from '@/ui/dashboard/community/OneBlog';
import { blogs } from '@/lib/constant';

const Blog = ({ params }: { params: { id: string } }) => {
  const { isCollapsed, setIsCollapsed } = useGlabalState();
  const { isDarkMode, setIsDarkMode } = useGlabalState();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [blog, setBlog] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    function findBlogById(id: any): any {
        return blogs.find(blog => blog.id === id);
    }

    const foundBlog = findBlogById(params?.id);
    if (foundBlog) {
        setBlog(foundBlog);
    }
}, [params?.id]);


  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ fontFamily: "Inter", fontSize: "16px" }}
      />
      <>
        <div className="lg:col-span-3 pt-[2rem]">
          <div className={`grid items-start  gap-4 md:gap-6 2xl:flex 2xl:justify-center`}>
            <OneBlog blog={blog} />
          </div>
        </div>
      </>
    </>
  );
};

export default withAuth(Blog);
