import React, { useRef } from 'react';

interface ReqProps {
  setName: (name:string)=>void;
}

export const Requirements: React.FC<ReqProps> = (props) => {
  const calcNameField = useRef<HTMLInputElement>(null)

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    if (calcNameField && calcNameField.current) {
      props.setName(calcNameField.current.value); 
      calcNameField.current.value = '';
    }
  }

  return (
    <div className='requirements'>
      <h3>Calculator's name:</h3>
      <form onSubmit={handleSubmit}>
        <input ref={calcNameField} placeholder="I'm fixed!" />
        <input type="submit" value="Change name!"/>
      </form>
      <ul>
        <li>
          It <strong>is</strong> possible to perform basic calculations (+ - * /) with floating-point numbers
        </li>
        <li>
          It <strong>is</strong> possible to update calculator's name live
        </li>
        <li>
          Calculator's state <strong>is</strong> reset, when it's name is changed
        </li>
        <br />
        <li>
          Every calculator button <strong>is</strong> <em>mapped</em> from <code>characters</code> array and render it's symbol using <em>children</em>
        </li>
        <li>
          Every calculator button <strong>does</strong> have <em>lightgray</em> color and <em>pointer</em> cursor when hovered; <em>gray</em> color when active
        </li>
        <br />
        <li>
          <strong>Nice</strong> I used React <em>hooks</em> and <em>Functional Components</em>
        </li>
        <li>
          <strong>It's nice</strong> to have typescript interfaces for all <em>props</em> and typescript type for <em>CalculationActions</em>
        </li>
        <li>
          <strong>It's nice</strong> to have scss syntax used for styling
        </li>
        <br />
        <li>P.S. You are free to refactor existing code, change the design or add any new features! And remember - quality over quantity! Good luck :)</li>
      </ul>
    </div>
  );
};
