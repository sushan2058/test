"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Check } from "lucide-react"

export default function ProfileSetupPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Details
    age: "",
    gender: "",
    height: "",
    weight: "",
    bodyType: "",
    fitnessLevel: "",

    // Health Information
    allergies: "",
    dietaryRestrictions: [] as string[],
    medicalConditions: "",

    // Fitness Goals
    primaryGoal: "",
    secondaryGoals: [] as string[],
    targetTimeline: "",

    // Availability & Preferences
    workoutDays: [] as string[],
    workoutTime: "",
    workoutDuration: "",
    workoutLocation: "",
    equipment: "",
    mealPlanPreferences: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[]
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] }
      } else {
        return { ...prev, [name]: currentValues.filter((item) => item !== value) }
      }
    })
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    } else {
      // Submit the form
      localStorage.setItem("userProfileData", JSON.stringify(formData))
      toast({
        title: "Profile Setup Complete",
        description: "Your personalized fitness plan is ready!",
      })
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#7D3C98]">ApexFitness</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Let's set up your profile</h2>
          <p className="text-gray-500 mt-2">
            We'll use this information to create personalized fitness and diet plans for you.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4">
            <StepIndicator step={1} currentStep={currentStep} label="Personal Details" />
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <StepIndicator step={2} currentStep={currentStep} label="Health Information" />
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <StepIndicator step={3} currentStep={currentStep} label="Fitness Goals" />
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <StepIndicator step={4} currentStep={currentStep} label="Availability & Preferences" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
              <p className="text-gray-500 mb-6">Tell us about yourself so we can personalize your experience.</p>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleRadioChange("gender", value)}
                    className="flex space-x-6 mt-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      placeholder="Enter your height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      placeholder="Enter your weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bodyType">Body Type</Label>
                  <Select value={formData.bodyType} onValueChange={(value) => handleSelectChange("bodyType", value)}>
                    <SelectTrigger id="bodyType" className="mt-1">
                      <SelectValue placeholder="Select your body type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ectomorph">Ectomorph (Slim)</SelectItem>
                      <SelectItem value="mesomorph">Mesomorph (Athletic)</SelectItem>
                      <SelectItem value="endomorph">Endomorph (Solid)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fitnessLevel">Fitness Level</Label>
                  <Select
                    value={formData.fitnessLevel}
                    onValueChange={(value) => handleSelectChange("fitnessLevel", value)}
                  >
                    <SelectTrigger id="fitnessLevel" className="mt-1">
                      <SelectValue placeholder="Select your fitness level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Health Information */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Health Information</h3>
              <p className="text-gray-500 mb-6">Help us understand your health needs and restrictions.</p>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    name="allergies"
                    placeholder="List any food or other allergies (if none, type 'None')"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Dietary Restrictions</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="vegan"
                        checked={formData.dietaryRestrictions.includes("vegan")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "vegan", checked as boolean)
                        }
                      />
                      <Label htmlFor="vegan">Vegan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="vegetarian"
                        checked={formData.dietaryRestrictions.includes("vegetarian")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "vegetarian", checked as boolean)
                        }
                      />
                      <Label htmlFor="vegetarian">Vegetarian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="gluten-free"
                        checked={formData.dietaryRestrictions.includes("gluten-free")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "gluten-free", checked as boolean)
                        }
                      />
                      <Label htmlFor="gluten-free">Gluten-free</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="dairy-free"
                        checked={formData.dietaryRestrictions.includes("dairy-free")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "dairy-free", checked as boolean)
                        }
                      />
                      <Label htmlFor="dairy-free">Dairy-free</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="keto"
                        checked={formData.dietaryRestrictions.includes("keto")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "keto", checked as boolean)
                        }
                      />
                      <Label htmlFor="keto">Keto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="paleo"
                        checked={formData.dietaryRestrictions.includes("paleo")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "paleo", checked as boolean)
                        }
                      />
                      <Label htmlFor="paleo">Paleo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="low-carb"
                        checked={formData.dietaryRestrictions.includes("low-carb")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "low-carb", checked as boolean)
                        }
                      />
                      <Label htmlFor="low-carb">Low-carb</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="low-fat"
                        checked={formData.dietaryRestrictions.includes("low-fat")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dietaryRestrictions", "low-fat", checked as boolean)
                        }
                      />
                      <Label htmlFor="low-fat">Low-fat</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="medicalConditions">Medical Conditions (Optional)</Label>
                  <Textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    placeholder="List any medical conditions that might affect your fitness routine (e.g., Hypertension, Diabetes)"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Fitness Goals */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Fitness Goals</h3>
              <p className="text-gray-500 mb-6">What are you looking to achieve with ApexFitness?</p>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="primaryGoal">Primary Goal</Label>
                  <Select
                    value={formData.primaryGoal}
                    onValueChange={(value) => handleSelectChange("primaryGoal", value)}
                  >
                    <SelectTrigger id="primaryGoal" className="mt-1">
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose-weight">Lose Weight</SelectItem>
                      <SelectItem value="build-muscle">Build Muscle</SelectItem>
                      <SelectItem value="improve-fitness">Improve Overall Fitness</SelectItem>
                      <SelectItem value="increase-endurance">Increase Endurance</SelectItem>
                      <SelectItem value="improve-flexibility">Improve Flexibility</SelectItem>
                      <SelectItem value="maintain-health">Maintain Health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block">Secondary Goals (Optional)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="improve-strength"
                        checked={formData.secondaryGoals.includes("improve-strength")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("secondaryGoals", "improve-strength", checked as boolean)
                        }
                      />
                      <Label htmlFor="improve-strength">Improve strength</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="increase-flexibility"
                        checked={formData.secondaryGoals.includes("increase-flexibility")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("secondaryGoals", "increase-flexibility", checked as boolean)
                        }
                      />
                      <Label htmlFor="increase-flexibility">Increase flexibility</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="better-posture"
                        checked={formData.secondaryGoals.includes("better-posture")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("secondaryGoals", "better-posture", checked as boolean)
                        }
                      />
                      <Label htmlFor="better-posture">Better posture</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="reduce-stress"
                        checked={formData.secondaryGoals.includes("reduce-stress")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("secondaryGoals", "reduce-stress", checked as boolean)
                        }
                      />
                      <Label htmlFor="reduce-stress">Reduce stress</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="improve-sleep"
                        checked={formData.secondaryGoals.includes("improve-sleep")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("secondaryGoals", "improve-sleep", checked as boolean)
                        }
                      />
                      <Label htmlFor="improve-sleep">Improve sleep</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="increase-energy"
                        checked={formData.secondaryGoals.includes("increase-energy")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("secondaryGoals", "increase-energy", checked as boolean)
                        }
                      />
                      <Label htmlFor="increase-energy">Increase energy</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="targetTimeline">Target Timeline</Label>
                  <Select
                    value={formData.targetTimeline}
                    onValueChange={(value) => handleSelectChange("targetTimeline", value)}
                  >
                    <SelectTrigger id="targetTimeline" className="mt-1">
                      <SelectValue placeholder="Select your target timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="3-months">3 months</SelectItem>
                      <SelectItem value="6-months">6 months</SelectItem>
                      <SelectItem value="1-year">1 year</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Availability & Preferences */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Availability & Preferences</h3>
              <p className="text-gray-500 mb-6">Let us know when and how you prefer to work out.</p>

              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">Preferred Workout Days</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="monday"
                        checked={formData.workoutDays.includes("monday")}
                        onCheckedChange={(checked) => handleCheckboxChange("workoutDays", "monday", checked as boolean)}
                      />
                      <Label htmlFor="monday">Monday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="tuesday"
                        checked={formData.workoutDays.includes("tuesday")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("workoutDays", "tuesday", checked as boolean)
                        }
                      />
                      <Label htmlFor="tuesday">Tuesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="wednesday"
                        checked={formData.workoutDays.includes("wednesday")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("workoutDays", "wednesday", checked as boolean)
                        }
                      />
                      <Label htmlFor="wednesday">Wednesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="thursday"
                        checked={formData.workoutDays.includes("thursday")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("workoutDays", "thursday", checked as boolean)
                        }
                      />
                      <Label htmlFor="thursday">Thursday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="friday"
                        checked={formData.workoutDays.includes("friday")}
                        onCheckedChange={(checked) => handleCheckboxChange("workoutDays", "friday", checked as boolean)}
                      />
                      <Label htmlFor="friday">Friday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saturday"
                        checked={formData.workoutDays.includes("saturday")}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("workoutDays", "saturday", checked as boolean)
                        }
                      />
                      <Label htmlFor="saturday">Saturday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sunday"
                        checked={formData.workoutDays.includes("sunday")}
                        onCheckedChange={(checked) => handleCheckboxChange("workoutDays", "sunday", checked as boolean)}
                      />
                      <Label htmlFor="sunday">Sunday</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="workoutTime">Preferred Workout Time</Label>
                  <Select
                    value={formData.workoutTime}
                    onValueChange={(value) => handleSelectChange("workoutTime", value)}
                  >
                    <SelectTrigger id="workoutTime" className="mt-1">
                      <SelectValue placeholder="Select your preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="early-morning">Early Morning (5am-8am)</SelectItem>
                      <SelectItem value="morning">Morning (8am-11am)</SelectItem>
                      <SelectItem value="midday">Midday (11am-2pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (2pm-5pm)</SelectItem>
                      <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                      <SelectItem value="night">Night (8pm-11pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="workoutDuration">Workout Duration</Label>
                  <Select
                    value={formData.workoutDuration}
                    onValueChange={(value) => handleSelectChange("workoutDuration", value)}
                  >
                    <SelectTrigger id="workoutDuration" className="mt-1">
                      <SelectValue placeholder="Select your workout duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15-30min">15-30 minutes</SelectItem>
                      <SelectItem value="30-45min">30-45 minutes</SelectItem>
                      <SelectItem value="45-60min">45-60 minutes</SelectItem>
                      <SelectItem value="60-90min">60-90 minutes</SelectItem>
                      <SelectItem value="90min+">90+ minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Workout Location</Label>
                  <RadioGroup
                    value={formData.workoutLocation}
                    onValueChange={(value) => handleRadioChange("workoutLocation", value)}
                    className="flex space-x-6 mt-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="home" id="home-location" />
                      <Label htmlFor="home-location">Home</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gym" id="gym-location" />
                      <Label htmlFor="gym-location">Gym</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hybrid" id="hybrid-location" />
                      <Label htmlFor="hybrid-location">Hybrid</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="equipment">Equipment Available</Label>
                  <Textarea
                    id="equipment"
                    name="equipment"
                    placeholder="List any equipment you have access to (e.g., dumbbells, resistance bands, treadmill)"
                    value={formData.equipment}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="mealPlanPreferences">Meal Plan Preferences</Label>
                  <Textarea
                    id="mealPlanPreferences"
                    name="mealPlanPreferences"
                    placeholder="Any specific preferences for your meal plans (e.g., meal frequency, portion sizes, cuisine preferences)"
                    value={formData.mealPlanPreferences}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
              Back
            </Button>
            <Button onClick={handleNext} className="bg-[#7D3C98] hover:bg-[#7D3C98]/90">
              {currentStep === 4 ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StepIndicatorProps {
  step: number
  currentStep: number
  label: string
}

function StepIndicator({ step, currentStep, label }: StepIndicatorProps) {
  const isActive = step === currentStep
  const isCompleted = step < currentStep

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isActive ? "bg-[#7D3C98] text-white" : isCompleted ? "bg-[#7D3C98] text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {isCompleted ? <Check className="h-5 w-5" /> : step}
      </div>
      <span className={`text-xs mt-2 ${isActive || isCompleted ? "text-[#7D3C98] font-medium" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  )
}
