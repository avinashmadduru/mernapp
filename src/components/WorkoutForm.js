import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../config/colors";

const WorkoutForm = (props) => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const respone = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await respone.json();

    if (!respone.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (respone.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new workout added", json);
      props.isSetCreated(true);
    }
  };

  return (
    <Box>
      <Text color={colors.secondaryColor} fontWeight="bold" fontSize="xl">
        Add a Workout
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl>
          <FormLabel color={colors.secondaryColor}>Excersise Title: </FormLabel>
          <Input
            border={`2px ${colors.fgColor} solid`}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={emptyFields.includes("title") ? "error" : ""}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={colors.secondaryColor}>Load (in Kg): </FormLabel>
          <Input
            border={`2px ${colors.fgColor} solid`}
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className={emptyFields.includes("load") ? "error" : ""}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={colors.secondaryColor}>Reps: </FormLabel>
          <Input
            border={`2px ${colors.fgColor} solid`}
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className={emptyFields.includes("reps") ? "error" : ""}
          />
        </FormControl>
      </Box>
      <Button
        mt="1rem"
        onClick={handleSubmit}
        bg={colors.fgColor}
        color={colors.secondaryColor}
      >
        Add Workout
      </Button>
      {error && <Box>{error}</Box>}
    </Box>
  );
};

export default WorkoutForm;
