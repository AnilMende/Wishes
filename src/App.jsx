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
      particleCount : 200,
      spread : 90,
      origin : {y : 0.6 }
    });

    setTimeout(() => {
      
      confetti({
        particleCount : 150,
        spread : 120,
        origin : {x : 0.2 }
      });

      confetti({
        particleCount : 150,
        spread : 120,
        origin : { x : 0.8}
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
              Forget what happened last year. May this new year bring you everything you’re hoping for.
            </p>
          </div>
        )
      }

    </div>
  )
}



export default App
