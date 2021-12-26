import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sampleQuestions from "../mock-db/sampleQuestions.json";
import {
  Box,
  LinearProgress,
  Typography,
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const Result = () => {
  const results = JSON.parse(localStorage.getItem("results"));
  let totalPoints = results
    .map((result) => result.isCorrect)
    .reduce((result, sum) => result + sum, 0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setQuestions(sampleQuestions);
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Box sx={{ padding: 2, width: "90%", margin: "auto" }}>
      <Typography component="h3" sx={{ marginBottom: 1, color: "#444" }}>
        Analyzing results
      </Typography>
      <LinearProgress />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gridGap: 40,
        margin: "50px 0",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center" }}
        color="info"
      >
        Your Score is {totalPoints} out of {questions.length}
      </Typography>
      {questions.map((question, index) => (
        <Card key={question.id} sx={{ minWidth: "50vw", maxWidth: "90vw" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question {question.id}
            </Typography>
            <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
              {question.displayText}
            </Typography>
            <FormControl component="fieldset" disabled>
              <RadioGroup
                aria-label="answer"
                defaultValue={results[index].option}
              >
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.id}
                    control={<Radio />}
                    label={option.displayText}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <div style={{ color: "green", fontSize: 14, marginTop: 16 }}>
              Correct answer: <b>{results[index].answer}</b>.
            </div>
          </CardContent>
        </Card>
      ))}
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <Button variant="outlined">Back to home</Button>
      </Link>
    </Box>
  );
};

export default Result;
