import React from "react";
import TopBar from "./TopBar";
import Logo from "./Logo";
import HeaderRight from "./HeaderRight";
import MainMenu from "./Menu";
import MobileMenu from "./MobileMenu";

export default async function Header() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-10">
        <TopBar />
        <div className="border-b-2 bg-white">
          <div className="max-w-7xl mx-auto px-6 ">
            <div className="flex justify-between items-center h-16 ">
              <Logo />
              <div className="md:hidden">
                <MobileMenu />
              </div>
              <div className="hidden md:inline md:order-2">
                <MainMenu />
              </div>
              <HeaderRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
