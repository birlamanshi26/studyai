import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our AI tutor",
    features: ["10 questions per day", "Basic AI explanations", "Limited study plans", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Student",
    price: "$9.99",
    description: "Everything you need to excel",
    features: [
      "Unlimited questions",
      "Advanced AI tutoring",
      "Personalized study plans",
      "Progress tracking",
      "Priority support",
      "Practice question generator",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "For serious learners",
    features: [
      "Everything in Student",
      "Expert-level AI explanations",
      "Custom learning paths",
      "Advanced analytics",
      "Exam preparation tools",
      "1-on-1 coaching sessions",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Simple, transparent pricing"}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Choose the perfect plan for your learning journey. All plans include a 14-day free trial."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`border-border bg-card ${plan.popular ? "ring-2 ring-accent" : ""}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {"Most Popular"}
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{"/month"}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
