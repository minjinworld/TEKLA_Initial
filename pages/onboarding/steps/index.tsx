import { useRouter } from "next/router";
import { useState } from "react";

import StepNavigator from "@/components/onboarding/StepNavigator";
import MobileLayout from "@/components/layouts/MobileLayout";

export default function OnboardingStepsPage() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  const handleComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.push("/");
    }, 500);
  };
  return (
    <div className={fadeOut ? "fade-out" : "fade=in"}>
      <MobileLayout>
        <StepNavigator onComplete={handleComplete} />
      </MobileLayout>
    </div>
  );
}
