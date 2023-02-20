import { motion } from "framer-motion";

function Feature({
  payload: { icon: Icon, title, content, id },
  activeId,
  handleActiveId,
}: any) {
  return (
    <motion.div
      animate={{}}
      transition={{
        duration: 1,
      }}
      exit={{
        opacity: 0,
        type: "tween",
      }}
      layoutId={id}
      onClick={handleActiveId}
      className={`space-y-3 rounded-xl p-8 ${
        activeId === id && "bg-gray-800/60"
      } cursor-pointer hover:bg-gray-800/30`}
    >
      <button className="relative">
        <span className="relative z-10">
          <Icon className=" h-7 w-7 scale-110" />
        </span>
        <div className=" absolute inset-0  rounded-full bg-gray-600"></div>
      </button>

      <div className="max-w-lg space-y-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{content}</p>
      </div>
    </motion.div>
  );
}

export default Feature;
