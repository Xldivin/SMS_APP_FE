"use client";
import Link from "next/link";
import { Menu, Grid2X2, UsersRound, LogOut, BarChart2 } from 'lucide-react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { UserProfile } from "@/types";
import { TooltipContent, TooltipProvider, Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import LogoutModal from "../modals/LogoutModal";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isCollapsed: boolean;
  toggleNavbar: () => void;
  profile: UserProfile | null;
}

const Sidebar = ({ isCollapsed, toggleNavbar }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteToken = (): void => {
    Cookies.remove('accessToken');
    router.push('/login');
    window.location.reload();
  };

  const handleLinkClick = (path: any) => {
    setActiveLink(path);
  };

  return (
    <div className={`hidden border-r font-sans dark:bg-[#151515] md:block ${isCollapsed ? 'w-[60px]' : 'w-[220px] lg:w-[280px]'}`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center justify-between px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {!isCollapsed && <span className="font-custom"></span>}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleNavbar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium ">
            <TooltipProvider>
              <Link href='/dashboard' prefetch legacyBehavior>
                <a onClick={() => handleLinkClick('/dashboard')}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center relative ${isCollapsed ? "w-[3.7rem]" : "w-[12rem] left-[1.5rem]"} gap-3 rounded-lg ${activeLink === '/dashboard' ? "bg-muted" : ""} px-4 py-2 text-primary cursor-pointer transition-all hover:text-muted-foreground hover:bg-muted`}
                      >
                        <Grid2X2 strokeWidth={1} className="relative left-[6px]" />
                        <p className="font-sans">
                          {!isCollapsed && 'Dashboard'}
                        </p>
                      </div>
                    </TooltipTrigger>
                    {isCollapsed && <TooltipContent side="right">Dashboard</TooltipContent>}
                  </Tooltip>
                </a>
              </Link>
              <Link href='/dashboard/stocks' prefetch legacyBehavior>
                <a onClick={() => handleLinkClick('/dashboard/stocks')}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center relative ${isCollapsed ? "w-[3.7rem]" : "w-[12rem] left-[1.5rem]"} gap-3 ${activeLink === '/dashboard/portfolio' ? "bg-muted" : ""} rounded-lg px-4 py-2 text-primary cursor-pointer transition-all hover:text-muted-foreground mt-[0.5rem] hover:bg-muted`}
                      >
                        <BarChart2 strokeWidth={1} className="relative left-[6px]" />
                        <p className="font-sans">
                          {!isCollapsed && 'Stocks'}
                        </p>
                      </div>
                    </TooltipTrigger>
                    {isCollapsed && <TooltipContent side="right">Stocks</TooltipContent>}
                  </Tooltip>
                </a>
              </Link>
              <Link href='/dashboard/community' prefetch legacyBehavior>
              <a onClick={() => handleLinkClick('/dashboard/community')}>         
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center relative ${isCollapsed ? "w-[3.7rem]" : "w-[12rem] left-[1.5rem]"} gap-3   ${activeLink === '/dashboard/community' ? "bg-muted" : ""} rounded-lg cursor-pointer px-4 py-2 text-primary transition-all hover:text-muted-foreground mt-[0.5rem] hover:bg-muted`}
                    >
                      <UsersRound strokeWidth={1} className="relative left-[6px]" />
                      <p className="font-sans">
                        {!isCollapsed && 'Our Community'}
                      </p>
                    </div>
                  </TooltipTrigger>
                  {isCollapsed && <TooltipContent side="right">Our Community</TooltipContent>}
                </Tooltip>
                </a>
              </Link>
              <div onClick={openModal}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center relative ${isCollapsed ? "w-[3.7rem]" : "w-[12rem] left-[1.5rem]"} gap-3 rounded-lg px-4 py-2 cursor-pointer text-primary transition-all hover:text-muted-foreground mt-[0.5rem] hover:bg-muted`}
                    >
                      <LogOut strokeWidth={1} className="relative left-[6px]" />
                      <p className="font-sans">
                        {!isCollapsed && 'Logout'}
                      </p>
                    </div>
                  </TooltipTrigger>
                  {isCollapsed && <TooltipContent side="right">Logout</TooltipContent>}
                </Tooltip>
              </div>
            </TooltipProvider>
          </nav>
          <LogoutModal isOpen={showModal} onClose={closeModal} onConfirm={deleteToken} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
