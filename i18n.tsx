"use client";

import { createContext, useContext, ReactNode } from "react";

import pt from "./i18n/src/locales/pt.json";
import en from "./i18n/src/locales/en.json";
import it from "./i18n/src/locales/it.json";

const messages = {
    pt,
    en,
    it

};

type Messages = typeof it;

const I18nContext = createContext<Messages>(it);

type Props = {
    locale: keyof typeof messages;
    children: ReactNode;
};

export function I18nProvider({ locale, children }: Props) {
    return (
        <I18nContext.Provider value={messages[locale]}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslations(namespace: keyof Messages) {
    const context = useContext(I18nContext);

    return (key: keyof Messages[typeof namespace]) =>
        context?.[namespace]?.[key] || key;
}