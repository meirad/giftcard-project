import React from 'react';

type GiftCardType = {
  id: number;
  name: string;
  expirationDate: string;
  userId: number;
  Expiring: string;
};

const ExpirationCardsContext = React.createContext<{
  expirationCards: GiftCardType[];
  setExpirationCards: React.Dispatch<React.SetStateAction<GiftCardType[]>>;
}>({
  expirationCards: [],
  setExpirationCards: () => {},
});

export {  ExpirationCardsContext };