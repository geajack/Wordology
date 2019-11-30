const WordologyStrings = {
    strings: {
        TRANSLATION: {
            en: "Translation",
            fr: "Traduction",
            ru: "Перевод",
            pl: "Przetłumaczenie"
        },
        LOOK_UP: {
            en: "Look up",
            fr: "Rechercher",
            ru: "Искать",
            pl: "Wyszukiwać"
        },
        TRANSLATION_SUGGESTED: {
            en: word => `Translation suggested based on similarity to <em>${word}</em>.`,
            fr: word => `Traduction suggérée dû à la similarité avec <em>${word}</em>.`,
            ru: word => `Предлагаемый перевод основан на сходстве с <em>${word}</em>.`,
            pl: word => `Przetłumaczenie zaproponowany na postawie podobieństwa z <em>${word}</em>.`
        },
        LOGGED_OUT: {
            en: `You don't seem to be logged into a Wordology profile right now. Go to your settings page to log in, and then <a href="javascript:window.location.reload();">reload</a> this page.`,
            fr: `Vous ne semblez pas être connecté à un profil Wordology. Allez à la page de paramètres pour vous connecter, puis <a href="javascript:window.location.reload();">rechargez</a> cette page.`,
            ru: `Похоже, вы не вошли сейчас в профиль Wordology. Перейдите на страницу настроек, чтобы войти в систему, а затем <a href="javascript:window.location.reload();">перезагрузите</a> эту страницу.`,
            pl: `Wydawa się, że nie jesteś obecnie zalogowany na profil Wordology. Przejdź do strony ustawienia aby się zalogować, a potem <a href="javascript:window.location.reload();">załadowaj</a> tą stronę.`
        },
        CHANGED_PROFILE: {
            en: `You seem to have changed Wordology profiles since the last time this page was loaded. <a href="javascript:window.location.reload();">Reload</a> this page to keep using Wordology.`,
            fr: `Vous semblez avoir changé de profil Wordology depuis que cette page ait été chargée. <a href="javascript:window.location.reload();">Rechargez</a> cette page pour continuer à utiliser Wordology.`,
            ru: `Похоже, вы изменили профили Wordology с момента последней загрузки этой страницы. <a href="javascript:window.location.reload();">Перезагрузите</a> эту страницу, чтобы продолжать использовать Wordology.`,
            pl: `Wydawa się, że zmieniłeś profil Wordology od kiedy była ładowana ta strona. <a href="javascript:window.location.reload();">Załadowaj</a> tą stronę aby ciągnić używać Wordology.`
        },
        WORDS: {
            en: "Words",
            fr: "Mots",
            ru: "Слова",
            pl: "Słowa"
        },
        OPTIONS: {
            en: "Options",
            fr: "Options",
            ru: "Параметры",
            pl: "Ustawienie"
        },
        PROFILE: {
            en: "Profile",
            fr: "Profil",
            ru: "Профиль",
            pl: "Profil"
        },
        NO_PROFILE: {
            en: "None",
            fr: "Aucun",
            ru: "Никако́й",
            pl: "Żaden"
        },
        HELP: {
            en: "Help",
            fr: "Aide (Anglais)",
            ru: "Помощь",
            pl: "Pomoc"
        },
        FEEDBACK: {
            en: "Feedback",
            fr: "Contact",
            ru: "Отзывы",
            pl: "Opinie"
        },
        DONATE: {
            en: "Donate",
            fr: "Soutenir",
            ru: "Дарить",
            pl: "Ofiarować"
        },
        SMART_MATCHING: {
            en: "Smart Matching",
            fr: "Detéction de flexion",
            pl: "Inteligentne dopasowanie"
        },
        NO_WORDS: {
            en: "You have no words added!",
            fr: "Vous n'avez pas de mots!",
            pl: "Nie masz słów dodanych!"
        },
        DELETE_WORD: {
            en: word => `Delete "${word}"?`,
            fr: word => `Supprimer "${word}"?`,
            ru: word => `Удалить "${word}"?`,
            pl: word => `Usunąć "${word}"?`
        },
        MINIMUM_LENGTH_OF_ROOT: {
            en: "Minimum length of a root:",
            fr: "Longueur minimale d'une racine:",
            pl: "Minimalna długość rdzeni:"
        },
        BLACKLISTED_PREFIXES: {
            en: "Blacklisted prefixes:",
            fr: "Liste noire de préfixes:",
            pl: "Czarna lista przedrostków:"
        },
        ADD_PREFIXES: {
            en: "Add prefixes to your blacklist below.",
            fr: "Ajoutez des préfixes à votre liste noire ci-dessous.",
            pl: "Dodać poniżej przedrostki do czarnej listy."
        },
        BLACKLIST_PROMPT: {
            en: "Blacklist prefix:",
            fr: "Ajouter préfixe:",
            pl: "Dodać przedrostek:"
        },
        MAXIMUM_LENGTH_OF_SUFFIX: {
            en: "Maximum length of a suffix:",
            fr: "Longueur maximale d'un suffixe:",
            pl: "Maksymalna długość przyrostka:"
        },
        WHITELISTED_SUFFIXES: {
            en: "Whitelisted suffixes:",
            fr: "Liste blanche de suffixes:",
            pl: "Biała lista przyrostków"
        },
        ADD_SUFFIXES: {
            en: "Add suffixes to your whitelist below.",
            fr: "Ajoutez des suffixes à votre liste blanche ci-dessous.",
            pl: "Dodać poniżej przyrostki do białej listy."
        },
        WHITELIST_PROMPT: {
            en: "Whitelist suffix:",
            fr: "Ajouter suffixe:",
            pl: "Dodać przyrostek:"
        },
        ADD_BUTTON: {
            en: "Add",
            fr: "Ajouter",
            ru: "Добавить",
            pl: "Dodać"
        },
        USE_SMART_MATCHING: {
            en: "Use Smart Matching",
            fr: "Utiliser la détéction d'infléction",
            pl: "Używać inteligentne dopasowanie"
        },
        LOOKUP_HEADER: {
            en: "Lookup",
            fr: "Recherche",
            ru: "Искание",
            pl: "Wyszukiwanie"
        },
        LOOKUP_DESCRIPTION: {
            en: `Enter the URL of your preferred online dictionary, typing a dollar sign ($) where the word should be, e.g.: <em>http://en.wiktionary.org/wiki/$</em>.`,
            fr: `Entrez l'URL de votre dictionnaire en-ligne préferé, tapant un signe dollar ($) là où devrait figurer le mot, e.g.: <em>http://fr.wiktionary.org/wiki/$</em>.`,
            pl: `Wpisz tutaj URL twojego preferowanego internetowego słowniku, pisący znak dolara ($) tam gdzie powinno być słowo, n.p.: <em>http://pl.wiktionary.org/wiki/$</em>.`
        },
        LOOKUP_URL: {
            en: "Lookup URL:",
            fr: "URL de recherche:",
            ru: "URL исканий:",
            pl: "URL wyszukiwania:"
        },
        COLORS: {
            en: "Colors",
            fr: "Couleurs",
            ru: "Цвета",
            pl: "Kolory"
        },
        UNDEFINED_WORDS: {
            en: "Undefined words:",
            fr: "Mots non-définis:",
            pl: "Słowa niezdefiniowane:"
        },
        DEFINED_WORDS: {
            en: "Defined words:",
            fr: "Mots définis:",
            pl: "Słowa zdefiniowane:"
        },
        SMART_MATCHED_WORDS: {
            en: "Smart matched words:",
            fr: "Mots définis par la detéction de flexion:",
            pl: "Słowa inteligentnie dopasowane"
        },
        OPACITY: {
            en: "Opacity:",
            fr: "Opacité",
            ru: "Неясность",
            pl: "Mętność"
        },
        RESET_COLORS: {
            en: "Reset to default colors",
            fr: "Revenir aux couleurs par défaut",
            pl: "Przywracać domyślnych kolorów"
        },
        EXTENDED_ALPHABET_HEADER: {
            en: "Extended Alphabet",
            fr: "Alphabet étendu",
            pl: "Alfabet rozszerzony"
        },
        EXTENDED_ALPHABET_DESCRIPTION: {
            en: `Add extra characters to the alphabet recognized by Wordology. For example, if you add the hyphen ("-"), then Wordology will consider "flower-pot"
            as one word rather than "flower" and "pot". Just type all extra characters together, with no spaces, e.g. <em>'-</em> to add ' and -.`,
            fr: `Ajoutez des caractères supplémentaires à l'alphabet reconnu par Wordology. Par exemple, en ajoutant le tiret ("-"), Wordology considérera "tire-bouchon"
            comme un seul mot plutôt que "tire" et "bouchon". Ecrivez simplement tous les caractères à la suite, sans éspaces, e.g. <em>'-</em> pour ajouter ' et -.`,
            pl: `Dodać więcej znaki do alfabetu rozpoznanego przez Wordology. Na przekład, jeżeli dodajesz myślnik ("-"), to Wordology uważa "czarno-biały"
            za jednego słowa a nie za "czarno" a "biały". Wpisz prosto wszystkie znaki razem, bez spacje, n.p. <em>'-</em> aby dodać ' i -.`
        },
        EXTENDED_ALPHABET_PROMPT: {
            en: "Extended alphabet:",
            fr: "Alphabet étendu:",
            pl: "Alfabet rozszerzony:"
        },
        LOGIN_FOR_OPTIONS: {
            en: "Log in to a profile to access options.",
            fr: "Connectez-vous à un profil pour accéder aux options.",
            pl: "Zaloguj się na profil aby dostępić do ustawienia."
        },
        EXPORT: {
            en: "Export as file",
            fr: "Exporter comme fichier",
            pl: "Wyeksportować jako pliku"
        },
        IMPORT: {
            en: "Import from file",
            fr: "Importer un fichier",
            pl: "Importować plik"
        },
        CLEAR: {
            en: "Clear data",
            fr: "Effacer données",
            pl: "Usunąć dane"
        },
        IMPORT_ERROR: {
            en: "There was an error reading your file. Was that the right file?",
            fr: "Une erreur est survenue en lisant votre fichier. Etait-ce le bon fichier?",
            pl: "Wystąpił problem podczas czytanie pliku. Czy to był poprawny plik?"
        },
        DELETE_WORDLIST_WARNING: {
            en: "To delete your entire wordlist for this profile permanently, type DELETE below in all-capital letters, and click OK.",
            fr: "Pour supprimer tous les mots de ce profil de façon permanante, tapez SUPPRIMER ci-dessous en lettre majuscules, et appuyez sur OK.",
            pl: "Aby usunąć trwale wszystkie słowa z tego profilu, wpisz poniziej USUNAC w dużych literach, i kliknij OK."
        },
        DELETE_PASSWORD: {
            en: "DELETE",
            fr: "SUPPRIMER",
            pl: "USUNAC"
        },
        OK: {
            en: "OK",
            fr: "OK",
            ru: "OK",
            pl: "OK"
        },
        CANCEL: {
            en: "Cancel",
            fr: "Annuler",
            ru: "Отменить",
            pl: "Anuluj"
        },
        WORD: {
            en: "Word",
            fr: "Mot",
            ru: "Слово",
            pl: "Słowo"
        },
        DEFINITION: {
            en: "Definition",
            fr: "Définition",
            ru: "Значение",
            pl: "Znaczenia"
        },
        RENAME_PROFILE: {
            en: name => `Enter new profile name for "${name}":`,
            fr: name => `Entrez un nouveau nom pour le profil "${name}":`,
            pl: name => `Wpisz nową nazwę dla profilu "${name}":`
        },
        DELETE_PROFILE_WARNING: {
            en: name =>
                `Definitely delete profile "${name}"? Your wordlist and settings will be gone forever.
                Type DELETE (all-caps) to delete.`,
            fr: name =>
                `Vraiment supprimer le profil "${name}"? Vos mots et paramètres seront supprimés à jamais.
                Ecrivez SUPPRIMER (en majuscules) pour supprimer.`,
            pl: name =>
                `Naprawdę usunąć profil "${name}"? Twoje słowa i ustawienia zostają usuniąte na zawsze.
                Wpisz USUNAC (w dużach literach) aby usunąć.`
        },
        ADD_PROFILE: {
            en: "Enter name for new profile:",
            fr: "Entrez un nom pour le nouveau profil:",
            pl: "Wpisz nazwę nowego profilu:"
        },
        ADD_PROFILE_TOOLTIP: {
            en: "Add profile",
            fr: "Ajouter profil",
            ru: "Добавить профиль",
            pl: "Dodać profil"
        },
        RENAME_PROFILE_TOOLTIP: {
            en: "Rename profile",
            fr: "Renommer profil",
            ru: "Переименовать профиль",
            pl: "Zmienić nazwę profilu"
        },
        DELETE_PROFILE_TOOLTIP: {
            en: "Delete profile",
            fr: "Supprimer profil",
            ru: "Удалить профиль",
            pl: "Usunąć profil"
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