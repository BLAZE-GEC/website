// No "use client" needed — this is now a plain CSS animation,
// which is more reliable than a JS-driven one for a page transition.

export default function Template({ children }) {
  return <div className="page-fade-in">{children}</div>;
}