import { Container } from '../Container';
import { FadeIn } from '../FadeIn';
import { SectionIntro } from '../SectionIntro';

export function CalendarSection() {
   return (
      <div className="mt-24 pt-16 sm:mt-32 md:pt-0 lg:mt-40 bg-white">
         <SectionIntro title="Your Guide to San Antonio Tech Events">
            <p>
               With our events calendar, finding an event has never been easier.
               Don't miss out on these opportunities to connect and learn with
               the tech community!{' '}
               <a
                  href="https://lu.ma/devSA"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <strong className="">Subscribe</strong>{' '}
                  <strong className="arrow">→</strong>
               </a>
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <FadeIn>
               <div className="rounded-2xl bg-[#212325] py-2 pr-2">
                  <iframe
                     src="https://lu.ma/embed/calendar/cal-Jg0KUhNjt4lLR55/events?compact=true"
                     title="DevSA Upcoming Event Calendar"
                     style={{
                        borderRadius: '12px',
                        width: '100%',
                        height: '600px',
                     }}
                     className=""
                     allowFullScreen={true}
                     aria-hidden="false"
                     tabIndex="0"
                  ></iframe>
               </div>
            </FadeIn>
         </Container>
         <style>
            {`
                  .arrow {
                     transform: rotate(-45deg);
                     display: inline-block;
                  }
               `}
         </style>
      </div>
   );
}