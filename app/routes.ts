import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/services", "routes/services.tsx"),
  route("/about", "routes/propos.tsx"),
  route("/contact", "routes/contact.tsx"),
] satisfies RouteConfig;
