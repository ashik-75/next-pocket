"use client";
import {
  ArrowUpRightIcon,
  PlayCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, BoltIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const sponsors = [
  {
    id: 1,
    url: "/forbes.png",
  },
  {
    id: 2,
    url: "/bbc.png",
  },
  {
    id: 3,
    url: "/cnn.png",
  },
  {
    id: 4,
    url: "/cbs.png",
  },
  {
    id: 5,
    url: "/tc.png",
  },
  {
    id: 6,
    url: "/tesla.png",
  },
];

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="hero" className=" py-20 lg:py-28">
      <div className="mx-auto grid  max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className=" space-y-7">
          <h2 className="text-2xl font-semibold text-neutral-700 md:text-4xl">
            Invest at the perfect time
          </h2>

          <p className="text-neutral-700">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
          </p>
          {/* buttons */}
          <div className="flex gap-5">
            <button className="flex items-center justify-center space-x-4 rounded-lg border border-gray-200 bg-gray-800 px-3 py-1">
              <img src="/play.png" className="w-5" />
              <div className="flex flex-col items-start">
                <p className="text-xs text-white">Get on</p>
                <p className="text-sm font-bold text-white">Google Play</p>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center space-x-4 rounded-lg border border-gray-200 px-3 py-1"
            >
              <PlayCircleIcon className="h-6 w-6" />
              <span className="text-gray-600">Watch the video</span>
            </button>
          </div>
          {/* sponsord */}
          <div className="space-y-5">
            <h4 className="font-medium">As featured in</h4>

            <ul className="flex flex-wrap gap-2">
              {sponsors.map((image) => (
                <li key={image.id}>
                  <img src={image.url} alt="" className="h-12 w-28" />
                </li>
              ))}
            </ul>
          </div>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="8pDqJVdNa44"
            onClose={() => setIsOpen(false)}
          />
        </div>

        {/* right section */}
        <div className=" ">
          <div className="relative mx-auto h-[600px] w-[366px] overflow-hidden">
            <img src="/mobile.svg" className=" " alt="" />
            <div className="absolute inset-0 -z-20  rounded-3xl  p-5 ">
              <div className="bg-black">
                {/* menus */}
                <div className="flex items-center justify-between p-10 text-white">
                  <Bars3Icon className="icon" />

                  <div className="flex items-center gap-3">
                    <BoltIcon className="icon" />
                    <span>Pocket</span>
                  </div>

                  <UserCircleIcon className="icon" />
                </div>

                {/* content */}
                <div className="h-[100%]  space-y-5 rounded-t-3xl bg-white p-5 px-10">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-xs ">
                      Tailwind Corp, Inc: <span>$CSS</span>{" "}
                    </span>

                    <PlusCircleIcon className="icon" />
                  </div>

                  <div className="divide-y divide-neutral-100">
                    <div className="flex justify-between py-2">
                      <p className="text-sm text-gray-600">Number of shares</p>
                      <p className="font-semibold">100</p>
                    </div>
                    <div className="flex justify-between py-2">
                      <p className="text-sm text-gray-600">
                        Current Market Price
                      </p>
                      <p className="flex items-center gap-1 font-semibold">
                        <span>$34.55</span>
                        <ArrowUpRightIcon className="icon text-cyan-500" />{" "}
                      </p>
                    </div>
                    <div className="flex justify-between py-2">
                      <p className="text-sm text-gray-600">Estimates Cost</p>
                      <p className="font-semibold">$3678.00</p>
                    </div>
                  </div>
                  <button className="w-full rounded-lg bg-cyan-500/50 py-2 text-white">
                    Buy Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
