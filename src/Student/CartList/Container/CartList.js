import { useState } from 'react';
import "../std_cartlist.css";
import { ReactComponent as ListIcon } from '../img/list.svg';
import { ReactComponent as ClearAll } from '../img/clear-all.svg';
import CartItemGroup from "../Components/CartItemGroup";
import { MetaTags } from 'react-meta-tags';

const CartList = () => {

  const [ hidden, setHidden ] = useState(true);

  return (
    <>
      <MetaTags>
        <title>好奇清單 | Arctics</title>
      </MetaTags>
      <div className="std_cartlist-main">
        <div className="std_cartlist-title-wrapper">
          <ListIcon className="std_cartlist-title-icon"/>
          <p className="std_cartlist-title">好奇清單</p>
        </div>
        <button className="std_cartlist-button-clear-all"  onClick={()=>setHidden(!hidden)}>
          <ClearAll className="std_cartlist-icon-clear-all"/>
          清空全部
        </button>
        <CartItemGroup hidden={hidden} setHidden={setHidden} />      
      </div>
    </>
  );
};
export default CartList;