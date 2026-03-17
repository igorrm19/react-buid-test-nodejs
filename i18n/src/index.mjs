import pt from "./locales/pt.json";
import en from "./locales/en.json";

const messages = {
    pt,
    en
};

export function getMessages(locale) {
    return messages[locale] || messages.en;
}