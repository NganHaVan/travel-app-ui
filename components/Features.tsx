import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end flex">
        {/* LEFT */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        {/* RIGHT */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              src="/camp.svg"
              alt="camp"
              height={50}
              width={50}
            />
            <h2 className="bold-40 lg:bold-64">Our features</h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 ">
            {FEATURES.map(feat => (
              <FeatureItem
                title={feat.title}
                key={feat.title}
                icon={feat.icon}
                description={feat.description}
                variant={feat.variant}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
type FeatureItemProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};
const FeatureItem = ({
  title,
  description,
  icon,
  variant
}: FeatureItemProps) => (
  <li className="flex w-full flex-1 flex-col items-start">
    <div className={`rounded-full p-4 lg:p-7 bg-${variant}-500`}>
      <Image src={icon} alt={`${title} icon`} width={28} height={28} />
    </div>
    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
    <p className="regular-16 mt-5 bg-white/80 text-gray-400 lg:mt-[30px] lg:bg-none">
      {description}
    </p>
  </li>
);
