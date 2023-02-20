"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Feature from "./Feature";
import FeatureData from "./FeatureData";

function FeatureList() {
  const [activeId, setActiveId] = useState(FeatureData[0]?.id);

  const handleActiveId = (id: number) => {
    setActiveId(id);
  };
  return (
    <div className="space-y-5">
      <AnimatePresence>
        {FeatureData.map((data) => (
          <Feature
            key={data.id}
            payload={data}
            activeId={activeId}
            handleActiveId={() => handleActiveId(data.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeatureList;
