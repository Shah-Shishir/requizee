import { Button, Box } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Link } from "react-router-dom";

const Home = () => {
  // useEffect
  localStorage.clear();

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <Button
        variant="contained"
        disableElevation
        endIcon={<PlayCircleFilledWhiteIcon />}
        size="large"
        to="/questions"
        component={Link}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default Home;
