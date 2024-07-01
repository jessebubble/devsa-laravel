import { FadeIn } from '../FadeIn';
import { Container } from '../Container';

export function Sponsors() {
   return (
      <div className="bg-white py-24 sm:py-32">
         <Container className="mt-16">
            <FadeIn>
               <div className="max-w-5xl">
                  <h2 className="font-display block text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                     A Heartfelt Thank You to Our Partners
                  </h2>
                  <p className="mt-6 max-w-2xl text-xl text-neutral-500">
                     Venue headaches are a thing of the past thanks to our
                     incredible partners! This allows the tech community to
                     focus on what matters - building valuable connections
                  </p>
                  <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 lg:mx-0">
                     {sponsorsArray.map((sponsor, index) => (
                        <div
                           key={index}
                           className="col-span-2 flex h-12 w-full items-center justify-start lg:col-span-1"
                        >
                           <img
                              className="max-h-full w-auto object-contain"
                              src={sponsor.src}
                              alt={sponsor.alt}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}

const sponsorsArray = [
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1718688641/fabra_okgahc.png',
      alt: 'Fabra',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1718688952/Project_Cowork_logo_x3qxyj.webp',
      alt: 'Project Cowork',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1714770882/Project_QUEST_Logos_Full_Color_Full_Logo_elefs9.svg',
      alt: 'Project Quest',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1714770880/launchsa_geekdom_gey0fz.webp',
      alt: 'Launch SA',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1714770881/Logostyle-3-2vect_1594750425_qyrqql.webp',
      alt: "What's Brewing SA",
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1718830353/portsa_hve3lw.png',
      alt: 'Port San Antonio',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/e_gen_restore/v1714771175/TB_Full_Logo_lpeeau.png',
      alt: 'Tech Bloc',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1718688058/capital-factory-light_ecwkwq.svg',
      alt: 'Capital Factory',
   },
];