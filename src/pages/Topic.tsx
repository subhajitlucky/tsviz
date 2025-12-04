import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { concepts } from "@/data/concepts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Play, BookOpen, Code2, Lightbulb } from "lucide-react";

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
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            {/* Hero Section */}
            <div className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="container py-4">
                    <div className="flex items-center justify-between mb-3">
                        <Link to="/concepts">
                            <Button variant="ghost" size="sm" className="gap-2 h-8">
                                <ArrowLeft className="h-3.5 w-3.5" />
                                Back
                            </Button>
                        </Link>
                        <Badge variant="outline" className="text-xs">
                            {concept.phase}
                        </Badge>
                    </div>
                    <div className="max-w-4xl">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                            {concept.title}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {concept.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container py-8 max-w-4xl">
                <div className="space-y-8">

                    {/* Definition Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <h2 className="text-xl font-semibold">What is it?</h2>
                        </div>
                        <Card className="border-l-4 border-l-primary">
                            <CardContent className="p-5">
                                <p className="text-sm leading-relaxed whitespace-pre-line text-foreground/90">
                                    {concept.longDescription || concept.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Syntax Section */}
                    {concept.syntax && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h2 className="text-xl font-semibold">Syntax</h2>
                            </div>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="bg-muted/50 rounded-lg p-3 border">
                                        <code className="font-mono text-xs md:text-sm text-foreground">
                                            {concept.syntax}
                                        </code>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.section>
                    )}

                    {/* Example Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                <Code2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-xl font-semibold">Example</h2>
                        </div>
                        <Card>
                            <CardContent className="p-0">
                                {/* Terminal Header */}
                                <div className="bg-muted/30 border-b px-3 py-2 flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                    </div>
                                    <span className="text-xs text-muted-foreground ml-1 font-medium">
                                        example.ts
                                    </span>
                                </div>
                                {/* Code Block */}
                                <pre className="p-4 overflow-x-auto bg-muted/10">
                                    <code className="font-mono text-sm leading-relaxed">
                                        {concept.exampleCode || `// Example code for ${concept.title}
const example = "Hello World";
console.log(example);`}
                                    </code>
                                </pre>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Key Takeaway */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="bg-gradient-to-br from-primary/5 via-primary/5 to-transparent border-primary/20">
                            <CardContent className="p-4">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base mb-1.5">Key Takeaway</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Understanding <strong className="text-foreground">{concept.title}</strong> is
                                            fundamental to mastering TypeScript. Practice with the examples above and
                                            experiment with variations to solidify your knowledge.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Interactive Visualization CTA */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center py-12"
                    >
                        <div className="inline-block p-6 rounded-xl bg-muted/30 border border-dashed border-primary/30">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Play className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Interactive Visualization</h3>
                            <p className="text-sm text-muted-foreground mb-4 max-w-md">
                                See how <strong>{concept.title}</strong> works in memory with our
                                interactive visualization tool.
                            </p>
                            <Button size="sm" disabled className="rounded-full">
                                <Play className="mr-2 h-3.5 w-3.5" />
                                Coming Soon
                            </Button>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
}
