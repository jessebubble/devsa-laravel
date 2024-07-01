import { PageIntro } from '@/Components/PageIntro';
import { VisionGrid } from '@/Components/CTA/VisionGrid';
import { DualFocus } from '@/Components/CTA/DualFocus';
import { Board } from '@/Components/CTA/Board';
import { Sponsors } from '@/Components/CTA/Sponsors';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/Layouts/SiteLayout';

export default function Mission({ auth }) {

   return (
        <>
            <SiteLayout
                auth={auth}
            >
                <Head title="Mission" />

                <PageIntro title="Building Authentic Connections">
                    <p>
                        <strong>
                            Engagement, Not Sales: 
                        </strong>{' '}
                        We understand your needs because we share them. We're a community
                        of passionate tech folk who believe a strong community thrives on
                        providing real value to its members
                    </p>
                    <p className="mt-8 max-w-2xl text-sm md:text-base">
                        Choosing the non-profit route and achieving 501(c)(3) status
                        allows us to prioritize what truly matters: education,
                        connection, and opportunity for all. Every resource we secure is
                        reinvested back into building a stronger tech ecosystem for San
                        Antonio
                    </p>
                </PageIntro>

                <VisionGrid />
                <DualFocus />
                <Board />
                <Sponsors />
            </SiteLayout>
        </>
    );
}