import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, SendHorizontal } from "lucide-react";
import {
  contactCardVariants,
  contactCardsGrid,
  contactChannelItem,
  contactChannelList,
  contactFormItem,
  contactFormStagger,
  contactHeaderItem,
  contactHeaderStagger,
  contactSectionVariants,
} from "@/motion/contactVariants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const channels = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    description: "Fastest response. Expect a reply in under a day.",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    description: "Best for role conversations and collaborations.",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    description: "See my active projects and experiments.",
    icon: Github,
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [contextValue, setContextValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    context: false,
    message: false,
  });

  const defaultPlaceholders = {
    name: "Please enter your name",
    email: "name@company.com",
    context: "Full-stack role, associate developer, product MVP...",
    message: "Tell me about the team, goals, and the next milestone.",
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSending) return;
    const nextErrors = {
      name: !nameValue.trim(),
      email: !emailValue.trim(),
      context: !contextValue.trim(),
      message: !messageValue.trim(),
    };

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setErrors({ name: false, email: false, context: false, message: false });
    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_ldm79gd",
        "template_y116wqn",
        formRef.current,
        "fcx6i3zRP8niexTPm"
      );
      alert("Message sent successfully!");
      formRef.current.reset();
      setNameValue("");
      setEmailValue("");
      setContextValue("");
      setMessageValue("");
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Please try again later.");
      setNameValue("");
      setEmailValue("");
      setContextValue("");
      setMessageValue("");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative mx-auto mt-6 w-full max-w-(--breakpoint-xl) overflow-hidden rounded-[2.5rem] border border-white/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 min-h-[520px] bg-[radial-gradient(circle_at_top,_rgba(253,208,166,0.22),rgba(9,14,24,0)_65%)]"
      variants={contactSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col gap-4 text-left sm:text-center"
        variants={contactHeaderStagger}
      >
        <motion.div variants={contactHeaderItem}>
          <Badge className="w-fit rounded-full bg-sec/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sec sm:mx-auto">
            Contact
          </Badge>
        </motion.div>
        <motion.h2
          className="text-balance text-4xl font-semibold text-sec sm:text-5xl halant-regular"
          variants={contactHeaderItem}
        >
          Full-stack developer ready to join your team
        </motion.h2>
        <motion.p
          className="max-w-2xl text-sm text-tsec/90 sm:mx-auto sm:text-base"
          variants={contactHeaderItem}
        >
          Open to full-time roles and high-impact product work. Share the role
          details or project scope, and I will reply with next steps quickly.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        variants={contactCardsGrid}
      >
        <motion.div variants={contactCardVariants}>
          <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
            <CardHeader className="space-y-4 pb-0">
              <h3 className="text-2xl halant-regular font-semibold text-sec">Prefer a quick hello?</h3>
              <p className="text-md text-tsec">
                Reach out through any of these links. I respond personally and
                can share availability for full-time roles.
              </p>
            </CardHeader>
            <CardContent className="mt-3">
              <motion.div className="space-y-5" variants={contactChannelList}>
                {channels.map(({ icon: Icon, label, description, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 transition-colors hover:border-sec/40 hover:bg-sec/20"
                    variants={contactChannelItem}
                  >
                    <span className="mt-1 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sec">
                      <Icon className="size-5" />
                    </span>
                    <span className="space-y-2">
                      <span className="block text-md text-tpri">{label}</span>
                      <span className="block text-sm text-tsec">{description}</span>
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={contactCardVariants}>
          <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
            <CardHeader className="space-y-2 pb-0">
              <h3 className="text-2xl halant-regular font-semibold text-sec">Tell me about the role</h3>
              <p className="text-md text-tsec">
                A short note with the role scope, team setup, and timeline helps
                me prepare before we talk.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <motion.form 
              ref={formRef}
              onSubmit={sendEmail}
              className="grid gap-5" 
              variants={contactFormStagger}>
                <motion.div className="grid gap-2" variants={contactFormItem}>
                  <Label className="text-tpri text-md" htmlFor="name">Your name</Label>
                  <Input className={`text-tpri border-2 focus-visible:ring-2 ${errors.name ? "border-red-500 bg-red-500/10 focus-visible:border-red-500 focus-visible:ring-red-500" : "border-tpri focus-visible:border-sec focus-visible:ring-sec"}`} 
                  id="name" 
                  name="name" 
                  placeholder={errors.name ? "Please fill your name" : defaultPlaceholders.name}
                  value={nameValue}
                  onChange={(e) => {
                    setNameValue(e.target.value);
                    if (errors.name && e.target.value.trim()) {
                      setErrors((prev) => ({ ...prev, name: false }));
                    }
                  }}
                  autoComplete="name" />
                </motion.div>
                <motion.div className="grid gap-2" variants={contactFormItem}>
                  <Label className="text-tpri text-md" htmlFor="email">Email</Label>
                  <Input className={`text-tpri border-2 focus-visible:ring-2 ${errors.email ? "border-red-500 bg-red-500/10 focus-visible:border-red-500 focus-visible:ring-red-500" : "border-tpri focus-visible:border-sec focus-visible:ring-sec"}`} 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder={errors.email ? "Please fill your email" : defaultPlaceholders.email}
                  value={emailValue}
                  onChange={(e) => {
                    setEmailValue(e.target.value);
                    if (errors.email && e.target.value.trim()) {
                      setErrors((prev) => ({ ...prev, email: false }));
                    }
                  }}
                  autoComplete="email" />
                </motion.div>
                <motion.div className="grid gap-2" variants={contactFormItem}>
                  <Label className="text-tpri text-md" htmlFor="context">Role or project context</Label>
                  <Input
                    className={`text-tpri border-2 focus-visible:ring-2 ${errors.context ? "border-red-500 bg-red-500/10 focus-visible:border-red-500 focus-visible:ring-red-500" : "border-tpri focus-visible:border-sec focus-visible:ring-sec"}`}
                    id="context"
                    name="context"
                    placeholder={errors.context ? "Please fill the context" : defaultPlaceholders.context}
                    value={contextValue}
                    onChange={(e) => {
                      setContextValue(e.target.value);
                      if (errors.context && e.target.value.trim()) {
                        setErrors((prev) => ({ ...prev, context: false }));
                      }
                    }}
                    autoComplete="off"
                  />
                </motion.div>
                <motion.div className="grid gap-2" variants={contactFormItem}>
                  <Label className="text-tpri text-md" htmlFor="message">Message</Label>
                  <Textarea
                    className={`text-tpri border-2 focus-visible:ring-2 ${errors.message ? "border-red-500 bg-red-500/10 focus-visible:border-red-500 focus-visible:ring-red-500" : "border-tpri focus-visible:border-sec focus-visible:ring-sec"}`}
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={errors.message ? "Please fill your message" : defaultPlaceholders.message}
                    value={messageValue}
                    onChange={(e) => {
                      setMessageValue(e.target.value);
                      if (errors.message && e.target.value.trim()) {
                        setErrors((prev) => ({ ...prev, message: false }));
                      }
                    }}
                  />
                </motion.div>
                <motion.div
                  className="grid gap-2 text-md text-tsec"
                  variants={contactFormItem}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="justify-between rounded-md bg-sec text-bsec hover:bg-sec/90 text-md font-semibold"
                    disabled={isSending}
                    aria-busy={isSending}
                  >
                    <span className="flex items-center gap-2">
                      {isSending ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-bsec/30 border-t-bsec" />
                      ) : (
                        <SendHorizontal className="size-4" />
                      )}
                      {isSending ? "Sending" : "Send message"}
                    </span>
                  </Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;