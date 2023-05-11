import formatNumberWithCommas from '@/utils/formatNumberWithCommas';

type LabelledSpanProps = {
    label: string;
    content: string | number;
    className?: string;
    isBell?: boolean;
    isNookCranny?: boolean;
    isFlick?: boolean;
    isCJ?: boolean;
    showLabel?: boolean;
    ariaLabel?: string;
}

export const LabelledSpan = ({ label, content, className, isBell, isNookCranny, isFlick, isCJ, showLabel, ariaLabel }: LabelledSpanProps) => {
    let displayContent;

    if (isNookCranny && isBell && typeof content === 'number') {
        displayContent = `Nook's Cranny: ${formatNumberWithCommas(content)} Bells`;
    } else if (isFlick && isBell && typeof content === 'number') {
        displayContent = `Flick: ${formatNumberWithCommas(content)} Bells`;
    } else if (isCJ && isBell && typeof content === 'number') {
        displayContent = `C.J.: ${formatNumberWithCommas(content)} Bells`;
    } else if (isBell && typeof content === 'number') {
        displayContent = `${formatNumberWithCommas(content)} Bells`;
    } else {
        displayContent = showLabel ? `${label}: ${content}` : `${content}`;
    }

    const defaultAriaLabel = showLabel ? `${label}: ${displayContent}` : displayContent;

    return (
        <span
            className={`${className ? className : 'px-3 py-1 group inline-flex items-center justify-center rounded-full border text-xs font-medium bg-creamWhite'}`}
            tabIndex={0}
            role="text"
            aria-label={ariaLabel || defaultAriaLabel}
        >
            {displayContent}
        </span>
    );
};