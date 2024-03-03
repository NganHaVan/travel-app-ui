import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-100px">
      <div className="get-app">
        {/* LEFT */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 text-white">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-gray-400">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-400">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col xl:flex-row gap-3 whitespace-nowrap">
            <Button
              title="Appstore"
              type="button"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              title="Playstore"
              type="button"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" width={550} height={870} alt="phones" />
        </div>
      </div>
    </section>
  );
}
