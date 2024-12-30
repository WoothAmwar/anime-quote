"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

const LeaderboardDisplay = ({ players }) => {
    // Color constants
    const bgColor = 'bg-[#0b4a97]';
    const textColor = 'text-white';
    const highlightColor = 'bg-[#ff6a3d]';
    const borderColor = 'border-gray-600';
    const firstBgColor = 'bg-[#153c77]';
    const secondBgColor = 'bg-[#15213c]';
  
    // Sort players by total_high_score in descending order
    const sortedPlayers = [...players].sort((a, b) => b.total_high_score - a.total_high_score);
  
    return (
      <div className={`p-6 ${bgColor} rounded-lg shadow-lg w-full `}>
        <h1 className={`text-2xl font-bold ${textColor} text-center mb-4`}>Leaderboard</h1>
  
        <div className={`grid grid-cols-12 gap-2 border-b pl-4 pb-2 mb-4`}>
          <div className={`col-span-1 ${textColor} font-semibold`}>#</div>
          <div className={`col-span-7 ${textColor} font-semibold`}>Player</div>
          <div className={`col-span-4 ${textColor} font-semibold text-right`}>Score</div>
        </div>
  
        {sortedPlayers.map((player, index) => (
          <div
            key={index}
            className={`grid grid-cols-12 gap-2 py-2 px-4 rounded-lg ${index % 2 === 0 ? firstBgColor : secondBgColor}`}
          >
            <div className={`col-span-1 ${textColor} font-medium`}>{index + 1}</div>
            <div className={`col-span-7 ${textColor} truncate`}>{player.user_name}</div>
            <div className={`col-span-4 ${textColor} font-medium text-right`}>{player.total_high_score}</div>
          </div>
        ))}
      </div>
    );
  };

export default function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    useEffect(() => {
      document.title = `Quote Leaderboard`;
        async function getLeaderboardData() {
            const response = await fetch(`/api`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
              }
            });
      
            if (response.ok) {
              const raw_data = await response.json();
              const data = raw_data["data"];
              // Taking out Test users from my testing
              var sorted_data = data.filter((user) => !user.user_name.toLowerCase().includes("test"));
              sorted_data = sorted_data.sort((a,b) => b.total_high_score - a.total_high_score);
              setLeaderboardData(sorted_data);
            }
          }
          getLeaderboardData();
    }, [])

    return(
        <div className="bg-[#0b4a97]"> 
            {/* {leaderboardData.map((user_data, idx) => {
                return (
                    <div key={idx}>
                        #{idx+1} - {user_data.user_name} == {user_data.total_high_score}
                    </div>
                )
            })} */}
            <div className="flex flex-row justify-right pt-6 pl-6 space-x-4">
                <Link key={1} className="rounded-lg text-right border-2 border-white p-2" href="/">
                    <p className="text-[#059669] text-2xl font-bold">Competitive</p>
                </Link>
                <Link key={2} className="rounded-lg text-right border-2 border-white p-2" href="/practice">
                    <p className="text-[#059669] text-2xl font-bold">Practice</p>
                </Link>
            </div>
            <LeaderboardDisplay players={leaderboardData}/>
        </div>
    )
}