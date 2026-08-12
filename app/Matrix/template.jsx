// Matrix page doesn't use the page-fade-in animation because its
// CSS transform creates a containing block that breaks position:fixed
// on the MatrixBackground rain canvas.

export default function MatrixTemplate({ children }) {
  return <>{children}</>;
}
