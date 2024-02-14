import React, { useEffect, useState } from 'react'
import './styles.css';


const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true)
    }, [products])

    async function fetchProducts() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    if (loading) {
        return <div>Loading Data, Please Wait.</div>
    }
    return (
        <div className='load-more-container'>
            <div className="product-container">
                {
                    products && products.length ?
                        products.map((item) => (
                            <div key={item.id} className='product'>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )) : null
                }
            </div>

            {
                disableButton && <p>You have reached end of page</p> ||
                <div className="button-container">
                    <button onClick={() => setCount(count + 1)}>Load More</button>
                </div>
            }
        </div>
    )
}

export default LoadMoreData