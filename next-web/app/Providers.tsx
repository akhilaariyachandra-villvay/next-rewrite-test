"use client";

import { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default Providers;
