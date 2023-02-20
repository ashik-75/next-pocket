"use client";
import { BoltIcon } from "@heroicons/react/24/solid";
import { menus } from "./menus";

function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <BoltIcon className="icon" />
            <span className="text-xl font-bold">Pocket</span>
          </div>
          <div className="hidden space-x-5 md:block">
            {menus.map((menu) => (
              <a
                className="text-neutral-600"
                key={menu.id}
                href={`#${menu.ref}`}
              >
                {menu.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-x-4">
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm">
            Login
          </button>
          <button className="rounded-lg border border-gray-200 bg-black px-4 py-2 text-sm font-bold text-white">
            Download
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
