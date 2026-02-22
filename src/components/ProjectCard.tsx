import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Key } from "react";

interface ProjectCardProps {
  key?: Key;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

export function ProjectCard({ title, description, tags, link, github, image }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-[#faf9f6] border border-zinc-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 bg-zinc-200/30 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-zinc-900">{title}</h3>
        <p className="text-zinc-600 text-sm mb-6 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              Code <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
