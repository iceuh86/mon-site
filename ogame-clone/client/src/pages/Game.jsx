import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { fetchGameData } from '../services/api';

const Game = () => {
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGameData = async () => {
            try {
                const data = await fetchGameData();
                setGameData(data);
            } catch (error) {
                console.error("Error fetching game data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadGameData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <Navigation />
            <GameBoard gameData={gameData} />
        </div>
    );
};

export default Game;