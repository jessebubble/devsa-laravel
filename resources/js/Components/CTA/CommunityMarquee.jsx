import { Container } from '../Container';
import { FadeIn } from '../FadeIn';

export function MarqueeSection() {
   let rotations = [
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      '-rotate-2',
   ];

   return (
      <>
         <Container className="mt-16">
            <FadeIn>
               <div className="marquee -my-4 flex justify-center gap-5 py-4 sm:gap-8">
                  {imageArray.map((image, index) => (
                     <div
                        key={index}
                        className="marquee-item relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                     >
                        <div className="absolute inset-0 rounded-xl" />
                        <img
                           src={image.href}
                           alt="devsa discord community spaces"
                           className={`relative h-full w-full object-contain ${rotations[index]}`}
                        />
                     </div>
                  ))}
                  {imageArray.map((image, index) => (
                     <div
                        key={index}
                        className="marquee-item relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                     >
                        <div className="absolute inset-0 rounded-xl" />
                        <img
                           src={image.href}
                           alt="devsa discord community spaces"
                           className={`relative h-full w-full object-contain ${rotations[index]}`}
                        />
                     </div>
                  ))}
               </div>
            </FadeIn>

            <style>
               {`
                    .marquee {
                        animation: marquee 30s linear infinite;
                    }
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                `}
            </style>
         </Container>
      </>
   );
}

const imageArray = [
   {
      name: 'grupo-optimizers',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1715969601/grupo-optimizers_n3uk6n.png',
   },
   {
      name: 'science-data',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1715969601/science-data_loauni.png',
   },
   {
      name: 'llmodelos',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1719332084/logo-llm-light_wdwia1.png',
   },
   {
      name: 'digital-canvas',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1719332084/canvas_nobhxd.png',
   },
   {
      name: 'casa-security',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1719330683/casa-security_hjhs7i.png',
   },
];