import clsx from 'clsx';

import { Container } from './Container';
import { FadeIn } from './FadeIn';

export function PageIntro({ title, children })  {
   return (
      <div className=''>
         <Container className='py-10 sm:py-24'>
            <FadeIn>
               <h1>
                  <span className='font-display mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl'>
                     {title}
                  </span>
               </h1>
               <div className='mt-6 max-w-3xl text-balance text-xl text-neutral-600'>
                  {children}
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}