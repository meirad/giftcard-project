import * as React from 'react';
import { useContext } from 'react';
import { ExpirationCardsContext } from '../IconContext';
const Expiring = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { expirationCards, setExpirationCards } = useContext(ExpirationCardsContext);
 
    const loginedUser = 2;
    const ExpiredCards = async () => {
        try {
          const response = await fetch(`http://localhost:6090/users/${loginedUser}/expirationgiftcard`);
          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data)) {
            console.log(data);
                setExpirationCards(data);
            } else {
            throw new Error('API did not return an array');
            }
        }
    
    } catch (error) {
    console.error(error);
    }
};

    React.useEffect(() => {
        ExpiredCards();
    }, []);


    return (
        <>
        </>
    )
}

export default Expiring