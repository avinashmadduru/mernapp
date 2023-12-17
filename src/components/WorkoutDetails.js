import { Box, Text } from "@chakra-ui/react";
import { colors } from "../config/colors";

const WorkoutDetails = ({ workout }) => {
  return (
    <Box display="flex">
      <Box bg={colors.fgColor} m="2rem" p="2rem" minW='60vw'>
        <Text fontSize="20px" fontWeight="bold" color={colors.hColor} mb="0.5rem">
          {workout.title}
        </Text>
        <Text color={colors.pColor}>
          <Text as="strong">
            Load(kg):{" "}
          </Text>{" "}
          {workout.load}
        </Text>
        <Text color={colors.pColor}>
          <Text as="strong">
            Reps:{" "}
          </Text>{" "}
          {workout.reps}
        </Text>
        <Text color={colors.pColor}>{workout.createdAt}</Text>
      </Box>
    </Box>
  );
};

export default WorkoutDetails;
