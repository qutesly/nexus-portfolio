import Image from "next/image";
import Link from "next/link";
import React from "react";
import Links from "../data/constant";
import { Clock5, Mail, MessageCircleMore, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative flex flex-col font-k2d mb-10">
      <div className="absolute top-0 right-0 ">
        <Image
          src="/images/Ellipse.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col md:flex-row align-left md:items-start justify-center gap-10 md:gap-30 mt-20 p-5 md:p-20 mb-30">
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 gap-5">
        <div className="flex items-center justify-between ">
          <div className="relative w-17.5 sm:w-22.5 md:w-28.75 aspect-square">
            <Image
              src="/images/Vector.svg"
              alt="vector img"
              fill
              className="-mt-2"
            />
          </div>
          <div className="relative w-40 sm:w-55 md:w-75 lg:w-87.5 aspect-5/1">
            {" "}
            <Image
              src="/images/SITCITY.png"
              alt="sitcity logo"
            fill
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full translate-y-20">
        <p className="text-center mb-10 text-[12px]"> © 2026 Sylvester-Pius</p>
      </div>
    </div>
  );
};

export default Footer;
