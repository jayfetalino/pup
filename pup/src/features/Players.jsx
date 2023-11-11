import React, { useState, useEffect } from "react";

import { puppyBowlApi } from "../..api/puppyBowlApi";

const { useGetPuppiesQuery } = puppyBowlApi;

export const Players = () => {
    const { data = {}, error, isLoading } = useGetPuppiesQuery();

    console.log(data);

    if (isLoading) {
        return <h1>...loading</h1>;
    } 

    if (error) {
        return <h1>error</h1>;
    }

    return (
        <div className="players">
            {data.data.players.map((players) => (
                <div key={players.id} className="player-card">
                    <img src={players.imageUrl} alt={players.name} />

                    <div className='player-details'>
                        <h2>{players.name}</h2>

                        <p>{players.breed}</p>

                        <p>{players.status}</p>

                    </div>
                </div>
            ))}
        </div>
    );
};