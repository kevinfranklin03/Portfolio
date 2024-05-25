import React, { useRef, useEffect, useState } from 'react';
import EnemyController from './EnemyController';
import Player from './Player';
import BulletController from './BulletController';

const GameOverMessage = ({ isGameOver, didWin }) => {
  if (isGameOver) {
    let message = didWin ? "Congratulations! You Win!" : "Game Over";
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
  const isGamePausedRef = useRef(isGamePaused);

  useEffect(() => {
    isGamePausedRef.current = isGamePaused;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;

    const background = new Image();
    background.src = "images/newSpace.png";

    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      if (isGamePaused === false) {
        enemyBulletController.current = new BulletController(canvas, 4, "white", false);
        playerBulletController.current = new BulletController(canvas, 5, "red", true);
        enemyController.current = new EnemyController(canvas, enemyBulletController.current, playerBulletController.current);
        player.current = new Player(canvas, 3, playerBulletController.current);

        startGame(ctx, canvas, background);
      }
    };

    const startGame = (ctx, canvas, background) => {
      gameInterval.current = setInterval(() => {
        if (!isGamePausedRef.current) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

          enemyController.current.draw(ctx);
          player.current.draw(ctx);
          playerBulletController.current.draw(ctx);
          enemyController.current.collisionDetection();
          enemyBulletController.current.draw(ctx);

          checkGameOver(canvas, ctx);
        }
      }, 1000 / 60);
    };

    const checkGameOver = (canvas, ctx) => {
      if (enemyBulletController.current.collideWith(player.current) || enemyController.current.collideWith(player.current)) {
        setIsGameOver(true);
        setIsGamePaused(true);
        clearInterval(gameInterval.current);
      }

      if (enemyController.current.enemyRows.length === 0) {
        setDidWin(true);
        setIsGameOver(true);
        setIsGamePaused(true);
        clearInterval(gameInterval.current);
      }
    };

    return () => {
      clearInterval(gameInterval.current);
    };
  }, [isGamePaused]);

  return (
    <div>
      <GameOverMessage isGameOver={isGameOver} didWin={didWin} />
      <canvas ref={canvasRef} id="game"></canvas>
      <p className="text-logoYellow text-center mb-2 font-Space_Grotesk">Use 🡨 and 🡪 keys to move left and right. Press spacebar to shoot.</p>
    </div>
  );
};

export default Game;
