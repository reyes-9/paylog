import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  // Split the current path into segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-gray-50 px-6 py-3 text-sm">
      <ol className="flex items-center gap-2 text-gray-50">
        {/* Always show Home */}
        <li className="flex items-center gap-2">
          <Link to="/" className="text-muted-foreground transition">
            Home
          </Link>
          {pathnames.length > 0 && <span className="">{">"}</span>}
        </li>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={index} className="flex items-center gap-2 ">
              {!isLast ? (
                <Link to={routeTo} className="text-muted-foreground transition">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              ) : (
                <span className="text-gray-50  00 font-medium">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              )}
              {!isLast && <span className="text-gray-50">{">"}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
