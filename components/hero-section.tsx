"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RegistrationPopup } from "./registration-popup"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-white">
        {/* Ảnh desktop */}
        <img
          src="/images/hero.webp"
          alt="GoTalk Desktop"
          className="hidden lg:block w-full h-full object-cover object-center"
        />

        {/* Ảnh mobile */}
        <img
          src="/images/hero-mobile.webp"
          alt="GoTalk Mobile"
          className="block lg:hidden w-full h-full object-cover object-center"
        />

        {/* Button đăng ký */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10 md:pb-12 lg:pb-16">
          <Button
            onClick={() => setIsRegistrationOpen(true)}
            size="lg"
            className="
              bg-[#3264C3] 
              hover:bg-[#2853A6]/90 
              text-white font-semibold 
              px-5 sm:px-8 py-3 sm:py-4 
              text-sm sm:text-base md:text-lg 
              transform hover:scale-105 transition-all duration-300 
              shadow-lg hover:shadow-xl rounded-full
            "
          >
            ĐĂNG KÝ NGAY - MIỄN PHÍ TƯ VẤN
          </Button>
        </div>
      </section>

      <RegistrationPopup
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  )
}
