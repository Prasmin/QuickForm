import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

type SideNavbarText = {
  label: string;
  icon: string;
};

const SideNavbar: SideNavbar[] = [
  {
    label: "Projects Overview",
    icon: "HomeIcon",
  },
  {
    label: "analytics",
    icon: "ChartBarIcon",
  },
  {
    label: "upgrade",
    icon: "ArrowUpTrayIcon",
  },
];

export default function DashboardSidebar() {
  return (
    <nav className="flex flex-col items-start p-4 bg-gray-100 h-screen w-1/4">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <ul className="flex flex-col space-y-4">
        {SideNavbar.map((item: SideNavbarText, index: number) => (
          <li key={index} className="flex items-center space-x-2">
            {item.icon === "HomeIcon" && <HomeIcon className="h-6 w-6" />}
            {item.icon === "ChartBarIcon" && (
              <ChartBarIcon className="h-6 w-6" />
            )}
            {item.icon === "ArrowUpTrayIcon" && (
              <ArrowUpTrayIcon className="h-6 w-6" />
            )}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
