import { Tabs, Tab } from "@heroui/react";

import { ProjectsTabsProps } from "./types";

export const ProjectsTabs = ({
    categories,
    selectedCategory,
    onSelectCategory
}: ProjectsTabsProps) => (
    <div className="overflow-x-auto w-full mb-8">
        <Tabs
            aria-label="Project Categories"
            selectedKey={selectedCategory}
            onSelectionChange={(key) => onSelectCategory(String(key))}
            variant="underlined"
            className="flex w-max min-w-full justify-start md:justify-center mb-4 "
        >
            {categories.map((category) => (
                <Tab
                    key={category}
                    title={category}
                    className="sm:text-base"
                />
            ))}
        </Tabs>
    </div>
);