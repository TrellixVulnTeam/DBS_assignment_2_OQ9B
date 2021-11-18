import React from "react";

const OneStar = ({ marked }) => {
    return (
      <span>
          {marked ? '\u2605' : '\u2606'}

      </span>
    );
  };



  function Star({value}){
      return(
        <div>
        {Array.from({ length: 5 }, () => (
        <OneStar marked={value}
         />
        ))}
        </div>
);
}

export { Star };