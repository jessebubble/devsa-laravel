import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import clsx from 'clsx';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Main 3 column grid */}
                    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                        {/* Left column */}
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                            <section aria-labelledby="section-1-title">
                                <h2 className="sr-only" id="section-1-title">
                                    Profile
                                </h2>
                                <div className="overflow-hidden rounded-md lg:rounded-3xl bg-white shadow">
                                    <div className="p-6">
                                        <div className="sm:flex-auto">
                                            <h1 className="text-base font-semibold leading-6 text-neutral-950 mb-6">
                                               Bounty Profile
                                            </h1>
                                        </div>

                                        <img 
                                            className="aspect-[3/2] w-full rounded-2xl object-cover" 
                                            src="https://cdn.discordapp.com/attachments/951197655021797436/1257832463196094587/IMG_7073.jpg?ex=6685d744&is=668485c4&hm=bd648ccca68af83888e588d4d1c062b2221fd88f07e72a181ca1957fdd5ca0b9&"
                                            alt="profile" 
                                        />
                                        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-neutral-950">
                                            {auth.user.name}
                                        </h3>
                                        <p className="text-base leading-7 text-neutral-600">
                                            Web Developer
                                        </p>
                                        <ul role="list" className="mt-6 flex gap-x-6">
                                            <li>
                                                <a href="" className="text-neutral-400 hover:text-neutral-500">
                                                    <span className="sr-only">X</span>
                                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="text-neutral-400 hover:text-neutral-500">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section aria-labelledby="section-1-title">
                                <h2 className="sr-only" id="section-1-title">
                                    Active Bounties
                                </h2>
                                <div className="overflow-hidden rounded-md lg:rounded-3xl bg-white shadow">
                                    <div className="p-6">
                                        <div className="sm:flex-auto">
                                            <h1 className="text-base font-semibold leading-6 text-neutral-950">
                                                Active Bounties
                                            </h1>
                                            <p className="mt-2 text-sm text-neutral-700">
                                                Submit these bounties to earn rewards
                                            </p>
                                        </div>
                                        <div className="-mx-4 mt-10 ring-1 ring-neutral-300 sm:mx-0 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-neutral-300">
                                                <thead>
                                                    <tr>
                                                        <th 
                                                            scope="col" 
                                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-950 sm:pl-6"
                                                        >
                                                            Title
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-950 lg:table-cell"
                                                        >
                                                            Reward
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-950 lg:table-cell"
                                                        >
                                                            Deadline
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='border-t border-neutral-200 relative py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                                            <div className="font-medium text-neutral-950">
                                                                Bounty Name
                                                            </div>
                                                            <div className="mt-1 flex flex-col text-neutral-500 sm:block lg:hidden">
                                                                <span>
                                                                dollars / 7 days
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td
                                                        className='border-t border-neutral-200 hidden px-3 py-3.5 text-sm text-neutral-500 lg:table-cell'>
                                                            Dollar
                                                        </td>
                                                        <td
                                                        className='border-t border-neutral-200 hidden px-3 py-3.5 text-sm text-neutral-500 lg:table-cell'>
                                                            7 days
                                                        </td>
                                                        <td className='border-t border-neutral-200 relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 space-x-2'>
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                                                disabled=""
                                                            >
                                                                View<span className="sr-only">, Bounty Name</span>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center rounded-md bg-neutral-950 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-950/70 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                                                disabled=""
                                                            >
                                                                Submit<span className="sr-only">, Bounty Name</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right column */}
                        <div className="grid grid-cols-1 gap-4">
                            <section aria-labelledby="section-2-title">
                                <h2 className="sr-only" id="section-2-title">
                                    Available Bounties
                                </h2>
                                <div className="overflow-hidden rounded-md lg:rounded-3xl bg-white shadow">
                                    <div className="p-6">
                                        <div className="sm:flex-auto">
                                            <h1 className="text-base font-semibold leading-6 text-neutral-950">
                                                Available Bounties
                                            </h1>
                                            <p className="mt-2 text-sm text-neutral-700">
                                                Apply to these bounties | Earn rewards
                                            </p>
                                        </div>
                                        <div className='mt-6'>
                                            <ul role="list" className="divide-y divide-neutral-100">
                                                <li className="flex items-center justify-between gap-x-6 py-5">
                                                    <div className="flex min-w-0 gap-x-4">
                                                        <img 
                                                            className="h-12 w-12 flex-none rounded-lg bg-neutral-50" 
                                                            src="https://cdn.discordapp.com/attachments/951197655021797436/1257857571075919892/IMG_7076.jpg?ex=6685eea6&is=66849d26&hm=c4337eff92012e17b3c8983c2ab89daeed40f7f69aa8bcd1b5d66b88d78c9d7c&" 
                                                            alt="Company Logo" 
                                                        />
                                                        <div className="min-w-0 flex-auto">
                                                            <p className="text-sm font-semibold leading-6 text-neutral-950">Bounty Name</p>
                                                            <p className="mt-1 truncate text-xs leading-5 text-neutral-700">Reward: $100</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex'>
                                                        <a
                                                        href="#"
                                                        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50"
                                                        >
                                                            Apply
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <a
                                                href="#"
                                                className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus-visible:outline-offset-0"
                                            >
                                                View all
                                            </a>
                                            </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
