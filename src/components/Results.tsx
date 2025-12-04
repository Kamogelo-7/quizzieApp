import { useEffect, useState } from "react";

interface ResultsProps {
  quizData: {
    question: string;
    options: string[];
    answer: string;
  }[];
  userAnswers: (string | null)[];
  restartQuiz: () => void;
}

const Results = ({ quizData, userAnswers, restartQuiz }: ResultsProps) => {
  const [flash, setFlash] = useState(false);

  const getScore = () => {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].answer) finalScore++;
    });
    return finalScore;
  };

  const score = getScore();
  const unanswered = userAnswers.filter((a) => a === null).length;
  const percentage = Math.round((score / quizData.length) * 100);
  const passed = percentage >= 50;

  const canVibrate = "vibrate" in navigator;

  const successSound = new Audio("/sounds/success.wav");
  const failSound = new Audio("/sounds/fail.wav");

  useEffect(() => {
    // 🔊 Always play sound
    passed ? successSound.play() : failSound.play();

    // 📳 Mobile vibration
    if (canVibrate) {
      navigator.vibrate(passed ? [200, 100, 200] : [400, 150, 400, 150, 400]);
    }

    // 🖥️ Desktop fallback
    else {
      setFlash(true);
      setTimeout(() => setFlash(false), 600);
    }
  }, []);

  return (
    <div className={`results-container ${flash ? "flash" : ""}`}>
      <h2>Quiz Completed 🥳</h2>

      <div className="center-results">
        <p>
          Score: {score}/{quizData.length}
        </p>
        <p>Unanswered: {unanswered}</p>
        <p>{percentage}%</p>

        <p>
          {percentage >= 80
            ? "🔥 Excellent"
            : percentage >= 50
            ? "👍 Good"
            : "💡 Keep Practicing"}
        </p>
      </div>

      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
