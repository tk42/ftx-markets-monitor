import fetch from "isomorphic-fetch";
import { Result, Market } from "./ftx/markets";

const FTX_URL = "https://ftx.com/api/markets";

const fetchResult = async (): Promise<Result> => {
	try { 
		const response = await fetch(FTX_URL);
		const json = await response.json();
		return json;
	} catch (err) {
		console.error("Failed to fetch markets", err);
		return null;
	}
};

export const getFtxMarkets = async (): Promise<Market[]> => {
	const json = await fetchResult();
	return json.result;
}
