import CartItem from "../Components/CartItem"
import SearchBar from "../Components/SearchBar"
import { useState } from 'react';
import "../std_cartlist.css";
import { ReactComponent as ListIcon } from '../img/list.svg';
import { ReactComponent as ClearAll } from '../img/clear-all.svg';
//import img_tmp from '../img/tmp_avatar.png';

const CartList = () => {
  return (
    <div className="std_cartlist-main">
      <div className="std_cartlist-title-wrapper">
        <ListIcon className="std_cartlist-title-icon"/>
        <p className="std_cartlist-title">好奇清單</p>
      </div>
      <button className="std_cartlist-button-clear-all">
        <ClearAll className="std_cartlist-icon-clear-all"/>
        清空全部
      </button>
      <CartItem name="李小蓁"/>
    </div>
  );
};
export default CartList;