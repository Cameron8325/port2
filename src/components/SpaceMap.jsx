import React from "react";

export default function SpaceMap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -20 360 400"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      className="w-full h-full"
    >
      {/* Orbit Rings */}
      <circle cx="160" cy="160" r="60" stroke="#00ffe0" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
      <circle cx="160" cy="160" r="90" stroke="#00ffe0" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
      <circle cx="160" cy="160" r="130" stroke="#00ffe0" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
      <circle cx="160" cy="160" r="160" stroke="#00ffe0" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />

      {/* Center Orb */}
      <circle cx="160" cy="160" r="10" fill="#14b8a6" stroke="#00ffe0" strokeWidth="2" />

      {/* Glow Dots with CSS animation */}
      {[220, 250, 290, 320].map((cx, i) => (
        <g
          key={i}
          className="origin-center animate-spin"
          style={{ animationDuration: `${10 + i * 2}s`, transformOrigin: "160px 160px" }}
        >
          <circle cx={cx} cy="160" r="2.5" fill="#00ffe0" />
        </g>
      ))}

      {/* Traits with tooltips */}
      {[
        {
          label: "Problem-Solver",
          tooltip: "Solves complex challenges",
          cx: 238, cy: 115.4, tx: 244, ty: 119.4, tipY: 132
        },
        {
          label: "Collaborative",
          tooltip: "Works well with teams",
          cx: 160, cy: 30, tx: 166, ty: 34, tipY: 46
        },
        {
          label: "Systems Thinker",
          tooltip: "Sees how parts connect",
          cx: 20, cy: 80, tx: 26, ty: 84, tipY: 96
        },
        {
          label: "Initiative-Taker",
          tooltip: "Takes action unprompted",
          cx: 20, cy: 240, tx: 26, ty: 244, tipY: 256
        },
        {
          label: "Pragmatic Engineer",
          tooltip: "Prioritizes practicality",
          cx: 160, cy: 290, tx: 166, ty: 294, tipY: 306
        },
        {
          label: "Continuously Learning",
          tooltip: "Always evolving",
          cx: 238, cy: 204.6, tx: 244, ty: 208.6, tipY: 220.6
        }
      ].map(({ label, tooltip, cx, cy, tx, ty, tipY }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#a78bfa" stroke="#ffffff" strokeWidth="1" />
          <text
            x={tx}
            y={ty}
            className="text-[12px]"
            fill="#cbd5e1"
            fontFamily="Verdana"
          >
            {label}
          </text>
          <text
            x={tx}
            y={tipY}
            className="tooltip opacity-0 scale-95 transition-all duration-300"
            fill="#94a3b8"
            fontSize="10px"
            fontFamily="Verdana"
          >
            {tooltip}
          </text>
        </g>
      ))}
    </svg>
  );
}
