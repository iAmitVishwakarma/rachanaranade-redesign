import { CheckCircle, Circle, CircleX, CrossIcon } from "lucide-react";
import React from "react";
import useMembershipPlanStore from "../stores/membershipStore";

const MembershipPrice = () => {
  const { plans } = useMembershipPlanStore();

  return (
    <section className=" py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join Our Membership
        </h2>
        <p className="text-lightText mb-12">
          Get exclusive access to premium content, live sessions, and a
          supportive community.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border-2 rounded-2xl p-8 text-left flex flex-col ${
                plan.popular
                  ? "bg-primary/50 border-gray-500 shadow-2xl relative "
                  : "border-gray-200 bg-gray-50/5 backdrop-blur-2xl"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 -translate-y-1/2 bg-white text-teal-900 text-xs font-bold px-3 py-1 rounded-full left-1/2 -translate-x-1/2 ">
                  MOST POPULAR
                </span>
              )}
              <div className="text-white">
              <h3 className="text-2xl  font-bold">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="opacity-90">/{plan.period}</span>
              </p>
              </div>
              <ul className="mt-8 space-y-4 text-gray-100 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle
                      className={`${plan.popular ? "" : "text-teal-700"}`}
                      size={20}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
                  {plan.notInclude.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 opacity-70 ">
                    <CircleX
                      size={20}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-10 py-3 rounded-xl font-semibold  transition-all ease-in-out ${
                  plan.popular
                    ? "bg-gray-200 text-gary-500 hover:bg-teal-700 hover:text-gray-50 "
                    : "bg-gray-200 text-teal-600 hover:bg-gray-300"
                }`}
              >
                {plan.callToAction}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPrice;
