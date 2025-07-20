const BMI = () => {
    return (
        <section class="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 bg-gray-50">
            <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 class="text-2xl font-bold text-center mb-6">Calculate Your BMI</h2>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Weight</label>
                    <div class="flex">
                        <input type="number" placeholder="Enter your weight" class="flex-grow px-4 py-2 border rounded-l-md focus:outline-none" />
                        <select class="border border-l-0 rounded-r-md px-2 bg-white">
                            <option>kg</option>
                            <option>lbs</option>
                        </select>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Height</label>
                    <div class="flex">
                        <input type="number" placeholder="Enter your height" class="flex-grow px-4 py-2 border rounded-l-md focus:outline-none" />
                        <select class="border border-l-0 rounded-r-md px-2 bg-white">
                            <option>cm</option>
                            <option>inches</option>
                        </select>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Age (optional)</label>
                    <input type="number" placeholder="Enter your age" class="w-full px-4 py-2 border rounded-md focus:outline-none" />
                </div>

                <div class="mb-6">
                    <label class="block font-medium mb-1">Gender (optional)</label>
                    <select class="w-full px-4 py-2 border rounded-md bg-white focus:outline-none">
                        <option>Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <button class="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition">
                    Calculate BMI
                </button>
            </div>

            <div class="text-center max-w-md">
                <div class="flex justify-center mb-4">
                    <img src="https://img.icons8.com/ios-filled/50/fa314a/calculator.png" alt="Calculator Icon" class="w-12 h-12" />
                </div>
                <h3 class="text-lg font-semibold mb-2">Ready to Calculate?</h3>
                <p class="text-gray-600">
                    Enter your weight and height to calculate your BMI and get personalized health insights.
                </p>
            </div>
        </section>
    );
}
export default BMI;