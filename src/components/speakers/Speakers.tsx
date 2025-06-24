// src/components/SpeakersSection.tsx
import React from "react";
import { Twitter, Linkedin } from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  company?: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Amina El-Badawi",
    title: "Chief Hydrogen Officer",
    company: "Green Energy Corp",
    image: "/img/speakers/person-m-3.webp",
    twitter: "https://twitter.com/amina_elbadawi",
    linkedin: "https://linkedin.com/in/amina-elbadawi",
  },
  {
    name: "Prof. Lars Mueller",
    title: "Director of PtX Research",
    company: "EU Energy Institute",
    image: "/img/speakers/person-m-4.webp",
    twitter: "https://twitter.com/lars_ptx",
    linkedin: "https://linkedin.com/in/lars-mueller",
  },
  {
    name: "Sara N’dour",
    title: "VP, Renewable Fuels",
    company: "SunPower Innovations",
    image: "/img/speakers/person-m-5.webp",
    twitter: "https://twitter.com/sara_ndour",
    linkedin: "https://linkedin.com/in/sara-ndour",
  },
  {
    name: "Jin-Ho Park",
    title: "Head of Policy & Regulation",
    company: "Global PtX Forum",
    image: "/img/speakers/person-m-6.webp",
    twitter: "https://twitter.com/jinho_ptx",
    linkedin: "https://linkedin.com/in/jinho-park",
  },
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 bg-[#FAFCFD] dark:bg-[#111827] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-bold text-3xl md:text-4xl text-base-text">
          Speakers
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
        <p className="mx-auto max-w-2xl text-base-muted leading-relaxed dark:text-white/90 ">
          The World Power-to-X Summit panels and sessions gather to best technical experts, renown researchers and official representatives in the field of power-to-X around the world. Do not miss the opportunity to meet and interact with them during our event.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map(({ name, title, company, image, twitter, linkedin }, idx) => (
            <div
              key={idx}
              className="
                bg-white/80 dark:bg-white/5
                backdrop-blur-sm

                border
                 border-teal-300 dark:border-white/10
                rounded-xl px-6 py-8
                 duration-300
                hover:scale-[1.03] hover:backdrop-blur-md
                hover:cursor-pointer
                transform transition-transform
                shadow-lg
                shadow-gray-500/10
                hover:shadow-teal-500/20
                
                dark:shadow-none
                
              "
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring ring-teal-300"
              />
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white ">{name}</h3>
              <p className="text-sm text-gray-950 dark:text-white">
                {title}
                {company && <span className="block mt-1">&mdash; {company}</span>}
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                {twitter && (
                  <a href={twitter} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300">
                    <Twitter size={20} />
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
