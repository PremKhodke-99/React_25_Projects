import React from 'react'
import useFetch from '../UseFetchCustomHook/useFetch'
import { useRef } from 'react';

function ScrollTopBottom() {

    const { data, error, pending } = useFetch('https://dummyjson.com/products?limit=100', {});

    if (error) {
        <h3>Error</h3>
    }

    if (pending) {
        <h3>Pending pls wait</h3>
    }

    const bottomRef = useRef();

    function handleScrollToTop() {
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div>
            <h1>Scroll to top and bottom feature</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll to bottom</button>
            <ul>
                {
                    data && data.products && data.products.length ?
                        data.products.map(item =>
                            <li>{item.title}</li>
                        ) : null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll to top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    )
}

export default ScrollTopBottom