import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
//  path: '/Images/featureLogos/featureLogos/business-today.png',

const FeaturedSection = () => {
 const featureIn = [
    {
      name: "economictimes",
      logo: "/Images/featureLogos/et-logo4px.png", // Updated to local path
      link: "https://economictimes.indiatimes.com/prime/money-and-markets/meet-rachana-ranade-the-youtuber-who-has-built-a-fortune-by-decoding-stock-market-jargon/primearticleshow/80929105.cms",
    },
    {
      name: "businesstoday",
      logo: "/Images/featureLogos/business-today.png", // Updated to local path
      link: "https://www.businesstoday.in/interactive/immersive/rise-of-the-finfluencers",
    },
    {
      name: "Mint",
      logo: "/Images/featureLogos/Mint_newspaper.png", // Updated to local path, assuming .png
      link: "https://www.livemint.com/money/personal-finance/meet-india-s-new-breed-of-money-influencers-11625673759191.html",
    },
    {
      name: "vogue india",
      logo: "/Images/featureLogos/Vogue_India_logo.png", // Updated to local path
      link: "https://www.vogue.in/culture-and-living/content/female-led-instagram-accounts-that-are-empowering-women-with-financial-literacy",
    },
    {
      name: "cnbctv18",
      logo: "/Images/featureLogos/cnbc-tv-18.png", // Updated to local path
      link: "https://www.cnbctv18.com/personal-finance/investing-in-mutual-funds-how-to-assess-and-avoid-portfolio-overlap-11050832.html",
    },
    {
      name: "youtube blog",
      logo: "/Images/featureLogos/youtube-official-blog.png", // Updated to local path
      link: "https://blog.youtube/creator-and-artist-stories/how-5-women-are-using-their-channels-to-empower-and-inspire/",
    },
    {
      name: "moneycontrol",
      logo: "/Images/featureLogos/moneycontrol-logo.png", // Updated to local path
      link: "https://www.moneycontrol.com/news/eye-on-india/videos/watch-rachana-ranade-on-how-to-make-the-most-of-moneycontrol-for-financial-decisions-6296371.html",
    },
    {
      name: "newindianexpress",
      logo: "/Images/featureLogos/The_Indian_Express_logo.png", // Updated to local path
      link: "https://www.newindianexpress.com/business/2021/Nov/30/it-geeks-may-exit-country-if-cryptos-are-banned-says-finfluencer-rachana-ranade-2390103.html",
    },
    {
      name: "Cred club",
      logo: "/Images/featureLogos/CRED-LOGO.png", // Updated to local path
      link: "https://cred.club/articles/the-abcs-of-equity-investing",
    },
  ];


  return (
    <section className="py-12 bg-accent/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
         AS FEATURED IN
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
         Recognized by the Best in Media
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
         Our commitment to quality financial education has been featured on India's most respected platforms.
        </p>
        <div className="relative flex items-center justify-center flex-wrap gap-10 space-10 px-5 w-10/12 mx-auto">
        
            {featureIn.map((client, index) => (
             
                <motion.div
                key={index}
                  className="flex items-center justify-center h-24  px-2 w-50 "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-h-full object-cover inlin grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              
            ))}
        
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
