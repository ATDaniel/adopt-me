import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); // uses a hook; empty function to accept from parent

export default ThemeContext;
