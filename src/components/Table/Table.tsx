import "./Table.scss";
import { CurrencyData } from "../../lib/types";
import { useState } from "react";
import CurrencyRow from "../CurrencyRow";

export default function Table({ data }: { data: CurrencyData[] }) {
    const [listOfCurrencies, setListOfCurrencies] =
        useState<CurrencyData[]>(data);

    function sortBy(value: string) {
        let sortedList;

        switch (value) {
            case "index":
                sortedList = [...listOfCurrencies].reverse();
                break;
            default:
                sortedList = listOfCurrencies;
        }

        setListOfCurrencies(sortedList);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => sortBy("index")}>#</th>
                    <th onClick={() => sortBy("name")} className="no-sort coin">Coin</th>
                    <th className="no-sort">Price</th>
                    <th className="no-sort">1h</th>
                    <th className="no-sort">24h</th>
                    <th className="no-sort">7d</th>
                    <th className="no-sort">30d</th>
                    <th className="no-sort">24h Volume</th>
                    <th className="no-sort">Market Cap</th>
                    <th className="no-sort">Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {listOfCurrencies.map((currency) => (
                    <CurrencyRow
                        key={currency.id}
                        num={currency.index!}
                        currencyData={currency}
                    />
                ))}
            </tbody>
        </table>
    );
}
