import axios from 'axios';

export const handleGetDictionaryResponse = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
}