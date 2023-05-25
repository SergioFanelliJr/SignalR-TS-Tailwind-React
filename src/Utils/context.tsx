import { createContext } from "react";
import { connection } from "./connection";

export const SignalRContext = createContext(connection);
