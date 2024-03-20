import React from 'react'
import useFetch from './useFetch'

function Test() {

    const { data, error, pending } = useFetch('https://dummyjson.com/products', {});

    console.log(data, error, pending);

    return (
        <div>
            <h1>UseFetch Hook</h1>
            {
                error && <h3>Error</h3>
            }
            {
                pending ? <h3>Pending ! please wait</h3> : null
            }
            {
                data && data.products && data.products.length ? (
                    data.products.map(productItem => (
                        <p key={productItem.key}>{productItem.title}</p>
                    ))
                ) : null
            }
        </div>
    )
}

export default Test