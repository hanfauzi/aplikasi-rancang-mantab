import Image from "next/image";

const TentangKami = () => {
  return (
    <section id="tentang" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-0">

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="lg:hidden flex flex-col items-center text-center gap-8">
          {/* IMAGE */}
          <div className="w-full max-w-sm mx-auto">
            <Image
              src="/assets/cewe-cewe-2-mobile.svg"
              alt="Team collaboration"
              width={705}
              height={757}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-6">
            <p className="text-[#00AAF7] font-bold text-[16px]">
              TENTANG KAMI
            </p>

            <h2 className="text-2xl font-bold text-[#024FC5] leading-snug">
              Mitra Strategis Penyedia Solusi PPOB Terpadu
            </h2>

            <p className="text-[#052B63] text-[12px] leading-relaxed">
              Aplikasi Rancang Mantab adalah perusahaan Biller Agregator PPOB
              yang berfokus pada penyediaan layanan pembayaran digital yang
              modern, terintegrasi, dan berorientasi pada kebutuhan mitra
              bisnis.
            </p>
          </div>

          {/* VISI */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/visi.svg"
              alt="Visi Kami"
              width={100}
              height={100}
              className="w-14 h-14"
            />
            <h3 className="text-lg font-bold text-[#1B227D]">
              Visi Kami
            </h3>
            <p className="text-[12px] text-[#052B63] leading-relaxed px-4">
              Menjadi Biller Agregator PPOB terpercaya yang mendorong
              pertumbuhan ekosistem transaksi digital di Indonesia.
            </p>
          </div>

          {/* MISI */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/misi.svg"
              alt="Misi Kami"
              width={100}
              height={100}
              className="w-14 h-14"
            />
            <h3 className="text-lg font-bold text-[#1B227D]">
              Misi Kami
            </h3>

            <ul className="list-disc items-center text-center pl-5 space-y-2 text-[12px] text-[#052B63]">
              <p>Menyediakan layanan PPOB yang stabil, aman, dan mudah digunakan</p>
              <p>Mendukung mitra bisnis dengan sistem yang fleksibel dan scalable</p>
              <p>Menghadirkan inovasi berkelanjutan dalam solusi pembayaran digital</p>
            </ul>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:flex flex-row items-center gap-20">
          {/* IMAGE */}
          <div className="w-1/2 relative">
            <Image
              src="/assets/cewe-cewe-2.svg"
              alt="Team collaboration"
              width={705}
              height={757}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-157.5 flex flex-col gap-7.5">
            <div className="flex flex-col gap-8">
              <p className="text-[#00AAF7] font-bold text-[20px]">
                Tentang Kami
              </p>

              <h2 className="text-[48px] font-bold text-[#024FC5] leading-tight">
                Mitra Strategis Penyedia Solusi PPOB Terpadu
              </h2>

              <p className="text-[#052B63] text-lg leading-relaxed">
                Aplikasi Rancang Mantab adalah perusahaan Biller Agregator PPOB
                yang berfokus pada penyediaan layanan pembayaran digital yang
                modern, terintegrasi, dan berorientasi pada kebutuhan mitra
                bisnis.
              </p>
            </div>

            {/* VISI */}
            <div className="flex gap-4">
              <Image
                src="/assets/visi.svg"
                alt="Visi Kami"
                width={120}
                height={120}
                className="w-16 h-16 shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#1B227D]">Visi Kami</h3>
                <p className="text-[#1B1C32] leading-relaxed">
                  Menjadi Biller Agregator PPOB terpercaya yang mendorong
                  pertumbuhan ekosistem transaksi digital di Indonesia.
                </p>
              </div>
            </div>

            {/* MISI */}
            <div className="flex gap-4">
              <Image
                src="/assets/misi.svg"
                alt="Misi Kami"
                width={120}
                height={120}
                className="w-16 h-16 shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#1B227D]">Misi Kami</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#1B1C32]">
                  <li>Menyediakan layanan PPOB yang stabil, aman, dan mudah digunakan</li>
                  <li>Mendukung mitra bisnis dengan sistem yang fleksibel dan scalable</li>
                  <li>Menghadirkan inovasi berkelanjutan dalam solusi pembayaran digital</li>
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
