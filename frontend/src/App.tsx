import React, { useState } from 'react';
import './App.css';
import GiftCard from './Components/giftCard';
import ResponsiveAppBar from './ResponsiveAppBar';
import { ExpirationCardsContext } from './IconContext';
import Expiring from './Components/Expiring';

type GiftCardType = {
  id: number;
  name: string;
  expirationDate: string;
  userId: number;
  Expiring: string;
};

const App: React.FC = () => {

  const [expirationCards, setExpirationCards] = useState<GiftCardType[]>([]);

  return (

      <ExpirationCardsContext.Provider value={{ expirationCards, setExpirationCards }}>
        <ResponsiveAppBar />
        <GiftCard />
        <Expiring/>
      </ExpirationCardsContext.Provider>
  );
};

export default App;