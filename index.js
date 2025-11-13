import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: data.reply }]);
    setInput("");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-4">
      <div className="w-full max-w-md flex flex-col flex-1">
        <h1 className="text-center text-2xl font-bold text-orange-500 mb-4">🤖 AmarAI</h1>
        <div className="flex-1 overflow-y-auto bg-gray-900 rounded-lg p-3">
          {messages.map((msg, i) => (
            <div key={i} className={\`my-2 \${msg.from === "user" ? "text-right" : "text-left text-orange-400"}\`}>
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-center text-gray-400">⏳ جاري التفكير...</p>}
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="اكتب رسالتك..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="bg-orange-600 px-4 py-2 rounded text-white">إرسال</button>
        </div>
      </div>

      <footer className="text-gray-500 text-sm mt-4">© 2025 AmarAI</footer>
    </div>
  );
}