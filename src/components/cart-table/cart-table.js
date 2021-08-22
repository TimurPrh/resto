import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart, incItem, decItem, updateTotal } from '../../actions';
import WithRestoService from '../hoc';

const CartTable = ({items, deleteFromCart, incItem, decItem, updateTotal, RestoService}) => {
    const sendOrderData = (data) => {
        RestoService.postMenuItems(data)
            .then(res => console.log(res));

    data.forEach(item => {
        deleteFromCart(item.id);
    });
    updateTotal();
    }
    
    let orderButton = '';
    if (items.length) {
        orderButton = (
            <button onClick={() => sendOrderData(items)} className="menu__btn">
                Оформить
            </button>
        )
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;
                        return (
                            <div className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <button onClick={() => {
                                    incItem(id);
                                    updateTotal();
                                }} className="menu__btn">+</button>
                                <div className="cart__item-price">{count}</div>
                                <button onClick={() => {
                                    decItem(id);
                                    updateTotal();
                                }} className="menu__btn">-</button>
                                <div onClick={() => {
                                    deleteFromCart(id);
                                    updateTotal();
                                }} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }<br></br>
                {orderButton}
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart,
    updateTotal,
    incItem,
    decItem
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));