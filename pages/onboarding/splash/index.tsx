import React, { useEffect } from "react";
import LogoIntro from "@/components/onboarding/LogoIntro";
import { useRouter } from "next/router";
import MobileLayout from "@/components/layouts/MobileLayout";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("onboardingComplete", "true");
      router.push("/onboarding/steps");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <MobileLayout>
      <LogoIntro />
    </MobileLayout>
  );
}
