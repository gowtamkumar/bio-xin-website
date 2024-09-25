import { FaBeer, FaRegUser } from "react-icons/fa";
import { MenuProps } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";

// key as like features

// const handleBackup = async (): Promise<void> => {
//   const date = new Date();
//   const pad = (num: number): string => num.toString().padStart(2, "0");
//   const currentDate = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
//     date.getDate()
//   )}-${pad(date.getHours())}-${pad(date.getMinutes())}`;

//   try {
//     // const response = await backupDB();

//     const response = await fetch(
//       `${process.env.NEXT_SERVER_URL}/api/v1/settings/db-backup`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ a: 1, b: "Textual content" }),
//       }
//     );

//     console.log("🚀 ~ response:", response);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", `backup-${currentDate}.sql.zip`);
//     document.body.appendChild(link);
//     link.click();
//     link.parentNode?.removeChild(link); // Use optional chaining for safety
//     window.URL.revokeObjectURL(url); // Clean up the URL object
//   } catch (error) {
//     console.error("Backup failed:", error);
//     alert("Backup failed");
//   }
// };

const navbarRoute = [
  {
    key: "dashboard",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard">Dashboard</Link>,
    route: "true",
  },

  {
    key: "product",
    label: "Product",
    disabled: "true",
    route: "true",
  },

  {
    key: "New Product",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/products/new">New Product</Link>,
    route: "true",
  },
  {
    key: "Product",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/products">Product</Link>,
    route: "true",
  },

  // {
  //   key: "size",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/size">Size</Link>,
  //   route: "true",
  // },
  // {
  //   key: "unit",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/unit">Unit</Link>,
  //   route: "true",
  // },
  // {
  //   key: "color",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/color">Color</Link>,
  //   route: "true",
  // },
  // {
  //   key: "discount",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/discounts">Discount & Coupon</Link>,
  //   route: "true",
  // },

  {
    key: "category",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/category">Category</Link>,
    route: "true",
  },
  {
    key: "brands",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/brands">Brands</Link>,
    route: "true",
  },
  // {
  //   key: "taxs",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/taxs">Taxs</Link>,
  //   route: "true",
  // },

  {
    key: "wishlists",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/wishlists">Wishlists</Link>,
    route: "true",
  },
  // {
  //   key: "status",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/status">Status</Link>,
  //   route: "true",
  // },

  {
    key: "Payment",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/payments">Payments</Link>,
    route: "true",
  },
  {
    key: "order",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: "Order Manage",
    route: "true",
    children: [
      {
        key: "neworders",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: <Link href="/dashboard/orders/new">New Order</Link>,
        route: "true",
      },
      {
        key: "Order",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: <Link href="/dashboard/orders">Orders</Link>,
        route: "true",
      },
    ],
  },

  {
    key: "Shipping_managment",
    label: "Shipping",
    disabled: "true",
    route: "true",
  },

  {
    key: "shipping_address",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/shipping-address">Shipping Address</Link>,
    route: "true",
  },

  {
    key: "shipping_charge",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/shipping-charges">Shipping Charge</Link>,
    route: "true",
  },

  {
    key: "report_section",
    label: "Report",
    disabled: "true",
    route: "true",
  },
  {
    key: "report",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/report">Report</Link>,
    route: "true",
  },
  // {
  //   key: "review",
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  //   label: <Link href="/dashboard/review">Review</Link>,
  //   route: "true",
  // },

  {
    key: "setting",
    label: "Setting",
    disabled: "true",
    route: "true",
  },

  {
    key: "location",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: "Manage location ",
    route: "true",
    children: [
      {
        key: "country",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: <Link href="/dashboard/country">Country</Link>,
        route: "true",
      },
    ],
  },
  {
    key: "user",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/user">User</Link>,
    route: "true",
  },
  {
    key: "setting_manage",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/setting">Setting</Link>,
    route: "true",
  },
  {
    key: "web_setting",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/website-setting">Web Setting </Link>,
    route: "true",
  },
];

const profileRoute: MenuProps["items"] = [
  {
    key: "my_account",
    label: <Link href={"/profile"}>My Account</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  {
    key: "orders",
    label: <Link href="/profile">Orders</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  // {
  //   key: "wishlist",
  //   label: <Link href="/profile">Wishlist</Link>,
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  // },
  {
    key: "order_track",
    label: <Link href="/profile">Order Track</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  {
    key: "logout",
    label: <Link href="/">Logout</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    onClick: () => {
      signOut();
    },
  },
  {
    key: "3",
    label: "Database Backup",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    // onClick: () => {
    //   handleBackup();
    // },
  },
];

const userProfileRoute: MenuProps["items"] = [
  {
    key: "my_account",
    label: <Link href="/">My Account</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  {
    key: "orders",
    label: <Link href="/">Orders</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  // {
  //   key: "wishlist",
  //   label: <Link href="/profile">Wishlist</Link>,
  //   icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  // },
  {
    key: "order_track",
    label: <Link href="/">Order Track</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  {
    key: "logout",
    label: <Link href="/">Logout</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
];

const webSiteNavbarItems: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <FaRegUser />,
  },
  {
    label: "About us",
    key: "about",
    icon: <FaRegUser />,
    // disabled: true,
  },
  {
    label: "Contract",
    key: "contact",
    icon: <FaRegUser />,
    // disabled: true,
  },

  {
    label: "Category",
    key: "category",
    icon: <FaRegUser />,
    children: [
      {
        label: (
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Option 1
          </a>
        ),
        key: "alipay",
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

export { navbarRoute, profileRoute, webSiteNavbarItems, userProfileRoute };
