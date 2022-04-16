import React from 'react';

export const Select = (params: string[]) => (
    <select>
        {params.map((param) => (
            <option>{param}</option>
        ))}
    </select>
)