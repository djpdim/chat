// import { useState } from "react"
import Chat from "@/components/chat"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
