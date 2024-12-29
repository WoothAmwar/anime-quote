"use client"
import Image from "next/image";
import papaparse from "papaparse";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from "next/link";

import {
  anime_quote_data, office_quote_data, movie_quote_data,
  get_random_anime_quote, get_random_office_quote, get_random_movie_quote
} from "@/app/(pages)/quote_info.js";

/*
Plans to do
-- Separate high scores
  Create a separate high score for each category, wouldn't be too difficult to implement
-- Keyboard shortcuts
  WASD or Arrow keys
*/

/**
 * Full set of data as an array, with Quote, Character Name, Anime Name
 * @returns The full set of data
 */


const COLORS = {
  background: '#0b4a97',
  button: '#97580b',
  text: 'white'
};

export default function Home() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentWrong, setCurrentWrong] = useState(0);
  const [seenQuotes, setSeenQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentCorrectAnswer, setCorrectAnswer] = useState("");
  const [currentIncorrectAnswer, setIncorrectAnswer] = useState("");
  const [correctOnLeft, setCorrectOnLeft] = useState(false);
  const modes = ["Anime", "Office", "Movie"];
  const [getFunction, setGetFunction] = useState(() => get_random_anime_quote);
  const [modeIndex, setModeIndex] = useState(0);
  const [currUserName, setUserName] = useState("TEST123");
  const [hasUsername, setHasUsername] = useState(false);

  const [gameActive, setGameActive] = useState(false);

  const [userLeaderboardPlace, setLeaderboardPlace] = useState(0);

  useEffect(() => {
    document.title = `Guess That ${modes[modeIndex]} Quote`;
    setCurrentWrong(0);
    setCurrentScore(0);
    if (modeIndex == 0) {
      setGetFunction(() => get_random_anime_quote);
    } else if (modeIndex == 1) {
      setGetFunction(() => get_random_office_quote);
    } else if (modeIndex == 2) {
      setGetFunction(() => get_random_movie_quote)
    }
    fetch(`/api/${currUserName}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        const resp_data = data["data"][0];
        setHighScore(resp_data?.total_high_score === undefined ? 0 : Math.max(resp_data?.total_high_score, 0));
      })
  }, [modeIndex, currUserName]);

  useEffect(() => {
    var tempQuote = getFunction();
    while (tempQuote[0] in seenQuotes) {
      tempQuote = getFunction();
    }
    setCurrentQuote(tempQuote[0]);
    setCorrectAnswer(tempQuote[2]);
    setSeenQuotes(seenQuotes.concat(tempQuote[0]));

    var tempIncorrectQuote = getFunction();
    while (tempIncorrectQuote[2] == tempQuote[2]) {
      tempIncorrectQuote = getFunction();
    }
    setIncorrectAnswer(tempIncorrectQuote[2]);
    setCorrectOnLeft(Math.random() < 0.5);
  }, [currentScore, currentWrong, getFunction]);

  useEffect(() => {
    if (currentScore === highScore && currentScore > 0) {
      fetch(`/api/${currUserName}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          high_score: currentScore
        })
      });
    }

    async function getUserLeaderboardPlace() {
      if (!hasUsername) {
        return;
      }
      const response = await fetch(`/api`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const raw_data = await response.json();
        const data = raw_data["data"];
        var sorted_data = data.sort((a,b) => b.total_high_score - a.total_high_score);
        for (var i=0; i<sorted_data.length; i++) {
          if (sorted_data[i]["user_name"] == currUserName) {
            setLeaderboardPlace(i+1);
            continue;
          }
        }
        // console.log("DTA:", sorted_data);
      }
    }
    getUserLeaderboardPlace();
  }, [highScore]);

  const startGame = async () => {
    try {
      const response = await fetch(`/api/${currUserName}`, {  // /api/scores
        method: 'GET',
        credentials: 'include'
      })

      if (response.ok) {
        setGameActive(true)
        setCurrentScore(0)
      }
    } catch (error) {
      console.error('Failed to start game:', error)
    }
  }

  const updateScore = async (correct) => {
    if (!gameActive) return

    try {
      if (correct) {
        const newScore = currentScore + 1;
        const response = await fetch(`/api/${currUserName}`, {  // /api/scores
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            high_score: newScore
          }),
          credentials: 'include'
        })

        if (response.ok) {
          setCurrentScore(newScore)
        } else {
          // Handle invalid score update
          const data = await response.json()
          // console.log("DATA;", data);
          console.error('Score update failed:', data.error)
          // endGame() // End game on invalid update
        }
      } else {
        // Wrong answer
        // endGame()
        setCurrentScore(0)
      }
    } catch (error) {
      console.error('Error updating score:', error)
    }
  }

  // Start new game when component mounts
  useEffect(() => {
    if (hasUsername) {
      startGame()
    }
  }, [hasUsername])

  // Clean up game session when component unmounts
  // useEffect(() => {
  //   return () => {
  //     if (gameActive) {
  //       endGame()
  //     }
  //   }
  // }, [gameActive])


  const QuoteOptions = () => {
    const buttonClass = `w-full p-12 text-${COLORS.text} text-4xl hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg`;

    const correctButton = (
      <button
        className={`${buttonClass} bg-${COLORS.button}`}
        key={1}
        onClick={() => {
          setCurrentScore(currentScore + 1);
          setHighScore(Math.max(highScore, currentScore + 1));
          updateScore(true);
        }}
      >
        {currentCorrectAnswer}
      </button>
    );

    const incorrectButton = (
      <button
        className={`${buttonClass} bg-${COLORS.button}`}
        key={2}
        onClick={() => {
          setCurrentScore(0);
          setCurrentWrong(currentWrong + 1);
          setHighScore(Math.max(highScore, currentScore));
          updateScore(false);
        }}
      >
        {currentIncorrectAnswer}
      </button>
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto px-4">
        {correctOnLeft ? [correctButton, incorrectButton] : [incorrectButton, correctButton]}
      </div>
    );
  };

  const SignIn = () => {
    const [didBadName, setDidBadName] = useState(false);
    const valid_name = (user_name) => {
      const bad_words = [
        "porn", "sex", "nude", "naked", "hentai", "henta", "boob", "nsfw", "ass", "tit", "cock", "penis", "fuck", "shit", "bitch", 
        "nigg", "negr", "raci", "poop", "drug", "trump", "biden", "kill", "murde", "bomb", "terror", "weed", "cocai", "beer", "vodka",
        "loser", "stupi", "idio", "retar", "nazi", "klan", "kkk"
      ];
      return !bad_words.some(word => user_name.includes(word)) && user_name.length >= 5;
    };

    const submit_form = async (e) => {
      e.preventDefault();
      const form_data = new FormData(e.target);
      const name = form_data.get("name");

      if (valid_name(name)) {
        setHasUsername(true);
        setUserName(name);
        setDidBadName(false);
      } else {
        setDidBadName(true);
      }
    };

    return (
      <Card className="p-4 bg-white/10 backdrop-blur-sm">
        <CardContent>
          <form onSubmit={submit_form} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-white font-semibold" htmlFor="name">Username:</label>
              <input
                className="px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <button
              className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium"
              type="submit"
            >
              Sign Up/Login
            </button>
            {didBadName && (
              <p className="text-red-300 text-sm">
                Please use an appropriate name (5+ characters)
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: COLORS.background }}>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="grid grid-cols-3 gap-x-2">  {/*flex flex-row items-center space-x-4 */}
            <div className="col-start-2 flex flex-row space-x-4 items-center justify-center">
              <div className="text-white text-xl font-bold">Look at</div>
              <Select
                value={modeIndex.toString()}
                onValueChange={(value) => setModeIndex(parseInt(value))}
              >
                <SelectTrigger className="w-48 bg-white/10 text-white border-white/20">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  {modes.map((mode, idx) => (
                    <SelectItem key={idx} value={idx.toString()}>
                      {mode} Quotes
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row gap-x-2 items-right">
              <Link key={1} className="flex-1 rounded-lg text-right border-2 border-white p-2" href="/practice">
                  <p className="text-[#059669] text-2xl font-bold">Practice</p>
              </Link>
              <Link key={2} className="flex-1 rounded-lg text-right border-2 border-white p-2" href="/leaderboard">
                  <p className="text-[#059669] text-2xl font-bold">Leaderboard</p>
              </Link>
            </div>
          </div>
          <div className="text-white text-xs">*Do Not Spam Answers, or the Website may Break. Wait at least 0.5s between responses 
            (Intentional feature, trust me)
          </div>
          {hasUsername ? (
            <div>
              <p className="text-white text-2xl text-center">Welcome, {currUserName}!</p>
              <p className="text-white text-md">You are currently placed <span className="font-bold text-[#EAB308]">#{userLeaderboardPlace}</span> on the leaderboard</p>
            </div>
          ) : (
            <SignIn />
          )}
        </div>

        <div className="flex justify-center space-x-12">
          <div className="text-white text-xl">
            High Score: {highScore}
          </div>
          <div className="text-white text-xl">
            Current Score: {currentScore}
          </div>
        </div>

        {currentScore === 0 && seenQuotes.length > 1 && (
          <div className="text-red-500 text-2xl text-center font-bold">
            Try Again
          </div>
        )}

        <Card className="bg-white/10 backdrop-blur-sm p-6">
          <CardContent className="space-y-6">
            <h2 className="text-white text-xl text-center">
              Who said this {modes[modeIndex]} quote?
            </h2>
            <p className="text-white text-2xl text-center font-medium min-h-[100px] flex items-center justify-center">
              "{currentQuote}"
            </p>
            <QuoteOptions />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}