import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white px-8">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="text-xl font-bold">RG</div>
        {/* Navigation Section */}
        <nav>
          <ul className="flex space-x-9">
            <li className="hover:text-gray-400">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">About</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
