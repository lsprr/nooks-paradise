import { useRouter } from 'next/router'

export const BackButton = () => {
    const router = useRouter()
    const category = router.query.category as string;

    const handleClick = () => {
        if (category) {
            router.push('/' + category)
        }
    }

    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="inline-flex rounded-lg border border-creamWhite bg-creamWhite p-1">
                    <button
                        className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-darkGray focus:relative"
                        onClick={handleClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="bg-creamWhite text-darkGray">
                            <polyline points="9 14 4 9 9 4"></polyline>
                            <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        </svg>
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}