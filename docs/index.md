# Welcome to Wordology

The philosophy behind Wordology is that the best way to learn how to do something is to do it for its own sake, and let learning it be a side-effect, rather than to try and discipline yourself to do it _in order to_ learn it. The best way to learn to cook is to start cooking all of your meals, not to force yourself to cook one recipe a week. The best way to get fit is to take up a sport you enjoy, rather than force yourself to exercise every day. Wordology helps reading in your target language become an activity you can do casually, as part of your every day routine, rather than as homework.

Wordology is _not a translation app_! By making you add each word you learn to the app manually, Wordology tries to give you a sense of progress on your quest to learn your target language.

# Exporting/Importing your word list

From the Words tab on this page, you can save your wordlist as a file. The same file can later be imported back into Wordology from the Words tab. This can be used for backup, sharing, for syncing the extension between computers, or for learning multiple languages at once.

For nerds: the wordlist is saved as a JSON file with the following structure:

```
[
    {"word": "bonjour", "definition": "hello"},
    {"word": "oui", "definition": "yes"},
    {"word": "non", "definition": "no"}
]
```

Your wordlist is not erased before the file is imported, rather, entries in the file are added to the entries in your list. If an entry with the same _word_ field appears in both your wordlist and the imported file, the entry in the file replaces the one in your wordlist.

# Smart Matching

In many languages, words can be built out of simpler words by adding suffixes. English nouns become plural by adding an -s, French verbs take on a variety of different tenses and aspects by adding suffixes like -ez or -aient, and English adverbs are built out of adjectives by adding -ly. When Smart Matching is turned on, Wordology attempt to detect such variant words. Definitions are shown not just for words that are in your dictionary, but for words which are similar to a word in your dictionary. The behavior of Smart Matching can be fine-tuned in the Options tab.

Words detected by Smart Matching will be highlighted in blue, rather than green. If the match is incorrect, you can click on it and add the correct definition to the dictionary. If the match is correct, you can add it as well, just so that the word shows up in green rather than blue, but it's recommended you don't do this. Smart Matching is intended as a labor saving device, so it's recommended you let it save you labor.

## How Smart Matching works

Smart Matching is based on some simple heuristics which give reasonable results for European languages. At the most basic level, a word on the page is considered to _match_ a word in your dictionary if they have a minimum number of common initial letters. For example, the words _ferocious_ and _ferocity_ have the six initial letters "feroci" in common. The minimum number of common initial letters for a match is set through the "Minimum length of a root" setting in the Options tab.

Starting with the same letters doesn’t necessarily mean two words are related, since many languages have a certain number of prefixes that appear in many words, for example "un" or "re" in English. In order to compensate for this, you can blacklist common prefixes. Blacklisted prefixes are ignored when counting initial common letters, so if "re" were blacklisted, the words "rebuke" and "rebuttal" would be considered to only have two common letters ("bu") and not four.

If, having discared blacklisted prefixes, two words share the minimum number of common initial letters, the remaining letters are considered. If there are too many remaining letters, the words are not considered a match. For example, the words "friendship" and "fries" share four common letters, "frie". However, it should be obvious that "ndship" is too long to be a grammatical suffix of some kind. Therefore, the words would not be considered a match. The maximum length of a suffix can be set in the options.

However, languages may have certain particularly long grammatical suffixes which are nevertheless quite common, such as "-ally" in English, to indicate an adverb. Such suffixes can be whitelisted, and they will be ignored in counting the length of a suffix.