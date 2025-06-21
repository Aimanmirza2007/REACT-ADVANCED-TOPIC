import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, Link } from "react-router-dom";
const Home = () => {
  const [username, setUser] = useState("");
  const [userdata, setUserData] = useState([]);

  const submitform = (event) => {
    event.preventDefault();
    console.log(username);
    setUser("");
  };
  // TWO WAY BINDING

  // AXIOS PRACTICE
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    setUserData(res.data);
    console.log(userdata);
  };

  useEffect(()=>{
    getData()
  },[])
  // AXIOS PRACTICE

  return (
    <>
      {/* TWO WAY BINDING */}
      <form
        onSubmit={(event) => {
          submitform(event);
        }}
      >
        <p className="text-xl m-10">Enter your name</p>
        <input
          type="text"
          className="px-4 py-3 border-2 m-10"
          value={username}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button className="border-2 p-3 cursor-pointer">Submit name</button>
      </form>
      {/* TWO WAY BINDING */}

      {/* AXIOS PRACTICE */}
      <button
        onClick={getData}
        className="bg-emerald-600 text-white px-4 m-5 cursor-pointer text-2xl py-4"
      >
        Get Data
      </button>
      <div className="bg-amber-500 px-4 py-4 m-10 text-2xl text-white font-bold">
        {userdata.map((item, ind) => {
          return (
            <>
              <div key={ind}>
                <h1>{item.name} ------ <Link to={`/about/${item.id}`}>Explore</Link></h1>
              </div>
            </>
          );
        })}
      </div>
      {/* AXIOS PRACTICE */}
    </>
  );
};

export default Home;
