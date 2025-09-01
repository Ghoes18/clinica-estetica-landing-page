import React from "react";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-rose-100/70 px-3 py-1 text-rose-700 text-xs font-medium ring-1 ring-rose-200">
    {children}
  </span>
);

export default Badge;
