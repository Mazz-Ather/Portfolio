'use client'
import { CoverDemo } from "../components/CoverDemo";
import StatsSection from "../components/About";
import TimelineAnimation from "../components/AboutHero";
import Navbar from "../components/Navbar";

export default function Slide1() {
    return (
        <>
            <div className="!bg-black !text-white">
                <Navbar/>
            </div>
    <CoverDemo/>
<TimelineAnimation/>
<StatsSection/>
        </>
    )
}
