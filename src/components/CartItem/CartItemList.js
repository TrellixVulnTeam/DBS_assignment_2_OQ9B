import React from "react";
import CartItem from "./CartItem";

export default function CartItemList ( {ItemList, update, Xoa} ){
    if(ItemList)
    return(
        <>
        {
            ItemList.map( (item) => (<CartItem item = {item} update = {update} Xoa={Xoa}/>))
        }
        </>
    );
    else
    return(
        <></>
    );
}