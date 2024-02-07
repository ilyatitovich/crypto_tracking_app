import "./CurrencyRow.scss";
import { CurrencyData } from "../lib/types";
import PriceChangePercentage from "./PriceChangePercentage/PriceChangePercentage";

interface CurrencyRowProps {
    num: number;
    currencyData: CurrencyData;
}

export default function CurrencyRow({ num, currencyData }: CurrencyRowProps) {
    const {
        name,
        symbol,
        image,
        current_price,
        total_volume,
        market_cap,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
        price_change_percentage_30d_in_currency,
    } = currencyData;

    return (
        <tr className="currency-row">
            <td><span className="num">{num}</span></td>
            <td>
                <div className="logo">
                    <img src={image} alt={name} />
                    <span className="name">{name}</span>
                    <span className="symbol">{symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>${current_price.toLocaleString("eu")}</td>
            <td>
                <PriceChangePercentage
                    percent={price_change_percentage_1h_in_currency}
                />
            </td>
            <td>
                <PriceChangePercentage
                    percent={price_change_percentage_24h_in_currency}
                />
            </td>
            <td>
                <PriceChangePercentage
                    percent={price_change_percentage_7d_in_currency}
                />
            </td>
            <td>
                <PriceChangePercentage
                    percent={price_change_percentage_30d_in_currency}
                />
            </td>
            <td>${total_volume.toLocaleString()}</td>
            <td>${market_cap.toLocaleString()}</td>
            <td>Last 7 Days</td>
        </tr>
    );
}
