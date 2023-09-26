import React, { useState, useRef, useEffect } from 'react';

const LanguageDropdown = () => {
  const [isLanguageListOpen, setIsLanguageListOpen] = useState(false); // Track the visibility of the language list
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is Arabic

  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown element

  // Function to handle clicks outside of the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsLanguageListOpen(false);
    }
  };

  // Add a click event listener to the document
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleLanguageList = () => {
    setIsLanguageListOpen(!isLanguageListOpen); // Toggle the visibility of the language list
  };

  const handleChangeLanguage = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    setIsLanguageListOpen(false); // Close the language list when a language is selected
    // Add logic to change the language and update translations here
  };

  return (
    <div className="relative hidden sm:inline-block" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleLanguageList}
          className="flex items-center text-black"
          id="language-selector"
        >
          {selectedLanguage === 'en' ? 'English' : 'عربي'}
        </button>
      </div>
      <div
        className={`origin-top-right absolute left-0 w-30 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isLanguageListOpen ? 'block' : 'hidden'
        }`} // Toggle the visibility of the language list
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-selector"
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-selector">
          <a
            href="#"
            onClick={() => handleChangeLanguage('en')}
            className={`flex justify-end px-4 py-2 text-sm ${
              selectedLanguage === 'en' ? 'text-blue-500' : 'text-black'
            }`}
            role="menuitem"
          >
            English
          </a>
          <a
            href="#"
            onClick={() => handleChangeLanguage('ar')}
            className={`flex justify-end px-4 py-2 text-sm ${
              selectedLanguage === 'ar' ? 'text-blue-500' : 'text-black'
            }`}
            role="menuitem"
          >
            عربي
          </a>
          {/* Add more language options as needed */}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
