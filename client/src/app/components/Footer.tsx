// src/app/components/Footer.tsx
import { FaGithub, FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Logo + Name */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="Logo"
                        className="w-8 h-8"
                    />
                    <span className="text-sm font-semibold">StarkFantasy League</span>
                </div>

                {/* Right: Community icons */}
                <div className="flex items-center gap-6">
                    <span className="text-sm">Community</span>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane size={20} />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={20} />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-4" />

            {/* Bottom: Copyright */}
            <div className="text-center text-xs text-gray-400">
                Copyright © 2025 - StarkFantasy League
            </div>
        </footer>
    );
}
