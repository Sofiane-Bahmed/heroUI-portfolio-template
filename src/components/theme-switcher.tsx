import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "@heroui/use-theme";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        isIconOnly
        variant="light"
        onPress={() => setTheme(isDark ? "light" : "dark")}
        className="text-foreground"
        aria-label="Toggle theme"
      >
        <Icon
          icon={isDark ? "lucide:sun" : "lucide:moon"}
          className="w-5 h-5"
        />
      </Button>
    </motion.div>
  );
};