import "./Home.scss";
import { CurrencyData } from "../../lib/types";
import { getMarketData } from "../../lib/utils";
import { useLoaderData } from "react-router-dom";
import Table from "../../components/Table/Table";

const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d&locale=en";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    const data = await getMarketData(API_URL);
    const marketData = data!.map((obj, index) => ({
        ...obj,
        index: index + 1,
    }));
    return { marketData };
}

export default function Home() {
    const { marketData } = useLoaderData() as { marketData: CurrencyData[] };

    console.log(marketData);

    return (
        <main className="home">
            <div className="table-container">
                <Table data={marketData} />
            </div>
        </main>
    );
}
