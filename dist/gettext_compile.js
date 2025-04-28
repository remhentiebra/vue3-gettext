#!/usr/bin/env node
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// scripts/gettext_compile.ts
var import_chalk = __toESM(require("chalk"));
var import_command_line_args = __toESM(require("command-line-args"));
var import_promises2 = __toESM(require("fs/promises"));
var import_path2 = __toESM(require("path"));
// scripts/compile.ts
var import_pofile = __toESM(require("pofile"));
var import_promises = __toESM(require("fs/promises"));
var sanitizePoData = function(poItems) {
    var messages = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = poItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            var ctx = item.msgctxt || "";
            if (item.msgstr[0] && item.msgstr[0].length > 0 && !item.flags.fuzzy && !item.obsolete) {
                if (!messages[item.msgid]) {
                    messages[item.msgid] = {};
                }
                messages[item.msgid][ctx] = item.msgstr.length === 1 ? item.msgstr[0] : item.msgstr;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    for(var key in messages){
        if (Object.keys(messages[key]).length === 1 && messages[key][""]) {
            messages[key] = messages[key][""];
        }
    }
    return messages;
};
var po2json = function(poContent) {
    var catalog = import_pofile.default.parse(poContent);
    if (!catalog.headers.Language) {
        throw new Error("No Language headers found!");
    }
    return {
        headers: catalog.headers,
        messages: sanitizePoData(catalog.items)
    };
};
var compilePoFiles = function(localesPaths) {
    return /*#__PURE__*/ _async_to_generator(function() {
        var translations;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    translations = {};
                    return [
                        4,
                        Promise.all(localesPaths.map(function(lp) {
                            return /*#__PURE__*/ _async_to_generator(function() {
                                var fileContent, data, lang;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                import_promises.default.readFile(lp, {
                                                    encoding: "utf-8"
                                                })
                                            ];
                                        case 1:
                                            fileContent = _state.sent();
                                            data = po2json(fileContent);
                                            lang = data.headers.Language;
                                            if (lang && !translations[lang]) {
                                                translations[lang] = data.messages;
                                            } else {
                                                Object.assign(translations[data.headers.Language], data.messages);
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        translations
                    ];
            }
        });
    })();
};
// scripts/config.ts
var import_cosmiconfig = require("cosmiconfig");
var import_path = __toESM(require("path"));
var loadConfig = function(cliArgs) {
    return /*#__PURE__*/ _async_to_generator(function() {
        var _config_output, _config_input, _config_input1, _config_input2, _config_input3, _config_input4, _config_output1, _config_output2, _config_output3, _config_output4, _config_output5, _config_output6, _config_output7, _config_output8, moduleName, explorer, configRes, config, languagePath, joinPath, joinPathIfRelative;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    moduleName = "gettext";
                    explorer = (0, import_cosmiconfig.cosmiconfig)(moduleName);
                    if (!(cliArgs === null || cliArgs === void 0 ? void 0 : cliArgs.config)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        explorer.load(cliArgs.config)
                    ];
                case 1:
                    configRes = _state.sent();
                    if (!configRes) {
                        throw new Error("Config not found: ".concat(cliArgs.config));
                    }
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        explorer.search()
                    ];
                case 3:
                    configRes = _state.sent();
                    _state.label = 4;
                case 4:
                    config = configRes === null || configRes === void 0 ? void 0 : configRes.config;
                    languagePath = ((_config_output = config.output) === null || _config_output === void 0 ? void 0 : _config_output.path) || "./src/language";
                    joinPath = function(inputPath) {
                        return import_path.default.join(languagePath, inputPath);
                    };
                    joinPathIfRelative = function(inputPath) {
                        if (!inputPath) {
                            return void 0;
                        }
                        return import_path.default.isAbsolute(inputPath) ? inputPath : import_path.default.join(languagePath, inputPath);
                    };
                    return [
                        2,
                        {
                            input: {
                                path: ((_config_input = config.input) === null || _config_input === void 0 ? void 0 : _config_input.path) || "./src",
                                include: ((_config_input1 = config.input) === null || _config_input1 === void 0 ? void 0 : _config_input1.include) || [
                                    "**/*.js",
                                    "**/*.ts",
                                    "**/*.vue"
                                ],
                                exclude: ((_config_input2 = config.input) === null || _config_input2 === void 0 ? void 0 : _config_input2.exclude) || [],
                                jsExtractorOpts: (_config_input3 = config.input) === null || _config_input3 === void 0 ? void 0 : _config_input3.jsExtractorOpts,
                                compileTemplate: ((_config_input4 = config.input) === null || _config_input4 === void 0 ? void 0 : _config_input4.compileTemplate) || false
                            },
                            output: {
                                path: languagePath,
                                potPath: joinPathIfRelative((_config_output1 = config.output) === null || _config_output1 === void 0 ? void 0 : _config_output1.potPath) || joinPath("./messages.pot"),
                                jsonPath: joinPathIfRelative((_config_output2 = config.output) === null || _config_output2 === void 0 ? void 0 : _config_output2.jsonPath) || (((_config_output3 = config.output) === null || _config_output3 === void 0 ? void 0 : _config_output3.splitJson) ? joinPath("./") : joinPath("./translations.json")),
                                locales: ((_config_output4 = config.output) === null || _config_output4 === void 0 ? void 0 : _config_output4.locales) || [
                                    "en"
                                ],
                                flat: ((_config_output5 = config.output) === null || _config_output5 === void 0 ? void 0 : _config_output5.flat) === void 0 ? false : config.output.flat,
                                linguas: ((_config_output6 = config.output) === null || _config_output6 === void 0 ? void 0 : _config_output6.linguas) === void 0 ? true : config.output.linguas,
                                splitJson: ((_config_output7 = config.output) === null || _config_output7 === void 0 ? void 0 : _config_output7.splitJson) === void 0 ? false : config.output.splitJson,
                                locations: ((_config_output8 = config.output) === null || _config_output8 === void 0 ? void 0 : _config_output8.locations) === void 0 ? true : config.output.locations
                            }
                        }
                    ];
            }
        });
    })();
};
// scripts/gettext_compile.ts
var optionDefinitions = [
    {
        name: "config",
        alias: "c",
        type: String
    }
];
var options;
try {
    options = (0, import_command_line_args.default)(optionDefinitions);
} catch (e) {
    console.error(e);
    process.exit(1);
}
(function() {
    return /*#__PURE__*/ _async_to_generator(function() {
        var config, localesPaths, jsonRes, outputPath;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        loadConfig(options)
                    ];
                case 1:
                    config = _state.sent();
                    console.info("Language directory: ".concat(import_chalk.default.blueBright(config.output.path)));
                    console.info("Locales: ".concat(import_chalk.default.blueBright(config.output.locales)));
                    console.info();
                    localesPaths = config.output.locales.map(function(loc) {
                        return config.output.flat ? import_path2.default.join(config.output.path, "".concat(loc, ".po")) : import_path2.default.join(config.output.path, "".concat(loc, "/app.po"));
                    });
                    return [
                        4,
                        import_promises2.default.mkdir(config.output.path, {
                            recursive: true
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        compilePoFiles(localesPaths)
                    ];
                case 3:
                    jsonRes = _state.sent();
                    console.info("".concat(import_chalk.default.green("Compiled json"), ": ").concat(import_chalk.default.grey(JSON.stringify(jsonRes))));
                    console.info();
                    if (!config.output.splitJson) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        Promise.all(config.output.locales.map(function(locale) {
                            return /*#__PURE__*/ _async_to_generator(function() {
                                var outputPath;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            outputPath = import_path2.default.join(config.output.jsonPath, "".concat(locale, ".json"));
                                            return [
                                                4,
                                                import_promises2.default.writeFile(outputPath, JSON.stringify(_define_property({}, locale, jsonRes[locale])))
                                            ];
                                        case 1:
                                            _state.sent();
                                            console.info("".concat(import_chalk.default.green("Created"), ": ").concat(import_chalk.default.blueBright(outputPath)));
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }))
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 5:
                    outputPath = config.output.jsonPath;
                    return [
                        4,
                        import_promises2.default.writeFile(outputPath, JSON.stringify(jsonRes))
                    ];
                case 6:
                    _state.sent();
                    console.info("".concat(import_chalk.default.green("Created"), ": ").concat(import_chalk.default.blueBright(outputPath)));
                    _state.label = 7;
                case 7:
                    return [
                        2
                    ];
            }
        });
    })();
})();
