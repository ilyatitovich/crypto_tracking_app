import "./Table.scss";
import { CurrencyData } from "../../lib/types";
import { useState } from "react";
import { checkDirectionAndSort } from "../../lib/utils";
import CurrencyRow from "../CurrencyRow";

const tableHeaders = [
    "#",
    "Coin",
    "Price",
    "1h",
    "24h",
    "7d",
    "30d",
    "24h Volume",
    "Market Cap",
];

export default function Table({ data }: { data: CurrencyData[] }) {
    const [listOfCurrencies, setListOfCurrencies] =
        useState<CurrencyData[]>(data);

    const [selectedForSort, setSelectedForSort] = useState(0);

    function handleSort(header: number) {
        const copyOfList = [...listOfCurrencies];
        let newList;

        if (header === selectedForSort) {
            newList = copyOfList.reverse();
        } else {
            newList = checkDirectionAndSort(header, copyOfList);
            setSelectedForSort(header);
        }

        setListOfCurrencies(newList!);
    }

    return (
        <table>
            <thead>
                <tr>
                    {tableHeaders.map((header, index) => (
                        <th
                            onClick={() => {
                                handleSort(index);
                            }}
                            className={selectedForSort === index ? "sort" : ""}
                        >
                            {header}
                        </th>
                    ))}
                    <th>Last 7 Days</th>
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
