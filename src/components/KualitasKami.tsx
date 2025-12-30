"use client";
import Image from "next/image";
// import { useState } from "react";

const KualitasKami = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);

  const keunggulan = [
    {
      icon: "/assets/sistem.svg",
      title: "Stabilitas Sistem",
      description:
        "Didukung infrastruktur yang handal untuk memastikan transaksi berjalan lancar dan minim gangguan.",
    },
    {
      icon: "/assets/integrasi.svg",
      title: "Integrasi Mudah",
      description:
        "API dan sistem yang dirancang agar mudah diintegrasikan dengan berbagai platform bisnis dan aplikasi digital.",
    },
    {
      icon: "/assets/layanan.svg",
      title: "Layanan Lengkap",
      description:
        "Beragam produk PPOB tersedia dalam satu sistem terpusat untuk efisiensi operasional.",
    },
    {
      icon: "/assets/keamanan.svg",
      title: "Keamanan Terjamin",
      description:
        "Mengutamakan perlindungan data dan transaksi dengan standar keamanan yang ketat.",
    },
  ];

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % keunggulan.length);
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide(
  //       (prev) => (prev - 1 + keunggulan.length) % keunggulan.length
  //     );
  //   };

  return (
    <section
      className="
        relative
        bg-white
        pt-16 md:pt-21.25
        pb-16 md:pb-21.25
        overflow-hidden
      "
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* ================= HEADER DESKTOP ================= */}
        <div className="hidden md:block text-center mb-12.5">
          <h2 className="text-[#024FC5] text-[48px] lg:text-[48px] font-extrabold mb-4">
            Dibangun untuk Pertumbuhan <br />
            Bisnis Digital
          </h2>
          <p className="text-[#052B63] text-lg max-w-3xl mx-auto">
            Kami merancang platform PPOB dengan fokus pada performa, kemudahan,
            dan keberlanjutan agar mitra dapat tumbuh lebih cepat dan
            kompetitif.
          </p>
        </div>

        {/* ================= HEADER MOBILE ================= */}
        <div className="md:hidden text-center mb-8">
          <h2 className="text-[#024FC5] text-2xl font-bold mb-3 px-4">
            Dibangun untuk Pertumbuhan Bisnis Digital
          </h2>
          <p className="text-[#052B63] text-sm px-4">
            Kami merancang platform PPOB dengan fokus pada performa, kemudahan,
            dan keberlanjutan agar mitra dapat tumbuh lebih cepat dan
            kompetitif.
          </p>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div
          className="
    hidden
    md:grid
    md:grid-cols-2
    lg:grid-cols-4
    gap-4.25
    max-w-360
    mx-auto
  "
        >
          {keunggulan.map((item, index) => (
            <div
              key={index}
              className="
        bg-white
        rounded-[15px]
        p-4
        min-h-77
        flex
        flex-col
        gap-4
        shadow-lg
        transition-all
        duration-300
        group
        hover:bg-[linear-gradient(121.82deg,rgba(0,170,247,1)_0.9%,rgba(2,79,197,1)_101.14%)]
      "
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={120}
                className="w-20 h-20 object-contain"
              />

              <h3 className="text-xl font-bold text-[#0473BF] group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-[#06334C] leading-relaxed group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE CAROUSEL ================= */}
        {/* <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {keunggulan.map((item, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div
                    className="
                      bg-white
                      rounded-[15px]
                      p-4
                      min-h-77
                      flex
                      flex-col
                      gap-4
                      shadow-lg
                      mx-auto
                      max-w-77
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-20 h-20 object-contain mx-auto"
                    />

                    <h3 className="text-lg font-bold text-[#1B227D] text-center">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#1B1C32] text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

        {/* ================= INDICATOR ================= */}
        {/* <div className="flex justify-center gap-2 mt-8">
            {keunggulan.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[#0533F9]"
                    : "w-2 border-2 border-[#0533F9]"
                }`}
              />
            ))}
          </div> */}

        {/* ================= SWIPE ================= */}
        {/* <div
            className="absolute inset-0 z-10"
            onTouchStart={(e) => {
              const startX = e.touches[0].clientX;

              const handleTouchMove = (e) => {
                const diff = startX - e.touches[0].clientX;
                if (Math.abs(diff) > 50) {
                  diff > 0 ? nextSlide() : prevSlide();
                  document.removeEventListener("touchmove", handleTouchMove);
                }
              };

              document.addEventListener("touchmove", handleTouchMove);
              document.addEventListener(
                "touchend",
                () => {
                  document.removeEventListener("touchmove", handleTouchMove);
                },
                { once: true }
              );
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default KualitasKami;
