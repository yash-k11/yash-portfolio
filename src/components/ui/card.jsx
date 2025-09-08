import * as React from "react";

export function Card({ children, className = "" }) {
  return <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="border-b px-4 py-2">{children}</div>;
}
export function CardTitle({ children }) {
  return <h3 className="font-semibold">{children}</h3>;
}
export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}