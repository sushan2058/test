"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ProgressPage() {
  // Weight tracking state
  const [weightData, setWeightData] = useState({
    startingWeight: 82,
    currentWeight: 78,
    goalWeight: 70,
  })

  // Body measurements state
  const [measurements, setMeasurements] = useState({
    chest: { current: 31, change: -2 },
    waist: { current: 44, change: -2 },
    hips: { current: 46, change: -3 },
    arms: { current: 30, change: -3 },
    thighs: { current: 38, change: -3 },
  })

  // Workout performance state
  const [performance, setPerformance] = useState({
    pushups: { reps: 12, progress: 60 },
    pullups: { reps: 15, progress: 75 },
    squats: { reps: 9, progress: 45 },
    plank: { duration: 3, progress: 60 },
    running: { duration: 4, progress: 40 },
  })

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-[#36454F] mb-2">Your Progress</h1>
      <p className="text-[#708090] mb-8">Track your fitness journey and see how far you've come</p>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-bold text-[#36454F] mb-2">Weight Tracking</h2>
        <p className="text-sm text-[#708090] mb-6">Track your weight progress over time</p>

        <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg mb-6">
          <p className="text-[#708090]">Weight chart would be displayed here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-medium text-[#708090] mb-1">Starting Weight</h3>
            <p className="text-xl font-bold text-[#36454F]">{weightData.startingWeight} kg</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#708090] mb-1">Current Weight</h3>
            <p className="text-xl font-bold text-[#36454F]">{weightData.currentWeight} kg</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#708090] mb-1">Goal Weight</h3>
            <p className="text-xl font-bold text-[#36454F]">{weightData.goalWeight} kg</p>
          </div>
        </div>

        <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">Update Weight</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-[#36454F] mb-2">Body Measurements</h2>
          <p className="text-sm text-[#708090] mb-6">Track your body measurements</p>

          <div className="space-y-4 mb-6">
            {Object.entries(measurements).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="capitalize">{key}</span>
                <div className="flex items-center">
                  <span className="font-bold">{value.current} cm</span>
                  <span className={`text-xs ml-2 ${value.change < 0 ? "text-green-500" : "text-red-500"}`}>
                    {value.change < 0 ? value.change : `+${value.change}`} cm
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">Update Measurements</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-[#36454F] mb-2">Workout Performance</h2>
          <p className="text-sm text-[#708090] mb-6">Track your workout performance</p>

          <div className="space-y-4">
            {Object.entries(performance).map(([key, value]) => (
              <div key={key}>
                <div className="flex justify-between mb-1">
                  <span className="capitalize">{key}</span>
                  <span className="font-bold">
                    {key === "plank" || key === "running" ? `${value.duration} min` : `${value.reps} reps`}
                  </span>
                </div>
                <Progress value={value.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
