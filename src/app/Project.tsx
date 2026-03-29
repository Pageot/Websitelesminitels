import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { Navbar } from "./components/Navbar";

import imgConvertShowreel11 from "figma:asset/90ced5775e3caed51cb3cb67bd7f5885e9655f5a.png";
import imgConvertShowreel21 from "figma:asset/60fac3eed5e8d37d129d6095645ff337de29da8c.png";
import imgConvertShowreel31 from "figma:asset/def09b034b76d27e3c5081dec875e4f9cf6f6674.png";
import imgConvertShowreel41 from "figma:asset/b0d64a830e76fe8aacab280c6c04eb419f1294a4.png";
import imgConvertShowreel51 from "figma:asset/52a22acb2fca7b0c9170d9271d57753ac8025e77.png";
import imgConvertShowreel61 from "figma:asset/ad81864c82d8bbbc781278a603f87a89589c8cc1.png";
import imgIconAppConvert1 from "figma:asset/8c3f6dacd2fdbf01fa82a046d25570c7312d267f.png";
import rawSvgPhoneMockup from "../imports/Main_screen_-_Online_-_Light.svg?raw";
import rawAppStoreBadge from "../imports/Download_on_the_App_Store_Badge.svg?raw";
import rawGooglePlayBadge from "../imports/Get_it_on_Google_play.svg?raw";
import { ImageGallery } from "./components/ImageGallery";

import svgPaths from "../imports/svg-2vabhdf4i6";

const CAROUSEL_IMAGES = [
  imgConvertShowreel11,
  imgConvertShowreel21,
  imgConvertShowreel31,
  imgConvertShowreel41,
  imgConvertShowreel51,
  imgConvertShowreel61,
];

export default function Project() {
  const { id } = useParams();
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#fffffe] w-full font-sans overflow-x-clip flex flex-col items-center">
      <div className="w-full max-w-[1417px] flex flex-col gap-[40px] px-6 lg:px-12 pt-[24px]">
        {/* Navigation */}
        <Navbar />
        
        {/* Line below navbar */}
        <div className="bg-[#c01f2a] h-[3px] opacity-26 shadow-[0px_3px_0px_0px_#f49514] shrink-0 w-full" />

        <main className="w-full flex flex-col lg:flex-row gap-16 xl:gap-[239px] items-center lg:items-start pb-12">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-[24px] w-full lg:w-[700px] shrink-0">
            <div className="relative shrink-0 w-[80px] h-[80px]">
              <img 
                src={imgIconAppConvert1} 
                alt="Convert App Icon" 
                className="absolute inset-0 w-full h-full object-cover rounded-[24px] shadow-sm border border-gray-100"
              />
            </div>
            
            <h1 className="font-['Nova_Klasse',_sans-serif] font-semibold text-[#171717] text-3xl sm:text-4xl md:text-[48px] uppercase tracking-[3px] sm:tracking-[4px] md:tracking-[5.76px] leading-none m-0">
              Convert
            </h1>
            
            <div className="font-['Helvetica_Neue',_Arial,_sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#636363] text-[14px] tracking-[0.56px] w-full">
              <p className="m-0">Convert is an all-in-one converter that works completely offline.</p>
              <p className="m-0">Convert over 200 world currencies for free with accurate exchange rates.</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Unlock the Pro version with one-time purchase or subscription and get even more:</p>
              <p className="m-0">• Unit conversions (length, weight, volume, temperature, area, speed, and more)</p>
              <p className="m-0">• Precious metals: gold, silver, platinum and others</p>
              <p className="m-0">• Top 200 cryptocurrencies (Bitcoin, Ethereum, and major coins)</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Everything works offline, no internet needed after the initial data download. Perfect for travel, daily use or when you're without signal.</p>
              <p className="m-0">Designed for maximum simplicity and speed: clean interface, quick search, dark mode, and home screen widget (Pro).</p>
              <p className="m-0">One app for all your conversions: currency converter, unit converter, crypto converter, gold & silver converter always available, even offline.</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Download Convert now and never get stuck without the right conversion again.</p>
            </div>
            
            {/* App Store Badges */}
            <div className="flex gap-[16px] items-center shrink-0 flex-wrap mt-[8px]">
              <button 
                className="cursor-pointer h-[40px] relative shrink-0 w-[120px] hover:opacity-80 transition-opacity [&>svg]:w-full [&>svg]:h-full [&>svg]:block"
                dangerouslySetInnerHTML={{ __html: rawAppStoreBadge }}
                aria-label="Download on the App Store"
              />
              <button 
                className="cursor-pointer h-[40px] relative shrink-0 w-[135px] hover:opacity-80 transition-opacity [&>svg]:w-full [&>svg]:h-full [&>svg]:block"
                dangerouslySetInnerHTML={{ __html: rawGooglePlayBadge }}
                aria-label="Get it on Google Play"
              />
            </div>
            
            {/* Gallery Carousel */}
            <ImageGallery images={CAROUSEL_IMAGES} />
          </div>
          
          {/* Right Column - Mockup */}
          <div className="aspect-[341/743] h-auto w-full max-w-[341px] pointer-events-none relative rounded-[32px] sm:rounded-[42px] shrink-0 flex justify-center items-center overflow-hidden bg-white lg:sticky lg:top-[40px]" data-name="Main screen - Online - Light 1 1">
            <div 
              className="absolute inset-0 max-w-none size-full flex justify-center items-center [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover" 
              dangerouslySetInnerHTML={{ __html: rawSvgPhoneMockup }}
            />
            <div aria-hidden="true" className="absolute border-[3px] border-[#171717] border-solid inset-0 rounded-[32px] sm:rounded-[42px]" />
          </div>
          
        </main>

        {/* Footer with Privacy Policy */}
        <footer className="w-full flex justify-center lg:justify-end pb-[24px]">
          <Link 
            to={`/project/${id}/privacy`}
            className="inline-block font-['Helvetica_Neue',_Arial,_sans-serif] normal-case font-medium text-[#171717] text-[14px] tracking-[0.64px] hover:underline hover:opacity-80 transition-all"
          >
            Privacy Policy
          </Link>
        </footer>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
