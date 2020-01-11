import React from 'react';

interface CalcButtonProps {
  enterSymbol: (symbol:string) => void;
}

export const CalcButton: React.FC<CalcButtonProps> = (props) => {
  const {enterSymbol, children } = props;

  const handleClick = () => {
    if(children){
      enterSymbol(children.toString());
    }
  }

  return(
    <button 
      onClick={handleClick}  
      className='calc-button'>
        {children}
    </button>
  )
};
