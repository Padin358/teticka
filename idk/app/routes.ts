import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("druhy", "routes/druhy.tsx"),
    route("oleje", "routes/oleje.tsx"),
    route("cenik", "routes/cenik.tsx"),
    route("poukazy", "routes/poukazy.tsx"),
    route("kontakt", "routes/kontakt.tsx"),
] satisfies RouteConfig;
