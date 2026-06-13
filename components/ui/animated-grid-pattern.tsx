"use client";

import { motion } from "motion/react";
import { useEffect, useId, useRef, useState, useCallback } from "react";

import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

const techStack: string[] = [
  "HTML",
  "CSS",
  "Tailwind",
  "JS",
  "TS",
  "C",
  "Go",
  "Python",
  "React",
  "Next",
  "Node",
  "Express",
  "Nest",
  "MongoDB",
  "PostgresSQL",
  "Prisma",
  "Git",
  "Github",
  "Docker",
  "CI/CD",
  "AWS",
  "AI"
];

const techColors: string[] = [
  "#E34F26", // HTML
  "#1572B6", // CSS
  "#06B6D4", // Tailwind
  "#F7DF1E", // JS
  "#3178C6", // TS
  "#000000", // C
  "#00ADD8", // Go
  "#3776AB", // Python
  "#61DAFB", // React
  "#000000", // Next (use black background)
  "#339933", // Node
  "#333333", // Express
  "#E0234E", // Nest
  "#47A248", // MongoDB
  "#336791", // Postgres
  "#0EA5A4", // Prisma
  "#F05032", // Git
  "#181717", // GitHub
  "#0db7ed", // Docker
  "#06B6D4", // CI/CD (generic cyan)
  "#FF9900", // AWS
  "#111827", // AI (dark)
];

// Optional explicit text colors per tech to ensure brand-consistent contrast
const techTextColors: string[] = [
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
  "#000000", 
  "#ffffff", 
];

// Helpers: pick readable text color (black/white) on top of a background hex color
function hexToRgb(hex: string) {
  const cleaned = hex.replace('#', '').trim();
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16);
    const g = parseInt(cleaned[1] + cleaned[1], 16);
    const b = parseInt(cleaned[2] + cleaned[2], 16);
    return { r, g, b };
  }
  if (cleaned.length === 6) {
    const r = parseInt(cleaned.slice(0, 2), 16);
    const g = parseInt(cleaned.slice(2, 4), 16);
    const b = parseInt(cleaned.slice(4, 6), 16);
    return { r, g, b };
  }
  return null;
}

function getTextColor(hex: string) {
  const rgb = hexToRgb(hex) || { r: 0, g: 0, b: 0 };
  // relative luminance
  const lum = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  // threshold tuned for readability
  return lum > 0.6 ? '#000000' : '#ffffff';
}


export default function AnimatedGridPattern({
  width = 150,
  height = 120,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const getPos = useCallback(() => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.width, dimensions.height, width, height]);

  const generateSquares = useCallback((count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }, [getPos]);

  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    );
  };

  // timers for delayed updates (cleared on unmount)
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      // schedule update on the next animation frame to avoid synchronous setState
      const raf = requestAnimationFrame(() => {
        setSquares(generateSquares(numSquares));
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [dimensions.width, dimensions.height, numSquares, generateSquares]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const current = containerRef.current;

    if (current) {
      resizeObserver.observe(current);
    }

    return () => {
      if (current) {
        resizeObserver.unobserve(current);
      }
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
      />

      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [xPos, yPos], id }, index) => (
          <motion.g
            key={`${xPos}-${yPos}-${id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              delay: index * 0.03,
            }}
            onAnimationComplete={() => {
              const t = window.setTimeout(() => updateSquarePosition(id), 5000);
              timersRef.current.push(t as unknown as number);
            }}
          >
            {/* Square */}
            <rect
              width={width - 2}
              height={height - 2}
              x={xPos * width + 1}
              y={yPos * height + 1}
              rx={6}
              fill={techColors[index % techColors.length]}
            />

            {/* label background + Tech Text for clear visibility */}
            {(() => {
              const label = techStack[index % techStack.length];
              const textColor =
                techTextColors[index % techTextColors.length] ||
                getTextColor(techColors[index % techColors.length]);
              const bgColor = textColor === "#ffffff" ? "#000000" : "#ffffff";
              const rectW = Math.max(64, label.length * 10);
              const rectH = 28;
              const centerX = xPos * width + width / 2;
              const centerY = yPos * height + height / 2;

              return (
                <g>
                  <rect
                    x={centerX - rectW / 2}
                    y={centerY - rectH / 2}
                    width={rectW}
                    height={rectH}
                    rx={6}
                    fill={bgColor}
                    fillOpacity={0.95}
                  />
                  <text
                    x={centerX}
                    y={centerY + 6}
                    textAnchor="middle"
                    fontSize="32"
                    fill={textColor}
                    fontWeight={700}
                    className="select-none font-semibold"
                  >
                    {label}
                  </text>
                </g>
              );
            })()}
          </motion.g>
        ))}
      </svg>
    </svg>
  );
}