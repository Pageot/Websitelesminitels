import React, { useState, useEffect } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import svgPaths from "../imports/svg-m067nzhc74";
import { ProjectCarousel } from "./components/ProjectCarousel";

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 1280, height: 720 });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full font-sans overflow-x-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20 w-full h-full pointer-events-none">
        <GrainGradient
          width={windowDimensions.width}
          height={windowDimensions.height}
          colors={["#fff0fc75", "#ffd6b34f"]}
          colorBack="#ffffff"
          softness={0}
          intensity={0.58}
          noise={0.51}
          shape="corners"
          speed={0.46}
          scale={1.04}
          rotation={176}
          offsetX={0.1}
          offsetY={-0.3}
        />
      </div>

      {/* Fixed Header Section (stays behind the carousel) */}
      <div className="fixed inset-0 w-full flex flex-col p-6 md:p-8 lg:p-10 z-0 pointer-events-auto">
        <div className="flex flex-row flex-wrap justify-between items-start lg:items-end w-full gap-6 lg:gap-10 xl:gap-16">
          
          {/* Left Section */}
          <div className="flex flex-col gap-10 md:gap-12 items-start w-full lg:w-auto max-w-full shrink-0">
            
            {/* Logo - Clickable link to home */}
            <a href="/" className="block h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 transition-transform hover:scale-105" aria-label="Retour à l'accueil">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 81">
                <g id="Logo_LesMinitels">
                  <path d={svgPaths.p5900c40} fill="var(--fill-0, #171717)" id="Vector" />
                  <path d={svgPaths.p2ed43300} fill="var(--fill-0, #171717)" id="Vector_2" />
                  <path d={svgPaths.p272f0580} fill="var(--fill-0, #171717)" id="Vector_3" />
                  <path d={svgPaths.p24860f70} fill="var(--fill-0, #171717)" id="Vector_4" />
                  <path d={svgPaths.p24c89c40} fill="var(--fill-0, #171717)" id="Vector_5" />
                  <path d={svgPaths.pecf1600} fill="var(--fill-0, #171717)" id="Vector_6" />
                  <path d={svgPaths.p2133a4f0} fill="var(--fill-0, #171717)" id="Vector_7" />
                  <path d={svgPaths.p257b3f00} fill="var(--fill-0, #171717)" id="Vector_8" />
                  <path d={svgPaths.p2fe41870} fill="var(--fill-0, #171717)" id="Vector_9" />
                  <path d={svgPaths.p2a2e0400} fill="var(--fill-0, #171717)" id="Vector_10" />
                  <path d={svgPaths.p2ac0d880} fill="var(--fill-0, #171717)" id="Vector_11" />
                  <path d={svgPaths.p2babc800} fill="var(--fill-0, #171717)" id="Vector_12" />
                  <path d={svgPaths.p258753f0} fill="var(--fill-0, #171717)" id="Vector_13" />
                  <path d={svgPaths.p27fe6d00} fill="var(--fill-0, #171717)" id="Vector_14" />
                  <path d={svgPaths.p3da09280} fill="var(--fill-0, #171717)" id="Vector_15" />
                  <path d={svgPaths.p15eb7d00} fill="var(--fill-0, #171717)" id="Vector_16" />
                  <path d={svgPaths.p37d53800} fill="var(--fill-0, #171717)" id="Vector_17" />
                  <path d={svgPaths.p1ee84b80} fill="var(--fill-0, #171717)" id="Vector_18" />
                  <path d={svgPaths.p6c3d800} fill="var(--fill-0, #171717)" id="Vector_19" />
                  <path d={svgPaths.p1953ce00} fill="var(--fill-0, #171717)" id="Vector_20" />
                  <path d={svgPaths.p312d2f00} fill="var(--fill-0, #171717)" id="Vector_21" />
                  <path d={svgPaths.p2f06ab40} fill="var(--fill-0, #171717)" id="Vector_22" />
                  <path d={svgPaths.pf15c300} fill="var(--fill-0, #171717)" id="Vector_23" />
                  <path d={svgPaths.p18959040} fill="var(--fill-0, #171717)" id="Vector_24" />
                  <path d={svgPaths.p25a0ca00} fill="var(--fill-0, #171717)" id="Vector_25" />
                  <path d={svgPaths.p242c6900} fill="var(--fill-0, #171717)" id="Vector_26" />
                  <path d={svgPaths.p24337f00} fill="var(--fill-0, #171717)" id="Vector_27" />
                  <path d={svgPaths.pdc1d300} fill="var(--fill-0, #171717)" id="Vector_28" />
                  <path d={svgPaths.p30232800} fill="var(--fill-0, #171717)" id="Vector_29" />
                  <path d={svgPaths.p39168800} fill="var(--fill-0, #171717)" id="Vector_30" />
                  <path d={svgPaths.p153f080} fill="var(--fill-0, #171717)" id="Vector_31" />
                </g>
              </svg>
            </a>

            {/* Texts Left */}
            <div className="flex flex-col gap-2 md:gap-[8px] items-start uppercase w-full">
              <h1 className="font-['Nova_Klasse',_sans-serif] font-semibold text-[#171717] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[86px] tracking-[0.05em] lg:tracking-[6px] 2xl:tracking-[12px] leading-none">
                Les Minitels
              </h1>
              <h2 className="font-['Changa_One',_sans-serif] italic text-[#8a8a8a] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] tracking-[0.02em] lg:tracking-[1.5px] 2xl:tracking-[2.72px] leading-tight lg:leading-[1.2]">
                Facilitateur de vie
              </h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex flex-col gap-2 md:gap-[8px] items-end text-right uppercase w-full lg:w-auto ml-auto shrink-0">
            <p className="font-['Changa_One',_sans-serif] italic text-[#8a8a8a] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] tracking-[0.02em] lg:tracking-[1.5px] 2xl:tracking-[2.72px] leading-tight lg:leading-[1.2]">
              Créateur
            </p>
            <p className="font-['Nova_Klasse',_sans-serif] font-semibold text-[#171717] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[86px] leading-none">
              D’apps
            </p>
            <p className="font-['Changa_One',_sans-serif] italic text-[#8a8a8a] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] tracking-[0.02em] lg:tracking-[1.5px] 2xl:tracking-[2.72px] leading-tight lg:leading-[1.2]">
              Depuis 2026
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Carousel Section */}
      <ProjectCarousel />
    </div>
  );
}
