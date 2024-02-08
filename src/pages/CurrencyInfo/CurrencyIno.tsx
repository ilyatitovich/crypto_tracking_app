import "./CurrencyInfo.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { getDataFromGecoAPI } from "../../lib/utils";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import PriceChangePercentage from "../../components/PriceChangePercentage/PriceChangePercentage";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
    const CURRENCY_INFO_URL = `https://api.coingecko.com/api/v3/coins/${
        params.currencyId
    }?tickers=false&market_data=true&community_data=false&x_cg_demo_api_key=${
        import.meta.env.VITE_API_KEY
    }`;

    const currencyData = (await getDataFromGecoAPI(
        CURRENCY_INFO_URL
    )) as object;
    return { currencyData };
}

export default function CurrencyInfo() {
    const VS_CURRENCY = "usd";

    const { currencyData } = useLoaderData() as { currencyData: object };

    const { id, name, image, symbol, market_cap_rank, market_data } =
        currencyData;

    const {
        current_price,
        market_cap_change_percentage_24h_in_currency,
        market_cap,
        fully_diluted_valuation,
     
    } = market_data;

    console.log(currencyData);

    return (
        <div className="currency-info-container">
            <div className="currency-name cell">
                <div className="wrapper row">
                    <span>
                        <Link to="/">Cryptocurrencies</Link>
                    </span>
                    <span className="icon">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <span className="name">{name} Price</span>
                </div>
            </div>

            <div className="nav cell">
                <nav className="row">
                    <ul>
                        <li>Overview</li>
                        <li>Markets</li>
                        <li>News</li>
                        <li>Similar Coins</li>
                        <li>
                            <span>Historical Data</span>
                            <span>
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="logo cell">
                <div className="header row">
                    <span className="image">
                        <img src={image.thumb} alt={`${id} logo`} />
                    </span>
                    <span className="name">
                        <h3>{name}</h3>
                    </span>
                    <span className="symbol">{symbol.toUpperCase()}</span>
                    <span>Price</span>
                    <span className="rank">#{market_cap_rank}</span>
                </div>
                <div className="price-info row">
                    <span className="price">
                        ${current_price[VS_CURRENCY].toLocaleString()}
                    </span>
                    <span className="changes">
                        <PriceChangePercentage
                            percent={
                                market_cap_change_percentage_24h_in_currency[
                                    VS_CURRENCY
                                ]
                            }
                        />
                    </span>
                </div>
            </div>

            <div className="graph cell"></div>

            <div className="info cell">
                <div className="market-info">

                    <div className="row">
                        <span className="cathegory">Market Cap</span>
                        <span className="amount">
                            ${market_cap[VS_CURRENCY].toLocaleString()}
                        </span>
                    </div>

                    <div className="row">
                        <span className="cathegory">
                            Fully Diluted Valuation
                        </span>
                        <span className="amount">
                            $
                            {fully_diluted_valuation[
                                VS_CURRENCY
                            ].toLocaleString()}
                        </span>
                    </div>

                   
                </div>
            </div>

            <div className="about cell"></div>
        </div>
    );
}
