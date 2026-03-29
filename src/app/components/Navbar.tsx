import React from "react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-m067nzhc74";

export function Navbar() {
  return (
    <div className="w-full flex items-start">
      <Link to="/" className="block h-12 w-12 md:h-16 md:w-16 lg:h-[81px] lg:w-[79px] shrink-0 transition-transform hover:scale-105" aria-label="Retour à l'accueil">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 81">
          <g id="Logo_LesMinitels">
            <path d={svgPaths.p5900c40} fill="#171717" />
            <path d={svgPaths.p2ed43300} fill="#171717" />
            <path d={svgPaths.p272f0580} fill="#171717" />
            <path d={svgPaths.p24860f70} fill="#171717" />
            <path d={svgPaths.p24c89c40} fill="#171717" />
            <path d={svgPaths.pecf1600} fill="#171717" />
            <path d={svgPaths.p2133a4f0} fill="#171717" />
            <path d={svgPaths.p257b3f00} fill="#171717" />
            <path d={svgPaths.p2fe41870} fill="#171717" />
            <path d={svgPaths.p2a2e0400} fill="#171717" />
            <path d={svgPaths.p2ac0d880} fill="#171717" />
            <path d={svgPaths.p2babc800} fill="#171717" />
            <path d={svgPaths.p258753f0} fill="#171717" />
            <path d={svgPaths.p27fe6d00} fill="#171717" />
            <path d={svgPaths.p3da09280} fill="#171717" />
            <path d={svgPaths.p15eb7d00} fill="#171717" />
            <path d={svgPaths.p37d53800} fill="#171717" />
            <path d={svgPaths.p1ee84b80} fill="#171717" />
            <path d={svgPaths.p6c3d800} fill="#171717" />
            <path d={svgPaths.p1953ce00} fill="#171717" />
            <path d={svgPaths.p312d2f00} fill="#171717" />
            <path d={svgPaths.p2f06ab40} fill="#171717" />
            <path d={svgPaths.pf15c300} fill="#171717" />
            <path d={svgPaths.p18959040} fill="#171717" />
            <path d={svgPaths.p25a0ca00} fill="#171717" />
            <path d={svgPaths.p242c6900} fill="#171717" />
            <path d={svgPaths.p24337f00} fill="#171717" />
            <path d={svgPaths.pdc1d300} fill="#171717" />
            <path d={svgPaths.p30232800} fill="#171717" />
            <path d={svgPaths.p39168800} fill="#171717" />
            <path d={svgPaths.p153f080} fill="#171717" />
          </g>
        </svg>
      </Link>
    </div>
  );
}
