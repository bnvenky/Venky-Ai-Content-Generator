"use client";
import { History, House, UserCog, WalletMinimal } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link'
import UsageTrack from './UsageTrack'

function SideNav() {
    const MenuList = [
        {
            id:1,
            name: 'Home',
            icon: House,
            path: '/dashboard'
        },
        {
            id:2,
            name: 'History',
            icon: History,
            path: '/dashboard/history'
        },
        {
            id:3,
            name: 'Billing',
            icon: WalletMinimal,
            path: '/dashboard/billing'
        },
        {
            id:4,
            name: 'Settings',
            icon: UserCog,
            path: '/dashboard/settings'
        }
    ];
    
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <h1 className='text-gray-600 text-xl font-semibold'>Venky-Ai.CC</h1>
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu)=>(
                // eslint-disable-next-line react/jsx-key
                <Link href={menu.path} key={menu.id}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-gray-400 hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path==menu.path&&'bg-gray-600 text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
        </div>
    </div>
    );
}

export default SideNav;
