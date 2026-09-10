import Founder from "./pages/Founder";
import About from "./pages/About";
import VisionPhilosophy from "./pages/VisionPhilosophy";
import Insights from "./pages/Insights";
import WorkImpact from "./pages/WorkImpact";
import MediaSpeaking from "./pages/MediaSpeaking";
import Csr from "./pages/Csr";
import Achievements from "./pages/Achievements";
import BestAlternativeLendingAward from "./pages/media/BestAlternativeLendingAward";
import LeaderCustomizedLendingSolutions from "./pages/media/LeaderCustomizedLendingSolutions";
import TimesPowerIconAward from "./pages/media/TimesPowerIconAward";
import CircleFutureArticle from "./pages/media/CircleFutureArticle";
import Contact from "./pages/Contact";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path === "/about") return <About />;
  if (path === "/vision-philosophy") return <VisionPhilosophy />;
  if (path === "/insights") return <Insights />;
  if (path === "/work-impact") return <WorkImpact />;
  if (path === "/media-speaking" || path === "/media" || path === "/speaking") return <MediaSpeaking />;
  if (path === "/csr") return <Csr />;
  if (path === "/achievements") return <Achievements />;
  if (path === "/media/best-alternative-lending-award") return <BestAlternativeLendingAward />;
  if (path === "/media/leader-in-customized-lending-solutions") return <LeaderCustomizedLendingSolutions />;
  if (path === "/media/times-power-icon-award") return <TimesPowerIconAward />;
  if (path === "/media/apka-circle-apka-future") return <CircleFutureArticle />;
  if (path === "/contact") return <Contact />;
  return <Founder />;
}
