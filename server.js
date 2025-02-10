const express = require('express');
const app = express();

app.get('/',(req, res) => {
res.send('vm1 says: Hello!  Anirban from the microservice running on vm1');
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
console.log('server is running on http://0.0.0.0:${PORT}');
});
