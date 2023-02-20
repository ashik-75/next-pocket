import { Bars3Icon, BoltIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import FeatureList from "./FeatureList";

function Features() {
  return (
    <section id="features" className="bg-gray-900 py-20 sm:py-32">
      <div className="mx-auto min-h-[500px] max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        {/* text */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className=" mt-4 text-neutral-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vero praesentium suscipit dolorum quasi repudiandae doloribus?
            Provident sit odit quam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error, voluptatum?
          </p>
        </div>

        {/*  features */}
        <div className="  grid-cols-1 gap-5 text-white md:grid md:grid-cols-2">
          <div className="order-first  md:order-last">
            <FeatureList />
          </div>

          <div className="mt-10 md:mt-0">
            <div className="relative mx-auto h-[600px] w-[340px] overflow-hidden md:w-[366px]">
              <img src="/mobile.svg" alt="" className="relative z-20" />

              <div className="absolute inset-0 h-full  p-5">
                <div className=" bg-black">
                  {/* header */}
                  <div className="flex items-center justify-between p-10">
                    <Bars3Icon className="icon" />
                    <div className="flex items-center space-x-2">
                      <BoltIcon className="icon" />
                      <span>Pocket</span>
                    </div>

                    <UserCircleIcon className="icon" />
                  </div>

                  {/* hero */}
                  <div className="px-10">
                    <h2 className="text-2xl font-semibold text-white">
                      Invite People
                    </h2>
                    <p className="text-gray-500">
                      Get tips 5s sooner for every invite.
                    </p>
                  </div>
                  {/* content */}
                  <div className="mt-8 h-[400px]">
                    <div className="h-full space-y-4 rounded-3xl  bg-white p-10">
                      <div className="border-b pb-1">
                        <p className="text-sm text-gray-700">Full Name</p>
                        <p className="text-sm font-medium text-gray-800">
                          Albert Mcneil
                        </p>
                      </div>
                      <div className="border-b pb-1">
                        <p className="text-sm text-gray-700">Email Address</p>
                        <p className="text-sm font-medium text-gray-800">
                          mcneil@gmail.com
                        </p>
                      </div>

                      <button className="w-full rounded-lg bg-cyan-500 py-2 text-white ">
                        Invite Person
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
