import { useState } from "react";
import PortalIntro from "./components/PortalIntro/PortalIntro";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <div onClick={() => setShowIntro(false)}><PortalIntro /></div>}
      {!showIntro && <HomePage />}
    </>
  );
}