const axios = require('axios');
const instanceAxios = axios.create();

instanceAxios.defaults.headers.common = {
    "Authorization": "Bearer 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"
};
instanceAxios.defaults.headers.post['Content-Type'] = 'application/json';


// Connect with Open APIs
/**
 * Find Category from the twitter text
 * @param {string} text 
 * @returns 
 */
 const findCategory = async({text})=>{
    const raw = JSON.stringify({
        "file": "file-kLGPYNxnfPF7X9ZyjizAYX3y",
        "search_model": "ada",
        "model": "curie",
        "max_examples": 3,
        "query": text
    });
    try {
        console.log(text);
        const url = "https://api.openai.com/v1/classifications";
        const response = instanceAxios.post(url , raw);
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    findCategory: findCategory
}