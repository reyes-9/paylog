export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-16 py-5">{children}</div>
    </div>
  );
}
