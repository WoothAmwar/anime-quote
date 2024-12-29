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

const COLORS = {
    background: '#0b4a97',
    button: '#97580b',
    text: 'white'
};

const PercentageBar = ({ percentage }) => {
    // Clamp the percentage to ensure it's between 0 and 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

    const greenStyle = {
        width: `${clampedPercentage}%`,
        transition: 'width 0.3s ease',
    };

    const redStyle = {
        width: `${100 - clampedPercentage}%`,
        transition: 'width 0.3s ease',
    };

    return (
        <div className="flex w-full h-5 overflow-hidden rounded-md border-2 border-slate-500">
            <div className="bg-[#22C55E]" style={greenStyle}></div>
            <div className="bg-[#EF4444]" style={redStyle}></div>
        </div>
    );
};

export default function Home() {
    const [currentScore, setCurrentScore] = useState(0);
    const [currentWrong, setCurrentWrong] = useState(0);

    const [seenQuotes, setSeenQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState("");

    const [currentCorrectAnswer, setCorrectAnswer] = useState("");
    const [currentIncorrectAnswer, setIncorrectAnswer] = useState("");
    const [correctOnLeft, setCorrectOnLeft] = useState(false);

    const modes = ["Anime", "Office", "Movie"];
    const [getFunction, setGetFunction] = useState(() => get_random_anime_quote);
    const [modeIndex, setModeIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(30);


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
    }, [modeIndex]);

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


    const QuoteOptions = () => {
        const buttonClass = `w-full p-12 text-${COLORS.text} text-4xl hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg`;

        const correctButton = (
            <button
                className={`${buttonClass} bg-${COLORS.button}`}
                key={1}
                onClick={() => {
                    setCurrentScore(currentScore + 1);
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
                    setCurrentWrong(currentWrong + 1);
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

    return (
        <div className="min-h-screen py-8 px-4" style={{ backgroundColor: COLORS.background }}>
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col items-center space-y-6">
                    <div className="grid grid-cols-3 gap-x-2">
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
                    </div>
                    <div className="text-white text-sm font-bold">Your Score is <span className="text-red-500">NOT</span> Saved Anywhere
                        in Practice Mode. Once you reload the page or select another quote category, it will be lost forever
                    </div>
                    <div className="flex flex-row gap-x-2 items-right">
                        <Link key={1} className="flex-1 rounded-lg text-right border-2 border-white p-2" href="/">
                            <p className="text-[#059669] text-2xl font-bold">Competitive</p>
                        </Link>
                        <Link key={2} className="flex-1 rounded-lg text-right border-2 border-white p-2" href="/leaderboard">
                            <p className="text-[#059669] text-2xl font-bold">Leaderboard</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-x-12 space-y-4">
                    <div className="flex flex-row justify-center space-x-12">
                        <div className="text-white text-xl">
                            Current Score: {currentScore}
                        </div>
                        <div className="text-white text-xl">
                            Current Incorrect: {currentWrong}
                        </div>
                    </div>
                    {currentScore != 0 || currentWrong != 0 ? (
                        <div>
                            <div className={`flex justify-center text-xl font-bold
                            ${Math.round(currentScore / (currentScore + currentWrong) * 100) >= 50 ? "text-green-600" : "text-red-600"}`}>
                                {Math.round(currentScore / (currentScore + currentWrong) * 100)}% Correct
                            </div>
                            <PercentageBar percentage={currentScore / (currentScore + currentWrong) * 100} />
                        </div>
                    ) : (<div></div>)}
                </div>

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