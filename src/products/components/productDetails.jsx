import React, { Fragment, useState, useEffect } from 'react';
import { productList } from './productList';
import calsses from './products.module.css';
import { Link, useParams, useNavigate } from 'react-router-dom'

function ProductDetails(props) {
    const { setIsformSubmited } = props

    const [mineCartProducts, setMineCartProducts] = useState([])
    const individualProduct = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const searchedProduct = productList?.filter((ele) => ele.id == individualProduct.productID)
        setMineCartProducts(searchedProduct)
    }, [individualProduct.productID])

    return (
        <Fragment>
            <div className={calsses.headingContainser}>
                <h1 className={calsses.pageHeading}>Product Details</h1>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className={calsses.productContainer}>
                {
                    mineCartProducts?.length ? mineCartProducts.map((item) => {
                        return (
                            <div to={`/${item.id}`} key={item.id} className={calsses.individualItem}>
                                <img src={item?.image} alt={item.name} className={calsses.img} />
                                <span className={calsses.namePrice}>
                                    <div>Name : {item.name}</div>
                                    <div>Price : {item.price}</div>
                                </span>
                                <div> Description : {item.description}</div>
                            </div>
                        )
                    }) : null
                }
            </div>
        </Fragment>
    )
}

export default ProductDetails