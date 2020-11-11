import React from 'react';
import './_App.scss';
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import { useGetProducts } from "./Providers/GetProducts/getProduct";
import Button from "./Components/Button/Button";
import Loader from "./Components/Loader/Loader";
import Cart from "./Components/Cart/Cart";
import ArrowRight from "./Components/Icons/Arrow-Right";
import CloseIcon from "./Components/Icons/CloseIcon";
import { numberFormat } from "./Lib/Utils";

const App = () => {
    const {
        data,
        loading,
        showSideBar,
        handleAddToCart,
        currencyData,
        currencyLoading,
        cartItems,
        handleIncrement,
        handleDecrement,
        count,
        removeStep,
        handleCloseCart,
        updateCurrency,
        currency,
        totalCartItems,
        total,
    } = useGetProducts();
  return (
      <div className="container">
        <Header totalCartItems={totalCartItems} showSideBar={handleCloseCart}/>
        <section className='filter-section'>
            <div className='filter-section__products'>
                <h1>All Products</h1>
                <h4>A 360 look at Lumin</h4>
            </div>
            <div className='filter-section__filter'>
                <select>
                    <option>Filter By</option>
                    <option>All Products</option>
                    <option>New Products</option>
                    <option>Sets</option>
                    <option>Skincare</option>
                    <option>Hair & Body Care</option>
                </select>
            </div>
        </section>
          {loading && <Loader />}
          <Cart
              active={showSideBar}
          >
              <div className='cart-holder__header'>
              <ArrowRight
                  onClick={handleCloseCart}
              />
              <p className='cart-holder__header-p'>Your Cart</p>
              </div>
              {currencyLoading ? <Loader/> :
                  <select className='currency-select' onChange={updateCurrency} value={currency}>
                      {currencyData?.currency?.map((item, key) => (
                          <option key={key}>{item}</option>
                      ))}
                  </select>
              }
              {
                  cartItems?.length > 0 ? cartItems?.map((cartItem) => {
                      return (
                          <div key={cartItem?.id} className="cart-holder__tile">
                              <div className="tile-title-head">
                                  <p className='tile-title'>{cartItem?.title}</p>
                                  <CloseIcon onClick={() => {removeStep(cartItem?.id)}}/>
                              </div>
                              <div className="quantity">
                                  <div className='quantity-box'>
                                      <span onClick={() => {handleDecrement(cartItem?.id, count)}}>-</span>
                                      <span>{cartItem?.count}</span>
                                      <span onClick={() => {handleIncrement(cartItem?.id)}}>+</span>
                                  </div>
                                  <div className="price"> {numberFormat((cartItem?.price * cartItem?.count), currency)}</div>
                                  <div className="quantity-img">
                                      <img src={cartItem?.image_url} alt={cartItem?.title}/>
                                  </div>
                              </div>
                          </div>
                          )
              }) :
                      <p>Your Cart is Empty :(</p>

              }

              <div className='cart-footer'>
                  <div className='cart-footer__subtotal'>
                      <span>Subtotal</span>
                      <span className='amount'>{numberFormat(total, currency)}</span>
                  </div>
                  <Button>Proceed to Checkout</Button>
              </div>
          </Cart>
          <section className="grid">
            {
                data?.products?.map((product) => (
                    <Card
                        key={product?.id}
                        image={product?.image_url}
                        imageAlt={product?.title}
                        title={product?.title}
                        price={currency + ' ' + product?.price}
                    >
                        <Button onClick={e => {handleAddToCart(e, product)}}> Add to Cart </Button>
                    </Card>
                ))
            }
        </section>
        </div>
  );
};

export default App;
