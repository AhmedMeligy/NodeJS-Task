const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('registration');
});

app.post('/register', (req, res) => {
    const { name, password, email } = req.body;
    if (password.length < 8) {
        res.render('registration', { error: "Error: Password is less than 8 characters" });
    } else {
        res.render('registration', { success: "Registration success" });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});