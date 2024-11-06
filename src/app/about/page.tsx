'use client'
import Navbar from "../components/Navbar";
import { CoverDemo } from "../components/CoverDemo";
import StatsSection from "../components/About";
import TimelineAnimation from "../components/AboutHero";

export default function Slide1() {
    return (
        <>
            <div className="!bg-black !text-white">
                <Navbar />
            </div>
    <CoverDemo/>
<TimelineAnimation/>
<StatsSection/>
        </>
    )
}
