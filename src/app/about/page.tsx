'use client'
import { CoverDemo } from "../components/CoverDemo";
// import StatsSection from "../components/About";
import TimelineAnimation from "../components/AboutHero";

export default function Slide1() {
    return (
        <div className="!bg-gradient-to-br py-11  from-black via-gray-900 to-black text-white ">
    <CoverDemo/>
<TimelineAnimation/>
{/* <StatsSection/> */}
        </div>
    )
}
