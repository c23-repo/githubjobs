const axios = require("axios");

async function getJobs(tech) {
    const API = `https://jobs.github.com/positions.json?description=${tech}`;
    
    const res = await axios.get(API);

    return res.data
    
}

module.exports = {
    getJobs
}
