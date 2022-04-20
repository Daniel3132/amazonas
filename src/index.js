import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './containers/AppRoutes';
import { Provider } from 'react-redux';
import store  from './Redux/store/store';
import './styles/index.scss';
import './styles/navbar.scss';
import './styles/footer.scss';
import './styles/carrousel.scss';
import './styles/home.scss';
import './styles/opinions.scss';
import './styles/login.scss';
import './styles/productDetail.scss';
import './styles/addForm.scss';
import './styles/carrito.scss';
import './styles/payment.scss';


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);