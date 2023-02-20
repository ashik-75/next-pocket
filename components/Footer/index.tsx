import { BoltIcon } from "@heroicons/react/24/solid";
import { menus } from "../Header/menus";

function Footer() {
  return (
    <footer id="#footer" className="border-t py-10 lg:py-16">
      <div className="mx-auto max-w-7xl divide-y px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between pb-5 md:flex-row">
          <div className="flex items-center gap-5">
            <BoltIcon className="icon" />

            <div>
              <h1 className="font-bold">Pocket</h1>
              <p>Invest at the perfect time</p>
            </div>
          </div>

          <ul className="flex gap-4">
            {menus?.map((menu) => (
              <li className="text-neutral-700" key={menu.id}>
                <a href={`#${menu.ref}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-5 md:flex-row">
          <p className="order-last text-gray-700 md:order-first">
            © Copyright 2023. All rights reserved.{" "}
          </p>

          <form className="flex items-center space-x-4 ">
            <input
              type="email"
              placeholder="Email address"
              className="w-[60%] rounded border px-3 py-1 outline-none"
            />
            <button className="rounded-lg bg-cyan-500 py-2 px-3 text-sm text-white ">
              Join newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
