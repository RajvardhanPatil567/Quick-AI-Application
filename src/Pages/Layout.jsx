import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';
import Sidebar from '../Components/Sidebar';
import { SignIn, useUser } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = React.useState(false);
  const { user, isLoaded } = useUser();

  // While Clerk is still loading
  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // If no user, show SignIn
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 bg-white">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate('/')}
        />
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        )}
      </nav>

      {/* Main content */}
      <div className="flex flex-1 h-[calc(100vh-56px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#FAF7FB] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
