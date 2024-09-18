import React, { useEffect, useState } from 'react';
import { Crown, RotateCcw, Home, ClipboardList, Plus, Settings } from 'lucide-react';
import axios from 'axios';
export const URL = import.meta.env.VITE_APP_BACKEND_URL

const LeaderBoard = () => {
    const [leaders, setLeaders] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            const response = await axios.get(`${URL}/api/users/get`);
            setLeaders(response.data)
        }
        getUsers();
    }, [])


  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="text-sm">8:12</div>
        <div className="flex items-center space-x-2 text-xs">
          <span>0.43 KB/S</span>
          <span className="flex items-center"><RotateCcw size={12} /> 55%</span>
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Leader Board</h1>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-purple-600 text-white rounded-full p-2">
            <Crown size={16} />
          </div>
          <div className="text-green-500">₹2875.00</div>
          <div className="bg-orange-500 text-white rounded-full p-2">
            TaskPlanet
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex space-x-4 mb-4">
            <button className="bg-orange-400 text-white px-4 py-2 rounded-full">Daily</button>
            <button className="text-gray-500">Weekly</button>
            <button className="text-gray-500">Monthly</button>
          </div>

          <div className="flex justify-between items-end mb-8">
            {leaders.slice(0, 3).map((leader, index) => (
              <div key={leader.name} className="flex flex-col items-center">
                {index === 1 && <Crown className="text-yellow-400 mb-2" size={24} />}
                <img src="/user.png" alt={leader.name} className="w-16 h-16 rounded-full" />
                <span className="mt-2">{leader.name}</span>
                <span className="text-green-500">{leader.score}</span>
                <span className="text-orange-400">Prize: ₹{leader.prize}</span>
              </div>
            ))}
          </div>

          <div className="text-red-500 mb-4">Ends in 03h 47m 40s</div>

          {leaders.slice(3).map((leader) => (
            <div key={leader.name} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src="/user.png" alt={leader.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <div>{leader.name}</div>
                  <div className="text-gray-500">Rank: {leader.rank}</div>
                </div>
              </div>
              <div>
                <div className="text-orange-400">Prize: ₹{leader.prize}</div>
                <div className="text-green-500">{leader.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">
        <Home />
        <ClipboardList />
        <div className="bg-blue-500 text-white rounded-full p-2">
          <Plus />
        </div>
        <Settings />
        <Crown />
      </div>
    </div>
  );
};

export default LeaderBoard;