import React from 'react';
import { motion } from 'framer-motion';

// Data for all the featured platforms
const featureIn = [
  {
    name: "Economic Times",
    logo: "/Images/featureLogos/et-logo4px.webp",
    link: "https://economictimes.indiatimes.com/prime/money-and-markets/meet-rachana-ranade-the-youtuber-who-has-built-a-fortune-by-decoding-stock-market-jargon/primearticleshow/80929105.cms",
  },
  {
    name: "Business Today",
    logo: "/Images/featureLogos/business-today.webp",
    link: "https://www.businesstoday.in/interactive/immersive/rise-of-the-finfluencers",
  },
  {
    name: "Mint",
    logo: "/Images/featureLogos/Mint_newspaper.webp",
    link: "https://www.livemint.com/money/personal-finance/meet-india-s-new-breed-of-money-influencers-11625673759191.html",
  },
  {
    name: "Vogue India",
    logo: "/Images/featureLogos/Vogue_India_logo.webp",
    link: "https://www.vogue.in/culture-and-living/content/female-led-instagram-accounts-that-are-empowering-women-with-financial-literacy",
  },
  {
    name: "CNBC TV18",
    logo: "/Images/featureLogos/cnbc-tv-18.webp",
    link: "https://www.cnbctv18.com/personal-finance/investing-in-mutual-funds-how-to-assess-and-avoid-portfolio-overlap-11050832.html",
  },
  {
    name: "YouTube Official Blog",
    logo: "/Images/featureLogos/youtube-official-blog.webp",
    link: "https://blog.youtube/creator-and-artist-stories/how-5-women-are-using-their-channels-to-empower-and-inspire/",
  },
  {
    name: "MoneyControl",
    logo: "/Images/featureLogos/moneycontrol-logo.webp",
    link: "https://www.moneycontrol.com/news/eye-on-india/videos/watch-rachana-ranade-on-how-to-make-the-most-of-moneycontrol-for-financial-decisions-6296371.html",
  },
  {
    name: "The Indian Express",
    logo: "/Images/featureLogos/The_Indian_Express_logo.webp",
    link: "https://www.newindianexpress.com/business/2021/Nov/30/it-geeks-may-exit-country-if-cryptos-are-banned-says-finfluencer-rachana-ranade-2390103.html",
  },
  {
    name: "CRED",
    logo: "/Images/featureLogos/CRED-LOGO.webp",
    link: "https://cred.club/articles/the-abcs-of-equity-investing",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-white sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          AS FEATURED IN
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          The Authority in Financial Education
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-base sm:text-lg">
          From national television to leading publications, our insights are trusted by millions across India.
        </p>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 sm:gap-x-12 md:gap-x-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {featureIn.map((client) => (
            <motion.a
              key={client.name}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale opacity-60 m-2 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
