"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/1919395.jpg"
            alt="logo"
            width={50} // Adjust size for mobile
            height={50} // Adjust size for mobile
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 md:block text-gray-300">
            Fullstack Developer
          </span>
        </a>

        <div className="hidden md:flex items-center justify-between w-[500px] h-full">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            <div className="space-y-1.5">
              <span className="block w-8 h-0.5 bg-gray-300"></span>
              <span className="block w-8 h-0.5 bg-gray-300"></span>
              <span className="block w-8 h-0.5 bg-gray-300"></span>
            </div>
          </button>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name} passHref>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#030014b8] text-gray-200 mt-4 rounded-lg">
          <a href="#about-me" className="py-2">
            About me
          </a>
          <a href="#skills" className="py-2">
            Skills
          </a>
          <a href="#projects" className="py-2">
            Projects
          </a>
          <div className="flex flex-row gap-5 mt-4">
            {Socials.map((social) => (
              <Link href={social.link} key={social.name} passHref>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
