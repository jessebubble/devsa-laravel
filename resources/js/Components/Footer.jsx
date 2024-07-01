import { Link } from '@inertiajs/react';
import { Container } from './Container';
import { FadeIn } from './FadeIn';
import ApplicationLogo from './ApplicationLogo';
import { SocialMedia } from './SocialMedia';
import QRCode from './images/qr-code.svg';

function QrCodeBorder(props) {
   return (
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
         <path
            d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
            strokeWidth="2"
            strokeLinecap="round"
         />
      </svg>
   );
}

export function Footer() {
   return (
      <footer className="border-t border-neutral-200 bg-white">
         <Container>
            <FadeIn>
               <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
                  <div>
                     <div className="flex items-center text-neutral-950">
                        <Link to="/" aria-label="Home">
                           <ApplicationLogo className="h-10 w-auto flex-none" />
                        </Link>
                        <div className="ml-4">
                           <p className="text-base font-semibold">DEVSA</p>
                           <p className="mt-1 text-sm">Non-Profit 501(c)(3)</p>
                        </div>
                     </div>
                     <nav className="mt-11 flex gap-8">
                        <Link
                           href="mailto:jesse@devsanantonio.com"
                           className="text-sm text-neutral-950"
                        >
                           Contact Us
                        </Link>
                        <Link
                           href="https://docs.google.com/document/d/1IVUPU98NkoR05dVqLNoYMAEqvkm7mBKxgauweqYvdwk/export?format=pdf"
                           className="text-sm text-neutral-950"
                        >
                           By-Laws
                        </Link>
                        <Link href="#" className="text-sm text-neutral-950">
                           Form 990
                        </Link>
                        <Link href="#" className="text-sm text-neutral-950">
                           Annual Report
                        </Link>
                     </nav>
                  </div>
                  <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-neutral-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                     <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                        <QrCodeBorder className="absolute inset-0 h-full w-full stroke-neutral-300 transition-colors group-hover:stroke-spursTurq" />
                        <img src={QRCode} alt="QR Code" />
                     </div>
                     <div className="ml-8 lg:w-64">
                        <p className="text-base font-semibold text-neutral-950">
                           <Link href="https://donate.stripe.com/00g3cq2yM2XsbGU144">
                              <span className="absolute inset-0 sm:rounded-2xl" />
                              Tax-Deductible Donation
                           </Link>
                        </p>
                        <p className="mt-1 text-sm text-neutral-700">
                           Every resource we secure is reinvested back into
                           building a stronger tech ecosystem for San Antonio
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center border-t border-neutral-100 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
                  <SocialMedia />
                  <p className="mt-6 text-sm text-neutral-500 md:mt-0">
                     &copy; DEVSA {new Date().getFullYear()}
                  </p>
               </div>
            </FadeIn>
         </Container>
      </footer>
   );
}