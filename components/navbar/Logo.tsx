import * as React from "react";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="40"
      viewBox="0 0 160 40"
      role="img"
      aria-label="Abdul Barik"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Monogram box */}
      <rect
        x="4"
        y="6"
        width="28"
        height="28"
        rx="6"
        fill="url(#logoGradient)"
      />
      <text
        x="18"
        y="26"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
        fontWeight={800}
        fontSize={12}
        fill="#fff"
      >
        AB
      </text>

      {/* Name */}
      <text
        x="44"
        y="25"
        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
        fontWeight={800}
        fontSize={16}
        fill="currentColor"
      >
        Abdul Barik
      </text>
    </svg>
  </Link>
);
