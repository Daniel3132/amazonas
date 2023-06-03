import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { guardarLocalStorage, obtenerLocalStorage } from "../../helpers/LocalStorage";
import { carritoReducers } from "../reducers/carritoReducers";
import { loginReducers } from "../reducers/loginReducers";
import { productosReducers } from "../reducers/productosReducers";
import { registerReducers } from "../reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const storageState = obtenerLocalStorage()

const reducersEnviar = combineReducers({
    login: loginReducers,
    register: registerReducers,
    products: productosReducers,
    carrito: carritoReducers

})

const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

//para enviar cada vez que el estado cambie si
//el arbol de estados cambia
store.subscribe(() => {
    guardarLocalStorage({
        carrito: store.getState().carrito
    })
})

export default store