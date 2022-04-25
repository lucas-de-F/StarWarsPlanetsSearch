import { MenuItem, Select } from '@mui/material';
import React from 'react';

export const SelectInp = ({ params, changeState, value }: any) => (
    <Select style={{ margin: 10 }} onChange={changeState} value={value}>
        {params.map((param: string) => (
            <MenuItem value={param}>{param}</MenuItem>
        ))}
    </Select>
)