import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers, Terminal } from "lucide-react";

export function Home() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                        Master TypeScript by
                        <br className="hidden sm:inline" />
                        <span className="text-primary"> Visualizing It</span>
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Don't just read definitions. See the <strong>Stack & Heap</strong> in real-time, step through execution, and build a deep mental model of how TypeScript works.
                    </p>
                    <div className="space-x-4">
                        <Link to="/concepts">
                            <Button size="lg" className="gap-2">
                                Start Learning <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/playground">
                            <Button variant="outline" size="lg">
                                Try Playground
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <Layers className="h-10 w-10 mb-2 text-primary" />
                            <CardTitle>Memory Graph</CardTitle>
                            <CardDescription>
                                Visualize the difference between <strong>Stack</strong> (primitives) and <strong>Heap</strong> (objects). See references and mutations happen live.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Cpu className="h-10 w-10 mb-2 text-primary" />
                            <CardTitle>Execution Flow</CardTitle>
                            <CardDescription>
                                Step-by-step execution highlighting. Understand exactly how the JavaScript engine processes your TypeScript code.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Terminal className="h-10 w-10 mb-2 text-primary" />
                            <CardTitle>Interactive Playground</CardTitle>
                            <CardDescription>
                                A full-featured Monaco editor. Write code, fix type errors, and visualize the results instantly in the browser.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>
        </div>
    );
}
