import React from 'react';

interface ChartVisualProps {
  type: string;
}

export default function ChartVisual({ type }: ChartVisualProps) {
  switch (type) {
    case 'bar':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <rect x="35" y="40" width="20" height="60" rx="3" fill="var(--accent-purple)" opacity="0.85" />
          <rect x="70" y="25" width="20" height="75" rx="3" fill="var(--accent-pink)" opacity="0.85" />
          <rect x="105" y="55" width="20" height="45" rx="3" fill="var(--accent-blue)" opacity="0.85" />
          <rect x="140" y="15" width="20" height="85" rx="3" fill="var(--accent-amber)" opacity="0.85" />
        </svg>
      );

    case 'stacked-bar':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          {/* Bar 1 */}
          <rect x="40" y="70" width="25" height="30" fill="var(--accent-purple)" opacity="0.9" />
          <rect x="40" y="45" width="25" height="25" fill="var(--accent-pink)" opacity="0.9" />
          <rect x="40" y="30" width="25" height="15" fill="var(--accent-blue)" opacity="0.9" />
          {/* Bar 2 */}
          <rect x="90" y="60" width="25" height="40" fill="var(--accent-purple)" opacity="0.9" />
          <rect x="90" y="35" width="25" height="25" fill="var(--accent-pink)" opacity="0.9" />
          <rect x="90" y="15" width="25" height="20" fill="var(--accent-blue)" opacity="0.9" />
          {/* Bar 3 */}
          <rect x="140" y="80" width="25" height="20" fill="var(--accent-purple)" opacity="0.9" />
          <rect x="140" y="50" width="25" height="30" fill="var(--accent-pink)" opacity="0.9" />
          <rect x="140" y="40" width="25" height="10" fill="var(--accent-blue)" opacity="0.9" />
        </svg>
      );

    case 'pie':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Segment Purple (40%) */}
          <path d="M 100 60 L 100 15 A 45 45 0 0 1 142.4 75.4 Z" fill="var(--accent-purple)" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          {/* Segment Pink (30%) */}
          <path d="M 100 60 L 142.4 75.4 A 45 45 0 0 1 86.1 102.8 Z" fill="var(--accent-pink)" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          {/* Segment Blue (20%) */}
          <path d="M 100 60 L 86.1 102.8 A 45 45 0 0 1 57.6 45.4 Z" fill="var(--accent-blue)" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          {/* Segment Amber (10%) */}
          <path d="M 100 60 L 57.6 45.4 A 45 45 0 0 1 100 15 Z" fill="var(--accent-amber)" stroke="var(--bg-secondary)" strokeWidth="1.5" />
        </svg>
      );

    case 'donut':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="60" r="45" stroke="var(--accent-purple)" strokeWidth="14" strokeDasharray="282" strokeDashoffset="80" />
          <circle cx="100" cy="60" r="45" stroke="var(--accent-pink)" strokeWidth="14" strokeDasharray="282" strokeDashoffset="180" />
          <circle cx="100" cy="60" r="45" stroke="var(--accent-blue)" strokeWidth="14" strokeDasharray="282" strokeDashoffset="240" />
          <circle cx="100" cy="60" r="30" fill="transparent" />
        </svg>
      );

    case 'line':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <path d="M 20 85 Q 50 25 80 75 T 140 35 T 180 55" fill="none" stroke="var(--accent-purple)" strokeWidth="3" />
          <path d="M 20 65 Q 55 85 90 35 T 150 75 T 180 25" fill="none" stroke="var(--accent-pink)" strokeWidth="3" />
        </svg>
      );

    case 'scatter':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          {/* Points */}
          <circle cx="40" cy="80" r="5" fill="var(--accent-purple)" />
          <circle cx="60" cy="55" r="5" fill="var(--accent-pink)" />
          <circle cx="75" cy="70" r="5" fill="var(--accent-purple)" />
          <circle cx="95" cy="40" r="5" fill="var(--accent-blue)" />
          <circle cx="110" cy="60" r="5" fill="var(--accent-pink)" />
          <circle cx="130" cy="30" r="5" fill="var(--accent-purple)" />
          <circle cx="150" cy="45" r="5" fill="var(--accent-blue)" />
          <circle cx="170" cy="20" r="5" fill="var(--accent-pink)" />
          {/* Trend line */}
          <line x1="30" y1="90" x2="180" y2="25" stroke="var(--accent-purple)" strokeWidth="1.5" strokeDasharray="4" />
        </svg>
      );

    case 'bubble':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <circle cx="45" cy="75" r="8" fill="var(--accent-purple)" opacity="0.7" />
          <circle cx="70" cy="45" r="14" fill="var(--accent-pink)" opacity="0.7" />
          <circle cx="105" cy="80" r="6" fill="var(--accent-blue)" opacity="0.7" />
          <circle cx="130" cy="35" r="18" fill="var(--accent-amber)" opacity="0.7" />
          <circle cx="165" cy="65" r="12" fill="var(--accent-purple)" opacity="0.7" />
        </svg>
      );

    case 'histogram':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          <rect x="25" y="80" width="20" height="20" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="45" y="60" width="20" height="40" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="65" y="30" width="20" height="70" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="85" y="15" width="20" height="85" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="105" y="40" width="20" height="60" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="125" y="55" width="20" height="45" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="145" y="75" width="20" height="25" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <rect x="165" y="90" width="20" height="10" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
        </svg>
      );

    case 'area':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          {/* Stack 1 */}
          <path d="M 20 100 L 20 80 Q 60 70 100 85 T 180 75 L 180 100 Z" fill="var(--accent-purple)" opacity="0.9" />
          {/* Stack 2 */}
          <path d="M 20 80 Q 60 70 100 85 T 180 75 L 180 40 Q 140 50 100 35 T 20 50 Z" fill="var(--accent-pink)" opacity="0.8" />
        </svg>
      );

    case 'heatmap':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Render a grid of heat rectangles */}
          {Array.from({ length: 6 }).map((_, i) => 
            Array.from({ length: 4 }).map((_, j) => {
              const colors = [
                'rgba(139, 92, 246, 0.1)', 'rgba(139, 92, 246, 0.3)', 
                'rgba(139, 92, 246, 0.6)', 'rgba(139, 92, 246, 0.9)', 
                'rgba(236, 72, 153, 0.4)', 'rgba(236, 72, 153, 0.8)'
              ];
              const randomColor = colors[(i * 3 + j * 7) % colors.length];
              return (
                <rect 
                  key={`${i}-${j}`} 
                  x={25 + i * 25} 
                  y={20 + j * 22} 
                  width="22" 
                  height="19" 
                  fill={randomColor} 
                  rx="2"
                />
              );
            })
          )}
        </svg>
      );

    case 'boxplot':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--text-muted)" strokeWidth="2" />
          {/* Boxplot 1 */}
          <line x1="60" y1="20" x2="60" y2="90" stroke="var(--accent-purple)" strokeWidth="2" />
          <rect x="45" y="35" width="30" height="40" fill="var(--bg-secondary)" stroke="var(--accent-purple)" strokeWidth="2.5" rx="2" />
          <line x1="45" y1="55" x2="75" y2="55" stroke="var(--accent-purple)" strokeWidth="3" />
          <line x1="50" y1="20" x2="70" y2="20" stroke="var(--accent-purple)" strokeWidth="2" />
          <line x1="50" y1="90" x2="70" y2="90" stroke="var(--accent-purple)" strokeWidth="2" />
          <circle cx="60" cy="12" r="3" fill="var(--accent-red)" />
          
          {/* Boxplot 2 */}
          <line x1="130" y1="40" x2="130" y2="95" stroke="var(--accent-pink)" strokeWidth="2" />
          <rect x="115" y="50" width="30" height="30" fill="var(--bg-secondary)" stroke="var(--accent-pink)" strokeWidth="2.5" rx="2" />
          <line x1="115" y1="68" x2="145" y2="68" stroke="var(--accent-pink)" strokeWidth="3" />
          <line x1="120" y1="40" x2="140" y2="40" stroke="var(--accent-pink)" strokeWidth="2" />
          <line x1="120" y1="95" x2="140" y2="95" stroke="var(--accent-pink)" strokeWidth="2" />
        </svg>
      );

    case 'treemap':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="100" height="90" fill="var(--accent-purple)" opacity="0.85" stroke="var(--bg-secondary)" strokeWidth="2" rx="2" />
          <rect x="115" y="15" width="70" height="50" fill="var(--accent-pink)" opacity="0.85" stroke="var(--bg-secondary)" strokeWidth="2" rx="2" />
          <rect x="115" y="65" width="70" height="40" fill="var(--accent-blue)" opacity="0.85" stroke="var(--bg-secondary)" strokeWidth="2" rx="2" />
          <rect x="25" y="25" width="40" height="40" fill="rgba(255,255,255,0.15)" stroke="var(--bg-secondary)" />
          <rect x="65" y="25" width="40" height="40" fill="rgba(255,255,255,0.15)" stroke="var(--bg-secondary)" />
          <rect x="25" y="65" width="80" height="30" fill="rgba(255,255,255,0.15)" stroke="var(--bg-secondary)" />
        </svg>
      );

    case 'parallel':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Multiple parallel axes */}
          <line x1="30" y1="15" x2="30" y2="105" stroke="var(--text-muted)" strokeWidth="2.5" />
          <line x1="70" y1="15" x2="70" y2="105" stroke="var(--text-muted)" strokeWidth="2.5" />
          <line x1="110" y1="15" x2="110" y2="105" stroke="var(--text-muted)" strokeWidth="2.5" />
          <line x1="150" y1="15" x2="150" y2="105" stroke="var(--text-muted)" strokeWidth="2.5" />
          
          {/* Polyline paths */}
          <path d="M 30 30 L 70 85 L 110 40 L 150 70" fill="none" stroke="var(--accent-purple)" strokeWidth="2" opacity="0.9" />
          <path d="M 30 50 L 70 25 L 110 90 L 150 35" fill="none" stroke="var(--accent-pink)" strokeWidth="2" opacity="0.9" />
          <path d="M 30 90 L 70 60 L 110 50 L 150 85" fill="none" stroke="var(--accent-blue)" strokeWidth="2" opacity="0.9" />
        </svg>
      );

    case 'radar':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radial grid */}
          <circle cx="100" cy="60" r="45" stroke="var(--text-muted)" strokeWidth="0.8" strokeDasharray="3" />
          <circle cx="100" cy="60" r="30" stroke="var(--text-muted)" strokeWidth="0.8" strokeDasharray="3" />
          <circle cx="100" cy="60" r="15" stroke="var(--text-muted)" strokeWidth="0.8" strokeDasharray="3" />
          {/* Axes */}
          <line x1="100" y1="15" x2="100" y2="105" stroke="var(--text-muted)" strokeWidth="1" />
          <line x1="55" y1="60" x2="145" y2="60" stroke="var(--text-muted)" strokeWidth="1" />
          {/* Radar area 1 */}
          <polygon points="100,25 125,48 115,75 80,68 85,45" fill="rgba(139, 92, 246, 0.4)" stroke="var(--accent-purple)" strokeWidth="2" />
          {/* Radar area 2 */}
          <polygon points="100,40 135,60 100,80 75,70 90,50" fill="rgba(236, 72, 153, 0.3)" stroke="var(--accent-pink)" strokeWidth="2" />
        </svg>
      );

    case 'sankey':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left nodes */}
          <rect x="20" y="20" width="12" height="35" rx="1.5" fill="var(--accent-purple)" />
          <rect x="20" y="65" width="12" height="35" rx="1.5" fill="var(--accent-pink)" />
          {/* Right nodes */}
          <rect x="168" y="15" width="12" height="25" rx="1.5" fill="var(--accent-blue)" />
          <rect x="168" y="50" width="12" height="30" rx="1.5" fill="var(--accent-amber)" />
          <rect x="168" y="90" width="12" height="15" rx="1.5" fill="var(--accent-cyan)" />
          
          {/* Curved links */}
          <path d="M 32 30 C 80 30, 110 20, 168 22" fill="none" stroke="var(--accent-purple)" strokeWidth="10" opacity="0.3" />
          <path d="M 32 45 C 80 45, 110 60, 168 62" fill="none" stroke="var(--accent-purple)" strokeWidth="15" opacity="0.3" />
          <path d="M 32 75 C 80 75, 110 65, 168 70" fill="none" stroke="var(--accent-pink)" strokeWidth="12" opacity="0.3" />
          <path d="M 32 90 C 80 90, 110 95, 168 95" fill="none" stroke="var(--accent-pink)" strokeWidth="8" opacity="0.3" />
        </svg>
      );

    case 'choropleth':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mock Map Boundaries */}
          <path d="M 20 20 L 70 15 L 60 50 L 15 45 Z" fill="var(--accent-purple)" opacity="0.9" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          <path d="M 70 15 L 130 20 L 110 55 L 60 50 Z" fill="var(--accent-purple)" opacity="0.4" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          <path d="M 130 20 L 185 25 L 170 65 L 110 55 Z" fill="var(--accent-purple)" opacity="0.75" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          <path d="M 15 45 L 60 50 L 50 95 L 20 90 Z" fill="var(--accent-purple)" opacity="0.2" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          <path d="M 60 50 L 110 55 L 115 100 L 50 95 Z" fill="var(--accent-purple)" opacity="0.7" stroke="var(--bg-secondary)" strokeWidth="1.5" />
          <path d="M 110 55 L 170 65 L 180 105 L 115 100 Z" fill="var(--accent-purple)" opacity="0.5" stroke="var(--bg-secondary)" strokeWidth="1.5" />
        </svg>
      );

    case 'symbol-map':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mock Map Background Outline */}
          <path d="M 20 20 L 70 15 L 130 20 L 185 25 L 170 75 L 115 100 L 50 95 Z" fill="rgba(255,255,255,0.03)" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3" />
          
          {/* Symbols */}
          <circle cx="45" cy="40" r="16" fill="var(--accent-purple)" opacity="0.6" stroke="var(--accent-purple)" strokeWidth="1.5" />
          <circle cx="95" cy="35" r="8" fill="var(--accent-pink)" opacity="0.6" stroke="var(--accent-pink)" strokeWidth="1.5" />
          <circle cx="155" cy="55" r="22" fill="var(--accent-purple)" opacity="0.6" stroke="var(--accent-purple)" strokeWidth="1.5" />
          <circle cx="70" cy="80" r="12" fill="var(--accent-blue)" opacity="0.6" stroke="var(--accent-blue)" strokeWidth="1.5" />
          <circle cx="130" cy="85" r="10" fill="var(--accent-amber)" opacity="0.6" stroke="var(--accent-amber)" strokeWidth="1.5" />
        </svg>
      );

    case 'flow-map':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 20 L 70 15 L 130 20 L 185 25 L 170 75 L 115 100 L 50 95 Z" fill="rgba(255,255,255,0.02)" stroke="var(--text-muted)" strokeWidth="0.8" />
          
          {/* Flows */}
          <path d="M 45 40 Q 95 30 150 65" fill="none" stroke="var(--accent-purple)" strokeWidth="4" markerEnd="url(#arrow)" />
          <path d="M 45 40 Q 60 70 85 85" fill="none" stroke="var(--accent-purple)" strokeWidth="2.5" />
          <path d="M 150 65 Q 120 70 85 85" fill="none" stroke="var(--accent-pink)" strokeWidth="1.5" />
          <path d="M 95 35 Q 130 45 150 65" fill="none" stroke="var(--accent-blue)" strokeWidth="3" />
          
          {/* Dots at locations */}
          <circle cx="45" cy="40" r="4" fill="var(--text-primary)" />
          <circle cx="150" cy="65" r="4" fill="var(--text-primary)" />
          <circle cx="85" cy="85" r="4" fill="var(--text-primary)" />
          <circle cx="95" cy="35" r="4" fill="var(--text-primary)" />
        </svg>
      );

    case 'cartogram':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Distorted proportional blocks */}
          <rect x="20" y="15" width="60" height="50" rx="3" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" strokeWidth="2" />
          <rect x="83" y="15" width="95" height="40" rx="3" fill="var(--accent-pink)" opacity="0.8" stroke="var(--bg-secondary)" strokeWidth="2" />
          <rect x="20" y="68" width="40" height="35" rx="3" fill="var(--accent-blue)" opacity="0.8" stroke="var(--bg-secondary)" strokeWidth="2" />
          <rect x="63" y="68" width="80" height="35" rx="3" fill="var(--accent-amber)" opacity="0.8" stroke="var(--bg-secondary)" strokeWidth="2" />
          <rect x="146" y="58" width="32" height="45" rx="3" fill="var(--accent-cyan)" opacity="0.8" stroke="var(--bg-secondary)" strokeWidth="2" />
        </svg>
      );

    case 'sunburst':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Inner Root */}
          <circle cx="100" cy="60" r="16" fill="var(--bg-secondary)" stroke="var(--text-muted)" strokeWidth="1.5" />
          
          {/* Level 1 Rings */}
          <path d="M 100 60 L 100 32 A 28 28 0 0 1 128 60 Z" fill="var(--accent-purple)" opacity="0.8" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 128 60 A 28 28 0 0 1 100 88 Z" fill="var(--accent-pink)" opacity="0.8" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 100 88 A 28 28 0 0 1 72 60 Z" fill="var(--accent-blue)" opacity="0.8" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 72 60 A 28 28 0 0 1 100 32 Z" fill="var(--accent-amber)" opacity="0.8" stroke="var(--bg-secondary)" />
          
          {/* Level 2 Rings */}
          <path d="M 100 60 L 100 15 A 45 45 0 0 1 120 20 Z" fill="var(--accent-purple)" opacity="0.5" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 120 20 A 45 45 0 0 1 142.4 42.4 Z" fill="var(--accent-purple)" opacity="0.6" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 142.4 42.4 A 45 45 0 0 1 145 60 Z" fill="var(--accent-pink)" opacity="0.4" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 145 60 A 45 45 0 0 1 120 100 Z" fill="var(--accent-pink)" opacity="0.6" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 120 100 A 45 45 0 0 1 72 102.8 Z" fill="var(--accent-blue)" opacity="0.5" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 72 102.8 A 45 45 0 0 1 57.6 75.4 Z" fill="var(--accent-blue)" opacity="0.7" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 57.6 75.4 A 45 45 0 0 1 75 40 Z" fill="var(--accent-amber)" opacity="0.5" stroke="var(--bg-secondary)" />
          <path d="M 100 60 L 75 40 A 45 45 0 0 1 100 15 Z" fill="var(--accent-amber)" opacity="0.7" stroke="var(--bg-secondary)" />
        </svg>
      );

    case 'network':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Nodes and Links */}
          <line x1="50" y1="30" x2="100" y2="60" stroke="var(--text-muted)" strokeWidth="1.5" />
          <line x1="150" y1="30" x2="100" y2="60" stroke="var(--text-muted)" strokeWidth="1.5" />
          <line x1="50" y1="90" x2="100" y2="60" stroke="var(--text-muted)" strokeWidth="1.5" />
          <line x1="150" y1="90" x2="100" y2="60" stroke="var(--text-muted)" strokeWidth="1.5" />
          <line x1="50" y1="30" x2="50" y2="90" stroke="var(--text-muted)" strokeWidth="1" />
          <line x1="150" y1="30" x2="150" y2="90" stroke="var(--text-muted)" strokeWidth="1" />
          
          <circle cx="100" cy="60" r="12" fill="var(--accent-purple)" stroke="var(--bg-secondary)" strokeWidth="2" />
          <circle cx="50" cy="30" r="8" fill="var(--accent-pink)" stroke="var(--bg-secondary)" strokeWidth="2" />
          <circle cx="150" cy="30" r="8" fill="var(--accent-blue)" stroke="var(--bg-secondary)" strokeWidth="2" />
          <circle cx="50" cy="90" r="8" fill="var(--accent-amber)" stroke="var(--bg-secondary)" strokeWidth="2" />
          <circle cx="150" cy="90" r="8" fill="var(--accent-cyan)" stroke="var(--bg-secondary)" strokeWidth="2" />
        </svg>
      );

    case 'gantt':
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="15" x2="20" y2="105" stroke="var(--text-muted)" strokeWidth="1.5" />
          <line x1="20" y1="105" x2="180" y2="105" stroke="var(--text-muted)" strokeWidth="1.5" />
          
          {/* Gantt Bars */}
          <rect x="25" y="25" width="45" height="12" rx="2" fill="var(--accent-purple)" opacity="0.9" />
          <rect x="65" y="42" width="60" height="12" rx="2" fill="var(--accent-pink)" opacity="0.9" />
          <rect x="110" y="59" width="35" height="12" rx="2" fill="var(--accent-blue)" opacity="0.9" />
          <rect x="135" y="76" width="40" height="12" rx="2" fill="var(--accent-amber)" opacity="0.9" />
          
          {/* Dependency line */}
          <path d="M 70 37 L 70 48 L 65 48" fill="none" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="2" />
        </svg>
      );

    default:
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="160" height="80" rx="4" fill="var(--bg-glass)" stroke="var(--border-subtle)" />
          <text x="100" y="65" fill="var(--text-secondary)" textAnchor="middle" fontSize="12">תרשים ויזואלי</text>
        </svg>
      );
  }
}
