import { useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import { Container } from "@/components/Container";
import Wilbur from '@assets/images/wilbur-pose.png';
import { SpecialThanks } from '@/components/SpecialThanks';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const categories = ["achievements", "construction", "creatures", "npcs", "reactions", "recipes", "seasons-and-events", "villagers"];

    const getRandomCategory = () => {
        const randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    const handleButtonClick = () => {
        const category = getRandomCategory();
        router.push(`/${category}`);
    }

    return (
        <Container>
            <div className="container mx-auto mt-10 mb-10">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:order-last lg:h-full"
                        >
                            <Image
                                alt="Party"
                                src={Wilbur}
                                className="absolute inset-0 h-full w-full object-scale-down"
                            />
                        </div>

                        <div className="lg:py-24 text-center lg:text-left">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Welcome to Nook&apos;s Paradise, folks!
                            </h2>

                            <p className="mt-8 text-darkGray text-xl">
                                This is your one-stop co-pilot for everything related to Animal Crossing: New Horizons!
                                We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes,
                                and special events.
                            </p>

                            <p className="mt-8 text-darkGray text-xl">
                                So buckle up, and let&apos;s fly through the fantastic world of ACNH together!
                            </p>

                            <p className="mt-8 text-darkGray text-xl italic">
                                This is your captain Wilbur, signin&apos; off. Happy island-hoppin&apos;!
                            </p>

                            <div className="mt-8 flex items-center flex-col md:flex-row justify-center lg:justify-start">
                                <button
                                    onClick={handleButtonClick}
                                    className="inline-block bg-darkYellow text-darkGray py-3 px-6 rounded-2xl text-xl"
                                >
                                    Explore Random Category
                                </button>
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="inline-block bg-darkGray text-creamWhite py-3 px-6 rounded-2xl text-xl mt-4 md:mt-0 md:ml-4"
                                    aria-haspopup="dialog"
                                    aria-expanded={isOpen}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="27"
                                        height="27"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                    <span className="sr-only">Info</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{ background: 'rgba(0,0,0,0.5)' }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-heading"
                    aria-describedby="modal-description"
                >
                    <div className="bg-white rounded-2xl max-w-3xl mx-4 text-center py-8 px-4 sm:px-8 sm:py-12">
                        <SpecialThanks />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-8 inline-block bg-darkYellow text-darkGray py-3 px-6 rounded-2xl text-xl"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Container>
    )
}
