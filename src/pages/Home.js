import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";
import { colors } from "../config/colors";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isCreated, isSetCreated] = useState(false);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
        console.log(isCreated);
      }
    };

    fetchWorkouts();
  }, [isCreated]);

  return (
    <Box p="3rem" bg={colors.bgColor} display="flex" justifyContent='space-around'>
      <Box>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout.id} workout={workout} />
          ))}
      </Box>
      <WorkoutForm isCreated={isCreated} isSetCreated={isSetCreated} />
    </Box>
  );
};

export default Home;
