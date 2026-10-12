import { useEffect, useState } from "react";

/*
 * Tiny hash router. Hashes beginning with "#/" are page routes
 * ("#/projects" → "/projects"); plain hashes ("#work") stay in-page
 * anchors on the home view ("/"). Hash-based so it survives static
 * hosting (gh-pages) without server rewrites.
 */
const getRoute = () =>
  window.location.hash.startsWith("#/") ? window.location.hash.slice(1) : "/";

export default function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}
