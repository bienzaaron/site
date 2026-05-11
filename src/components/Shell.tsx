import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function Shell({ title }: { title: string }) {
  return (
    <div className="page">
      <header className="site-header">
        <Link className="brand" to="/">
          AJ Bienz
        </Link>
        <nav aria-label="Primary navigation">
          <Link to="/about">about</Link>
          <Link to="/blog">notes</Link>
          <a href="/rss.xml">rss</a>
        </nav>
      </header>

      <div className="window">
        <div className="bar" aria-hidden="true">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          {title}
        </div>
        <main>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
