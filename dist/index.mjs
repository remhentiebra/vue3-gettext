// src/index.ts
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import { computed as computed2, reactive, ref as ref2 } from "vue";
// src/component.ts
import { computed, defineComponent, getCurrentInstance, h, onMounted, ref } from "vue";
// src/interpolate.ts
var EVALUATION_RE = /[[\].]{1,2}/g;
var INTERPOLATION_RE = /%\{((?:.|\n)+?)\}/g;
var MUSTACHE_SYNTAX_RE = /\{\{((?:.|\n)+?)\}\}/g;
var interpolate = function(plugin) {
    return function(msgid) {
        var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, disableHtmlEscaping = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, parent = arguments.length > 3 ? arguments[3] : void 0;
        var silent = plugin.silent;
        if (!silent && MUSTACHE_SYNTAX_RE.test(msgid)) {
            console.warn('Mustache syntax cannot be used with vue-gettext. Please use "%{}" instead of "{{}}" in: '.concat(msgid));
        }
        var result = msgid.replace(INTERPOLATION_RE, function(_match, token) {
            var getProps = function getProps(obj, expression2) {
                var arr = expression2.split(EVALUATION_RE).filter(function(x) {
                    return x;
                });
                while(arr.length){
                    obj = obj[arr.shift()];
                }
                return obj;
            };
            var expression = token.trim();
            var evaluated;
            var escapeHtmlMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };
            function evalInContext(context2, expression2, parent2) {
                try {
                    evaluated = getProps(context2, expression2);
                } catch (e) {}
                if (evaluated === void 0 || evaluated === null) {
                    if (parent2) {
                        return evalInContext(parent2.ctx, expression2, parent2.parent);
                    } else {
                        console.warn("Cannot evaluate expression: ".concat(expression2));
                        evaluated = expression2;
                    }
                }
                var result2 = evaluated.toString();
                if (disableHtmlEscaping) {
                    return result2;
                }
                return result2.replace(/[&<>"']/g, function(m) {
                    return escapeHtmlMap[m];
                });
            }
            return evalInContext(context, expression, parent);
        });
        return result;
    };
};
interpolate.INTERPOLATION_RE = INTERPOLATION_RE;
interpolate.INTERPOLATION_PREFIX = "%{";
var interpolate_default = interpolate;
// src/plurals.ts
var plurals_default = {
    getTranslationIndex: function getTranslationIndex(languageCode, n) {
        n = Number(n);
        n = typeof n === "number" && isNaN(n) ? 1 : n;
        if (languageCode.length > 2 && languageCode !== "pt_BR") {
            languageCode = languageCode.split("_")[0];
        }
        switch(languageCode){
            case "ay":
            // Aymará
            case "bo":
            // Tibetan
            case "cgg":
            // Chiga
            case "dz":
            // Dzongkha
            case "fa":
            // Persian
            case "id":
            // Indonesian
            case "ja":
            // Japanese
            case "jbo":
            // Lojban
            case "ka":
            // Georgian
            case "kk":
            // Kazakh
            case "km":
            // Khmer
            case "ko":
            // Korean
            case "ky":
            // Kyrgyz
            case "lo":
            // Lao
            case "ms":
            // Malay
            case "my":
            // Burmese
            case "sah":
            // Yakut
            case "su":
            // Sundanese
            case "th":
            // Thai
            case "tt":
            // Tatar
            case "ug":
            // Uyghur
            case "vi":
            // Vietnamese
            case "wo":
            // Wolof
            case "zh":
                return 0;
            case "is":
                return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
            case "jv":
                return n !== 0 ? 1 : 0;
            case "mk":
                return n === 1 || n % 10 === 1 ? 0 : 1;
            case "ach":
            // Acholi
            case "ak":
            // Akan
            case "am":
            // Amharic
            case "arn":
            // Mapudungun
            case "br":
            // Breton
            case "fil":
            // Filipino
            case "fr":
            // French
            case "gun":
            // Gun
            case "ln":
            // Lingala
            case "mfe":
            // Mauritian Creole
            case "mg":
            // Malagasy
            case "mi":
            // Maori
            case "oc":
            // Occitan
            case "pt_BR":
            // Brazilian Portuguese
            case "tg":
            // Tajik
            case "ti":
            // Tigrinya
            case "tr":
            // Turkish
            case "uz":
            // Uzbek
            case "wa":
                return n > 1 ? 1 : 0;
            case "lv":
                return n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2;
            case "lt":
                return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
            case "be":
            // Belarusian
            case "bs":
            // Bosnian
            case "hr":
            // Croatian
            case "ru":
            // Russian
            case "sr":
            // Serbian
            case "uk":
                return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
            case "mnk":
                return n === 0 ? 0 : n === 1 ? 1 : 2;
            case "ro":
                return n === 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;
            case "pl":
                return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
            case "cs":
            // Czech
            case "sk":
                return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
            case "csb":
                return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
            case "sl":
                return n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3;
            case "mt":
                return n === 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
            case "gd":
                return n === 1 || n === 11 ? 0 : n === 2 || n === 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
            case "cy":
                return n === 1 ? 0 : n === 2 ? 1 : n !== 8 && n !== 11 ? 2 : 3;
            case "kw":
                return n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3;
            case "ga":
                return n === 1 ? 0 : n === 2 ? 1 : n > 2 && n < 7 ? 2 : n > 6 && n < 11 ? 3 : 4;
            case "ar":
                return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
            default:
                return n !== 1 ? 1 : 0;
        }
    }
};
// src/translate.ts
var translate = function(language) {
    return {
        /*
   * Get the translated string from the translation.json file generated by easygettext.
   *
   * @param {String} msgid - The translation key
   * @param {Number} n - The number to switch between singular and plural
   * @param {String} context - The translation key context
   * @param {String} defaultPlural - The default plural value (optional)
   * @param {String} language - The language ID (e.g. 'fr_FR' or 'en_US')
   *
   * @return {String} The translated string
   */ getTranslation: function getTranslation(msgid) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, defaultPlural = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, languageKey = arguments.length > 4 ? arguments[4] : void 0, parameters = arguments.length > 5 ? arguments[5] : void 0, disableHtmlEscaping = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false;
            if (languageKey === void 0) {
                languageKey = language.current;
            }
            var interp = function(message, parameters2) {
                return parameters2 ? language.interpolate(message, parameters2, disableHtmlEscaping) : message;
            };
            msgid = msgid.trim();
            if (!msgid) {
                return "";
            }
            var silent = languageKey ? language.silent || language.muted.indexOf(languageKey) !== -1 : false;
            var noTransLangKey = languageKey;
            if (language.sourceCodeLanguage) {
                noTransLangKey = language.sourceCodeLanguage;
            }
            var untranslated = defaultPlural && plurals_default.getTranslationIndex(noTransLangKey, n) > 0 ? defaultPlural : msgid;
            var pluginTranslations = language.translations;
            var translations = pluginTranslations[languageKey] || pluginTranslations[languageKey.split("_")[0]];
            if (!translations) {
                if (!silent) {
                    console.warn("No translations found for ".concat(languageKey));
                }
                return interp(untranslated, parameters);
            }
            var getTranslationFromArray = function(arr) {
                var translationIndex = plurals_default.getTranslationIndex(languageKey, n);
                if (arr.length === 1 && n === 1) {
                    translationIndex = 0;
                }
                var str = arr[translationIndex];
                if (!str) {
                    if (str === "") {
                        return interp(untranslated, parameters);
                    }
                    throw new Error(msgid + " " + translationIndex + " " + language.current + " " + n);
                }
                return interp(str, parameters);
            };
            var getUntranslatedMsg = function() {
                if (!silent) {
                    var msg = "Untranslated ".concat(languageKey, " key found: ").concat(msgid);
                    if (context) {
                        msg += " (with context: ".concat(context, ")");
                    }
                    console.warn(msg);
                }
                return interp(untranslated, parameters);
            };
            var translateMsg = function(msg) {
                var context2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (_instanceof(msg, Object)) {
                    if (Array.isArray(msg)) {
                        return getTranslationFromArray(msg);
                    }
                    var msgContext = context2 !== null && context2 !== void 0 ? context2 : "";
                    var ctxVal = msg[msgContext];
                    return translateMsg(ctxVal);
                }
                if (context2) {
                    return getUntranslatedMsg();
                }
                if (!msg) {
                    return getUntranslatedMsg();
                }
                return interp(msg, parameters);
            };
            var translated = translations[msgid];
            return translateMsg(translated, context);
        },
        /*
   * Returns a string of the translation of the message.
   * Also makes the string discoverable by gettext-extract.
   *
   * @param {String} msgid - The translation key
   * @param {Object} parameters - The interpolation parameters
   * @param {Boolean} disableHtmlEscaping - Disable html escaping
   *
   * @return {String} The translated string
   */ gettext: function gettext(msgid, parameters) {
            var disableHtmlEscaping = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return this.getTranslation(msgid, void 0, void 0, void 0, void 0, parameters, disableHtmlEscaping);
        },
        /*
   * Returns a string of the translation for the given context.
   * Also makes the string discoverable by gettext-extract.
   *
   * @param {String} context - The context of the string to translate
   * @param {String} msgid - The translation key
   * @param {Object} parameters - The interpolation parameters
   * @param {Boolean} disableHtmlEscaping - Disable html escaping
   *
   * @return {String} The translated string
   */ pgettext: function pgettext(context, msgid, parameters) {
            var disableHtmlEscaping = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            return this.getTranslation(msgid, 1, context, void 0, void 0, parameters, disableHtmlEscaping);
        },
        /*
   * Returns a string of the translation of either the singular or plural,
   * based on the number.
   * Also makes the string discoverable by gettext-extract.
   *
   * @param {String} msgid - The translation key
   * @param {String} plural - The plural form of the translation key
   * @param {Number} n - The number to switch between singular and plural
   * @param {Object} parameters - The interpolation parameters
   * @param {Boolean} disableHtmlEscaping - Disable html escaping
   *
   * @return {String} The translated string
   */ ngettext: function ngettext(msgid, plural, n, parameters) {
            var disableHtmlEscaping = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
            return this.getTranslation(msgid, n, null, plural, void 0, parameters, disableHtmlEscaping);
        },
        /*
   * Returns a string of the translation of either the singular or plural,
   * based on the number, for the given context.
   * Also makes the string discoverable by gettext-extract.
   *
   * @param {String} context - The context of the string to translate
   * @param {String} msgid - The translation key
   * @param {String} plural - The plural form of the translation key
   * @param {Number} n - The number to switch between singular and plural
   * @param {Object} parameters - The interpolation parameters
   * @param {Boolean} disableHtmlEscaping - Disable html escaping
   *
   * @return {String} The translated string
   */ npgettext: function npgettext(context, msgid, plural, n, parameters) {
            var disableHtmlEscaping = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
            return this.getTranslation(msgid, n, context, plural, void 0, parameters, disableHtmlEscaping);
        }
    };
};
var translate_default = translate;
// src/utilities.ts
import { inject } from "vue";
// src/typeDefs.ts
var GetTextSymbol = Symbol("GETTEXT");
// src/utilities.ts
function normalizeTranslationKey(key) {
    return key.replace(/\r?\n|\r/, "").replace(/\s\s+/g, " ").trim();
}
function normalizeTranslations(translations) {
    var newTranslations = {};
    Object.keys(translations).forEach(function(lang) {
        var langData = translations[lang];
        var newLangData = {};
        Object.keys(langData).forEach(function(key) {
            newLangData[normalizeTranslationKey(key)] = langData[key];
        });
        newTranslations[lang] = newLangData;
    });
    return newTranslations;
}
var useGettext = function() {
    var gettext = inject(GetTextSymbol, null);
    if (!gettext) {
        throw new Error("Failed to inject gettext. Make sure vue3-gettext is set up properly.");
    }
    return gettext;
};
// src/component.ts
var Component = defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
    name: "translate",
    props: {
        tag: {
            type: String,
            default: "span"
        },
        // Always use v-bind for dynamically binding the `translateN` prop to data on the parent,
        // i.e.: `:translate-n`.
        translateN: {
            type: Number,
            default: null
        },
        translatePlural: {
            type: String,
            default: null
        },
        translateContext: {
            type: String,
            default: null
        },
        translateParams: {
            type: Object,
            default: null
        },
        translateComment: {
            type: String,
            default: null
        }
    },
    setup: function setup(props, context) {
        var isPlural = props.translateN !== void 0 && props.translatePlural !== void 0;
        if (!isPlural && (props.translateN || props.translatePlural)) {
            var _context_slots_default_, _context_slots_default, _context_slots;
            throw new Error("`translate-n` and `translate-plural` attributes must be used together: ".concat((_context_slots_default = (_context_slots = context.slots).default) === null || _context_slots_default === void 0 ? void 0 : (_context_slots_default_ = _context_slots_default.call(_context_slots)[0]) === null || _context_slots_default_ === void 0 ? void 0 : _context_slots_default_.children, "."));
        }
        var root = ref();
        var plugin = useGettext();
        var msgid = ref(null);
        onMounted(function() {
            if (!msgid.value && root.value) {
                msgid.value = root.value.innerHTML.trim();
            }
        });
        var translation = computed(function() {
            var _getCurrentInstance;
            var translatedMsg = translate_default(plugin).getTranslation(msgid.value, props.translateN, props.translateContext, isPlural ? props.translatePlural : null, plugin.current);
            return interpolate_default(plugin)(translatedMsg, props.translateParams, void 0, (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.parent);
        });
        return function() {
            if (!msgid.value) {
                return h(props.tag, {
                    ref: root
                }, context.slots.default ? context.slots.default() : "");
            }
            return h(props.tag, {
                ref: root,
                innerHTML: translation.value
            });
        };
    }
});
var component_default = Component;
// src/directive.ts
import { watch } from "vue";
var updateTranslation = function(language, el, binding, vnode) {
    var attrs = vnode.props || {};
    var msgid = el.dataset.msgid;
    var translateContext = attrs["translate-context"];
    var translateN = attrs["translate-n"];
    var translatePlural = attrs["translate-plural"];
    var isPlural = translateN !== void 0 && translatePlural !== void 0;
    var disableHtmlEscaping = attrs["render-html"] === "true";
    if (!isPlural && (translateN || translatePlural)) {
        throw new Error("`translate-n` and `translate-plural` attributes must be used together:" + msgid + ".");
    }
    if (!language.silent && attrs["translate-params"]) {
        console.warn("`translate-params` is required as an expression for v-translate directive. Please change to `v-translate='params'`: ".concat(msgid));
    }
    var translation = translate_default(language).getTranslation(msgid, translateN, translateContext, isPlural ? translatePlural : null, language.current);
    var _binding_instance;
    var context = Object.assign((_binding_instance = binding.instance) !== null && _binding_instance !== void 0 ? _binding_instance : {}, binding.value);
    var msg = interpolate_default(language)(translation, context, disableHtmlEscaping, null);
    el.innerHTML = msg;
};
function directive(language) {
    var update = function(el, binding, vnode) {
        el.dataset.currentLanguage = language.current;
        updateTranslation(language, el, binding, vnode);
    };
    return {
        beforeMount: function beforeMount(el, binding, vnode) {
            if (!el.dataset.msgid) {
                el.dataset.msgid = el.innerHTML;
            }
            watch(language, function() {
                update(el, binding, vnode);
            });
            update(el, binding, vnode);
        },
        updated: function updated(el, binding, vnode) {
            update(el, binding, vnode);
        }
    };
}
// src/index.ts
var defaultOptions = {
    /** all the available languages of your application. Keys must match locale names */ availableLanguages: {
        en: "English"
    },
    defaultLanguage: "en",
    sourceCodeLanguage: void 0,
    mutedLanguages: [],
    silent: false,
    translations: {},
    setGlobalProperties: true,
    globalProperties: {
        language: [
            "$language"
        ],
        gettext: [
            "$gettext"
        ],
        pgettext: [
            "$pgettext"
        ],
        ngettext: [
            "$ngettext"
        ],
        npgettext: [
            "$npgettext"
        ],
        interpolate: [
            "$gettextInterpolate"
        ]
    },
    provideDirective: true,
    provideComponent: true
};
function createGettext() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Object.keys(options).forEach(function(key) {
        if (Object.keys(defaultOptions).indexOf(key) === -1) {
            throw new Error("".concat(key, " is an invalid option for the translate plugin."));
        }
    });
    var mergedOptions = _object_spread({}, defaultOptions, options);
    var translations = ref2(normalizeTranslations(mergedOptions.translations));
    var gettext = reactive({
        available: mergedOptions.availableLanguages,
        muted: mergedOptions.mutedLanguages,
        silent: mergedOptions.silent,
        translations: computed2({
            get: function() {
                return translations.value;
            },
            set: function(val) {
                translations.value = normalizeTranslations(val);
            }
        }),
        current: mergedOptions.defaultLanguage,
        sourceCodeLanguage: mergedOptions.sourceCodeLanguage,
        install: function install(app) {
            app[GetTextSymbol] = gettext;
            app.provide(GetTextSymbol, gettext);
            if (mergedOptions.setGlobalProperties) {
                var globalProperties = app.config.globalProperties;
                var properties = mergedOptions.globalProperties.gettext || [
                    "$gettext"
                ];
                properties.forEach(function(p) {
                    globalProperties[p] = gettext.$gettext;
                });
                properties = mergedOptions.globalProperties.pgettext || [
                    "$pgettext"
                ];
                properties.forEach(function(p) {
                    globalProperties[p] = gettext.$pgettext;
                });
                properties = mergedOptions.globalProperties.ngettext || [
                    "$ngettext"
                ];
                properties.forEach(function(p) {
                    globalProperties[p] = gettext.$ngettext;
                });
                properties = mergedOptions.globalProperties.npgettext || [
                    "$npgettext"
                ];
                properties.forEach(function(p) {
                    globalProperties[p] = gettext.$npgettext;
                });
                properties = mergedOptions.globalProperties.interpolate || [
                    "$gettextInterpolate"
                ];
                properties.forEach(function(p) {
                    globalProperties[p] = gettext.interpolate;
                });
                properties = mergedOptions.globalProperties.language || [
                    "$language"
                ];
                properties.forEach(function(p) {
                    globalProperties[p] = gettext;
                });
            }
            if (mergedOptions.provideDirective) {
                app.directive("translate", directive(gettext));
            }
            if (mergedOptions.provideComponent) {
                app.component("translate", component_default);
            }
        }
    });
    var translate2 = translate_default(gettext);
    var interpolate2 = interpolate_default(gettext);
    gettext.$gettext = translate2.gettext.bind(translate2);
    gettext.$pgettext = translate2.pgettext.bind(translate2);
    gettext.$ngettext = translate2.ngettext.bind(translate2);
    gettext.$npgettext = translate2.npgettext.bind(translate2);
    gettext.interpolate = interpolate2.bind(interpolate2);
    gettext.directive = directive(gettext);
    gettext.component = component_default;
    return gettext;
}
var defineGettextConfig = function(config) {
    return config;
};
export { createGettext, defineGettextConfig, useGettext };
