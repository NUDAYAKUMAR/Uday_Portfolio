import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RadarChart() {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Skill axes for the radar chart
  const data = [
    { name: 'Frontend (React)', value: 90, label: '90%' },
    { name: 'Backend (Node/Express)', value: 85, label: '85%' },
    { name: 'Languages (Java/JS)', value: 88, label: '88%' },
    { name: 'Databases (Mongo/SQL)', value: 82, label: '82%' },
    { name: 'Realtime (Socket.io)', value: 84, label: '84%' },
    { name: 'Version Control (Git)', value: 85, label: '85%' },
  ];

  // SVG Center & Radius parameters
  const cx = 150;
  const cy = 150;
  const r = 100;
  const axesCount = data.length;

  // Helper: get coordinates for an axis index at a given distance
  const getCoordinates = (index, distance) => {
    const angle = (index * 2 * Math.PI) / axesCount - Math.PI / 2;
    return {
      x: cx + distance * Math.cos(angle),
      y: cy + distance * Math.sin(angle),
    };
  };

  // Generate concentric polygon grid rings (e.g. 25%, 50%, 75%, 100%)
  const rings = [0.25, 0.5, 0.75, 1];
  const ringPolygons = rings.map((scale) => {
    const points = [];
    for (let i = 0; i < axesCount; i++) {
      const coord = getCoordinates(i, r * scale);
      points.push(`${coord.x},${coord.y}`);
    }
    return points.join(' ');
  });

  // Data polygon coordinates
  const dataPoints = data.map((d, i) => getCoordinates(i, r * (d.value / 100)));
  const dataPolygonString = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  // Compute text label anchors
  const labels = data.map((d, i) => {
    // Extend slightly outside the 100% radius boundary
    const outerCoord = getCoordinates(i, r + 24);
    
    // Adjust alignment text anchors
    let textAnchor = 'middle';
    if (outerCoord.x > cx + 10) textAnchor = 'start';
    if (outerCoord.x < cx - 10) textAnchor = 'end';

    return {
      name: d.name,
      value: d.value,
      label: d.label,
      x: outerCoord.x,
      y: outerCoord.y,
      anchor: textAnchor,
    };
  });

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border border-glass-border relative overflow-hidden select-none">
      <div className="text-xs uppercase font-mono tracking-widest text-accent-cyan mb-4">// skill_radar_profile</div>
      
      <div className="w-full max-w-[340px] aspect-square">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {/* Concentric grid rings */}
          {ringPolygons.map((points, index) => (
            <polygon
              key={index}
              points={points}
              fill="none"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="1"
            />
          ))}

          {/* Radar axis lines */}
          {Array.from({ length: axesCount }).map((_, i) => {
            const coord = getCoordinates(i, r);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={coord.x}
                y2={coord.y}
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="1"
              />
            );
          })}

          {/* Shaded glowing data polygon */}
          <polygon
            points={dataPolygonString}
            fill="rgba(6, 182, 212, 0.25)"
            stroke="#06b6d4"
            strokeWidth="2"
            className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]"
          />

          {/* Data corner vertices */}
          {dataPoints.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r="4"
                className="fill-accent-purple stroke-white stroke-1 cursor-pointer"
                onMouseEnter={() => setHoveredPoint(data[i])}
                onMouseLeave={() => setHoveredPoint(null)}
              />
              {/* Outer hover ring */}
              <circle
                cx={p.x}
                cy={p.y}
                r="8"
                className="fill-transparent stroke-accent-purple/40 stroke-1 hover:scale-125 transition-transform duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredPoint(data[i])}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            </g>
          ))}

          {/* Radar Axis Labels */}
          {labels.map((l, i) => (
            <text
              key={i}
              x={l.x}
              y={l.y}
              textAnchor={l.anchor}
              className="fill-text-secondary font-sans font-medium text-[9px] sm:text-[10px]"
              dominantBaseline="middle"
            >
              {l.name}
            </text>
          ))}
        </svg>
      </div>

      {/* Dynamic Skill Level Tooltip */}
      <div className="h-8 mt-2 text-center">
        {hoveredPoint ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-accent-cyan font-mono"
          >
            {hoveredPoint.name}: <span className="text-white">{hoveredPoint.label}</span>
          </motion.div>
        ) : (
          <span className="text-xs text-text-muted font-mono">Hover over vertices to view values</span>
        )}
      </div>
    </div>
  );
}
