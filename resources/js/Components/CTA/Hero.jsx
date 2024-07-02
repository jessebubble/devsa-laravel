import { Container } from '../Container';
import { Button } from '../Button';
import { SocialMedia } from '../SocialMedia';
import { FadeIn } from '../FadeIn';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

export function Hero() {
   const [offsetY, setOffsetY] = useState(0);
   const handleScroll = () => setOffsetY(window.scrollY);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <div className="overflow-hidden py-10 sm:py-16">
         <Container className="">
            <FadeIn>
               <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                     <h1 className="text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                        Born out of Frustration{' '}
                        <span className="block">Built for Empowerment</span>
                     </h1>
                     <p className="font-display mt-6 text-balance text-xl tracking-tight text-neutral-500">
                        <strong>DEVSA</strong> is a community platform dedicated
                        to empowering San Antonio's tech space through
                        education, connection, and opportunity
                     </p>
                     <div className="flex items-center">
                        <Link href="/mission">
                           <Button invert={false} className="mt-8">
                              Our Mission
                           </Button>
                        </Link>
                        <a href="https://donate.stripe.com/00g3cq2yM2XsbGU144" target='_blank' rel='noopener noreferrer'>
                           <Button
                              className="ml-4 mt-8"
                              invert={true}
                           >
                              Tax-Deductible Donation{' '}
                              <span className="arrow">→</span>
                           </Button>
                        </a>
                     </div>
                  </div>
                  <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                     <div className="-mx-4 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                        <div className="relative isolate">
                           <svg
                              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-neutral-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                              aria-hidden="true"
                           >
                              <defs>
                                 <pattern
                                    id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                 >
                                    <path d="M.5 200V.5H200" fill="none" />
                                 </pattern>
                              </defs>
                              <svg
                                 x="50%"
                                 y={-1}
                                 className="overflow-visible fill-neutral-50"
                              >
                                 <path
                                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                    strokeWidth={0}
                                 />
                              </svg>
                              <rect
                                 width="100%"
                                 height="100%"
                                 strokeWidth={0}
                                 fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                              />
                           </svg>
                           <img
                              src="https://res.cloudinary.com/jessebubble/image/upload/v1718831915/tv-quest-10-mirror_pwnngy.png"
                              alt="retro tv with devsa logo as the head for a male person with a suit"
                              className="h-auto w-full"
                           />
                        </div>
                     </div>
                  </div>
                  <SocialMedia className="hidden lg:flex" />
               </div>
            </FadeIn>
         </Container>
         <Container className="">
            <FadeIn>
               <div
                  className="mx-auto mt-24 max-w-7xl sm:mt-32 sm:pt-32"
                  style={{ transform: `translateY(${offsetY * 0.1}px)` }}
               >
                  <img
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1718598570/devsa-readme-github_udnxkm.svg"
                     alt="DEVSA Street Art logo"
                     className="floating h-auto w-full"
                  />
               </div>
            </FadeIn>
         </Container>
         <style>
            {`
               @keyframes float {
                  0% {
                     transform: translateY(0px);
                  }
                  50% {
                     transform: translateY(-20px);
                  }
                  100% {
                     transform: translateY(0px);
                  }
                  }

                  .floating {
                  animation: float 4s ease-in-out infinite;
                  }
            `}
         </style>
      </div>
   );
}