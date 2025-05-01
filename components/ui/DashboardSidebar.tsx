import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type MenuItems = {
  title: string;
  url: string;
  icon: JSX.Element;
};

const items: MenuItems[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "HomeIcon",
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: "ChartBarIcon",
  },
  {
    title: "My Forms",
    url: "/dashboard/forms",
    icon: "ArrowUpTrayIcon",
  },
];

export default function DashboardSidebar() {
  return (
    <nav className="flex flex-col items-start p-4   bg-blue-500 h-screen  sm:w-1/4 text-white ">
      <h2 className="text-lg font-bold mb-4">Quick Form</h2>
      <ul className="flex flex-col pt-10 space-y-8">
        {items.map((item: MenuItems, index: number) => (
          <li key={index} className="flex items-center space-x-2">
            {item.icon === "HomeIcon" && <HomeIcon className="h-6 w-6" />}
            {item.icon === "ChartBarIcon" && (
              <ChartBarIcon className="h-6 w-6" />
            )}
            {item.icon === "ArrowUpTrayIcon" && (
              <ArrowUpTrayIcon className="h-6 w-6" />
            )}
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
