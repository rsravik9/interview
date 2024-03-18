import React, { Fragment, useState } from 'react'
import Product from './products/Product';
import Login from './login/Login';
import ProductDetails from './products/components/productDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isFormSubmited, setIsformSubmited] = useState(false)
  const loginHandler = (event) => {
    event.preventDefault()
    if (userName && password) {
      setIsformSubmited(true)
    }
  }

  console.log('isFormSubmited', isFormSubmited);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login {...{ userName, setUserName, password, setPassword, loginHandler }} />} />
          <Fragment>
            <Route path='/products' element={<Product />} />
            <Route path='/products/:productID' element={<ProductDetails />} />
          </Fragment>
        </Routes>
      </BrowserRouter>


    </Fragment>
  );
}

export default App;
