import Meteors from "@/components/ui/meteors";

export function MeteorDemo() {
  return (
    <div className="absolute flex h-[100vh] -z-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={40} />
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span> */}
    </div>
  );
}
