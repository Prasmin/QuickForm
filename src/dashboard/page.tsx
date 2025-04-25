import React from "react";

type Props = {};

export default function DashboardPage({}: Props) {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  return <div>DashboardPage</div>;
}
