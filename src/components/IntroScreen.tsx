import { useEffect, useState } from "react";

const HOLD_DURATION = 1500;
const FADE_DURATION = 450;

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => setIsExiting(true), HOLD_DURATION);
    const completeTimer = window.setTimeout(onComplete, HOLD_DURATION + FADE_DURATION);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(completeTimer);
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
    };
  }, [onComplete]);

  return (
    <div
      className={`intro-screen${isExiting ? " intro-screen--exiting" : ""}`}
      role="status"
      aria-label="Loading Mahaluxmi Properties"
    >
      <div className="intro-content">
        <img
          src="/ChatGPT%20Image%20Sep%2029,%202026,%2010_46_59%20AM.png"
          alt="Mahaluxmi Properties logo"
          className="intro-logo"
        />
        <p className="intro-name">MAHALUXMI PROPERTIES</p>
        <p className="intro-year">Since 1997</p>
      </div>
    </div>
  );
}