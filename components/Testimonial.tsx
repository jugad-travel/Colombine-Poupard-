import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  month: string;
  text: string;
}

export function Testimonial({ name, month, text }: TestimonialProps) {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-brand-200/50 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* En-tête avec nom et étoiles */}
      <div className="mb-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-serif font-semibold text-brand-900">
            {name}
          </h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted">Visité en {month}</p>
      </div>
      
      {/* Témoignage */}
      <p className="text-muted leading-relaxed flex-grow text-sm sm:text-base">
        {text}
      </p>
    </div>
  );
}
