import { createContext, useContext } from "react";

export const AllJobsContext = createContext();

export const useAllJobsContext = () => useContext(AllJobsContext);
