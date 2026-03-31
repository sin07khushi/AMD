// App.js (React)
import React, { useState } from 'react';

const FoodApp = () => {
  const [meal, setMeal] = useState('');
  const [feedback, setFeedback] = useState(null);

  const analyzeMeal = () => {
    // In a real app, this would call an AI or Nutrition API
    const hour = new Date().getHours();
    let advice = "";

    if (meal.toLowerCase().includes('pizza')) {
      advice = "High glycemic index. Try adding a side salad to blunt the glucose spike! 🥗";
    } else if (meal.toLowerCase().includes('salad')) {
      advice = "Great choice! Ensure you have a protein source for sustained energy. 💪";
    } else {
      advice = "Nutrient profile recorded. Stay hydrated! 💧";
    }

    setFeedback({
      score: Math.floor(Math.random() * 40) + 60, // Mock score
      contextualAdvice: hour > 20 ? "Note: Eating heavy this late may affect sleep quality." : advice
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <header className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-2">NutriPulse</h1>
        <p className="text-gray-400">Context-aware health tracking powered by AMD Slingshot.</p>
      </header>

      <main className="max-w-md mx-auto bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700">
        <label className="block mb-4 text-sm font-medium">What are you eating?</label>
        <input 
          type="text" 
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none transition"
          placeholder="e.g., Grilled Chicken Salad"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
        <button 
          onClick={analyzeMeal}
          className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition"
        >
          Analyze Impact
        </button>

        {feedback && (
          <div className="mt-8 p-4 bg-gray-900 rounded-xl border-l-4 border-orange-500 animate-pulse">
            <h3 className="text-lg font-bold">Health Impact Score: {feedback.score}/100</h3>
            <p className="text-gray-300 mt-2 italic">"{feedback.contextualAdvice}"</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default FoodApp;