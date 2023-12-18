import { Box, Button, Text } from "@chakra-ui/react";
import { colors } from "../config/colors";
import { DeleteIcon } from "@chakra-ui/icons";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout, isCreated, isSetCreated }) => {
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      isSetCreated(true);
    }
  };

  return (
    <Box>
      <Box
        bg={colors.fgColor}
        m="2rem"
        p="2rem"
        minW="60vw"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontSize="20px"
            fontWeight="bold"
            color={colors.hColor}
            mb="0.5rem"
          >
            {workout.title}
          </Text>
          <Text color={colors.pColor}>
            <Text as="strong">Load(kg): </Text> {workout.load}
          </Text>
          <Text color={colors.pColor}>
            <Text as="strong">Reps: </Text> {workout.reps}
          </Text>
          <Text color={colors.pColor}>
            {formatDistanceToNow(new Date(workout.createdAt), {
              addSuffix: true,
            })}
          </Text>
        </Box>
        <Button
          bg={colors.secondaryColor}
          color={colors.pColor}
          onClick={handleClick}
          borderRadius="xl"
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default WorkoutDetails;
