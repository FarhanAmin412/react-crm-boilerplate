import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Error from "../pages/Error";

export const Route = createRootRoute({
  errorComponent: () => <Error />,
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to={"/"} className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to={"/about"} className="[&.active]:font-bold">
          About
        </Link>
        <Link to={"/graph"} className="[&.active]:font-bold">
          Graph
        </Link>
        <Link to={"/calender"} className="[&.active]:font-bold">
          Calender
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
