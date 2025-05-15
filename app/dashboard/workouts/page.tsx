"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Dumbbell, Filter, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

type WorkoutPlan = {
  id: string
  name: string
  description: string
  progress: number
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: "Strength" | "Cardio" | "Flexibility" | "Weight Loss"
}

type ScheduledWorkout = {
  id: string
  name: string
  date: Date
  time: string
  duration: string
  completed: boolean
}

export default function WorkoutsPage() {
  const [activeTab, setActiveTab] = useState("plans")

  // Workout plans data
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([
    {
      id: "1",
      name: "Weight Loss Program",
      description: "A 12-week program designed to help you lose weight and improve fitness",
      progress: 65,
      duration: "45-60 min",
      difficulty: "Intermediate",
      category: "Weight Loss",
    },
    {
      id: "2",
      name: "Strength Training",
      description: "Build muscle and increase strength with this 8-week program",
      progress: 30,
      duration: "60 min",
      difficulty: "Intermediate",
      category: "Strength",
    },
    {
      id: "3",
      name: "HIIT Cardio",
      description: "High-intensity interval training to boost your cardio fitness",
      progress: 45,
      duration: "30 min",
      difficulty: "Advanced",
      category: "Cardio",
    },
    {
      id: "4",
      name: "Beginner Fitness",
      description: "Perfect for those just starting their fitness journey",
      progress: 20,
      duration: "30-45 min",
      difficulty: "Beginner",
      category: "Strength",
    },
    {
      id: "5",
      name: "Flexibility & Mobility",
      description: "Improve your range of motion and prevent injuries",
      progress: 50,
      duration: "40 min",
      difficulty: "Beginner",
      category: "Flexibility",
    },
  ])

  // Scheduled workouts data
  const [scheduledWorkouts, setScheduledWorkouts] = useState<ScheduledWorkout[]>([
    {
      id: "1",
      name: "Upper Body Strength",
      date: new Date(2025, 4, 16),
      time: "10:00 AM",
      duration: "45 min",
      completed: false,
    },
    {
      id: "2",
      name: "HIIT Session",
      date: new Date(2025, 4, 17),
      time: "6:00 PM",
      duration: "30 min",
      completed: false,
    },
    {
      id: "3",
      name: "Lower Body Focus",
      date: new Date(2025, 4, 18),
      time: "11:00 AM",
      duration: "50 min",
      completed: false,
    },
    {
      id: "4",
      name: "Core & Flexibility",
      date: new Date(2025, 4, 20),
      time: "9:00 AM",
      duration: "40 min",
      completed: false,
    },
  ])

  // Format date to display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  // Check if workout is today
  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#36454F]">Your Workouts</h1>
          <p className="text-[#708090]">Manage your workout plans and schedule</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90 flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>New Workout</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="plans" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="plans" className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]">
            Workout Plans
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Schedule
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            History
          </TabsTrigger>
        </TabsList>

        {/* Workout Plans Tab */}
        <TabsContent value="plans">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search workout plans..." className="pl-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workoutPlans.map((plan) => (
              <div key={plan.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#36454F]">{plan.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      plan.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : plan.difficulty === "Intermediate"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {plan.difficulty}
                  </span>
                </div>

                <p className="text-sm text-[#708090] mb-4">{plan.description}</p>

                <div className="flex items-center justify-between text-sm mb-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-400" />
                    <span>{plan.duration}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      plan.category === "Strength"
                        ? "bg-purple-100 text-purple-800"
                        : plan.category === "Cardio"
                          ? "bg-red-100 text-red-800"
                          : plan.category === "Flexibility"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                    }`}
                  >
                    {plan.category}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{plan.progress}%</span>
                  </div>
                  <Progress value={plan.progress} className="h-2" />
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-[#7D3C98] hover:bg-[#7D3C98]/90">Start Workout</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-bold text-[#36454F] mb-4">Upcoming Workouts</h2>

            <div className="space-y-4">
              {scheduledWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className={`flex items-center p-4 rounded-lg border ${
                    isToday(workout.date) ? "border-[#7D3C98] bg-[#7D3C98]/5" : "border-gray-200"
                  }`}
                >
                  <div className="bg-[#7D3C98]/10 p-2 rounded-lg mr-4 text-center min-w-[60px]">
                    <p className="text-xs text-[#708090]">{formatDate(workout.date).split(" ")[0]}</p>
                    <p className="font-bold text-[#36454F]">
                      {formatDate(workout.date).split(" ")[1]} {formatDate(workout.date).split(" ")[2]}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-[#36454F]">{workout.name}</h3>
                    <div className="flex items-center text-sm text-[#708090] mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>
                        {workout.time} • {workout.duration}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant={isToday(workout.date) ? "default" : "outline"}
                    className={isToday(workout.date) ? "bg-[#7D3C98] hover:bg-[#7D3C98]/90" : ""}
                  >
                    {isToday(workout.date) ? "Start" : "View"}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>View Full Calendar</span>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#36454F]">Quick Add</h2>
              <Button size="sm" className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {["Upper Body", "Lower Body", "Core", "Cardio", "Full Body", "Rest Day"].map((type) => (
                <div key={type} className="border rounded-lg p-3 flex items-center cursor-pointer hover:bg-gray-50">
                  <Dumbbell className="h-5 w-5 text-[#7D3C98] mr-2" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#36454F] mb-4">Workout History</h2>

            <div className="space-y-4">
              {[...Array(5)].map((_, index) => {
                const date = new Date()
                date.setDate(date.getDate() - (index + 1))

                return (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-[#36454F]">
                        {
                          ["Upper Body Strength", "HIIT Cardio", "Lower Body Focus", "Core & Flexibility", "Rest Day"][
                            index % 5
                          ]
                        }
                      </h3>
                      <span className="text-sm text-[#708090]">{formatDate(date)}</span>
                    </div>

                    <div className="flex items-center text-sm text-[#708090] mb-3">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{["45", "30", "50", "40", "0"][index % 5]} minutes</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Intensity:</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full ${
                                i < [4, 3, 5, 2, 0][index % 5] ? "bg-[#7D3C98]" : "bg-gray-200"
                              } ${i > 0 ? "-ml-1" : ""}`}
                            />
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
