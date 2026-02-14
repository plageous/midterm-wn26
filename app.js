import express from 'express';
const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

const bookings = [];

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/book-vacation', (req, res) => {
    const booking = {
        destination: req.body.destination,
        travelers: req.body.travelers
    };

    bookings.push(booking);

    res.sendFile(`${import.meta.dirname}/views/thankyou.html`)
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});