import React, { useState } from "react"
import confetti from 'canvas-confetti';

const App = () => {

  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);


  const celebrate = () => {
    //if the name is not provided return nothing
    if (!name.trim()) return;

    setShowGreeting(true);

    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 }
    });

    setTimeout(() => {

      confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.2 }
      });

      confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.8 }
      })

    }, 500)
  }

  const changeName = (e) => {
    setName(e.target.value);
  }


  return (
    <div className="container">
      {

        !showGreeting ? (
          <div className="card">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={changeName}
            />
            <button onClick={celebrate}>Celebrate</button>
          </div>

        ) : (
          <div className="message-wrapper">
            <h1 className="greeting">
              🎉 Happy New Year {name}  <br /> 2026 ✨
            </h1>
            <p className="subtext">
              You know, a year is gone, and whatever happened is in the past. Maybe you made some mistakes, and maybe things didn’t go as planned but you learned from them, and sometimes that’s more important than getting everything right.
              Let’s carry the lessons forward and leave the regrets behind. Wishing you a better, stronger, and happier year ahead.😀
            </p>
          </div>
        )
      }

    </div>
  )
}



export default App
