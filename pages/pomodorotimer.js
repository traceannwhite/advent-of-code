import styles from "../styles/PomodoroTimer.module.scss";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from ".././utils/PomodoroTimerUtils";

// const defaultRemainingTime = {
//   seconds: "00",
//   minutes: "00",
// };

const pomodorotimer = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.pomodoro}>
          <div className={styles.inner}>
            <div id={styles.timer}>
              <h1 className={styles.time}>15:00</h1>
            </div>
            <div className={styles.btns}>
              <button className="start">Start</button>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.gear}
              >
                <g filter="url(#filter0_d_108_7)">
                  <path
                    d="M28 14V10H23.714C23.526 9.274 23.238 8.592 22.866 7.962L25.898 4.93L23.07 2.1L20.04 5.132C19.406 4.76 18.726 4.472 18 4.284V0H14V4.284C13.274 4.474 12.594 4.76 11.96 5.134L8.93 2.1L6.102 4.928L9.132 7.96C8.762 8.592 8.472 9.272 8.286 10H4V14H8.286C8.474 14.726 8.762 15.408 9.134 16.038L6.102 19.072L8.93 21.9L11.962 18.868C12.594 19.24 13.274 19.528 14.002 19.718V24H18.002V19.716C18.728 19.526 19.408 19.238 20.042 18.866L23.074 21.898L25.902 19.07L22.87 16.036C23.242 15.406 23.53 14.726 23.718 13.998H28V14ZM16 16C13.792 16 12 14.206 12 12C12 9.796 13.792 8 16 8C18.208 8 20 9.796 20 12C20 14.204 18.208 16 16 16Z"
                    fill="#ffffff"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_108_7"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_108_7"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_108_7"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="500px"
            height="500px"
            className={styles.progress}
          >
            <circle
              className={styles.circle}
              cx="250"
              cy="250"
              r="247"
              strokeLinecap="round"
            />
          </svg>
        </section>
      </div>

      {/* <style js>{`

    `}</style> */}
    </>
  );
};

export default pomodorotimer;

// const [secondsLeft, setSecondsLeft] = useState(25 * 60);
// // const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
// const [timer, setTimer] = useState();

// const start = () => {
//   const intervalId = setInterval(() => {
//     setSecondsLeft((secondsLeft) => secondsLeft - 1);
//     if (secondsLeft === 0) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
//   setTimer(intervalId);
// };

// useEffect(() => {
//   if (secondsLeft === 0) {
//     clearInterval(timer);
//   }
// }, [secondsLeft, timer]);

// useEffect(() => {
//   return () => clearInterval(timer);
// }, [timer]);

// const countdownTimestampMs = 15;

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     updateRemainingTime(countdownTimestampMs);
//   }, 1000);
//   return () => clearInterval(intervalId);
// }, [countdownTimestampMs]);

// const updateRemainingTime = (countdown) => {
//   setRemainingTime = getRemainingTimeUntilMsTimestamp(countdown);
// };
