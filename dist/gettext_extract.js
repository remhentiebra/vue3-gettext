#!/usr/bin/env node
"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
// scripts/gettext_extract.ts
var import_chalk2 = __toESM(require("chalk"));
var import_command_line_args = __toESM(require("command-line-args"));
var import_node_fs = __toESM(require("fs"));
var import_glob = require("glob");
var import_node_path = __toESM(require("path"));
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
// scripts/extract.ts
var import_compiler_sfc = require("@vue/compiler-sfc");
var import_chalk = __toESM(require("chalk"));
var import_fs = __toESM(require("fs"));
var import_gettext_extractor = require("gettext-extractor");
// scripts/attributeEmbeddedJsExtractor.ts
var import_validate = require("gettext-extractor/dist/utils/validate");
function attributeEmbeddedJsExtractor(selector, jsParser) {
    import_validate.Validate.required.nonEmptyString({
        selector: selector
    });
    import_validate.Validate.required.argument({
        jsParser: jsParser
    });
    return function(node, fileName, _, nodeLineNumberStart) {
        if (typeof node.tagName !== "string") {
            return;
        }
        var element = node;
        element.attrs.forEach(function(attr) {
            var _element_sourceCodeLocation_attrs_attr_name, _element_sourceCodeLocation;
            var lineNumberStart = nodeLineNumberStart;
            var attributeLineNumber = (_element_sourceCodeLocation = element.sourceCodeLocation) === null || _element_sourceCodeLocation === void 0 ? void 0 : (_element_sourceCodeLocation_attrs_attr_name = _element_sourceCodeLocation.attrs[attr.name]) === null || _element_sourceCodeLocation_attrs_attr_name === void 0 ? void 0 : _element_sourceCodeLocation_attrs_attr_name.startLine;
            if (attributeLineNumber) {
                lineNumberStart += attributeLineNumber - 1;
            }
            jsParser.parseString(attr.value, fileName, {
                lineNumberStart: lineNumberStart
            });
        });
    };
}
// scripts/embeddedJsExtractor.ts
var import_selector = require("gettext-extractor/dist/html/selector");
var import_validate2 = require("gettext-extractor/dist/utils/validate");
var import_typescript = require("typescript");
function embeddedJsExtractor(selector, jsParser) {
    import_validate2.Validate.required.nonEmptyString({
        selector: selector
    });
    import_validate2.Validate.required.argument({
        jsParser: jsParser
    });
    var selectors = new import_selector.ElementSelectorSet(selector);
    return function(node, fileName, _, lineNumberStart) {
        if (typeof node.tagName !== "string") {
            return;
        }
        var element = node;
        if (selectors.anyMatch(element)) {
            var children = element.nodeName === "template" ? element.content.childNodes : element.childNodes;
            children.forEach(function(childNode) {
                if (childNode.nodeName === "#text") {
                    var _currentNode_sourceCodeLocation, _currentNode_sourceCodeLocation1;
                    var currentNode = childNode;
                    jsParser.parseString(currentNode.value, fileName, {
                        scriptKind: import_typescript.ScriptKind.Deferred,
                        lineNumberStart: ((_currentNode_sourceCodeLocation = currentNode.sourceCodeLocation) === null || _currentNode_sourceCodeLocation === void 0 ? void 0 : _currentNode_sourceCodeLocation.startLine) ? ((_currentNode_sourceCodeLocation1 = currentNode.sourceCodeLocation) === null || _currentNode_sourceCodeLocation1 === void 0 ? void 0 : _currentNode_sourceCodeLocation1.startLine) + lineNumberStart - 1 : lineNumberStart
                    });
                }
            });
        }
    };
}
// scripts/extract.ts
var extractFromFiles = function(filePaths, potPath, config) {
    return /*#__PURE__*/ _async_to_generator(function() {
        var _config_input_jsExtractorOpts, _config_input, extr, emptyExtractors, extractors, jsParser, htmlParser;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    extr = new import_gettext_extractor.GettextExtractor();
                    emptyExtractors = new Array();
                    extractors = (config === null || config === void 0 ? void 0 : (_config_input = config.input) === null || _config_input === void 0 ? void 0 : (_config_input_jsExtractorOpts = _config_input.jsExtractorOpts) === null || _config_input_jsExtractorOpts === void 0 ? void 0 : _config_input_jsExtractorOpts.reduce(function(acc, item, index, array) {
                        console.log("custom keyword: ".concat(import_chalk.default.blueBright(item.keyword)));
                        acc.push(import_gettext_extractor.JsExtractors.callExpression([
                            item.keyword,
                            "[this].".concat(item.keyword)
                        ], item.options));
                        return acc;
                    }, emptyExtractors)) || emptyExtractors;
                    jsParser = extr.createJsParser([
                        import_gettext_extractor.JsExtractors.callExpression([
                            "$gettext",
                            "[this].$gettext"
                        ], {
                            content: {
                                replaceNewLines: "\n"
                            },
                            arguments: {
                                text: 0
                            }
                        }),
                        import_gettext_extractor.JsExtractors.callExpression([
                            "$ngettext",
                            "[this].$ngettext"
                        ], {
                            content: {
                                replaceNewLines: "\n"
                            },
                            arguments: {
                                text: 0,
                                textPlural: 1
                            }
                        }),
                        import_gettext_extractor.JsExtractors.callExpression([
                            "$pgettext",
                            "[this].$pgettext"
                        ], {
                            content: {
                                replaceNewLines: "\n"
                            },
                            arguments: {
                                context: 0,
                                text: 1
                            }
                        }),
                        import_gettext_extractor.JsExtractors.callExpression([
                            "$npgettext",
                            "[this].$npgettext"
                        ], {
                            content: {
                                replaceNewLines: "\n"
                            },
                            arguments: {
                                context: 0,
                                text: 1,
                                textPlural: 2
                            }
                        })
                    ].concat(_to_consumable_array(extractors)));
                    htmlParser = extr.createHtmlParser([
                        import_gettext_extractor.HtmlExtractors.elementContent("translate, [v-translate]", {
                            content: {
                                trimWhiteSpace: true,
                                // TODO: figure out newlines for component
                                replaceNewLines: " "
                            },
                            attributes: {
                                textPlural: "translate-plural",
                                context: "translate-context",
                                comment: "translate-comment"
                            }
                        }),
                        attributeEmbeddedJsExtractor("[*=*]", jsParser),
                        embeddedJsExtractor("*", jsParser)
                    ]);
                    return [
                        4,
                        Promise.all(filePaths.map(function(fp) {
                            return /*#__PURE__*/ _async_to_generator(function() {
                                var buffer, _ref, descriptor, errors;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                new Promise(function(res, rej) {
                                                    return import_fs.default.readFile(fp, "utf-8", function(err, data) {
                                                        if (err) {
                                                            rej(err);
                                                        }
                                                        res(data);
                                                    });
                                                })
                                            ];
                                        case 1:
                                            buffer = _state.sent();
                                            if (fp.endsWith(".vue")) {
                                                _ref = (0, import_compiler_sfc.parse)(buffer, {
                                                    filename: fp,
                                                    sourceRoot: process.cwd()
                                                }), descriptor = _ref.descriptor, errors = _ref.errors;
                                                if (errors.length > 0) {
                                                    errors.forEach(function(e) {
                                                        return console.error(e);
                                                    });
                                                }
                                                if (descriptor.template) {
                                                    htmlParser.parseString("<template>".concat(descriptor.template.content, "</template>"), descriptor.filename, {
                                                        lineNumberStart: descriptor.template.loc.start.line,
                                                        transformSource: function(code) {
                                                            var _descriptor_template_lang, _descriptor_template, _config_input;
                                                            var lang = (descriptor === null || descriptor === void 0 ? void 0 : (_descriptor_template = descriptor.template) === null || _descriptor_template === void 0 ? void 0 : (_descriptor_template_lang = _descriptor_template.lang) === null || _descriptor_template_lang === void 0 ? void 0 : _descriptor_template_lang.toLowerCase()) || "html";
                                                            if (!((_config_input = config.input) === null || _config_input === void 0 ? void 0 : _config_input.compileTemplate) || lang === "html") {
                                                                return code;
                                                            }
                                                            var compiledTemplate = (0, import_compiler_sfc.compileTemplate)({
                                                                filename: descriptor === null || descriptor === void 0 ? void 0 : descriptor.filename,
                                                                source: code,
                                                                preprocessLang: lang,
                                                                id: descriptor === null || descriptor === void 0 ? void 0 : descriptor.filename
                                                            });
                                                            return compiledTemplate.source;
                                                        }
                                                    });
                                                }
                                                if (descriptor.script) {
                                                    jsParser.parseString(descriptor.script.content, descriptor.filename, {
                                                        lineNumberStart: descriptor.script.loc.start.line
                                                    });
                                                }
                                                if (descriptor.scriptSetup) {
                                                    jsParser.parseString(descriptor.scriptSetup.content, descriptor.filename, {
                                                        lineNumberStart: descriptor.scriptSetup.loc.start.line
                                                    });
                                                }
                                            } else if (fp.endsWith(".html")) {
                                                htmlParser.parseString(buffer, fp);
                                            } else if (fp.endsWith(".js") || fp.endsWith(".ts") || fp.endsWith(".cjs") || fp.endsWith(".mjs") || fp.endsWith(".tsx")) {
                                                jsParser.parseString(buffer, fp);
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
                    extr.savePotFile(potPath);
                    console.info("".concat(import_chalk.default.green("Extraction successful"), ", ").concat(import_chalk.default.blueBright(potPath), " created."));
                    extr.printStats();
                    return [
                        2
                    ];
            }
        });
    })();
};
var extract_default = extractFromFiles;
// scripts/utils.ts
var import_child_process = require("child_process");
function execShellCommand(cmd) {
    return new Promise(function(resolve) {
        (0, import_child_process.exec)(cmd, {
            env: process.env
        }, function(error, stdout, stderr) {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}
// scripts/gettext_extract.ts
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
var getFiles = function(config) {
    return /*#__PURE__*/ _async_to_generator(function() {
        var _config_input, allFiles, excludeFiles, filesFlat, excludeFlat;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all((_config_input = config.input) === null || _config_input === void 0 ? void 0 : _config_input.include.map(function(pattern) {
                            var searchPath = import_node_path.default.join(config.input.path, pattern);
                            console.info("Searching: ".concat(import_chalk2.default.blueBright(searchPath)));
                            return (0, import_glob.glob)(searchPath);
                        }))
                    ];
                case 1:
                    allFiles = _state.sent();
                    return [
                        4,
                        Promise.all(config.input.exclude.map(function(pattern) {
                            var searchPath = import_node_path.default.join(config.input.path, pattern);
                            console.info("Excluding: ".concat(import_chalk2.default.blueBright(searchPath)));
                            return (0, import_glob.glob)(searchPath);
                        }))
                    ];
                case 2:
                    excludeFiles = _state.sent();
                    filesFlat = allFiles.reduce(function(prev, curr) {
                        return _to_consumable_array(prev).concat(_to_consumable_array(curr));
                    }, []);
                    excludeFlat = excludeFiles.reduce(function(prev, curr) {
                        return _to_consumable_array(prev).concat(_to_consumable_array(curr));
                    }, []);
                    excludeFlat.forEach(function(file) {
                        var index = filesFlat.indexOf(file);
                        if (index !== -1) {
                            filesFlat.splice(index, 1);
                        }
                    });
                    return [
                        2,
                        filesFlat
                    ];
            }
        });
    })();
};
(function() {
    return /*#__PURE__*/ _async_to_generator(function() {
        var config, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, loc, poDir, poFile, isFile, err, linguasPath;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        loadConfig(options)
                    ];
                case 1:
                    config = _state.sent();
                    console.info("Input directory: ".concat(import_chalk2.default.blueBright(config.input.path)));
                    console.info("Output directory: ".concat(import_chalk2.default.blueBright(config.output.path)));
                    console.info("Output POT file: ".concat(import_chalk2.default.blueBright(config.output.potPath)));
                    console.info("Locales: ".concat(import_chalk2.default.blueBright(config.output.locales)));
                    console.info("Locations: ".concat(import_chalk2.default.blueBright(config.output.locations)));
                    console.info();
                    return [
                        4,
                        getFiles(config)
                    ];
                case 2:
                    files = _state.sent();
                    console.info();
                    files.forEach(function(f) {
                        return console.info(import_chalk2.default.grey(f));
                    });
                    console.info();
                    return [
                        4,
                        extract_default(files, config.output.potPath, config)
                    ];
                case 3:
                    _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 4;
                case 4:
                    _state.trys.push([
                        4,
                        12,
                        13,
                        14
                    ]);
                    _iterator = config.output.locales[Symbol.iterator]();
                    _state.label = 5;
                case 5:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        11
                    ];
                    loc = _step.value;
                    poDir = config.output.flat ? config.output.path : import_node_path.default.join(config.output.path, loc);
                    poFile = config.output.flat ? import_node_path.default.join(poDir, "".concat(loc, ".po")) : import_node_path.default.join(poDir, "app.po");
                    import_node_fs.default.mkdirSync(poDir, {
                        recursive: true
                    });
                    isFile = import_node_fs.default.existsSync(poFile) && import_node_fs.default.lstatSync(poFile).isFile();
                    if (!isFile) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        execShellCommand("msgmerge --lang=".concat(loc, " --update ").concat(poFile, " ").concat(config.output.potPath, " ").concat(config.output.locations ? "" : "--no-location", " --backup=off"))
                    ];
                case 6:
                    _state.sent();
                    console.info("".concat(import_chalk2.default.green("Merged"), ": ").concat(import_chalk2.default.blueBright(poFile)));
                    return [
                        3,
                        10
                    ];
                case 7:
                    return [
                        4,
                        execShellCommand("msginit --no-translator --locale=".concat(loc, " --input=").concat(config.output.potPath, " --output-file=").concat(poFile))
                    ];
                case 8:
                    _state.sent();
                    import_node_fs.default.chmodSync(poFile, 438);
                    return [
                        4,
                        execShellCommand("msgattrib --no-wrap --no-obsolete ".concat(config.output.locations ? "" : "--no-location", " -o ").concat(poFile, " ").concat(poFile))
                    ];
                case 9:
                    _state.sent();
                    console.info("".concat(import_chalk2.default.green("Created"), ": ").concat(import_chalk2.default.blueBright(poFile)));
                    _state.label = 10;
                case 10:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        5
                    ];
                case 11:
                    return [
                        3,
                        14
                    ];
                case 12:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        14
                    ];
                case 13:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 14:
                    if (config.output.linguas === true) {
                        linguasPath = import_node_path.default.join(config.output.path, "LINGUAS");
                        import_node_fs.default.writeFileSync(linguasPath, config.output.locales.join(" "));
                        console.info();
                        console.info("".concat(import_chalk2.default.green("Created"), ": ").concat(import_chalk2.default.blueBright(linguasPath)));
                    }
                    return [
                        2
                    ];
            }
        });
    })();
})();
