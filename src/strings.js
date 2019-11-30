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
            fr: "Detéction de flexion"
        },
        NO_WORDS: {
            en: "You have no words added!",
            fr: "Vous n'avez pas de mots!"
        },
        DELETE_WORD: {
            en: word => `Delete "${word}"?`,
            fr: word => `Supprimer "${word}"?`
        },
        MINIMUM_LENGTH_OF_ROOT: {
            en: "Minimum length of a root:",
            fr: "Longueur minimale d'une racine:"
        },
        BLACKLISTED_PREFIXES: {
            en: "Blacklisted prefixes:",
            fr: "Liste noire de préfixes:"
        },
        ADD_PREFIXES: {
            en: "Add prefixes to your blacklist below.",
            fr: "Ajoutez des préfixes à votre liste noire ci-dessous."
        },
        BLACKLIST_PROMPT: {
            en: "Blacklist prefix:",
            fr: "Ajouter préfixe:"
        },
        MAXIMUM_LENGTH_OF_SUFFIX: {
            en: "Maximum length of a suffix:",
            fr: "Longueur maximale d'un suffixe:"
        },
        WHITELISTED_SUFFIXES: {
            en: "Whitelisted suffixes:",
            fr: "Liste blanche de suffixes:"
        },
        ADD_SUFFIXES: {
            en: "Add suffixes to your whitelist below.",
            fr: "Ajoutez des suffixes à votre liste blanche ci-dessous."
        },
        WHITELIST_PROMPT: {
            en: "Whitelist suffix:",
            fr: "Ajouter suffixe:"
        },
        ADD_BUTTON: {
            en: "Add",
            fr: "Ajouter"
        },
        USE_SMART_MATCHING: {
            en: "Use Smart Matching",
            fr: "Utiliser la détéction d'infléction"
        },
        LOOKUP_HEADER: {
            en: "Lookup",
            fr: "Recherche"
        },
        LOOKUP_DESCRIPTION: {
            en: `Enter the URL of your preferred online dictionary, typing a dollar sign ($) where the word should be, e.g.: <em>http://en.wiktionary.org/wiki/$</em>.`,
            fr: `Entrez l'URL de votre dictionnaire en-ligne préferé, tapant un signe dollar ($) là où devrait figurer le mot, e.g.: <em>http://fr.wiktionary.org/wiki/$</em>.`
        },
        LOOKUP_URL: {
            en: "Lookup URL:",
            fr: "URL de recherche:"
        },
        COLORS: {
            en: "Colors",
            fr: "Couleurs"
        },
        UNDEFINED_WORDS: {
            en: "Undefined words:",
            fr: "Mots non-définis:"
        },
        DEFINED_WORDS: {
            en: "Defined words:",
            fr: "Mots définis:"
        },
        SMART_MATCHED_WORDS: {
            en: "Smart matched words:",
            fr: "Mots définis par la detéction de flexion:"
        },
        OPACITY: {
            en: "Opacity:",
            fr: "Opacité"
        },
        RESET_COLORS: {
            en: "Reset to default colors",
            fr: "Revenir aux couleurs par défaut"
        },
        EXTENDED_ALPHABET_HEADER: {
            en: "Extended Alphabet",
            fr: "Alphabet étendu"
        },
        EXTENDED_ALPHABET_DESCRIPTION: {
            en: `Add extra characters to the alphabet recognized by Wordology. For example, if you add the hyphen ("-"), then Wordology will consider "flower-pot"
            as one word rather than "flower" and "pot". Just type all extra characters together, with no spaces, e.g. <em>'-</em> to add ' and -.`,
            fr: `Ajoutez des caractères supplémentaires à l'alphabet reconnu par Wordology. Par exemple, en ajoutant le tiret ("-"), Wordology considérera "tire-bouchon"
            comme un seul mot plutôt que "tire" et "bouchon". Ecrivez simplement tous les caractères à la suite, sans éspaces, e.g. <em>'-</em> pour ajouter ' et -.`
        },
        EXTENDED_ALPHABET_PROMPT: {
            en: "Extended alphabet:",
            fr: "Alphabet étendu:"
        },
        LOGIN_FOR_OPTIONS: {
            en: "Log in to a profile to access options.",
            fr: "Connectez-vous à un profil pour accéder aux options."
        },
        EXPORT: {
            en: "Export as file",
            fr: "Exporter comme fichier"
        },
        IMPORT: {
            en: "Import from file",
            fr: "Importer un fichier"
        },
        CLEAR: {
            en: "Clear data",
            fr: "Effacer données"
        },
        IMPORT_ERROR: {
            en: "There was an error reading your file. Was that the right file?",
            fr: "Une erreur est survenue en lisant votre fichier. Etait-ce le bon fichier?"
        },
        DELETE_WORDLIST_WARNING: {
            en: "To delete your entire wordlist for this profile permanently, type DELETE below in all-capital letters, and click OK.",
            fr: "Pour supprimer tous les mots de ce profil de façon permanante, tapez SUPPRIMER ci-dessous en lettre majuscules, et appuyez sur OK."
        },
        DELETE_PASSWORD: {
            en: "DELETE",
            fr: "SUPPRIMER"
        },
        OK: {
            en: "OK",
            fr: "OK"
        },
        CANCEL: {
            en: "Cancel",
            fr: "Annuler"
        },
        WORD: {
            en: "Word",
            fr: "Mot"
        },
        DEFINITION: {
            en: "Definition",
            fr: "Définition"
        },
        RENAME_PROFILE: {
            en: name => `Enter new profile name for "${name}":`,
            fr: name => `Entrez un nouveau nom pour le profil "${name}":`
        },
        DELETE_PROFILE_WARNING: {
            en: name =>
                `Definitely delete profile "${name}"? Your wordlist and settings will be gone forever.
                Type DELETE (all-caps) to delete.`,
            fr: name =>
                `Vraiment supprimer le profil "${name}"? Vos mots et paramètres seront supprimés à jamais.
                Ecrivez SUPPRIMER (en majuscules) pour supprimer.`
        },
        ADD_PROFILE: {
            en: "Enter name for new profile:",
            fr: "Entrez un nom pour le nouveau profil:"
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