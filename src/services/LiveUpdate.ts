import { CurrencyOption } from "../models/model";
import { getCurrencyPairOptions } from "./FinancialModelingPrepServices";

let intervalId: NodeJS.Timer;

export const subscribeToUpdate = (currencyPair: string, callback: (data: CurrencyOption[]) => void) => {
    if (intervalId) {
        clearInterval(intervalId);
    }

    getCurrencyPairOptions(currencyPair.replace("/", ""))
    .then(response => callback(response))
    .catch(err => console.log(err.message))

    intervalId = setInterval(() => {
      getCurrencyPairOptions(currencyPair.replace("/", ""))
      .then(response => callback(response))
      .catch(err => console.log(err.message))
    }, 2000)
}