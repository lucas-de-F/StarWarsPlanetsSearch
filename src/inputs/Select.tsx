import React from 'react';

export const Select = ({ params, changeState }: any) => (
    <select onChange={changeState}>
        {params.map((param: string) => (
            <option>{param}</option>
        ))}
    </select>
)