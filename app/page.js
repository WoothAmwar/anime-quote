"use client"
import Image from "next/image";
import papaparse from "papaparse";

import { useEffect, useState } from "react";
/**
 * Full set of data as an array, with Quote, Character Name, Anime Name
 * @returns The full set of data
 */
function quote_data() {
  var csv_data = `"People’s lives don’t end when they die, it ends when they lose faith.",Itachi Uchiha,Naruto
"If you don’t take risks, you can’t create a future!",Monkey D Luffy,One Piece
"If you don’t like your destiny, don’t accept it.",Naruto Uzumaki,Naruto
"When you give up, that’s when the game ends.",Mitsuyoshi Anzai,Slam Dunk
All we can do is live until the day we die. Control what we can…and fly free.,Deneil Young,Uchuu Kyoudai or Space Brothers
"Forgetting is like a wound. The wound may heal, but it has already left a scar.",Monkey D Luffy,One Piece
It’s just pathetic to give up on something before you even give it a shot.”,Reiko Mikami,Another
"If you don’t share someone’s pain, you can never understand them.",Nagato,Naruto
"Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",Himura Kenshin,Rurouni Kenshin
We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today!”,Natsu Dragneel,Fairy Tail
Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?,Juuzou Suzuya,Tokyo Ghoul
People become stronger because they have memories they can’t forget.,Tsunade,Naruto
I’ll leave tomorrow’s problems to tomorrow’s me.,Saitama,One Punch Man
"If you wanna make people dream, you’ve gotta start by believing in that dream yourself!",Seiya Kanie,Amagi Brilliant Park
Being lonely is more painful then getting hurt.,Monkey D Luffy,One Piece
There’s no shame in falling down! True shame is to not stand up again!,Shintar Midorima,Kuroko s Basketball
Simplicity is the easiest path to true beauty.,Seishuu Handa,Barakamon
"If you can’t do something, then don’t. Focus on what you can.",Shiroe,Log Horizon
Giving up kills people. When people reject giving up… they finally win the right to transcend humanity.,Alucard,Hellsing
"You can die anytime, but living takes true courage.”",Kenshin Himura,Rurouni Kenshin: Meiji Kenkaku Romantan
Every journey begins with a single step. We just have to have patience.,Milly Thompson,Trigun
It doesn’t do any good to pretend you can’t see what’s going on.,Yuuya Mochizuki,Another
Being weak is nothing to be ashamed of… Staying weak is !!,Fuegoleon Vermillion,Black Clover
To act is not necessarily compassion. True compassion sometimes comes from inaction.,Hinata Miyake,A Place Further than the Universe
A dropout will beat a genius through hard work.,Rock Lee,Naruto
Reject common sense to make the impossible possible.,Simon,Tengen Toppa Gurren Lagann
"Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",Kenshin Himura,Rurouni Kenshin Meiji Kenkaku Romantan
If you really want to be strong… Stop caring about what your surrounding thinks of you!,Saitama,One Punch Man
"Vision is not what your eyes see, but an image that your brain comprehends.",Touko Aozaki,The Garden of Sinners Kara no Ky kai
"Sometimes, people are just mean. Don’t fight mean with mean. Hold your head high.",Hinata Miyake,A Place Further than the Universe
The ticket to the future is always open.,Vash The Stampede,Trigun
Hard work is worthless for those that don’t believe in themselves.,Naruto Uzumaki,Naruto
A place where someone still thinks about you is a place you can call home.,Jiraiya,Naruto
Life comes at a cost. Wouldn’t it be arrogant to die before you’ve repaid that debt?,Yuuji Kazami,The Fruit of Grisaia Gurizaia no Kajitsu
"You can die anytime, but living takes true courage.",Himura Kenshin,Rurouni Kenshin
Every journey begins with a single step. We just have to have patience.,Milly Thompson,Trigun
"If you just submit yourself to fate, then that’s the end of it.”",Keiichi Maebara,Higurashi When They Cry
It is at the moment of death that humanity has value.,Archer,Fate Series
"People, who can’t throw something important away, can never hope to change anything.",Armin Arlert,Shingeki no Kyojin Attack on Titan
"Whatever you do, enjoy it to the fullest. That is the secret of life.”",Rider,Fate Zero
"Power comes in response to a need, not a desire. You have to create that need.",Goku,Dragon Ball Z
"There are no regrets. If one can be proud of one’s life, one should not wish for another chance.”",Saber,Fate Stay Night
You can’t always hold on to the things that are important. By letting them go we gain something else.”,Kunio Yaobi,Tamako Market
"If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.",Naruto Uzumaki,Naruto
"Don’t beg for things. Do it yourself, or else you won’t get anything.",Renton Thurston,Eureka Seven
I refuse to let my fear control me anymore.”,Maka Albarn,Soul Eater
"If you can’t find a reason to fight, then you shouldn’t be fighting.”",Akame,Akame Ga Kill
"You should never give up on life, no matter how you feel. No matter how badly you want to give up.”",Canaan,
"People who can’t throw something important away, can never hope to change anything.",Armin Arlelt,Attack on Titan
We can’t waste time worrying about the what if’s.”,Ichigo Kurosaki,Bleach
Fools who don’t respect the past are likely to repeat it.,Nico Robin,One Piece
That’s why I can’t make a change. Everything I do is so… Half-assed.”,Hiroshi Kido,Barakamon
Sometimes it’s necessary to do unnecessary things.,Kanade Jinguuji,Best Student Council
An excellent leader must be passionate because it’s their duty to keep everyone moving forward.,Nico Yazawa,Love Live
Protecting someone means giving them a place to belong. Giving them a place where they can be happy.,Princess Lenessia,Log Horizon
Thinking you’re no-good and worthless is the worst thing you can do,Nobito,Doraemon
"Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!”",Izuku Midoriya,My Hero Academia
"If you can’t do something, then don’t. Focus on what you can do.”",Shiroe,Log Horizon
"When you lose sight of your path, listen for the destination in your heart.",Allen Walker,D Gray Man
"The moment you think of giving up, think of the reason why you held on so long.”",Natsu Dragneel,Fairy Tail
"Don’t give up, there’s no shame in falling down! True shame is to not stand up again!",Shintaro Midorima,Kuroko No Basket
"No matter how hard or impossible it is, never lose sight of your goal.”",Monkey D Luffy,One Piece
"Life is not a game of luck. If you wanna win, work hard.",Sora,No Game No Life
"The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.",Roy Mustang,Full Metal Alchemist
"Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",Gildarts Clive,Fairy Tail
To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.,Matsumoto Rangiku,Bleach
Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer.,Miss Kobayashi,Dragon Maid
"Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",Clare,Claymore
"The world’s not perfect, but it’s there for us trying the best it can. That’s what makes it so damn beautiful.",Roy Mustang,Fullmetal Alchemist
"We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine.. forever.",Hitsugaya Toshiro,Bleach
"If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",Alibaba Saluja,Magi
"When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey.",Hinata Miyake,A Place Further than the Universe
"Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",Don Quixote Doflamingo,One Piece
"A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",Jiraiya,Naruto
"Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",Saitama,One Punch Man
"Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one’s heart.",Mavis Vermillion,Fairy Tail
"Fear is freedom! Subjugation is liberation! Contradiction is the truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",Satsuki Kiryuuin,Kill la Kill
Hatred and Sorrow are power. They are yours to control. All you have to do is to turn them into strength and use that strength to move forward.,Sebastian Michaelis,Black Butler Kuroshitsuji
"It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",Might Guy,Naruto
"Life and death are like light and shadow. They’re both always there. But people don’t like thinking about death, so subconsciously, they always look away from it.",Yato,Noragami
It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.”,Grimsley,Pokemon
I am the hope of the universe. I am the answer to all living things that cry out for peace. I am the protector of the innocent. I am the light in the darkness. I am the truth. Ally to good! Nightmare to you!,Son Goku,Dragon Ball Z
"If you’re gonna insist on gambling and then complain when you lose, you had better work on your game.”",Hatsu Kominato,Selector Infected Wixoss
Moving on doesn’t mean you forget about things. It just means you have to accept what’s happened and continue living.,Erza Scarlet,Fairy Tail
"If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",Alibaba Saluja,Universal Warriors
"If you keep on hiding your true feelings, who is going to be happy? If you are sad, you should say it out loud!",Haruhi Fujioka,Ouran High School Host Club
"Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start a war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",Paine,Naruto Shippuden
"Don’t be upset because of what you can’t do. Do what you do best, live as carefree and optimistically as you can, because some people aren’t able to do that.",Keima Katsuragi,The World God Only Knows
"If you begin to regret, you’ll dull your future decisions and let others make your choices for you. All that’s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",Erwin Smith,Attack on Titan
"Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable, we have to face them. It’s what being human is all about.",Jet Black,Cowboy Bebop
"Anything can happen. No one ever thinks it will until it does. What will happen, happens. That’s how the world is. The most important thing is to not let the tragedy defeat you. To believe that you can get through it.",Kyousuke Natsume,Little Busters
"You’ll only realize that you truly love someone if they already caused you enormous pain. Your enemies can never hurt you the way your loved ones can. It’s the people close to your heart that can give you the most piercing wound. Love is a double-edged sword, it can heal the wound faster or it can sink the blade even deeper.",Himura Kenshin,Rurouni Kenshin
"I want you to be happy. I want you to laugh a lot. I don’t know what exactly I’ll be able to do for you, but I’ll always be by your side.",Kagome,InuYasha
"“A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.”",Edward Elric ,Fullmetal Alchemist: Brotherhood
You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.,Roronoa Zoro,One Piece
"I too will obtain everything that I desire. Not because someone asked me to do it, but because I know in my heart that I have something worth fighting for.",Julis Alexia Van Riessfeld,Asterisk War
You can’t win a game by doing nothing. And if someone else wins it for you then you haven’t accomplished anything. Life is the same way.,Junichirou Kagami,Denpa Kyoushi
"Do not think about other things, there is only one thing you can do. So master that one thing. Do not forget. What you must imagine is always that you, yourself, are the strongest. You do not need outside enemies. For you, the one you have to fight is none other than your own image.",Archer,Fate Stay Night
"Life is like a tube of toothpaste. When you’ve used all the toothpaste down to the last squeeze, that’s when you’ve really lived. Live with all your might, and struggle as long as you have life.”",Mion Sonozaki,Higurashi
"Just like games, no matter how well you have things lined up in your life, there’s always something to keep you on your toes.",Junichirou Kagami,Denpa Kyoushi
Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness.,Gilgamesh,Fate Zero
It Doesn t Matter How Strong The Opposition Is It Doesn t Matter How Fearsome The World Is It Doesn t Matter How Cruel The World Is Fight,Eren,Attack on Titan
If There Are Humans Who Can Bring About Change They re Those Who Are Capable Of Abandoning Everything People Who When Required To Surpass Even Monsters Are Capable Of Tossing Aside Their Very Humanity,Armin Arlert,Attack on Titan
I Don t Like The Terms Good Person or Bad Person It Is Impossible To Be Entirely Good To Everyone To Some You Are A Good Person While To Others You Are A Bad Person,Armin Arlert,Attack on Titan
As Long As We Continue To Fight We Are Not Defeated,Miche Zacharius,Attack on Titan
If You Win You Live If You Lose You Die If You Don t Fight You Can t Win,Eren,Attack on Titan
You Understand Don t You One Day Or Another Everyone You Care About Eventually Dies It s Something We Simply Can t Accept It s A Realization That Could Drive You Insane,Hange Zoë,Attack on Titan
You re Gonna Care What Other People Think And Be Someone You re Not Your Whole Life You re Fine As You Are So Talk In Your Own Words,Ymir,Attack on Titan
Everyone Had To Be Drunk On Somethin To Keep Pushing On Everyone Was A Slave To Somethin,Kenny Ackerman,Attack on Titan
This World Is Cruel And It s Also Very Beautiful,Mikasa,Attack on Titan
No One Knows What The Outcome Will Be So Choose Whatever You ll Regret The Least,Levi Ackerman,Attack on Titan
Do you need a reason to not want to lose,Shoyo Hinata,Haikyuu
Being the best decoy ever is as cool as being the ace,Tobio Kageyama,Haikyuu
You can fly even higher,Tobio Kageyama,Haikyuu
If they adjust to me I have to adjust in turn Whoever stops adjusting won t be able to continue forward,Tobio Kageyama,Haikyuu
The last ones standing are the victors Only the strongest If you want to be the last one standing become strong,Tobio Kageyama,Haikyuu
Life s a bore if you don t challenge yourself,Yuu Nishinoya,Haikyuu
There are some flowers you only see when you take detours,Tanaka Saeko,Haikyuu
Being weak means that there is room to grow,Ittetsu Takeda,Haikyuu
Today might be the chance to grasp the chance to let your talent bloom,Tooru Oikawa,Haikyuu
If you re gonna hit it hit it until it breaks,Tooru Oikawa,Haikyuu`;
  var data = papaparse.parse(csv_data);
  return data?.data;
}

/**
 * Array with Quote, Character Name, Anime Name
 * @returns Single Quote as an array
 */
function get_random_quote() {
  var data = quote_data();
  var max = data.length;
  var min = 0;
  var quote_index = Math.floor(Math.random() * (max - min)) + min;
  return data[quote_index];
}

export default function Home() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentWrong, setCurrentWrong] = useState(0);
  const [seenQuotes, setSeenQuotes] = useState([]);

  const [currentQuote, setCurrentQuote] = useState("");
  const [currentCorrectAnime, setCorrectAnime] = useState("");
  const [currentIncorrectAnime, setIncorrectAnime] = useState("");
  const [correctOnLeft, setCorrectOnLeft] = useState(false);

  useEffect(() => {
    document.title = "Guess Anime Quote"
  }, [])

  useEffect(() => {
    var tempQuote = get_random_quote();
    while (tempQuote[0] in seenQuotes) {
      tempQuote = get_random_quote();
    }
    setCurrentQuote(tempQuote[0]);
    setCorrectAnime(tempQuote[2]);
    setSeenQuotes(seenQuotes.concat(tempQuote[0]));

    var tempIncorrectQuote = get_random_quote();
    while (tempIncorrectQuote[2] == tempQuote[2]) {
      tempIncorrectQuote = get_random_quote();
    }
    setIncorrectAnime(tempIncorrectQuote[2])

    setCorrectOnLeft(Math.floor(Math.random() * 10) < 5);
  }, [currentScore, currentWrong])

  function QuoteOptions() {
    var correctButton = (
    <button key={1} onClick={() => { setCurrentScore(currentScore + 1); setHighScore(Math.max(highScore, currentScore+1)) }}>
      {currentCorrectAnime}
    </button>)

    var incorrectButton = (
    <button key={2} onClick={() => { setCurrentScore(0); setCurrentWrong(currentWrong + 1); setHighScore(Math.max(highScore, currentScore)) }}>
      {currentIncorrectAnime}
    </button>)

    var output_list = [];

    if (correctOnLeft) {
      output_list.push(correctButton);
      output_list.push(incorrectButton);
    } else {
      output_list.push(incorrectButton);
      output_list.push(correctButton);
    }
    return (
      <div className="grid grid-cols-2 grid-flow-row gap-x-4 h-64 text-5xl">
        {output_list}
      </div>
    )
  }

  return (
    <div className="grid justify-center gap-y-6 py-4">
      <div className="grid grid-rows-2 grid-flow-col justify-center text-2xl">
        <div>High Score: {highScore}</div>
        <div>Current Score: {currentScore}</div>
      </div>

      <div className="flex justify-center text-6xl text-red-600">
      {(currentScore == 0 && seenQuotes.length > 1) ? (<div>Try Again</div>) : (<div></div>)}
      </div>

      <div className="w-screen px-4">
        <div className="flex justify-center text-2xl text-orange-700">
          In What Anime Did a Character Say This Quote?
        </div>
        <div className="flex justify-center text-4xl text-violet-500 h-48">
          {currentQuote}
        </div>

        {/* {correctOnLeft ? (
          <>
            <button onClick={() => { setCurrentScore(currentScore + 1); setHighScore(Math.max(highScore, currentScore)) }}>
              Correct:{currentCorrectAnime}
            </button><button onClick={() => { setCurrentScore(0); setCurrentWrong(currentWrong + 1); setHighScore(Math.max(highScore, currentScore)) }}>
              Incorrect:{currentIncorrectAnime}
            </button>
          </>
        ) : (
          <>
            <button onClick={() => { setCurrentScore(0); setCurrentWrong(currentWrong + 1); setHighScore(Math.max(highScore, currentScore)) }}>
              Incorrect:{currentIncorrectAnime}
            </button><button onClick={() => { setCurrentScore(currentScore + 1); setHighScore(Math.max(highScore, currentScore)) }}>
              Correct:{currentCorrectAnime}
            </button>
          </>
        )} */}
        <QuoteOptions />

      </div>
    </div>
  );
}
