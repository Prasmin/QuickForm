import React from "react";
import { pricingPlans } from "../lib/pricingplan";
import { CheckIcon } from "@heroicons/react/16/solid";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const PricingPage = () => {
  return (
    <div>
      <div>
        <p className="text-center text-2xl font-bold py-5">
          Choose the right plan for you
        </p>
      </div>
      <div className="mx-auto mt-2 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        <p>
          {" "}
          Choose an affordable plan that is packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {pricingPlans.map((pricingPlan, pricingPlanIdx) => (
          <div
            key={pricingPlan.id}
            className={classNames(
              pricingPlan.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              pricingPlan.featured
                ? ""
                : pricingPlanIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={pricingPlan.id}
              className={classNames(
                pricingPlan.featured ? "text-indigo-400" : "text-indigo-600",
                "text-base/7 font-semibold"
              )}
            >
              {pricingPlan.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  pricingPlan.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {pricingPlan.priceMonthly}
              </span>
              <span
                className={classNames(
                  pricingPlan.featured ? "text-gray-400" : "text-gray-500",
                  "text-base"
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                pricingPlan.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {pricingPlan.description}
            </p>
            <ul
              role="list"
              className={classNames(
                pricingPlan.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {pricingPlan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      pricingPlan.featured
                        ? "text-indigo-400"
                        : "text-indigo-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={pricingPlan.href}
              aria-describedby={pricingPlan.id}
              className={classNames(
                pricingPlan.featured
                  ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
                  : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
