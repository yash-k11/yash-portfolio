import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from "lucide-react";

// CORRECTED IMAGE PATH
// This import path is correct for the folder structure where both App.jsx and assets are in the src/ folder.
import yashImgUrl from "./assets/yash.jpg";

// IMPORT DATA
import { skills, projects } from "./portfolioData";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
    </motion.div>
    {children}
  </section>
);

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/70 text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg md:text-xl tracking-tight">Yash Khandagale</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80 transition">About</a>
            <a href="#skills" className="hover:opacity-80 transition">Skills</a>
            <a href="#projects" className="hover:opacity-80 transition">Projects</a>
            <a href="#contact" className="hover:opacity-80 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to Internships & SDE Roles
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Full-Stack Developer & Cloud Learner
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              I’m Yash, a BE (Computer Engineering, 2025) with hands-on experience in Java, Django, React, Tailwind, and cloud.
              I love building fast, clean UIs and solving problems end-to-end.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="/YashKhandagaleResume0925.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a className="hover:opacity-80" href="https://github.com/yashk-11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a className="hover:opacity-80" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a className="hover:opacity-80" href="mailto:yash@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl border overflow-hidden shadow-xl">
              <img
                alt="Yash portrait"
                src={yashImgUrl}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About Me"
        subtitle="President, Student Committee @ Watumull Institute of Engineering & Technology. Ex-Java Developer Intern @ Java Sparx Solution."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I’m a tech lover with a strong foundation in web and mobile development, cloud services, and problem solving. I focus on building
                clean frontends (Tailwind + React) with solid logic (Java/Django/Node) and deploy them reliably (Netlify/Vercel/Render).
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Python",
                  "Django",
                  "React",
                  "TailwindCSS",
                  "MySQL",
                  "Git",
                  "Linux",
                  "GCP (ACE track)",
                ].map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-xl">{s}</Badge>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Navi Mumbai, India</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +91 96190 36483</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>BE, Computer Engineering (2025)</li>
                <li>Currently learning MERN + revising Java/MySQL</li>
                <li>Interested in Cloud (GCP ACE), IoT, and Algorithms</li>
                <li>Open to Frontend / Full-Stack Internships</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" subtitle="Tools and technologies I use to ship quality software.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ cat, items }) => (
            <Card key={cat} className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{cat}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-gray-200 text-sm hover:bg-primary hover:text-white transition cursor-pointer"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="A few things I’ve built recently.">
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .slice(0, showMore ? undefined : 4)
            .map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full overflow-hidden rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{p.name}</span>
                      <div className="flex items-center gap-2">
                        {p.repo !== "#" && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm hover:opacity-80"
                          >
                            <Github className="h-4 w-4 mr-1" /> Code
                          </a>
                        )}
                        {p.link !== "#" && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm hover:opacity-80"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" /> Live
                          </a>
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-xl">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Show More / Show Less button */}
        <div className="flex justify-center mt-6">
          <Button onClick={() => setShowMore(!showMore)} className="rounded-2xl">
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Let’s build something great together.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form name="contact" method="POST" data-netlify="true" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input type="email" name="email" placeholder="Email" required />
                </div>
                <Input name="subject" placeholder="Subject" />
                <Textarea name="message" placeholder="Your message" className="min-h-[140px]" required />
                <Button type="submit" className="rounded-2xl">Send Message</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2"></p>
            </CardContent>
          </Card>

          <Card className="bg-muted/40">
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <p>Actively looking for Frontend / Full-Stack internships and entry-level roles.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Preferred: React + Tailwind, Java/Django backends</li>
                <li>Location: Navi Mumbai (Hybrid), India</li>
                <li>Can start immediately</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Yash Khandagale. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-80" href="https://github.com/yashk-11" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
            <a className="hover:opacity-80" href="yashkhandagale9619@gmail.com">
              <Mail className="h-4 w-4" />
            </a>
            <a className="hover:opacity-80" href="https://www.linkedin.com/in/yash-khandagale-a18345261/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}