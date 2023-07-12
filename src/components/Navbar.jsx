import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed min-w-full">
      <nav className="md:block hidden bg-white border-[#ff4800] border-b-4">
        <div className="flex flex-wrap items-center justify-between mx-auto p-1">
          <a href="/" className="flex items-center">
            <img
              src="/Logo.jpg"
              className="h-20 mr-2 rounded-3xl"
              alt="Belly Logo"
            />
            <h1 className="self-center text-5xl text-[#ff4800] font-bold whitespace-nowrap hover:text-[#ffe100]">Belly</h1>
          </a>

          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <nav className="md:hidden block border-gray-200 bg-gray-50">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img
                src="/Logo.jpg"
                className="h-12 mr-3"
                alt="Belly Logo"
              />
              <h1 className="self-center text-3xl text-[#ff4800] font-bold whitespace-nowrap hover:text-[#ffe100]">
                Belly
              </h1>
            </a>

            <button
              onClick={toggleNavbar}
              type="button"
              className="hover:border-[#ff4800] inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="w-6 h-6 text-[#ff4800] hover:border-[#ff4800]"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="w-full" id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                <li>
                  <a
                    href="#about"
                    className="block py-2 pl-3 pr-4 text-[#ff4800] hover:bg-[#ff4800] hover:text-white rounded-xl hover:bg-opacity-70"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="block py-2 pl-3 pr-4 text-[#ff4800] rounded-xl hover:bg-[#ff4800] hover:text-white hover:bg-opacity-70"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;


// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setisOpen] = useState(false);
//   return (
//     <div className="fixed min-w-full">
//       <nav className="md:block hidden bg-white border-[#ff4800] border-b-4">
//         <div className="flex flex-wrap items-center justify-between mx-auto p-1">
//           <a href="/" className="flex items-center">
//             <img
//               src="/Logo.jpg"
//               className="h-20 mr-2 rounded-3xl"
//               alt="Belly Logo"
//             />
            


//             {/* <span className="self-center text-4xl text-[#ff4800] font-bold whitespace-nowrap hover:text-[#ffe100]">
//               Belly
//             </span> */}
//           </a>
//           <h1 className="self-center flex items-center justify-center text-5xl text-[#ff4800] font-bold whitespace-nowrap hover:text-[#ffe100]">Belly</h1>


//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
//             </svg>
//           </button>
//           {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-[#ff4800]">
//               <li>
//                 <a
//                   href="#about"
//                   className="text-[#ff4800] block py-2 pl-3 pr-4rounded bg-transparent md:p-0 font-bold text-2xl hover:text-[#ffe100]"
//                   aria-current="page"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#product"
//                   className="text-[#ff4800] block py-2 pl-3 pr-4rounded bg-transparent md:p-0 font-bold text-2xl hover:text-[#ffe100]"
//                   aria-current="page"
//                 >
//                   Products
//                 </a>
//               </li>
//             </ul>
//           </div> */}
//         </div>
//       </nav>

//       <nav className="md:hidden block border-gray-200 bg-gray-50">
//         <div className="flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="#" className="flex items-center">
//             <img src="/Logo.jpg" className="h-12 mr-3" alt="Belly Logo" />
//           </a>
//           <button
//             onClick={() => setisOpen(!isOpen)}
//             data-collapse-toggle="navbar-hamburger"
//             type="button"
//             className=" hover:border-[#ff4800] inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//             aria-controls="navbar-hamburger"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6 text-[#ff4800] hover:border-[#ff4800]"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
//             </svg>
//           </button>
//           {isOpen && (
//             <div className="w-full" id="navbar-hamburger">
//               <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
//                 <li>
//                   <a
//                     href="#about"
//                     className="block py-2 pl-3 pr-4 text-[#ff4800] hover:bg-[#ff4800] hover:text-white rounded-xl hover:bg-opacity-70"
//                     aria-current="page"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#product"
//                     className="block py-2 pl-3 pr-4 text-[#ff4800] rounded-xl hover:bg-[#ff4800] hover:text-white hover:bg-opacity-70"
//                   >
//                     Products
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
