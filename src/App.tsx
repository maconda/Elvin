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
                      <span className="font-mono text-zinc-400">&lt;Developer/&gt;</span>
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
                      <span className="font-mono text-zinc-400">&lt;开发者/&gt;</span>
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
                <div className="flex gap-6">
                  <a href="https://x.com/BorealTing" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Twitter size={24} /></a>
                  <a href="https://www.youtube.com/@YTCong" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Youtube size={24} /></a>
                  <a href="https://space.bilibili.com/20221512?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Tv size={24} /></a>
                  <a href="https://work.weixin.qq.com/ca/cawcdeea6aa4f7439a" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.348 14.646c0-3.737 3.319-6.767 7.414-6.767 4.095 0 7.414 3.03 7.414 6.767 0 3.737-3.319 6.767-7.414 6.767-.856 0-1.678-.133-2.422-.377l-2.522 1.315.656-2.285c-1.92-1.155-3.126-3.03-3.126-5.42zm11.33-1.447c.412 0 .746-.335.746-.747 0-.412-.334-.746-.746-.746-.412 0-.747.334-.747.746 0 .412.335.747.747.747zm-3.926 0c.412 0 .747-.335.747-.747 0-.412-.335-.746-.747-.746-.412 0-.746.334-.746.746 0 .412.334.747.746.747zm-8.338-9.065c-4.905 0-8.882 3.611-8.882 8.064 0 2.487 1.212 4.712 3.132 6.225l-.788 2.744 3.028-1.577c.892.293 1.878.452 2.906.452.234 0 .465-.008.694-.024-.138-.58-.212-1.185-.212-1.805 0-4.485 3.98-8.12 8.892-8.12.36 0 .713.02 1.058.057-1.24-3.513-5.02-6.016-9.828-6.016zm-3.41 6.534c.495 0 .896-.401.896-.896 0-.495-.401-.896-.896-.896s-.896.401-.896.896c0 .495.401.896.896.896zm4.71 0c.495 0 .896-.401.896-.896 0-.495-.401-.896-.896-.896s-.896.401-.896.896c0 .495.401.896.896.896z" />
                    </svg>
                  </a>
                  <a href="https://t.me/mura109551" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Send size={24} /></a>
                  <a href="mailto:nour109551@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail size={24} /></a>
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
                className="bg-white text-zinc-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors flex items-center gap-3"
              >
                <Mail size={20} /> {t.contact.cta}
              </a>
              <div className="flex gap-8 mt-6 md:mt-0">
                <a href="https://work.weixin.qq.com/ca/cawcdeea6aa4f7439a" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                  WeChat <ExternalLink size={14} />
                </a>
                <a href="https://t.me/mura109551" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                  Telegram <ExternalLink size={14} />
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
