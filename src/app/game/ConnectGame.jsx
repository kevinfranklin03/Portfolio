import React, { useRef, useEffect, useState } from 'react';
import EnemyController from './EnemyController';
import Player from './Player';
import BulletController from './BulletController';

const GameOverMessage = ({ isGameOver, didWin, canvasWidth, canvasHeight }) => {
  if (isGameOver) {
    let message = didWin ? "Congratulations! You Win!" : "Game Over,";
    return (
      <div 
      className="absolute top-1/3 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto h-auto 
      flex justify-center items-center bg-black bg-opacity-50 p-5 rounded-lg">
        <div className="text-logoYellow text-2xl md:text-3xl lg:text-4xl text-center">{message}
        <h3>Refresh the page to start again</h3>
        </div>
        
      </div>
    );
  }
  return null;
};

const Game = ({ canvasRef }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const enemyController = useRef(null);
  const player = useRef(null);
  const playerBulletController = useRef(null);
  const enemyBulletController = useRef(null);
  const gameInterval = useRef(null);
  const isGamePausedRef = useRef(isGamePaused);  // New ref

  useEffect(() => {
    console.log(isGamePausedRef)
    isGamePausedRef.current = isGamePaused;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;

    const background = new Image();
    background.src = "images/newSpace.png";

    background.onload = () => {
      console.log("is game paused?", isGamePaused);


      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      if (isGamePaused === false) {
        // console.log("inside all render");
        enemyBulletController.current = new BulletController(canvas, 4, "white", false);
        playerBulletController.current = new BulletController(canvas, 5, "red", true);
        enemyController.current = new EnemyController(canvas, enemyBulletController.current, playerBulletController.current);
        player.current = new Player(canvas, 3, playerBulletController.current);

        startGame(ctx, canvas, background);
      }
    };

    const displayGameOver = (ctx, canvas) => {
      if (isGameOver) {
        let message = didWin ? "Congratulations! You Win!" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.textAlign = "center";
        ctx.fillText(message, canvas.width / 2, canvas.height / textOffset);
      }
    };

  
    const startGame = (ctx, canvas, background) => {

        gameInterval.current = setInterval(() => {
          if (!isGamePausedRef.current) { 
          console.log("Game loop running...", isGamePaused);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

          enemyController.current.draw(ctx);
          player.current.draw(ctx);
          playerBulletController.current.draw(ctx);
          enemyController.current.collisionDetection();
          enemyBulletController.current.draw(ctx);

          checkGameOver(canvas, ctx);
          }
        }, 1000/60);
       
    };

    const checkGameOver = (canvas, ctx) => {

      if (enemyBulletController.current.collideWith(player.current)) {
        console.log("Player was hit by enemy bullet. Game over.");
        setIsGameOver(true);
        setIsGamePaused(true);
      }

      if (enemyController.current.collideWith(player.current)) {
        console.log("Player collided with enemy. Game over.");
        setIsGameOver(true);
        setIsGamePaused(true);
      }

      if (enemyController.current.enemyRows.length === 0) {
        console.log("All enemies destroyed. You win!");
        setDidWin(true);
        setIsGameOver(true);
        setIsGamePaused(true);
      }

      displayGameOver(ctx, canvas);
    };

    return () => {
      // Clean up if needed
    };
  }, [isGamePaused]);

  return (
    <div className=''>
      
      <GameOverMessage isGameOver={isGameOver} didWin={didWin} canvasWidth={600} canvasHeight={600} />
      <canvas ref={canvasRef}  id="game"></canvas>  
      <p className="text-logoYellow text-center mb-2">Use "W" and "D" keys to move left and right. Press spacebar to shoot.</p>
    </div>
  );
};

export default Game;

