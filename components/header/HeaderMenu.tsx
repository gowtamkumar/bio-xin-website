import React from "react";
import { Badge } from "antd";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
export default function HeaderMenu() {
  // const cart = useSelector(selectCart);

  const menu = [
    { key: "home", label: "Home", url: "/" },
    { key: "product", label: "Product", url: "/" },
    { key: "about", label: "About", url: "/" },
    { key: "contact", label: "Contact", url: "/" },
    { key: "blog", label: "Blog", url: "/" },
  ];

  return (
    <div className="md:flex text-center items-center gap-4 justify-center ">
      {menu.map((item, idx) => (
        <div key={idx}>
          <Link href={item.url}>{item.label}</Link>
        </div>
      ))}

      <div>
        <Link href="/profile" className="cursor-pointer md:hidden inline ">
          <Badge size="default">
            <CiHeart className="font-medium lg:text-lg text-2xl" />
          </Badge>
        </Link>
      </div>

      <Link href="/checkout" className="mt-1 md:hidden inline">
        <Badge size="default" count={10}>
          <IoBagOutline className="font-medium lg:text-lg text-2xl" />
        </Badge>
      </Link>
    </div>
  );
}
