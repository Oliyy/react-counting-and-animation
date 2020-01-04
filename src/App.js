import React from "react";
import { useLocation, useRouter } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { CounterTest } from "./components/CounterTest";
import { Nav } from './components/Nav';

import "./App.css";

const PageTransitionSettings = {
  transition: { duration: 0.2 },
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const ExamplePage = () => (
  <>
    <h2>Example Header</h2>
  </>
);

const routes = {
  "/": CounterTest,
  "/example": ExamplePage,
};

const App = () => {
  useRouter();
  const [location] = useLocation();
  const Route = routes[location];

  return (
    <>
      <Nav />
      <AnimatePresence initial={false}>
        <motion.div
          className="route-container"
          key={location}
          {...PageTransitionSettings}
        >
          <Route />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
