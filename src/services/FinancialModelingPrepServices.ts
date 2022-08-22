import { CurrencyOption, CurrencyPairs } from "../models/model";

export const getCurrencyPairOptions = async (currencyPair: string): Promise<CurrencyOption[]> => {
    const API = `https://financialmodelingprep.com/api/v3/fx/${currencyPair}?apikey=ddbb368beac9337e2b204cce8cff9375`;
    const response = await fetch(API);
  
    return await response.json();
};

export const getCurrencyPairs = async (): Promise<CurrencyPairs[]>  => {
    const API = `https://financialmodelingprep.com/api/v3/fx/?apikey=ddbb368beac9337e2b204cce8cff9375`;
    const response = await fetch(API);
    
    return await response.json();
};