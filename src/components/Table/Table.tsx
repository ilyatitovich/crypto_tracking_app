import "./Table.scss";
import CurrencyRow from "../CurrencyRow";

export default function Table({data} : {data: number[]}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th className="no-sort">Coin</th>
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
                {data.map((el, index) => (
                    <CurrencyRow data={el + index} />
                ))}
            </tbody>
        </table>
    );
}
