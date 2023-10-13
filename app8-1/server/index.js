const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/api/form-post', (request, response) => {
    const name = request.body.name || '';
    const email = request.body.email || '';
    const msg = request.body.message || '';

    const tableHTML = `
        <table border="1">
            <caption>ข้อมูลที่ส่งขึ้นไป</caption>
            <tr><td>ชื่อ:</td><td>${name}</td></tr>
            <tr><td>อีเมล:</td><td>${email}</td></tr>
            <tr><td>ข้อความ:</td><td>${msg}</td></tr>
        </table>
    `;
    response.send(tableHTML);
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
