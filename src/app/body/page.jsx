"use client"
import { useState } from "react";

function Body() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h || w <= 0 || h <= 0) {
      alert("Please enter valid weight and height.");
      return;
    }

    const bmiValue = (w / (h * h)).toFixed(1);
    setBmi(bmiValue);

    let bmiCategory = "";
    let bmiRecommendation = "";

    if (bmiValue < 18.5) {
      bmiCategory = "Underweight";
      bmiRecommendation =
        "You may need to gain weight. Consider a nutrient-rich diet and consult a health professional.";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      bmiCategory = "Normal Weight";
      bmiRecommendation =
        "Great! You're in the healthy weight range. Maintain your current lifestyle with regular exercise and a balanced diet.";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      bmiCategory = "Overweight";
      bmiRecommendation =
        "You might benefit from a healthier diet and more physical activity. Consider consulting with a health expert.";
    } else {
      bmiCategory = "Obese";
      bmiRecommendation =
        "Health risk is higher. Seek advice from a medical professional and adopt a structured weight loss plan.";
    }

    setCategory(bmiCategory);
    setRecommendation(bmiRecommendation);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* BMI Form */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-6">
            Calculate Your BMI
          </h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Weight</label>
            <div className="flex">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="flex-grow px-4 py-2 border rounded-l-md bg-blue-50 focus:outline-none"
              />
              <span className="border border-l-0 rounded-r-md px-3 flex items-center bg-white">
                kg
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Height</label>
            <div className="flex">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="flex-grow px-4 py-2 border rounded-l-md bg-blue-50 focus:outline-none"
              />
              <span className="border border-l-0 rounded-r-md px-3 flex items-center bg-white">
                cm
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Age (optional)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full px-4 py-2 border rounded-md bg-blue-50 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">Gender (optional)</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Calculate BMI
          </button>
        </div>

        {/* BMI Result */}
        {bmi && (
          <div className="w-full lg:w-1/2 flex-col bg-white rounded-xl shadow-md">
            <div className="bg-red-500 text-white text-center p-6 rounded-t-xl">
              <p className="text-sm">Your BMI</p>
              <p className="text-4xl font-bold">{bmi}</p>
            </div>
            <div className="text-center p-6">
              <p className="font-semibold text-lg mb-4">{category}</p>
              <div className="flex justify-center gap-2 text-white text-sm font-medium mb-4">
                <span className="bg-blue-500 px-3 py-1 rounded-md">
                  Underweight
                  <br />
                  &lt; 18.5
                </span>
                <span className="bg-green-500 px-3 py-1 rounded-md">
                  Normal
                  <br />
                  18.5 - 24.9
                </span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-md">
                  Overweight
                  <br />
                  25.0 - 29.9
                </span>
                <span className="bg-red-500 px-3 py-1 rounded-md">
                  Obese
                  <br />
                  ≥ 30
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                value={bmi}
                readOnly
                className="w-full accent-green-500"
              />
            </div>
            <div className="px-6 pb-6">
              <h4 className="font-semibold mb-1">Recommendations</h4>
              <p className="text-gray-600 text-sm">{recommendation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
