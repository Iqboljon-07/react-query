import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../loading/Loading";
import { toast } from "react-toastify";
import Navbar from "../navbar/navbar";

function Myproject() {
  const ParpageCount = 8;
  const [ofset, setOfset] = useState(1);
  const getTodos = async ({ queryKey }) => {
    const [, currentOffset] = queryKey;
    let response = await fetch(
      `https://dummyjson.com/users?limit=${ParpageCount * currentOffset}`
    );

    let data = await response.json();

    console.log(data.users);
    if (response.ok) {
      toast.success("Malumot yetib keldi");
    }

    return data.users;
  };

  // query async funksiyadan so'ng ishlatilishi kerak
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", ofset],
    queryFn: getTodos,
    //staleTime: 1000 * 60 * 5, // 5 minutes
  });
  if (isLoading) {
    toast.info("Malumot kelmoqda");
    return <Loading count={ParpageCount} />;
  }

  if (error) {
    toast.error("Xatolik yuz berdi");
    return <div>Error: {error.message}</div>;
  }
  const Showmore = () => {
    toast("malumot qo'shildi");
    setOfset((prev) => prev + 1);
  };

  return (
    <>
      <Navbar count={ofset} parpag={ParpageCount}>
        <h1>{ofset * ParpageCount} </h1>
      </Navbar>
      <div className="user">
        {data.map((user) => (
          <div key={user.id} className="user_item">
            <img src={user.image} alt="" />

            <h2>{`${user.firstName} ${user.lastName}`}</h2>
          </div>
        ))}
      </div>
      <button className="btn">show more</button>
    </>
  );
}

export default Myproject;
