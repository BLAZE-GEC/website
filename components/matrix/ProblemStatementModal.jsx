'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import teams from '@/app/data/teams.json';

// ---------------------------------------------------------------------------
// Reusable "spinning glow border" wrapper. Wrap ANY box in this and it gets
// a green light sweeping around its edges, forever, on its own timer.
// ---------------------------------------------------------------------------
function SpinBorder({ children, radius = 12, borderWidth = 2, duration = 3, gapDuration = 0 }) {
  const hasGap = gapDuration > 0;
  const totalDuration = duration + gapDuration;
  const sweepPct = hasGap ? (duration / totalDuration) * 100 : 100;

  return (
    <div
      className={hasGap ? 'spin-border spin-border--gap' : 'spin-border'}
      style={{
        '--sb-radius': `${radius}px`,
        '--sb-width': `${borderWidth}px`,
        '--sb-duration': `${totalDuration}s`,
      }}
    >
      <div className="spin-border-inner">{children}</div>

      <style jsx>{`
        .spin-border {
          position: relative;
          border-radius: var(--sb-radius);
          padding: var(--sb-width);
          overflow: hidden;
          isolation: isolate;
        }
        .spin-border::before {
          content: '';
          position: absolute;
          inset: -150%;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 55%,
            rgba(34, 197, 94, 0.15) 70%,
            rgba(74, 222, 128, 0.9) 88%,
            #86efac 100%
          );
          filter: blur(1.5px);
          animation: spin-rotate var(--sb-duration) linear infinite;
          z-index: 0;
        }
        .spin-border--gap::before {
          animation-name: spin-rotate-gap-${Math.round(sweepPct)};
          animation-timing-function: linear;
        }
        .spin-border-inner {
          position: relative;
          z-index: 1;
          background: #000;
          border-radius: calc(var(--sb-radius) - var(--sb-width));
          height: 100%;
          width: 100%;
        }
        @keyframes spin-rotate {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-rotate-gap-${Math.round(sweepPct)} {
          0% {
            transform: rotate(0deg);
            opacity: 1;
          }
          ${Math.max(sweepPct - 1, 0)}% {
            transform: rotate(360deg);
            opacity: 1;
          }
          ${sweepPct}% {
            opacity: 0;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Normalize: lowercase, strip all whitespace
function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, '').trim();
}

// Small edit-distance check
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

// Returns: { status: 'found', teams: [...] } | { status: 'not_found' }
function resolveTeam(query) {
  const q = normalize(query);
  if (!q) return { status: 'empty' };

  // Return ALL exact matches
  const exact = teams.filter((t) => normalize(t.teamName) === q);
  if (exact.length > 0) return { status: 'found', teams: exact };

  const threshold = q.length <= 5 ? 1 : 2;
  // Return ALL close matches
  const close = teams.filter((t) => levenshtein(normalize(t.teamName), q) <= threshold);

  if (close.length > 0) return { status: 'found', teams: close };
  
  return { status: 'not_found' };
}

export default function ProblemStatementModal({ onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

// Live suggestions as the user types (team name + leader name shown).
  const matches = query.trim().length > 0
    ? teams
        // Change from .includes() to .startsWith()
        .filter((t) => normalize(t.teamName).startsWith(normalize(query)))
        .slice(0, 6)
    : [];

  const pickSuggestion = (team) => {
    setQuery(team.teamName);
    // Wrap the single clicked suggestion in an array so the map function works
    setResult({ status: 'found', teams: [team] });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setResult(resolveTeam(query));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md glow-dust rounded-2xl bg-black"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-green-400 tracking-wider">
                FIND YOUR TEAM
              </h2>
              <button onClick={onClose} className="text-green-500/70 hover:text-green-400 transition-colors text-xl">
                ✕
              </button>
            </div>

            {/* SEARCH INPUT — always-spinning glow #2 */}
            <SpinBorder radius={10} borderWidth={2} duration={2.2}>
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setResult(null); }}
                  placeholder="Enter your team name"
                  className="w-full bg-transparent text-green-300 pl-4 pr-12 py-3 outline-none placeholder:text-green-700/60"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-1.5 flex items-center justify-center rounded-md bg-green-500 p-2.5 text-black transition-all hover:bg-green-400 active:scale-95"
                >
                  <Search className="h-4 w-4" strokeWidth={3} />
                </button>
              </form>
            </SpinBorder>

            {/* Live suggestions — team name + leader name, click to fill in */}
            {matches.length > 0 && !result && (
              <ul className="mt-2 max-h-52 overflow-y-auto divide-y divide-green-500/15 rounded-lg border border-green-500/25 bg-[#050a06]">
                {matches.map((t, i) => (
                  <li
                    key={`${t.teamName}-${i}`}
                    onClick={() => pickSuggestion(t)}
                    className="px-4 py-2.5 cursor-pointer hover:bg-green-500/10 flex justify-between items-center text-sm"
                  >
                    <span className="text-green-200">{t.teamName}</span>
                    <span className="text-xs text-green-600">{t.leaderName}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* RESULT — Maps through all matching teams */}
            {result?.status === 'found' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-4 max-h-72 overflow-y-auto pr-2 custom-scrollbar"
              >
                {result.teams.map((team, idx) => (
                  <SpinBorder key={`${team.teamName}-${idx}`} radius={12} borderWidth={2} duration={4}>
                    <div className="p-5 space-y-3 text-sm">
                      <p><span className="text-green-500 font-semibold tracking-wide">TEAM:</span> <span className="text-green-50">{team.teamName}</span></p>
                      <p><span className="text-green-500 font-semibold tracking-wide">LEADER:</span> <span className="text-green-50">{team.leaderName}</span></p>
                      <p><span className="text-green-500 font-semibold tracking-wide">TRACK:</span> <span className="text-green-50">{team.track}</span></p>
                      <div className="pt-2 border-t border-green-500/20">
                        <span className="text-green-500 font-semibold tracking-wide block mb-1">PROBLEM STATEMENT:</span>
                        <span className="text-green-50 leading-relaxed">{team.problemStatement}</span>
                      </div>
                    </div>
                  </SpinBorder>
                ))}
              </motion.div>
            )}

            {result?.status === 'not_found' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                <SpinBorder radius={10} borderWidth={2} duration={2.5}>
                  <p className="p-3 text-sm text-red-300">
                    No team found with that name. Double-check the spelling used at registration.
                  </p>
                </SpinBorder>
              </motion.div>
            )}
          </div>

          <style jsx>{`
            .glow-dust {
              animation: dust-pulse 3s ease-in-out infinite;
            }
            @keyframes dust-pulse {
              0%, 100% {
                box-shadow: 0 0 0px 0px rgba(74, 222, 128, 0);
              }
              50% {
                box-shadow:
                  0 0 25px 6px rgba(74, 222, 128, 0.35),
                  0 0 55px 18px rgba(34, 197, 94, 0.15);
              }
            }
            
            /* Optional: Custom scrollbar styling for the results container */
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(34, 197, 94, 0.05);
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(34, 197, 94, 0.3);
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(34, 197, 94, 0.5);
            }
          `}</style>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}