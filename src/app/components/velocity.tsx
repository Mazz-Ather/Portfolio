import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="frontend developer &nbsp;&nbsp;&nbsp; Next.js developer &nbsp;&nbsp;&nbsp;React.js Developer &nbsp;&nbsp;&nbsp;"
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] bg-black/90 drop-shadow-sm text-white md:text-7xl p-5 md:leading-[5rem]"
    />
  );
}
