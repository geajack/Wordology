const WordologyStrings = {
    strings: {
        TRANSLATION: {
            en: "Translation",
            fr: "Traduction",
            pl: "Przetłumaczenie",
            ru: "Перевод",
            es: "Traducción",
            pt: "Tradução"
        },
        LOOK_UP: {
            en: "Look up",
            fr: "Rechercher",
            pl: "Wyszukiwać",
            ru: "Поиск",
            es: "Buscar",
            pt: "Procurar"
        },
        LOOKUP_HEADER: {
            en: "Lookup",
            fr: "Recherche",
            pl: "Wyszukiwanie",
            ru: "Поиск",
            es: "Búsqueda",
            pt: "Pesquisa"
        },
        LOOKUP_DESCRIPTION: {
            en: `Enter the URL of your preferred online dictionary, typing a dollar sign ($) where the word should be, e.g.: <em>https://en.wiktionary.org/wiki/$</em>.`,
            fr: `Entrez l'URL de votre dictionnaire en-ligne préferé, tapant un signe dollar ($) là où devrait figurer le mot, e.g.: <em>https://fr.wiktionary.org/wiki/$</em>.`,
            pl: `Wpisz tutaj URL twojego preferowanego internetowego słownika, dodając znak dolara ($) tam gdzie powinno być słowo, n.p.: <em>https://pl.wiktionary.org/wiki/$</em>.`,
            ru: `Введите URL предпочитаемого онлайн-словаря и введите знак доллара ($) там, где должно быть слово, например: <em>https://ru.wiktionary.org/wiki/$</em>.`,
            es: `Ingrese la URL de su diccionario en línea preferido, escribiendo un signo de dólar ($) donde debería estar la palabra, por ejemplo: <em>https://es.wiktionary.org/wiki/$</em>.`,
            pt: `Digite o URL do seu dicionário online preferido, digitando um símbolo de dólar ($) onde a palavra deve estar, por exemplo: <em>https://pt.wiktionary.org/wiki/$</em>.`
        },
        LOOKUP_URL: {
            en: "Lookup URL:",
            fr: "URL de recherche:",
            pl: "URL wyszukiwania:",
            ru: "URL поиска:",
            es: "URL de búsqueda:",
            pt: "URL de pesquisa:"
        },
        TRANSLATION_SUGGESTED: {
            en: word => `Translation suggested based on similarity to <em>${word}</em>.`,
            fr: word => `Traduction suggérée dû à la similarité avec <em>${word}</em>.`,
            pl: word => `Przetłumaczenie zaproponowany na postawie podobieństwa z <em>${word}</em>.`,
            ru: word => `Предлагаемый перевод основан на сходстве с <em>${word}</em>.`,
            es: word => `Traducción sugerida basada en similitud con <em>${word}</em>.`,
            pt: word => `Tradução sugerida com base na semelhança com <em>${word}</em>.`
        },
        LOGGED_OUT: {
            en: `You don't seem to be logged into a Wordology profile right now. Go to your settings page to log in, and then <a href="javascript:window.location.reload();">reload</a> this page.`,
            fr: `Vous ne semblez pas être connecté à un profil Wordology. Allez à la page de paramètres pour vous connecter, puis <a href="javascript:window.location.reload();">rechargez</a> cette page.`,
            pl: `Wydaje się, że nie jesteś obecnie zalogowany na profil Wordology. Przejdź do strony ustawienia aby się zalogować, a potem <a href="javascript:window.location.reload();">załaduj</a> tę stronę.`,
            ru: `Похоже, вы не вошли в профиль Wordology. Перейдите на страницу настроек, чтобы войти в систему, а затем <a href="javascript:window.location.reload();">перезагрузите</a> страницу.`,
            es: `No parece haber iniciado sesión en un perfil de Wordology en este momento. Vaya a su página de configuración para iniciar sesión y luego <a href="javascript:window.location.reload();">recargar</a> esta página.`,
            pt: `Você não parece estar conectado a um perfil do Wordology no momento. Vá para a página de configurações para efetuar login e, em seguida, <a href="javascript:window.location.reload();">recarregue</a> esta página.`
        },
        CHANGED_PROFILE: {
            en: `You seem to have changed Wordology profiles since the last time this page was loaded. <a href="javascript:window.location.reload();">Reload</a> this page to keep using Wordology.`,
            fr: `Vous semblez avoir changé de profil Wordology depuis que cette page ait été chargée. <a href="javascript:window.location.reload();">Rechargez</a> cette page pour continuer à utiliser Wordology.`,
            pl: `Wydaje się, że zmieniłeś profil Wordology od kiedy była ładowana ta strona. <a href="javascript:window.location.reload();">Załaduj</a> tę stronę aby nadal używać Wordology.`,
            ru: `Похоже, вы изменили профили Wordology с момента последней загрузки этой страницы. <a href="javascript:window.location.reload();">Перезагрузите</a> страницу, чтобы продолжать использовать Wordology.`,
            es: `Parece que ha cambiado de perfil de Wordology desde la última vez que se cargó esta página. <a href="javascript:window.location.reload();">Recarga</a> esta página para seguir usando Wordology.`,
            pt: `Você parece ter alterado os perfis do Wordology desde a última vez que esta página foi carregada. <a href="javascript:window.location.reload();">Recarregue</a> esta página para continuar usando o Wordology.`
        },
        WORDS: {
            en: "Words",
            fr: "Mots",
            ru: "Слова",
            pl: "Słowa",
            es: "Palabras",
            pt: "Palavras"
        },
        OPTIONS: {
            en: "Options",
            fr: "Options",
            ru: "Параметры",
            pl: "Ustawienie",
            es: "Configuraciones",
            pt: "Configurações"
        },
        PROFILE: {
            en: "Profile",
            fr: "Profil",
            ru: "Профиль",
            pl: "Profil",
            es: "Perfil",
            pt: "Perfil"
        },
        NO_PROFILE: {
            en: "None",
            fr: "Aucun",
            ru: "Отсутствует",
            pl: "Żaden",
            es: "Ninguno",
            pt: "Nenhum"
        },
        HELP: {
            en: "Help",
            fr: "Aide (Anglais)",
            ru: "Справка (на английском)",
            pl: "Pomoc (Angielski)",
            es: "Ayuda (Inglés)",
            pt: "Socorro (Inglês)"
        },
        FEEDBACK: {
            en: "Feedback",
            fr: "Contact",
            ru: "Обратная связь",
            pl: "Opinie",
            es: "Comentarios",
            pt: "Comentários"
        },
        DONATE: {
            en: "Donate",
            fr: "Soutenir",
            ru: "Поблагодарить",
            pl: "Daj",
            es: "Donar",
            pt: "Doar"
        },
        SMART_MATCHING: {
            en: "Smart Matching",
            fr: "Detéction de flexion",
            pl: "Inteligentne dopasowanie",
            ru: "Умное обнаружение",
            es: "Detección de flexión",
            pt: "Detecção de flexão"
        },
        USE_SMART_MATCHING: {
            en: "Use Smart Matching",
            fr: "Utiliser la détéction d'infléction",
            pl: "Używać inteligentne dopasowanie",
            ru: "Использовать умное обнаружение",
            es: "Usar detección de flexión",
            pt: "Usar detecção de flexão"
        },
        SMART_MATCHED_WORDS: {
            en: "Smart matched words:",
            fr: "Mots définis par la detéction de flexion:",
            pl: "Słowa inteligentnie dopasowane:",
            ru: "Слова, определенные умным обнаружением:",
            es: "Palabras definidas por la detección de flexión:",
            pt: "Palavras definidas pela detecção de flexão"
        },
        NO_WORDS: {
            en: "You have no words added!",
            fr: "Vous n'avez pas de mots!",
            pl: "Nie masz słów dodanych!",
            ru: "У вас нет добавленных слов!",
            es: "No tiene palabras!",
            pt: "Você não tem palavras!"
        },
        DELETE_WORD: {
            en: word => `Delete "${word}"?`,
            fr: word => `Supprimer "${word}"?`,
            ru: word => `Удалить "${word}"?`,
            pl: word => `Usunąć "${word}"?`,
            es: word => `Eliminar "${word}"?`,
            pt: word => `Apagar ${word}?`
        },
        PREFIX: {
            en: "Prefix",
            fr: "Préfixe",
            pl: "Przedrostek",
            ru: "Приставка",
            es: "Prefijo",
            pt: "Prefixo"
        },
        SUFFIX: {
            en: "Suffix",
            fr: "Suffixe",
            pl: "Przyrostek",
            ru: "Суффикс",
            es: "Sufijo",
            pt: "Sufixo"
        },
        MINIMUM_LENGTH_OF_ROOT: {
            en: "Minimum length of a root:",
            fr: "Longueur minimale d'une racine:",
            pl: "Minimalna długość tematu:",
            ru: "Минимальная длина корня:",
            es: "Longitud mínima de una raíz:",
            pt: "Comprimento mínimo de uma raiz:"
        },
        BLACKLISTED_PREFIXES: {
            en: "Blacklisted prefixes:",
            fr: "Liste noire de préfixes:",
            pl: "Czarna lista przedrostków:",
            ru: "Черный список приставок:",
            es: "Lista negra de prefijos:",
            pt: "Lista negra de prefixos:"
        },
        ADD_PREFIXES: {
            en: "Add prefixes to your blacklist below.",
            fr: "Ajoutez des préfixes à votre liste noire ci-dessous.",
            pl: "Dodaj poniżej przedrostki do czarnej listy.",
            ru: "Внесите приставки в черный список ниже.",
            es: "Agregar prefijos a su lista negra abajo.",
            pt: "Adicione um prefixo à sua lista negra abaixo."
        },
        BLACKLIST_PROMPT: {
            en: "Blacklist prefix:",
            fr: "Ajouter préfixe:",
            pl: "Dodaj przedrostek:",
            ru: "Внести приставку:",
            es: "Agregar prefijo:",
            pt: "Adicionar prefixo:"
        },
        MAXIMUM_LENGTH_OF_SUFFIX: {
            en: "Maximum length of a suffix:",
            fr: "Longueur maximale d'un suffixe:",
            pl: "Maksymalna długość przyrostka:",
            ru: "Максимальная длина суффикса:",
            es: "Longitud máxima de un sufijo:",
            pt: "Comprimento máximo de um sufixo:"
        },
        WHITELISTED_SUFFIXES: {
            en: "Whitelisted suffixes:",
            fr: "Liste blanche de suffixes:",
            pl: "Biała lista przyrostków:",
            ru: "Белый список суффиксов:",
            es: "Lista blanca de sufijos:",
            pt: "Lista branca de sufixos:"
        },
        ADD_SUFFIXES: {
            en: "Add suffixes to your whitelist below.",
            fr: "Ajoutez des suffixes à votre liste blanche ci-dessous.",
            pl: "Dodaj poniżej przyrostki do białej listy.",
            ru: "Внесите суффиксы в белый список ниже.",
            es: "Agregar sufijos a su lista blanca abajo:",
            pt: "Adicione um sufixo à sua lista branca abaixo."
        },
        WHITELIST_PROMPT: {
            en: "Whitelist suffix:",
            fr: "Ajouter suffixe:",
            pl: "Dodaj przyrostek:",
            ru: "Внести суффикс:",
            es: "Agregar sufijo:",
            pt: "Adicionar sufixo:"
        },
        ADD_BUTTON: {
            en: "Add",
            fr: "Ajouter",
            pl: "Dodaj",
            ru: "Добавить",
            es: "Agregar",
            pt: "Adicionar"
        },
        COLORS: {
            en: "Colors",
            fr: "Couleurs",
            ru: "Цвета",
            pl: "Kolory",
            es: "Colores",
            pt: "Cores"
        },
        UNDEFINED_WORDS: {
            en: "Undefined words:",
            fr: "Mots non-définis:",
            pl: "Słowa niezdefiniowane:",
            ru: "Неопределенные слова:",
            es: "Palabras indefinidas:",
            pt: "Palavras indefinidas:"
        },
        DEFINED_WORDS: {
            en: "Defined words:",
            fr: "Mots définis:",
            pl: "Słowa zdefiniowane:",
            ru: "Определенные слова:",
            es: "Palabras definidas:",
            pt: "Palavras definidas:"
        },
        OPACITY: {
            en: "Opacity:",
            fr: "Opacité:",
            pl: "Nieprzezroczystość:",
            ru: "Прозрачность:",
            es: "Opacidad:",
            pt: "Opacidade:"
        },
        RESET_COLORS: {
            en: "Reset to default colors",
            fr: "Revenir aux couleurs par défaut",
            pl: "Przywróć domyślne kolory",
            ru: "Сбросить цвета по умолчанию",
            es: "Restablecer a los colores predeterminados",
            pt: "Redefinir para cores padrãoes"
        },
        EXTENDED_ALPHABET_HEADER: {
            en: "Extended Alphabet",
            fr: "Alphabet étendu",
            pl: "Alfabet rozszerzony",
            ru: "Расширенный алфавит",
            es: "Alfabeto extendido",
            pt: "Alfabeto estendido"
        },
        EXTENDED_ALPHABET_DESCRIPTION: {
            en: `Add extra characters to the alphabet recognized by Wordology. For example, if you add the hyphen ("-"), then Wordology will consider "flower-pot"
            as one word rather than "flower" and "pot". Just type all extra characters together, with no spaces, e.g. <em>'-</em> to add ' and -.`,
            fr: `Ajoutez des caractères supplémentaires à l'alphabet reconnu par Wordology. Par exemple, en ajoutant le tiret ("-"), Wordology considérera "tire-bouchon" comme un seul mot plutôt que "tire" et "bouchon". Ecrivez simplement tous les caractères à la suite, sans éspaces, e.g. <em>'-</em> pour ajouter ' et -.`,
            pl: `Dodaj więcej znaków do alfabetu rozpoznanego przez Wordology. Na przykład, jeżeli dodajesz myślnik ("-"), to Wordology uważa "czarno-biały"
            za jedno słowo a nie za "czarno" a "biały". Wpisz wszystkie znaki razem, bez spacji, n.p. <em>'-</em> aby dodać ' i -.`,
            ru: `Добавьте дополнительные символы в алфавит, распознаваемый Wordology. Например, если вы добавите дефис ("-"),
            тогда Wordology будет рассматривать "ярко-красный" как одно слово, а не "ярко" и "красный". Просто введите все
            дополнительные символы вместе без пробелов, например, <em>'-</ em> добавить' и -.`,
            es: `Agregue caracteres adicionales al alfabeto reconocido por Wordology. Por ejemplo, si agrega el guión ("-"), Wordology considerará "norte-sur" como una palabra en lugar de "norte" y "sur". Simplemente escriba todos los caracteres adicionales juntos, sin espacios, p.ej. <em>'-</em> para agregar ' y -.`,
            pt: `Adicione caracteres extras ao alfabeto reconhecido por Wordology. Por exemplo, se você adicionar o hífen ("-"), Wordology considerará "norte-americano" como uma palavra em vez de "norte" e "americano". Basta digitar todos os caracteres extras juntos, sem espaços, por exemplo <em>'-</em> para adicionar ' e -.`
        },
        EXTENDED_ALPHABET_PROMPT: {
            en: "Extended alphabet:",
            fr: "Alphabet étendu:",
            pl: "Alfabet rozszerzony:",
            ru: "Расширенный алфавит:",
            es: "Alfabeto extendido:",
            pt: "Alfabeto estendido"
        },
        LOGIN_FOR_OPTIONS: {
            en: "Log in to a profile to access options.",
            fr: "Connectez-vous à un profil pour accéder aux options.",
            pl: "Aby mieć dostęp do ustawień, zaloguj profil.",
            ru: "Войдите в профиль, чтобы получить доступ к параметрам.",
            es: "Inicie sesión en un perfil para acceder a las opciones.",
            pt: "Faça login em um perfil para acessar as opções."
        },
        EXPORT: {
            en: "Export as file",
            fr: "Exporter comme fichier",
            pl: "Wyeksportować jako pliku",
            ru: "Экспортировать в файл",
            es: "Exportar como archivo",
            pt: "Exportar como arquivo"
        },
        IMPORT: {
            en: "Import from file",
            fr: "Importer un fichier",
            pl: "Importować plik",
            ru: "Импортировать из файла",
            es: "Importar desde archivo",
            pt: "Importar do arquivo"
        },
        CLEAR: {
            en: "Clear data",
            fr: "Effacer données",
            pl: "Usunąć dane",
            ru: "Удалить данные",
            es: "Borrar datos",
            pt: "Apagar os dados"
        },
        IMPORT_ERROR: {
            en: "There was an error reading your file. Was that the right file?",
            fr: "Une erreur est survenue en lisant votre fichier. Etait-ce le bon fichier?",
            pl: "Wystąpił problem podczas czytanie pliku. Czy to był poprawny plik?",
            ru: "Произошла ошибка при чтении вашего файла. Это был правильный файл?",
            es: "Se produjo un error al leer su archivo. ¿Era ese el archivo correcto?",
            pt: "Ocorreu um erro ao ler seu arquivo. Esse foi o arquivo certo?"
        },
        DELETE_WORDLIST_WARNING: {
            en: "To delete your entire wordlist for this profile permanently, type DELETE below in all-capital letters, and click OK.",
            fr: "Pour supprimer tous les mots de ce profil de façon permanante, tapez SUPPRIMER ci-dessous en lettre majuscules, et appuyez sur OK.",
            pl: "Aby usunąć trwale wszystkie słowa z tego profilu, wpisz poniżej USUNAC dużymi literami i kliknij OK.",
            ru: "Чтобы окончательно удалить весь список слов для этого профиля, введите слово \"УДАЛИТЬ\" заглавными буквами без кавычек ниже и нажмите ОК.",
            es: "Para eliminar toda su lista de palabras para este perfil de forma permanente, escriba ELIMINAR en mayúsculas y clique en Aceptar.",
            pt: "Para apagar permanentemente sua lista de palavras inteira desse perfil, digite APAGAR abaixo em letras maiúsculas e clique em OK."
        },
        DELETE_PASSWORD: {
            en: "DELETE",
            fr: "SUPPRIMER",
            pl: "USUNAC",
            ru: "УДАЛИТЬ",
            es: "ELIMINAR",
            pt: "APAGAR"
        },
        OK: {
            en: "OK",
            fr: "OK",
            ru: "OK",
            pl: "OK",
            es: "OK",
            pt: "OK"
        },
        CANCEL: {
            en: "Cancel",
            fr: "Annuler",
            ru: "Отменить",
            pl: "Anuluj",
            es: "Cancelar",
            pt: "Cancelar"
        },
        WORD: {
            en: "Word",
            fr: "Mot",
            ru: "Слово",
            pl: "Słowo",
            es: "Palabra",
            pt: "Palavra"
        },
        DEFINITION: {
            en: "Definition",
            fr: "Définition",
            ru: "Значение",
            pl: "Znaczenia",
            es: "Definición",
            pt: "Definição"
        },
        RENAME_PROFILE: {
            en: name => `Enter new profile name for "${name}":`,
            fr: name => `Entrez un nouveau nom pour le profil "${name}":`,
            pl: name => `Wpisz nową nazwę dla profilu "${name}":`,
            ru: name => `Введите новое имя профиля для "${name}":`,
            es: name => `Escriba un nuevo nombre para el perfil "${name}":`,
            pt: name => `Digite um novo nome do perfil para "${name}":`
        },
        DELETE_PROFILE_WARNING: {
            en: name =>
                `Definitely delete profile "${name}"? Your wordlist and settings will be gone forever.
                Type DELETE (all-caps) to delete.`,
            fr: name =>
                `Vraiment supprimer le profil "${name}"? Vos mots et paramètres seront supprimés à jamais.
                Ecrivez SUPPRIMER (en majuscules) pour supprimer.`,
            pl: name =>
                `Naprawdę usunąć profil "${name}"? Twoje słowa i ustawienia zostają usunięte na zawsze.
                Wpisz USUNAC (dużymi literami) aby usunąć.`,
            ru: name =>
                `Уверены, что хотите удалить профиль "${name}"? Ваш список слов и настройки исчезнут навсегда.
                Введите слово \"УДАЛИТЬ\" заглавными буквами без кавычек, чтобы удалить.`,
            es: name =>
                `¿Definitivamente eliminar el perfil "${name}"? Su lista de palabras y configuraciones desaparecerán para siempre. Escriba ELIMINAR (en mayúsculas) para eliminar.`,
            pt: name =>
                `Definitivamente apagar o perfil "${name}"? Sua lista de palavras e configurações desaparecerão para sempre.
                Digite APAGAR (maiúsculas) para apagar.`
        },
        ADD_PROFILE: {
            en: "Enter name for new profile:",
            fr: "Entrez un nom pour le nouveau profil:",
            pl: "Wpisz nazwę nowego profilu:",
            ru: "Введите имя для нового профиля:",
            es: "Escriba nombre para el nuevo perfil:",
            pt: "Digite um nome para o novo perfil:"
        },
        ADD_PROFILE_TOOLTIP: {
            en: "Add profile",
            fr: "Ajouter profil",
            pl: "Dodać profil",
            ru: "Добавить профиль",
            es: "Agregar perfil",
            pt: "Adicionar perfil"
        },
        RENAME_PROFILE_TOOLTIP: {
            en: "Rename profile",
            fr: "Renommer profil",
            ru: "Переименовать профиль",
            pl: "Zmienić nazwę profilu",
            es: "Renombrar perfil",
            pt: "Renomear perfil"
        },
        DELETE_PROFILE_TOOLTIP: {
            en: "Delete profile",
            fr: "Supprimer profil",
            ru: "Удалить профиль",
            pl: "Usunąć profil",
            es: "Eliminar perfil",
            pt: "Apagar perfil"
        }
    },

    SUPPORTED_LANGUAGES: ["en", "fr", "es", "pl", "pt", "ru"],

    getStrings: function(languageCode)
    {
        let result = {};
        for (let stringName in WordologyStrings.strings)
        {
            if (WordologyStrings.strings[stringName][languageCode])
            {
                result[stringName] = WordologyStrings.strings[stringName][languageCode];
            }
            else
            {
                result[stringName] = WordologyStrings.strings[stringName]["en"];
            }
        }
        return result;
    }
};