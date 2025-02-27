"use client"; // Only needed if using Next.js App Router

import { useState, useEffect, useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";
import { EnquiryFormContext } from "@/context/EnquiryFormContext";

const Header = ({ lgScreen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const firstNavRefs = useRef([]); // About Us & Projects
  const lastNavRefs = useRef([]); // Remaining items
  const navLogoRef = useRef(null);
  const headerRef = useRef(null);
  const projectLink = useRef([]);

  /* useEffect(() => {
    const tl = gsap.timeline();

    tl.set(headerRef.current, { visibility: "visible", opacity: 1 });
    // Step 2: Animate Logo First
    tl.from(navLogoRef.current, {
      duration: 1.2,
      y: -50,
      opacity: 0,
      ease: "power2.out",
    })

      // Step 3: Animate "About Us" & "Projects"
      .from(firstNavRefs.current, {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
      })

      // Step 4: Animate remaining items ("Amenities", "Contact Us", "Gallery")
      .from(lastNavRefs.current, {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
      });

    return () => tl.kill();
  }, []); */

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.3, ease: "power3.in" });
    }
  }, [menuOpen]);
  const { openPopup } = useContext(EnquiryFormContext);
  return (
    <header
      ref={headerRef}
      className={`absolute z-[40] w-full ${lgScreen} right-0`}
    >
      <nav className="relative">
        <ul className="flex font-cinzel text-white px-6 lg:px-10 450:py-4 py-4 items-center justify-between lg:justify-evenly">
          {/* Logo */}
          <li className="hidden lg:block">
            <Link href="/about-us">About Us</Link>
          </li>
          <li onClick={openPopup} className="hidden cursor-pointer lg:block">
            Projects
          </li>
          <li ref={navLogoRef}>
            <Link href="/">
              <img
                className="w-[27.5vw] 450:w-[15.5vw] sm:w-[12.5vw] lg:w-44"
                src="/logo.png"
                alt="logo"
              />
            </Link>
          </li>
          {["Amenities", "Contact Us", "Gallery"].map((item, index) => (
            <li
              key={index}
              ref={(el) => (lastNavRefs.current[index] = el)}
              className="hidden lg:block"
            >
              <Link href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
          {/* Menu Icon (Only for Small Screens) */}
          <li className="lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-2xl text-mainText" />
            </button>
          </li>
        </ul>

        {/* Sidebar Menu */}
        <div
          ref={menuRef}
          className="fixed z-50 top-0 right-0 h-screen w-[100%] 450:w-[40%] bg-greenTheme lg:hidden text-white transform translate-x-full"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 text-2xl"
          >
            <FaTimes className="text-mainText" />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col text-mainText items-center justify-center h-full space-y-6 text-xl">
            {["About us", "Projects", "Amenities", "Contact Us", "Gallery"].map(
              (item, index) => (
                <li
                  className="cursor-pointer"
                  key={index}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onClick={item === "Projects" ? openPopup : undefined} // Add onClick for "Projects"
                >
                  {item === "Projects" ? (
                    item // Render just the text without a Link
                  ) : (
                    <Link href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                      {item}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
