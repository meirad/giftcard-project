import React, { useContext } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type GiftCardType = {
  id: number;
  name: string;
  expirationDate: string;
  userId: number;
  Expiring: string;
};

const GiftCard: React.FC = () => {
  const [giftCards, setGiftCards] = React.useState<GiftCardType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loginedUser = "2"; 

  const fetchGiftCards = async () => {
    try {
      const response = await fetch(`http://localhost:6090/users/${loginedUser}/giftcards`);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setGiftCards(data);
        } else {
          throw new Error('API did not return an array');
        }
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError((error as Error).toString());
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchGiftCards();
  }, []);


return (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', height: '90vh' }}>
    {loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Array.isArray(giftCards) && giftCards.length > 0 ? (
          giftCards.map((giftCard) => (
            <Card key={giftCard.id} style={{ marginBottom: '20px', width: '400px', height: '200px', margin: '10px' }}>
              <CardContent>
                <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
                  {giftCard.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                  Expiration Date: {giftCard.expirationDate}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>No gift cards available</div>
        )}
      </div>
    )}
  </div>
);
};

export default GiftCard;
