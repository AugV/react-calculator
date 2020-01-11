import React, { useState, useEffect } from 'react';
import { CalcButton } from './Button';
import '../App.scss';

const characters = ['=', 'C', '*', ':', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', ''];

interface CalcProps {
calcName: string;
}

export const Calculator: React.FC<CalcProps> = (props) => {

  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    clearState();
  }, [props.calcName])

  const handleInput = (symbol:string) => {
    if (symbol === characters[0]) {
      calculateResult();
    }
    else if (symbol === characters[1]){
      clearState();
    }
    else {
      setExpression(expression+symbol);
    }
  }

  const calculateResult = () => {
    const sanitizedExpression: string = expression.replace(/[^-()\d/*+.]/g, ''); //xss prevention
    setExpression(sanitizedExpression);
    try {
      //eslint-disable-next-line
      const calcResult: string = eval(sanitizedExpression); 
      setResult(calcResult);
    } catch (e) {
      setResult('Invalid expression!');
    }  
  }

  const clearState = () => {
    setExpression('');
    setResult('');
  }

  return (
    <div className='calculator-wrapper'>
      <h2 className='calculator-title'>{props.calcName}</h2>
      <div className='calculator'>
        <div>
          <h3 className='result-small'>{expression}</h3>
        </div>
        <div className='result'>
          <h1>{result}</h1>
        </div>
        {characters.map((symbol, index) => (
          <CalcButton key={index} enterSymbol={handleInput}>
            {symbol}
          </CalcButton>  
        ))}
      </div>
    </div>
  );
};
