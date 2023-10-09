// import image1 from "../assets/image/Banner1.png";
// import image2 from "../assets/image/Banner2.png";
// import image3 from "../assets/image/Banner3.png";
// import image4 from "../assets/image/Banner4.png";
// import image5 from "../assets/image/Banner5.png";
import banner1 from "../assets/image/BannerTokped1.png"
import banner2 from "../assets/image/BannerTokped2.png";
import banner3 from "../assets/image/BannerTokped3.png";
import banner4 from "../assets/image/BannerTokped4.png";
import banner5 from "../assets/image/BannerTokped5.png";



export const images = [banner1, banner2, banner3, banner4, banner5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
