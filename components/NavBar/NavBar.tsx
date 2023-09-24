"use client";
import Icons from '@/assets/svgIcons';
import Link from 'next/link';
import Button from '../Button/Button';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';

const Navbar = () => {

  return (
    <nav className="text-white py-4 sm:py-6">
      <div className="flex justify-between items-center">
      <Link  href="/">
         {Icons.logo()}
        </Link>
        <div className='flex items-center gap-x-24' >
        <ul className="hidden gap-x-10 sm:flex">
          <li>
            <Link className="text-black text-base font-semibold " href="/">
            من نحن
            </Link>
          </li>
          <li>
            <Link className="text-black text-base font-semibold" href="/about">
               خدماتنا
            </Link>
          </li>
          <li>
            <Link className="text-black text-base font-semibold" href="/contact">
               آعمالنا
            </Link>
          </li>
        </ul>
        <div className='flex items-center gap-x-8'>
        <LanguageDropdown />
        <Button>
        ابدأ مشروعك
        </Button>
        </div>
        </div>
    

      </div>
    </nav>
  );
};

export default Navbar;
