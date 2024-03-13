import { ChakraProvider } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import "./App.css";

//components

import Sidebar from "./components/Sidebar.js";
import StagingArea from "./components/StagingArea.js";

const theme = extendTheme({
  components: {
    Button: { baseStyle: { _focus: { outline: "none" } } },
  },
});

function App() {
  const [selectedSong, setSelectedSong] = useState(-1);

  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Box className="sidebar" bg="#F9F8F8" w={0.172} h="calc(100vh)">
          <Box marginRight="4px">
            <Sidebar
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
            ></Sidebar>
          </Box>
        </Box>
        <Box w={0.828} bg="" h="calc(100vh)">
          <StagingArea selectedSong={selectedSong} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
