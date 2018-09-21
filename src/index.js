import store from './store.js'
import { addToCart } from './actions/cart-actions';
console.log(store.getState());
let unsubscribe = store.subscribe(()=> 
	console.log(store.getState())
)
store.dispatch(addToCart('coffee 800g', 1, 300));
store.dispatch(addToCart('flour 1kg', 2, 120));
store.dispatch(addToCart('juice 3L', 1, 300))
unsubscribe();