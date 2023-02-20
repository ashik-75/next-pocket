import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";

function PriceCard({ name, price, btn, children }: any) {
  const isVip = name === "VIP";
  return (
    <div
      className={` ${
        isVip ? "bg-black" : "bg-white"
      } h-auto space-y-3 rounded-3xl  p-10 shadow-lg shadow-gray-900/5`}
    >
      <div className="flex items-center gap-5 font-medium">
        <ViewfinderCircleIcon className={`icon ${isVip && "text-white"}`} />
        <span className={`${isVip && "text-white"}`}>{name}</span>
      </div>
      <h1 className={`${isVip && "text-white"} text-3xl`}>${price}</h1>
      <button
        className={`w-full rounded-lg  py-2 text-white ${
          isVip ? "bg-cyan-500" : "bg-black"
        }`}
      >
        {btn}
      </button>

      <div className="divide-y">{children}</div>
    </div>
  );
}

export default PriceCard;
