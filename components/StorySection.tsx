"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TimelineEvent {
    id: string;
    title: string;
    content: string[];
}

const timelineEvents: TimelineEvent[] = [
    {
        id: "early-pressure",
        title: "Early Pressure",
        content: [
            "The glass wall behind me held a crowd of spectators, but I only saw one face: Samyak's. Fifth grade, first squash tournament. Each round I lost, that pressure grew louder—the belief that when it really mattered, I would fall short. After the final point, I locked myself in the bathroom and cried for twenty minutes, too ashamed to walk out.",
            "I assumed volleyball would fix things—a team sport would spread pressure across six players. That theory lasted until my first season at one of the Bay Area's most competitive clubs. A serve came straight at me and I whiffed it completely. I started hoping to stay on the bench, where mistakes were impossible.",
        ],
    },
    {
        id: "pattern-continues",
        title: "The Pattern Follows",
        content: [
            "At the UCI GSET summer research program, after flying directly from Volleyball Nationals, I froze during our final presentation. My teammates continued without missing a beat while I stood in silence under the stage lights.",
            "It became what psychologists call a flashbulb memory: vivid, persistent, humiliating. For a long time, it felt like proof of a fixed truth—I couldn't perform when it mattered.",
        ],
    },
    {
        id: "finding-purpose",
        title: "Finding Purpose",
        content: [
            "What changed was not the existence of pressure, but my relationship to it. I began developing a game to help autistic children regulate emotions, inspired by a childhood friend who treated me with kindness when I was the awkward kid who didn't fit in.",
            "I implemented OpenCV-based computer vision to detect diaphragmatic breathing from a webcam, distinguishing shallow chest breaths from deeper belly breaths. Nights disappeared into debugging—but the pressure felt different. It wasn't about proving I was enough; it was about building something that mattered to someone else.",
        ],
    },
    {
        id: "testing-hypothesis",
        title: "Testing the Hypothesis",
        content: [
            "Maybe pressure itself wasn't the enemy—maybe the problem was why I was showing up. To test that, I walked into my first Tech4Silvers workshop, facing a room of older adults learning digital skills.",
            "Then a seventy-year-old woman successfully placed her first video call to her grandson. Watching her face light up, the pressure didn't disappear—it just became irrelevant next to the purpose in front of me.",
        ],
    },
    {
        id: "seeking-stakes",
        title: "Seeking High Stakes",
        content: [
            "Once I stopped treating pressure as a verdict and started treating it as a signal of meaning, I began seeking high-stakes moments. I ran for NHS leadership—my hands trembled at the podium, but speaking about what genuinely mattered connected. I was elected Sergeant at Arms.",
            "During NASA Space Apps, when my team hit a wall with minutes left, I found myself managing the chaos instead of freezing inside it. We submitted just in time—and won.",
        ],
    },
    {
        id: "volleyball-transformed",
        title: "Volleyball Transformed",
        content: [
            "The same sport that once made me hope for the bench now has me competing nationally. Last season, my team placed second at USAV Nationals in Salt Lake City.",
            "I still feel a spike of nerves before every match, but I no longer interpret it as a prediction of failure. It's evidence that I care about the outcome.",
        ],
    },
    {
        id: "research-readiness",
        title: "Research and Readiness",
        content: [
            "This fall, I co-authored a preprint challenging Euler's 250-year-old formula for predicting structural buckling, developing a physics-informed XGBoost model that reached R² of 0.97 and using SHAP analysis to understand why it outperformed classical theory.",
            "The pressure feels remarkably similar to that fifth-grade tournament—same elevated heart rate, same narrowed focus. The difference is what that feeling means to me now.",
        ],
    },
    {
        id: "looking-forward",
        title: "The Person I'm Becoming",
        content: [
            "Today, when pressure shows up, it's a reminder that I am working on something that matters—to a teammate, a workshop participant, a research question, or a community I care about.",
            "The fifth-grader crying in the bathroom is still part of my story, but he no longer decides where it ends.",
        ],
    },
];

export default function StorySection() {
    return (
        <section
            id="story"
            className="py-20 relative"
            style={{
                backgroundImage: 'url(/backgrounds/turkey_ocean.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        My Story
                    </h2>
                    <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        The context behind how I handle pressure in research, competitions, and leadership.
                    </p>
                </motion.div>

                {/* Timeline with Cards */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-500 to-slate-300"></div>

                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative mb-8 ml-12 md:ml-16"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[26px] md:-left-[34px] top-2 w-4 h-4 rounded-full bg-slate-700 border-4 border-white shadow"></div>

                            {/* Content card */}
                            <motion.div
                                whileHover={{ x: 4, scale: 1.01 }}
                                className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                    {event.title}
                                </h3>
                                <div className="space-y-3">
                                    {event.content.map((paragraph, idx) => (
                                        <p key={idx} className="text-slate-700 leading-relaxed text-sm md:text-base">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bridge to Evidence */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-600 text-lg">
                        That mindset now shows up in projects like{" "}
                        <Link href="#portfolio" className="text-slate-800 font-semibold hover:underline">
                            Beyond Euler
                        </Link>{" "}
                        and{" "}
                        <Link href="#extracurriculars" className="text-slate-800 font-semibold hover:underline">
                            Tech4Silvers
                        </Link>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
