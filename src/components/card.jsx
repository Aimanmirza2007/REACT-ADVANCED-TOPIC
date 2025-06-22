import React from "react";

const Card = (props) => {
    console.log(props);
    
  return (
    <>
      <div className="w-[300px] m-10 h-[350px] px-4 py-5 text-center  text-white bg-[#e41740]  ">
        <h1 className="text-3xl mb-4">{props.username}</h1>
        <h1 className="text-xl mb-4">{props.email}l</h1>
        <h1 className="text-xl mb-4">{props.company}</h1>
        <h1 className="text-xl mb-4">{props.address}</h1>

        <button className="p-4 bg-purple-500 tex-lg font-bold ">Buy now</button>


      </div>
    </>
  );
};

export default Card;
