import React from 'react';

export default function ButtonOffset({onOffset}) {
    return (
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={()=>onOffset()}>Загрузить ещё</button>
        </div>
    );
}