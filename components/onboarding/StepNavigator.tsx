import React, { useEffect, useState } from "react";
import Step1 from "@/components/onboarding/Step1";
import Step2 from "@/components/onboarding/Step2";
import Step3 from "@/components/onboarding/Step3";

type Props = {
  onComplete: () => void;
};

export default function StepsNavigator({ onComplete }: Props) {
  const [step, setStep] = useState(1);

  const goToNext = () => setStep((prev) => prev + 1);
  const goToPrev = () => setStep((prev) => prev - 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <>
      {step === 1 && <Step1 onNext={goToNext} />}
      {step === 2 && <Step2 onNext={goToNext} onPrev={goToPrev} />}
      {step === 3 && <Step3 onNext={onComplete} onPrev={goToPrev} />}
    </>
  );
}
