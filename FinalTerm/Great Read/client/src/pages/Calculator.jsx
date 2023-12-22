import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { calculate } from '../utils/api';

const Calculator = () => {
    const [operand1, setOperand1] = useState('');
    const [operation, setOperation] = useState('+');
    const [operand2, setOperand2] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getResultsFromLocalStorage = () => {
        try {
            const storedResults = localStorage.getItem('calculatorResults');
            return storedResults ? JSON.parse(storedResults) : [];
        } catch (error) {
            console.error('Error getting results from localStorage:', error.message);
            return [];
        }
    };

    useEffect(() => {
        const localStorageResults = getResultsFromLocalStorage();
        setResults(localStorageResults);
    }, []);

    const handleCalculate = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await calculate(operand1, operand2, operation, results);
            localStorage.setItem('calculatorResults', JSON.stringify(response.results));
            setResults(response.results);
        } catch (error) {
            console.error('Error calculating on the server:', error.message);
            setError('Error calculating result. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'operand1', headerName: 'Operand 1', width: 130 },
        { field: 'operation', headerName: 'Operation', width: 130 },
        { field: 'operand2', headerName: 'Operand 2', width: 130 },
        { field: 'result', headerName: 'Result', width: 130 },
    ];

    return (
        <div className='my-20 mx-10 flex flex-col justify-center items-center gap-5'>
            <div className='flex gap-4'>
                <TextField
                    label="Operand 1"
                    value={operand1}
                    onChange={(e) => setOperand1(e.target.value)}
                />
                <TextField
                    select
                    label="Operation"
                    value={operation}
                    sx={{
                        width: 100,
                    }}
                    onChange={(e) => setOperation(e.target.value)}
                >
                    <MenuItem value="+">+</MenuItem>
                    <MenuItem value="-">-</MenuItem>
                    <MenuItem value="*">*</MenuItem>
                    <MenuItem value="/">/</MenuItem>
                </TextField>
                <TextField
                    label="Operand 2"
                    value={operand2}
                    onChange={(e) => setOperand2(e.target.value)}
                />
                <Button variant="contained" onClick={handleCalculate} disabled={loading}>
                    Calculate
                </Button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={results.map((result, index) => ({ id: index + 1, ...result }))}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default Calculator;
