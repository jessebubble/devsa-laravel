import { Container } from '../Container';
import { FadeIn } from '../FadeIn';
import { MarqueeSection } from './CommunityMarquee';
import { Link } from '@inertiajs/react';

export function DiscordCommunity() {
   return (
      <div className="mt-24 sm:mt-32 bg-white">
         <Container className="mt-16">
            <FadeIn>
               <h2 className="hdr font-display mx-auto mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl lg:text-center">
                  Introducing Community Spaces on{' '}
                  <Link
                     to="https://discord.gg/cvHHzThrEw"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <strong className="gradient-text">Discord</strong>{' '}
                     <strong className="gradient-text arrow">→</strong>
                  </Link>
               </h2>
               <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-500 lg:text-center">
                  <strong>Find your community space</strong> and connect with
                  San Antonio's tech scene. Join the DEVSA Discord - <strong>250+
                  members strong and growing</strong>!
               </p>
               <div className="">
                  <div className="mx-auto max-w-7xl">
                     <MarqueeSection />
                  </div>
               </div>
            </FadeIn>
            <style>
               {`
                .hdr .gradient-text {
                    background: linear-gradient(to right in oklch, color(display-p3 1 0 .5), color(display-p3 0 1 1));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    }
                }
                .arrow {
                    transform: rotate(-45deg);
                    display: inline-block;
                }
                `}
            </style>
         </Container>
      </div>
   );
}