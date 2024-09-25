import HeaderLogo from "../header/Logo";

export default async function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* <!-- Company Info --> */}
        <div>
          <HeaderLogo />
          <h4 className="text-xl font-semibold my-4">Headquarters</h4>
          <p className="text-gray-400">
            Your eCommerce platform offering a wide range of products.
          </p>
          <p className="text-gray-400 mt-2">
            Address: 123 E-commerce St, City, Country
          </p>
          <p className="text-gray-400 mt-2">Phone: (123) 456-7890</p>
          <p className="text-gray-400 mt-2">Email: support@example.com</p>
        </div>

        {/* <!-- Useful Links --> */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Customer Service --> */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                Shipping Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                Return Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-black">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Newsletter & Social Media --> */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest news, offers and discounts.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg text-gray-800"
            />
            <button className="bg-black text-white p-2 rounded-r-lg hover:bg-[#F7AA0E]">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-blue-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* <!-- Facebook Icon --> */}
                <path d="M9 8H7v4H4v2h3v8h3v-8h2.69l.31-2H10V9c0-.552.224-1 1-1h2V6h-2.27C9.352 6 9 7.119 9 8.317V8z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* <!-- Twitter Icon --> */}
                <path d="M24 4.557a9.937 9.937 0 0 1-2.828.775A4.928 4.928 0 0 0 23.337 3.5a9.864 9.864 0 0 1-3.127 1.194A4.92 4.92 0 0 0 16.846 3c-2.73 0-4.943 2.211-4.943 4.944 0 .386.043.762.127 1.122-4.109-.206-7.758-2.175-10.197-5.173a4.93 4.93 0 0 0-.668 2.487c0 1.715.871 3.227 2.193 4.117a4.933 4.933 0 0 1-2.238-.617v.062c0 2.398 1.706 4.401 3.972 4.852a4.952 4.952 0 0 1-2.229.084c.63 1.969 2.446 3.403 4.6 3.443a9.874 9.874 0 0 1-6.116 2.106c-.398 0-.79-.023-1.175-.069a13.973 13.973 0 0 0 7.557 2.214c9.064 0 14.017-7.512 14.017-14.017 0-.214-.005-.428-.014-.64A9.935 9.935 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-red-500 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* <!-- Instagram Icon --> */}
                <path d="M7.75 2h8.5C19.874 2 22 4.126 22 7.75v8.5C22 19.874 19.874 22 16.25 22h-8.5C4.126 22 2 19.874 2 16.25v-8.5C2 4.126 4.126 2 7.75 2zM12 5.834a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 12 5.834zm0 10.168a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.222-10.556a1.389 1.389 0 1 0 0-2.778 1.389 1.389 0 0 0 0 2.778z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className=" py-6 mt-12 border">
        <p className="text-center text-gray-400">
          &copy; 2024 YourCompany. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
