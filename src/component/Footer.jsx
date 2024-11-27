import React from 'react';

function Footer() {
  return (
    <>
      <footer className=" text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Logo and Copyright Section */}
          <div className="flex items-center space-x-4">
            <img src="./Logo1.png" alt="" className="" />
          </div>
          <p className="text-sm justify-items-end">&copy; 2023 Wizia. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
