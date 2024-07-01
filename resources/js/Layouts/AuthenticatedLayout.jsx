import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';
import { Footer } from '@/Components/Footer';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className='bg-neutral-950 pt-2'>
            <div 
                style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                className="bg-white py-14"
            >
                <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8">
                    <Link href="/">
                        <ApplicationLogo className="h-10 w-auto" />
                    </Link>
                    <div className="flex items-center gap-x-6">

                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-1.5 border border-transparent text-sm leading-4 font-semibold rounded-md text-neutral-950 bg-white hover:text-neutral-600 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {user.name}

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>   

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
                                <Dropdown.Link href='/bounties' active={route().current('chirps.index')}>
                                    Bounties
                                </Dropdown.Link>
                                <Dropdown.Link href={route('chirps.index')} active={route().current('chirps.index')}>
                                    Shop
                                </Dropdown.Link>
                                <Dropdown.Link href='https://donate.stripe.com/00g3cq2yM2XsbGU144'>
                                    Tax-Deductible Donation
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
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
        </div>
    );
}
