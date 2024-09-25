"use client";
import { Drawer, Modal } from "antd";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-center px-1">
      <IoMdMenu
        size={22}
        className="font-medium cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <Drawer
        title="Menu"
        open={open}
        placement="left"
        closable={true}
        onClose={() => setOpen(false)}
        footer={null}
      >
        <HeaderMenu />
      </Drawer>
    </div>
  );
}
