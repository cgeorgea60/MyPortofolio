import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex">
      <div className="text-center flex justify-between mx-4 bg-blue-600">
        <div>
          <p>
            Portfo<span>lio</span>
          </p>
        </div>
        <div className="flex hidden md:flex">
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Skills</p>
          <p>Contact Us</p>
        </div>
        <div className="flex">Download CV</div>
        <div className="md:hidden">Doughnut</div>
      </div>
    </div>
  );
};

export default Navbar;
