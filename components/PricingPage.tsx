"use client";
import React from "react";
import { pricingPlans } from "../lib/pricingplan";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { getStripe } from "../lib/stripe-client";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  userId: string | undefined;
};

const PricingPage: React.FC<Props> = ({ userId }) => {
  const router = useRouter();

  const checkoutHandler = async (price: number, plan: string) => {
    if (!userId) {
      router.push("/sign-in");
    }
    if (price === 0) {
      return;
    }
    try {
      const { sessionId } = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price, userId, plan }),
      }).then((res) => res.json());

      const stripe = await getStripe();

      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log(error);
    }
  };
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
            <button
              className={classNames(
                pricingPlan.name === "Enterprise"
                  ? "default text-black bg-white hover:bg-null"
                  : "outline",
                "w-full"
              )}
              type="button"
              onClick={() =>
                checkoutHandler(
                  pricingPlan.name === "Pro"
                    ? 29
                    : pricingPlan.name === "Enterprise"
                    ? 70
                    : 0,
                  pricingPlan.name
                )
              }
            >
              Get started with {pricingPlan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
