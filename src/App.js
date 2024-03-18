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
    }
  }
  return (
    <Fragment>
      {
        isFormSubmited ? (<Product />) : (
          <Login {...{ userName, setUserName, password, setPassword, loginHandler }} />
        )
      }
      <BrowserRouter>
        {/* <Routes>
          <Route path='/auth' element={<Login />} />
        </Routes> */}
        <Routes>
          <Route path='/products' element={<Product />} />
        </Routes>
        <Routes>
          <Route path='/products/:productID' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>


    </Fragment>
  );
}

export default App;
