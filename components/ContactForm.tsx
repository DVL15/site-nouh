"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  reason: string;
  message: string;
  consent: boolean;
};

const reasons = [
  "Bilan neuropsychologique (enfant)",
  "Bilan neuropsychologique (adulte)",
  "Troubles DYS",
  "TDAH",
  "Troubles du spectre autistique (TSA)",
  "Accompagnement adulte",
  "Renseignement / Question",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 flex items-center justify-center mb-5">
          <CheckCircle size={30} className="text-sage-500" />
        </div>
        <h3 className="font-serif text-xl text-gray-800 mb-2">
          Message envoyé !
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          Merci pour votre message. Je vous répondrai dans les 24 à 48 heures ouvrées.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-soft-purple text-sm underline underline-offset-2 hover:text-lavender-600 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name & Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">
            Nom & Prénom <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            placeholder="Marie Dupont"
            className={`input-field ${errors.name ? "border-rose-300 focus:border-rose-400 focus:ring-rose-200/30" : ""}`}
            {...register("name", { required: "Ce champ est requis" })}
          />
          {errors.name && (
            <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">
            Email <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            placeholder="marie@email.com"
            className={`input-field ${errors.email ? "border-rose-300" : ""}`}
            {...register("email", {
              required: "Ce champ est requis",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Adresse email invalide",
              },
            })}
          />
          {errors.email && (
            <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1.5">
          Téléphone
        </label>
        <input
          type="tel"
          placeholder="06 XX XX XX XX"
          className="input-field"
          {...register("phone")}
        />
      </div>

      {/* Reason */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1.5">
          Motif de consultation <span className="text-rose-400">*</span>
        </label>
        <select
          className={`input-field ${errors.reason ? "border-rose-300" : ""}`}
          {...register("reason", { required: "Veuillez choisir un motif" })}
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionnez un motif…
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p className="text-rose-400 text-xs mt-1">{errors.reason.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1.5">
          Sujet
        </label>
        <input
          type="text"
          placeholder="Ex : Demande de bilan pour mon fils de 9 ans"
          className="input-field"
          {...register("subject")}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1.5">
          Message <span className="text-rose-400">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Décrivez brièvement votre situation ou vos questions…"
          className={`input-field resize-none ${errors.message ? "border-rose-300" : ""}`}
          {...register("message", {
            required: "Merci de laisser un message",
            minLength: { value: 20, message: "Votre message est trop court" },
          })}
        />
        {errors.message && (
          <p className="text-rose-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          className="mt-0.5 rounded border-gray-300 text-soft-purple focus:ring-soft-purple/30 cursor-pointer flex-shrink-0"
          {...register("consent", {
            required: "Vous devez accepter pour continuer",
          })}
        />
        <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
          J'accepte que mes données personnelles soient utilisées uniquement pour me
          recontacter dans le cadre de ma demande. Aucune donnée ne sera transmise à des
          tiers.
          {errors.consent && (
            <span className="block text-rose-400 mt-1">{errors.consent.message}</span>
          )}
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer le message
            <Send size={15} />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-rose-400 text-sm text-center">
          Une erreur est survenue. Veuillez réessayer ou me contacter par téléphone.
        </p>
      )}
    </form>
  );
}
