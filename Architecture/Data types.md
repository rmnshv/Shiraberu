# Prototype Description
There are three possible types of prototypes:
* **R** - Radicals, radicals are basic building blocks of kanji. Radical is a character or a picture that has a name(meaning).
* **K** - Kanji, kanji are chinese characters that could be subdivided into radicals. Kanji are one of the building blocks used in vocabulary. Kanji is a character that has one or more name(meaning) and one or more reading.
* **V** - Vocabulary. Vocabulary is a word of Japanese language that has one or more translation(meaning) and one or more reading.

What fields will be included in a particular prototype depends on the **scope** of the **field** and the **type** of the prototype.

During review cards have 2 sides for R and 3 sides for K and V (this is shown when user wants more information during review session):
* front: **characters, radical_picture, type**
* back#1: **meanings, meaning_mnemonic, components, sentences, extra_data, type**)
* back#2: **readings, reading_mnemonic, components, sentences, extra_data, type**)


### Prototype Data Structure:
| Field | Data type | Scope | Allow null | Description |
| --- | --- | --- | --- | --- |
| id | number | RKV | - | Document ID |
| type | string | RKV | - | R - radical, K - kanji, V - vocabulary |
| is_hidden | boolean | RKV | RKV | Hidden prototypes will no longer be offered as a lesson for new learners but still will be available for those who already learned it |
| position | number | RKV | - | Position of prototype in it's level. This allows to finetune the user experience |
| level | number | RKV | - | Level on which the prototype appears |
| components | array of numbers | KV | R | Null for radicals, id of radicals for kanji, id of kanji for vocabulary |
| characters | string | RKV | R |String of unicode characters to represent the prototype, this will be shown to the user as "front of the card" during review.
| radical_picture | string | R | RKV |Picture would be stored in it's base64 form, that field applies only to radicals that don't have appropriate unicode **characters** to represent them |
| meaning_mnemonic | string | RKV | - | Meaning mnemonic/Name mnemonic |
| meanings | array of documents | RKV | - | ***Defined separately below*** |
| reading_mnemonic | string | KV | - | Reading mnemocic |
| readings | array of documents | KV | R |***Defined separately below*** |
| sentences | array of documents | V | RK | ***Defined separately below*** |
| extra_data | string | RKV | RKV | Could contain data like V's part of speech or something else defined in the future |
| url_handle | string | RKV | - |Used to generate URL together with type. Radicals use their meaning, downcased. Kanji and vocabulary use their characters. 

#### Meaning Data Structure:
| Field | Data type | Scope | Description |
| --- | --- | --- | --- |
| text | string | RKV | String of unicode characters (mainly cyrillic), names of radicals, names of kanji, translations of words |
| is_primary | boolean | RKV | Exactly one element of an array of meanings must be primary, array is guaranteed to have at least one element |

#### Reading Data Structure:
| Field | Data type | Scope | Description |
| --- | --- | --- | --- |
| kana | string | KV | All readings are stored as hiragana + special characters |
| is_primary | boolean | KV | Exactly one element of an array of meanings must be primary, array is guaranteed to have at least one element |
| is_on | boolean | K | onyomi reading (applicable only to kanji), ***check the note below*** |
| is_kun | boolean | K | kunyomi reading (applicable only to kanji), ***check the note below*** |

***note:*** If both *is_on and is_kun* are false then reading is conidered [nanori](https://en.wikipedia.org/wiki/Nanori) this happens only for vocabulary consisting of someone's name, and is given as an option for completeness.

#### Sentence Data Structure:
| Field | Data type | Scope | Description |
| --- | --- | --- | --- |
| text | string | V | String of unicode characters (mainly kanji and kana) |
| translation | string | V | String of unicode characters (mainly cyrillic) |

---
# Item Description
*TODO*

### Item Data Structure:
| Field | Type | Description |
| ----- |:----:| -----------:|
| id | number | Document ID |
| prototype_id | reference | Document ID of item's prototype |
| aux_meanings | array of strings | Meanings added by the user as synonyms | 
| reading_note | string | Reading notes added by the user | 
| meaning_note | string | Meaning notes added by the user | 