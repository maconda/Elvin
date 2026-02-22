import { motion } from "motion/react";
import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowRight, ExternalLink, Youtube, Tv, Send, Dribbble } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import { translations, Language } from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>("zh");
  const t = translations[lang];

  const projectImages = [
    "https://picsum.photos/seed/lumina/800/600",
    "https://picsum.photos/seed/atmosphere/800/600",
    "https://picsum.photos/seed/nexus/800/600"
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.2] text-zinc-900 mb-12 text-balance">
                {lang === "en" ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-x-4">
                      <span className="font-mono">
                        <span className="text-blue-500">&lt;</span>
                        <span className="text-teal-500">D</span>
                        <span className="text-pink-500">e</span>
                        <span className="text-orange-500">v</span>
                        <span className="text-purple-500">e</span>
                        <span className="text-yellow-500">l</span>
                        <span className="text-blue-500">o</span>
                        <span className="text-teal-500">p</span>
                        <span className="text-pink-500">e</span>
                        <span className="text-orange-500">r</span>
                        <span className="text-purple-500">/</span>
                        <span className="text-yellow-500">&gt;</span>
                      </span>
                      <span>, Designer ,</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4">
                      <span>✨ Detail-oriented ,</span>
                      <span>👤 Founder</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-x-4">
                      <span className="font-mono">
                        <span className="text-blue-500">&lt;</span>
                        <span className="text-teal-500">开</span>
                        <span className="text-pink-500">发</span>
                        <span className="text-orange-500">者</span>
                        <span className="text-purple-500">/</span>
                        <span className="text-yellow-500">&gt;</span>
                      </span>
                      <span>, 设计师 ,</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4">
                      <span>✨ 细节控 ,</span>
                      <span>👤 创始人</span>
                    </div>
                  </div>
                )}
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mb-12 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-wrap gap-6 items-center">
                  {[
                    { href: "https://x.com/BorealTing", src: "/static/icon1.png", alt: "Twitter" },
                    { href: "https://www.youtube.com/@YTCong", src: "/static/icon2.png", alt: "YouTube" },
                    { href: "https://space.bilibili.com/20221512?spm_id_from=333.1007.0.0", src: "/static/icon3.png", alt: "Bilibili" },
                    { href: "https://work.weixin.qq.com/ca/cawcdeea6aa4f7439a", src: "/static/icon4.png", alt: "WeChat" },
                    { href: "https://t.me/mura109551", src: "/static/icon5.png", alt: "Telegram" },
                    { href: "mailto:nour109551@gmail.com", src: "/static/icon6.png", alt: "Email" },
                  ].map((social) => (
                    <a 
                      key={social.alt}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <img 
                        src={social.src} 
                        alt={social.alt} 
                        className="w-6 h-6 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" className="bg-[#ece9e2]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/elvin/800/1000" 
                alt="Elvin" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-900/10 mix-blend-multiply" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
                {lang === "en" ? (
                  <>Design is not just how it looks, but how it <span className="italic">works</span>.</>
                ) : (
                  <>设计不仅是外观，更是其<span className="italic">运作方式</span>。</>
                )}
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-zinc-900 font-semibold mb-3">{t.about.design}</h4>
                    <ul className="text-sm space-y-2">
                      {t.about.skills.design.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zinc-900 font-semibold mb-3">{t.about.engineering}</h4>
                    <ul className="text-sm space-y-2">
                      {t.about.skills.engineering.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Life Fragments Section */}
        <Section id="life">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">{t.nav.life}</h2>
            <p className="text-zinc-500 max-w-md">{lang === "en" ? "Capturing moments through my lens." : "通过镜头捕捉生活瞬间。"}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-xl overflow-hidden bg-zinc-100"
              >
                <img 
                  src={`https://picsum.photos/seed/life-${i}/600/600`} 
                  alt={`Fragment ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tools Section */}
        <Section id="tools" className="bg-[#ece9e2]">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">{t.nav.tools}</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">{lang === "en" ? "A collection of digital utilities I've built and use daily." : "我构建并日常使用的数字工具集。"}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Lumina", desc: lang === "en" ? "Analytics Dashboard" : "分析仪表盘" },
              { name: "Atmosphere", desc: lang === "en" ? "Generative Audio" : "生成式音频" },
              { name: "Nexus", desc: lang === "en" ? "Identity Protocol" : "身份协议" }
            ].map((tool, i) => (
              <div key={i} className="bg-[#faf9f6] p-8 rounded-2xl border border-zinc-200/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl mb-6 flex items-center justify-center text-white font-bold">
                  {tool.name[0]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-zinc-500 text-sm mb-6">{tool.desc}</p>
                <a href="#" className="text-zinc-900 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  {lang === "en" ? "Launch Tool" : "启动工具"} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* Consultation Section */}
        <Section id="consultation">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">{t.nav.consultation}</h2>
              <p className="text-zinc-500">{lang === "en" ? "Ask me anything or browse community questions." : "向我提问或浏览社区问题。"}</p>
            </div>
            <div className="space-y-6">
              {[
                { q: "How do you start a design project?", a: "I always start with research and understanding the user's pain points." },
                { q: "What's your favorite coding language?", a: "TypeScript, for its balance of flexibility and safety." }
              ].map((item, i) => (
                <div key={i} className="bg-[#faf9f6] p-6 rounded-2xl border border-zinc-200/50">
                  <h4 className="font-semibold text-zinc-900 mb-2">Q: {item.q}</h4>
                  <p className="text-zinc-600 text-sm italic">A: {item.a}</p>
                </div>
              ))}
              <div className="pt-8">
                <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors">
                  {lang === "en" ? "Submit a Question" : "提交问题"}
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="bg-zinc-900 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8">
              {lang === "en" ? (
                <>Let's build something <span className="italic text-zinc-400">extraordinary</span> together.</>
              ) : (
                <>让我们一起创造<span className="italic text-zinc-400">非凡</span>的作品。</>
              )}
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:nour109551@gmail.com" 
                className="bg-white text-zinc-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors flex items-center gap-3 group"
              >
                <img src="/static/icon6.png" alt="Email" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" /> {t.contact.cta}
              </a>
              <div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-0">
                <a href="https://work.weixin.qq.com/ca/cawcdeea6aa4f7439a" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-sm uppercase tracking-widest font-medium">WeChat</span>
                  <img src="/static/icon4.png" alt="" className="w-5 h-5 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
                </a>
                <a href="https://t.me/mura109551" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-sm uppercase tracking-widest font-medium">Telegram</span>
                  <img src="/static/icon5.png" alt="" className="w-5 h-5 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-zinc-900 text-zinc-500 py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">{t.footer.copy}</p>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.colophon}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
