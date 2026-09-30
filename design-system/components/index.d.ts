import type * as React from 'react';
/** Primary = coral fill + on-coral text (one per view). Secondary = outlined. Ghost = coral text link-button. */
export interface ButtonProps { variant?: 'primary' | 'secondary' | 'ghost'; href?: string; arrow?: boolean; onClick?: () => void; type?: 'button' | 'submit'; disabled?: boolean; className?: string; children?: React.ReactNode }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface TopicChipProps { selected?: boolean; onClick?: () => void; children?: React.ReactNode }
export declare function TopicChip(props: TopicChipProps): React.ReactElement;
/** Uncontrolled: flips <html data-theme>. Controlled: pass theme + onChange. */
export interface ThemeToggleProps { theme?: 'dark' | 'light'; onChange?: (next: 'dark' | 'light') => void }
export declare function ThemeToggle(props: ThemeToggleProps): React.ReactElement;
export interface NavLink { label: string; href: string }
export interface SiteHeaderProps { current?: 'Watch' | 'Speaking' | 'Learn' | 'Writing' | 'Projects' | 'About'; links?: NavLink[]; contactHref?: string; theme?: 'dark' | 'light'; onThemeChange?: (t: 'dark' | 'light') => void }
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;
export interface SiteFooterProps { links?: NavLink[]; tagline?: string; contactHref?: string; theme?: 'dark' | 'light'; onThemeChange?: (t: 'dark' | 'light') => void }
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;
export interface HeroAction { label: string; href: string }
export interface HeroProps { title: string; accentWord?: string; eyebrow?: string; lede?: string; primary?: HeroAction; secondary?: HeroAction; avatarSrc?: string; avatarAlt?: string; backdropSrc?: string; propSrc?: string }
export declare function Hero(props: HeroProps): React.ReactElement;
/** Renders nothing without href: never a play shape without a real destination. */
export interface MediaFeatureProps { href: string; title: string; topic?: string; duration?: string; summary?: string; thumbnailSrc?: string; thumbnailAlt?: string; cta?: string; propSrc?: string }
export declare function MediaFeature(props: MediaFeatureProps): React.ReactElement | null;
export interface TalkCardProps { title: string; topic: string; event?: string; date?: string; recordingUrl?: string; slidesUrl?: string }
export declare function TalkCard(props: TalkCardProps): React.ReactElement;
export interface Lesson { title: string; href: string; kind?: 'Article' | 'Video' | 'Workshop' | 'Talk' }
export interface LearningPathCardProps { index?: number; title: string; summary?: string; lessons?: Lesson[] }
export declare function LearningPathCard(props: LearningPathCardProps): React.ReactElement;
export interface ProjectCardProps { name: string; problem?: string; outcome?: string; role?: 'Creator' | 'Maintainer' | 'Contributor' | string; tags?: string[]; links?: { demo?: string; site?: string; docs?: string; source?: string } }
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;
export interface ArticleCardProps { title: string; href: string; topic?: string; date?: string; source?: string }
export declare function ArticleCard(props: ArticleCardProps): React.ReactElement;
declare global { interface Window { CoralStudio: { Button: typeof Button; TopicChip: typeof TopicChip; ThemeToggle: typeof ThemeToggle; SiteHeader: typeof SiteHeader; SiteFooter: typeof SiteFooter; Hero: typeof Hero; MediaFeature: typeof MediaFeature; TalkCard: typeof TalkCard; LearningPathCard: typeof LearningPathCard; ProjectCard: typeof ProjectCard; ArticleCard: typeof ArticleCard } } }
