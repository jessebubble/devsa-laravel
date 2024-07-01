import { PageIntro } from '@/Components/PageIntro';
import { StarMarquee } from '@/Components/CTA/StarMarquee';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/Layouts/SiteLayout';

export default function Bounties({ auth }) {

    return (
        <>
            <SiteLayout
                auth={auth}
            >
                <Head title="Bounties" />


                <PageIntro title="Unlock Tech Challenges and Get Paid!">
                    <p>
                        <strong>Access to Local Talent, Cost-Effective Solutions:</strong> DEVSA is
                        excited to announce a new Bounty Program connecting San Antonio's
                        talented developers with innovative local startups!
                    </p>
                    <p className="mt-4">
                        <strong className="text-spursPink">COMING SOON</strong> - Stay
                        tuned for more information on how to participate in the DEVSA
                        Bounty Program
                    </p>
                </PageIntro>

                <StarMarquee />
            </SiteLayout>
        </>
    );
}