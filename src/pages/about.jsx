import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Card from "../components/card";
import axios from "axios";

const About = () => {
  const { productId } = useParams();
  console.log(productId);
  // Get the ID from URL
  const [user, setUser] = useState(null); // Change from array to object

  // Get single user by ID
  const getUserById = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${productId}`
      );
      setUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching user", err);
    }
  };

  useEffect(() => {
    getUserById();
  }, [productId]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">About Page</h1>
      <h2 className="text-xl text-center mb-6">User ID: {productId}</h2>
      {/* Show user details if loaded */}
      <div className="flex justify-center mt-10">
        {user ? (
          <Card
            username={user.name}
            email={user.email}
            company={user.company.name}
            address={user.address.street}
          />
        ) : (
          <p>Loading user data.....</p>
        )}
      </div>
      <Link to="/" className="text-blue-500 underline mt-4 text-xl block text-center">
        ««« Back to Home
      </Link>
    </div>
  );
};

export default About;
