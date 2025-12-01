import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { concepts } from "@/data/concepts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Topic() {
    const { topicId } = useParams();
    const concept = concepts.find((c) => c.id === topicId);

    if (!concept) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold">Topic not found</h1>
                <Link to="/concepts">
                    <Button variant="link">Back to Concepts</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden">
            {/* Header */}
            <header className="border-b bg-muted/40 p-4">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/concepts">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-lg font-bold">{concept.title}</h1>
                            <p className="text-xs text-muted-foreground">{concept.phase}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                            <RefreshCw className="mr-2 h-4 w-4" /> Reset
                        </Button>
                        <Button size="sm">
                            <Play className="mr-2 h-4 w-4" /> Run
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Split View */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel: Theory & Code */}
                <div className="w-1/2 border-r p-6 overflow-y-auto bg-background">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="prose dark:prose-invert max-w-none"
                    >
                        <h2>Understanding {concept.title}</h2>
                        <p>{concept.description}</p>

                        <div className="my-8 p-4 bg-muted rounded-lg border-l-4 border-primary">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Key Takeaway</h3>
                            <p className="m-0 font-medium">
                                This is where the core mental model explanation will go. It will be specific to {concept.title}.
                            </p>
                        </div>

                        <h3>Example Code</h3>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                            <code>{`// Example code for ${concept.title}
const example = "Hello World";
console.log(example);`}</code>
                        </pre>
                    </motion.div>
                </div>

                {/* Right Panel: Visualization Stage */}
                <div className="w-1/2 bg-muted/10 p-6 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-5" />

                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <Card className="w-full max-w-md p-8 text-center border-dashed border-2 bg-background/50 backdrop-blur">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Play className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Visualization Stage</h3>
                                <p className="text-muted-foreground">
                                    This area will render the interactive memory graph and execution flow for <strong>{concept.title}</strong>.
                                </p>
                            </motion.div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
