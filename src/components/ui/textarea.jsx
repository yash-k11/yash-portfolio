import * as React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`border px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
}