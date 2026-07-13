import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFire, FaCheckDouble } from 'react-icons/fa';

// Array of mock commit details referencing VHelp, HireTrack, and Java microservices
const MOCK_COMMITS = [
  "Optimized VHelp Socket.io real-time location dispatch loops.",
  "Integrated WebRTC low-latency streaming in HireTrack interview platform.",
  "Configured role-based access control with JWT and OAuth 2.0.",
  "Refactored Java Spring Boot JPA microservice caching mechanisms.",
  "Implemented peer-to-peer canvas whiteboard synchronization in HireTrack.",
  "Designed emergency mechanical matching queries with Google Maps API.",
  "Enhanced CSS variables inside custom cursor animations.",
  "Wrote Mockito test suites to secure 85%+ test coverage in REST modules.",
  "Optimized MongoDB indexing, reducing dashboard fetch times by 40%.",
  "Refined linear regression cut-off prediction algorithms in College Predictor.",
  "Configured Webpack build size assets reduction pipelines."
];

export default function GithubContributions() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate a fixed 7 rows x 35 columns matrix for layout consistency
  const gridData = useMemo(() => {
    const rows = 7;
    const cols = 35;
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let matrix = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Random level: 0 (none), 1 (light green), 2 (medium green), 3 (dark green)
        const rand = Math.random();
        let level = 0;
        if (rand > 0.4 && rand <= 0.7) level = 1;
        else if (rand > 0.7 && rand <= 0.9) level = 2;
        else if (rand > 0.9) level = 3;

        // Choose a random day/month label for display
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        const randomDay = Math.floor(Math.random() * 28) + 1;
        const dateStr = `${randomMonth} ${randomDay}, 2026`;
        const contributionCount = level === 0 ? 0 : level === 1 ? Math.floor(Math.random() * 2) + 1 : level === 2 ? Math.floor(Math.random() * 4) + 3 : Math.floor(Math.random() * 6) + 7;

        // Choose a random commit message if contributions exist
        const commitMsg = contributionCount > 0
          ? MOCK_COMMITS[Math.floor(Math.random() * MOCK_COMMITS.length)]
          : null;

        matrix.push({
          row: r,
          col: c,
          level,
          date: dateStr,
          count: contributionCount,
          commit: commitMsg
        });
      }
    }
    return matrix;
  }, []);

  // return (
  //   <section id="contributions" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
  //     <div className="max-w-4xl mx-auto px-6 relative z-10">
        
  //       {/* Container panel */}
  //       <div className="glass-panel border border-glass-border p-6 md:p-8 rounded-2xl">
          
  //         {/* Header */}
  //         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
  //           <div className="flex items-center gap-3">
  //             <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green text-lg">
  //               <FaGithub />
  //             </div>
  //             {/* <div>
  //               <h3 className="text-lg font-bold text-white leading-tight">Activity Log</h3>
  //               <p className="text-xs text-text-secondary">Simulated commits across production builds</p>
  //             </div> */}
  //           </div>

  //           {/* Quick stats */}
  //           {/* <div className="flex gap-4">
  //             <div className="flex items-center gap-1.5 text-xs text-text-secondary">
  //               <FaCheckDouble className="text-accent-green text-[10px]" />
  //               <span>Total: <strong className="text-white font-mono">874 commits</strong></span>
  //             </div> */}
  //             {/* <div className="flex items-center gap-1.5 text-xs text-text-secondary">
  //               <FaFire className="text-orange-500 text-[10px]" />
  //               <span>Streak: <strong className="text-white font-mono">42 days</strong></span>
  //             </div> */}
  //           </div>
  //         </div>

  //         {/* Matrix Grid Wrapper
  //         <div className="overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
  //           <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 select-none">
  //             {gridData.map((cell, idx) => {
  //               // Determine block color based on contribution level
  //               const colors = [
  //                 'bg-white/5 border border-white/5 hover:border-white/10', // level 0
  //                 'bg-accent-green/20 border border-accent-green/10 hover:border-accent-green/30', // level 1
  //                 'bg-accent-green/45 border border-accent-green/20 hover:border-accent-green/60', // level 2
  //                 'bg-accent-green/80 border border-accent-green/30 hover:border-accent-green/100 shadow-[0_0_8px_rgba(16,185,129,0.2)]' // level 3
  //               ];

  //               return (
  //                 <div
  //                   key={idx}
  //                   onMouseEnter={() => setHoveredCell(cell)}
  //                   onMouseLeave={() => setHoveredCell(null)}
  //                   className={`w-3.5 h-3.5 rounded-sm transition-all duration-100 cursor-pointer ${colors[cell.level]}`}
  //                 />
  //               );
  //             })}
  //           </div>
  //         </div> */}

  //         {/* Color Guide Legend
  //         <div className="flex justify-between items-center mt-3 text-[10px] text-text-secondary">
  //           <span>Less active</span>
  //           <div className="flex gap-1 items-center">
  //             <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
  //             <div className="w-2.5 h-2.5 rounded-sm bg-accent-green/20" />
  //             <div className="w-2.5 h-2.5 rounded-sm bg-accent-green/45" />
  //             <div className="w-2.5 h-2.5 rounded-sm bg-accent-green/80" />
  //             <span className="ml-1">Highly active</span>
  //           </div>
  //         </div> */}

  //         {/* Interactive Commit Log Tooltip Panel */}
  //         {/* <div className="border-t border-glass-border pt-4 mt-6 min-h-[56px] flex items-center justify-center">
  //           {hoveredCell ? (
  //             <motion.div
  //               initial={{ opacity: 0, y: 5 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
  //             >
  //               <div>
  //                 <div className="text-[10px] font-mono font-bold text-accent-green uppercase tracking-wider">// commit_hash_details</div>
  //                 <div className="text-xs font-semibold text-white mt-0.5">
  //                   {hoveredCell.count > 0 ? (
  //                     <span>
  //                       Pushed {hoveredCell.count} commits on {hoveredCell.date}
  //                     </span>
  //                   ) : (
  //                     <span>No commits pushed on {hoveredCell.date}</span>
  //                   )}
  //                 </div>
  //               </div>

  //               {hoveredCell.commit && (
  //                 <div className="max-w-[70%] text-right bg-primary/40 border border-glass-border/30 rounded-lg px-3 py-1.5 text-xs text-text-secondary font-mono italic truncate">
  //                   {hoveredCell.commit}
  //                 </div>
  //               )}
  //             </motion.div>
  //           ) : (
  //             <span className="text-xs text-text-muted font-mono">
  //               Hover over grid squares to inspect commit detail payloads
  //             </span>
  //           )}
  //         </div> */}

  //       {/* </div> */}
  //     </div>
  //   </section>
  // );
}
