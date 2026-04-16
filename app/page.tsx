import PillButton from "@/components/PillButton";
import CornerPanel from "@/components/CornerPanel";
import SidePanel from "@/components/SidePanel";
import FlippedCornerPanel from "@/components/FlippedCornerPanel";
export default function Home() {
  return (
    <>
      <CornerPanel className="text-[var(--african-violet)]" />

      <SidePanel className="bg-[var(--bluey)] h-10" />
      <FlippedCornerPanel className="text-[var(--bluey)]"/>
      <CornerPanel className="text-[var(--peach)] -mt-4" />
      <SidePanel className="bg-[var(--tomato)] h-24" />
      <SidePanel className="bg-[var(--tomato)] h-24" />
      <SidePanel className="bg-[var(--bluey)] h-24" />
    </>
  );
}
