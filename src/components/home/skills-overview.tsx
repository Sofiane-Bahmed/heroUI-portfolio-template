import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "../textAnimations/gradient-text";
import { DATA } from "../../data";

export const SkillsOverviewSection = () => {
  const overview = DATA.home.skills.overview;
  const { sectionTitle, sectionDescription } = DATA.home.skills
  return (
    <section className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4"
            text={sectionTitle} />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {overview.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="border-none shadow-md">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-${skill.color}-100`}>
                      <Icon
                        icon={skill.icon}
                        className={`w-6 h-6 text-${skill.color}-500`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <p className="text-foreground-600">{skill.level}%</p>
                    </div>
                  </div>
                  <Progress
                    value={skill.level}
                    color={skill.color}
                    className="h-2"
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
