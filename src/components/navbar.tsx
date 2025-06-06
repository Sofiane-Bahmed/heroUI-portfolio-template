import { useState } from "react";
import {
  Link as RouterLink,
  useLocation
} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import { DATA } from "../data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = DATA.navigation;

  return (
    <Navbar
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
    >
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RouterLink
              to="/"
              className="font-bold text-inherit text-xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </RouterLink>
          </motion.div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex justify-center gap-6 flex-grow">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <RouterLink
                  to={item.href}
                  className={`flex items-center gap-2 transition-colors ${location.pathname === item.href
                    ? "text-primary-500 font-semibold"
                    : "text-foreground hover:text-primary-500"
                    }`}
                >
                  <Icon icon={item.icon} className="w-5 h-5 text-primary-500" />
                  {item.name}
                </RouterLink>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/80 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <RouterLink
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-medium hover:bg-content1 transition-colors"
                >
                  <Icon icon={item.icon} className="w-5 h-5 text-primary-500" />
                  {item.name}
                </RouterLink>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
