import ReactionTestGame from "../hooks/backendCheck/game/reactionTest/reactionTestGame";
import ManualBackendCheck from "../hooks/manualBackendCheck/ManualBackendCheck";
import PortfolioButton from "../hooks/PortfolioButton"; // adjust path if needed

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-[#020617] overflow-hidden">
      {/* Floating Top-Left Panel */}
      <div className="absolute top-4 left-4 z-10 w-[90%] sm:w-[350px] md:w-[400px] bg-[#0f172a] rounded-2xl p-4 shadow-xl">
        <ManualBackendCheck />
      </div>

      {/* Portfolio Button (Top Right) */}
      <div className="absolute top-4 right-4 z-10">
        <PortfolioButton />
      </div>

      {/* Full Screen Background Component */}
      <div className="w-full h-screen flex items-center justify-center">
        <ReactionTestGame />
      </div>
    </div>
  );
}
