"use client";

import { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

const emptySubscribe = () => () => {};

export default function Navbar() {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const { lang, setLang } = useLanguage();
	const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!isMobileMenuOpen) return;
		document.body.style.overflow = 'hidden';
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsMobileMenuOpen(false);
		};
		window.addEventListener('keydown', handleKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKey);
		};
	}, [isMobileMenuOpen]);

	const t = dictionary[lang].nav;

	const navLinks = [
		{ name: t.about, href: '/about' },
		{ name: t.projects, href: '/project' },
		{ name: t.contact, href: '/#contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${isMobileMenuOpen
					? 'bg-background border-border'
					: scrolled
						? 'bg-background/70 backdrop-blur-[18px] border-border'
						: 'bg-transparent backdrop-blur-none border-transparent'
				}`}
		>
			<div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[72px] md:h-[80px] flex justify-between items-center">
				<Link href="/" className="font-medium text-2xl tracking-tight z-50 relative">
					Danar Rais Alhakim.
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center space-x-8">
					<div className="flex items-center space-x-6 text-sm font-medium text-secondary">
						{navLinks.map((link) => {
							const isActive = pathname === link.href || (link.href === '/project' && pathname.startsWith('/project'));
							return (
								<Link
									key={link.name}
									href={link.href}
									className={`relative transition-all duration-300 hover:text-primary py-2 ${isActive ? 'text-primary' : ''}`}
								>
									{link.name}
									{isActive && (
										<motion.div
											layoutId="underline"
											className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary"
										/>
									)}
								</Link>
							);
						})}
					</div>

					<div className="h-4 w-px bg-divider"></div>

					<div className="flex items-center space-x-4">
						{/* Language Toggle */}
						<div className="flex items-center bg-surface p-1 rounded-full text-xs font-semibold">
							<button
								onClick={() => setLang('ID')}
								className={`px-3 py-1 rounded-full transition-all ${lang === 'ID' ? 'bg-background shadow-sm text-primary' : 'text-muted hover:text-primary'}`}
							>
								ID
							</button>
							<button
								onClick={() => setLang('EN')}
								className={`px-3 py-1 rounded-full transition-all ${lang === 'EN' ? 'bg-background shadow-sm text-primary' : 'text-muted hover:text-primary'}`}
							>
								EN
							</button>
						</div>

						{/* Theme Toggle */}
						{mounted && (
							<button
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface transition-colors relative"
								aria-label="Toggle Theme"
							>
								<motion.div
									initial={false}
									animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 0.8 : 1 }}
									transition={{ duration: 0.3 }}
									className="absolute"
								>
									<Sun className="w-5 h-5 text-primary opacity-0 dark:opacity-100" />
								</motion.div>
								<motion.div
									initial={false}
									animate={{ rotate: theme === 'dark' ? 0 : -180, scale: theme === 'dark' ? 1 : 0.8 }}
									transition={{ duration: 0.3 }}
									className="absolute"
								>
									<Moon className="w-5 h-5 text-primary dark:opacity-0" />
								</motion.div>
							</button>
						)}

						{/* Download CV */}
						<Link
							href="https://bit.ly/4iQsLOf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2.5 bg-primary text-background rounded-[14px] font-medium text-sm hover:-translate-y-0.5 hover:shadow-hover transition-all flex items-center gap-2"
						>
							{t.downloadCv}
						</Link>
					</div>
				</div>

				{/* Mobile Toggle */}
				<button
					aria-label="Toggle menu"
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-menu"
					className="md:hidden flex items-center justify-center relative z-[60] text-primary p-2"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						id="mobile-menu"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 bg-background flex flex-col pt-[72px] px-5"
					>
						<div className="flex flex-col gap-6 mt-8 text-2xl font-medium">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="border-b border-border pb-4 hover:pl-4 transition-all"
								>
									{link.name}
								</Link>
							))}
						</div>

						<div className="mt-12 pb-10 flex flex-col gap-6 overflow-y-auto">
							<div className="flex items-center justify-between">
								<span className="font-medium text-secondary">Language</span>
								<div className="flex items-center bg-surface p-1 rounded-full text-sm font-semibold">
									<button
										onClick={() => setLang('ID')}
										className={`px-4 py-2 rounded-full transition-all ${lang === 'ID' ? 'bg-background shadow-sm text-primary' : 'text-muted'}`}
									>
										ID
									</button>
									<button
										onClick={() => setLang('EN')}
										className={`px-4 py-2 rounded-full transition-all ${lang === 'EN' ? 'bg-background shadow-sm text-primary' : 'text-muted'}`}
									>
										EN
									</button>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<span className="font-medium text-secondary">Theme</span>
								{mounted && (
									<button
										onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
										className="p-3 bg-surface rounded-full"
									>
										{theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
									</button>
								)}
							</div>

							<Link
								href="https://bit.ly/4iQsLOf"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileMenuOpen(false)}
								className="w-full py-4 bg-primary text-background rounded-xl font-medium text-center mt-4"
							>
								{t.downloadCv}
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
