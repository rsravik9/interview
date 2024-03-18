import React, { Fragment, useState, useEffect } from 'react'
import { productList } from './components/productList'
import calsses from './components/products.module.css'
import { Link } from 'react-router-dom'
function Product() {
    const [productSearch, setProductSearch] = useState('')
    const [mineCartProducts, setMineCartProducts] = useState(productList)

    const handleSearch = () => {
        const searchedProduct = productList?.filter((ele) => ele.name.toLowerCase() == productSearch.toLowerCase())
        setMineCartProducts(searchedProduct)
    }

    useEffect(() => {
        if (productSearch === '') {
            setMineCartProducts(productList)
        }
    }, [productSearch])


    return (
        <Fragment>
            <h1 className={calsses.pageHeading}>MineCart</h1>
            <div className={calsses.searchComponentSection}>
                <input
                    type="search"
                    value={productSearch}
                    onChange={(event) => setProductSearch(event.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className={calsses.productContainer}>
                {
                    mineCartProducts?.length ? mineCartProducts.map((item) => {
                        return (
                            <Link to={`/products/${item.id}`} key={item.id} className={calsses.individualItem}>
                                <img src={item?.image} alt={item.name} className={calsses.img} />
                                <span className={calsses.namePrice}>
                                    <div>Name : {item.name}</div>
                                    <div>Price : {item.price}</div>
                                </span>
                                <div> Description : {item.description}</div>
                            </Link>
                        )
                    }) : null
                }
            </div>
        </Fragment>
    )
}

export default Product