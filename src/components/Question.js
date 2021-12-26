import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Question = ({ question, setIndex }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [helperText, setHelperText] = useState("Choose wisely!");
  const [isCorrect, setIsCorrect] = useState(false);

  const { id, displayText, options, answer } = question;

  const checkSelection = (option) => (e) => {
    if (option.id === answer.id) {
      setIsCorrect(true);
      setHelperText("Great, Correct!");
      setResultData(true, option);
    } else {
      setHelperText("Ouuch, Wrong!");
      setResultData(false, option);
    }
    setIsSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshState();
  };

  const setResultData = (isCorrect, option) => {
    const results = JSON.parse(localStorage.getItem("results")) || [];
    results.push({ isCorrect, option: option.id, answer: answer.displayText });
    localStorage.setItem("results", JSON.stringify(results));
  };

  const refreshState = () => {
    setIsSelected(false);
    setHelperText("Choose wisely!");
    setIsCorrect(false);
    setIndex();
  };

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <Card sx={{ minWidth: "50vw", maxWidth: "90vw" }}>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question {id}
            </Typography>
            <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
              {displayText}
            </Typography>
            <FormControl component="fieldset" disabled={isSelected}>
              <RadioGroup aria-label="answer">
                {options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.id}
                    control={<Radio onChange={checkSelection(option)} />}
                    label={option.displayText}
                  />
                ))}
              </RadioGroup>
              <div
                style={{
                  marginTop: "8px",
                  marginLeft: 0,
                  fontWeight: isSelected ? "bold" : "normal",
                  color: isSelected ? (isCorrect ? "green" : "red") : "grey",
                  fontSize: "14px",
                }}
              >
                {helperText}
              </div>
            </FormControl>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", padding: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={!isSelected}
            >
              Next
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
};

export default Question;
