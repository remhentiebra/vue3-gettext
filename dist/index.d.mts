import * as vue from 'vue';
import { ObjectDirective, UnwrapRef, WritableComputedRef, App } from 'vue';
import { IJsExtractorOptions } from 'gettext-extractor/dist/js/extractors/common';

/**
 * Translate content according to the current language.
 * @deprecated
 */
declare const Component: vue.DefineComponent<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    translateN: {
        type: NumberConstructor;
        default: null;
    };
    translatePlural: {
        type: StringConstructor;
        default: null;
    };
    translateContext: {
        type: StringConstructor;
        default: null;
    };
    translateParams: {
        type: ObjectConstructor;
        default: null;
    };
    translateComment: {
        type: StringConstructor;
        default: null;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    translateN: {
        type: NumberConstructor;
        default: null;
    };
    translatePlural: {
        type: StringConstructor;
        default: null;
    };
    translateContext: {
        type: StringConstructor;
        default: null;
    };
    translateParams: {
        type: ObjectConstructor;
        default: null;
    };
    translateComment: {
        type: StringConstructor;
        default: null;
    };
}>> & Readonly<{}>, {
    tag: string;
    translateN: number;
    translatePlural: string;
    translateContext: string;
    translateParams: Record<string, any>;
    translateComment: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

/**
 * A directive to translate content according to the current language.
 *
 * Use this directive instead of the component if you need to translate HTML content.
 * It's too tricky to support HTML content within the component because we cannot get the raw HTML to use as `msgid`.
 *
 * This directive has a similar interface to the <translate> component, supporting
 * `translate-comment`, `translate-context`, `translate-plural`, `translate-n`.
 *
 * `<p v-translate translate-comment='Good stuff'>This is <strong class='txt-primary'>Sparta</strong>!</p>`
 *
 * If you need interpolation, you must add an expression that outputs binding value that changes with each of the
 * context variable:
 * `<p v-translate="fullName + location">I am %{ fullName } and from %{ location }</p>`
 * @deprecated
 */
declare function directive(language: Language): ObjectDirective<HTMLElement, any>;

type TranslateComponent = typeof Component;
type TranslateDirective = ReturnType<typeof directive>;
type Message = string | string[];
type MessageContext = {
    [context: string]: Message;
};
type LanguageData = {
    [messageId: string]: Message | MessageContext;
};
type Translations = {
    [language: string]: LanguageData;
};
interface GetTextOptions {
    availableLanguages: {
        [key: string]: string;
    };
    defaultLanguage: string;
    sourceCodeLanguage?: string;
    mutedLanguages: Array<string>;
    silent: boolean;
    translations: Translations;
    setGlobalProperties: boolean;
    globalProperties: {
        language?: Array<string>;
        gettext?: Array<string>;
        pgettext?: Array<string>;
        ngettext?: Array<string>;
        npgettext?: Array<string>;
        interpolate?: Array<string>;
    };
    provideDirective: boolean;
    provideComponent: boolean;
}
type ParameterKeys<TString extends string> = TString extends `${infer _}%{${infer Key}}${infer Rest}` ? Key | ParameterKeys<Rest> : never;
type Parameters<TString extends string> = Record<ParameterKeys<TString>, string>;
type Language = UnwrapRef<{
    available: GetTextOptions["availableLanguages"];
    muted: GetTextOptions["mutedLanguages"];
    silent: GetTextOptions["silent"];
    translations: WritableComputedRef<GetTextOptions["translations"]>;
    current: string;
    sourceCodeLanguage?: string;
    $gettext: <TString extends string>(msgid: TString, parameters?: Parameters<TString>, disableHtmlEscaping?: boolean) => string;
    $pgettext: <TString extends string>(context: string, msgid: TString, parameters?: Parameters<TString>, disableHtmlEscaping?: boolean) => string;
    $ngettext: <TSingular extends string, TPlural extends string>(msgid: TSingular, plural: TPlural, n: number, parameters?: Parameters<TSingular> & Parameters<TPlural>, disableHtmlEscaping?: boolean) => string;
    $npgettext: <TSingular extends string, TPlural extends string>(context: string, msgid: TSingular, plural: TPlural, n: number, parameters?: Parameters<TSingular> & Parameters<TPlural>, disableHtmlEscaping?: boolean) => string;
    interpolate: (msgid: string, context: object, disableHtmlEscaping?: boolean) => string;
    install: (app: App) => void;
    directive: TranslateDirective;
    component: TranslateComponent;
}>;
interface GettextConfig {
    input: {
        /** only files in this directory are considered for extraction */
        path: string;
        /** glob patterns to select files for extraction */
        include: string[];
        /** glob patterns to exclude files from extraction */
        exclude: string[];
        /** js extractor options, for custom extractor keywords */
        jsExtractorOpts?: {
            keyword: string;
            options: IJsExtractorOptions;
        }[];
        compileTemplate: boolean;
    };
    output: {
        path: string;
        locales: string[];
        potPath: string;
        jsonPath: string;
        flat: boolean;
        linguas: boolean;
        splitJson: boolean;
        locations: boolean;
    };
}
interface GettextConfigOptions {
    input?: Partial<GettextConfig["input"]>;
    output?: Partial<GettextConfig["output"]>;
}
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties extends Pick<Language, "$gettext" | "$pgettext" | "$ngettext" | "$npgettext"> {
        $language: Language;
        $gettextInterpolate: Language["interpolate"];
    }
    interface GlobalComponents {
        translate: TranslateComponent;
    }
    interface GlobalDirectives {
        vTranslate: TranslateDirective;
    }
}

declare const useGettext: () => Language;

declare function createGettext(options?: Partial<GetTextOptions>): {
    available: GetTextOptions["availableLanguages"];
    muted: GetTextOptions["mutedLanguages"];
    silent: GetTextOptions["silent"];
    translations: Translations;
    current: string;
    sourceCodeLanguage?: string | undefined;
    $gettext: <TString extends string>(msgid: TString, parameters?: Parameters<TString>, disableHtmlEscaping?: boolean) => string;
    $pgettext: <TString extends string>(context: string, msgid: TString, parameters?: Parameters<TString>, disableHtmlEscaping?: boolean) => string;
    $ngettext: <TSingular extends string, TPlural extends string>(msgid: TSingular, plural: TPlural, n: number, parameters?: Parameters<TSingular> & Parameters<TPlural>, disableHtmlEscaping?: boolean) => string;
    $npgettext: <TSingular extends string, TPlural extends string>(context: string, msgid: TSingular, plural: TPlural, n: number, parameters?: Parameters<TSingular> & Parameters<TPlural>, disableHtmlEscaping?: boolean) => string;
    interpolate: (msgid: string, context: object, disableHtmlEscaping?: boolean) => string;
    install: (app: App) => void;
    directive: {
        created?: vue.DirectiveHook<HTMLElement, null, any, string, string> | undefined;
        beforeMount?: vue.DirectiveHook<HTMLElement, null, any, string, string> | undefined;
        mounted?: vue.DirectiveHook<HTMLElement, null, any, string, string> | undefined;
        beforeUpdate?: vue.DirectiveHook<HTMLElement, vue.VNode<any, HTMLElement, {
            [key: string]: any;
        }>, any, string, string> | undefined;
        updated?: vue.DirectiveHook<HTMLElement, vue.VNode<any, HTMLElement, {
            [key: string]: any;
        }>, any, string, string> | undefined;
        beforeUnmount?: vue.DirectiveHook<HTMLElement, null, any, string, string> | undefined;
        unmounted?: vue.DirectiveHook<HTMLElement, null, any, string, string> | undefined;
        getSSRProps?: ((binding: vue.DirectiveBinding<any, string, string>, vnode: vue.VNode) => {
            [x: string]: unknown;
        } | undefined) | undefined;
        deep?: boolean | undefined;
    };
    component: TranslateComponent;
};
declare const defineGettextConfig: (config: GettextConfigOptions) => GettextConfigOptions;

export { type GetTextOptions, type GettextConfig, type GettextConfigOptions, type Language, type LanguageData, type Message, type Translations, createGettext, defineGettextConfig, useGettext };
