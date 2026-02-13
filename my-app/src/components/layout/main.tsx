import React from 'react';
import { useState } from 'react';
import { BuisnessInput } from '../../types/businessInput';



export default function Main(){

    const [input, setInput] = useState<BuisnessInput>({
        revenuePerUnit : "",
        costPerUnit : "",
        numberOfUnit : "",
        fixedCost : "",

    });
  return (
    <div>
      {/* // <!--Main Content--> */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* <!--Input htmlForm and Results Cards--> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* <!--Input htmlForm--> */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Input</h2>
              </div>

              <form className="space-y-4">
                {/* // <!-- Revenue Input --> */}
                <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">Revenue per Unit</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₱</span>
                        <input type="number" id="revenue" name="revenue" placeholder="0.00" step="0.01"
                        value = {input.revenuePerUnit}
                        onChange={(e) => 
                            setInput({...input, revenuePerUnit: e.target.value})
                        }
                            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                </div>

                {/* // <!-- Cost Input --> */}
                <div>
                    <label htmlFor="cost" className="block text-sm font-medium text-gray-700 mb-2">Cost per Unit</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₱</span>
                        <input type="number" id="cost" name="cost" placeholder="0.00" step="0.01"
                        value={input.costPerUnit}
                        onChange={(e) =>
                            setInput({...input, costPerUnit: e.target.value})//...input copies all existing propertis in the object, so nothing gets eraed.
                        }
                            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                </div>

                {/* // <!-- Units Input --> */}
                <div>
                    <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">Number of Units</label>
                    <input type="number" id="units" name="units" placeholder="0"
                        value = {input.numberOfUnit}
                        onChange={(e) => 
                            setInput({...input, numberOfUnit: e.target.value})
                        }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                </div>

                {/* // <!-- Fixed Costs Input --> */}
                <div>
                    <label htmlFor="fixedCosts" className="block text-sm font-medium text-gray-700 mb-2">Fixed Costs</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₱</span>
                        <input type="number" id="fixedCosts" name="fixedCosts" placeholder="0.00" step="0.01"
                            value = {input.fixedCost}
                            onChange={(e) => 
                                setInput({...input, fixedCost: e.target.value})
                            }
                                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                </div>

                {/* // <!-- Calculate Button --> */}
                <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm mt-6">
                    Calculate
                </button>
              </form>
            </div>

            


            {/* <!--Results Cards--> */}
            <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center mb-6">
                        <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        <h2 className="text-xl font-semibold text-gray-800">Results</h2>
                    </div>

                    <div className="space-y-4">
                        {/* <!-- Net Profit --> */}
                        <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r">
                            <p className="text-sm text-green-700 font-medium mb-1">Net Profit</p>
                            <p className="text-3xl font-bold text-green-900">$0.00</p>
                        </div>

                        {/* <!-- Margin Percentage --> */}
                        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r">
                            <p className="text-sm text-blue-700 font-medium mb-1">Profit Margin</p>
                            <p className="text-3xl font-bold text-blue-900">0.0%</p>
                        </div>

                        {/* <!-- Break-even Point --> */}
                        <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r">
                            <p className="text-sm text-purple-700 font-medium mb-1">Break-even Point</p>
                            <p className="text-3xl font-bold text-purple-900">0 units</p>
                        </div>

                        {/* <!-- Revenue --> */}
                        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-r">
                            <p className="text-sm text-indigo-700 font-medium mb-1">Total Revenue</p>
                            <p className="text-3xl font-bold text-indigo-900">$0.00</p>
                        </div>

                        {/* <!-- Total Cost --> */}
                        <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r">
                            <p className="text-sm text-orange-700 font-medium mb-1">Total Cost</p>
                            <p className="text-3xl font-bold text-orange-900">$0.00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Profit vs Units Chart Card --> */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                        </svg>
                        <h2 className="text-xl font-semibold text-gray-800">Profit vs Units Chart</h2>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center" style={{height: '350px'}}>
                    <div className="text-center">
                        <svg className="w-20 h-20 mx-auto mb-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                        </svg>
                        <p className="text-lg font-semibold text-blue-600 mb-1">Line Chart</p>
                        <p className="text-sm text-blue-500">Shows profit trends as units increase</p>
                    </div>
                </div>
            </div>

            {/* <!-- Cost Breakdown Chart Card --> */}
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>
                        <h2 className="text-xl font-semibold text-gray-800">Cost Breakdown Chart</h2>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-dashed border-green-200 flex items-center justify-center" style={{height: '350px'}}>
                    <div className="text-center">
                        <svg className="w-20 h-20 mx-auto mb-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>
                        <p className="text-lg font-semibold text-green-600 mb-1">Pie/Donut Chart</p>
                        <p className="text-sm text-green-500">Displays fixed vs variable costs</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}