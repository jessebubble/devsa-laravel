import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {

    return (
        <>
            <Head title="Welcome" />
            <div className='z-50 overflow-hidden bg-neutral-950 pt-2'>
                <div 
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white pt-14"
                >
                    <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8">
                        <Link href="/" aria-label="Home">
                            <ApplicationLogo className="h-10 w-auto" />
                        </Link>
                        <nav className="-mx-3 flex flex-1 justify-end">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                >
                                    <button className="bg-neutral-950 text-white hover:bg-neutral-800 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition">
                                        Dashboard
                                    </button>
                                </Link>
                                
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                    >
                                        <button className="bg-neutral-950 text-white hover:bg-neutral-800 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition">
                                            Log in
                                        </button>
                                    </Link>
                                    <Link
                                        href={route('register')}
                                    >
                                        <button className="bg-white text-neutral-950 hover:bg-neutral-50 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition">
                                            Register
                                        </button>
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </div>

                <main className="w-full flex-auto">

                </main>
            </div>
        </>
    );
}
