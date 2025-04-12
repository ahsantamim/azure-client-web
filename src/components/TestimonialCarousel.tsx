"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  initials: string;
  content: string;
  rating: number;
  position: {
    top: string;
    left: string;
    rotate: string;
    zIndex: number;
  };
}

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Shohan Ahmed",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SA",
      content:
        "The food was absolutely amazing! Best dining experience I've had in years. The staff was attentive and friendly.",
      rating: 5,
      position: { top: "10%", left: "15%", rotate: "-3deg", zIndex: 2 },
    },
    {
      id: 2,
      name: "Amrina Chowdhury",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
      content:
        "Incredible atmosphere and the chef's special was to die for. Will definitely be coming back soon!",
      rating: 5,
      position: { top: "25%", left: "55%", rotate: "2deg", zIndex: 3 },
    },
    {
      id: 3,
      name: "Mohammad Zamilur Rahman",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MZR",
      content:
        "The service was impeccable and the menu had so many great options. Loved the wine pairing suggestions!",
      rating: 4.5,
      position: { top: "50%", left: "25%", rotate: "-2deg", zIndex: 1 },
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DT",
      content:
        "We celebrated our anniversary here and it couldn't have been more perfect. The desserts were exceptional.",
      rating: 5,
      position: { top: "60%", left: "60%", rotate: "3deg", zIndex: 2 },
    },
    {
      id: 5,
      name: "Olivia Parker",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "OP",
      content:
        "Such a cozy restaurant with authentic flavors. The pasta was homemade and absolutely delicious!",
      rating: 4.5,
      position: { top: "35%", left: "10%", rotate: "4deg", zIndex: 1 },
    },
    {
      id: 6,
      name: "Kazi Asharaf",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "KA",
      content:
        "The tasting menu was a culinary journey! Each dish was better than the last. Highly recommend!",
      rating: 5,
      position: { top: "15%", left: "70%", rotate: "-4deg", zIndex: 2 },
    },
  ]);

  // Randomize positions slightly on each render for a more dynamic feel
  useEffect(() => {
    const randomizePositions = () => {
      setTestimonials((prev) =>
        prev.map((testimonial) => ({
          ...testimonial,
          position: {
            ...testimonial.position,
            top: `${
              Number.parseInt(testimonial.position.top) +
              (Math.random() * 5 - 2.5)
            }%`,
            left: `${
              Number.parseInt(testimonial.position.left) +
              (Math.random() * 5 - 2.5)
            }%`,
            rotate: `${
              Number.parseInt(testimonial.position.rotate) +
              (Math.random() * 2 - 1)
            }deg`,
          },
        }))
      );
    };

    // Only randomize once when component mounts
    if (typeof window !== "undefined") {
      randomizePositions();
    }
  }, []);

  return (
    <div className=" relative w-full bg-white py-12 px-4 overflow-hidden h-[60vh]">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied customers
          about their dining experiences.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[calc(50vh-120px)]">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="absolute w-56 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{
              top: testimonial.position.top,
              left: testimonial.position.left,
              transform: `rotate(${testimonial.position.rotate})`,
              zIndex: testimonial.position.zIndex,
            }}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    {testimonial.rating % 1 > 0 && (
                      <div className="relative">
                        <Star className="h-3.5 w-3.5 text-amber-400" />
                        <div
                          className="absolute top-0 left-0 overflow-hidden"
                          style={{ width: "50%" }}
                        >
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
