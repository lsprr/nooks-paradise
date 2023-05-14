import { useRouter } from "next/router";
import { Container } from "@/components/Container";
import Image from "next/image";
import Wilbur from '@assets/images/wilbur-pose.png';

export default function Home() {
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
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
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

                            <div className="mt-8">
                                <button
                                    onClick={handleButtonClick}
                                    className="inline-block bg-darkYellow text-darkGray py-3 px-6 rounded-lg text-xl"
                                >
                                    Explore Random Category
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}