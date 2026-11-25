"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Paperclip,
  Link2,
  Mic,
  Send,
  Scissors,
  MoreHorizontal,
} from "lucide-react";
import { Star } from "@/components/ui/icons";
import { COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function UploadVideoPillIcon({ className, style }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M16.5 10.5V14.5C16.5 15.6046 15.6046 16.5 14.5 16.5H5.5C4.39543 16.5 3.5 15.6046 3.5 14.5V5.5C3.5 4.39543 4.39543 3.5 5.5 3.5H9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 3.5L9.5 10.5M16.5 3.5H12M16.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InspirationLinkPillIcon({ className, style }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M8.2 11.8L11.8 8.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.6 6.4L11.9 5.1C13.3 3.7 15.6 3.7 17 5.1C18.4 6.5 18.4 8.8 17 10.2L15.4 11.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.4 13.6L8.1 14.9C6.7 16.3 4.4 16.3 3 14.9C1.6 13.5 1.6 11.2 3 9.8L4.6 8.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GenerateScriptPillIcon({ className, style }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M10 3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V14.5C3.5 15.6046 4.39543 16.5 5.5 16.5H14.5C15.6046 16.5 16.5 15.6046 16.5 14.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.85 2.65C15.4 2.1 16.3 2.1 16.85 2.65C17.4 3.2 17.4 4.1 16.85 4.65L11.2 10.3L8.5 11L9.2 8.3L14.85 2.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectClapperboardIcon({ className, color, cutoutColor }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color }}
    >
      {/* Tilted top clapper flap */}
      <path
        d="M3.2 7.4L18.6 3.1C19.5 2.85 20.4 3.4 20.65 4.3L21.3 6.6L4.6 11.25L3.95 8.95C3.7 8.05 2.3 7.65 3.2 7.4Z"
        fill="currentColor"
      />
      {/* Diagonal stripes on top flap */}
      <path
        d="M7.2 6.3L9.4 9.9M11.6 5.05L13.8 8.65M16 3.8L18.2 7.4"
        stroke={cutoutColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Main clapper body */}
      <rect
        x="4"
        y="10.5"
        width="16"
        height="10.5"
        rx="2.2"
        fill="currentColor"
      />
      {/* Play triangle cutout */}
      <path
        d="M10.4 13.3L14.6 15.75L10.4 18.2V13.3Z"
        fill={cutoutColor}
      />
    </svg>
  );
}

const WORKSPACE_DATA = {
  user: {
    name: "David",
    initial: "D",
    credits: 400,
  },
  header: {
    greeting: "Good morning, David",
    subtitle: "Tuesday, Aug 4 · Studio synced 2m ago",
    searchPlaceholder: "Search templates, projects...",
    notificationsEmptyText: "No new notifications right now.",
  },
  hero: {
    statusBadge: "Noviq Studio · AI editing engine online",
    heading: "What are you creating today?",
    promptPlaceholder: "Ask anything...",
    promptTools: [
      { id: "attach", label: "Attach", icon: Paperclip },
      { id: "link", label: "Add link", icon: Link2 },
      { id: "voice", label: "Voice input", icon: Mic },
    ],
    quickActions: [
      {
        id: "upload",
        label: "Upload video",
        icon: UploadVideoPillIcon,
        iconColor: COLORS.warning,
      },
      {
        id: "link",
        label: "Paste inspiration link",
        icon: InspirationLinkPillIcon,
        iconColor: COLORS.danger,
      },
      {
        id: "script",
        label: "Generate a script",
        icon: GenerateScriptPillIcon,
        iconColor: COLORS.success,
      },
      {
        id: "templates",
        label: "Browse templates",
        icon: Scissors,
        iconColor: COLORS.primary,
      },
    ],
  },
  recentProjects: [
    {
      id: "bali-trip",
      title: "Bali Trip - Cinematic Cut",
      updatedAt: "Edited 2h ago",
      progress: 72,
      badge: "HD - 0:34",
      iconColor: COLORS.text,
      badgeBg: COLORS.surfaceMuted,
      badgeText: COLORS.text,
    },
    {
      id: "podcast-highlight",
      title: "Podcast Highlight Reel",
      updatedAt: "Edited yesterday",
      progress: 48,
      badge: "2K - 0:15",
      iconColor: COLORS.primaryDark,
      badgeBg: COLORS.successBg,
      badgeText: COLORS.primaryDark,
    },
    {
      id: "product-launch",
      title: "Product Launch Teaser",
      updatedAt: "Edited 3d ago",
      progress: 88,
      badge: "4K - 1:09",
      iconColor: COLORS.primary,
      badgeBg: COLORS.surfaceAccentLight,
      badgeText: COLORS.primary,
    },
  ],
  templateCollaborators: [
    { id: "a", initial: "A", bg: COLORS.warning, text: COLORS.text },
    { id: "b", initial: "B", bg: COLORS.primaryDark, text: COLORS.buttonText },
    { id: "c", initial: "C", bg: COLORS.success, text: COLORS.buttonText },
    { id: "d", initial: "D", bg: COLORS.primary, text: COLORS.buttonText },
  ],
  browseTemplates: [
    {
      id: "product-spotlight",
      title: "Product Spotlight",
      category: "Ads - Trending",
      ratio: "9:16",
      status: "Edited yesterday",
      badgeColor: COLORS.primaryDark,
      ratioBg: COLORS.surfaceAccentLight,
      ratioText: COLORS.primary,
    },
    {
      id: "fast-travel",
      title: "Fast Travel Montage",
      category: "Reels",
      ratio: "16:9",
      status: "Reviewed last week",
      badgeColor: COLORS.danger,
      ratioBg: COLORS.dangerBg,
      ratioText: COLORS.danger,
    },
    {
      id: "founder-story",
      title: "Founder Story",
      category: "Vlogs",
      ratio: "1:1",
      status: "Finalized last month",
      badgeColor: COLORS.warning,
      ratioBg: COLORS.warningBg,
      ratioText: COLORS.primaryDark,
    },
  ],
};

export default function WorkspaceDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [prompt, setPrompt] = useState("");
  const [activeAction, setActiveAction] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const { user, header, hero, recentProjects, templateCollaborators, browseTemplates } =
    WORKSPACE_DATA;

  const filteredProjects = recentProjects.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const filteredTemplates = browseTemplates.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setPrompt("");
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: COLORS.surface, color: COLORS.text }}
    >
      {/* Top Header */}
      <header
        className="sticky top-0 z-30 flex flex-col gap-4 border-b px-6 py-4 backdrop-blur-xs md:px-12 lg:flex-row lg:items-center lg:justify-between"
        style={{
          backgroundColor: COLORS.surface,
          borderColor: COLORS.border,
        }}
      >
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-semibold tracking-tight md:text-[28px]">
            {header.greeting}
          </h1>
          <p
            className="mt-0.5 text-xs font-normal sm:text-sm"
            style={{ color: COLORS.textSubtle }}
          >
            {header.subtitle}
          </p>
        </div>

        <div className="relative flex flex-wrap items-center gap-3 sm:flex-nowrap lg:shrink-0">
          <div
            className="flex h-11 w-full items-center gap-3 rounded-2xl border px-4 sm:w-72 md:w-80"
            style={{
              borderColor: COLORS.border,
              backgroundColor: COLORS.containerBg,
            }}
          >
            <Search
              className="h-4 w-4 shrink-0"
              style={{ color: COLORS.textPlaceholder }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={header.searchPlaceholder}
              aria-label="Search templates, projects"
              className="w-full bg-transparent text-sm font-normal focus:outline-none"
            />
          </div>

          {/* Notifications Button & Popover */}
          <div className="relative shrink-0">
            <button
              type="button"
              aria-label="Notifications"
              aria-expanded={notificationsOpen}
              onClick={() => {
                setNotificationsOpen((prev) => !prev);
                setProfileMenuOpen(false);
              }}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border transition-opacity hover:opacity-85"
              style={{
                borderColor: COLORS.border,
                backgroundColor: COLORS.surfaceAccentLight,
              }}
            >
              <Bell className="h-4 w-4" style={{ color: COLORS.primary }} />
            </button>

            {notificationsOpen && (
              <div
                role="region"
                aria-label="Notifications panel"
                className="absolute right-0 z-20 mt-2 w-72 rounded-2xl border p-4 shadow-md"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: COLORS.cardBg,
                  color: COLORS.text,
                }}
              >
                <div
                  className="flex items-center justify-between border-b pb-2.5"
                  style={{ borderColor: COLORS.border }}
                >
                  <span className="text-xs font-medium">Notifications</span>
                  <button
                    type="button"
                    onClick={() => setNotificationsOpen(false)}
                    className="cursor-pointer text-xs font-normal hover:underline"
                    style={{ color: COLORS.textSubtle }}
                  >
                    Close
                  </button>
                </div>
                <p
                  className="mt-3 text-xs font-normal"
                  style={{ color: COLORS.textMuted }}
                >
                  {header.notificationsEmptyText}
                </p>
              </div>
            )}
          </div>

          {/* Credits Pill */}
          <div
            className="flex h-11 shrink-0 items-center gap-2 rounded-2xl px-4 text-sm font-medium shadow-xs"
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.buttonText,
            }}
          >
            <span
              className="inline-flex items-center justify-center"
              style={{ color: COLORS.buttonText }}
            >
              <Star width={18} height={18} color={COLORS.buttonText} />
            </span>
            <span className="whitespace-nowrap">{user.credits} Credits</span>
          </div>

          {/* Profile Button & Menu */}
          <div className="relative shrink-0">
            <button
              type="button"
              aria-label="Profile menu"
              aria-expanded={profileMenuOpen}
              onClick={() => {
                setProfileMenuOpen((prev) => !prev);
                setNotificationsOpen(false);
              }}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-sm font-medium transition-opacity hover:opacity-85"
              style={{
                borderColor: COLORS.border,
                backgroundColor: COLORS.successBg,
                color: COLORS.primaryDark,
              }}
              title={user.name}
            >
              {user.initial}
            </button>

            {profileMenuOpen && (
              <div
                role="menu"
                aria-label="Profile options"
                className="absolute right-0 z-20 mt-2 w-52 rounded-2xl border p-2 shadow-md"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: COLORS.cardBg,
                  color: COLORS.text,
                }}
              >
                <div
                  className="border-b px-3 py-2"
                  style={{ borderColor: COLORS.border }}
                >
                  <p className="text-xs font-medium">{user.name}</p>
                  <p
                    className="text-[11px] font-normal"
                    style={{ color: COLORS.textSubtle }}
                  >
                    {user.credits} Credits available
                  </p>
                </div>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => setProfileMenuOpen(false)}
                  className="mt-1 flex w-full cursor-pointer items-center rounded-xl px-3 py-2 text-left text-xs font-normal transition-colors hover:opacity-80"
                  style={{ color: COLORS.text }}
                >
                  Account &amp; Billing
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => setProfileMenuOpen(false)}
                  className="flex w-full cursor-pointer items-center rounded-xl px-3 py-2 text-left text-xs font-normal transition-colors hover:opacity-80"
                  style={{ color: COLORS.textMuted }}
                >
                  Close menu
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-12 px-6 py-8 md:px-12 md:py-10">
        {/* Hero Prompt Section */}
        <section className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-4 text-center md:px-14">
          {/* Top-right floating badge */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 right-2 hidden h-9 w-9 animate-bounce items-center justify-center rounded-full border shadow-2xs md:flex"
            style={{
              backgroundColor: COLORS.success,
              borderColor: COLORS.containerBg,
              color: COLORS.buttonText,
            }}
          >
            <Scissors className="h-4 w-4" />
          </span>

          {/* Left floating badge */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-24 left-2 hidden h-9 w-9 animate-bounce items-center justify-center rounded-full border shadow-2xs md:flex"
            style={{
              backgroundColor: COLORS.warning,
              borderColor: COLORS.containerBg,
              color: COLORS.text,
              animationDelay: "150ms",
            }}
          >
            <UploadVideoPillIcon className="h-4 w-4" />
          </span>

          {/* Lower-right floating badge */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-2 bottom-16 hidden h-9 w-9 animate-bounce items-center justify-center rounded-full border shadow-2xs md:flex"
            style={{
              backgroundColor: COLORS.danger,
              borderColor: COLORS.containerBg,
              color: COLORS.buttonText,
              animationDelay: "300ms",
            }}
          >
            <Link2 className="h-4 w-4" />
          </span>

          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-normal"
            style={{
              borderColor: COLORS.border,
              backgroundColor: COLORS.surfaceAccentLight,
              color: COLORS.primary,
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
            />
            <span>{hero.statusBadge}</span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-[40px] sm:leading-tight">
            {hero.heading}
          </h2>

          <form
            onSubmit={handlePromptSubmit}
            className="mt-8 w-full max-w-3xl rounded-3xl border p-6 text-left shadow-xs"
            style={{
              borderColor: COLORS.border,
              backgroundColor: COLORS.cardBg,
            }}
          >
            <textarea
              rows={2}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={hero.promptPlaceholder}
              className="w-full resize-none bg-transparent text-sm font-normal focus:outline-none sm:text-base"
              style={{ color: COLORS.text }}
            />

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {hero.promptTools.map(({ id, label, icon: ToolIcon }) => (
                  <button
                    key={id}
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-normal transition-colors hover:opacity-80"
                    style={{
                      borderColor: COLORS.border,
                      color: COLORS.textMuted,
                    }}
                  >
                    <ToolIcon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              <button
                type="submit"
                aria-label="Send prompt"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.buttonText,
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Quick Action Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {hero.quickActions.map(({ id, label, icon: Icon, iconColor }) => {
              const isSelected = activeAction === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveAction(isSelected ? null : id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all",
                    isSelected && "ring-2"
                  )}
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: isSelected
                      ? COLORS.surfaceAccentLight
                      : COLORS.containerBg,
                    color: isSelected ? COLORS.primary : COLORS.text,
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: iconColor }} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Projects</h3>
            <button
              type="button"
              className="text-xs font-normal hover:underline sm:text-sm"
              style={{ color: COLORS.textMuted }}
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-3xl border p-5 shadow-2xs"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: COLORS.cardBg,
                }}
              >
                <div>
                  <div
                    className="flex h-44 flex-col justify-between rounded-2xl p-4"
                    style={{ backgroundColor: COLORS.surfaceMuted }}
                  >
                    <ProjectClapperboardIcon
                      className="h-6 w-6"
                      color={project.iconColor}
                      cutoutColor={COLORS.surfaceMuted}
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2.5">
                        <div
                          className="h-1.5 flex-1 overflow-hidden rounded-full"
                          style={{ backgroundColor: COLORS.border }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${project.progress}%`,
                              backgroundColor: COLORS.text,
                            }}
                          />
                        </div>
                        <span
                          className="text-xs font-normal"
                          style={{ color: COLORS.textMuted }}
                        >
                          {project.progress}%
                        </span>
                      </div>
                      <p className="text-[15px] font-semibold">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="text-xs font-normal"
                    style={{ color: COLORS.textSubtle }}
                  >
                    {project.updatedAt}
                  </span>
                  <span
                    className="rounded-xl px-3 py-1.5 text-xs font-medium"
                    style={{
                      backgroundColor: project.badgeBg,
                      color: project.badgeText,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Browse Templates */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Browse Templates</h3>
            <button
              type="button"
              className="text-xs font-normal hover:underline sm:text-sm"
              style={{ color: COLORS.textMuted }}
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {filteredTemplates.map((tpl) => (
              <article
                key={tpl.id}
                className="flex flex-col justify-between rounded-3xl border p-5 shadow-2xs"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: COLORS.cardBg,
                }}
              >
                <div>
                  <div
                    className="flex h-44 flex-col justify-between rounded-2xl p-4"
                    style={{ backgroundColor: COLORS.surfaceMuted }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: tpl.ratioBg,
                          color: tpl.ratioText,
                        }}
                      >
                        {tpl.ratio}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 shrink-0"
                        style={{ color: tpl.badgeColor }}
                      >
                        <path
                          fill="currentColor"
                          d="M12 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 3.1 1.18 2.39 2.64.38-1.91 1.86.45 2.63L12 11.08l-2.36 1.24.45-2.63-1.91-1.86 2.64-.38L12 5.1Zm-4.2 10.65 4.2 2.2 4.2-2.2 1.15 5.45-3.45-1.45-1.9 2.4-1.9-2.4-3.45 1.45 1.15-5.45Z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[15px] font-semibold">{tpl.title}</p>
                      <p
                        className="mt-0.5 text-xs font-normal"
                        style={{ color: COLORS.textSubtle }}
                      >
                        {tpl.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-2">
                      {templateCollaborators.map((collab) => (
                        <span
                          key={collab.id}
                          className="inline-block h-6 w-6 rounded-full border-2 text-center text-[10px] leading-5 font-medium"
                          style={{
                            borderColor: COLORS.containerBg,
                            backgroundColor: collab.bg,
                            color: collab.text,
                          }}
                        >
                          {collab.initial}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-xs font-normal"
                      style={{ color: COLORS.textSubtle }}
                    >
                      {tpl.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label={`More options for ${tpl.title}`}
                    className="rounded-lg p-1.5 hover:opacity-75"
                    style={{ color: COLORS.textMuted }}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}