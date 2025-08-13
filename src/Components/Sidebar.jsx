import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    House,
    SquarePen,
    Hash,
    Image,
    Scissors,
    Eraser,
    Users,
    FileText
} from 'lucide-react';

const navItems = [
    { to: '/ai', label: 'Dashboard', Icon: House },
    { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
    { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
    { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
    { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
    { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
    { to: '/ai/community', label: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
    const { user } = useUser();

    return (
        <div
            className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 
        ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} 
        transition-all duration-300 ease-in-out`}
        >
            {/* User Info */}
            <div className="my-7 w-full text-center">
                {user ? (
                    <>
                        <img
                            src={user.imageUrl}
                            alt="User avatar"
                            className="w-16 h-16 rounded-full mx-auto"
                        />
                        <h1 className="mt-2 font-semibold">{user.fullName}</h1>
                    </>
                ) : (
                    <p className="text-gray-500">Not signed in</p>
                )}
            </div>

            {/* Navigation */}
            <div className="w-full px-4 space-y-2">
                {navItems.map(({ to, label, Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/ai'}
                        onClick={() => setSidebar(false)}
                        className={({ isActive }) =>
                            `px-3.5 py-2.5 flex items-center gap-3 rounded transition-colors ${isActive
                                ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                                {label}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
