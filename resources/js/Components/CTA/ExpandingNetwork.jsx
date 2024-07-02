import { SectionIntro } from '../SectionIntro';
import { Container } from '../Container';
import { FadeIn, FadeInStagger } from '../FadeIn';

const collaborativeChannels = [
   {
      href: 'https://github.com/devsanantonio',
      logo: 'https://res.cloudinary.com/jessebubble/image/upload/v1714530579/github_hesipt.svg',
      client: 'GitHub',
      title: 'GitHub',
      description:
         "Join our GitHub playground - pull requests welcome, and breaking stuff is encouraged (we'll fix it together)",
   },
   {
      href: 'https://www.twitch.tv/devsatx',
      logo: 'https://res.cloudinary.com/jessebubble/image/upload/v1714530611/twitch_lux6ms.svg',
      client: 'Twitch',
      title: 'Twitch',
      description:
         'Follow us on Twitch for interactive coding sessions, live Q&A with industry experts, and a fun, developer-focused atmosphere',
   },
   {
      href: 'https://www.youtube.com/@devSATX',
      logo: 'https://res.cloudinary.com/jessebubble/image/upload/v1714530612/youtube_mfdmyl.svg',
      client: 'YouTube',
      title: 'YouTube',
      description:
         'Subscribe to DEVSA on YouTube for in-depth tutorials, insightful tech talks, and inspiring interviews with industry leaders',
   },
];

export function ExpandingNetwork() {
   return (
      <>
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <SectionIntro
            title="Let's Collaborate and Elevate the Tech Space in SA!"
         >
            <p>
               Help us build a stronger tech community! Seeking partnerships to
               create valuable content like workshops, tutorials, and tech talks
               for our YouTube/Twitch channels and GitHub
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
               {collaborativeChannels.map((channel) => (
                  <FadeIn key={channel.href} className="flex">
                     <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                        <h3>
                           <a
                              href={channel.href}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <span className="absolute inset-0 rounded-3xl" />
                              <img
                                 src={channel.logo}
                                 alt={channel.client}
                                 className="h-16 w-16"
                              />
                           </a>
                        </h3>
                        <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                           {channel.title}
                        </p>
                        <p className="mt-4 text-base text-neutral-600">
                           {channel.description}
                        </p>
                     </article>
                  </FadeIn>
               ))}
            </FadeInStagger>
         </Container>
      </div>
      </>
   );
}