import { Card, CardBody, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';

export const TestimonialCard = ({ name, role, content, avatar }) => (
    <Card className="border-none h-full bg-white/90 dark:bg-black/40">
        <CardBody className="p-6">
            <Icon icon="lucide:quote" className="w-8 h-8 text-primary-500 mb-4" />
            <p className="text-foreground-600 mb-6 italic">"{content}"</p>
            <div className="flex items-center gap-4">
                <Avatar
                    src={avatar}
                    size="lg"
                    className="ring-2 ring-primary-200"
                />
                <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-foreground-500">{role}</p>
                </div>
            </div>
        </CardBody>
    </Card>
);