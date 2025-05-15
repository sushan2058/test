"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI fitness assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "I'd recommend focusing on compound exercises like squats, deadlifts, and bench press to maximize your strength gains.",
        "Based on your goals, a mix of cardio and strength training would be ideal. Try 3 days of strength and 2 days of cardio per week.",
        "Make sure you're getting enough protein to support muscle recovery. Aim for about 1.6-2.2g per kg of bodyweight.",
        "Rest is just as important as exercise! Make sure you're getting 7-9 hours of quality sleep each night.",
        "Have you tried tracking your macros? It can be really helpful for understanding your nutrition better.",
        "For weight loss, focus on creating a calorie deficit through a combination of diet and exercise.",
        "Remember to stay hydrated during your workouts! Aim for at least 500ml of water per hour of exercise.",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const suggestedQuestions = [
    "What should I eat before a workout?",
    "How can I improve my sleep quality?",
    "Can you suggest exercises for lower back pain?",
    "What's my progress this week?",
  ]

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-[#36454F]">AI Fitness Assistant</h1>
        </div>

        {/* Chat Messages */}
        <div className="h-[60vh] overflow-y-auto p-6 bg-gray-50">
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "ai" && <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mr-3"></div>}
                <div className="max-w-[80%]">
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.sender === "user" ? "bg-[#7D3C98] text-white" : "bg-white border"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mr-3"></div>
                <div className="max-w-[80%]">
                  <div className="rounded-lg px-4 py-2 bg-white border">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your fitness plan, nutrition advice, or workout tips..."
              className="flex-1"
            />
            <Button type="submit" className="bg-[#7D3C98] hover:bg-[#7D3C98]/90 rounded-lg px-4">
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-sm"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
