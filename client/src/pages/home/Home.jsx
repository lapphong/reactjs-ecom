import MainCarousel from '../../pages/home/MainCarousel';
import ShoppingList from './ShoppingList';

export default function Home() {
   return (
      <div className="home">
         <MainCarousel />
         <ShoppingList />
      </div>
   );
}
