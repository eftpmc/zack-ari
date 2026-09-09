import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/lib/content";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Instagram", href: profile.links.instagram, Icon: Instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="section scroll-mt-20 border-t border-base-content/10">
      <h2 className="section-title reveal">Contact</h2>

      <p className="reveal mt-4 max-w-2xl text-lg text-base-content/80">
        I&apos;m looking for software engineering internships. If you think I&apos;d be a
        good fit for your team, the fastest way to reach me is email.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="reveal mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-content transition-opacity hover:opacity-90"
      >
        <Mail className="h-4 w-4" />
        {profile.email}
      </a>

      <ul className="reveal mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base-content/70 transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
