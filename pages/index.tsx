import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Home from "@/components/home/Home";
export default function IndexPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  // 조건 분기(브라우저 저장)
  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("onboardingComplete");
  //   if (!hasVisited) {
  //     router.replace("/onboarding/splash");
  //   } else {
  //     setIsReady(true);
  //   }
  // }, []);

  // 포폴용(탭 저장)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visitedOnce");

    if (!hasVisited) {
      sessionStorage.setItem("visitedOnce", "true");
      router.replace("/onboarding/splash");
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  return <Home />;
}
