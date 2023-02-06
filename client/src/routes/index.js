import Home from '../pages/home/Home';
import CheckOut from '../pages/checkout/CheckOut';
import Confirmation from '../pages/checkout/Confirmation';
import ItemDetails from '../pages/itemDetails/ItemDetails';

const publicRoutes = [
   { id: '1', path: '/', components: Home },
   { id: '2', path: 'item/:itemId', components: ItemDetails },
   { id: '3', path: 'checkout', components: CheckOut },
   { id: '4', path: 'checkout/success', components: Confirmation },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
