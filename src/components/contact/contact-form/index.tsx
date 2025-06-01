import React, { useCallback } from "react";
import {
    Input,
    Textarea,
    Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import { ContactFormProps } from "../types";
import { useContactForm } from "../../../hooks/use-contact-form";
import { SuccessMessage } from "./success-message";

export const ContactForm: React.FC<ContactFormProps> = ({
    onSubmit,
    isSubmitting,
    isSuccess,
    onReset,
}) => {
    const {
        formData,
        errors,
        isValid,
        handleInputChange,
        handleSubmit,
        resetForm,
        validateField,
    } = useContactForm();

    const handleFormSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        await handleSubmit(onSubmit);
    }, [handleSubmit, onSubmit]);

    const handleReset = useCallback(() => {
        resetForm();
        onReset();
    }, [resetForm, onReset]);

    const handleInputBlur = useCallback((
        field: keyof typeof formData,
        value: string
    ) => {
        validateField(field, value);
    }, [validateField]);

    if (isSuccess) {
        return (
            <AnimatePresence mode="wait">
                <SuccessMessage onReset={handleReset} />
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.form
                onSubmit={handleFormSubmit}
                className="space-y-6"
                noValidate
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Name"
                        name="name"
                        isRequired
                        placeholder="Your full name"
                        variant="bordered"
                        value={formData.name}
                        onValueChange={(value) => handleInputChange('name', value)}
                        onBlur={() => handleInputBlur('name', formData.name)}
                        errorMessage={errors.name}
                        isInvalid={!!errors.name}
                        startContent={<Icon icon="lucide:user" />}
                    />

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        isRequired
                        placeholder="your.email@example.com"
                        variant="bordered"
                        value={formData.email}
                        onValueChange={(value) => handleInputChange('email', value)}
                        onBlur={() => handleInputBlur('email', formData.email)}
                        errorMessage={errors.email}
                        isInvalid={!!errors.email}
                        startContent={<Icon icon="lucide:mail" />}
                    />
                </div>

                <Input
                    label="Subject"
                    name="subject"
                    isRequired
                    placeholder="Project type or inquiry topic"
                    variant="bordered"
                    value={formData.subject}
                    onValueChange={(value) => handleInputChange('subject', value)}
                    onBlur={() => handleInputBlur('subject', formData.subject)}
                    errorMessage={errors.subject}
                    isInvalid={!!errors.subject}
                    startContent={<Icon icon="lucide:briefcase" />}
                />

                <Textarea
                    label="Message"
                    name="message"
                    isRequired
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    variant="bordered"
                    minRows={4}
                    maxRows={8}
                    value={formData.message}
                    onValueChange={(value) => handleInputChange('message', value)}
                    onBlur={() => handleInputBlur('message', formData.message)}
                    errorMessage={errors.message}
                    isInvalid={!!errors.message}
                />

                <div className="flex flex-col gap-4">
                    <Button
                        color="primary"
                        size="lg"
                        className="w-full h-14 text-base font-medium"
                        type="submit"
                        isLoading={isSubmitting}
                        isDisabled={!isValid || isSubmitting}
                        startContent={
                            !isSubmitting && (
                                <Icon
                                    icon="lucide:send"
                                    className="flex-shrink-0 text-lg"
                                />
                            )
                        }
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <Button
                        color="default"
                        variant="bordered"
                        size="lg"
                        className="w-full h-14 text-base"
                        onPress={resetForm}
                        isDisabled={isSubmitting}
                        startContent={
                            <Icon
                                icon="lucide:refresh-cw"
                                className="flex-shrink-0 text-lg"
                            />
                        }
                    >
                        Reset Form
                    </Button>
                </div>
            </motion.form>
        </AnimatePresence>
    );
};