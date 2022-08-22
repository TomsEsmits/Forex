import React, { memo, useEffect, useState } from "react";
import { CurrencyPairs } from "../../models/model";
import { getCurrencyPairs } from "../../services/FinancialModelingPrepServices";

interface InputProps {
    handleChange: React.ChangeEventHandler<HTMLSelectElement>;
    inputValue : string;
}

const Select:React.FC<React.PropsWithChildren<InputProps>> = ({handleChange, inputValue}) => {
    const [currencypairs, setCurrencyPairs] = useState<CurrencyPairs[]>([]);

useEffect(() => {
    getCurrencyPairs()
        .then(response => setCurrencyPairs(response))
        .catch(err => console.log(err.message))
    },[]
);

return (    
    <div className="select-wrapper">
        <select className="select-wrapper__select" onChange={handleChange} value={inputValue}>
            <option>Click to select currency pair</option>

            {currencypairs.map((pairs, index) => (
                <option key={index}>{pairs.ticker}</option>
            ))}

        </select>
    </div>
    );
};

export default memo(Select);