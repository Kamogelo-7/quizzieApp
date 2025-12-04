import { useEffect } from "react";

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
  const getScore = () => {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  };

  const score = getScore();
  const unanswered = userAnswers.filter((a) => a === null).length;
  const percentage = Math.round((score / quizData.length) * 100);
  const passed = percentage >= 50;

  // 🔊 Sounds
  const successSound = new Audio("/sounds/success.wav");
  const failSound = new Audio("/sounds/fail.wav");

  useEffect(() => {
    if (passed) {
      successSound.play().catch(() => {});
    } else {
      failSound.play().catch(() => {});
    }

    // 📳 Mobile vibration
    if (navigator.vibrate) {
      navigator.vibrate(passed ? [200, 100, 200] : [400, 150, 400, 150, 400]);
    }
  }, []);

  return (
    <div>
      <h2>Quiz Completed 🥳</h2>

      <div className="center-results">
        <p>
          Your Score: {score}/{quizData.length}
        </p>
        <p>Unanswered: {unanswered}</p>
        <p>Score: {percentage}%</p>

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
