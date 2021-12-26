import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sampleQuestions from "../mock-db/sampleQuestions.json";
import Question from "../components/Question";
import { Box, CircularProgress } from "@mui/material";

const Questions = () => {
  let naviagate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setQuestions(sampleQuestions);
      setIsLoading(false);
    }, 500);
  }, []);

  const setIndex = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      naviagate("/result");
      console.log("last");
    }
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <CircularProgress size="50px" color="success" />
        </Box>
      ) : (
        <Question question={questions[currentIndex]} setIndex={setIndex} />
      )}
    </>
  );
};

export default Questions;
