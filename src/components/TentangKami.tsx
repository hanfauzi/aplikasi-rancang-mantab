import Image from "next/image";

const TentangKami = () => {
  return (
    <section id="tentang" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/assets/cewe-cewe-2.svg"
              alt="Team collaboration"
              className="w-full h-auto rounded-3xl"
              width={705}
              height={757}
            />
          </div>

          {/* CONTENT WRAPPER (630 x 613, gap 30) */}
          <div
            className="
              w-full
              lg:max-w-157.5
              flex
              flex-col
              gap-7.5
            "
          >
            {/* TEXT WRAPPER (Tentang Kami) — gap 32 */}
            <div className="flex flex-col gap-8">
              <p className="text-[#00AAF7] font-bold text-[20px]">
                Tentang Kami
              </p>

              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#024FC5] leading-tight">
                Mitra Strategis Penyedia Solusi PPOB Terpadu
              </h2>

              <p className="text-[#052B63] md:text-lg leading-relaxed text-[16px]">
                Aplikasi Rancang Mantab adalah perusahaan Biller Agregator PPOB
                yang berfokus pada penyediaan layanan pembayaran digital yang
                modern, terintegrasi, dan berorientasi pada kebutuhan mitra
                bisnis. Kami hadir untuk menjadi fondasi sistem pembayaran yang
                kuat bagi pelaku usaha di era digital.
              </p>
            </div>

            {/* VISI — 630 x 120, gap 16 */}
            <div className="flex gap-4">
              <Image
                src="/assets/visi.svg"
                alt="Visi Kami"
                className="w-16 h-16 shrink-0"
                width={120}
                height={120}
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#1B227D]">Visi Kami</h3>
                <p className="text-[#1B1C32] leading-relaxed">
                  Menjadi Biller Agregator PPOB terpercaya yang mendorong
                  pertumbuhan ekosistem transaksi digital di Indonesia.
                </p>
              </div>
            </div>

            {/* MISI — 630 x 165, gap 16 */}
            <div className="flex gap-4">
              <Image
                src="/assets/misi.svg"
                alt="Misi Kami"
                className="w-16 h-16 shrink-0"
                width={120}
                height={120}
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#1B227D]">Misi Kami</h3>

                <ul className="list-disc pl-5 space-y-2 text-[#1B1C32] leading-relaxed">
                  <li>
                    Menyediakan layanan PPOB yang stabil, aman, dan mudah
                    digunakan
                  </li>
                  <li>
                    Mendukung mitra bisnis dengan sistem yang fleksibel dan
                    scalable
                  </li>
                  <li>
                    Menghadirkan inovasi berkelanjutan dalam solusi pembayaran
                    digital
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
