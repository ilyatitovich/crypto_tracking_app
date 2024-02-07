import "./PriceChangePercentage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function PriceChangePercentage({
    percent,
}: {
    percent: number;
}) {
    return (
        <div
            className={`price-change-percentage
        ${percent > 0 ? "up" : "down"}
    `}
        >
            <span>
                <FontAwesomeIcon icon={percent > 0 ? faCaretUp : faCaretDown} />
            </span>
            <span>{Math.abs(percent).toFixed(1)}%</span>
        </div>
    );
}
