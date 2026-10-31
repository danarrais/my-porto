"use client";

import * as Icons from 'simple-icons';

const iconMap: Record<string, { svg: string }> = {
  'nextdotjs': Icons.siNextdotjs,
  'tailwindcss': Icons.siTailwindcss,
  'laravel': Icons.siLaravel,
  'mysql': Icons.siMysql,
  'typescript': Icons.siTypescript,
  'react': Icons.siReact,
  'figma': Icons.siFigma,
  'notion': Icons.siNotion,
  'meta': Icons.siMeta,
  'miro': Icons.siMiro,
  'flutter': Icons.siFlutter,
  'dart': Icons.siDart,
  'supabase': Icons.siSupabase,
  'php':Icons.siPhp,
  'arduino':Icons.siArduino,
  'nextjs':Icons.siNextdotjs,
  'prisma':Icons.siPrisma,
  'cloudinary':Icons.siCloudinary,
  'esp32':Icons.siEspressif,
  'javascript':Icons.siJavascript
};

interface TechStackIconProps {
  name: string;
  icon: string;
}

export default function TechStackIcon({ name, icon }: TechStackIconProps) {
  const IconComponent = iconMap[icon];

  // Monochrome: follow the surrounding text color instead of brand hex
  const coloredSvg = IconComponent?.svg.replace(/<path/g, '<path fill="currentColor"');

  return (
    <span className="px-4 py-2 bg-surface rounded-full text-sm font-medium text-primary hover:bg-border transition-colors cursor-default border border-transparent flex items-center gap-2">
      {IconComponent && (
        <svg 
          className="w-4 h-4" 
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ 
            __html: coloredSvg
          }}
        />
      )}
      {name}
    </span>
  );
}
