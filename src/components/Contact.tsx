import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuMail } from "react-icons/lu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isLoading } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: send form data to server
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "Contact";
  }, [])


  return (
    <div className="py-24 flex-grow px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-slate-100 p-8 md:px-60 md:py-8 rounded-lg ">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg">
              <LuMail className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold  mb-4">
            Get in touch
          </h1>
          <p className="text-gray-600">Let's work together!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Full name"
              className="w-full"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email address"
              className="w-full"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("phone")}
              type="tel"
              placeholder="Phone number"
              className="w-full"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              className="w-full min-h-[150px]"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;