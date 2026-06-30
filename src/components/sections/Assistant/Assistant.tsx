import { useState, useRef, useEffect } from 'react'
import GlassCard from '../../ui/GlassCard'
import { qaData, fallbackAnswer } from './Assistant.data'

interface Message {
  from: 'user' | 'bot'
  text: string
}

function findAnswer(input: string): string {
  const lower = input.toLowerCase()
  for (const qa of qaData) {
    if (qa.keywords.some((kw) => lower.includes(kw))) {
      return qa.answer
    }
  }
  return fallbackAnswer
}

export default function Assistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hi! Ask me anything about Ansh.' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  function handleSend() {
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [...prev, { from: 'user', text }])
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: findAnswer(text) }])
    }, 300)
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <GlassCard className="w-72 md:w-80 mb-4 overflow-hidden">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <span className="text-sm font-medium text-soft-white">Ask Ansh</span>
            <button
              onClick={() => setOpen(false)}
              className="text-silver hover:text-soft-white transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm ${
                  msg.from === 'user'
                    ? 'text-blue-accent text-right'
                    : 'text-silver'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 text-sm text-soft-white placeholder-silver px-3 py-2 rounded-lg outline-none border border-white/10 focus:border-blue-accent transition-colors"
            />
            <button
              onClick={handleSend}
              className="text-sm text-blue-accent hover:text-blue-400 transition-colors font-medium"
            >
              Send
            </button>
          </div>
        </GlassCard>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-blue-accent text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300"
        aria-label="Ask Ansh"
      >
        {open ? '×' : '?'}
      </button>
    </div>
  )
}
