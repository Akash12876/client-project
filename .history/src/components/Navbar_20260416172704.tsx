"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

type IconProps = {
  className?: string;
};

type NavItem = {
  label: string;
  href: string;
  icon: React.FC<IconProps>;
};

const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5.5 9.5V21h5.5v-5.5h2V21h5.5V9.5" />
  </svg>
);

const AboutIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="8" r="3.25" />
    <path d="M5.5 20c1.5-3.5 4-5.25 6.5-5.25S17 16.5 18.5 20" />
  </svg>
);

const ServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
    <path d="M13.5 5.5 10.5 18.5" />
  </svg>
);

const ImpactIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="2 17 8 11 12 15 16 9 22 15" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const ContactIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "About", href: "/about-us", icon: AboutIcon },
  { label: "Services", href: "#services", icon: ServicesIcon },
  { label: "Impact", href: "#impact-slider", icon: ImpactIcon },
  { label: "Contact", href: "#contact", icon: ContactIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleBrandClick = () => {
    window.location.assign("/");
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }

      const selector = href === "#contact" ? "#contact, section[data-contact='true']" : href;
      const el = document.querySelector(selector);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (href === "#contact") {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg"
      style={{ boxShadow: "0 4px 32px 0 rgba(31,38,135,0.10)" }}
    >
      {/* Logo */}
      <button
        className="flex items-center h-12 w-[45vw] max-w-[340px] min-w-[170px] focus:outline-none"
        onClick={handleBrandClick}
      >
        <Image
          src="/iparx.png"
          alt="IPARX MEDIA"
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-contain object-left"
        />
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-2 md:gap-6" onMouseLeave={() => setDesktopServicesOpen(false)}>
        {navItems.map((item) => (
          <span
            key={item.label}
            className="relative"
            onMouseEnter={() => item.label === "Services" && setDesktopServicesOpen(true)}
            onMouseLeave={() => item.label === "Services" && setDesktopServicesOpen(false)}
          >
            <button
              onClick={() => handleNav(item.href)}
              className="text-white/90 font-semibold px-3 py-1 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 group"
            >
              <span className={`inline-block transition-all duration-200 ${item.label === "Services" && desktopServicesOpen ? "scale-110 text-indigo-400" : "hover:scale-110 hover:text-indigo-400"}`}>
                {item.label.toUpperCase()}
              </span>
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-400 transition-transform duration-300 origin-left rounded-full ${item.label === "Services" && desktopServicesOpen ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}`} />
            </button>

            {/* Services Dropdown */}
            {item.label === "Services" && desktopServicesOpen && (
              <div className="absolute left-0 top-full w-64 bg-[#0c1020]/95 border border-indigo-400/30 rounded-lg backdrop-blur-lg shadow-2xl origin-top pt-2">
                <div className="p-2 space-y-1">
                  {[
                    { title: "Performance Marketing", href: "/services/performance-marketing" },
                    { title: "Social Media Marketing", href: "/services/social-media-marketing" },
                    { title: "Creative Strategy", href: "/services/creative-strategy" },
                    { title: "Video Editing", href: "/services/video-editing" },
                  ].map((service) => (
                    <button
                      key={service.title}
                      onMouseDown={() => { setDesktopServicesOpen(false); router.push(service.href); }}
                      className="w-full text-left px-4 py-3 rounded-md text-white/80 hover:bg-indigo-500/20 hover:text-indigo-300 transition-all duration-200 font-medium text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {service.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </span>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center w-11 h-11 focus:outline-none z-[130] rounded-full bg-[#0c1020]/90 border border-indigo-400/30"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
      >
        {open ? (
          <span className="text-4xl leading-none text-white">&times;</span>
        ) : (
          <span className="flex flex-col justify-center items-center gap-1.5">
            <span className="block w-6 h-0.5 rounded-full bg-indigo-300" />
            <span className="block w-6 h-0.5 rounded-full bg-indigo-300" />
            <span className="block w-6 h-0.5 rounded-full bg-indigo-300" />
          </span>
        )}
      </button>

      {/* Mobile Menu */}
      <>
        <button
          className={`fixed inset-0 backdrop-blur-[1px] z-[105] md:hidden transition-opacity duration-300 ease-out ${open ? "bg-black/65 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
        <aside
          id="mobile-menu-drawer"
          className={`fixed top-0 right-0 z-[120] h-dvh w-[86%] max-w-[340px] bg-[#05070d] border-l border-white/10 pt-24 px-4 pb-7 md:hidden overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
        >
          <nav className="h-full rounded-2xl border border-indigo-500/15 bg-[#070910]/80 px-3 py-4 flex flex-col gap-3 overflow-y-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isServices = item.label === "Services";

              return (
                <div key={item.label}>
                  <button
                    onClick={() => isServices ? setServicesOpen(!servicesOpen) : handleNav(item.href)}
                    className={`group w-full rounded-xl px-3 py-4 flex items-center gap-3 text-left text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-[transform,opacity,background-color,color] duration-300 ease-out ${open ? "translate-x-0 opacity-100 hover:bg-indigo-500/15 hover:translate-x-1" : "translate-x-8 opacity-0 pointer-events-none"}`}
                    style={{ transitionDelay: open ? `${120 + index * 60}ms` : "0ms" }}
                  >
                    <Icon className="w-6 h-6 text-zinc-200 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-indigo-300" />
                    <span className="text-[1.95rem] leading-none font-semibold tracking-wide flex-1">
                      {item.label}
                    </span>
                    {isServices && (
                      <span className={`text-xl transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}>
                        ›
                      </span>
                    )}
                  </button>
                  
                  {/* Services Mobile Submenu */}
                  {isServices && servicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-indigo-400/30 pl-3">
                      {[
                        { title: "Performance Marketing", href: "/services/performance-marketing" },
                        { title: "Social Media Marketing", href: "/services/social-media-marketing" },
                        { title: "Creative Strategy", href: "/services/creative-strategy" },
                        { title: "Video Editing", href: "/services/video-editing" },
                      ].map((service) => (
                        <button
                          key={service.title}
                          onClick={() => {
                            handleNav(service.href);
                            setServicesOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-lg text-zinc-300 hover:bg-indigo-500/15 hover:text-indigo-300 transition-all duration-200 text-sm font-medium"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-indigo-400" />
                            {service.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>
      </>
    </header>
  );
}
