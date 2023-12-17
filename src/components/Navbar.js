import { Box, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../config/colors";

const Navbar = () => {
  return (
    <Box
      bg={colors.fgColor}
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding='1rem'
    >
      <Link>
        <Heading color={colors.hColor} fontFamily='cursive'>Workout Buddy</Heading>
      </Link>
    </Box>
  );
};

export default Navbar;
