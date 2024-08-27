import express from 'express';
import cors from 'cors';
import {giftCards, users, expirationGiftCard} from './MOCK_DATA.mjs';
import moment from 'moment';


const app = express();

app.use(express.json());


app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
}));

app.listen(6090, () => {
    console.log('listening on port http://localhost:6090');
});


app.get('/users', (req, res) => {
    res.send(users[0]);
});

app.get('/giftcards', (req, res) => {
    res.send(giftCards[0]);
}
);


app.get('/users/:id', (req, res) => {
    const user = users[0].find((user) => user.id == req.params.id);
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send(' user not found');
    }
});

app.get('/giftcards/:id', (req, res) => {
    const giftCard = giftCards[0].find((giftCard) => giftCard.id == req.params.id);
    if (giftCard) {
        res.send(giftCard);
    }
    else {
        res.status(404).send('Gift Card not found');
    }
    });


    app.get('/users/:id/giftcards', (req, res) => {
        const userGiftCards = giftCards[0].filter((giftCard) => giftCard.userId == req.params.id);
        if (userGiftCards.length > 0) {
            res.send(userGiftCards);
        }
        else {
            res.status(404).send('No Gift Cards found for this user');
        }

    });



    app.get('/users/:id/expirationgiftcard', (req, res) => {    
        const userId = req.params.id;  
    
        const expirationGiftCardTwoDays = giftCards[0].filter((giftCard) => giftCard.userId == userId);
    
        if (expirationGiftCardTwoDays.length > 0) {
            expirationGiftCardTwoDays.forEach((giftCard) => {
                const daysUntilExpiration = moment(giftCard.expirationDate, 'DD-MM-YYYY').diff(moment(), 'days');
    
                if (daysUntilExpiration < 0) {
                    giftCard.Expiring = "0";
                } else if (daysUntilExpiration <= 2) {
                    giftCard.Expiring = "1";
                } else {
                    giftCard.Expiring = "2";
                }
                
                const user = users[0].find((user) => user.id == giftCard.userId);
                if (user) {
                    if (!giftCard.NotificationTime) { 
                        giftCard.NotificationTime = '2'; 
                    }
                    else {
                        giftCard.NotificationTime = user.NotificationTime;  
                    }
                }
            });
    
            const expiringGiftCards = expirationGiftCardTwoDays.filter((giftCard) => giftCard.Expiring === "1");
    
            if (expiringGiftCards.length > 0) {
                res.send(expiringGiftCards);
            } else {
                res.status(404).send('No Gift Cards are expiring');
            }
        } else {
            res.status(404).send('No Gift Cards will expire in two days');
        }
    });


export { app }; 