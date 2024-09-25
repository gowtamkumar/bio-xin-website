import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderLogo() {

  return (
    <div className="md:order-1 order-2">
      <Link href="/">
        <Image
          src='/logo.png'
          alt='logo'
          loading="lazy"
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    </div>
  );
}
