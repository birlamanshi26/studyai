import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Advanced AI</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {"Study Smarter with AI"}
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {
              "Transform your learning experience with personalized AI tutoring, instant answers, and adaptive practice questions. Master any subject faster than ever before."
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto">
              {"Get Started Free"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              {"View Demo"}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
            <div>
              <div className="text-3xl font-bold text-foreground">{"50K+"}</div>
              <div className="mt-1 text-sm text-muted-foreground">{"Active Students"}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">{"98%"}</div>
              <div className="mt-1 text-sm text-muted-foreground">{"Success Rate"}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">{"1M+"}</div>
              <div className="mt-1 text-sm text-muted-foreground">{"Questions Answered"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
