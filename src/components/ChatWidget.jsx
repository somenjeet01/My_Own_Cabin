import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/context/AuthContext"

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you with your cabin booking today?",
      isUser: false
    }
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const messagesEndRef = useRef(null)
  const { isLoggedIn } = useAuth()
  const { toast } = useToast()

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = e => {
    e.preventDefault()

    if (!isLoggedIn) {
      toast({
        title: "Login required",
        description: "Please login to use the chat feature",
        variant: "destructive"
      })
      return
    }

    if (currentMessage.trim()) {
      // Add user message
      setMessages([...messages, { text: currentMessage, isUser: true }])
      setCurrentMessage("")

      // Simulate response (in real app, this would be an API call)
      setTimeout(() => {
        const responses = [
          "I can definitely help you find the perfect cabin for your trip!",
          "The booking process is simple, just select your dates on the cabin detail page.",
          "Most of our cabins are pet-friendly, but you can check the amenities for specific details.",
          "Yes, you can modify your booking up to 48 hours before check-in.",
          "Typical check-in time is 3 PM and check-out is at 11 AM."
        ]

        let response =
          "I'm not sure about that. Can you try asking about bookings, cabin features, or policies?"

        // Simple keyword matching for demo purposes
        const lowercaseMsg = currentMessage.toLowerCase()
        if (
          lowercaseMsg.includes("book") ||
          lowercaseMsg.includes("reservation")
        ) {
          response = responses[1]
        } else if (
          lowercaseMsg.includes("pet") ||
          lowercaseMsg.includes("dog") ||
          lowercaseMsg.includes("cat")
        ) {
          response = responses[2]
        } else if (
          lowercaseMsg.includes("cancel") ||
          lowercaseMsg.includes("change") ||
          lowercaseMsg.includes("modify")
        ) {
          response = responses[3]
        } else if (
          lowercaseMsg.includes("check-in") ||
          lowercaseMsg.includes("checkout") ||
          lowercaseMsg.includes("time")
        ) {
          response = responses[4]
        } else if (
          lowercaseMsg.includes("cabin") ||
          lowercaseMsg.includes("find") ||
          lowercaseMsg.includes("recommend")
        ) {
          response = responses[0]
        }

        setMessages(prev => [...prev, { text: response, isUser: false }])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-cabin-600 text-white p-4 rounded-full shadow-lg hover:bg-cabin-700 transition-all z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat dialog */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="sm:max-w-md p-0 border-l">
          <SheetHeader className="p-4 border-b">
            <div className="flex justify-between items-center">
              <SheetTitle>Cabin Helper</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                
              </Button>
            </div>
            <SheetDescription>
              Ask me anything about cabin bookings
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-[calc(100vh-10rem)]">
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? "bg-cabin-600 text-white"
                        : "bg-gray-100 text-cabin-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form onSubmit={handleSend} className="border-t p-4 flex gap-2">
              <Input
                value={currentMessage}
                onChange={e => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={!isLoggedIn}
              />
              <Button
                type="submit"
                disabled={!currentMessage.trim() || !isLoggedIn}
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default ChatWidget
