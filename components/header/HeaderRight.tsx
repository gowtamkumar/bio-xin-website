"use client";
import { userProfileRoute } from "@/NavBarRoute";
import { Avatar, Badge, Dropdown } from "antd";
import Link from "next/link";
import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

export default function HeaderRight() {
  return (
    <div className="flex md:gap-4 gap-1 justify-between items-center order-3 px-2">
      <CiSearch size={22} className="font-medium cursor-pointer " />
      <Link href="/" className="cursor-pointer md:inline hidden">
        <CiHeart size={22} className="font-medium" />
      </Link>
      <Link href="#" className="cursor-pointer mt-1 md:inline hidden">
        <Badge size="default" count={10}>
          <IoBagOutline size={22} className="font-medium" />
        </Badge>
      </Link>
      <Dropdown
        menu={{ items: userProfileRoute as any }}
        placement="bottomLeft"
        trigger={["click"]}
      >
        <Avatar
          className="cursor-pointer h-10 w-10 rounded-full bg-slate-500"
          size={25}
          src="/pos_software.png"
        />
      </Dropdown>

      {/* {session.status === "authenticated" ? (
        <Dropdown
          menu={{ items: userProfileRoute as any }}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <Avatar
            className="cursor-pointer h-10 w-10 rounded-full bg-slate-500"
            size={25}
            src={"/pos_software.png"}
          />
        </Dropdown>
      ) : (
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center justify-between">
            <Link className="mx-2" href="/login">
              <span className="text-sm">Login</span>
            </Link>{" "}
            |{" "}
            <Link className="mx-2" href="/register">
              <span className="text-sm">Sign up</span>
            </Link>
          </div>
        </div>
      )} */}
      {/* <Modal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <HeaderSearch setOpen={setOpen} />
      </Modal> */}
    </div>
  );
}
