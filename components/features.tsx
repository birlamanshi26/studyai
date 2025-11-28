import { Brain, BookOpen, TrendingUp, Zap, Target, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Tutoring",
    description: "Get instant, personalized explanations for any topic. Our AI adapts to your learning style and pace.",
  },
  {
    icon: BookOpen,
    title: "Smart Study Plans",
    description: "Receive customized study schedules based on your goals, deadlines, and learning patterns.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visualize your improvement over time with detailed analytics and insights on your learning journey.",
  },
  {
    icon: Zap,
    title: "Instant Practice Questions",
    description: "Generate unlimited practice problems tailored to your current skill level and areas of improvement.",
  },
  {
    icon: Target,
    title: "Focused Learning",
    description: "Identify and work on your weak areas with intelligent recommendations and targeted exercises.",
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Support",
    description: "Ask questions anytime, anywhere. Get detailed explanations and step-by-step solutions instantly.",
  },
]

export function Features() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Everything you need to excel"}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Powerful features designed to accelerate your learning and help you achieve your academic goals."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-border bg-card transition-colors hover:bg-card/80">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
