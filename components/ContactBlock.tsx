import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";

export function ContactBlock() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <a
        href={`tel:${PRACTICE_INFO.phone.replace(/\s/g, "")}`}
        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-100 hover:shadow-md transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
      >
        <Phone className="text-brand-700 mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="font-semibold text-brand-900 mb-1">Téléphone</h3>
          <p className="text-muted">{PRACTICE_INFO.phone}</p>
        </div>
      </a>

      <a
        href={`mailto:${PRACTICE_INFO.email}`}
        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-100 hover:shadow-md transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
      >
        <Mail className="text-brand-700 mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="font-semibold text-brand-900 mb-1">Email</h3>
          <p className="text-muted break-all">{PRACTICE_INFO.email}</p>
        </div>
      </a>

      <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-100">
        <MapPin className="text-brand-700 mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="font-semibold text-brand-900 mb-1">Adresse</h3>
          <p className="text-muted">{PRACTICE_INFO.address}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-100">
        <Clock className="text-brand-700 mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="font-semibold text-brand-900 mb-1">Horaires</h3>
          <p className="text-muted text-sm">
            Lun–Ven : {PRACTICE_INFO.hours.weekdays}
            <br />
            Sam : {PRACTICE_INFO.hours.saturday}
          </p>
        </div>
      </div>
    </div>
  );
}

