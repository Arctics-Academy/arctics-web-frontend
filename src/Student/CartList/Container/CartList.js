import CartItem from "../Components/CartItem"
import { useState } from 'react';
import "../std_cartlist.css";
import { ReactComponent as ListIcon } from '../img/list.svg';
import { ReactComponent as ClearAll } from '../img/clear-all.svg';


const testData=[
  {id: 1,
  name: "李小蓁",
  fee: 200,
  exp: 15,
  education: { school: "國立臺灣大學", major: "外國語文學系", year:"二年級" },
  hashtags: ["學習歷程檔案", "筆試準備", "社團"],
  intro: "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？",
  star: 4.8},
  {id: 2,
  name: "李中蓁",
  fee: 250,
  exp: 100,
  education: { school: "國立清華大學", major: "機械學系", year:"二年級" },
  hashtags: ["社團"],
  intro: "我也不知道可以寫什麼，大概請他們簡述自己的升學歷程之類的吧？",
  star: 4.0},
  {id: 3,
  name: "李大蓁",
  fee: 300,
  exp: 9,
  education: { school: "國立陽明交通大學", major: "材料科學暨工程學系", year:"二年級" },
  hashtags: ["學習歷程檔案", "面試", "繁星"],
  intro: "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念。我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？",
  star: 3.7},
  {id: 4,
  name: "李大蓁",
  fee: 300,
  exp: 9,
  education: { school: "國立陽明交通大學", major: "材料科學暨工程學系", year:"二年級" },
  hashtags: ["學習歷程檔案", "筆試準備", "社團", "面試", "繁星"],
  intro: "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念。我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？",
  star: 3.7}
]

const cart_item=testData.map(( obj )=>{
  return(
    <CartItem key={obj.id} clt={obj} />
  ) 
})

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
      {cart_item}
    </div>
  );
};
export default CartList;