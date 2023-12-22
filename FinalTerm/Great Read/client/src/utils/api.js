import axios from 'axios';

const api = axios.create({
    // baseURL: "https://great-read-398408.uc.r.appspot.com"
    baseURL: "http://localhost:8080"
});

export async function getBooks(offset, limit, categories, searchTerm) {
    try {
        const requestData = {
            offset: offset,
            limit: limit,
            categories: categories,
            searchTerm: searchTerm,
        };
        const response = await api.post('/get/books', requestData);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error.message}`);
    }
}

export async function getTopPicks() {
    try {
        const response = await api.get('/get/toppicks');
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch top picks: ${error.message}`);
    }
}

export async function getCategories() {
    try {
        const response = await api.get('/get/categories');
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch categories: ${error.message}`);
    }
}

export async function getRandomBooks(categories, goal, books) {
    try {
        const response = await api.post('/get/getRandomBooks', {
            categories: categories,
            goal: goal,
            books: books,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch random books: ${error.message}`);
    }
}
export async function calculate(operand1, operand2, operation, previousResults = []) {
    try {
        const requestData = {
            operand1: operand1,
            operand2: operand2,
            operation: operation,
            results: previousResults,
        };

        // Check if any of the required fields is missing
        if (!operand1 || !operand2 || !operation) {
            // If missing, fetch the previous results instead of making a new calculation
            const response = await api.post('/get/calculate', requestData);
            return response.data;
        }

        const response = await api.post('/get/calculate', requestData);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to calculate: ${error.message}`);
    }
}



export default api;
