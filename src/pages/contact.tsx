import React, {
    useState,
    useCallback,
    useEffect
} from "react";
import { addToast } from "@heroui/react";
import emailjs from "emailjs-com";

import { ContactFormData, ContactPageState } from "../components/contact/types";
import { PageHeader } from "../components/page-header";
import { ContactCard } from "../components/contact/contact-card";
import { ContactForm } from "../components/contact/contact-form";
import { ContactMap } from "../components/contact/contact-map";
import { DATA } from "../data";

const EMAIL_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const validateEmailConfig = (): string[] => {
    const missing = Object.entries(EMAIL_CONFIG)
        .filter(([_, value]) => !value)
        .map(([key]) => `VITE_EMAILJS_${key.toUpperCase().replace(/([A-Z])/g, '_$1')}`);

    return missing;
};

const ContactPage: React.FC = () => {
    const [state, setState] = useState<ContactPageState>({
        isSubmitting: false,
        isSuccess: false,
        error: null,
    });

    // Validate environment variables on mount
    useEffect(() => {
        const missingVars = validateEmailConfig();
        if (missingVars.length > 0) {
            console.error('Missing EmailJS environment variables:', missingVars);
            setState(prev => ({
                ...prev,
                error: 'Email configuration is incomplete. Please check environment variables.',
            }));
        }
    }, []);

    const handleSubmit = useCallback(async (formData: ContactFormData): Promise<void> => {
        const missingVars = validateEmailConfig();
        if (missingVars.length > 0) {
            throw new Error('Email service is not properly configured');
        }

        setState(prev => ({ ...prev, isSubmitting: true, error: null }));

        try {
            const tempForm = document.createElement('form');

            // Add form data as hidden inputs
            Object.entries(formData).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                tempForm.appendChild(input);
            });

            await emailjs.sendForm(
                EMAIL_CONFIG.serviceId!,
                EMAIL_CONFIG.templateId!,
                tempForm,
                EMAIL_CONFIG.publicKey!
            );

            setState(prev => ({ ...prev, isSuccess: true }));

            addToast({
                title: "Message Sent Successfully",
                description: "Thank you for your message! I'll get back to you soon.",
                color: "success",
            });

        } catch (error) {
            console.error("EmailJS Error:", error);

            const errorMessage = error instanceof Error
                ? error.message
                : "Failed to send message. Please try again later.";

            setState(prev => ({ ...prev, error: errorMessage }));

            addToast({
                title: "Failed to Send Message",
                description: "Unable to send your message. Please try again or contact me directly.",
                color: "danger",
            });

            throw error;
        } finally {
            setState(prev => ({ ...prev, isSubmitting: false }));
        }
    }, []);

    const handleReset = useCallback(() => {
        setState({
            isSubmitting: false,
            isSuccess: false,
            error: null,
        });
    }, []);

    return (
        <section className="py-20">
            <PageHeader texts={DATA.morphingTexts.contact} />
            <div className="container mx-auto px-4">
                <ContactCard heading={DATA.contact.heading}>
                    <ContactMap src={DATA.contact.location.mapSrc} />
                    <ContactForm
                        onSubmit={handleSubmit}
                        isSubmitting={state.isSubmitting}
                        isSuccess={state.isSuccess}
                        onReset={handleReset}
                    />
                </ContactCard>

                {state.error && (
                    <div className="mt-6 p-4 bg-danger-50 border border-danger-200 rounded-lg">
                        <p className="text-danger-700 text-sm">{state.error}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactPage;