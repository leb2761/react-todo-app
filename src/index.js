import React from "react";
import { createRoot } from "react-dom/client";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(<TodoContainer />);