import soekarnoimg from "../../assets/history/soekarno.webp";
import soehartoimg from "../../assets/history/soeharto.webp";
import habibieimg from "../../assets/history/habibie.webp";
import hattaimg from "../../assets/history/hatta.webp";
import gusdurimg from "../../assets/history/gusdur.webp";
import kartinimg from "../../assets/history/kartini.webp";
import kaisiepoimg from "../../assets/history/frans.webp";
import hoegengimg from "../../assets/history/hoegeng.webp";

import munirimg from "../../assets/peristiwa/munirImg.webp";

import {
  Soekarno,
  Hatta,
  Soeharto,
  Habibie,
  Gusdur,
  Kartini,
  Kaisiepo,
  Hoegeng,
  Munir,
} from "../index";

export const data = [
  [
    {
      img: soekarnoimg,
      name: "Soekarno",
      text: "Presiden Pertama Indonesia",
      path: "/soekarno",
      component: Soekarno,
      aos: "fade-up",
      delay: 200,
    },
    {
      img: hattaimg,
      name: "Mohammad Hatta",
      text: "Wakil Presiden Pertama Indonesia",
      path: "/hatta",
      component: Hatta,
      aos: "fade-up",
      delay: 300,
    },
    {
      img: soehartoimg,
      name: "Soeharto",
      text: "Presiden Kedua Indonesia",
      path: "/soeharto",
      component: Soeharto,
      aos: "fade-up",
      delay: 400,
    },
    {
      img: habibieimg,
      name: "Habibie",
      text: "Presiden Ketiga Indonesia",
      path: "/habibie",
      component: Habibie,
      aos: "fade-up",
      delay: 200,
    },
    {
      img: gusdurimg,
      name: "Gus Dur",
      text: "Presiden Keempat Indonesia",
      path: "/gusdur",
      component: Gusdur,
      aos: "fade-up",
      delay: 300,
    },
    {
      img: kartinimg,
      name: "Raden Adjeng Kartini",
      text: "Penoreh Jejak Emansipasi Wanita Indonesia",
      path: "/kartini",
      component: Kartini,
      aos: "fade-up",
      delay: 400,
    },
  ],
  [
    {
      img: kaisiepoimg,
      name: "Frans Kaisiepo",
      text: "Pahlawan dari Ujung Timur Indonesia",
      path: "/kaisiepo",
      component: Kaisiepo,
      aos: "fade-up",
      delay: 200,
    },
    {
      img: hoegengimg,
      name: "Jenderal Hoegeng",
      text: "Polisi Teladan Sepanjang Masa",
      path: "/hoegeng",
      component: Hoegeng,
      aos: "fade-up",
      delay: 300,
    },
  ],
  [],
  [],
  [],
  [
    {
      img: munirimg,
      name: "Pembunuhan Munir",
      text: "Aktivis HAM yang diracuni",
      path: "/munir",
      component: Munir,
      aos: "fade-up",
      delay: 200,
    },
  ],
];

export const dataFaq = [
  [
    {
      main: "Visi",
      sub: "Menyediakan wadah untuk memantik ketertarikan terhadap dunia sejarah",
      aos: "fade-up",
      delay: 200,
    },
    {
      main: "Misi",
      sub: "Menyajikan sejarah dengan cara yang lebih menyenangkan",
      aos: "fade-up",
      delay: 300,
    },
    {
      main: "Latar Belakang",
      sub: "Kami yakin dan percaya bahwa dengan mempelajari sejarah, masa depan dunia akan menjadi lebih baik. Ketika kita mengambil pengalaman dimasa lalu, kita akan siap untuk menghadapi masa depan yang penuh dengan ketidakpastian",
      aos: "fade-up",
      delay: 400,
    },
    {
      main: "Deskripsi",
      sub: "Sebuah web based learning yang berisi artikel tentang sejarah nusantara. Website yang bisa diakses oleh siapa saja, kapan saja, dan dimana saja",
      aos: "fade-up",
      delay: 500,
    },
  ],
];
