"use client";
import { useRouter } from "next/navigation";

const useNavbar = () => {
  const router = useRouter();

  const checkIfRouteIsActive = (urlKey: string) => {
    if (typeof window !== "undefined") {
      return window.location.pathname.includes(urlKey);
    }
    return false;
  };

  const handleRouteClick = (route: string) => {
    router.push(route);
  };

  return {
    checkIfRouteIsActive,
    handleRouteClick,
  };
};

export default useNavbar;
