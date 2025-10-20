import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router"; // ✅ should come from react-router-dom, not react-router
import heroImg from "../assets/images/Rectangle1.png";
import { HeroProvider } from "../context/HeroProvider";

function MainLayout() {
  return (
    <div className="relative min-h-screen p-0 ">
      {/* Background image */}
      <div className="absolute inset-0 ">
        <img
          src={heroImg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content layer */}
      <div className="absolute z-10 left-0 right-0 top-5 w-11/12 mx-auto">
        <Navbar />

        {/* Page content from nested routes */}
        <main className="w-11/12 mx-auto  text-white ">
          <HeroProvider>
            <Outlet />
          </HeroProvider>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

//  <section>
//         <header>
//           <Navbar />
//         </header>
//         <main>
//           <Outlet />
//         </main>
//       </section>
