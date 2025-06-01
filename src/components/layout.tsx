import { Navigation } from "./navbar";
import { Footer } from "./footer";
import { PageWrapper } from "./page-wrapper";
import { StarsBackground } from "./backgrounds/stars";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

    const content = (
        <main className="bg-background min-h-screen bg-gradient-to-b from-background to-content2">
            <Navigation />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
        </main>
    );

    return (
        <StarsBackground >
            {content}
        </StarsBackground>
    )
}
