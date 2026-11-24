"use client";
import Logo from "@/components/ui/logo";
import { COLORS } from "@/lib/constants";
import { Settings, Support, Home, Projects, Logout, Star, TemplatesIcon } from "@/components/ui/icons";
import { useNavigate } from "@/lib/hooks/router";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Clapperboard, FolderClock, PanelLeftClose, PanelLeftOpen, PlusCircle, Search, X } from "lucide-react";


const AI_SPACE = "aispace";

const mainPaths = [
    { label: "Dashboard", value: "", icon: Home },
    { label: "Noviq AI", value: AI_SPACE, icon: Star },
    { label: "Projects", value: "projects", icon: Projects },
    { label: "Create", value: "create", icon: Clapperboard },
    { label: "Templates", value: "templates", icon: TemplatesIcon },
];

const secondaryPaths = [
    { label: "Settings", value: "settings", icon: Settings },
    { label: "Support", value: "support", icon: Support },
];

const chatHistories = [
    { chathistoryname: "Video creation", time: "Today", chathistoryid: "chat-video-creation" },
    { chathistoryname: "Social media content ideas", time: "2hr ago", chathistoryid: "chat-social-media" },
    { chathistoryname: "Product launch campaign", time: "4hr ago", chathistoryid: "chat-product-launch" },
    { chathistoryname: "Video storyboard", time: "Yesterday", chathistoryid: "chat-video-storyboard" },
    { chathistoryname: "Video storyboard", time: "Yesterday", chathistoryid: "chat-video-storyboard-2" },
];

export default function DesktopSideNav({ onSelect }) {
    const [active, setActive] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [hovered, setHovered] = useState(null);
    const [activeChat, setActiveChat] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    // Expanded only while Noviq AI is active AND the user hasn't hidden the panel
    const expanded = active === AI_SPACE && !collapsed;
    const hidden = active === AI_SPACE && collapsed;

    const filteredChats = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return chatHistories;
        return chatHistories.filter((chat) =>
            chat.chathistoryname.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const handleClick = (value) => {
        onSelect?.(value);
        setActive(value);
        if (value === AI_SPACE) setCollapsed(false);
        if (value !== AI_SPACE) setSearchQuery("");
        navigate.to(`/workspace/${value}`, { relative: false });
    };

    const renderItem = ({ label, value, icon: Icon }) => {
        const isActive = active === value;
        const highlighted = isActive || hovered === value;

        return (
            <button
                key={value}
                onClick={() => handleClick(value)}
                onMouseEnter={() => setHovered(value)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center gap-1 w-full py-2 rounded-lg transition-colors hover:bg-[var(--nav-hover)]/60"
            >
                <div
                    className={cn(
                        "flex items-center justify-center h-4 w-4 shrink-0",
                    )}
                    style={{ color: highlighted ? COLORS.iconActive : COLORS.iconIdle }}
                >
                    <Icon
                        width={15}
                        height={15}
                        color={highlighted ? COLORS.iconActive : COLORS.iconIdle}
                        fill={highlighted ? COLORS.iconFill : "none"}
                    />
                </div>
                <span
                    className={cn(
                        "text-[9px] leading-none",
                        isActive ? "font-semibold" : "font-medium"
                    )}
                    style={{ color: isActive ? COLORS.navActiveText : COLORS.iconIdle }}
                >
                    {label}
                </span>
            </button>
        );
    };

    return (
        <>
        {hidden && (
            <button
                onClick={() => setCollapsed(false)}
                aria-label="Show sidebar"
                title="Show sidebar"
                className="fixed top-4 left-3 z-50 flex items-center justify-center h-7 w-7 rounded-md shadow-sm transition-colors hover:bg-[var(--nav-hover)]"
                style={{ color: COLORS.iconIdle, backgroundColor: COLORS.navWhiteBackground }}
            >
                <PanelLeftOpen size={16} />
            </button>
        )}

        <nav
            aria-hidden={hidden}
            className={cn(
                "flex flex-col h-screen shrink-0 pb-5 overflow-y-auto overflow-x-hidden custom-scrollbar",
                "transition-[width] duration-200 ease-in-out",
                hidden ? "w-0 px-0 invisible pointer-events-none" : expanded ? "w-44 px-1.5" : "w-24 px-1.5"
            )}
            style={{
                backgroundColor: COLORS.primaryLight,
                "--nav-hover": COLORS.navHover,
                "--nav-scrollbar": COLORS.navScrollbar,
                "--nav-muted": COLORS.navMutedText,
            }}
        >
            {/* Logo + collapse toggle */}
            <div
                className="sticky top-0 z-10 flex items-center justify-center py-4"
                style={{ backgroundColor: COLORS.primaryLight }}
            >
                <Logo size={22} color="#fff" />

                {expanded && (
                    <button
                        onClick={() => setCollapsed(true)}
                        aria-label="Hide sidebar"
                        title="Hide sidebar"
                        className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center h-6 w-6 rounded-md transition-colors hover:bg-[var(--nav-hover)]/60"
                        style={{ color: COLORS.iconIdle }}
                    >
                        <PanelLeftClose size={15} />
                    </button>
                )}
            </div>

            {/* Main nav */}
            <div className="flex flex-col gap-1 w-full">
                {mainPaths.map((item) => renderItem(item))}
            </div>

            {expanded ? (
                <>
                    {/* New Chat Button */}
                    <div className="w-full mt-6 mb-3 px-1">
                        <button
                            onClick={() => {
                                setActiveChat(null);
                                navigate.to("new-chat", { relative: true });
                            }}
                            className="flex items-center justify-center gap-1.5 w-full py-1.5 px-2 rounded-lg text-[10px] font-medium transition-opacity hover:opacity-90 shadow-sm"
                            style={{ color: COLORS.navWhite, backgroundColor: COLORS.iconActive }}
                        >
                            <PlusCircle size={13} />
                            <span>New chat</span>
                        </button>
                    </div>

                    {/* Search Input */}
                    <div className="w-full mb-5 px-1">
                        <div
                            className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border bg-white/60"
                            style={{ borderColor: COLORS.navBorder }}
                        >
                            <Search size={11} className="shrink-0" style={{ color: COLORS.navMutedText }} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search conversation..."
                                className="w-full min-w-0 bg-transparent text-[9px] placeholder-[var(--nav-muted)] focus:outline-none"
                                style={{ color: COLORS.iconIdle }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    aria-label="Clear search"
                                    className="shrink-0"
                                    style={{ color: COLORS.iconIdle }}
                                >
                                    <X size={11} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 min-h-[250px] w-full mb-3">
                        <div className="shrink-0 text-[11px] font-medium px-2 mb-2" style={{ color: COLORS.navActiveText }}>
                            {searchQuery.trim() ? "Results" : "Recent"}
                        </div>
                        <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-0.5 [scrollbar-width:thin] [scrollbar-color:var(--nav-scrollbar)_transparent]">
                            {filteredChats.length > 0 ? (
                                filteredChats.map((chat) => {
                                    const isActiveChat = activeChat === chat.chathistoryid;
                                    return (
                                        <button
                                            key={chat.chathistoryid}
                                            onClick={() => {
                                                setActiveChat(chat.chathistoryid);
                                                navigate.to(chat.chathistoryid, { relative: true });
                                            }}
                                            className={cn(
                                                "flex items-start gap-2 w-full px-2 py-1.5 rounded-lg text-left transition-colors",
                                                isActiveChat ? "bg-[var(--nav-hover)]" : "hover:bg-[var(--nav-hover)]/40"
                                            )}
                                            title={chat.chathistoryname}
                                        >
                                            <FolderClock
                                                size={13}
                                                strokeWidth={2}
                                                className="shrink-0 mt-0.5"
                                                style={{ color: COLORS.iconIdle }}
                                            />
                                            <div className="min-w-0">
                                                <p className="text-[9px] font-medium leading-snug truncate" style={{ color: COLORS.navActiveText }}>
                                                    {chat.chathistoryname}
                                                </p>
                                                <p className="text-[8px] leading-none mt-1" style={{ color: COLORS.navMutedText }}>
                                                    {chat.time}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })
                            ) : (
                                <p className="text-[9px] px-2 py-3" style={{ color: COLORS.navMutedText }}>
                                    No conversations found
                                </p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex-1" />
            )}

            {/* Secondary nav */}
            <div className="flex flex-col gap-1 w-full pt-3">
                {secondaryPaths.map((item) => renderItem(item))}

                {/* Logout */}
                <button
                    onClick={() => navigate.to("logout")}
                    onMouseEnter={() => setHovered("logout")}
                    onMouseLeave={() => setHovered(null)}
                    className="flex flex-col items-center gap-1 w-full py-2 mt-3 rounded-lg transition-colors hover:bg-[var(--nav-hover)]/60"
                >
                    <div className="flex items-center justify-center h-4 w-4 shrink-0" style={{ color: COLORS.iconIdle }}>
                        <Logout
                            width={15}
                            height={15}
                            color={hovered === "logout" ? COLORS.iconActive : COLORS.iconIdle}
                            fill={hovered === "logout" ? COLORS.iconFill : "none"}
                        />
                    </div>
                    <span className="text-[9px] leading-none font-medium" style={{ color: COLORS.iconIdle }}>
                        Logout
                    </span>
                </button>
            </div>
        </nav>
        </>
    );
}