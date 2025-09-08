import * as React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}