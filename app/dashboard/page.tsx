"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [userName, setUserName] = useState("John")
  const [activeTab, setActiveTab] = useState("home")

  useEffect(() => {
    // Get user's first name from localStorage
    const storedUserName = localStorage.getItem("userName") || "John Doe"
    const firstName = storedUserName.split(" ")[0]
    setUserName(firstName)
  }, [])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#36454F]">Welcome back, {userName}!</h1>
        <p className="text-[#708090]">Here's an overview of your fitness journey</p>
      </div>

      <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="bg-white border">
          <TabsTrigger value="home" className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]">
            Home
          </TabsTrigger>
          <TabsTrigger
            value="progress"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Progress
          </TabsTrigger>
          <TabsTrigger
            value="fitbit"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Fitbit
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-[#708090] mb-1">Workouts Completed</h3>
              <div className="text-3xl font-bold text-[#36454F]">12</div>
              <p className="text-xs text-green-500 mt-1">+2 from last week</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-[#708090] mb-1">Current Streak</h3>
              <div className="text-3xl font-bold text-[#36454F]">5 days</div>
              <p className="text-xs text-[#708090] mt-1">Keep it up!</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-[#708090] mb-1">Goal Progress</h3>
              <div className="text-3xl font-bold text-[#36454F]">68%</div>
              <Progress value={68} className="h-2 mt-2" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#36454F] mb-4">Your Workout Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#36454F]">Weight Loss Program</h3>
              <p className="text-sm text-[#708090] mb-4">
                A 12-week program designed to help you lose weight and improve fitness
              </p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button className="flex-1 bg-[#7D3C98] hover:bg-[#7D3C98]/90">Start Workout</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#36454F]">Strength Training</h3>
              <p className="text-sm text-[#708090] mb-4">Build muscle and increase strength with this 8-week program</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button className="flex-1 bg-[#7D3C98] hover:bg-[#7D3C98]/90">Start Workout</Button>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#36454F] mb-4">Today's Meal Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#36454F] mb-3">Breakfast</h3>
              <p className="font-medium text-[#36454F]">Protein Oatmeal with Berries</p>
              <p className="text-sm text-[#708090] mb-3">320 calories</p>

              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Protein</span>
                  <span>18g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Carbs</span>
                  <span>42g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fat</span>
                  <span>8g</span>
                </div>
              </div>

              <Button variant="link" className="p-0 h-auto text-[#7D3C98]">
                View Recipe
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#36454F] mb-3">Lunch</h3>
              <p className="font-medium text-[#36454F]">Grilled Chicken Salad</p>
              <p className="text-sm text-[#708090] mb-3">450 calories</p>

              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Protein</span>
                  <span>35g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Carbs</span>
                  <span>25g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fat</span>
                  <span>22g</span>
                </div>
              </div>

              <Button variant="link" className="p-0 h-auto text-[#7D3C98]">
                View Recipe
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#36454F] mb-3">Dinner</h3>
              <p className="font-medium text-[#36454F]">Salmon with Roasted Vegetables</p>
              <p className="text-sm text-[#708090] mb-3">520 calories</p>

              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Protein</span>
                  <span>32g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Carbs</span>
                  <span>30g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fat</span>
                  <span>28g</span>
                </div>
              </div>

              <Button variant="link" className="p-0 h-auto text-[#7D3C98]">
                View Recipe
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-bold text-[#36454F] mb-2">Weight Tracking</h2>
            <p className="text-sm text-[#708090] mb-6">Track your weight progress over time</p>

            <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg mb-6">
              <p className="text-[#708090]">Weight chart would be displayed here</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-[#708090] mb-1">Starting Weight</h3>
                <p className="text-xl font-bold text-[#36454F]">82 kg</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#708090] mb-1">Current Weight</h3>
                <p className="text-xl font-bold text-[#36454F]">78 kg</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#708090] mb-1">Goal Weight</h3>
                <p className="text-xl font-bold text-[#36454F]">70 kg</p>
              </div>
            </div>

            <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">Update Weight</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#36454F] mb-2">Body Measurements</h2>
              <p className="text-sm text-[#708090] mb-6">Track your body measurements</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span>Chest</span>
                  <div className="flex items-center">
                    <span className="font-bold">31 cm</span>
                    <span className="text-xs text-green-500 ml-2">-2 cm</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Waist</span>
                  <div className="flex items-center">
                    <span className="font-bold">44 cm</span>
                    <span className="text-xs text-green-500 ml-2">-2 cm</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Hips</span>
                  <div className="flex items-center">
                    <span className="font-bold">46 cm</span>
                    <span className="text-xs text-green-500 ml-2">-3 cm</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Arms</span>
                  <div className="flex items-center">
                    <span className="font-bold">30 cm</span>
                    <span className="text-xs text-green-500 ml-2">-3 cm</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Thighs</span>
                  <div className="flex items-center">
                    <span className="font-bold">38 cm</span>
                    <span className="text-xs text-green-500 ml-2">-3 cm</span>
                  </div>
                </div>
              </div>

              <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">Update Measurements</Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#36454F] mb-2">Workout Performance</h2>
              <p className="text-sm text-[#708090] mb-6">Track your workout performance</p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Push-ups</span>
                    <span className="font-bold">12 reps</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Pull-ups</span>
                    <span className="font-bold">15 reps</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Squats</span>
                    <span className="font-bold">9 reps</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Plank</span>
                    <span className="font-bold">3 min</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Running</span>
                    <span className="font-bold">4 min</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="fitbit" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-bold text-[#36454F] mb-2">Fitbit Integration</h2>
            <p className="text-sm text-[#708090] mb-6">Connect your Fitbit device to track your health metrics</p>

            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 bg-[#7D3C98]/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7D3C98"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" />
                  <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#36454F] mb-2">Connect Your Fitbit</h3>
              <p className="text-sm text-[#708090] text-center max-w-md mb-4">
                Sync your Fitbit data to get more accurate health insights and personalized recommendations.
              </p>
              <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">Connect Fitbit</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-[#708090] mb-1">Steps Today</h3>
              <div className="text-3xl font-bold text-[#36454F]">8,432</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-[#708090]">Goal: 10,000</span>
                <span className="text-xs text-green-500">84% complete</span>
              </div>
              <Progress value={84} className="h-2 mt-1" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-[#708090] mb-1">Heart Rate</h3>
              <div className="text-3xl font-bold text-[#36454F]">72 bpm</div>
              <p className="text-xs text-[#708090] mt-2">Resting heart rate</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-[#708090] mb-1">Sleep</h3>
              <div className="text-3xl font-bold text-[#36454F]">7h 12m</div>
              <p className="text-xs text-[#708090] mt-2">Last night</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#36454F] mb-2">Activity Overview</h2>
            <p className="text-sm text-[#708090] mb-6">Your activity data from Fitbit</p>

            <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-[#708090]">Activity chart would be displayed here</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
