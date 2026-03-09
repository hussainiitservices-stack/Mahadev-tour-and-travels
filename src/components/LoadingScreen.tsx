import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="loading-screen"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="loading-spinner" />
      <span className="text-sm font-semibold tracking-widest uppercase text-primary">Mahadev Tours & Travels</span>
    </div>
  </motion.div>
);

export default LoadingScreen;
