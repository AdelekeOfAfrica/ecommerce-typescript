import React from "react";

const generateCouponCode=(title,expiryDate)=>{
    const formattedTitle=title.toUpperCase().replace(/\s+/g,'');

const formattedExpiryDate =expiryDate
.toISOString()
.slice(1,10)
.split('-')
.reverse()
.join('');

}