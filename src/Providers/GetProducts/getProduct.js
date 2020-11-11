import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENCY, GET_PRODUCTS } from "./queries";

const useGetProducts = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [count, setCount] = useState([]);
    const [currency, setCurrency] = useState('NGN');

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        const isExisting = cartItems?.filter((cartItem) => cartItem?.id === product?.id)?.length;

        if ( isExisting ) {
            handleIncrement(product?.id);
            return setShowSideBar(!showSideBar);
        }

        const alteredProduct = {...product, count: 1};
        setCartItems(cartItems => [...cartItems, alteredProduct]);
        return setShowSideBar(!showSideBar);
    };


    const totalCartItems = cartItems.map(item => item?.count).reduce((a, b) => a + b, 0);

    const handleCloseCart = () => {
        setShowSideBar(!showSideBar);
    };

    const handleIncrement = (id) => {
        const newCartItems = cartItems?.reduce((acc, cartItem) => {
            if ( cartItem?.id === id) {
                let newCount = cartItem?.count;

                newCount += 1;

                acc.push({
                    ...cartItem, count: newCount
                });
                return acc;
            }
            acc.push({
                ...cartItem
            });
            return acc;
        }, []);

        setCartItems(newCartItems)
    };

    const handleDecrement = (id) => {
        const newCartItems = cartItems?.reduce((acc, cartItem) => {
            if ( cartItem?.id === id) {
                let newCount = cartItem?.count;

                if (newCount === 1) {
                    return acc
                }
                newCount -= 1;

                acc.push({
                    ...cartItem, count: newCount
                });
                return acc;
            }
            acc.push({
                ...cartItem
            });
            return acc;
        }, []);

        setCartItems(newCartItems)
    };

    const removeStep = (id) => {
        const newCartItems = cartItems.filter((item ) => item?.id !== id);
        setCartItems([...newCartItems]);
    };

    const updateCurrency = (selectedCurrency) => {
        setCurrency(selectedCurrency.target.value);
    };

    let total = cartItems.reduce((acc, {price, count}) => acc + (price*count), 0);

    const { data: currencyData, loading: currencyLoading, error: currencyError } = useQuery(CURRENCY);

    const { data, loading, error } = useQuery(GET_PRODUCTS,{
        variables: { currency: currency },

        onCompleted: ({products}) => {

            if (products && cartItems.length > 0)  {

                const newCartItems = cartItems?.map(({id, price, ...rest}) => ({
                        ...rest,
                        id,
                        price: products?.find(product => product?.id === id)?.price || price
                    })
                );
                setCartItems(newCartItems)
            }
        }
    });


    if (error || currencyError) return <p>Error :(</p>;

    return {
        data,
        loading,
        handleAddToCart: (e, product) => handleAddToCart(e, product),
        showSideBar,
        currencyData,
        currencyLoading,
        cartItems,
        count,
        handleIncrement: (cartItem) => handleIncrement(cartItem),
        handleDecrement: (id, count) => handleDecrement( id, count),
        removeStep: ( id) => removeStep( id),
        handleCloseCart,
        updateCurrency,
        currency,
        totalCartItems,
        total,
    };
};

export { useGetProducts };