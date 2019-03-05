let api = axios.create({
    baseURL: 'https://1.cust.edu.cn/quickauth/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});