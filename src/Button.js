import React from 'react';
import {useDispatch} from "react-redux";

function Button() {

 const dispatch = useDispatch();
   const handlePlus = () => {
       dispatch ({
           type:'plus',
       });
   }
    const handleMinus = () => {
        dispatch ({
            type:'minus',
        });
    }
    const handleReset = () => {
        dispatch ({
            type:'reset'
        });
    }
    return (
        <div>
            <button onClick={handlePlus}>
                plus
            </button>
            <button onClick={handleMinus}>
                minus
            </button>
            <button onClick={handleReset}>
                reset
            </button>
        </div>
    );
}

export default Button;