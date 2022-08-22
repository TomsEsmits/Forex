import React, { memo, PropsWithChildren } from "react";
import { CurrencyOption } from "../../models/model";

interface LiveWalltProps {
    currencyOptions : CurrencyOption[];
}

const LiveWall: React.FC<PropsWithChildren<LiveWalltProps>> = ({currencyOptions}) => {
    return(
        <>
            {
                currencyOptions && currencyOptions.map((option, index) => 
                    (
                        <div key={index}>
                        <h2>ticker: {option.ticker}</h2>
                        <h2>bid: {option.bid}</h2>
                        <h2>ask: {option.ask}</h2>
                        <h2>open: {option.open}</h2>
                        <h2>low: {option.low}</h2>
                        <h2>high: {option.high}</h2>
                        <h2>changes: {option.changes}</h2>
                        <h2>date: {option.date}</h2>
                        </div>
                    )
                )
            }
        </>
    )
}

export default memo(LiveWall);