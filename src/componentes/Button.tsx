import {useState} from 'react';

interface ButtonProps{
    color?: string;
    text?: string;
    children?:string;
}

export function Button(props: ButtonProps){
    const [count, setCount] = useState(1);

    function increment(){
        setCount(count + 1);
    }
    return( 
        <button onClick={increment} type="button" style={{backgroundColor:props.color}}> 
          {props.children}

          <strong>{count}</strong>
        </button>
    );
}