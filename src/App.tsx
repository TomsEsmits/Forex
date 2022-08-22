import React, { useCallback, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Input from './components/Select/Select';
import LiveWall from './components/LiveWall/LiveWall';
import { CurrencyOption } from "./models/model";
import { subscribeToUpdate } from './services/LiveUpdate';


const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currencyOptions, setCurrencyOptions] = useState<CurrencyOption[]>([]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputValue(e.target.value);
        }, [] 
    );

    const liveUpdate = (): void => {
        subscribeToUpdate(inputValue, (data) => setCurrencyOptions(data))
    }

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            inputValue && liveUpdate();
        }, [liveUpdate]
    );

  return (
    <div className="App">
      <Input handleChange={handleChange} inputValue={inputValue} />
      <Button handleClick={handleClick} />
      <LiveWall currencyOptions={currencyOptions} />
    </div>
  );
}

export default App;