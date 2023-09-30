import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-screen-xl mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="text-justify mb-3 mt-10 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        Website ini dibuat dengan tujuan latihan dan eksperimen dalam
        pengembangan web. Menggunakan teknologi modern seperti Next.js 13,
        Tailwind CSS, dan mengambil data dari
        <a href="https://fakestoreapi.com/" target="_blank">
          {" "}
          fakestoreapi.com
        </a>
      </p>
      <p className="text-justify text-gray-500 dark:text-gray-400">
        proyek ini bertujuan untuk menggali lebih dalam dalam dunia pengembangan
        web. Melalui proyek ini, Saya berusaha untuk memahami dan
        mengimplementasikan konsep-konsep terkini dalam pengembangan web,
        mempraktikkan pemrograman dengan kerangka kerja Next.js yang canggih,
        serta mengasah kemampuan saya dalam desain tampilan dengan bantuan
        Tailwind CSS.
      </p>
      <p className="text-justify text-gray-500 mt-5 dark:text-gray-400">
        Saya berkomitmen untuk terus belajar dan meningkatkan keterampilan kami
        dalam rangka menciptakan pengalaman web yang lebih baik di masa depan.
        Terima kasih atas dukungan Anda dalam perjalanan ini.
      </p>

      <img
        src={`${process.env.NEXT_PUBLIC_HOST}/assets/images/about.png`}
        className="mx-auto items-center"
        alt="store Logo"
        width={500}
        height={500}
      />

      <p className="text-justify mb-3 mt-5 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        Jika Anda ingin melihat karya-karya saya yang lain, saya mengundang Anda
        untuk mengunjungi situs pribadi saya.
      </p>
      <p className="text-justify text-gray-500 dark:text-gray-400">
        {" "}
        Pada website tersebut, Anda akan menemukan berbagai proyek dan
        portofolio yang telah saya kerjakan sebelumnya, Anda dapat mengaksesnya
        <a
          href="https://nandhayoyo.vercel.app/"
          target="_blank"
          className="italic"
        >
          {" "}
          disini
        </a>
      </p>
      <p className="text-justify text-gray-500 mt-5 mb-10 dark:text-gray-400">
        Saya berharap Anda akan menemukan inspirasi dan informasi yang
        bermanfaat dari pengalaman-pengalaman yang saya bagikan melalui situs
        tersebut. Terima kasih atas minat dan kunjungan Anda, dan saya berharap
        dapat berkolaborasi atau berbagi lebih banyak lagi di masa depan.
      </p>
    </section>
  );
}
