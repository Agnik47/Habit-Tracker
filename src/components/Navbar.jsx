import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const quotes = [
    " ''The best way to get started is to quit talking and begin doing.''",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Don’t let yesterday take up too much of today.",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it."
  ];
  
const Navbar = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-64 bg-gray-800 p-5 flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-4">
        <h2 className="text-2xl font-bold">Don't Forget</h2>
        <button onClick={toggleTheme} className="text-xl">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
        </button>
      </div>
      <p className="text-center italic animate-fade-in">{currentQuote}</p>
      <div className="mt-8 w-full">
        <h3 className="text-xl font-bold mb-2">Navigation</h3>
        <ul className="space-y-4">
          <li>
            <a href="#home" className="block text-white hover:text-blue-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#statistics" className="block text-white hover:text-blue-500 transition duration-300">Statistics</a>
          </li>
          <li>
            <a href="#community" className="block text-white hover:text-blue-500 transition duration-300">Community</a>
          </li>
        </ul>
      </div>
      <div className="mt-8 w-full">
        <h3 className="text-xl font-bold mb-2">Quick Add</h3>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="New habit"
            className="p-2 mb-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </form>
      </div>
      <div className="mt-8">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
