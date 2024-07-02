import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';
import { Footer } from '@/Components/Footer';

export default function SiteLayout({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <div className='bg-neutral-950 pt-2'>
                <div 
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white py-14"
                >
                    <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8">
                        <Link href="/" aria-label="Home" className=''>
                            <ApplicationLogo className="h-10 w-auto" />
                        </Link>
                        <div className="flex items-center gap-x-6">
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                    >
                                        <button className="bg-neutral-950 text-white hover:bg-neutral-950/70 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition">
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

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        className="inline-flex items-center justify-center p-2 text-neutral-950 hover:text-neutral-700 hover:bg-neutral-100 rounded-full focus:outline-none focus:bg-neutral-100 focus:text-neutral-500 transition duration-150 ease-in-out"
                                    >
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path
                                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href='/mission' active={route().current('mission')}>
                                        Our Mission
                                    </Dropdown.Link>
                                    <Dropdown.Link href='/events' active={route().current('events')}>
                                        Events Hub
                                    </Dropdown.Link>
                                    <a 
                                        href='https://devsanantonio.printify.me/products' 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out '
                                    >
                                        Shop <span className="arrow text-spursPink">→</span>
                                    </a>
                                    <a 
                                        href='https://donate.stripe.com/00g3cq2yM2XsbGU144' 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out '
                                    >
                                        Donate <span className="arrow text-spursPink">→</span>
                                    </a>
                                    <Dropdown.Link href='/bounties' active={route().current('bounties')}>
                                        Bounties
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                            <style>
                                {`
                                    .arrow {
                                        transform: rotate(-45deg);
                                        display: inline-block;
                                    }
                                    `}
                            </style>
                        </div>
                    </div>
                </div>
            </div>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main className="flex min-h-full flex-col overflow-hidden">
                {children}
                <Footer />
            </main>
        </>
    );
}
