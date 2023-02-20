import { CheckCircleIcon } from "@heroicons/react/24/outline";

function Item({ text, isVip }: { text: string; isVip?: boolean }) {
  return (
    <div className="flex items-center gap-5 py-2">
      <CheckCircleIcon className={`icon ${isVip && "text-cyan-600"}`} />
      <span className={`${isVip ? "text-white" : "text-gray-700"} text-sm`}>
        {text}
      </span>
    </div>
  );
}

export default Item;
