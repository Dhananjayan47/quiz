import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
// import App from './App.jsx'
import GamePage from "./project/GamePage"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <GamePage/>
    </ChakraProvider>
    </StrictMode>
);
