import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./style.css";
//import "./script.js"

const App = () => {

    useEffect(() => {
        // Load and execute script.js here
        const script = document.createElement('script');
        script.src = './script.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            // Cleanup: remove the script when the component unmounts
            document.body.removeChild(script);
        };
    }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="statistics">
        <div className="score">
          Score：<span className="score-number">3</span>
        </div>
        <div className="time-left">
          Time：<span className="time-left-number">0</span>
        </div>
      </div>
      <div className="game">
        <div className="target-blocks">
          <div className="block target" data-id="1"></div>
          <div className="block target" data-id="2"></div>
          <div className="block target" data-id="3"></div>
          <div className="block target" data-id="4"></div>
          <div className="block target" data-id="5"></div>
          <div className="block target" data-id="6"></div>
          <div className="block target" data-id="7"></div>
          <div className="block target" data-id="8"></div>
          <div className="block target" data-id="9"></div>
          <div className="block target" data-id="10"></div>
        </div>
        <div className="draggable-blocks">
          <div className="block draggable" data-id="1"></div>
          <div className="block draggable" data-id="2"></div>
          <div className="block draggable" data-id="3"></div>
          <div className="block draggable" data-id="4"></div>
          <div className="block draggable" data-id="5"></div>
          <div className="block draggable" data-id="6"></div>
          <div className="block draggable" data-id="7"></div>
          <div className="block draggable" data-id="8"></div>
          <div className="block draggable" data-id="9"></div>
          <div className="block draggable" data-id="10"></div>
        </div>
      </div>
      <button className="btn btn-primary" id="start">
        Start
      </button>
      <div className="dialog text-center" id="final-score-dialog" hidden>
        <div className="dialog-content">
          <div className="dialog-header">
            <div className="dialog-title">
              You Scored <span className="final-score">0</span>
            </div>
          </div>
          <div className="dialog-body">
            <p>
              <span className="you-win" hidden>
                Congratulations! You win!🎉
              </span>
            </p>
            <p>
              <span className="you-lose" hidden>
                You lose! Have another try?😂
              </span>
            </p>
          </div>
          <div className="dialog-footer">
            <button className="btn btn-primary" 
                //onClick="closeFinalScore()"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
