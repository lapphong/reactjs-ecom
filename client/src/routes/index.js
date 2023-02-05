import Home from '../pages/home/Home';
import CheckOut from '../pages/checkout/CheckOut';
import Confirmation from '../pages/checkout/Confirmation';
import ItemDetails from '../pages/itemDetails/ItemDetails';

const publicRoutes = [
   { path: '/', components: Home },
   { path: 'item/:itemId', components: ItemDetails },
   { path: 'checkout', components: CheckOut },
   { path: 'checkout/success', components: Confirmation },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
