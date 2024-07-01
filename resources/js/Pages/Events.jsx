import { Container } from '@/Components/Container';
import { GrayscaleTransitionImage } from '@/Components/GrayscaleTransitionImage';
import { FadeIn } from '@/Components/FadeIn';
import { PageIntro } from '@/Components/PageIntro';
import { Button } from '@/Components/Button';
import { CalendarSection } from '@/Components/CTA/Calendar';
import { Sponsors } from '@/Components/CTA/Sponsors';
import { Link, Head } from '@inertiajs/react';
import SiteLayout from '@/Layouts/SiteLayout';


export default function Events({ auth }) {

   return (
        <>
            <SiteLayout
                auth={auth}
            >
                <Head title="Events" />

                <PageIntro title="Connect with the Community!">
                    <p>
                        Find a safe, inclusive, and welcoming environment where you can
                        connect, learn, and grow alongside talented tech enthusiast of
                        all skill levels
                    </p>
                    <div className="mt-10 max-w-2xl space-y-6 text-base">
                        <p>
                            <strong>Don't miss out!</strong> Stay up-to-date on all
                            upcoming DEVSA events and subscribe to our calendar with a
                            single click!
                        </p>
                    </div>
                    <Link href="https://lu.ma/devSA">
                        <Button className="mt-8" invert={false}>
                            Subscribe Now
                        </Button>
                    </Link>
                </PageIntro>

                <article>
                    <FadeIn>
                    <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                        <Container className="">
                            {events.map((event) => (
                                <div key={event.index} className="mx-auto max-w-5xl">
                                <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                        <dt className="font-semibold">Organization</dt>
                                        <dd>{event.org}</dd>
                                    </div>
                                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                        <dt className="font-semibold">Topic</dt>
                                        <dd>{event.topic}</dd>
                                    </div>
                                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                        <dt className="font-semibold">Year</dt>
                                        <dd>
                                            <time>{new Date().getFullYear()}</time>
                                        </dd>
                                    </div>
                                </dl>
                                <div className="border-y border-neutral-200 bg-neutral-100">
                                    <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                                        <GrayscaleTransitionImage
                                            src={event.image}
                                            alt="devSA collaboration event"
                                            quality={90}
                                            className="w-full"
                                            sizes="(min-width: 1216px) 76rem, 100vw"
                                        />
                                    </div>
                                </div>
                                </div>
                            ))}
                        </Container>
                    </div>
                    </FadeIn>
                </article>

                <CalendarSection />
                <Sponsors />
                
            </SiteLayout>
        </>
    );
}

const events = [
   {
      index: 7,
      org: 'Remix Austin & Google Developer Groups',
      topic: 'Google I/O: Remix and Extended',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1719335343/gdg-sa-6-meetup_1_mp47bu.png',
   },
   {
      index: 6,
      org: 'DEVSA',
      topic: 'Coffee & Collaboration',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1717429130/devsa-coffee-wednesdays-3_1_wwzrfu.png',
   },
   {
      index: 5,
      org: 'Discord Community Space',
      topic: 'Social Lounge: Unwind & Connect',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1717429131/social-lounge-1_fwuuit.png',
   },
   {
      index: 4,
      org: 'Greater Gaming Society',
      topic: 'Build with Unity: Game Design and Development',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1715968980/buildwithunity-7_2_sgi4z8.png',
   },
   {
      index: 3,
      org: 'PyTexas - Alamo Python',
      topic: "Build with Python: Safeguarding LLM's with Guardrails",
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1715968980/devsa-alamopython-2_yylbby.png',
   },
   {
      index: 2,
      org: 'Launch SA',
      topic: "1 Million Cups",
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1719335343/devsa-launchsa-1_cs8qxp.png',
   },
   {
      index: 1,
      org: 'Google Developer Group',
      topic: 'Build with Google AI - Gemini',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1714538137/devsa-gdgsa-meetup-3_tcvlin.png',
   },
];