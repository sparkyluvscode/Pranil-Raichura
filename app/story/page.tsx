import StoryTimeline from "@/components/StoryTimeline";
import Navigation from "@/components/Navigation";

export default function StoryPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <StoryTimeline />
        </main>
    );
}
