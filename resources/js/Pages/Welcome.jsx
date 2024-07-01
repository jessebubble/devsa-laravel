import { Head } from '@inertiajs/react';
import { CalendarSection } from '@/Components/CTA/Calendar';
import { DiscordCommunity } from '@/Components/CTA/DiscordCommunity';
import { ExpandingNetwork } from '@/Components/CTA/ExpandingNetwork';
import { Hero } from '@/Components/CTA/Hero';
import { ShopSection } from '@/Components/CTA/Shop';
import { Sponsors } from '@/Components/CTA/Sponsors';
import { MissionSection } from '@/Components/CTA/Mission';
import { SlideShow } from '@/Components/CTA/SlideShow';
import SiteLayout from '@/Layouts/SiteLayout';

export default function Welcome({ auth }) {

    return (
        <>
            <SiteLayout
                auth={auth}
            >
                <Head title="Welcome" />

                <Hero />
                <DiscordCommunity />
                <ShopSection />
                <CalendarSection />
                <MissionSection />
                <SlideShow />
                <ExpandingNetwork />
                <Sponsors />

            </SiteLayout>
        </>
    );
}
