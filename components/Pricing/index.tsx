"use client";
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import Item from "./Item";
import PriceCard from "./PriceCard";

function Pricing() {
  const [monthly, setMonthly] = useState(true);
  return (
    <section id="pricing" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto min-h-[600] max-w-7xl space-y-5 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Flat pricing, no management fees."
          content="Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you."
        />
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded ">
            <button
              onClick={() => setMonthly(true)}
              className={`${
                monthly ? "bg-cyan-600 text-white" : " border"
              }  px-4 py-2 transition `}
            >
              Monthly
            </button>
            <button
              onClick={() => setMonthly(false)}
              className={`${
                !monthly ? "bg-cyan-600 text-white" : "border"
              }  px-4 py-2 transition`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          <PriceCard name="Starter" price={0} btn={"Get Started for free"}>
            <Item text="Comission-free trading" />
            <Item text="Multi-layerde encryption" />
            <Item text="Multi-layerde encryption" />
          </PriceCard>
          <PriceCard name="Investor" price={monthly ? 7 : 70} btn={"Subscribe"}>
            <Item text="Comission-free trading" />
            <Item text="Multi-layerde encryption" />
            <Item text="Multi-layerde encryption" />
            <Item text="Multi-layerde encryption" />
          </PriceCard>
          <PriceCard name="VIP" price={monthly ? 199 : 1199} btn={"Subscribe"}>
            <Item isVip={true} text="Comission-free trading" />
            <Item isVip={true} text="Multi-layerde encryption" />
            <Item isVip={true} text="Multi-layerde encryption" />
            <Item isVip={true} text="Multi-layerde encryption" />
            <Item isVip={true} text="Multi-layerde encryption" />
            <Item isVip={true} text="Multi-layerde encryption" />
          </PriceCard>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
