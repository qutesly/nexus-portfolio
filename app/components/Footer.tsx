import Image from "next/image";
import Link from "next/link";
import React from "react";
import Links from "../data/constant";
import { Clock5, Mail, MessageCircleMore, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative flex flex-col font-k2d">
      <div className="absolute top-0 right-0 ">
        <Image
          src="/images/Ellipse.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col md:flex-row align-left md:items-start justify-center gap-10 md:gap-30 mt-20 p-5 md:p-20 ">
        <div className="flex flex-col gap-2">
          <p className="text-[16px] mb-2">Sit City</p>
          {Links.map((link) => (
            <Link href="" key={link.name} className="text-white/60">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] mb-2">LEGAL</p>
          <Link href="/" className="text-white/60 cursor-pointer">
            Terms and condition
          </Link>
          <Link href="/" className="text-white/60">
            License and Agreements
          </Link>
          <Link href="/" className="text-white/60">
            Payment and Install
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[16px] mb-2">CONTACT</p>
          <Link
            href="/"
            className="text-white/60 cursor-pointer flex items-center gap-2"
          >
            <Phone className="text-[#BBFF7F] w-4 h-4" />
            +234 813 445 3169
          </Link>
          <Link
            href="/"
            className="text-white/60 cursor-pointer flex items-center gap-2"
          >
            <MessageCircleMore className="text-[#BBFF7F] w-4 h-4" />
            +234 813 445 3169
          </Link>
          <Link
            href="/"
            className="text-white/60 cursor-pointer flex items-center gap-2"
          >
            <Mail className="text-[#BBFF7F] w-4 h-4" />
            qutesly@gmail.com
          </Link>
          <Link
            href="/"
            className="text-white/60 cursor-pointer flex items-center gap-2"
          >
            <Clock5 className="text-[#BBFF7F] w-4 h-4" />
            <div className="flex flex-col">
              <p>Open and Close</p>
              <p>09:00 am - 10:00 pm</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute "></div>
    </div>
  );
};

export default Footer;
