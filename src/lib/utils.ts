import axios, { AxiosResponse } from "axios";
import { CurrencyData } from "./types";

export function setInnerVh(): void {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export function round(number: number, significantDigit: number): string {
    const multiplier: number = Math.pow(10, significantDigit - Math.floor(Math.log10(Math.abs(number))));
    return (Math.round(number * multiplier) / multiplier).toFixed(1);
}

export async function getMarketData(url: string): Promise<CurrencyData[] | null> {
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
