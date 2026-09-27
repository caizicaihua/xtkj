"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BrandMark from "./brand-mark";
import Icon from "./ui-icon";
import { company } from "./site-content";

const navigation = [
  { href: "/#services", label: "TikTok ad services" },
  { href: "/#about", label: "Our company" },
  { href: "/#games", label: "Game showcase" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        header.current?.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={`${company.name} home`} onClick={() => setMenuOpen(false)}>
          <BrandMark /><span className="brand-text"><span>{company.name}</span><span className="brand-legal-name" lang="zh-CN">{company.legalName}</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-small header-cta" href="/#contact">Let&apos;s talk <Icon name="external" /></Link>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(open => !open)}>
          <span /><span />
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
        {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Icon name="arrow" /></Link>)}
        <Link href="/#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk<Icon name="external" /></Link>
      </nav>
    </header>
  );
}
