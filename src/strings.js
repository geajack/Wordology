const WordologyStrings = {
    strings: {
        TRANSLATION: {
            en: "Translation",
            fr: "Traduction"
        },
        LOOK_UP: {
            en: "Look up",
            fr: "Rechercher"
        },
        TRANSLATION_SUGGESTED: {
            en: word => `Translation suggested based on similarity to <em>${word}</em>.`,
            fr: word => `Traduction suggérée dû à la similarité avec <em>${word}</em>.`
        },
        LOGGED_OUT: {
            en: `You don't seem to be logged into a Wordology profile right now. Go to your settings page to log in, and then <a href="javascript:window.location.reload();">reload</a> this page.`,
            fr: `Vous ne semblez pas être connecté à un profil Wordology. Allez à la page de paramètres pour vous connecter, puis <a href="javascript:window.location.reload();">rechargez</a> cette page.`
        },
        CHANGED_PROFILE: {
            en: `You seem to have changed Wordology profiles since the last time this page was loaded. <a href="javascript:window.location.reload();">Reload</a> this page to keep using Wordology.`,
            fr: `Vous semblez avoir changé de profil Wordology depuis que cette page ait été chargée. <a href="javascript:window.location.reload();">Rechargez</a> cette page pour continuer à utiliser Wordology.`
        },
        WORDS: {
            en: "Words",
            fr: "Mots"
        },
        OPTIONS: {
            en: "Options",
            fr: "Options"
        },
        PROFILE: {
            en: "Profile",
            fr: "Profil"
        },
        NO_PROFILE: {
            en: "None",
            fr: "Aucun"
        },
        HELP: {
            en: "Help",
            fr: "Aide (Anglais)"
        },
        FEEDBACK: {
            en: "Feedback",
            fr: "Contact"
        },
        SMART_MATCHING: {
            en: "Smart Matching",
            fr: "Détection d'inflection"
        },
        NO_WORDS: {
            en: "You have no words added!",
            fr: "Vous n'avez pas de mots!"
        },
        DELETE_WORD: {
            en: word => `Delete "${word}"?`,
            fr: word => `Supprimer "${word}"?`
        }
    },

    getStrings: function(languageCode)
    {
        let result = {};
        for (let stringName in WordologyStrings.strings)
        {
            result[stringName] = WordologyStrings.strings[stringName][languageCode];
        }
        return result;
    }
};