import { createStore } from "redux";
//combineReducers 函数可以实现使用多个reducer;
import { combineReducers } from 'redux';

//创建一个 reducer 的方法，
//第一个参数 state 是当前保存在 store 中的数据，
//第二个参数 action 是一个 【***容器***】，type 一个简单的字符串常量， payload 用于更新状态的数据
/*
const reducer = function(state = [], action){
	return state;
}
//基础版实现方式
*/

//添加测试数据
const initialState = {
	cart: [
		{
			product: 'bread 700g',
			quantity: 2,
			unitCost: 90 
		},
		{
			product: 'milk 500ml',
			quantity: 1,
			unitCost: 66 
		}
	]
}

const ADD_TO_CART = "ADD_TO_CART";
const productsReducer = function(state=[], action) {
	return state;
}
const cartReducer = function(state=initialState, action) {
	//return state;
	switch (action.type){
		case ADD_TO_CART:{
			return {
				...state,
				cart: [...state.cart, action.payload]
			}
		}
		default:
			return state;
	}
	//上面实现意义：一个 reducer 需要处理不同的 action类别，因此我们需要一个switch语句。当一个 ADD_TO_CART 类型的action在应用程序中分发时， switch 中的代码将处理它。正如上面所示，  我们将 action.payload 中的数据与现有的 state 合并以创建一个新的 state。
}
function addToCart(product, quantity, unitCost){
	return {
		type: ADD_TO_CART,
		payload: { product, quantity, unitCost}
	}
	//定义这个函数，返回一个 JavaScript 对象，在我们分发消息之前，我们添加一些代码，让我们能够监听 store事件的更改。
}
const allReducers = {
	products: productsReducer,
	shoppingCart: cartReducer
}
const rootReducer = combineReducers(allReducers);

//创建一个 redux 存储区，它只能使用 reducer 作为参数来构造。存储在redux存储区中的数据可以直接被访问，但是只能通过提供的reducer进行更新。
let store = createStore(rootReducer);

console.log(store.getState());

let unsubscribe = store.subscribe(() => 
	console.log(store.getState())
)

//分发消息到 store 来向购物车添加商品。将下面的代码添加在 unsubscribe()之前。
store.dispatch(addToCart('Coffee 500g', 1, 250));
store.dispatch(addToCart('Apple 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe()
