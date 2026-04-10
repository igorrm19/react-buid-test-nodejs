"use client";

import { createContext, useContext, ReactNode } from "react";

import pt from "./i18n/src/locales/pt.json";
import en from "./i18n/src/locales/en.json";
import it from "./i18n/src/locales/it.json";

import { Locale, supportedLocales } from "./i18n-config";

const messages: Record<Locale, any> = {
    pt,
    en,
    it
};

type Messages = typeof it;

const I18nContext = createContext<{
    messages: Messages;
    locale: Locale;
}>({
    messages: it,
    locale: "it"
});

type Props = {
    locale: Locale;
    children: ReactNode;
};

export function I18nProvider({ locale, children }: Props) {
    const activeMessages = messages[locale] || messages.en;
    
    return (
        <I18nContext.Provider value={{ messages: activeMessages, locale }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslations(namespace: keyof Messages) {
    const { messages: contextMessages } = useContext(I18nContext);

    return (key: string) => {
        const value = (contextMessages as any)?.[namespace]?.[key];
        if (!value) {
            console.warn(`Translation key not found: ${namespace}.${key}`);
            return key;
        }
        return value;
    };
}

export function useLocale() {
    return useContext(I18nContext).locale;
}