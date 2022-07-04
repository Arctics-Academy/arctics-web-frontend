import { useState, useContext } from 'react';
import CartItem from "./CartItem";
import NotifModal from "./NotifModal";
import Data from "../TestData.json";
import { ParamContext } from '../../../ContextReducer';

const CartItemGroup = ({hidden, setHidden}) => {

  // const [ data, setData ] = useState(Data);
  const context = useContext(ParamContext)
  // const filtered = Data.filter( item => !item.deleted )

  const cart_item = context.Info.list.consultants.map( item => {
    return(
      <CartItem key={item.id + item.name} clt={item} setContext={context.setInfo} context={context.Info} />
    )
  } )

  return(
    <div>
      <NotifModal title={"清空全部"} content={"確定要刪除「好奇清單」內的全部內容嗎？"} hidden={hidden} setHidden={setHidden} mode={"clearAll"} id={-1} />
      { cart_item }
    </div>
  )
}

export default CartItemGroup;