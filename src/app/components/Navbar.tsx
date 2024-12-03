'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-transparent fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold">The Dessert Stop</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
             <Link href="/" className="text-white rounded-lg p-2 active:opacity-5 transition-all hover:underline hover:underline-offset-4 hover:text-fuchsia-950 focus:underline focus:underline-offset-4 focus:text-fuchsia-950">Home</Link>
              <Link href="/about" className="text-white rounded-lg p-2 active:opacity-5 transition-all hover:underline hover:underline-offset-4 hover:text-fuchsia-950 focus:underline focus:underline-offset-4 focus:text-fuchsia-950">About</Link>
              <Link href="/menu" className="text-white rounded-lg p-2 active:opacity-5 transition-all hover:underline hover:underline-offset-4 hover:text-fuchsia-950 focus:underline focus:underline-offset-4 focus:text-fuchsia-950">Menu</Link>
              <Link href="/contact" className="text-white rounded-lg p-2 active:opacity-5 transition-all hover:underline hover:underline-offset-4 hover:text-fuchsia-950 focus:underline focus:underline-offset-4 focus:text-fuchsia-950">Contact</Link>
              <Link href="/feedback" className="text-white rounded-lg p-2 active:opacity-5 transition-all hover:underline hover:underline-offset-4 hover:text-fuchsia-950 focus:underline focus:underline-offset-4 focus:text-fuchsia-950">Feedback</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 h-full bg-fuchsia-950 bg-opacity-90 backdrop-blur-md z-40 transition-transform transform ${
          isClick ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-64 shadow-lg`}
      >
        <div className="px-4 pt-4 space-y-4 mt-10">
          <Link href="/" className="text-white text-center block rounded-lg p-2 active:opacity-5 focus:underline focus:underline-offset-4 focus:text-white transition-all">Home</Link>
          <Link href="/about" className="text-white text-center block rounded-lg p-2 active:opacity-5 focus:underline focus:underline-offset-4 focus:text-white transition-all">About</Link>
          <Link href="/menu" className="text-white text-center block rounded-lg p-2 active:opacity-5 focus:underline focus:underline-offset-4 focus:text-white transition-all">Menu</Link>
          <Link href="/contact" className="text-white text-center block rounded-lg p-2 active:opacity-5 focus:underline focus:underline-offset-4 focus:text-white transition-all">Contact</Link>
          <Link href="/feedback" className="text-white text-center block rounded-lg p-2 active:opacity-5 focus:underline focus:underline-offset-4 focus:text-white transition-all">Feedback</Link>
        </div>
      </div>
    </nav>
  );
}
