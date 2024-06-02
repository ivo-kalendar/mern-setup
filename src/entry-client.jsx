import { hydrateRoot } from "react-dom/client";
import { Render } from "./Render";

const root = document.getElementById("root")
hydrateRoot(root, <Render />)