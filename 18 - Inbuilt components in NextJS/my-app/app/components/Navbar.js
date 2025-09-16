"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo font-bold text-lg">Facebook</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/career">Career</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="flex flex-col gap-4 bg-gray-700 p-4 md:hidden">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link href="/career" onClick={() => setOpen(false)}>Career</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
