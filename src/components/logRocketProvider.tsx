"use client";
import LogRocket from "logrocket";

const LogRocketProvider = () => {
  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_PROJECT_PATH || "");
  return null;
};

export default LogRocketProvider;
