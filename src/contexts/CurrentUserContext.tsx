import React from "react";

//Types:
import { User } from "../types/index";

export const CurrentUserContext = React.createContext<User | undefined>(undefined);
