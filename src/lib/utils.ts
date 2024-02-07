import axios, { AxiosResponse } from "axios";
import { CurrencyData } from "./types";
import { sortBy } from "lodash";

export function setInnerVh(): void {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export function checkDirectionAndSort(
    header: number,
    listForSort: CurrencyData[]
) {
    switch (header) {
        case 0:
            return sortBy(listForSort, [(o) => o.index]);
        case 1:
            return sortBy(listForSort, [(o) => o.name.toLowerCase()]);
        case 2:
            return sortBy(listForSort, [(o) => -o.current_price]);
        case 3:
            return sortBy(listForSort, [
                (o) => -o.price_change_percentage_1h_in_currency,
            ]);
        case 4:
            return sortBy(listForSort, [(o) => -o.price_change_percentage_24h]);
        case 5:
            return sortBy(listForSort, [
                (o) => -o.price_change_percentage_7d_in_currency,
            ]);
        case 6:
            return sortBy(listForSort, [
                (o) => -o.price_change_percentage_30d_in_currency,
            ]);
        case 7:
            return sortBy(listForSort, [(o) => -o.total_volume]);
        case 8:
            return sortBy(listForSort, [(o) => -o.market_cap]);
    }
}

export async function getMarketData(
    url: string
): Promise<CurrencyData[] | null> {
    try {
        const response: AxiosResponse<CurrencyData[]> = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(
            "Error occurred while fetching market data:",
            (error as Error).message
        );
        throw error;
    }
}
