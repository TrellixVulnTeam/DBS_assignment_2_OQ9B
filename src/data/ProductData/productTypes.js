import { productList } from "./pianoProdData";
import { organData } from "./organe_data";
import { homeGuitarList } from "./guitar_data";
import { ukuleleData } from "./ukulele_data";
import { drumData } from "./drum_data";
import { violinData } from "./violin_data";
import { amplifierData } from "./amplifier_data";
import { soundData } from "./sound_data";
import { fluteData } from "./flute_data";

import { fluteBrand } from "./brands/fluteBrand";
import { soundBrand } from "./brands/soundBrands";
import { amplifierBrand } from "./brands/amplifierBrand";
import { violinBrand } from "./brands/violinBrands";
import { drumBrand } from "./brands/drumBrands";
import { ukuleleBrand } from "./brands/ukuleleBrands";
import { guitarBrand } from "./brands/guitarBrands";
import { pianoBrand } from "./brands/pianoBrands";
import { organBrand } from "./brands/organBrands";
export const productType = [
  {
    category: "piano",
    brandNames: pianoBrand,
    data: productList,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/027-piano.svg",
    title: "Đàn piano",
    titleImg:
      "https://www.cunninghampiano.com/wp-content/uploads/2018/12/cunninghampiano-piano-digital-piano-silent-piano-banner-img.jpg",
  },
  {
    category: "organ",
    brandNames: organBrand,
    data: organData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/034-organ.svg",
    title: "Đàn organ",
    titleImg:
      "https://i.pinimg.com/564x/11/9e/04/119e041c543fedfc5bf17451d2db27e6.jpg",
  },
  {
    category: "guitar",
    brandNames: guitarBrand,
    data: homeGuitarList,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/015-electric-guitar.svg",
    title: "Đàn guitar",
    titleImg:
      "https://thumbs.dreamstime.com/b/retro-electric-guitar-banner-image-wood-background-copy-space-154929991.jpg",
  },
  {
    category: "ukulele",
    brandNames: ukuleleBrand,
    data: ukuleleData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/022-guitar.svg",
    title: "Đàn ukulele",
    titleImg:
      "https://cdn.shopify.com/s/files/1/0550/6737/collections/collection_banner_opt2_1800x.jpg?v=1616633858",
  },
  {
    category: "violin",
    brandNames: violinBrand,
    data: violinData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/018-violin.svg",
    title: "Đàn violin",
    titleImg:
      "https://previews.123rf.com/images/rclassenlayouts/rclassenlayouts1801/rclassenlayouts180100009/93198865-old-violin-and-notes-banner-size.jpg",
  },
  {
    category: "drum",
    brandNames: drumBrand,
    data: drumData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/038-drums.svg",
    title: "Trống",
    titleImg:
      "https://www.jazz.qld.edu.au/wp-content/uploads/2017/10/jmi-how-to-apply-banner.jpg",
  },
  {
    category: "amplifier",
    brandNames: amplifierBrand,
    data: amplifierData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/008-amplifier.svg",
    title: "Amplifier",
    titleImg:
      "https://sonodyneimage.s3.ap-south-1.amazonaws.com/banner/146_99_SLA-Series-banner.jpg",
  },
  {
    category: "sound",
    brandNames: soundBrand,
    data: soundData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/019-speaker.svg",
    title: "Âm thanh",
    titleImg: "https://topstore.vn/uploads/banner_alpha_&_akg_1586755598.webp",
  },
  {
    category: "flute",
    brandNames: fluteBrand,
    data: fluteData,
    img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/016-flute.svg",
    title: "Nhạc cụ hơi",
    titleImg:
      "https://cdn.shopify.com/s/files/1/1474/4396/collections/flute_banner.jpg?v=1477012561",
  },
];
