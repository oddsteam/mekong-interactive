"use client";

import { createContext } from "react";

interface SectionContextType {
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const SectionContext = createContext<SectionContextType>({
  containerRef: undefined,
});