'use client';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { IconLogout } from '@tabler/icons-react';

export default function UserAvatar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleSignOut = async () => {
        await signOut();
    };

    return session?.user?.image ? (
        <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="rounded-full overflow-hidden p-2 bg-zinc-900">
                <Image
                    src={session.user.image}
                    alt="User Avatar"
                    className="rounded-full"
                    width={30}
                    height={30}
                />
            </button>
            {isOpen && (<div className="absolute right-0 z-10 mt-2 w-[250px] origin-top-right rounded-md bg-zinc-800 shadow-lg">
                <div
                    className="p-3 flex flex-col space-y-3 divide-y divide-gray-100"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div>
                        <span className="blocktext-sm text-zinc-200">
                            {session.user.name}
                        </span>
                        <span className="block text-sm text-zinc-400">
                            {session.user.email}
                        </span>
                    </div>
                    <div>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center justify-between w-full text-left text-sm text-zinc-200 hover:bg-zinc-700 mt-3 p-2 rounded"
                        >
                          <span className="font-bold">Sign Out</span>
                            <IconLogout
                                size={24}
                                stroke={2}
                                strokeLinejoin="miter"
                            />
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    ) : (
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-7 9a7 7 0 1 1 14 0z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    );
}
