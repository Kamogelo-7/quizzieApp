import { useState } from "react";
import Results from "./Results";

const Quiz = () => {
  interface QuizDataProps {
    question: string;
    options: string[];
    answer: string;
  }

  const quizData: QuizDataProps[] = [
    // ---------- EASY (Junior Level) ----------
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "HyperTool Multi Language",
        "Home Tool Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which language adds type safety to JavaScript?",
      options: ["Python", "TypeScript", "PHP", "Ruby"],
      answer: "TypeScript",
    },
    {
      question: "Which HTTP method is used to send data to a server?",
      options: ["GET", "POST", "DELETE", "FETCH"],
      answer: "POST",
    },
    {
      question: "What does CRUD stand for?",
      options: [
        "Create Read Update Delete",
        "Compile Render Update Deploy",
        "Code Run Use Debug",
        "Create Route Upload Download",
      ],
      answer: "Create Read Update Delete",
    },
    {
      question: "Which frontend framework is used to build UIs?",
      options: ["Laravel", "Django", "React", "Flask"],
      answer: "React",
    },

    // ---------- MEDIUM (Mid-Level) ----------
    {
      question:
        "What is the main benefit of using TypeScript in large applications?",
      options: [
        "Faster performance",
        "Static typing that reduces runtime errors",
        "Better UI design",
        "Database management",
      ],
      answer: "Static typing that reduces runtime errors",
    },
    {
      question:
        "Which principle means a component or function should do only one thing well?",
      options: [
        "DRY",
        "Single Responsibility Principle",
        "Open/Closed Principle",
        "KISS",
      ],
      answer: "Single Responsibility Principle",
    },
    {
      question: "What problem does REST solve?",
      options: [
        "Standardizing communication between client and server",
        "Improving UI styling",
        "Handling multithreading",
        "File compression",
      ],
      answer: "Standardizing communication between client and server",
    },
    {
      question:
        "Which pattern helps share state across deeply nested components?",
      options: [
        "Prop drilling",
        "Context API",
        "Redux reducers",
        "Local state",
      ],
      answer: "Context API",
    },
    {
      question: "What does normalization improve in databases?",
      options: [
        "Performance by adding more tables",
        "Consistency and removing redundancy",
        "Encryption strength",
        "Visual layout",
      ],
      answer: "Consistency and removing redundancy",
    },

    // ---------- HARD (Senior Level) ----------
    {
      question:
        "Which architectural pattern is commonly used for scalable frontend applications?",
      options: ["Monolithic UI", "MVC", "Micro-frontends", "Waterfall"],
      answer: "Micro-frontends",
    },
    {
      question: "What is eventual consistency?",
      options: [
        "All nodes instantly share the same data",
        "Data becomes consistent across systems over time",
        "Only one database can update records",
        "The server never caches data",
      ],
      answer: "Data becomes consistent across systems over time",
    },
    {
      question:
        "Which tool helps prevent DNS rebinding attacks in Vite dev servers?",
      options: [
        "CORS",
        "allowedHosts configuration",
        "HTTPS",
        "Service Workers",
      ],
      answer: "allowedHosts configuration",
    },
    {
      question: "Why are message queues used in large systems?",
      options: [
        "They speed up frontend rendering",
        "They enable loose coupling and async processing",
        "They replace databases",
        "They handle authentication",
      ],
      answer: "They enable loose coupling and async processing",
    },
    {
      question:
        "Which design principle prevents tight coupling by depending on abstractions?",
      options: [
        "Dependency Inversion Principle",
        "DRY",
        "YAGNI",
        "Liskov Substitution Principle",
      ],
      answer: "Dependency Inversion Principle",
    },

    // ---------- TECH TRENDS ----------
    {
      question:
        "Which trend focuses on shifting infrastructure management to cloud providers?",
      options: [
        "Serverless computing",
        "Blockchain mining",
        "Progressive enhancement",
        "Edge styling",
      ],
      answer: "Serverless computing",
    },
    {
      question:
        "What area of development focuses on automating software quality checks?",
      options: [
        "Static hosting",
        "QA automation",
        "Full-stack architecture",
        "API versioning",
      ],
      answer: "QA automation",
    },
    {
      question: "Which AI technology powers tools like GitHub Copilot?",
      options: [
        "Large Language Models",
        "Neural networking hardware",
        "Cryptomining algorithms",
        "Blockchain nodes",
      ],
      answer: "Large Language Models",
    },

    // ---------- BUSINESS / AMBITROVE ----------
    {
      question: "What is a core goal for companies like Ambitrove?",
      options: [
        "Automating and simplifying business processes",
        "Selling computers",
        "Building mobile games",
        "Developing social networks",
      ],
      answer: "Automating and simplifying business processes",
    },
    {
      question: "Why is system design important for startup platforms?",
      options: [
        "To make logos look nicer",
        "To ensure scalability and reliability as users grow",
        "To increase internet speed",
        "To reduce developer learning time",
      ],
      answer: "To ensure scalability and reliability as users grow",
    },
    // ---------- SYSTEM DESIGN ----------
    {
      question:
        "Which component handles distributing traffic across multiple servers?",
      options: ["Router", "Load balancer", "Firewall", "Proxy"],
      answer: "Load balancer",
    },
    {
      question:
        "What tool is commonly used to cache API responses for faster access?",
      options: ["Redis", "PostgreSQL", "MongoDB", "Express"],
      answer: "Redis",
    },
    {
      question: "What does horizontal scaling mean?",
      options: [
        "Adding more memory to one server",
        "Adding more servers to handle traffic",
        "Upgrading CPU hardware",
        "Compressing assets",
      ],
      answer: "Adding more servers to handle traffic",
    },
    {
      question: "Why are database indexes used?",
      options: [
        "To reduce server memory usage",
        "To speed up query searches",
        "To encrypt records",
        "To replicate data",
      ],
      answer: "To speed up query searches",
    },

    // ---------- HARDWARE & SOFTWARE ----------
    {
      question: "Which hardware component executes program instructions?",
      options: ["RAM", "GPU", "CPU", "SSD"],
      answer: "CPU",
    },
    {
      question: "What is the role of RAM?",
      options: [
        "Permanent data storage",
        "Temporary memory for running programs",
        "Network traffic routing",
        "Graphics rendering",
      ],
      answer: "Temporary memory for running programs",
    },
    {
      question: "Which software runs closest to the hardware?",
      options: ["Web browser", "Operating system", "React", "Database client"],
      answer: "Operating system",
    },

    // ---------- AI & ML ----------
    {
      question: "What does 'training a model' mean?",
      options: [
        "Running predictions",
        "Feeding data to adjust AI parameters",
        "Writing ML code",
        "Hosting on AWS",
      ],
      answer: "Feeding data to adjust AI parameters",
    },
    {
      question: "Which type of AI model predicts future values from past data?",
      options: [
        "Regression models",
        "Classification models",
        "Clustering models",
        "Image recognition models",
      ],
      answer: "Regression models",
    },
    {
      question: "What dataset split is used to test final model accuracy?",
      options: ["Training set", "Test set", "Validation set", "Production set"],
      answer: "Test set",
    },

    // ---------- AUTOMATION & DEVOPS ----------
    {
      question: "What is CI/CD used for?",
      options: [
        "Manual website deployment",
        "Automating build, test, and deployment processes",
        "Bug tracking",
        "Design reviews",
      ],
      answer: "Automating build, test, and deployment processes",
    },
    {
      question: "Which tool is used to containerize applications?",
      options: ["Docker", "Kubernetes", "Vite", "Webpack"],
      answer: "Docker",
    },

    // ---------- LEETCODE / ALGORITHMS ----------
    {
      question: "Which data structure uses First-In First-Out (FIFO)?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
    {
      question: "Which data structure uses Last-In First-Out (LIFO)?",
      options: ["Queue", "Tree", "Stack", "Heap"],
      answer: "Stack",
    },
    {
      question:
        "Which Big-O complexity represents the fastest average lookup time?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: "O(1)",
    },
    {
      question: "Binary search requires which condition to work correctly?",
      options: [
        "Random data",
        "Sorted list",
        "Unique values only",
        "Balanced tree",
      ],
      answer: "Sorted list",
    },
  ];

  const [isQuizFinished, setQuizFinished] = useState<boolean>(false);

  const initialAnswers = Array(quizData.length).fill(null) as (string | null)[];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] =
    useState<(string | null)[]>(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const selectedAnswer = userAnswers[currentQuestion];

  const handleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const handleSelectOtp = (option: string) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  };

  const goToPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion === quizData.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const restartQuiz = () => {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setQuizFinished(false);
  };

  if (isQuizFinished) {
    return (
      <Results
        userAnswers={userAnswers}
        quizData={quizData}
        restartQuiz={restartQuiz}
      />
    );
  }
  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].question}</p>
      <button className="custom-button" onClick={handleLoading}>
        {isLoading ? "Hide Quiz" : "Show Quiz"}
      </button>
      {isLoading ? (
        quizData[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={`option ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => handleSelectOtp(option)}>
            {option}
          </button>
        ))
      ) : (
        <p>Loading quiz...</p>
      )}
      <p>
        Selected Option: <span>{selectedAnswer}</span>
      </p>
      <div className="nav-buttons">
        <button
          onClick={goToPrev}
          disabled={currentQuestion === 0 ? true : false}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
