"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  FileCheck2,
  Globe2,
  Landmark,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { contact } from "@/content/site";
import { LanguageChooser, LanguageSelect } from "./language-provider";

const employerLinks = [
  ["Employer Hub", "/employers", "Submit and manage a workforce requirement"],
  ["Recruitment Services", "/recruitment-services", "Skilled, semi-skilled, general and domestic"],
  ["Industries", "/industries", "Explore the sectors Topway supports"],
  ["Recruitment Process", "/recruitment-process", "From requirement to mobilisation"],
] as const;

const companyLinks = [
  ["About Topway", "/about", "Company, capabilities and leadership"],
  ["Licence & Compliance", "/licence-compliance", "Verify licence and operating details"],
  ["Leadership", "/leadership", "Meet Topway's leadership"],
  ["Contact", "/contact", "Speak directly with the team"],
] as const;

const mobileGroups = [
  {
    label: "For companies",
    links: [
      ["Hire Workers", "/employers", BriefcaseBusiness],
      ["Recruitment Services", "/recruitment-services", Building2],
      ["Industries", "/industries", UsersRound],
      ["Recruitment Process", "/recruitment-process", FileCheck2],
      ["Global Markets", "/global-markets", Globe2],
    ],
  },
  {
    label: "Jobs & candidates",
    links: [
      ["Verified Jobs", "/job-registry", Search],
      ["Candidate Centre", "/candidates", UserRound],
    ],
  },
  {
    label: "Topway",
    links: [
      ["About Topway", "/about", Landmark],
      ["Licence & Compliance", "/licence-compliance", ShieldCheck],
      ["Contact", "/contact", MessageCircle],
    ],
  },
] as const;

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopMenu({
  label,
  href,
  links,
  pathname,
}: {
  label: string;
  href: string;
  links: readonly (readonly [string, string, string])[];
  pathname: string;
}) {
  return (
    <div className="desktop-nav-group">
      <Link className={isCurrent(pathname, href) ? "active" : ""} href={href}>
        {label}
        <ChevronDown aria-hidden="true" />
      </Link>
      <div className="desktop-nav-dropdown">
        {links.map(([name, link, description]) => (
          <Link href={link} key={link}>
            <strong>{name}</strong>
            <span>{description}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("menu-open");
    const previous = document.activeElement as HTMLElement;
    const focusable = panel.current?.querySelectorAll<HTMLElement>("a,button,select");
    focusable?.[0]?.focus();

    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", key);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [open]);

  return (
    <header className="header">
      <div className="utility-bar">
        <div className="container">
          <span>
            <ShieldCheck size={13} />
            Licensed Foreign Employment Agency No. 2238
          </span>
          <div>
            <a href={`tel:${contact.mobile}`}>{contact.mobileDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>

      <div className="container nav">
        <Link className="brand-link" href="/" aria-label="Topway home">
          <Image
            className="logo"
            src="/assets/logo.png"
            width={198}
            height={136}
            priority
            alt="Topway Private Limited"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <DesktopMenu
            label="Hire Workers"
            href="/employers"
            links={employerLinks}
            pathname={pathname}
          />
          <Link className={isCurrent(pathname, "/global-markets") ? "active" : ""} href="/global-markets">
            Global Markets
          </Link>
          <Link className={isCurrent(pathname, "/job-registry") ? "active" : ""} href="/job-registry">
            Verified Jobs
          </Link>
          <DesktopMenu label="Company" href="/about" links={companyLinks} pathname={pathname} />
        </nav>

        <div className="desktop-nav-actions">
          <Link className="desktop-candidate-link" href="/candidates">
            For Candidates
          </Link>
          <LanguageSelect />
          <Link className="btn btn-primary" href="/employers">
            Request Workers
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
        >
          <Menu />
        </button>
      </div>

      <div className="mobile-language-prompt">
        <div className="container">
          <LanguageChooser compact />
        </div>
      </div>

      {open && (
        <div
          className="mobile-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="mobile-panel" ref={panel} role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="mobile-panel-head">
              <Image src="/assets/logo.png" width={198} height={136} alt="Topway Private Limited" />
              <button onClick={() => setOpen(false)} aria-label="Close navigation">
                <X />
              </button>
            </div>

            <Link className="btn btn-primary mobile-primary" href="/employers" onClick={() => setOpen(false)}>
              Request Workers
              <ArrowRight size={16} />
            </Link>

            <LanguageChooser compact />

            <div className="mobile-nav-groups">
              {mobileGroups.map((group) => (
                <section key={group.label}>
                  <span>{group.label}</span>
                  <nav aria-label={group.label}>
                    {group.links.map(([name, href, Icon]) => (
                      <Link
                        className={isCurrent(pathname, href) ? "active" : ""}
                        href={href}
                        key={href}
                        onClick={() => setOpen(false)}
                      >
                        <Icon aria-hidden="true" />
                        <strong>{name}</strong>
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    ))}
                  </nav>
                </section>
              ))}
            </div>

            <div className="mobile-contact-actions">
              <a href={`tel:${contact.mobile}`}>
                <Phone />
                Call Topway
              </a>
              <a href={`https://wa.me/${contact.mobile.replace("+", "")}`}>
                <MessageCircle />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
