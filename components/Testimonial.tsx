import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-brand-100">
      <Quote className="text-brand-300 mb-4" size={32} />
      <p className="text-muted text-lg mb-4 italic leading-relaxed">
        "{quote}"
      </p>
      <div>
        <p className="font-semibold text-brand-900">{author}</p>
        {role && <p className="text-sm text-muted">{role}</p>}
      </div>
    </div>
  );
}

