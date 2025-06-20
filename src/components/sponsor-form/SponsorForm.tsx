// src/components/SponsorForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const sponsorSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
  profession: z.string().min(1, "Profession is required"),
  company: z.string().min(1, "Company is required"),
  address: z.string().min(5, "Address is required"),
  country: z.string().min(1, "Country is required"),
  ticketType: z.enum(["Bronze", "Silver", "Gold"]),
  agree: z.boolean().refine((v) => v, "You must agree to continue"),
});
type FormData = z.infer<typeof sponsorSchema>;

export default function SponsorForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      profession: "",
      company: "",
      address: "",
      country: "",
      ticketType: "Bronze",
      agree: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you! Your sponsorship request has been submitted.");
    reset();
  };

  const inputClass = `
    w-full px-4 py-2 bg-base-card dark:bg-white/5 backdrop-blur-sm
    border border-base-border dark:border-white/20 rounded-lg
    text-base-text dark:text-white
    focus:outline-none focus:ring-2 focus:ring-teal-300
    transition-colors duration-200
  `;

  const agreeChecked = watch("agree");

  return (
    <section className=" bg-base-main dark:bg-base-card transition-colors duration-300">
        <div className=" bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent)] py-20">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-base-text dark:text-white mb-8">
          Become a Sponsor
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Email *
            </label>
            <input
              type="email"
              {...register("email")}
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-base-text dark:text-white">
                First Name *
              </label>
              <input
                {...register("firstName")}
                className={inputClass}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-base-text dark:text-white">
                Last Name *
              </label>
              <input
                {...register("lastName")}
                className={inputClass}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Phone
            </label>
            <input
              {...register("phone")}
              className={inputClass}
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Profession *
            </label>
            <input
              {...register("profession")}
              className={inputClass}
            />
            {errors.profession && (
              <p className="mt-1 text-sm text-red-500">
                {errors.profession.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Company *
            </label>
            <input
              {...register("company")}
              className={inputClass}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Address *
            </label>
            <input
              {...register("address")}
              className={inputClass}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Country *
            </label>
            <Select
              value={watch("country")}
              onValueChange={(val) => setValue("country", val)}
            >
              <SelectTrigger className={`${inputClass} cursor-pointer py-5`}>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {["Morocco", "United States", "France", "Germany", "Other"].map(
                  (c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Ticket Type */}
          <div>
            <label className="block mb-1 text-base-text dark:text-white">
              Ticket Type *
            </label>
            <Select
              value={watch("ticketType")}
              onValueChange={(val) => setValue("ticketType", val as any)}
            >
              <SelectTrigger className={`${inputClass} cursor-pointer  py-5`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["Bronze", "Silver", "Gold"].map((tier) => (
                  <SelectItem key={tier} value={tier}>
                    {tier}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Agree */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="agree"
              checked={agreeChecked}
              onCheckedChange={(val) => setValue("agree", !!val)}
              className={`
                h-5 w-5 rounded
                ${
                  agreeChecked
                    ? "bg-teal-300 border-teal-300"
                    : "bg-base-card bg-white/5 border-base-border border-white/20"
                }
                focus:outline-none focus:ring-2 focus:ring-teal-300
                transition-colors
              `}
            />
            <label
              htmlFor="agree"
              className="text-base-text dark:text-white"
            >
              I agree to share my information with WorldPtXSummit™ participants *
            </label>
          </div>
          {errors.agree && (
            <p className="mt-1 text-sm text-red-500">{errors.agree.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition"
          >
            Submit Request
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}
