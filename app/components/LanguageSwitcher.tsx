"use client";

import { useLocale } from "@/i18n";
import { supportedLocales, Locale } from "@/i18n-config";

export default function LanguageSwitcher() {
    const currentLocale = useLocale();

    const toggleLanguage = (newLocale: Locale) => {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
        window.location.reload();
    };

    return (
        <div className="fixed top-4 right-4 flex gap-2">
            {supportedLocales.map((loc: Locale) => (
                <button
                    key={loc}
                    onClick={() => toggleLanguage(loc)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        currentLocale === loc
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                    }`}
                >
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
