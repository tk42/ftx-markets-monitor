export type Result = {
	success: string;
	result: Market[];
};

export type Market = {
	name: string;
	enabled: boolean;
	postOnly: boolean;
	priceIncrement: number;
	sizeIncrement: number;
	minProvideSize: number;
	last: number;
	bid: number;
	ask: number;
	price: number;
	type: string;
	baseCurrency: string;
	quoteCurrency: string;
	underlying: string;
	restricted: boolean;
	highLeverageFeeExempt: boolean;
	change1h: number;
	change24h: number;
	changeBod: number;
	quoteVolume: number;
	volumeUsd24h: number;
};
