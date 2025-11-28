import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "College Sophomore",
    avatar: "/diverse-female-student.png",
    initials: "SJ",
    content:
      "This AI tutor helped me improve my calculus grade from a C to an A in just one semester. The personalized explanations are incredible!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "High School Senior",
    avatar: "/male-student-studying.png",
    initials: "MC",
    content:
      "The practice questions are perfectly tailored to my level. I finally understand chemistry concepts that confused me for months.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Graduate Student",
    avatar: "/graduate-student.png",
    initials: "ER",
    content:
      "Best study tool I've ever used. The AI explains complex topics in ways that actually make sense. Saved me countless hours of frustration.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Loved by students everywhere"}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {"See how students are transforming their academic performance with our AI Study Assistant."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border bg-card">
              <CardContent className="pt-6">
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 leading-relaxed text-muted-foreground">{`"${testimonial.content}"`}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
