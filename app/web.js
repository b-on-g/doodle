#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * CSS Units
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    /**
     * CSS Functions
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static radial_gradient(value) {
            return new $mol_style_func('radial-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    /** Create record of CSS variables. */
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Theme css variables
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_textarea_demo
     */
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
        'hue',
        'hue_spread',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n\tcolor-scheme: dark light;\n}\n\nbody, :where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 50% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
// namespace $ {
// 	$mol_style_attach( '$mol_theme_lights', `:root { --mol_theme_back: oklch( ${ $$.$mol_lights() ? 92 : 20 }% .01 var(--mol_theme_hue) ) }` )
// }

;
"use strict";
var $;
(function ($) {
    /**
     * Gap in CSS
     * @see https://page.hyoo.ru/#!=msdb74_bm7nsq
     */
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'page',
        'block',
        'text',
        'emoji',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_page: 3rem;\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_emoji: .5rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    /**
     * JSX adapter that makes DOM tree.
     * Generates global unique ids for every DOM-element by components tree with ids.
     * Ensures all local ids are unique.
     * Can reuse an existing nodes by GUIDs when used inside [`mol_jsx_attach`](https://github.com/hyoo-ru/mam_mol/tree/master/jsx/attach).
     */
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    /**
     * Proxy that delegates all to lazy returned target.
     *
     * 	$mol_delegate( Array.prototype , ()=> fetch_array() )
     */
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error; /// Use 'Never Pause Here' breakpoint in DevTools or simply blackbox this script
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_key_handle = Symbol.for('$mol_key_handle');
    $.$mol_key_store = new WeakMap();
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if (!Symbol.dispose)
        Symbol.dispose = Symbol('Symbol.dispose');
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || this.constructor.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        static [$mol_key_handle]() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        [Symbol.dispose]() {
            this.destructor();
        }
        //[ Symbol.toPrimitive ]( hint: string ) {
        //	return hint === 'number' ? this.valueOf() : this.toString()
        //}
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Generates unique identifier. */
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Special status statuses. */
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        /** Update required. */
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        /** Some of (transitive) pub update required. */
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        /** Actual state but may be dropped. */
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        /** State will never be changed. */
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Collects subscribers in compact array. 28B
     */
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        // Derived objects should be Arrays.
        static get [Symbol.species]() {
            return Array;
        }
        /**
         * Index of first subscriber.
         */
        sub_from = 0; // 4B
        /**
         * All current subscribers.
         */
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        /**
         * Has any subscribers or not.
         */
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        /**
         * Subscribe subscriber to this publisher events and return position of subscriber that required to unsubscribe.
         */
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        /**
         * Unsubscribe subscriber from this publisher events by subscriber position provided by `on(pub)`.
         */
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        /**
         * Called when last sub was unsubscribed.
         **/
        reap() { }
        /**
         * Autowire this publisher with current subscriber.
         **/
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        /**
         * Enforce actualization. Should not throw errors.
         */
        fresh() { }
        /**
         * Allow to put data to caches in the subtree.
         */
        complete() { }
        get incompleted() {
            return false;
        }
        /**
         * Notify subscribers about self changes.
         */
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        /**
         * Moves peer from one position to another. Doesn't clear data at old position!
         */
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        /**
         * Updates self position in the peer.
         */
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    /**
     * When fulfilled, all publishers are promoted to this subscriber on access to its.
     */
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    /**
     * Affection queue. Used to prevent accidental stack overflow on emit.
     */
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    // https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            // if( Error.isError( val ) ) true
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            // if( Error.isError( val ) ) {
            // 	return $mol_dev_format_native( val )
            // }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        // if( ![ 'object', 'function', 'symbol' ].includes( typeof obj )  ) return obj
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-inline-start': '13px'
    });
    class Stack extends Array {
        // [ Symbol.toPrimitive ]() {
        // 	return this.toString()
        // }
        match(...args) {
            return this.toString().match(...args);
        }
        split(...args) {
            return this.toString().split(...args);
        }
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            // const func = c.getFunction()
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Publisher that can auto collect other publishers. 32B
     *
     * 	P1 P2 P3 P4 S1 S2 S3
     * 	^           ^
     * 	pubs_from   subs_from
     */
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0; // 4B
        cursor = $mol_wire_cursor.stale; // 4B
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.stale;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
            // if( pos >= 0 && pos < this.sub_from - 2 ) {
            // 	const pub = this.data[ pos ] as $mol_wire_pub
            // 	if( pub instanceof $mol_wire_task ) return
            // 	for(
            // 		let cursor = this.pub_from;
            // 		cursor < this.sub_from;
            // 		cursor += 2
            // 	) {
            // 		const pub = this.data[ cursor ] as $mol_wire_pub
            // 		if( pub instanceof $mol_wire_task ) {
            // 			pub.destructor()
            // 		}
            // 	}
            // }
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        /**
         * Is subscribed to any publisher or not.
         */
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    /**
     * Suspendable task with support both sync/async api.
     *
     * 	A1 A2 A3 A4 P1 P2 P3 P4 S1 S2 S3
     * 	^           ^           ^
     * 	args_from   pubs_from   subs_from
     **/
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            // Sync whole fiber graph
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            // Collect garbage
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_shade(cursor)
                : $mol_dev_format_shade(this[Symbol.toStringTag], cursor), $mol_dev_format_auto(this.cache));
        }
        [$mol_dev_format_body]() { return null; }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        const put = (v) => {
                            if (this.cache === result)
                                this.absorb();
                            return v;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        /**
         * Synchronous execution. Throws Promise when waits async task (SuspenseAPI provider).
         * Should be called inside SuspenseAPI consumer (ie fiber).
         */
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        /**
         * Asynchronous execution.
         * It's SuspenseAPI consumer. So SuspenseAPI providers can be called inside.
         */
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    // never ends on destructed fiber
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            $mol_wire_fiber.planning.delete(this);
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    /** Returns string key for any value. */
    function $mol_key(value) {
        primitives: {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return `Symbol(${value.description})`;
            if (!value)
                return JSON.stringify(value); // 0, null, ""
            if (typeof value !== 'object' && typeof value !== 'function')
                return JSON.stringify(value); // boolean, number, string
        }
        caching: {
            let key = $mol_key_store.get(value);
            if (key)
                return key;
        }
        objects: {
            if (value instanceof TypedArray) {
                return `${value[Symbol.toStringTag]}([${[...value].map(v => $mol_key(v))}])`;
            }
            if (Array.isArray(value))
                return `[${value.map(v => $mol_key(v))}]`;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof Date)
                return `Date(${value.valueOf()})`;
        }
        structures: {
            const proto = Reflect.getPrototypeOf(value);
            if (!proto || !Reflect.getPrototypeOf(proto)) {
                return `{${Object.entries(value).map(([k, v]) => JSON.stringify(k) + ':' + $mol_key(v))}}`;
            }
        }
        handlers: {
            if ($mol_key_handle in value) {
                return value[$mol_key_handle]();
            }
        }
        containers: {
            const key = JSON.stringify('#' + $mol_guid());
            $mol_key_store.set(value, key);
            return key;
        }
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    /**
     * Deeply compares two values. Returns true if equal.
     * Define `Symbol.toPrimitive` to customize.
     */
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Log begin of collapsed group only when some logged inside, returns func to close group */
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.entries(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i][1] === 'string') ? '%s: %s\n' : '%s: %o\n';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl.trim(), style, ...[].concat(...chunks));
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** One-shot fiber */
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                // Disabled because non-idempotency is required for try-catch
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch { // Promises throw in strict mode
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
        destructor() {
            super.destructor();
            this.cursor = $mol_wire_cursor.final;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber.
     */
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const catched = new WeakSet();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.has(error))
            return false;
        catched.add(error);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    /// Debugger will stop at exceptions but exception will be returned normally
    function $mol_try_web(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        self.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try_web = $mol_try_web;
    $.$mol_try = $mol_try_web;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Long-living fiber. */
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        /**
         * Update atom value through another temp fiber.
         */
        resync(args) {
            // enforce pulling tasks abort
            for (let cursor = this.pub_from; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                if (pub && pub instanceof $mol_wire_task) {
                    pub.destructor();
                }
            }
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                const key = $mol_key(this.args[0]);
                const map = (this.host ?? this.task)[this.field()];
                if (!map.has(key))
                    this.$.$mol_log3_warn({
                        place: this,
                        message: 'Absent key on destruction',
                        hint: 'Check for $mol_key(key) is not changed',
                    });
                map.delete(key);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch { // Promises throw in strict mode
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Decorates solo object channel to [mol_wire_atom](../atom/atom.ts). */
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Reactive memoizing multiplexed property decorator. */
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Reactive memoizing solo property decorator from [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem
     * name(next?: string) {
     * 	return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    $.$mol_mem = $mol_wire_solo;
    /**
     * Reactive memoizing multiplexed property decorator [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem_key
     * name(id: number, next?: string) {
     *  return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
    * Key names code for hotkey
    * @see [mol_hotkey](../../hotkey/hotkey.view.ts)
    */
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        function focus(event) {
            const target = event.target;
            if (target?.shadowRoot)
                watch(target.shadowRoot);
            $mol_view_selection.focused($mol_maybe(target), 'notify');
        }
        function watch(root) {
            root.removeEventListener('focus', focus, true);
            root.addEventListener('focus', focus, true);
        }
        watch($mol_dom_context.document);
        $mol_dom.document.addEventListener('keydown', event => {
            if (!event.altKey)
                return;
            const self = $mol_view_selection.focused()[0];
            if (!self)
                return;
            switch (event.keyCode) {
                case $mol_keyboard_code.down:
                    var vert = 1, hor = 0;
                    break;
                case $mol_keyboard_code.up:
                    var vert = -1, hor = 0;
                    break;
                case $mol_keyboard_code.left:
                    var hor = -1, vert = 0;
                    break;
                case $mol_keyboard_code.right:
                    var hor = 1, vert = 0;
                    break;
                default: return;
            }
            event.preventDefault();
            const self_rect = self.getBoundingClientRect();
            const center_hor = (self_rect.left + self_rect.right) / 2;
            const center_vert = (self_rect.top + self_rect.bottom) / 2;
            const all = [...$mol_dom.document.querySelectorAll(':where( [role="button"], [role="checkbox"], input, button, a ):not([disabled])')]
                .map(el => {
                const rect = el.getBoundingClientRect();
                const dist = (Math.max(0, center_hor - rect.right) + Math.max(0, rect.left - center_hor)) * vert * vert
                    + (Math.max(0, center_vert - rect.bottom) + Math.max(0, rect.top - center_vert)) * hor * hor;
                return [el, rect, dist];
            })
                .filter(([el, rect]) => {
                if (el === self)
                    return false;
                if (vert > 0 && rect.top < self_rect.bottom)
                    return false;
                if (vert < 0 && rect.bottom > self_rect.top)
                    return false;
                if (hor > 0 && rect.left < self_rect.right)
                    return false;
                if (hor < 0 && rect.right > self_rect.left)
                    return false;
                return true;
            })
                .sort(([, one, dist1], [, two, dist2]) => {
                return (dist1 - dist2) || ((one.top - two.top) * vert + (one.left - two.left) * hor);
            });
            const target = all[0]?.[0];
            target?.focus();
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this ?? fun))
                    return store.get(this ?? fun);
                const val = task.call(this, next) ?? next;
                store.set(this ?? fun, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Run code without state changes */
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Real-time refresh current atom.
     * Don't use if possible. May reduce performance.
     */
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Returns closure that returns constant value.
     * @example
     * const rnd = $mol_const( Math.random() )
     */
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Disable reaping of current subscriber
     */
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_error_message(error) {
        return String((error instanceof Error ? error.message : null) || error) || 'Unknown';
    }
    $.$mol_error_message = $mol_error_message;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Convert a pseudo-synchronous (Suspense API) API to an explicit asynchronous one (for integrating with external systems). */
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "@view-transition {\n\tnavigation: auto;\n}\n\n[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform, scale, translate, rotate;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n\t/* text-wrap-style: pretty; dont work in textarea */\n\tunicode-bidi: plaintext\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: system-ui, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t/* background: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text); */\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\t/*overscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
/** @jsx $mol_jsx */
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    /**
     * The base class for all visual components. It provides the infrastructure for reactive lazy rendering, handling exceptions.
     * @see https://mol.hyoo.ru/#!section=docs/=vv2nig_s5zr0f
     */
    /// Reactive statefull lazy ViewModel
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        static roots() {
            return [...$mol_dom.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])')].map((node, index) => {
                const name = node.getAttribute('mol_view_root');
                const View = this.$[name];
                if (!View) {
                    $mol_fail_log(new Error(`Autobind unknown view class`, { cause: { name } }));
                    return null;
                }
                const view = View.Root(index);
                view.dom_node(node);
                return view;
            }).filter($mol_guard_defined);
        }
        static auto() {
            const roots = this.roots();
            if (!roots.length)
                return;
            for (const root of roots) {
                try {
                    root.dom_tree();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            try {
                document.title = roots[0].title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            descr: try {
                const descr = roots[0].hint();
                if (!descr)
                    break descr;
                const head = $mol_dom.document.head;
                let node = head.querySelector('meta[name="description"]');
                if (node)
                    node.content = descr;
                else
                    head.append($mol_jsx("meta", { name: "description", content: descr }));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        hint() {
            return '';
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        /// Name of element that created when element not found in DOM
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        /// NameSpace of element that created when element not found in DOM
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        /// Raw child views
        sub() {
            return [];
        }
        /// Visible sub views with defined ambient context
        /// Render all by default
        sub_visible() {
            return this.sub();
        }
        /// Minimal width that used for lazy rendering
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        /// Minimal height that used for lazy rendering
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null; // don't touch DOM to prevent instant reflow
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom }; // pick to optimize compare
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    ;
                    node.innerText = this.$.$mol_error_message(error).replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return [];
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        /** Deep search view by predicate. */
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        /** Renders path of views to DOM. */
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        /** Renders view to DOM and scroll to it. */
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            finally {
                view.dom_node().scrollIntoView({ block: align });
            }
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            // new this.$.$mol_after_frame( ()=> {
            // 	this.dom_node().scrollIntoView({ block: 'start', inline: 'nearest' })
            // } )
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "roots", null);
    __decorate([
        $mol_mem
    ], $mol_view, "auto", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.auto(), { once: true });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Plugin is component without its own DOM element, but instead uses the owner DOM element */
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_theme_auto) = class $mol_theme_auto extends ($.$mol_plugin) {
		dark(){
			return "$mol_theme_dark";
		}
		theme(){
			return (this.dark());
		}
		light(){
			return "$mol_theme_light";
		}
		attr(){
			return {"mol_theme": (this.theme())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber from [mol_wire](../wire/README.md)
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** State of arguments like `#foo=bar/xxx` or `?foo=bar&xxx` */
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom.history;
                    history.replaceState(history.state, $mol_dom.document.title, next);
                });
            }
            if ($mol_dom.parent && ($mol_dom.parent !== $mol_dom.self)) {
                $mol_dom.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static commit() {
            $mol_dom.history.pushState($mol_dom.history.state, $mol_dom.document.title, this.href());
        }
        static go(next) {
            $mol_dom.location.href = this.link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "commit", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        /** Is storage a long term. */
        static persisted(next) {
            return false;
        }
        /** Total storage quota in bytes. */
        static total() {
            return 0;
        }
        /** Total storage usage in bytes. */
        static used() {
            return 0;
        }
        /** Minimum available free space in bytes. */
        static free() {
            return this.total() - this.used();
        }
        /** Fulfillness of storage. */
        static portion() {
            const total = this.total();
            if (!total)
                return 1;
            return this.used() / total;
        }
        /**
         * Fulfillness logarithmic level.
         * `0` - empty
         * `1` - half free
         * `2` - quart free
         * `Infinity` - fulfilled
         */
        static level() {
            return Math.floor(-Math.log2(1 - this.portion()));
        }
    }
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    /**
     * Convert asynchronous (promise-based) API to synchronous by wrapping function and method calls in a fiber.
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_user_async() {
        return new Promise(done => $mol_dom.addEventListener('click', function onclick() {
            $mol_dom.removeEventListener('click', onclick);
            done(null);
        }));
    }
    $.$mol_wait_user_async = $mol_wait_user_async;
    function $mol_wait_user() {
        return this.$mol_wire_sync(this).$mol_wait_user_async();
    }
    $.$mol_wait_user = $mol_wait_user;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** State of time moment */
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage_web extends $mol_storage {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                this.$.$mol_wait_user_async()
                    .then(() => native.persist())
                    .then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            $mol_state_time.now(1000);
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static total() {
            return this.estimate().quota ?? 0;
        }
        static used() {
            return this.estimate().usage ?? 0;
        }
        static free() {
            const { usage = 0, quota = 0 } = this.estimate();
            return quota - usage;
        }
        static portion() {
            const { usage = 0, quota = 0 } = this.estimate();
            if (!quota)
                return 1;
            return usage / quota;
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage_web, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage_web, "persisted", null);
    __decorate([
        $mol_mem
    ], $mol_storage_web, "estimate", null);
    $.$mol_storage_web = $mol_storage_web;
    $.$mol_storage = $.$mol_storage_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    /**
     * Switcher between light/dark themes (usually for `mol_theme_auto` plugin).
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_lights_demo
     */
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * The [plugin](../../plugin/readme.md) which defines theme based on [mol_lights](../../lights/readme.md).
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_lights_demo
         */
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? this.light() : this.dark();
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_hotkey2) = class $mol_hotkey2 extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		action(){
			return {};
		}
	};
	($mol_mem(($.$mol_hotkey2.prototype), "keydown"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Plugin which adds handlers for keyboard keys.
         * @see [mol_keyboard_code](../keyboard/code/code.ts)
         */
        class $mol_hotkey2 extends $.$mol_hotkey2 {
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                const key = [...new Set([
                        ...(event.ctrlKey || event.metaKey) ? ['ctrl'] : [],
                        ...event.altKey ? ['alt'] : [],
                        ...event.shiftKey ? ['shift'] : [],
                        $mol_keyboard_code[event.keyCode] ?? '?',
                    ])].join('_');
                this.action()[key]?.(event);
            }
        }
        $$.$mol_hotkey2 = $mol_hotkey2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_hotkey2) {
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Plugin which adds handlers for keyboard keys.
         * @deprecated Use $mol_hotkey2
         * @see [mol_keyboard_code](../keyboard/code/code.ts)
         */
        class $mol_hotkey extends $.$mol_hotkey {
            action() {
                const prefix = [...new Set([
                        ...this.mod_ctrl() ? ['ctrl_'] : [],
                        ...this.mod_alt() ? ['alt_'] : [],
                        ...this.mod_shift() ? ['shift_'] : [],
                    ])].join('');
                return Object.fromEntries(Object.entries(this.key())
                    .map(([key, val]) => [prefix + key, val]));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_hotkey.prototype, "action", null);
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Z-index values for layers
     * https://page.hyoo.ru/#!=xthcpx_wqmiba
     */
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * An input field for entering single line text.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_string_demo
         */
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            value_changed(next) {
                const el = this.dom_node();
                try {
                    el.setCustomValidity('');
                    return this.value(next);
                }
                catch (error) {
                    $mol_fail_log(error);
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    return next ?? $mol_mem_cached(() => this.value_changed()) ?? '';
                }
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "value_changed", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: start;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let buf = new Uint8Array(2 ** 12); // 4KB Mem Page
    /** Temporary buffer. Recursive usage isn't supported. */
    function $mol_charset_buffer(size) {
        if (buf.byteLength < size)
            buf = new Uint8Array(size);
        return buf;
    }
    $.$mol_charset_buffer = $mol_charset_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_charset_encode(str) {
        const buf = $mol_charset_buffer(str.length * 3);
        return buf.slice(0, $mol_charset_encode_to(str, buf));
    }
    $.$mol_charset_encode = $mol_charset_encode;
    function $mol_charset_encode_to(str, buf, from = 0) {
        let pos = from;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80) { // ASCII - 1 octet
                buf[pos++] = code;
            }
            else if (code < 0x800) { // 2 octet
                buf[pos++] = 0xc0 | (code >> 6);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else if (code < 0xd800 || code >= 0xe000) { // 3 octet
                buf[pos++] = 0xe0 | (code >> 12);
                buf[pos++] = 0x80 | ((code >> 6) & 0x3f);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else { // surrogate pair
                const point = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
                buf[pos++] = 0xf0 | (point >> 18);
                buf[pos++] = 0x80 | ((point >> 12) & 0x3f);
                buf[pos++] = 0x80 | ((point >> 6) & 0x3f);
                buf[pos++] = 0x80 | (point & 0x3f);
            }
        }
        return pos - from;
    }
    $.$mol_charset_encode_to = $mol_charset_encode_to;
    function $mol_charset_encode_size(str) {
        let size = 0;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80)
                size += 1;
            else if (code < 0x800)
                size += 2;
            else if (code < 0xd800 || code >= 0xe000)
                size += 3;
            else
                size += 4;
        }
        return size;
    }
    $.$mol_charset_encode_size = $mol_charset_encode_size;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        flush() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            // Если путь выше или равен base или если parent такойже как и this - считаем это корнем
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            // Отслеживать проверку наличия родительской папки не стоит до корня диска
            // Лучше ограничить mam-ом
            if (!this.root()) {
                /*
                Если parent папка удалилась, надо ресетнуть все объекты в ней на любой глубине.
                Например, rm -rf с последующим git pull: parent папка может удалиться, потом создасться,
                а текущая папка успеет только удалиться до момента выполнения stat.
                Поэтому parent.exists() не запустит перевычисления, нужна именно parent.version()

                Однако, parent.version() меняется не только при удалении, будет ложное срабатывание
                С этим придется мириться, красивого решения пока нет.
                */
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            // console.log(type, path)
            // add (change): добавился файл - у parent надо обновить список sub, если он был заюзан
            // change, unlink (rename): обновился или удалился файл - ресетим
            // addDir (change), добавилась папка, у parent обновляем список директорий в sub
            // дочерние ресетим
            // unlinkDir (rename), удалилась папка, ресетим ее
            // stat у всех дочерних обновится сам, т.к. связан с parent.version()
            this.changed.add(file);
            if (!this.watching)
                return;
            // throttle, пока события поступают не сбрасываем.
            // аналог awaitWriteFinish из chokidar
            // интервалы между change-сообщениями модифицируемого файла должны быть меньше watch_debounce
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        /**
         * Должно быть больше, чем время между событиями от вотчера при записи внешним процессом.
         * Иначе запуск ресетов паралельно с изменением может привести к неконсистентности.
         */
        static watch_debounce() { return 500; }
        static flush() {
            // Пока flush работает, вотчер сюда не заходит, но может добавлять новые изменения
            // на каждом перезапуске они применятся
            // Пока run выполняется, изменения накапливаются, в конце run вызывается flush
            // Пока применяются изменения, run должен ожидать конца flush
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
            // this.watch_wd?.destructor()
            // this.watch_wd = null
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            // run должен ожидать конца flush
            this.flush();
            this.watching = false;
            /*
            watch запаздывает и событие может прилететь через 3 сек после окончания сайд эффекта
            поэтому добавляем папку, которую меняет side_effect
            Когда дойдет до выполнения flush, он ресетнет ее
            
            Иначе будут лишние срабатывания
            Например, удалили hyoo/board, watch ресетит и exists начинает отдавать false, срабатывает git clone
            Сразу после него событие addDir еще не успело прийти,
            на следующем перезапуске вызывается git pull, т.к.
            с точки зрения реактивной системы hyoo/board еще не существует.
            */
            this.changed.add(this.absolute(path));
        }
        // protected static watch_wd = null as null | $mol_after_timeout
        static unwatched(side_effect, affected_dir) {
            // ждем, пока выполнится предыдущий unwatched
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            // console.log('version', next, this.path())
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        // open( ... modes: readonly $mol_file_mode[] ) { return 0 }
        buffer(next) {
            // Если версия пустая - возвращаем пустой буфер
            let readed = new Uint8Array();
            if (next === undefined) {
                // Если меняется версия файла, буфер надо перечитать
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                // Логируем, если повторно читаем/пишем и буфер поменялся
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            // Если буфер при записи не поменялся и файл не удаляли перед этим - не записываем новую версию.
            // Если записывать, это приведет к смене mtime и вотчер снова триггернется, даже если содержимое файла не поменялось.
            // В этом алгоритме есть изъян.
            // Если файл записали, потом отключили вотчер, кто-то из вне его поменял, потом включили вотчер, снова записали тот же буфер,
            // то буфер не запишется на диск, т.к. кэш не консистентен с диском.
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        // static watch_root = ''
        // static watcher_warned = false
        watcher() {
            // const constructor = this.constructor as typeof $mol_file_base
            // if (! constructor.watcher_warned) {
            // 	console.warn(`${constructor}.watcher() not implemented`)
            // 	constructor.watcher_warned = true
            // }
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            // console.log('exists current', exists, 'next', next, this.path())
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            // Если записываем text, и вотчер ресетнул записанный файл,
            // то надо снова его обновить, вызвать логику, которая делала пуш в text.
            // Например файл удалили, потом снова создали, версия поменялась - перезаписываем
            // Если использовать version, то вновь созданный файл, через вотчер запустит свое пересоздание
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            // Если дочерний file удалился, список надо обновить
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_rest_code;
    (function ($mol_rest_code) {
        $mol_rest_code[$mol_rest_code["Continue"] = 100] = "Continue";
        $mol_rest_code[$mol_rest_code["Switching protocols"] = 101] = "Switching protocols";
        $mol_rest_code[$mol_rest_code["Processing"] = 102] = "Processing";
        $mol_rest_code[$mol_rest_code["OK"] = 200] = "OK";
        $mol_rest_code[$mol_rest_code["Created"] = 201] = "Created";
        $mol_rest_code[$mol_rest_code["Accepted"] = 202] = "Accepted";
        $mol_rest_code[$mol_rest_code["Non-Authoritative Information"] = 203] = "Non-Authoritative Information";
        $mol_rest_code[$mol_rest_code["No Content"] = 204] = "No Content";
        $mol_rest_code[$mol_rest_code["Reset Content"] = 205] = "Reset Content";
        $mol_rest_code[$mol_rest_code["Partial Content"] = 206] = "Partial Content";
        $mol_rest_code[$mol_rest_code["Multi Status"] = 207] = "Multi Status";
        $mol_rest_code[$mol_rest_code["Already Reported"] = 208] = "Already Reported";
        $mol_rest_code[$mol_rest_code["IM Used"] = 226] = "IM Used";
        $mol_rest_code[$mol_rest_code["Multiple Choices"] = 300] = "Multiple Choices";
        $mol_rest_code[$mol_rest_code["Moved Permanently"] = 301] = "Moved Permanently";
        $mol_rest_code[$mol_rest_code["Found"] = 302] = "Found";
        $mol_rest_code[$mol_rest_code["See Other"] = 303] = "See Other";
        $mol_rest_code[$mol_rest_code["Not Modified"] = 304] = "Not Modified";
        $mol_rest_code[$mol_rest_code["Use Proxy"] = 305] = "Use Proxy";
        $mol_rest_code[$mol_rest_code["Temporary Redirect"] = 307] = "Temporary Redirect";
        $mol_rest_code[$mol_rest_code["Bad Request"] = 400] = "Bad Request";
        $mol_rest_code[$mol_rest_code["Unauthorized"] = 401] = "Unauthorized";
        $mol_rest_code[$mol_rest_code["Payment Required"] = 402] = "Payment Required";
        $mol_rest_code[$mol_rest_code["Forbidden"] = 403] = "Forbidden";
        $mol_rest_code[$mol_rest_code["Not Found"] = 404] = "Not Found";
        $mol_rest_code[$mol_rest_code["Method Not Allowed"] = 405] = "Method Not Allowed";
        $mol_rest_code[$mol_rest_code["Not Acceptable"] = 406] = "Not Acceptable";
        $mol_rest_code[$mol_rest_code["Proxy Authentication Required"] = 407] = "Proxy Authentication Required";
        $mol_rest_code[$mol_rest_code["Request Timeout"] = 408] = "Request Timeout";
        $mol_rest_code[$mol_rest_code["Conflict"] = 409] = "Conflict";
        $mol_rest_code[$mol_rest_code["Gone"] = 410] = "Gone";
        $mol_rest_code[$mol_rest_code["Length Required"] = 411] = "Length Required";
        $mol_rest_code[$mol_rest_code["Precondition Failed"] = 412] = "Precondition Failed";
        $mol_rest_code[$mol_rest_code["Request Entity Too Large"] = 413] = "Request Entity Too Large";
        $mol_rest_code[$mol_rest_code["Request URI Too Long"] = 414] = "Request URI Too Long";
        $mol_rest_code[$mol_rest_code["Unsupported Media Type"] = 415] = "Unsupported Media Type";
        $mol_rest_code[$mol_rest_code["Requested Range Not Satisfiable"] = 416] = "Requested Range Not Satisfiable";
        $mol_rest_code[$mol_rest_code["Expectation Failed"] = 417] = "Expectation Failed";
        $mol_rest_code[$mol_rest_code["Teapot"] = 418] = "Teapot";
        $mol_rest_code[$mol_rest_code["Unprocessable Entity"] = 422] = "Unprocessable Entity";
        $mol_rest_code[$mol_rest_code["Locked"] = 423] = "Locked";
        $mol_rest_code[$mol_rest_code["Failed Dependency"] = 424] = "Failed Dependency";
        $mol_rest_code[$mol_rest_code["Upgrade Required"] = 426] = "Upgrade Required";
        $mol_rest_code[$mol_rest_code["Precondition Required"] = 428] = "Precondition Required";
        $mol_rest_code[$mol_rest_code["Too Many Requests"] = 429] = "Too Many Requests";
        $mol_rest_code[$mol_rest_code["Request Header Fields Too Large"] = 431] = "Request Header Fields Too Large";
        $mol_rest_code[$mol_rest_code["Unavailable For Legal Reasons"] = 451] = "Unavailable For Legal Reasons";
        $mol_rest_code[$mol_rest_code["Internal Server Error"] = 500] = "Internal Server Error";
        $mol_rest_code[$mol_rest_code["Not Implemented"] = 501] = "Not Implemented";
        $mol_rest_code[$mol_rest_code["Bad Gateway"] = 502] = "Bad Gateway";
        $mol_rest_code[$mol_rest_code["Service Unavailable"] = 503] = "Service Unavailable";
        $mol_rest_code[$mol_rest_code["Gateway Timeout"] = 504] = "Gateway Timeout";
        $mol_rest_code[$mol_rest_code["HTTP Version Not Supported"] = 505] = "HTTP Version Not Supported";
        $mol_rest_code[$mol_rest_code["Insufficient Storage"] = 507] = "Insufficient Storage";
        $mol_rest_code[$mol_rest_code["Loop Detected"] = 508] = "Loop Detected";
        $mol_rest_code[$mol_rest_code["Not Extended"] = 510] = "Not Extended";
        $mol_rest_code[$mol_rest_code["Network Authentication Required"] = 511] = "Network Authentication Required";
        $mol_rest_code[$mol_rest_code["Network Read Timeout Error"] = 598] = "Network Read Timeout Error";
        $mol_rest_code[$mol_rest_code["Network Connect Timeout Error"] = 599] = "Network Connect Timeout Error";
    })($mol_rest_code = $.$mol_rest_code || ($.$mol_rest_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        String(e.stack),
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            // в nodejs, что б не дублировалось cause в консоли
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function pass(data) {
        return data;
    }
    function $mol_error_fence(task, fallback, loading = pass) {
        try {
            return task();
        }
        catch (error) {
            let normalized;
            try {
                normalized = $mol_promise_like(error) ? loading(error) : fallback(error);
            }
            catch (sub_error) {
                normalized = $mol_promise_like(sub_error) ? sub_error : new $mol_error_mix(sub_error.message, { error }, sub_error);
            }
            if (normalized instanceof Error || $mol_promise_like(normalized)) {
                $mol_fail_hidden(normalized);
            }
            return normalized;
        }
    }
    $.$mol_error_fence = $mol_error_fence;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_error_enriched(cause, cb) {
        return $mol_error_fence(cb, e => new $mol_error_mix(e.message, cause, e));
    }
    $.$mol_error_enriched = $mol_error_enriched;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object {
        native;
        request;
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        ok() {
            return this.native.ok;
        }
        message() {
            return $mol_rest_code[this.code()] || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const mime = this.mime() || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_error_enriched(this, () => $mol_wire_sync(this.native).json());
        }
        blob() {
            return $mol_error_enriched(this, () => $mol_wire_sync(this.native).blob());
        }
        buffer() {
            return $mol_error_enriched(this, () => $mol_wire_sync(this.native).arrayBuffer());
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch_request extends $mol_object {
        native;
        response_async() {
            const controller = new AbortController();
            let done = false;
            const request = new Request(this.native, { signal: controller.signal });
            const promise = fetch(request).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    // Abort of done request breaks response parsing
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        response() {
            const native = $mol_error_enriched(this, () => $mol_wire_sync(this).response_async());
            return this.$.$mol_fetch_response.make({
                native,
                request: this
            });
        }
        success() {
            const response = this.response();
            if (response.status() === 'success')
                return response;
            throw new Error(response.message(), { cause: response });
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_request.prototype, "response", null);
    $.$mol_fetch_request = $mol_fetch_request;
    class $mol_fetch extends $mol_object {
        static request(input, init) {
            return this.$.$mol_fetch_request.make({
                native: new Request(input, init)
            });
        }
        static response(input, init) {
            return this.request(input, init).response();
        }
        static success(input, init) {
            return this.request(input, init).success();
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static blob(input, init) {
            return this.success(input, init).blob();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "request", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_webdav extends $mol_file_base {
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                // foo/../ -> /
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            // http://localhost/.. -> http://localhost
            res = res.replace(/\/\.\.\/?$/, '');
            if (res === this.path())
                return this;
            return this.constructor.absolute(res);
        }
        static headers() { return {}; }
        headers() { return this.constructor.headers(); }
        fetch(init) {
            return this.$.$mol_fetch.success(this.path(), {
                ...init,
                headers: {
                    ...this.headers(),
                    ...init.headers,
                }
            });
        }
        read() {
            try {
                const response = this.fetch({});
                return new Uint8Array(response.buffer());
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return new Uint8Array;
                $mol_fail_hidden(error);
            }
        }
        write(body) { this.fetch({ method: 'PUT', body }); }
        ensure() { this.fetch({ method: 'MKCOL' }); }
        drop() { this.fetch({ method: 'DELETE' }); }
        copy(to) {
            this.fetch({
                method: 'COPY',
                headers: { Destination: to }
            });
        }
        kids() {
            const response = this.fetch({ method: 'PROPFIND' });
            const xml = response.xml();
            const result = [];
            for (const multistatus of xml.childNodes) {
                if (multistatus.nodeName !== 'D:multistatus')
                    continue;
                for (const response of multistatus.childNodes) {
                    let path;
                    if (response.nodeName === 'D:href')
                        path = response.textContent ?? '';
                    if (!path)
                        continue;
                    if (response.nodeName !== 'D:propstat')
                        continue;
                    const stat = webdav_stat(response);
                    const file = this.resolve(path);
                    file.stat(stat, 'virt');
                    result.push(file);
                }
            }
            return result;
        }
        readable(opts) {
            return this.fetch({
                headers: !opts.start ? {} : {
                    'Range': `bytes=${opts.start}-${opts.end ?? ''}`
                }
            }).stream() || $mol_fail(new Error('Not found'));
        }
        info() {
            return this.kids().at(0)?.stat() ?? null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_file_webdav.prototype, "readable", null);
    $.$mol_file_webdav = $mol_file_webdav;
    function webdav_stat(prop_stat) {
        const now = new Date();
        const stat = {
            type: 'file',
            size: 0,
            atime: now,
            mtime: now,
            ctime: now,
        };
        for (const prop of prop_stat.childNodes) {
            if (prop.nodeName !== 'D:prop')
                continue;
            for (const value of prop.childNodes) {
                const name = value.nodeName;
                const text = value.textContent ?? '';
                if (name === 'D:getcontenttype') {
                    stat.type = text.endsWith('directory') ? 'dir' : 'file';
                }
                if (name === 'D:getcontentlength') {
                    stat.size = Number(value.textContent || '0');
                    if (Number.isNaN(stat.size))
                        stat.size = 0;
                }
                if (name === 'D:getlastmodified')
                    stat.mtime = stat.atime = new Date(text);
                if (name === 'D:creationdate')
                    stat.ctime = new Date(text);
            }
        }
        return stat;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file_webdav {
        static base = new URL('.', $mol_dom_context.document?.currentScript?.['src'] ?? globalThis.location.href).toString();
        // Вотчер выключен, версия всегда будет одна
        // Если пустая строка - будет считаться, что файла нет
        version() { return '1'; }
        // Ворнинги подавляем, иначе в каждом приложении, загружающим локали, будет ворнинг
        // override watcher() { return { destructor() {} }}
        info() {
            // Директории не поддерживаются
            try {
                const response = this.fetch({ method: 'HEAD' });
                const headers = response.headers();
                let size = Number(headers.get('Content-Length'));
                if (Number.isNaN(size))
                    size = 0;
                const last = headers.get('Last-Modified');
                const mtime = last ? new Date(last) : new Date();
                return {
                    type: 'file',
                    size,
                    mtime,
                    atime: mtime,
                    ctime: mtime,
                };
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return null;
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Localisation in $mol framework
     * @see https://mol.hyoo.ru/#!section=docs/=s5aqnb_odub8l
     */
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static langs_rtl() {
            return ['ar', 'he', 'fa', 'ur', 'yi', 'ps', 'ug', 'sd'];
        }
        static direction() {
            const lang = this.lang();
            let direction;
            try {
                direction = new Intl.Locale(lang).getTextInfo().direction;
            }
            catch (e) {
                $mol_fail_log(e);
            }
            return direction ?? (this.langs_rtl().includes(lang) ? 'rtl' : 'ltr');
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "direction", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /** Base SVG component to display SVG images or icons. */
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";


;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_play) = class $mol_icon_play extends ($.$mol_icon) {
		path(){
			return "M8,5.14V19.14L19,12.14L8,5.14Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_stop) = class $mol_icon_stop extends ($.$mol_icon) {
		path(){
			return "M18,18H6V6H18V18Z";
		}
	};


;
"use strict";


;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		value(){
			return null;
		}
		theme(){
			return "$mol_theme_accent";
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .75rem;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		activate(next){
			return (this.event_activate(next));
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		key_press(next){
			return (this.event_key_press(next));
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		status(next){
			if(next !== undefined) return next;
			return [];
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "status"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Simple button.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
         */
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    // Calling actions from catch section, if throwing promise breaks idempotency
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const error = this.status()?.[0];
                if (!error)
                    return '';
                if ($mol_promise_like(error)) {
                    return $mol_fail_hidden(error);
                }
                return this.$.$mol_error_message(error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n\tmin-width: 2.5rem;\n\tmin-height: 2.5rem;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 100vmax var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor]:where(:not([disabled])) {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_button_major) = class $mol_button_major extends ($.$mol_button_minor) {
		theme(){
			return "$mol_theme_base";
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_undo) = class $mol_icon_undo extends ($.$mol_icon) {
		path(){
			return "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_redo) = class $mol_icon_redo extends ($.$mol_icon) {
		path(){
			return "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_folder) = class $mol_icon_folder extends ($.$mol_icon) {
		path(){
			return "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_folder_music) = class $mol_icon_folder_music extends ($.$mol_icon) {
		path(){
			return "M22 8V11H16.5V16.11C14.66 16.53 13.26 18.09 13.04 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8M18.5 13V18.21C18.19 18.07 17.86 18 17.5 18C16.12 18 15 19.12 15 20.5S16.12 23 17.5 23 20 21.88 20 20.5V15H22V13H18.5Z";
		}
	};


;
"use strict";


;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_event extends $mol_object {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        prevented(next) {
            if (next)
                this.native.preventDefault();
            return this.native.defaultPrevented;
        }
        static wrap(event) {
            return new this.$.$mol_dom_event(event);
        }
    }
    __decorate([
        $mol_action
    ], $mol_dom_event.prototype, "prevented", null);
    __decorate([
        $mol_action
    ], $mol_dom_event, "wrap", null);
    $.$mol_dom_event = $mol_dom_event;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: start;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Checkbox UI component. See Variants for more concrete implementations.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_box_demo
         */
        class $mol_check extends $.$mol_check {
            click(next) {
                const event = next ? $mol_dom_event.wrap(next) : null;
                if (event?.prevented())
                    return;
                event?.prevented(true);
                this.checked(!this.checked());
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_icon) = class $mol_check_icon extends ($.$mol_check) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_layers) = class $mol_icon_layers extends ($.$mol_icon) {
		path(){
			return "M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_tune) = class $mol_icon_tune extends ($.$mol_icon) {
		path(){
			return "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_brush) = class $mol_icon_brush extends ($.$mol_icon) {
		path(){
			return "M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_eraser) = class $mol_icon_eraser extends ($.$mol_icon) {
		path(){
			return "M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_cursor_default) = class $mol_icon_cursor_default extends ($.$mol_icon) {
		path(){
			return "M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_pan) = class $mol_icon_pan extends ($.$mol_icon) {
		path(){
			return "M12,2.5L8,7H16L12,2.5M7,8L2.5,12L7,16V8M17,8V16L21.5,12L17,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z";
		}
	};


;
"use strict";


;
	($.$bog_doodle_slider) = class $bog_doodle_slider extends ($.$mol_view) {
		hint(){
			return "";
		}
		value_text(){
			return "0";
		}
		changed(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "input";
		}
		value(next){
			if(next !== undefined) return next;
			return 0;
		}
		min(){
			return 0;
		}
		max(){
			return 100;
		}
		step(){
			return 1;
		}
		attr(){
			return {
				...(super.attr()), 
				"type": "range", 
				"min": (this.min()), 
				"max": (this.max()), 
				"step": (this.step()), 
				"title": (this.hint())
			};
		}
		field(){
			return {...(super.field()), "value": (this.value_text())};
		}
		event(){
			return {"input": (next) => (this.changed(next))};
		}
	};
	($mol_mem(($.$bog_doodle_slider.prototype), "changed"));
	($mol_mem(($.$bog_doodle_slider.prototype), "value"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_doodle_slider extends $.$bog_doodle_slider {
            value_text() {
                return String(this.value());
            }
            changed(event) {
                const next = Number(event.target.value);
                if (!Number.isNaN(next))
                    this.value(next);
            }
        }
        $$.$bog_doodle_slider = $bog_doodle_slider;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("bog/doodle/slider/slider.view.css", "[bog_doodle_slider] {\n\tdisplay: block;\n\tappearance: auto;\n\t-webkit-appearance: auto;\n\tbackground: transparent;\n\twidth: 7rem;\n\theight: 2.5rem;\n\tmargin: 0 var(--mol_gap_text);\n\taccent-color: var(--mol_theme_current);\n\tcursor: pointer;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_palette) = class $mol_icon_palette extends ($.$mol_icon) {
		path(){
			return "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";
		}
	};


;
"use strict";


;
	($.$bog_doodle_picker) = class $bog_doodle_picker extends ($.$mol_view) {
		hue_css(){
			return "red";
		}
		area_down(next){
			if(next !== undefined) return next;
			return null;
		}
		area_move(next){
			if(next !== undefined) return next;
			return null;
		}
		area_up(next){
			if(next !== undefined) return next;
			return null;
		}
		area_left(){
			return "0%";
		}
		area_top(){
			return "0%";
		}
		Area_knob(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({
				...(this.$.$mol_view.prototype.style.call(obj)), 
				"left": (this.area_left()), 
				"top": (this.area_top())
			});
			return obj;
		}
		Area(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({...(this.$.$mol_view.prototype.style.call(obj)), "--bog_doodle_picker_hue": (this.hue_css())});
			(obj.event) = () => ({
				"pointerdown": (next) => (this.area_down(next)), 
				"pointermove": (next) => (this.area_move(next)), 
				"pointerup": (next) => (this.area_up(next))
			});
			(obj.sub) = () => ([(this.Area_knob())]);
			return obj;
		}
		hue_down(next){
			if(next !== undefined) return next;
			return null;
		}
		hue_move(next){
			if(next !== undefined) return next;
			return null;
		}
		hue_up(next){
			if(next !== undefined) return next;
			return null;
		}
		hue_left(){
			return "0%";
		}
		Hue_knob(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({...(this.$.$mol_view.prototype.style.call(obj)), "left": (this.hue_left())});
			return obj;
		}
		Hue(){
			const obj = new this.$.$mol_view();
			(obj.event) = () => ({
				"pointerdown": (next) => (this.hue_down(next)), 
				"pointermove": (next) => (this.hue_move(next)), 
				"pointerup": (next) => (this.hue_up(next))
			});
			(obj.sub) = () => ([(this.Hue_knob())]);
			return obj;
		}
		swatch_color(id){
			return "";
		}
		swatch_pick(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Swatch(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.swatch_color(id)));
			(obj.click) = (next) => ((this.swatch_pick(id, next)));
			(obj.style) = () => ({...(this.$.$mol_button_minor.prototype.style.call(obj)), "--bog_doodle_picker_swatch": (this.swatch_color(id))});
			(obj.sub) = () => ([]);
			return obj;
		}
		swatch_list(){
			return [(this.Swatch(id))];
		}
		Swatches(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.swatch_list()));
			return obj;
		}
		value(next){
			if(next !== undefined) return next;
			return "#1f1d1a";
		}
		Preview(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({...(this.$.$mol_view.prototype.style.call(obj)), "--bog_doodle_picker_swatch": (this.value())});
			return obj;
		}
		hex(next){
			if(next !== undefined) return next;
			return "";
		}
		Hex(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("#rrggbb");
			(obj.value) = (next) => ((this.hex(next)));
			return obj;
		}
		Hex_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Preview()), (this.Hex())]);
			return obj;
		}
		swatches(){
			return [];
		}
		sub(){
			return [
				(this.Area()), 
				(this.Hue()), 
				(this.Swatches()), 
				(this.Hex_row())
			];
		}
	};
	($mol_mem(($.$bog_doodle_picker.prototype), "area_down"));
	($mol_mem(($.$bog_doodle_picker.prototype), "area_move"));
	($mol_mem(($.$bog_doodle_picker.prototype), "area_up"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Area_knob"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Area"));
	($mol_mem(($.$bog_doodle_picker.prototype), "hue_down"));
	($mol_mem(($.$bog_doodle_picker.prototype), "hue_move"));
	($mol_mem(($.$bog_doodle_picker.prototype), "hue_up"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Hue_knob"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Hue"));
	($mol_mem_key(($.$bog_doodle_picker.prototype), "swatch_pick"));
	($mol_mem_key(($.$bog_doodle_picker.prototype), "Swatch"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Swatches"));
	($mol_mem(($.$bog_doodle_picker.prototype), "value"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Preview"));
	($mol_mem(($.$bog_doodle_picker.prototype), "hex"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Hex"));
	($mol_mem(($.$bog_doodle_picker.prototype), "Hex_row"));


;
"use strict";
var $;
(function ($) {
    function $bog_doodle_picker_hsv(hex) {
        const clean = hex.replace('#', '').slice(0, 6).padEnd(6, '0');
        const r = parseInt(clean.slice(0, 2), 16) / 255;
        const g = parseInt(clean.slice(2, 4), 16) / 255;
        const b = parseInt(clean.slice(4, 6), 16) / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const d = max - min;
        let h = 0;
        if (d)
            h = max === r ? ((g - b) / d + 6) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        return { h: h * 60, s: max ? d / max : 0, v: max };
    }
    $.$bog_doodle_picker_hsv = $bog_doodle_picker_hsv;
    function $bog_doodle_picker_hex(h, s, v) {
        const f = (n) => {
            const k = (n + h / 60) % 6;
            return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
        };
        return '#' + [f(5), f(3), f(1)]
            .map(c => Math.round(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, '0'))
            .join('');
    }
    $.$bog_doodle_picker_hex = $bog_doodle_picker_hex;
    function $bog_doodle_picker_valid(hex) {
        return /^#[0-9a-f]{6}$/i.test(hex);
    }
    $.$bog_doodle_picker_valid = $bog_doodle_picker_valid;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_doodle_picker extends $.$bog_doodle_picker {
            hsv() {
                return $bog_doodle_picker_hsv(this.value());
            }
            hue_kept = 0;
            hue(next) {
                if (next !== undefined)
                    return this.hue_kept = next;
                const hsv = this.hsv();
                if (hsv.s)
                    this.hue_kept = hsv.h;
                return this.hue_kept;
            }
            hue_css() {
                return `hsl(${Math.round(this.hue())}deg 100% 50%)`;
            }
            area_left() {
                return `${this.hsv().s * 100}%`;
            }
            area_top() {
                return `${(1 - this.hsv().v) * 100}%`;
            }
            hue_left() {
                return `${this.hue() / 360 * 100}%`;
            }
            spot(event, node) {
                const rect = node.getBoundingClientRect();
                return {
                    x: Math.max(0, Math.min(1, (event.clientX - rect.left) / (rect.width || 1))),
                    y: Math.max(0, Math.min(1, (event.clientY - rect.top) / (rect.height || 1))),
                };
            }
            dragging = '';
            area_pick(event) {
                const { x, y } = this.spot(event, this.Area().dom_node());
                this.value($bog_doodle_picker_hex(this.hue(), x, 1 - y));
            }
            area_down(event) {
                event.preventDefault();
                try {
                    this.Area().dom_node().setPointerCapture(event.pointerId);
                }
                catch { }
                this.dragging = 'area';
                this.area_pick(event);
            }
            area_move(event) {
                if (this.dragging === 'area')
                    this.area_pick(event);
            }
            area_up(event) {
                this.dragging = '';
            }
            hue_pick(event) {
                const { x } = this.spot(event, this.Hue().dom_node());
                const hue = Math.min(359.9, x * 360);
                this.hue(hue);
                const { s, v } = this.hsv();
                this.value($bog_doodle_picker_hex(hue, s || 0.8, s ? v : Math.max(v, 0.7)));
            }
            hue_down(event) {
                event.preventDefault();
                try {
                    this.Hue().dom_node().setPointerCapture(event.pointerId);
                }
                catch { }
                this.dragging = 'hue';
                this.hue_pick(event);
            }
            hue_move(event) {
                if (this.dragging === 'hue')
                    this.hue_pick(event);
            }
            hue_up(event) {
                this.dragging = '';
            }
            swatch_list() {
                return this.swatches().map(color => this.Swatch(color));
            }
            swatch_color(color) {
                return color;
            }
            swatch_pick(color) {
                const hsv = $bog_doodle_picker_hsv(color);
                if (hsv.s)
                    this.hue(hsv.h);
                this.value(color);
            }
            hex(next) {
                if (next !== undefined) {
                    const clean = next.trim().startsWith('#') ? next.trim() : '#' + next.trim();
                    if ($bog_doodle_picker_valid(clean))
                        this.swatch_pick(clean.toLowerCase());
                    return next;
                }
                return this.value();
            }
        }
        __decorate([
            $mol_mem
        ], $bog_doodle_picker.prototype, "hue", null);
        $$.$bog_doodle_picker = $bog_doodle_picker;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("bog/doodle/picker/picker.view.css", "[bog_doodle_picker] {\n\tflex-direction: column;\n\tgap: var(--mol_gap_space);\n\tpadding: var(--mol_gap_block);\n\twidth: 16rem;\n\tmax-width: 100%;\n}\n\n[bog_doodle_picker_area] {\n\tposition: relative;\n\theight: 10rem;\n\tborder-radius: var(--mol_gap_round);\n\tbackground:\n\t\tlinear-gradient( to top, #000, transparent ),\n\t\tlinear-gradient( to right, #fff, var(--bog_doodle_picker_hue) );\n\ttouch-action: none;\n\tcursor: crosshair;\n}\n\n[bog_doodle_picker_area_knob] {\n\tposition: absolute;\n\twidth: 1rem;\n\theight: 1rem;\n\tmargin: -0.5rem 0 0 -0.5rem;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n\tbox-shadow: 0 0 0 1px #0008;\n\tpointer-events: none;\n}\n\n[bog_doodle_picker_hue] {\n\tposition: relative;\n\theight: 1rem;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: linear-gradient( to right, #f00, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 );\n\ttouch-action: none;\n\tcursor: pointer;\n}\n\n[bog_doodle_picker_hue_knob] {\n\tposition: absolute;\n\ttop: -2px;\n\tbottom: -2px;\n\twidth: 6px;\n\tmargin-left: -3px;\n\tborder-radius: 3px;\n\tbackground: #fff;\n\tbox-shadow: 0 0 0 1px #0008;\n\tpointer-events: none;\n}\n\n[bog_doodle_picker_swatches] {\n\tflex-wrap: wrap;\n\tgap: 4px;\n}\n\n[bog_doodle_picker_swatch] {\n\twidth: 1.75rem;\n\theight: 1.75rem;\n\tmin-width: 0;\n\tmin-height: 0;\n\tpadding: 0;\n\tborder-radius: 50%;\n\tbackground: var(--bog_doodle_picker_swatch);\n\tbox-shadow: inset 0 0 0 1px #0002;\n}\n\n[bog_doodle_picker_hex_row] {\n\talign-items: center;\n\tgap: var(--mol_gap_space);\n}\n\n[bog_doodle_picker_preview] {\n\tflex: none;\n\twidth: 2.5rem;\n\theight: 2.5rem;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: var(--bog_doodle_picker_swatch);\n\tbox-shadow: inset 0 0 0 1px #0002;\n}\n");
})($ || ($ = {}));

;
	($.$mol_ghost) = class $mol_ghost extends ($.$mol_view) {
		Sub(){
			const obj = new this.$.$mol_view();
			return obj;
		}
	};
	($mol_mem(($.$mol_ghost.prototype), "Sub"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Mixin view logic to DOM node of another component.
         */
        class $mol_ghost extends $.$mol_ghost {
            dom_node_external(next) {
                return this.Sub().dom_node(next);
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_follower) = class $mol_follower extends ($.$mol_ghost) {
		transform(){
			return "";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		align(){
			return [-.5, -.5];
		}
		offset(){
			return [0, 0];
		}
		style(){
			return {...(super.style()), "transform": (this.transform())};
		}
	};
	($mol_mem(($.$mol_follower.prototype), "Anchor"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Marker on top of another component with tracking of its position.
         */
        class $mol_follower extends $.$mol_follower {
            pos() {
                const self_rect = this.view_rect();
                const prev = $mol_wire_probe(() => this.pos());
                const anchor_rect = this.Anchor()?.view_rect();
                if (!anchor_rect)
                    return null;
                const offset = this.offset();
                const align = this.align();
                const left = Math.floor((prev?.left ?? 0)
                    - (self_rect?.left ?? 0)
                    + (self_rect?.width ?? 0) * align[0]
                    + (anchor_rect?.left ?? 0)
                    + offset[0] * (anchor_rect?.width ?? 0));
                const top = Math.floor((prev?.top ?? 0)
                    - (self_rect?.top ?? 0)
                    + (self_rect?.height ?? 0) * align[1]
                    + (anchor_rect?.top ?? 0)
                    + offset[1] * (anchor_rect?.height ?? 0));
                return { left, top };
            }
            transform() {
                const pos = this.pos();
                if (!pos)
                    return 'scale(0)';
                const { left, top } = pos;
                return `translate( ${left}px, ${top}px )`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_follower.prototype, "pos", null);
        __decorate([
            $mol_mem
        ], $mol_follower.prototype, "transform", null);
        $$.$mol_follower = $mol_follower;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/follower/follower.view.css", "[mol_follower] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\ttransition: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pop) = class $mol_pop extends ($.$mol_view) {
		align(){
			return "bottom_center";
		}
		bubble(){
			return null;
		}
		Anchor(){
			return null;
		}
		bubble_offset(){
			return [0, 1];
		}
		bubble_align(){
			return [0, 0];
		}
		bubble_content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		Bubble(){
			const obj = new this.$.$mol_pop_bubble();
			(obj.content) = () => ((this.bubble_content()));
			(obj.height_max) = () => ((this.height_max()));
			return obj;
		}
		Follower(){
			const obj = new this.$.$mol_follower();
			(obj.offset) = () => ((this.bubble_offset()));
			(obj.align) = () => ((this.bubble_align()));
			(obj.Anchor) = () => ((this.Anchor()));
			(obj.Sub) = () => ((this.Bubble()));
			return obj;
		}
		showed(next){
			if(next !== undefined) return next;
			return false;
		}
		align_vert(){
			return "";
		}
		align_hor(){
			return "";
		}
		direction(){
			return "ltr";
		}
		align_enriched(){
			return (this.align());
		}
		prefer(){
			return "vert";
		}
		auto(){
			return [(this.bubble())];
		}
		sub(){
			return [(this.Anchor())];
		}
		sub_visible(){
			return [(this.Anchor()), (this.Follower())];
		}
	};
	($mol_mem(($.$mol_pop.prototype), "Bubble"));
	($mol_mem(($.$mol_pop.prototype), "Follower"));
	($mol_mem(($.$mol_pop.prototype), "showed"));
	($.$mol_pop_bubble) = class $mol_pop_bubble extends ($.$mol_view) {
		content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		sub(){
			return (this.content());
		}
		style(){
			return {...(super.style()), "maxHeight": (this.height_max())};
		}
		attr(){
			return {
				...(super.attr()), 
				"tabindex": 0, 
				"popover": "manual"
			};
		}
	};


;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		attr(){
			return {...(super.attr()), "tabindex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix of Object.keys(val).reverse()) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type of Object.keys(types).reverse()) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name of Object.keys(attrs).reverse()) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media' || key === '@container') {
                    const media = config[key];
                    for (let query of Object.keys(media).reverse()) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key === '@starting-style') {
                    const styles = config[key];
                    rules.push('}\n');
                    make_class(prefix, path, styles);
                    rules.push(`${key} {\n`);
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val of Object.keys(vals).reverse()) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * CSS in TS.
     * Statically typed CSS style sheets. Following samples show which CSS code are generated from TS code.
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Scrolling pane.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_scroll_demo
         */
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                // basis: 0,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    // transform: 'translateZ(0)', // enforce gpu scroll in all agents
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'hidden',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * `Bubble` that can be shown anchored to `Anchor` element.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_pop_demo
         */
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Follower()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom);
                if (align === 'top')
                    return rect_bubble.top;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                const viewport = this.$.$mol_window.size();
                return rect_pop.top > viewport.height / 2 ? 'top' : 'bottom';
            }
            align_hor() {
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                const viewport = this.$.$mol_window.size();
                return rect_pop.left > viewport.width / 2 ? 'left' : 'right';
            }
            direction() { return this.$.$mol_locale.direction(); }
            align_enriched() {
                const align = this.align();
                const rtl = this.direction() === 'rtl';
                const start = rtl ? 'right' : 'left';
                const end = rtl ? 'left' : 'right';
                return align.replace('start', start).replace('end', end);
            }
            bubble_offset() {
                const tags = new Set(this.align_enriched().split('_'));
                if (tags.has('suspense'))
                    return [0, 0];
                const hor = tags.has('right') ? 'right' : tags.has('left') ? 'left' : 'center';
                const vert = tags.has('bottom') ? 'bottom' : tags.has('top') ? 'top' : 'center';
                if ([...tags][0] === hor) {
                    return [
                        { left: 0, center: .5, right: 1 }[hor],
                        { top: 1, center: .5, bottom: 0 }[vert],
                    ];
                }
                else {
                    return [
                        { left: 1, center: .5, right: 0 }[hor],
                        { top: 0, center: .5, bottom: 1 }[vert],
                    ];
                }
            }
            bubble_align() {
                const tags = new Set(this.align_enriched().split('_'));
                if (tags.has('suspense'))
                    return [-.5, -.5];
                const hor = tags.has('right') ? 'right' : tags.has('left') ? 'left' : 'center';
                const vert = tags.has('bottom') ? 'bottom' : tags.has('top') ? 'top' : 'center';
                return [
                    { left: -1, center: -.5, right: 0, suspense: -.5 }[hor],
                    { top: -1, center: -.5, bottom: 0, suspense: -.5 }[vert],
                ];
            }
            bubble() {
                if (!this.showed())
                    return;
                this.Bubble().dom_node().showPopover?.();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "bubble_offset", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "bubble_align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "bubble", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "@keyframes mol_pop_show {\n\tfrom {\n\t\topacity: 0;\n\t}\n}\n\n[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tborder: none;\n\tpadding: 0;\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: fixed;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\t/* height: max-content; */\n\tflex-direction: column;\n\tmax-width: 100vw;\n\tmax-height: 80vw;\n\tcontain: paint;\n\ttransition-property: opacity;\n\t/* Safari ios layer fix, https://t.me/mam_mol/170017 */\n\ttransform: translateZ(0);\n\tanimation: mol_pop_show .1s ease-in;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pick) = class $mol_pick extends ($.$mol_pop) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_enabled(){
			return true;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_content(){
			return [(this.title())];
		}
		hint(){
			return "";
		}
		Trigger(){
			const obj = new this.$.$mol_check();
			(obj.minimal_width) = () => (40);
			(obj.minimal_height) = () => (40);
			(obj.enabled) = () => ((this.trigger_enabled()));
			(obj.checked) = (next) => ((this.showed(next)));
			(obj.clicks) = (next) => ((this.clicks(next)));
			(obj.sub) = () => ((this.trigger_content()));
			(obj.hint) = () => ((this.hint()));
			return obj;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		Anchor(){
			return (this.Trigger());
		}
	};
	($mol_mem(($.$mol_pick.prototype), "keydown"));
	($mol_mem(($.$mol_pick.prototype), "clicks"));
	($mol_mem(($.$mol_pick.prototype), "Trigger"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Pop-up display and hide by mouse click, also hide by unfocus.
         * Based on [mol_pop](https://mol.hyoo.ru/#!section=demos/demo=mol_pop_demo) component.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_pick_demo
         */
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_magnify) = class $mol_icon_magnify extends ($.$mol_icon) {
		path(){
			return "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_magnify_minus) = class $mol_icon_magnify_minus extends ($.$mol_icon) {
		path(){
			return "M9,2A7,7 0 0,1 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M5,8V10H13V8H5Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_magnify_plus) = class $mol_icon_magnify_plus extends ($.$mol_icon) {
		path(){
			return "M9,2A7,7 0 0,1 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M8,5V8H5V10H8V13H10V10H13V8H10V5H8Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_select) = class $mol_icon_select extends ($.$mol_icon) {
		path(){
			return "M4,3H5V5H3V4A1,1 0 0,1 4,3M20,3A1,1 0 0,1 21,4V5H19V3H20M15,5V3H17V5H15M11,5V3H13V5H11M7,5V3H9V5H7M21,20A1,1 0 0,1 20,21H19V19H21V20M15,21V19H17V21H15M11,21V19H13V21H11M7,21V19H9V21H7M4,21A1,1 0 0,1 3,20V19H5V21H4M3,15H5V17H3V15M21,15V17H19V15H21M3,11H5V13H3V11M21,11V13H19V11H21M3,7H5V9H3V7M21,7V9H19V7H21Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_select_all) = class $mol_icon_select_all extends ($.$mol_icon) {
		path(){
			return "M9,9H15V15H9M7,17H17V7H7M15,5H17V3H15M15,21H17V19H15M19,17H21V15H19M19,9H21V7H19M19,21A2,2 0 0,0 21,19H19M19,13H21V11H19M11,21H13V19H11M9,3H7V5H9M3,17H5V15H3M5,21V19H3A2,2 0 0,0 5,21M19,3V5H21A2,2 0 0,0 19,3M13,3H11V5H13M3,9H5V7H3M7,21H9V19H7M3,13H5V11H3M3,5H5V3A2,2 0 0,0 3,5Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_content_duplicate) = class $mol_icon_content_duplicate extends ($.$mol_icon) {
		path(){
			return "M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_delete) = class $mol_icon_delete extends ($.$mol_icon) {
		path(){
			return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_plus) = class $mol_icon_plus extends ($.$mol_icon) {
		path(){
			return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    function $bog_doodle_sketch_stroke_box(stroke) {
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
        const points = stroke.points;
        for (let i = 0; i < points.length; i += 3) {
            left = Math.min(left, points[i]);
            right = Math.max(right, points[i]);
            top = Math.min(top, points[i + 1]);
            bottom = Math.max(bottom, points[i + 1]);
        }
        return { left, right, top, bottom };
    }
    $.$bog_doodle_sketch_stroke_box = $bog_doodle_sketch_stroke_box;
    function $bog_doodle_sketch_stroke_near(stroke, x, y, radius) {
        const points = stroke.points;
        const r2 = radius * radius;
        for (let i = 0; i < points.length; i += 3) {
            const dx = points[i] - x;
            const dy = points[i + 1] - y;
            if (dx * dx + dy * dy <= r2)
                return true;
            if (i + 3 >= points.length)
                continue;
            const sx = points[i + 3] - points[i];
            const sy = points[i + 4] - points[i + 1];
            const len = sx * sx + sy * sy;
            if (!len)
                continue;
            const t = Math.max(0, Math.min(1, ((x - points[i]) * sx + (y - points[i + 1]) * sy) / len));
            const px = points[i] + t * sx - x;
            const py = points[i + 1] + t * sy - y;
            if (px * px + py * py <= r2)
                return true;
        }
        return false;
    }
    $.$bog_doodle_sketch_stroke_near = $bog_doodle_sketch_stroke_near;
    function $bog_doodle_sketch_stroke_shift(stroke, dx, dy, id = stroke.id) {
        const points = stroke.points.map((v, i) => {
            if (i % 3 === 0)
                return Math.max(0, Math.min(0.9999, v + dx));
            if (i % 3 === 1)
                return Math.max(0, Math.min(1, v + dy));
            return v;
        });
        return { ...stroke, id, points };
    }
    $.$bog_doodle_sketch_stroke_shift = $bog_doodle_sketch_stroke_shift;
    function $bog_doodle_sketch_stroke_id() {
        return Math.random().toString(36).slice(2, 10);
    }
    $.$bog_doodle_sketch_stroke_id = $bog_doodle_sketch_stroke_id;
    function $bog_doodle_sketch_simplify(points, tolerance) {
        const count = points.length / 3;
        if (count < 3)
            return points;
        const keep = new Uint8Array(count);
        keep[0] = keep[count - 1] = 1;
        const stack = [[0, count - 1]];
        while (stack.length) {
            const [from, to] = stack.pop();
            const ax = points[from * 3], ay = points[from * 3 + 1];
            const bx = points[to * 3], by = points[to * 3 + 1];
            const len = Math.hypot(bx - ax, by - ay) || 1e-9;
            let far = -1, dist = tolerance;
            for (let i = from + 1; i < to; ++i) {
                const px = points[i * 3], py = points[i * 3 + 1];
                const d = Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / len;
                const dp = Math.abs(points[i * 3 + 2] - points[from * 3 + 2]);
                const score = Math.max(d, dp * tolerance * 4);
                if (score > dist) {
                    dist = score;
                    far = i;
                }
            }
            if (far < 0)
                continue;
            keep[far] = 1;
            stack.push([from, far], [far, to]);
        }
        const result = [];
        for (let i = 0; i < count; ++i) {
            if (keep[i])
                result.push(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
        }
        return result;
    }
    $.$bog_doodle_sketch_simplify = $bog_doodle_sketch_simplify;
    function $bog_doodle_sketch_resample(points, step) {
        if (points.length <= 3)
            return points.slice();
        const result = [points[0], points[1], points[2]];
        for (let i = 3; i < points.length; i += 3) {
            const x0 = points[i - 3], y0 = points[i - 2], p0 = points[i - 1];
            const x1 = points[i], y1 = points[i + 1], p1 = points[i + 2];
            const parts = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step));
            for (let k = 1; k <= parts; ++k) {
                const t = k / parts;
                result.push(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, p0 + (p1 - p0) * t);
            }
        }
        return result;
    }
    $.$bog_doodle_sketch_resample = $bog_doodle_sketch_resample;
    function $bog_doodle_sketch_cut(stroke, inside, step) {
        const points = $bog_doodle_sketch_resample(stroke.points, step);
        const runs = [];
        for (let i = 0; i < points.length; i += 3) {
            const flag = inside(points[i], points[i + 1]);
            const last = runs[runs.length - 1];
            if (last && last.inside === flag)
                last.points.push(points[i], points[i + 1], points[i + 2]);
            else
                runs.push({ inside: flag, points: [points[i], points[i + 1], points[i + 2]] });
        }
        if (runs.length === 1)
            return runs[0].inside ? { inside: [stroke], outside: [] } : { inside: [], outside: [stroke] };
        const piece = (run) => ({
            ...stroke,
            id: $bog_doodle_sketch_stroke_id(),
            points: $bog_doodle_sketch_simplify(run.points, step / 4),
        });
        const single = stroke.points.length <= 3;
        return {
            inside: runs.filter(run => run.inside && (single || run.points.length > 3)).map(piece),
            outside: runs.filter(run => !run.inside && (single || run.points.length > 3)).map(piece),
        };
    }
    $.$bog_doodle_sketch_cut = $bog_doodle_sketch_cut;
    function $bog_doodle_sketch_polygon_has(polygon, x, y) {
        let has = false;
        for (let i = 0, j = polygon.length - 2; i < polygon.length; j = i, i += 2) {
            const xi = polygon[i], yi = polygon[i + 1], xj = polygon[j], yj = polygon[j + 1];
            if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi)
                has = !has;
        }
        return has;
    }
    $.$bog_doodle_sketch_polygon_has = $bog_doodle_sketch_polygon_has;
    class $bog_doodle_sketch extends $mol_object {
        strokes(next) {
            return next ?? [];
        }
        past(next) {
            return next ?? [];
        }
        future(next) {
            return next ?? [];
        }
        commit(next) {
            const prev = this.strokes();
            if (prev === next)
                return;
            this.past([...this.past().slice(-199), prev]);
            this.future([]);
            this.strokes(next);
        }
        reset(next) {
            this.past([]);
            this.future([]);
            this.strokes(next);
        }
        undo_enabled() {
            return this.past().length > 0;
        }
        redo_enabled() {
            return this.future().length > 0;
        }
        undo() {
            const past = this.past();
            if (!past.length)
                return;
            this.future([this.strokes(), ...this.future()]);
            this.past(past.slice(0, -1));
            this.strokes(past[past.length - 1]);
        }
        redo() {
            const future = this.future();
            if (!future.length)
                return;
            this.past([...this.past(), this.strokes()]);
            this.future(future.slice(1));
            this.strokes(future[0]);
        }
        add(stroke) {
            this.commit([...this.strokes(), stroke]);
        }
        remove(ids) {
            if (!ids.length)
                return;
            const drop = new Set(ids);
            this.commit(this.strokes().filter(s => !drop.has(s.id)));
        }
        shift(ids, dx, dy) {
            if (!ids.length)
                return;
            const moved = new Set(ids);
            this.commit(this.strokes().map(s => moved.has(s.id) ? $bog_doodle_sketch_stroke_shift(s, dx, dy) : s));
        }
        copy(ids, dx, dy) {
            const picked = new Set(ids);
            const copies = this.strokes()
                .filter(s => picked.has(s.id))
                .map(s => $bog_doodle_sketch_stroke_shift(s, dx, dy, $bog_doodle_sketch_stroke_id()));
            if (!copies.length)
                return [];
            this.commit([...this.strokes(), ...copies]);
            return copies.map(s => s.id);
        }
        clear(filter = () => true) {
            const rest = this.strokes().filter(s => !filter(s));
            if (rest.length === this.strokes().length)
                return;
            this.commit(rest);
        }
        erased(x, y, radius, filter, strokes = this.strokes()) {
            const r2 = radius * radius;
            const inside = (px, py) => (px - x) ** 2 + (py - y) ** 2 <= r2;
            let changed = false;
            const next = [];
            for (const stroke of strokes) {
                if (!filter(stroke) || !$bog_doodle_sketch_stroke_near(stroke, x, y, radius)) {
                    next.push(stroke);
                    continue;
                }
                changed = true;
                next.push(...$bog_doodle_sketch_cut(stroke, inside, radius / 3).outside);
            }
            return changed ? next : strokes;
        }
        lasso(polygon, filter) {
            if (polygon.length < 6)
                return [];
            const inside = (x, y) => $bog_doodle_sketch_polygon_has(polygon, x, y);
            const picked = [];
            const next = [];
            for (const stroke of this.strokes()) {
                if (!filter(stroke)) {
                    next.push(stroke);
                    continue;
                }
                const cut = $bog_doodle_sketch_cut(stroke, inside, 0.004);
                next.push(...cut.outside, ...cut.inside);
                picked.push(...cut.inside.map(s => s.id));
            }
            if (picked.length)
                this.commit(next);
            return picked;
        }
        hits(x, y, radius, filter = () => true) {
            return this.strokes()
                .filter(s => filter(s) && $bog_doodle_sketch_stroke_near(s, x, y, radius))
                .map(s => s.id);
        }
        inside(left, top, right, bottom, filter = () => true) {
            return this.strokes().filter(s => {
                if (!filter(s))
                    return false;
                const box = $bog_doodle_sketch_stroke_box(s);
                return box.right >= left && box.left <= right && box.bottom >= top && box.top <= bottom;
            }).map(s => s.id);
        }
    }
    __decorate([
        $mol_mem
    ], $bog_doodle_sketch.prototype, "strokes", null);
    __decorate([
        $mol_mem
    ], $bog_doodle_sketch.prototype, "past", null);
    __decorate([
        $mol_mem
    ], $bog_doodle_sketch.prototype, "future", null);
    $.$bog_doodle_sketch = $bog_doodle_sketch;
})($ || ($ = {}));

;
	($.$bog_doodle_board) = class $bog_doodle_board extends ($.$mol_view) {
		pointer_down(next){
			if(next !== undefined) return next;
			return null;
		}
		pointer_move(next){
			if(next !== undefined) return next;
			return null;
		}
		pointer_up(next){
			if(next !== undefined) return next;
			return null;
		}
		pointer_cancel(next){
			if(next !== undefined) return next;
			return null;
		}
		pointer_leave(next){
			if(next !== undefined) return next;
			return null;
		}
		wheel(next){
			if(next !== undefined) return next;
			return null;
		}
		context_menu(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "canvas";
		}
		sketch(){
			const obj = new this.$.$bog_doodle_sketch();
			return obj;
		}
		notes(){
			return [];
		}
		steps(){
			return 16;
		}
		beat_steps(){
			return 2;
		}
		bar_steps(){
			return 8;
		}
		axis(){
			return "time_y";
		}
		tool(next){
			if(next !== undefined) return next;
			return "draw";
		}
		ink(){
			return "#1f1d1a";
		}
		brush(){
			return 1;
		}
		eraser(){
			return 24;
		}
		snap(){
			return false;
		}
		pen_only(){
			return false;
		}
		back(){
			return "";
		}
		layer_order(){
			return ["l1"];
		}
		layer_active(){
			return "l1";
		}
		layer_default(){
			return "l1";
		}
		layer_focus(){
			return false;
		}
		layer_alpha(id){
			return 1;
		}
		blocked(){
			return false;
		}
		unblock(next){
			if(next !== undefined) return next;
			return null;
		}
		selected(next){
			if(next !== undefined) return next;
			return [];
		}
		playhead(){
			return null;
		}
		playing(){
			return false;
		}
		note_hover(next){
			if(next !== undefined) return next;
			return null;
		}
		attr(){
			return {...(super.attr()), "bog_doodle_board_tool": (this.tool())};
		}
		event(){
			return {
				"pointerdown": (next) => (this.pointer_down(next)), 
				"pointermove": (next) => (this.pointer_move(next)), 
				"pointerup": (next) => (this.pointer_up(next)), 
				"pointercancel": (next) => (this.pointer_cancel(next)), 
				"pointerleave": (next) => (this.pointer_leave(next)), 
				"wheel": (next) => (this.wheel(next)), 
				"contextmenu": (next) => (this.context_menu(next))
			};
		}
	};
	($mol_mem(($.$bog_doodle_board.prototype), "pointer_down"));
	($mol_mem(($.$bog_doodle_board.prototype), "pointer_move"));
	($mol_mem(($.$bog_doodle_board.prototype), "pointer_up"));
	($mol_mem(($.$bog_doodle_board.prototype), "pointer_cancel"));
	($mol_mem(($.$bog_doodle_board.prototype), "pointer_leave"));
	($mol_mem(($.$bog_doodle_board.prototype), "wheel"));
	($mol_mem(($.$bog_doodle_board.prototype), "context_menu"));
	($mol_mem(($.$bog_doodle_board.prototype), "sketch"));
	($mol_mem(($.$bog_doodle_board.prototype), "tool"));
	($mol_mem(($.$bog_doodle_board.prototype), "unblock"));
	($mol_mem(($.$bog_doodle_board.prototype), "selected"));
	($mol_mem(($.$bog_doodle_board.prototype), "note_hover"));


;
"use strict";
var $;
(function ($) {
    $.$bog_doodle_scale_steps = {
        major_penta: [0, 2, 4, 7, 9],
        minor_penta: [0, 3, 5, 7, 10],
        major: [0, 2, 4, 5, 7, 9, 11],
        minor: [0, 2, 3, 5, 7, 8, 10],
        harmonic: [0, 2, 3, 5, 7, 8, 11],
        dorian: [0, 2, 3, 5, 7, 9, 10],
        phrygian: [0, 1, 3, 5, 7, 8, 10],
        lydian: [0, 2, 4, 6, 7, 9, 11],
        mixolydian: [0, 2, 4, 5, 7, 9, 10],
        blues: [0, 3, 5, 6, 7, 10],
        chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
    $.$bog_doodle_scale_keys = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
    function $bog_doodle_scale_notes(key, scale, octave, range) {
        const steps = $.$bog_doodle_scale_steps[scale] ?? $.$bog_doodle_scale_steps.major;
        const base = 12 * (octave + 1) + key;
        const notes = [];
        for (let o = 0; o < range; ++o) {
            for (const step of steps)
                notes.push(base + 12 * o + step);
        }
        notes.push(base + 12 * range);
        return notes;
    }
    $.$bog_doodle_scale_notes = $bog_doodle_scale_notes;
    function $bog_doodle_scale_row(y, count) {
        const row = Math.floor((1 - y) * count);
        return Math.max(0, Math.min(count - 1, row));
    }
    $.$bog_doodle_scale_row = $bog_doodle_scale_row;
    function $bog_doodle_scale_row_y(row, count) {
        return 1 - (row + 0.5) / count;
    }
    $.$bog_doodle_scale_row_y = $bog_doodle_scale_row_y;
    function $bog_doodle_scale_name(midi) {
        return $.$bog_doodle_scale_keys[((midi % 12) + 12) % 12] + (Math.floor(midi / 12) - 1);
    }
    $.$bog_doodle_scale_name = $bog_doodle_scale_name;
    function $bog_doodle_scale_freq(midi) {
        return 440 * 2 ** ((midi - 69) / 12);
    }
    $.$bog_doodle_scale_freq = $bog_doodle_scale_freq;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$bog_doodle_synth_colors = [
        { ink: '#1f1d1a' },
        { ink: '#d8452f' },
        { ink: '#2f6fd8' },
        { ink: '#2a9d5c' },
        { ink: '#e39a1b' },
        { ink: '#8a44c8' },
    ];
    function $bog_doodle_synth_hsl(ink) {
        const hex = ink.replace('#', '').slice(0, 6).padEnd(6, '0');
        const r = parseInt(hex.slice(0, 2), 16) / 255;
        const g = parseInt(hex.slice(2, 4), 16) / 255;
        const b = parseInt(hex.slice(4, 6), 16) / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const l = (max + min) / 2;
        const d = max - min;
        if (!d)
            return { h: 0, s: 0, l };
        const s = d / (1 - Math.abs(2 * l - 1));
        const h = max === r ? ((g - b) / d + 6) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        return { h: h * 60, s, l };
    }
    $.$bog_doodle_synth_hsl = $bog_doodle_synth_hsl;
    function $bog_doodle_synth_timbre(ink) {
        const { h, s, l } = $bog_doodle_synth_hsl(ink);
        if (s < 0.2 || l < 0.12 || l > 0.92)
            return 0;
        if (h < 15 || h >= 345)
            return 1;
        if (h < 70)
            return 4;
        if (h < 170)
            return 3;
        if (h < 250)
            return 2;
        return 5;
    }
    $.$bog_doodle_synth_timbre = $bog_doodle_synth_timbre;
    function $bog_doodle_synth_ink(stroke) {
        return stroke.ink || $.$bog_doodle_synth_colors[stroke.color]?.ink || '#1f1d1a';
    }
    $.$bog_doodle_synth_ink = $bog_doodle_synth_ink;
    function envelope(ctx, dest, time, attack, peak, hold, release) {
        const gain = ctx.createGain();
        const decay = Math.min(hold, 0.12);
        const sustain = peak * 0.6;
        const fade = time + attack + hold;
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(peak, time + attack);
        gain.gain.linearRampToValueAtTime(sustain, time + attack + decay);
        gain.gain.setValueAtTime(sustain, fade);
        gain.gain.linearRampToValueAtTime(0, fade + release);
        gain.connect(dest);
        return { gain, end: fade + release + 0.03 };
    }
    function osc(ctx, type, freq, dest, time, end, detune = 0) {
        const node = ctx.createOscillator();
        node.type = type;
        node.frequency.setValueAtTime(freq, time);
        node.detune.setValueAtTime(detune, time);
        node.connect(dest);
        node.start(time);
        node.stop(end);
        return node;
    }
    function $bog_doodle_synth_note(ctx, dest, color, freq, time, length, velocity) {
        const level = 0.18 * velocity;
        switch (color) {
            case 1: {
                const env = envelope(ctx, dest, time, 0.004, level * 1.2, Math.min(length, 0.25), 0.4);
                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(freq * 8, time);
                filter.frequency.exponentialRampToValueAtTime(freq * 1.5, time + 0.3);
                filter.connect(env.gain);
                osc(ctx, 'sawtooth', freq, filter, time, env.end);
                return;
            }
            case 2: {
                const env = envelope(ctx, dest, time, Math.min(0.25, length / 2), level * 0.8, length, 0.6);
                osc(ctx, 'triangle', freq, env.gain, time, env.end, -6);
                osc(ctx, 'sine', freq * 2, env.gain, time, env.end, 5);
                return;
            }
            case 3: {
                const env = envelope(ctx, dest, time, 0.003, level * 1.4, 0.05, 0.5);
                osc(ctx, 'sine', freq, env.gain, time, env.end);
                const over = envelope(ctx, dest, time, 0.002, level * 0.4, 0.01, 0.12);
                osc(ctx, 'sine', freq * 4, over.gain, time, over.end);
                return;
            }
            case 4: {
                const env = envelope(ctx, dest, time, 0.01, level * 0.6, length, 0.12);
                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(Math.min(12000, freq * 6), time);
                filter.Q.setValueAtTime(4, time);
                filter.connect(env.gain);
                osc(ctx, 'sawtooth', freq, filter, time, env.end);
                return;
            }
            case 5: {
                const env = envelope(ctx, dest, time, 0.002, level * 1.1, 0.02, 1.6);
                const carrier = osc(ctx, 'sine', freq, env.gain, time, env.end);
                const depth = ctx.createGain();
                depth.gain.setValueAtTime(freq * 2.5, time);
                depth.gain.exponentialRampToValueAtTime(1, time + 1.2);
                depth.connect(carrier.frequency);
                osc(ctx, 'sine', freq * 3.5, depth, time, env.end);
                return;
            }
            default: {
                const env = envelope(ctx, dest, time, 0.005, level * 1.3, Math.min(length, 0.4), 0.8);
                osc(ctx, 'triangle', freq, env.gain, time, env.end);
                osc(ctx, 'sine', freq * 2, env.gain, time, env.end);
            }
        }
    }
    $.$bog_doodle_synth_note = $bog_doodle_synth_note;
    function $bog_doodle_synth_click(ctx, dest, time, accent) {
        const env = envelope(ctx, dest, time, 0.001, accent ? 0.25 : 0.12, 0.005, 0.05);
        osc(ctx, 'square', accent ? 1760 : 1320, env.gain, time, env.end);
    }
    $.$bog_doodle_synth_click = $bog_doodle_synth_click;
    function $bog_doodle_synth_bus(ctx) {
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.6, 0);
        const limit = ctx.createDynamicsCompressor();
        limit.threshold.setValueAtTime(-6, 0);
        limit.knee.setValueAtTime(6, 0);
        limit.ratio.setValueAtTime(12, 0);
        limit.attack.setValueAtTime(0.002, 0);
        limit.release.setValueAtTime(0.15, 0);
        master.connect(limit);
        limit.connect(ctx.destination);
        return master;
    }
    $.$bog_doodle_synth_bus = $bog_doodle_synth_bus;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_doodle_board extends $.$bog_doodle_board {
            view(next) {
                return next ?? { zoom: 1, x: 0, y: 0 };
            }
            size() {
                const rect = this.view_rect();
                const dpr = this.$.$mol_dom_context.devicePixelRatio || 1;
                return {
                    width: Math.max(1, Math.round((rect?.width ?? 0) * dpr)),
                    height: Math.max(1, Math.round((rect?.height ?? 0) * dpr)),
                    dpr,
                };
            }
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            time_down() {
                return this.axis() === 'time_y';
            }
            norm(x, y) {
                return this.time_down() ? { u: 1 - y, v: x } : { u: x, v: y };
            }
            denorm(u, v) {
                return this.time_down() ? { x: v, y: 1 - u } : { x: u, y: v };
            }
            pt(x, y, width, height) {
                const view = this.view_used();
                const { u, v } = this.norm(x, y);
                return { x: (u - view.x) * view.zoom * width, y: (v - view.y) * view.zoom * height };
            }
            to_world(client_x, client_y) {
                const rect = this.rect();
                const view = this.view();
                const raw_x = (client_x - rect.left) / (rect.width || 1);
                const raw_y = (client_y - rect.top) / (rect.height || 1);
                const { x, y } = this.denorm(view.x + raw_x / view.zoom, view.y + raw_y / view.zoom);
                return {
                    x: Math.max(0, Math.min(0.9999, x)),
                    y: Math.max(0, Math.min(1, y)),
                    raw_x,
                    raw_y,
                };
            }
            zoom_min() {
                return 0.4;
            }
            view_clamp(next) {
                const zoom = Math.max(this.zoom_min(), Math.min(8, next.zoom));
                const span = 1 - 1 / zoom;
                const fit = (value) => span < 0 ? span / 2 : Math.max(0, Math.min(span, value));
                return { zoom, x: fit(next.x), y: fit(next.y) };
            }
            zoom_at(factor, raw_x, raw_y) {
                const view = this.view();
                const zoom = Math.max(this.zoom_min(), Math.min(8, view.zoom * factor));
                const u = view.x + raw_x / view.zoom;
                const v = view.y + raw_y / view.zoom;
                this.view(this.view_clamp({ zoom, x: u - raw_x / zoom, y: v - raw_y / zoom }));
            }
            zoom_in() {
                this.zoom_at(1.25, 0.5, 0.5);
            }
            zoom_out() {
                this.zoom_at(0.8, 0.5, 0.5);
            }
            zoom_reset() {
                this.view({ zoom: 1, x: 0, y: 0 });
            }
            zoom_percent() {
                return Math.round(this.view().zoom * 100) + '%';
            }
            pan_by(raw_dx, raw_dy) {
                const view = this.view();
                this.view(this.view_clamp({ ...view, x: view.x - raw_dx / view.zoom, y: view.y - raw_dy / view.zoom }));
            }
            gesture = null;
            touches = new Map();
            draft = [];
            smooth = null;
            loop_path = null;
            drag = null;
            pinch = null;
            hover = null;
            pressure(event) {
                if (event.pointerType === 'pen')
                    return Math.max(0.05, event.pressure || 0.5);
                return 0.5;
            }
            gesture_tool(event) {
                if (event.button === 1 || this.touches.size > 1)
                    return 'pan';
                if (this.pen_only() && event.pointerType === 'touch')
                    return 'pan';
                if (event.button === 2 || (event.buttons & 32))
                    return 'erase';
                return this.tool();
            }
            layer_of(stroke) {
                return stroke.layer || this.layer_default();
            }
            editable(stroke) {
                return this.layer_of(stroke) === this.layer_active() && this.layer_order().includes(this.layer_active());
            }
            pointer_down(event) {
                event.preventDefault();
                try {
                    this.dom_node().setPointerCapture(event.pointerId);
                }
                catch { }
                this.touches.set(event.pointerId, { x: event.clientX, y: event.clientY });
                if (this.touches.size === 2) {
                    this.draft = [];
                    this.gesture = 'pinch';
                    this.pinch = this.pinch_state();
                    this.redraw();
                    return;
                }
                if (this.touches.size > 2)
                    return;
                if (this.blocked()) {
                    this.touches.delete(event.pointerId);
                    this.unblock(event);
                    return;
                }
                const point = this.to_world(event.clientX, event.clientY);
                const gesture = this.gesture_tool(event);
                if (gesture === 'draw') {
                    this.gesture = 'draw';
                    this.smooth = null;
                    this.draft = [];
                    this.draft_add(point.x, point.y, this.pressure(event));
                }
                else if (gesture === 'erase') {
                    this.gesture = 'erase';
                    this.erase_at(point.x, point.y);
                }
                else if (gesture === 'select') {
                    const hit = this.sketch().hits(point.x, point.y, this.hit_radius(), s => this.editable(s));
                    const selected = this.selected();
                    if (hit.some(id => selected.includes(id))) {
                        this.gesture = 'move';
                        this.drag = { x: point.x, y: point.y, dx: 0, dy: 0 };
                    }
                    else if (hit.length) {
                        this.selected([hit[hit.length - 1]]);
                        this.gesture = 'move';
                        this.drag = { x: point.x, y: point.y, dx: 0, dy: 0 };
                    }
                    else {
                        this.gesture = 'select';
                        this.loop_path = [point.x, point.y];
                    }
                }
                else {
                    this.gesture = 'pan';
                }
                this.redraw();
            }
            pointer_move(event) {
                const prev = this.touches.get(event.pointerId);
                const point = this.to_world(event.clientX, event.clientY);
                this.hover = event.pointerType === 'touch' ? null : { x: point.x, y: point.y, erase: Boolean(event.buttons & 32) };
                if (!prev) {
                    this.redraw();
                    return;
                }
                this.touches.set(event.pointerId, { x: event.clientX, y: event.clientY });
                if (this.gesture === 'pinch') {
                    const next = this.pinch_state();
                    const rect = this.rect();
                    if (this.pinch && next) {
                        this.pan_by((next.x - this.pinch.x) / (rect.width || 1), (next.y - this.pinch.y) / (rect.height || 1));
                        const raw = this.to_world(next.x, next.y);
                        this.zoom_at(next.dist / (this.pinch.dist || 1), raw.raw_x, raw.raw_y);
                    }
                    this.pinch = next;
                }
                else if (this.gesture === 'pan') {
                    const rect = this.rect();
                    this.pan_by((event.clientX - prev.x) / (rect.width || 1), (event.clientY - prev.y) / (rect.height || 1));
                }
                else if (this.gesture === 'draw') {
                    const list = event.getCoalescedEvents?.();
                    for (const item of list?.length ? list : [event]) {
                        const at = this.to_world(item.clientX, item.clientY);
                        this.draft_add(at.x, at.y, this.pressure(item));
                    }
                }
                else if (this.gesture === 'erase') {
                    this.erase_at(point.x, point.y);
                }
                else if (this.gesture === 'select' && this.loop_path) {
                    this.loop_path.push(point.x, point.y);
                }
                else if (this.gesture === 'move' && this.drag) {
                    this.drag = { ...this.drag, dx: point.x - this.drag.x, dy: point.y - this.drag.y };
                }
                this.redraw();
            }
            pointer_up(event) {
                if (!this.touches.has(event.pointerId))
                    return;
                this.touches.delete(event.pointerId);
                if (this.gesture === 'pinch') {
                    if (this.touches.size === 0)
                        this.gesture = null;
                    this.redraw();
                    return;
                }
                if (this.gesture === 'draw')
                    this.draft_commit();
                if (this.gesture === 'erase')
                    this.erase_commit();
                if (this.gesture === 'select' && this.loop_path)
                    this.loop_commit(this.loop_path);
                if (this.gesture === 'move' && this.drag && (this.drag.dx || this.drag.dy)) {
                    this.sketch().shift(this.selected(), this.drag.dx, this.drag.dy);
                }
                this.gesture_reset();
            }
            gesture_reset() {
                this.gesture = null;
                this.loop_path = null;
                this.preview(null);
                this.drag = null;
                this.draft = [];
                this.note_hover(null);
                this.redraw();
            }
            pointer_cancel(event) {
                this.touches.delete(event.pointerId);
                this.gesture_reset();
            }
            pointer_leave(event) {
                this.hover = null;
                this.redraw();
            }
            wheel(event) {
                event.preventDefault();
                const point = this.to_world(event.clientX, event.clientY);
                if (event.ctrlKey || event.metaKey) {
                    this.zoom_at(Math.exp(-event.deltaY / 200), point.raw_x, point.raw_y);
                }
                else {
                    const rect = this.rect();
                    this.pan_by(-event.deltaX / (rect.width || 1), -event.deltaY / (rect.height || 1));
                }
            }
            context_menu(event) {
                event.preventDefault();
            }
            pinch_state() {
                const list = [...this.touches.values()];
                if (list.length < 2)
                    return null;
                const [a, b] = list;
                return { dist: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
            }
            world_per_px() {
                const rect = this.rect();
                return 1 / (Math.max(1, Math.min(rect.width, rect.height)) * this.view().zoom);
            }
            hit_radius() {
                return 10 * this.world_per_px();
            }
            erase_radius() {
                return this.eraser() / 2 * this.world_per_px();
            }
            snap_y(y) {
                if (!this.snap())
                    return y;
                const count = this.notes().length;
                return $bog_doodle_scale_row_y($bog_doodle_scale_row(y, count), count);
            }
            draft_add(x, y, p) {
                const prev = this.smooth;
                const k = 0.45;
                const next = prev
                    ? { x: prev.x + (x - prev.x) * k, y: prev.y + (y - prev.y) * k, p: prev.p + (p - prev.p) * k }
                    : { x, y, p };
                this.smooth = next;
                const count = this.draft.length;
                const snapped = this.snap_y(next.y);
                if (count >= 3) {
                    const dx = next.x - this.draft[count - 3];
                    const dy = snapped - this.draft[count - 2];
                    if (dx * dx + dy * dy < 1e-7)
                        return;
                }
                this.draft.push(next.x, snapped, next.p);
                this.note_hover(this.notes()[$bog_doodle_scale_row(snapped, this.notes().length)] ?? null);
            }
            draft_commit() {
                const draft = this.draft;
                if (!draft.length)
                    return;
                const points = $bog_doodle_sketch_simplify(draft, 0.0012 / this.view().zoom);
                const ink = this.ink();
                const size = this.brush();
                this.sketch().add({
                    id: $bog_doodle_sketch_stroke_id(),
                    color: $bog_doodle_synth_timbre(ink),
                    ink,
                    ...size === 1 ? {} : { size },
                    layer: this.layer_active(),
                    points,
                });
            }
            erase_at(x, y) {
                const sketch = this.sketch();
                const next = sketch.erased(x, y, this.erase_radius(), s => this.editable(s), this.preview() ?? sketch.strokes());
                if (next !== (this.preview() ?? sketch.strokes()))
                    this.preview(next);
            }
            preview(next) {
                return next ?? null;
            }
            erase_commit() {
                const next = this.preview();
                if (next)
                    this.sketch().commit(next);
                this.preview(null);
            }
            loop_commit(path) {
                let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
                for (let i = 0; i < path.length; i += 2) {
                    left = Math.min(left, path[i]);
                    right = Math.max(right, path[i]);
                    top = Math.min(top, path[i + 1]);
                    bottom = Math.max(bottom, path[i + 1]);
                }
                const tiny = Math.max(right - left, bottom - top) < this.hit_radius();
                if (tiny) {
                    const hit = this.sketch().hits(path[0], path[1], this.hit_radius(), s => this.editable(s));
                    this.selected(hit.slice(-1));
                    return;
                }
                this.selected(this.sketch().lasso(path, s => this.editable(s)));
            }
            frame = null;
            redraw() {
                if (this.frame)
                    return;
                this.frame = new this.$.$mol_after_frame(() => {
                    this.frame = null;
                    this.present();
                });
            }
            back_image() {
                const uri = this.back();
                if (!uri)
                    return null;
                const image = new this.$.$mol_dom_context.Image;
                image.onload = () => this.redraw();
                image.src = uri;
                return image;
            }
            layer() {
                const doc = this.$.$mol_dom_context.document;
                const canvas = doc.createElement('canvas');
                const { width, height, dpr } = this.size();
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (!ctx)
                    return canvas;
                this.paint_grid(ctx, width, height, dpr);
                this.paint_strokes(ctx, width, height, dpr);
                return canvas;
            }
            view_fixed = null;
            view_used() {
                return this.view_fixed ?? this.view();
            }
            export_canvas() {
                const canvas = this.$.$mol_dom_context.document.createElement('canvas');
                const wide = !this.time_down();
                canvas.width = wide ? 1920 : 1080;
                canvas.height = wide ? 1080 : 1920;
                const ctx = canvas.getContext('2d');
                if (!ctx)
                    return canvas;
                this.view_fixed = { zoom: 1, x: 0, y: 0 };
                try {
                    this.paint_grid(ctx, canvas.width, canvas.height, 2);
                    this.paint_strokes(ctx, canvas.width, canvas.height, 2, true);
                }
                finally {
                    this.view_fixed = null;
                }
                return canvas;
            }
            fill_world(ctx, x1, y1, x2, y2, width, height) {
                const a = this.pt(x1, y1, width, height);
                const b = this.pt(x2, y2, width, height);
                ctx.fillRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(b.x - a.x), Math.abs(b.y - a.y));
            }
            paint_grid(ctx, width, height, dpr) {
                ctx.fillStyle = '#d6d0c2';
                ctx.fillRect(0, 0, width, height);
                ctx.fillStyle = '#fbfaf6';
                this.fill_world(ctx, 0, 0, 1, 1, width, height);
                const image = this.back_image();
                if (image?.complete && image.naturalWidth) {
                    const a = this.pt(0, 1, width, height);
                    const b = this.pt(1, 0, width, height);
                    ctx.globalAlpha = 0.35;
                    ctx.drawImage(image, Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(b.x - a.x), Math.abs(b.y - a.y));
                    ctx.globalAlpha = 1;
                }
                const notes = this.notes();
                const count = notes.length;
                const tonic = notes[0] % 12;
                const zoom = this.view_used().zoom;
                const band = zoom * (this.time_down() ? width : height) / count;
                for (let row = 0; row < count; ++row) {
                    const top = 1 - (row + 1) / count;
                    const bottom = 1 - row / count;
                    if (notes[row] % 12 === tonic) {
                        ctx.fillStyle = '#ece7da';
                        this.fill_world(ctx, 0, top, 1, bottom, width, height);
                    }
                    else if (row % 2) {
                        ctx.fillStyle = '#f5f2ea';
                        this.fill_world(ctx, 0, top, 1, bottom, width, height);
                    }
                    if (band < 18 * dpr)
                        continue;
                    const center = this.pt(0, (top + bottom) / 2, width, height);
                    ctx.fillStyle = '#a39d8e';
                    ctx.font = `${Math.min(12, band / dpr * 0.4) * dpr}px ui-monospace, Menlo, monospace`;
                    if (this.time_down()) {
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'top';
                        ctx.fillText($bog_doodle_scale_name(notes[row]), center.x, Math.max(0, center.y) + 6 * dpr);
                    }
                    else {
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'middle';
                        ctx.fillText($bog_doodle_scale_name(notes[row]), Math.max(0, center.x) + 6 * dpr, center.y);
                    }
                }
                ctx.textAlign = 'left';
                const steps = this.steps();
                const beat = this.beat_steps();
                const bar = this.bar_steps();
                const step_size = zoom * (this.time_down() ? height : width) / steps;
                for (let step = 1; step < steps; ++step) {
                    const strong = step % bar === 0 ? 2 : step % beat === 0 ? 1 : 0;
                    if (!strong && step_size < 6 * dpr)
                        continue;
                    const a = this.pt(step / steps, 0, width, height);
                    const b = this.pt(step / steps, 1, width, height);
                    ctx.strokeStyle = ['#ebe6da', '#d6cfbe', '#b3ab98'][strong];
                    ctx.lineWidth = strong === 2 ? 2 * dpr : dpr;
                    ctx.beginPath();
                    ctx.moveTo(Math.round(a.x) + 0.5, Math.round(a.y) + 0.5);
                    ctx.lineTo(Math.round(b.x) + 0.5, Math.round(b.y) + 0.5);
                    ctx.stroke();
                }
            }
            stroke_width(p, size, dpr) {
                return dpr * Math.sqrt(this.view_used().zoom) * (1.5 + 6 * p) * size;
            }
            paint_path(ctx, points, color, size, width, height, dpr, dx = 0, dy = 0, halo = false) {
                const count = points.length / 3;
                if (!count)
                    return;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                const at = (i) => this.pt(points[i * 3] + dx, points[i * 3 + 1] + dy, width, height);
                const pw = (i) => this.stroke_width(points[i * 3 + 2], size, dpr) + (halo ? 6 * dpr : 0);
                if (count === 1) {
                    const p = at(0);
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, pw(0) / 2 + dpr, 0, Math.PI * 2);
                    ctx.fill();
                    return;
                }
                let start = at(0);
                for (let i = 1; i < count; ++i) {
                    const last = i === count - 1;
                    const here = at(i);
                    const next = last ? here : at(i + 1);
                    const end = last ? here : { x: (here.x + next.x) / 2, y: (here.y + next.y) / 2 };
                    ctx.lineWidth = pw(i);
                    ctx.beginPath();
                    ctx.moveTo(start.x, start.y);
                    if (last)
                        ctx.lineTo(end.x, end.y);
                    else
                        ctx.quadraticCurveTo(here.x, here.y, end.x, end.y);
                    ctx.stroke();
                    start = end;
                }
            }
            ordered() {
                const order = this.layer_order();
                const strokes = this.preview() ?? this.sketch().strokes();
                const list = [];
                for (const id of order) {
                    for (const stroke of strokes)
                        if (this.layer_of(stroke) === id)
                            list.push(stroke);
                }
                return list;
            }
            scratch = null;
            paint_faded(ctx, width, height, alpha, paint) {
                const canvas = this.scratch ?? (this.scratch = this.$.$mol_dom_context.document.createElement('canvas'));
                if (canvas.width !== width)
                    canvas.width = width;
                if (canvas.height !== height)
                    canvas.height = height;
                const temp = canvas.getContext('2d');
                if (!temp)
                    return;
                temp.clearRect(0, 0, width, height);
                paint(temp);
                ctx.globalAlpha = alpha;
                ctx.drawImage(canvas, 0, 0);
                ctx.globalAlpha = 1;
            }
            paint_strokes(ctx, width, height, dpr, all = false) {
                const selected = new Set(all ? [] : this.selected());
                const active = this.layer_active();
                const focus = this.layer_focus() && !all;
                const strokes = this.ordered().filter(stroke => !selected.has(stroke.id));
                for (const id of this.layer_order()) {
                    const list = strokes.filter(stroke => this.layer_of(stroke) === id);
                    if (!list.length)
                        continue;
                    const paint = (target) => {
                        for (const stroke of list) {
                            this.paint_path(target, stroke.points, $bog_doodle_synth_ink(stroke), stroke.size ?? 1, width, height, dpr);
                        }
                    };
                    const alpha = this.layer_alpha(id) * (focus && id !== active ? 0.3 : 1);
                    if (alpha < 1)
                        this.paint_faded(ctx, width, height, alpha, paint);
                    else
                        paint(ctx);
                }
            }
            present() {
                const canvas = this.dom_node();
                const { width, height, dpr } = this.size();
                if (canvas.width !== width)
                    canvas.width = width;
                if (canvas.height !== height)
                    canvas.height = height;
                const ctx = canvas.getContext?.('2d');
                if (!ctx)
                    return;
                ctx.drawImage(this.layer(), 0, 0);
                const picked = new Set(this.selected());
                const selected = this.sketch().strokes().filter(stroke => picked.has(stroke.id));
                const drag = this.drag;
                if (selected.length) {
                    this.paint_faded(ctx, width, height, 0.35, target => {
                        for (const stroke of selected) {
                            this.paint_path(target, stroke.points, '#2f6fd8', stroke.size ?? 1, width, height, dpr, drag?.dx, drag?.dy, true);
                        }
                    });
                    for (const stroke of selected) {
                        this.paint_path(ctx, stroke.points, $bog_doodle_synth_ink(stroke), stroke.size ?? 1, width, height, dpr, drag?.dx, drag?.dy);
                    }
                }
                if (this.draft.length)
                    this.paint_path(ctx, this.draft, this.ink(), this.brush(), width, height, dpr);
                const path = this.loop_path;
                if (path && path.length >= 4) {
                    ctx.setLineDash([6 * dpr, 4 * dpr]);
                    ctx.strokeStyle = '#2f6fd8';
                    ctx.fillStyle = '#2f6fd812';
                    ctx.lineWidth = dpr;
                    ctx.beginPath();
                    for (let i = 0; i < path.length; i += 2) {
                        const at = this.pt(path[i], path[i + 1], width, height);
                        if (i)
                            ctx.lineTo(at.x, at.y);
                        else
                            ctx.moveTo(at.x, at.y);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
                const head = this.playhead();
                if (head !== null && head >= 0) {
                    const a = this.pt(head, 0, width, height);
                    const b = this.pt(head, 1, width, height);
                    ctx.strokeStyle = '#d8452f';
                    ctx.lineWidth = 2 * dpr;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
                this.paint_cursor(ctx, width, height, dpr);
            }
            paint_cursor(ctx, width, height, dpr) {
                const hover = this.hover;
                if (!hover || this.gesture === 'pan' || this.gesture === 'pinch')
                    return;
                const tool = hover.erase || this.gesture === 'erase' ? 'erase' : this.tool();
                const at = this.pt(hover.x, hover.y, width, height);
                if (tool === 'erase') {
                    ctx.strokeStyle = '#1f1d1a88';
                    ctx.lineWidth = dpr;
                    ctx.beginPath();
                    ctx.arc(at.x, at.y, this.eraser() / 2 * dpr, 0, Math.PI * 2);
                    ctx.stroke();
                    return;
                }
                if (tool !== 'draw' || this.gesture)
                    return;
                ctx.strokeStyle = this.ink() + '99';
                ctx.lineWidth = dpr;
                ctx.beginPath();
                ctx.arc(at.x, at.y, Math.max(2 * dpr, this.stroke_width(0.5, this.brush(), dpr) / 2), 0, Math.PI * 2);
                ctx.stroke();
                const notes = this.notes();
                const name = $bog_doodle_scale_name(notes[$bog_doodle_scale_row(this.snap_y(hover.y), notes.length)]);
                ctx.font = `${12 * dpr}px ui-monospace, Menlo, monospace`;
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#1f1d1a';
                ctx.fillText(name, at.x + 10 * dpr, at.y - 6 * dpr);
            }
            animate = null;
            loop() {
                this.present();
                if (!this.playing()) {
                    this.animate = null;
                    return;
                }
                this.animate = new this.$.$mol_after_frame(() => this.loop());
            }
            repaint() {
                this.layer();
                this.selected();
                this.playing();
                this.ink();
                this.brush();
                this.eraser();
                this.redraw();
                return null;
            }
            animating() {
                if (this.playing() && !this.animate)
                    this.animate = new this.$.$mol_after_frame(() => this.loop());
                return null;
            }
            auto() {
                this.repaint();
                this.animating();
            }
            destructor() {
                this.frame?.destructor();
                this.animate?.destructor();
                super.destructor();
            }
        }
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "view", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "preview", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "back_image", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "layer", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "repaint", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_board.prototype, "animating", null);
        $$.$bog_doodle_board = $bog_doodle_board;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bog_doodle_board, {
            flex: {
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            minHeight: '16rem',
            minWidth: 0,
            touchAction: 'none',
            userSelect: 'none',
            cursor: 'crosshair',
            border: {
                radius: $mol_gap.round,
            },
            '@': {
                bog_doodle_board_tool: {
                    select: {
                        cursor: 'default',
                    },
                    pan: {
                        cursor: 'grab',
                    },
                    erase: {
                        cursor: 'cell',
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		gap_before(){
			return 0;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		gap_after(){
			return 0;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		rows(){
			return [
				(this.Gap_before()), 
				(this.Empty()), 
				(this.Gap_after())
			];
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0.1;
		}
		sub(){
			return (this.rows());
		}
		item_height_min(id){
			return 1;
		}
		item_width_min(id){
			return 1;
		}
		view_window_shift(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));
	($mol_mem(($.$mol_list.prototype), "view_window_shift"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * The list of rows with lazy/virtual rendering support based on `minimal_height` of rows.
         * `mol_list` should contain only components that inherits `mol_view`. You should not place raw strings or numbers in list.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_list_demo
         */
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                const next = (rows.length === 0) ? [this.Empty()] : rows;
                const prev = $mol_mem_cached(() => this.sub());
                const [start, end] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                if (prev && $mol_mem_cached(() => prev[start] !== next[start])) {
                    const index = $mol_mem_cached(() => next.indexOf(prev[start])) ?? -1;
                    if (index >= 0)
                        this.view_window_shift(index - start);
                }
                return next;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            _view_window_last = [0, 0];
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? this._view_window_last;
                const shift = this.view_window_shift();
                this.view_window_shift(0);
                min += shift;
                max += shift;
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                // change nothing when already covers all limits
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                // jumps when fully over limits
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = this.item_height_min(min);
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                // force recalc min when overlapse top limit
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                // force recalc max when overlapse bottom limit
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                // extend min to cover top limit
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= this.item_height_min(min2);
                }
                // extend max to cover bottom limit
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += this.item_height_min(max2);
                    ++max2;
                }
                return [min2, max2];
            }
            item_height_min(index) {
                try {
                    return this.sub()[index]?.minimal_height() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            row_width_min(index) {
                try {
                    return this.sub()[index]?.minimal_width() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            gap_before() {
                let gap = 0;
                const skipped = this.view_window()[0];
                for (let i = 0; i < skipped; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            gap_after() {
                let gap = 0;
                const from = this.view_window()[1];
                const to = this.sub().length;
                for (let i = from; i < to; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this._view_window_last = this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                let height = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    height += this.item_height_min(i);
                return height;
            }
            minimal_width() {
                let width = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    width = Math.max(width, this.item_width_min(i));
                return width;
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_width", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\t/* will-change: contents; */\n}\n\n[mol_list]:where([mol_view_error]) {\n\tmin-height: 1.5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_tick) = class $mol_icon_tick extends ($.$mol_icon) {
		path(){
			return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
		}
	};


;
"use strict";


;
	($.$mol_check_box) = class $mol_check_box extends ($.$mol_check) {
		Icon(){
			const obj = new this.$.$mol_icon_tick();
			return obj;
		}
	};
	($mol_mem(($.$mol_check_box.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_labeler) = class $mol_labeler extends ($.$mol_list) {
		label(){
			return [(this.title())];
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (32);
			(obj.sub) = () => ((this.label()));
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (24);
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_labeler.prototype), "Label"));
	($mol_mem(($.$mol_labeler.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: 0;\n\tpadding-top: .5rem;\n\tpadding-inline: .75rem;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n\tmin-height: 2.5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_eye) = class $mol_icon_eye extends ($.$mol_icon) {
		path(){
			return "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_arrow_up) = class $mol_icon_arrow_up extends ($.$mol_icon) {
		path(){
			return "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_arrow_down) = class $mol_icon_arrow_down extends ($.$mol_icon) {
		path(){
			return "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z";
		}
	};


;
"use strict";


;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_dimmer) = class $mol_dimmer extends ($.$mol_paragraph) {
		parts(){
			return [];
		}
		string(id){
			return "";
		}
		haystack(){
			return "";
		}
		needle(){
			return "";
		}
		sub(){
			return (this.parts());
		}
		Low(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
		High(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_dimmer.prototype), "Low"));
	($mol_mem_key(($.$mol_dimmer.prototype), "High"));


;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    let x = /x/[Symbol.matchAll];
    /** Type safe reguar expression builder */
    class $mol_regexp extends RegExp {
        groups;
        /** Prefer to use $mol_regexp.from */
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        /** Parses input and returns found capture groups or null */
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        /** Splits string by regexp edges */
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        /** Makes regexp that greedy repeats this pattern with delimiter */
        static separated(chunk, sep) {
            return $mol_regexp.from([
                $mol_regexp.repeat_greedy([[chunk], sep], 0),
                chunk,
            ]);
        }
        /** Makes regexp that non-greedy repeats this pattern from min to max count */
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        /** Makes regexp that greedy repeats this pattern from min to max count */
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        /** Makes regexp that match any of options */
        static vary(sources, flags = 'gsu') {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
        }
        /** Makes regexp that allow absent of this pattern */
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        /** Makes regexp that look ahead for pattern */
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        /** Makes regexp that look ahead for pattern */
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        /** Converts some js values to regexp */
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        /** Makes regexp which includes only unicode category */
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        /** Makes regexp which excludes unicode category */
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Output text with dimmed mismatched substrings.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_dimmer_demo
         */
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_nav) = class $mol_nav extends ($.$mol_plugin) {
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		cycle(next){
			if(next !== undefined) return next;
			return false;
		}
		mod_ctrl(){
			return false;
		}
		mod_shift(){
			return false;
		}
		mod_alt(){
			return false;
		}
		keys_x(next){
			if(next !== undefined) return next;
			return [];
		}
		keys_y(next){
			if(next !== undefined) return next;
			return [];
		}
		current_x(next){
			if(next !== undefined) return next;
			return null;
		}
		current_y(next){
			if(next !== undefined) return next;
			return null;
		}
		event_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_left(next){
			if(next !== undefined) return next;
			return null;
		}
		event_right(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.event_key(next))};
		}
	};
	($mol_mem(($.$mol_nav.prototype), "event_key"));
	($mol_mem(($.$mol_nav.prototype), "cycle"));
	($mol_mem(($.$mol_nav.prototype), "keys_x"));
	($mol_mem(($.$mol_nav.prototype), "keys_y"));
	($mol_mem(($.$mol_nav.prototype), "current_x"));
	($mol_mem(($.$mol_nav.prototype), "current_y"));
	($mol_mem(($.$mol_nav.prototype), "event_up"));
	($mol_mem(($.$mol_nav.prototype), "event_down"));
	($mol_mem(($.$mol_nav.prototype), "event_left"));
	($mol_mem(($.$mol_nav.prototype), "event_right"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Plugin which can navigate in list of items
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_nav_demo
         */
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_close) = class $mol_icon_close extends ($.$mol_icon) {
		path(){
			return "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
		}
	};


;
"use strict";


;
	($.$mol_search) = class $mol_search extends ($.$mol_pop) {
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"escape": (next) => (this.clear(next))});
			return obj;
		}
		nav_components(){
			return [];
		}
		nav_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.nav_focused(next)));
			return obj;
		}
		suggests_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		query(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_search_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		keyboard(){
			return "search";
		}
		enter(){
			return "search";
		}
		bring(){
			return (this.Query().bring());
		}
		Query(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.query(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			(obj.keyboard) = () => ((this.keyboard()));
			(obj.enter) = () => ((this.enter()));
			return obj;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_search_Clear_hint")));
			(obj.enabled) = () => ((this.enabled()));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		anchor_content(){
			return [(this.Query()), (this.Clear())];
		}
		menu_items(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_items()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		suggest_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		suggest_label(id){
			return "";
		}
		Suggest_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.suggest_label(id)));
			(obj.needle) = () => ((this.query()));
			return obj;
		}
		suggest_content(id){
			return [(this.Suggest_label(id))];
		}
		suggests(){
			return [];
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Hotkey()), 
				(this.Nav())
			];
		}
		showed(next){
			return (this.suggests_showed(next));
		}
		align_hor(){
			return "right";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.anchor_content()));
			return obj;
		}
		bubble_content(){
			return [(this.Bubble_pane())];
		}
		Suggest(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.suggest_select(id, next)));
			(obj.sub) = () => ((this.suggest_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$mol_search.prototype), "clear"));
	($mol_mem(($.$mol_search.prototype), "Hotkey"));
	($mol_mem(($.$mol_search.prototype), "nav_focused"));
	($mol_mem(($.$mol_search.prototype), "Nav"));
	($mol_mem(($.$mol_search.prototype), "suggests_showed"));
	($mol_mem(($.$mol_search.prototype), "query"));
	($mol_mem(($.$mol_search.prototype), "submit"));
	($mol_mem(($.$mol_search.prototype), "Query"));
	($mol_mem(($.$mol_search.prototype), "Clear_icon"));
	($mol_mem(($.$mol_search.prototype), "Clear"));
	($mol_mem(($.$mol_search.prototype), "Menu"));
	($mol_mem(($.$mol_search.prototype), "Bubble_pane"));
	($mol_mem_key(($.$mol_search.prototype), "suggest_select"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest_label"));
	($mol_mem(($.$mol_search.prototype), "Anchor"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Search input with suggest and clear button.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_search_demo
         */
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: start;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_dots_vertical) = class $mol_icon_dots_vertical extends ($.$mol_icon) {
		path(){
			return "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";
		}
	};


;
"use strict";


;
	($.$mol_select) = class $mol_select extends ($.$mol_pick) {
		enabled(){
			return true;
		}
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		option_hint(id){
			return null;
		}
		option_label(id){
			return "";
		}
		filter_pattern(next){
			if(next !== undefined) return next;
			return "";
		}
		Option_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.option_label(id)));
			(obj.needle) = () => ((this.filter_pattern()));
			return obj;
		}
		option_content(id){
			return [(this.Option_label(id))];
		}
		no_options_message(){
			return (this.$.$mol_locale.text("$mol_select_no_options_message"));
		}
		nav_components(){
			return [];
		}
		option_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		nav_cycle(next){
			if(next !== undefined) return next;
			return true;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.option_focused(next)));
			(obj.cycle) = (next) => ((this.nav_cycle(next)));
			return obj;
		}
		menu_content(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_content()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		filter_hint(){
			return (this.$.$mol_locale.text("$mol_select_filter_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		dictionary(next){
			if(next !== undefined) return next;
			return {};
		}
		options(){
			return [];
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		option_label_default(){
			return "";
		}
		Option_row(id){
			const obj = new this.$.$mol_button_minor();
			(obj.enabled) = () => ((this.enabled()));
			(obj.event_click) = (next) => ((this.event_select(id, next)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.sub) = () => ((this.option_content(id)));
			return obj;
		}
		No_options(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.no_options_message())]);
			return obj;
		}
		plugins(){
			return [...(super.plugins()), (this.Nav())];
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_select_hint"));
		}
		bubble_content(){
			return [(this.Filter()), (this.Bubble_pane())];
		}
		Filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.filter_pattern(next)));
			(obj.hint) = () => ((this.filter_hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		Trigger_icon(){
			const obj = new this.$.$mol_icon_dots_vertical();
			return obj;
		}
		trigger_enabled(){
			return (this.enabled());
		}
	};
	($mol_mem_key(($.$mol_select.prototype), "event_select"));
	($mol_mem(($.$mol_select.prototype), "filter_pattern"));
	($mol_mem_key(($.$mol_select.prototype), "Option_label"));
	($mol_mem(($.$mol_select.prototype), "option_focused"));
	($mol_mem(($.$mol_select.prototype), "nav_cycle"));
	($mol_mem(($.$mol_select.prototype), "Nav"));
	($mol_mem(($.$mol_select.prototype), "Menu"));
	($mol_mem(($.$mol_select.prototype), "Bubble_pane"));
	($mol_mem(($.$mol_select.prototype), "submit"));
	($mol_mem(($.$mol_select.prototype), "dictionary"));
	($mol_mem(($.$mol_select.prototype), "value"));
	($mol_mem_key(($.$mol_select.prototype), "Option_row"));
	($mol_mem(($.$mol_select.prototype), "No_options"));
	($mol_mem(($.$mol_select.prototype), "Filter"));
	($mol_mem(($.$mol_select.prototype), "Trigger_icon"));


;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Allow user to select value from various options and displays current value.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_select_demo_colors
         */
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_hint(id) {
                return id;
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    ...this.trigger_enabled() ? [this.Trigger_icon()] : [],
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: start;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: start;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: start;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-inline-end: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-inline-end: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * List of checkboxes
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_list_demo
         */
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Buttons which switching the state
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_switch_demo
         */
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_menu) = class $mol_icon_menu extends ($.$mol_icon) {
		path(){
			return "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_menu_down) = class $mol_icon_menu_down extends ($.$mol_icon) {
		path(){
			return "M7,10L12,15L17,10H7Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_menu_down_outline) = class $mol_icon_menu_down_outline extends ($.$mol_icon) {
		path(){
			return "M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_menu_up) = class $mol_icon_menu_up extends ($.$mol_icon) {
		path(){
			return "M7,15L12,10L17,15H7Z";
		}
	};


;
"use strict";


;
	($.$mol_icon_menu_up_outline) = class $mol_icon_menu_up_outline extends ($.$mol_icon) {
		path(){
			return "M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z";
		}
	};


;
"use strict";


;
	($.$mol_number) = class $mol_number extends ($.$mol_view) {
		precision(){
			return 0;
		}
		event_dec(next){
			if(next !== undefined) return next;
			return null;
		}
		event_inc(next){
			if(next !== undefined) return next;
			return null;
		}
		event_dec_boost(next){
			if(next !== undefined) return next;
			return null;
		}
		event_inc_boost(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({
				"down": (next) => (this.event_dec(next)), 
				"up": (next) => (this.event_inc(next)), 
				"pageDown": (next) => (this.event_dec_boost(next)), 
				"pageUp": (next) => (this.event_inc_boost(next))
			});
			return obj;
		}
		type(){
			return "text";
		}
		value_string(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return " ";
		}
		string_enabled(){
			return (this.enabled());
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		selection(next){
			if(next !== undefined) return next;
			return [];
		}
		String(){
			const obj = new this.$.$mol_string();
			(obj.type) = () => ((this.type()));
			(obj.keyboard) = () => ("decimal");
			(obj.value) = (next) => ((this.value_string(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.enabled) = () => ((this.string_enabled()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.selection) = (next) => ((this.selection(next)));
			return obj;
		}
		dec_enabled(){
			return (this.enabled());
		}
		dec_icon(){
			const obj = new this.$.$mol_icon_menu_down_outline();
			return obj;
		}
		Dec(){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_dec(next)));
			(obj.enabled) = () => ((this.dec_enabled()));
			(obj.sub) = () => ([(this.dec_icon())]);
			return obj;
		}
		inc_enabled(){
			return (this.enabled());
		}
		inc_icon(){
			const obj = new this.$.$mol_icon_menu_up_outline();
			return obj;
		}
		Inc(){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_inc(next)));
			(obj.enabled) = () => ((this.inc_enabled()));
			(obj.sub) = () => ([(this.inc_icon())]);
			return obj;
		}
		precision_view(){
			return (this.precision());
		}
		precision_change(){
			return (this.precision());
		}
		boost(){
			return 10;
		}
		value_min(){
			return -Infinity;
		}
		value_max(){
			return +Infinity;
		}
		value(next){
			if(next !== undefined) return next;
			return +NaN;
		}
		enabled(){
			return true;
		}
		plugins(){
			return [(this.Hotkey())];
		}
		sub(){
			return [
				(this.String()), 
				(this.Dec()), 
				(this.Inc())
			];
		}
	};
	($mol_mem(($.$mol_number.prototype), "event_dec"));
	($mol_mem(($.$mol_number.prototype), "event_inc"));
	($mol_mem(($.$mol_number.prototype), "event_dec_boost"));
	($mol_mem(($.$mol_number.prototype), "event_inc_boost"));
	($mol_mem(($.$mol_number.prototype), "Hotkey"));
	($mol_mem(($.$mol_number.prototype), "value_string"));
	($mol_mem(($.$mol_number.prototype), "submit"));
	($mol_mem(($.$mol_number.prototype), "selection"));
	($mol_mem(($.$mol_number.prototype), "String"));
	($mol_mem(($.$mol_number.prototype), "dec_icon"));
	($mol_mem(($.$mol_number.prototype), "Dec"));
	($mol_mem(($.$mol_number.prototype), "inc_icon"));
	($mol_mem(($.$mol_number.prototype), "Inc"));
	($mol_mem(($.$mol_number.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Component for entering, incrementing and decrementing numeric values.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_number_demo
         */
        class $mol_number extends $.$mol_number {
            sub() {
                return [
                    this.String(),
                    ...this.dec_enabled() ? [this.Dec()] : [],
                    ...this.inc_enabled() ? [this.Inc()] : [],
                ];
            }
            value_limited(val) {
                if (Number.isNaN(val))
                    return this.value(val);
                if (val === undefined)
                    return this.value();
                const min = this.value_min();
                const max = this.value_max();
                if (val < min)
                    return this.value(min);
                if (val > max)
                    return this.value(max);
                return this.value(val);
            }
            event_dec(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change());
                next?.preventDefault();
            }
            precision_change() {
                return this.precision() || 1;
            }
            event_inc(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change());
                next?.preventDefault();
            }
            event_dec_boost(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change() * this.boost());
                next?.preventDefault();
            }
            event_inc_boost(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change() * this.boost());
                next?.preventDefault();
            }
            round(val) {
                if (Number.isNaN(val))
                    return '';
                if (val === 0)
                    return '0';
                if (!val)
                    return '';
                const precision_view = this.precision_view();
                if (precision_view === 0)
                    return String(val);
                if (precision_view >= 1) {
                    return (val / precision_view).toFixed();
                }
                else {
                    const fixed_number = Math.log10(1 / precision_view);
                    return val.toFixed(Math.ceil(fixed_number));
                }
            }
            value_string(next) {
                // Вытягиваем value
                // Если кто-то поменяет из вне value, value_string надо обновить
                const current = this.round(this.value_limited());
                if (next === undefined)
                    return current;
                const precision = this.precision_view();
                // Точку в конце поставить нельзя, если precision_view целое число > 0
                if (precision > 0 && precision - Math.floor(precision) === 0)
                    next = next.replace(/[.,]/g, '');
                // Запятые меняем на точки, удаляем не-цифры и не-точки и лишние ноли в начале целой части.
                // Минус получится ввести только в начале.
                next = (this.value_min() < 0 && next.startsWith('-') ? '-' : '')
                    + next.replace(/,/g, '.').replace(/[^\d\.]/g, '').replace(/^0{2,}/, '0');
                let dot_pos = next.indexOf('.');
                if (dot_pos !== -1) {
                    const prev = $mol_wire_probe(() => this.value_string()) ?? '';
                    const dot_pos_prev = prev.indexOf('.');
                    // Определяем где относительно предыдущей точки юзер поставил новую
                    if (dot_pos_prev === dot_pos)
                        dot_pos = next.lastIndexOf('.');
                    // Из частей до и после новой точки старую точку удаляем
                    const frac = next.slice(dot_pos + 1).replace(/\./g, '');
                    // Если точка идет первой, перед ней пишем 0, что бы форматирование выглядело нормально в mask
                    next = (next.slice(0, dot_pos) || '0').replace(/\./g, '') + '.' + frac;
                }
                // Оставляем старое значение в value есть сочетание, приводящие к NaN, например -.
                if (Number.isNaN(Number(next)))
                    return next;
                if (next.endsWith('.'))
                    return next;
                if (next.endsWith('-'))
                    return next;
                // Если пустая строка - сетим NaN
                // Применяем округления.
                this.value_limited(Number(next || Number.NaN));
                // Возвращаем все-равно не нормализованное значение
                // Иначе нельзя ввести будет 10, если min/max 5..10
                return next;
            }
            dec_enabled() {
                return this.enabled() && (!((this.value() || 0) <= this.value_min()));
            }
            inc_enabled() {
                return this.enabled() && (!((this.value() || 0) >= this.value_max()));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "value_string", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "dec_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "inc_enabled", null);
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_upload) = class $mol_icon_upload extends ($.$mol_icon) {
		path(){
			return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
		}
	};


;
"use strict";


;
	($.$mol_button_open) = class $mol_button_open extends ($.$mol_button_minor) {
		Icon(){
			const obj = new this.$.$mol_icon_upload();
			return obj;
		}
		files(next){
			if(next !== undefined) return next;
			return [];
		}
		files_handled(next){
			return (this.files(next));
		}
		accept(){
			return "";
		}
		multiple(){
			return true;
		}
		Native(){
			const obj = new this.$.$mol_button_open_native();
			(obj.files) = (next) => ((this.files_handled(next)));
			(obj.accept) = () => ((this.accept()));
			(obj.multiple) = () => ((this.multiple()));
			return obj;
		}
		sub(){
			return [(this.Icon()), (this.Native())];
		}
	};
	($mol_mem(($.$mol_button_open.prototype), "Icon"));
	($mol_mem(($.$mol_button_open.prototype), "files"));
	($mol_mem(($.$mol_button_open.prototype), "Native"));
	($.$mol_button_open_native) = class $mol_button_open_native extends ($.$mol_view) {
		accept(){
			return "";
		}
		multiple(){
			return true;
		}
		picked(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "input";
		}
		files(next){
			if(next !== undefined) return next;
			return [];
		}
		attr(){
			return {
				"type": "file", 
				"accept": (this.accept()), 
				"multiple": (this.multiple())
			};
		}
		event(){
			return {"change": (next) => (this.picked(next))};
		}
	};
	($mol_mem(($.$mol_button_open_native.prototype), "picked"));
	($mol_mem(($.$mol_button_open_native.prototype), "files"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open extends $.$mol_button_open {
            files_handled(next) {
                try {
                    const files = this.files(next);
                    this.status([null]);
                    return files;
                }
                catch (error) {
                    // Calling actions from catch section, if throwing promise breaks idempotency
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
        }
        $$.$mol_button_open = $mol_button_open;
        /**
         * File open button
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
         */
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                const files = this.dom_node().files;
                if (!files || !files.length)
                    return;
                this.files([...files]);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
// @ts-ignore
var $node = $node || {};

;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));

;
	($.$mol_icon_clipboard) = class $mol_icon_clipboard extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3";
		}
	};


;
"use strict";


;
	($.$mol_icon_clipboard_outline) = class $mol_icon_clipboard_outline extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z";
		}
	};


;
"use strict";


;
	($.$mol_button_copy) = class $mol_button_copy extends ($.$mol_button_minor) {
		text(){
			return (this.title());
		}
		text_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.text())], {"type": "text/plain"});
			return obj;
		}
		html(){
			return "";
		}
		html_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.html())], {"type": "text/html"});
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_icon_clipboard_outline();
			return obj;
		}
		title(){
			return "";
		}
		blobs(){
			return [(this.text_blob()), (this.html_blob())];
		}
		data(){
			return {};
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_copy.prototype), "text_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "html_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Button copy text() value to clipboard
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
         */
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.writeText?.(this.text());
                cb.write?.(this.attachments());
                if (cb.writeText === undefined && cb.write === undefined) {
                    throw new Error("doesn't support copy to clipoard");
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_stack) = class $mol_stack extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_text_code_token) = class $mol_text_code_token extends ($.$mol_dimmer) {
		type(){
			return "";
		}
		attr(){
			return {...(super.attr()), "mol_text_code_token_type": (this.type())};
		}
	};
	($.$mol_text_code_token_link) = class $mol_text_code_token_link extends ($.$mol_text_code_token) {
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		type(){
			return "code-link";
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri()), 
				"target": "_blank"
			};
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code_line) = class $mol_text_code_line extends ($.$mol_paragraph) {
		numb(){
			return 0;
		}
		token_type(id){
			return "";
		}
		token_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		token_uri(id){
			return "";
		}
		text(){
			return "";
		}
		minimal_height(){
			return 24;
		}
		numb_showed(){
			return true;
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		Numb(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.numb())]);
			return obj;
		}
		Token(id){
			const obj = new this.$.$mol_text_code_token();
			(obj.type) = () => ((this.token_type(id)));
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			return obj;
		}
		Token_link(id){
			const obj = new this.$.$mol_text_code_token_link();
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			(obj.uri) = () => ((this.token_uri(id)));
			return obj;
		}
		find_pos(id){
			return null;
		}
	};
	($mol_mem(($.$mol_text_code_line.prototype), "Numb"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token_link"));


;
"use strict";
var $;
(function ($) {
    /** Creates lexer by dictionary of lexems. Lexem that started first wins. Then lexem that declared earlier wins. Use regexp capture to take parts of token. */
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [prefix], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'spoiler': /^((?:(?:[\?] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?: |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        // 'remark' : /(\()(.+?)(\))/ ,
        // 'quote' : /(")(.+?)(")/ ,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[[^\[\]]*?\][^\[\]]*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)|- \\(?!\\).*|(?<=^| )#!? .*/,
        'code-string': /(?:".*?"|'.*?'|`.*?`| ?\\\\.+?\\\\|\/.+?\/[dygimsu]*(?!\p{Letter})|[ \t]*\\[^\n]*)/u,
        'code-number': /[+-]?(?:\d*\.)?\d+(\uFE0F.|\w*)/,
        'code-call': /\.?\w+(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?<=\.|::|->)[a-z][\w-]*|(?<=[, \t] |\t)[\w-]+\??:(?!\/\/|:))/,
        'code-keyword': /(?<=^|\t|[ )(}{=] )((throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|return|async|await|yield|try|catch|break|continue|get|set|public|private|protected|void|int|float|ref)( |$|;))+/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /(?<=^|  |\t)@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_line extends $.$mol_text_code_line {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    // @FIXME: this logic compatible only with `string`
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                const content = this.tokens(path).map((t, i) => this.Token([...path, i]));
                return content.length ? content : ['\n'];
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_token_pos", null);
        $$.$mol_text_code_line = $mol_text_code_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_line, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'end',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    inlineStart: '-4rem',
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code) = class $mol_text_code extends ($.$mol_stack) {
		sidebar_showed(){
			return false;
		}
		render_visible_only(){
			return false;
		}
		row_numb(id){
			return 0;
		}
		row_theme(id){
			return "";
		}
		row_text(id){
			return "";
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		highlight(){
			return "";
		}
		Row(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => ((this.sidebar_showed()));
			(obj.numb) = () => ((this.row_numb(id)));
			(obj.theme) = () => ((this.row_theme(id)));
			(obj.text) = () => ((this.row_text(id)));
			(obj.syntax) = () => ((this.syntax()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		rows(){
			return [(this.Row("0"))];
		}
		Rows(){
			const obj = new this.$.$mol_list();
			(obj.render_visible_only) = () => ((this.render_visible_only()));
			(obj.rows) = () => ((this.rows()));
			return obj;
		}
		text_export(){
			return "";
		}
		Copy(){
			const obj = new this.$.$mol_button_copy();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_code_Copy_hint")));
			(obj.text) = () => ((this.text_export()));
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_text_code_sidebar_showed": (this.sidebar_showed())};
		}
		text(){
			return "";
		}
		text_lines(){
			return [];
		}
		find_pos(id){
			return null;
		}
		uri_base(){
			return "";
		}
		row_themes(){
			return [];
		}
		sub(){
			return [(this.Rows()), (this.Copy())];
		}
	};
	($mol_mem_key(($.$mol_text_code.prototype), "Row"));
	($mol_mem(($.$mol_text_code.prototype), "Rows"));
	($mol_mem(($.$mol_text_code.prototype), "Copy"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Code visualizer.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_text_code_demo
         */
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return (this.text() ?? '').split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
            row_theme(row) {
                return this.row_themes()[row - 1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            Rows: {
                padding: $mol_gap.text,
                minWidth: 0,
            },
            Row: {
                font: {
                    family: 'inherit',
                },
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_line: {
                            margin: {
                                inlineStart: '1.75rem',
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_float) = class $mol_float extends ($.$mol_view) {
		style(){
			return {...(super.style()), "minHeight": "auto"};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";


;
	($.$mol_check_expand) = class $mol_check_expand extends ($.$mol_check) {
		level_style(){
			return "0px";
		}
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return false;
		}
		Icon(){
			const obj = new this.$.$mol_icon_chevron();
			return obj;
		}
		level(){
			return 0;
		}
		style(){
			return {...(super.style()), "paddingLeft": (this.level_style())};
		}
		checked(next){
			return (this.expanded(next));
		}
		enabled(){
			return (this.expandable());
		}
	};
	($mol_mem(($.$mol_check_expand.prototype), "expanded"));
	($mol_mem(($.$mol_check_expand.prototype), "Icon"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Expander for trees, lists, etc
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_expand_demo
         */
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin-inline-start: -0.375rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-inline-start: 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_grid) = class $mol_grid extends ($.$mol_view) {
		rows(){
			return [];
		}
		Table(){
			const obj = new this.$.$mol_grid_table();
			(obj.sub) = () => ((this.rows()));
			return obj;
		}
		head_cells(){
			return [];
		}
		cells(id){
			return [];
		}
		cell_content(id){
			return [];
		}
		cell_content_text(id){
			return (this.cell_content(id));
		}
		cell_content_number(id){
			return (this.cell_content(id));
		}
		col_head_content(id){
			return [];
		}
		cell_level(id){
			return 0;
		}
		cell_expanded(id, next){
			if(next !== undefined) return next;
			return false;
		}
		needle(){
			return "";
		}
		cell_value(id){
			return "";
		}
		Cell_dimmer(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.needle()));
			(obj.haystack) = () => ((this.cell_value(id)));
			return obj;
		}
		row_height(){
			return 32;
		}
		row_ids(){
			return [];
		}
		row_id(id){
			return null;
		}
		col_ids(){
			return [];
		}
		records(){
			return {};
		}
		record(id){
			return null;
		}
		hierarchy(){
			return null;
		}
		hierarchy_col(){
			return "";
		}
		minimal_width(){
			return 0;
		}
		sub(){
			return [(this.Head()), (this.Table())];
		}
		Head(){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.head_cells()));
			return obj;
		}
		Row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.minimal_height) = () => ((this.row_height()));
			(obj.minimal_width) = () => ((this.minimal_width()));
			(obj.cells) = () => ((this.cells(id)));
			return obj;
		}
		Cell(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		cell(id){
			return null;
		}
		Cell_text(id){
			const obj = new this.$.$mol_grid_cell();
			(obj.sub) = () => ((this.cell_content_text(id)));
			return obj;
		}
		Cell_number(id){
			const obj = new this.$.$mol_grid_number();
			(obj.sub) = () => ((this.cell_content_number(id)));
			return obj;
		}
		Col_head(id){
			const obj = new this.$.$mol_float();
			(obj.dom_name) = () => ("th");
			(obj.sub) = () => ((this.col_head_content(id)));
			return obj;
		}
		Cell_branch(id){
			const obj = new this.$.$mol_check_expand();
			(obj.level) = () => ((this.cell_level(id)));
			(obj.label) = () => ((this.cell_content(id)));
			(obj.expanded) = (next) => ((this.cell_expanded(id, next)));
			return obj;
		}
		Cell_content(id){
			return [(this.Cell_dimmer(id))];
		}
	};
	($mol_mem(($.$mol_grid.prototype), "Table"));
	($mol_mem_key(($.$mol_grid.prototype), "cell_expanded"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_dimmer"));
	($mol_mem(($.$mol_grid.prototype), "Head"));
	($mol_mem_key(($.$mol_grid.prototype), "Row"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_text"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_number"));
	($mol_mem_key(($.$mol_grid.prototype), "Col_head"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_branch"));
	($.$mol_grid_table) = class $mol_grid_table extends ($.$mol_list) {};
	($.$mol_grid_row) = class $mol_grid_row extends ($.$mol_view) {
		cells(){
			return [];
		}
		sub(){
			return (this.cells());
		}
	};
	($.$mol_grid_cell) = class $mol_grid_cell extends ($.$mol_view) {
		minimal_height(){
			return 40;
		}
	};
	($.$mol_grid_number) = class $mol_grid_number extends ($.$mol_grid_cell) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
            sub() {
                this.head_cells();
                this.rows();
                return super.sub();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 2px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 2px 0 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 2px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: end;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		uri_unsafe(){
			return (this.uri_toggle());
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_unsafe()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";
var $;
(function ($) {
    function $mol_dom_safe_uri(uri) {
        return uri.replace(/^(?=\w+script+:)/, 'about:blank#');
    }
    $.$mol_dom_safe_uri = $mol_dom_safe_uri;
    function $mol_dom_safe_attr(val) {
        return val;
    }
    $.$mol_dom_safe_attr = $mol_dom_safe_attr;
    $.$mol_dom_safe_rules = {
        // defaults
        '': { id: $mol_dom_safe_attr },
        // special
        a: { href: $mol_dom_safe_uri },
        img: { src: $mol_dom_safe_uri },
        object: { src: $mol_dom_safe_uri },
        // blocks
        div: {},
        p: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        blockquote: {},
        pre: {},
        ul: {},
        ol: {},
        li: {},
        details: {},
        section: {},
        summary: {},
        hr: {},
        table: {},
        tr: {},
        td: {},
        // inlines
        span: {},
        strong: {},
        em: {},
        br: {},
        ins: {},
        del: {},
        code: {},
    };
    function $mol_dom_safe(nodes) {
        const res = [];
        for (const node of nodes) {
            if (node.nodeType === node.TEXT_NODE) {
                res.push(node);
                continue;
            }
            if (node.nodeType === node.ELEMENT_NODE) {
                const kids = this.$mol_dom_safe([...node.childNodes]);
                const allowed = this.$mol_dom_safe_rules[node.localName];
                if (!allowed) {
                    res.push(...kids);
                    continue;
                }
                for (const attr of [...node.attributes]) {
                    const proc = allowed[attr.localName] ?? this.$mol_dom_safe_rules[''][attr.localName];
                    if (proc)
                        attr.nodeValue = proc(attr.nodeValue);
                    else
                        node.removeAttribute(attr.nodeName);
                }
                $mol_dom_render_children(node, kids);
                res.push(node);
                continue;
            }
        }
        return res;
    }
    $.$mol_dom_safe = $mol_dom_safe;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Dynamic hyperlink. It can add, change or remove parameters. A link that leads to the current page has [mol_link_current] attribute set to true.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_link_demo
         */
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    if (error instanceof Error)
                        return '💥' + error.message;
                    return '';
                }
            }
            uri_unsafe() {
                return $mol_dom_safe_uri(super.uri_unsafe());
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        minHeight: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_image) = class $mol_image extends ($.$mol_view) {
		uri(){
			return "";
		}
		title(){
			return "";
		}
		loading(){
			return "lazy";
		}
		decoding(){
			return "async";
		}
		cors(){
			return null;
		}
		natural_width(){
			return 0;
		}
		natural_height(){
			return 0;
		}
		load(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "img";
		}
		attr(){
			return {
				...(super.attr()), 
				"src": (this.uri()), 
				"title": (this.hint()), 
				"alt": (this.title()), 
				"loading": (this.loading()), 
				"decoding": (this.decoding()), 
				"crossOrigin": (this.cors()), 
				"width": (this.natural_width()), 
				"height": (this.natural_height())
			};
		}
		event(){
			return {"load": (next) => (this.load(next))};
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
	};
	($mol_mem(($.$mol_image.prototype), "load"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link_iconed) = class $mol_link_iconed extends ($.$mol_link) {
		icon(){
			return "";
		}
		Icon(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.icon()));
			(obj.title) = () => ("");
			return obj;
		}
		title(){
			return (this.uri());
		}
		sub(){
			return [(this.Icon())];
		}
		content(){
			return [(this.title())];
		}
		host(){
			return "";
		}
	};
	($mol_mem(($.$mol_link_iconed.prototype), "Icon"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
                // return `https://api.faviconkit.com/${ this.host() }/16`
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri)?.replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_native) = class $mol_embed_native extends ($.$mol_scroll) {
		uri(next){
			if(next !== undefined) return next;
			return "about:config";
		}
		title(){
			return "";
		}
		Fallback(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.uri()));
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		uri_change(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "iframe";
		}
		window(){
			return null;
		}
		attr(){
			return {...(super.attr()), "src": (this.uri())};
		}
		sub(){
			return [(this.Fallback())];
		}
		message(){
			return {"hashchange": (next) => (this.uri_change(next))};
		}
	};
	($mol_mem(($.$mol_embed_native.prototype), "uri"));
	($mol_mem(($.$mol_embed_native.prototype), "Fallback"));
	($mol_mem(($.$mol_embed_native.prototype), "uri_change"));


;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = new $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                this.uri_resource();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            sub_visible() {
                this.window();
                return super.sub_visible();
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmin-width: 0;\n\tmin-height: 0;\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n\tborder: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_youtube) = class $mol_icon_youtube extends ($.$mol_icon) {
		path(){
			return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
		}
	};


;
"use strict";


;
	($.$mol_frame) = class $mol_frame extends ($.$mol_embed_native) {
		allow(){
			return "";
		}
		html(){
			return null;
		}
		attr(){
			return {
				"tabindex": (this.tabindex()), 
				"allow": (this.allow()), 
				"src": (this.uri()), 
				"srcdoc": (this.html())
			};
		}
		fullscreen(){
			return true;
		}
		accelerometer(){
			return true;
		}
		autoplay(){
			return true;
		}
		encription(){
			return true;
		}
		gyroscope(){
			return true;
		}
		pip(){
			return true;
		}
		clipboard_read(){
			return true;
		}
		clipboard_write(){
			return true;
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_frame_demo
         */
        class $mol_frame extends $.$mol_frame {
            window() {
                // if( this.html() ) return ( this.dom_node() as HTMLIFrameElement ).contentWindow!
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));

;
	($.$mol_embed_service) = class $mol_embed_service extends ($.$mol_check) {
		active(next){
			if(next !== undefined) return next;
			return false;
		}
		title(){
			return "";
		}
		video_preview(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_preview()));
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_icon_youtube();
			return obj;
		}
		video_embed(){
			return "";
		}
		Frame(){
			const obj = new this.$.$mol_frame();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_embed()));
			return obj;
		}
		uri(){
			return "";
		}
		video_id(){
			return "";
		}
		checked(next){
			return (this.active(next));
		}
		sub(){
			return [
				(this.Image()), 
				(this.Hint()), 
				(this.Frame())
			];
		}
	};
	($mol_mem(($.$mol_embed_service.prototype), "active"));
	($mol_mem(($.$mol_embed_service.prototype), "Image"));
	($mol_mem(($.$mol_embed_service.prototype), "Hint"));
	($mol_mem(($.$mol_embed_service.prototype), "Frame"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_service extends $.$mol_embed_service {
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_service.prototype, "sub", null);
        $$.$mol_embed_service = $mol_embed_service;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/service/service.view.css", "[mol_embed_service] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_service_image] {\n\tflex: auto 1 1;\n\twidth: 100vw;\n}\n\n[mol_embed_service_frame] {\n\twidth: 100vw;\n}\n\n[mol_embed_service_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_service]:hover [mol_embed_service_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_youtube) = class $mol_embed_youtube extends ($.$mol_embed_service) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|shorts\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_rutube) = class $mol_embed_rutube extends ($.$mol_embed_service) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_rutube extends $.$mol_embed_rutube {
            video_embed() {
                return `https://rutube.ru/play/embed/${encodeURIComponent(this.video_id())}`;
            }
            video_id() {
                return this.uri().match(/^https:\/\/rutube.ru\/video\/([^\/&?#]+)/)?.[1] ?? 'about:blank';
            }
            video_preview() {
                return `https://rutube.ru/api/video/${this.video_id()}/thumbnail/?redirect=1`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_preview", null);
        $$.$mol_embed_rutube = $mol_embed_rutube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_vklive) = class $mol_embed_vklive extends ($.$mol_embed_service) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_vklive extends $.$mol_embed_vklive {
            video_embed() {
                return `https://live.vkvideo.ru/app/embed/${this.channel_id()}/${this.video_id()}`;
            }
            channel_id() {
                return this.uri().match(/^https:\/\/live\.vkvideo\.ru\/([^\/&?#]+)/)?.[1] ?? '';
            }
            video_id() {
                return this.uri().match(/^https:\/\/live\.vkvideo\.ru\/[^\/&?#]+\/record\/([^\/&?#]+)/)?.[1] ?? '';
            }
            video_preview() {
                return `https://images.live.vkvideo.ru/public_video_stream/record/${this.video_id()}/preview`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "channel_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_preview", null);
        $$.$mol_embed_vklive = $mol_embed_vklive;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_any) = class $mol_embed_any extends ($.$mol_view) {
		title(){
			return "";
		}
		uri(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Object(){
			const obj = new this.$.$mol_embed_native();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Youtube(){
			const obj = new this.$.$mol_embed_youtube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Rutube(){
			const obj = new this.$.$mol_embed_rutube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Vklive(){
			const obj = new this.$.$mol_embed_vklive();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
	};
	($mol_mem(($.$mol_embed_any.prototype), "Image"));
	($mol_mem(($.$mol_embed_any.prototype), "Object"));
	($mol_mem(($.$mol_embed_any.prototype), "Youtube"));
	($mol_mem(($.$mol_embed_any.prototype), "Rutube"));
	($mol_mem(($.$mol_embed_any.prototype), "Vklive"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/rutube\.ru\//.test(uri))
                        return 'rutube';
                    if (/^https:\/\/live\.vkvideo\.ru\//.test(uri))
                        return 'vklive';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    case 'rutube': return [this.Rutube()];
                    case 'vklive': return [this.Vklive()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_expander) = class $mol_expander extends ($.$mol_list) {
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return true;
		}
		label(){
			return [(this.title())];
		}
		Trigger(){
			const obj = new this.$.$mol_check_expand();
			(obj.checked) = (next) => ((this.expanded(next)));
			(obj.expandable) = () => ((this.expandable()));
			(obj.label) = () => ((this.label()));
			return obj;
		}
		Tools(){
			return null;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Trigger()), (this.Tools())]);
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_expander.prototype), "expanded"));
	($mol_mem(($.$mol_expander.prototype), "Trigger"));
	($mol_mem(($.$mol_expander.prototype), "Label"));
	($mol_mem(($.$mol_expander.prototype), "Content"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Component which expands any content on title click.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_expander_demo
         */
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));

;
	($.$mol_text) = class $mol_text extends ($.$mol_list) {
		auto_scroll(){
			return null;
		}
		block_content(id){
			return [];
		}
		quote_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		uri_resolve(id){
			return "";
		}
		code_sidebar_showed(){
			return true;
		}
		list_type(id){
			return "-";
		}
		list_text(id){
			return "";
		}
		header_level(id){
			return 1;
		}
		header_arg(id){
			return {};
		}
		pre_text(id){
			return "";
		}
		pre_themes(id){
			return [];
		}
		table_head_cells(id){
			return [];
		}
		table_rows(id){
			return [];
		}
		table_cells(id){
			return [];
		}
		table_cell_text(id){
			return "";
		}
		grid_rows(id){
			return [];
		}
		grid_cells(id){
			return [];
		}
		grid_cell_text(id){
			return "";
		}
		line_text(id){
			return "";
		}
		line_type(id){
			return "";
		}
		line_content(id){
			return [];
		}
		code_syntax(){
			return null;
		}
		link_uri(id){
			return "";
		}
		link_host(id){
			return "";
		}
		spoiler_label(id){
			return "";
		}
		Spoiler_label(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_label(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.code_sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		spoiler_content(id){
			return "";
		}
		Spoiler_content(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_content(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.code_sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		uri_base(){
			return "";
		}
		text(){
			return "";
		}
		param(){
			return "";
		}
		flow_tokens(){
			return [];
		}
		block_text(id){
			return "";
		}
		auto(){
			return [(this.auto_scroll())];
		}
		Paragraph(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
		Quote(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.quote_text(id)));
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.code_sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		List(id){
			const obj = new this.$.$mol_text_list();
			(obj.type) = () => ((this.list_type(id)));
			(obj.text) = () => ((this.list_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.code_sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		item_index(id){
			return 0;
		}
		Header(id){
			const obj = new this.$.$mol_text_header();
			(obj.minimal_height) = () => (40);
			(obj.level) = () => ((this.header_level(id)));
			(obj.content) = () => ((this.block_content(id)));
			(obj.arg) = () => ((this.header_arg(id)));
			return obj;
		}
		Pre(id){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.pre_text(id)));
			(obj.row_themes) = () => ((this.pre_themes(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		Cut(id){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("hr");
			return obj;
		}
		Table(id){
			const obj = new this.$.$mol_grid();
			(obj.head_cells) = () => ((this.table_head_cells(id)));
			(obj.rows) = () => ((this.table_rows(id)));
			return obj;
		}
		Table_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.table_cells(id)));
			return obj;
		}
		Table_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.text) = () => ((this.table_cell_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.code_sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		Grid(id){
			const obj = new this.$.$mol_grid();
			(obj.rows) = () => ((this.grid_rows(id)));
			return obj;
		}
		Grid_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.grid_cells(id)));
			return obj;
		}
		Grid_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.text) = () => ((this.grid_cell_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.code_sidebar_showed) = () => ((this.code_sidebar_showed()));
			return obj;
		}
		String(id){
			const obj = new this.$.$mol_dimmer();
			(obj.dom_name) = () => ("span");
			(obj.needle) = () => ((this.highlight()));
			(obj.haystack) = () => ((this.line_text(id)));
			return obj;
		}
		Span(id){
			const obj = new this.$.$mol_text_span();
			(obj.dom_name) = () => ("span");
			(obj.type) = () => ((this.line_type(id)));
			(obj.sub) = () => ((this.line_content(id)));
			return obj;
		}
		Code_line(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => (false);
			(obj.highlight) = () => ((this.highlight()));
			(obj.text) = () => ((this.line_text(id)));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.syntax) = () => ((this.code_syntax()));
			return obj;
		}
		Link(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ((this.line_content(id)));
			return obj;
		}
		Link_http(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ([(this.link_host(id))]);
			return obj;
		}
		Embed(id){
			const obj = new this.$.$mol_embed_any();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.title) = () => ((this.line_text(id)));
			return obj;
		}
		Spoiler(id){
			const obj = new this.$.$mol_expander();
			(obj.label) = () => ([(this.Spoiler_label(id))]);
			(obj.content) = () => ([(this.Spoiler_content(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_label"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_content"));
	($mol_mem_key(($.$mol_text.prototype), "Paragraph"));
	($mol_mem_key(($.$mol_text.prototype), "Quote"));
	($mol_mem_key(($.$mol_text.prototype), "List"));
	($mol_mem_key(($.$mol_text.prototype), "Header"));
	($mol_mem_key(($.$mol_text.prototype), "Pre"));
	($mol_mem_key(($.$mol_text.prototype), "Cut"));
	($mol_mem_key(($.$mol_text.prototype), "Table"));
	($mol_mem_key(($.$mol_text.prototype), "Table_row"));
	($mol_mem_key(($.$mol_text.prototype), "Table_cell"));
	($mol_mem_key(($.$mol_text.prototype), "Grid"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_row"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_cell"));
	($mol_mem_key(($.$mol_text.prototype), "String"));
	($mol_mem_key(($.$mol_text.prototype), "Span"));
	($mol_mem_key(($.$mol_text.prototype), "Code_line"));
	($mol_mem_key(($.$mol_text.prototype), "Link"));
	($mol_mem_key(($.$mol_text.prototype), "Link_http"));
	($mol_mem_key(($.$mol_text.prototype), "Embed"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler"));
	($.$mol_text_header) = class $mol_text_header extends ($.$mol_paragraph) {
		arg(){
			return {};
		}
		content(){
			return [];
		}
		Link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_header_Link_hint")));
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		level(){
			return 1;
		}
		sub(){
			return [(this.Link())];
		}
	};
	($mol_mem(($.$mol_text_header.prototype), "Link"));
	($.$mol_text_span) = class $mol_text_span extends ($.$mol_paragraph) {
		type(){
			return "";
		}
		dom_name(){
			return "span";
		}
		attr(){
			return {...(super.attr()), "mol_text_type": (this.type())};
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Markdown visualizer.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_text_demo
         */
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'spoiler': return this.Spoiler(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?[\)>]\./, '').replace(/[(<>)]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t| (?:\+\+|--|\*\*|  ) )/gm, '')).replace(/[\n\r]*$/, '');
            }
            pre_themes(index) {
                const token = this.flow_tokens()[index];
                const names = {
                    ' ** ': '$mol_theme_accent',
                    ' ++ ': '$mol_theme_current',
                    ' -- ': '$mol_theme_special',
                };
                return token.chunks[0].split('\n')
                    .map(line => names[line.match(/^ (?:\+\+|--|\*\*|  ) /gm)?.[0] ?? ''] ?? null);
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_base_abs() {
                return new URL(this.uri_base(), $mol_dom_context.document.location.href);
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base_abs());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
            spoiler_rows(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[\?] /mg, '').split('\n');
            }
            spoiler_label(index) {
                return this.spoiler_rows(index)[0];
            }
            spoiler_content(index) {
                return this.spoiler_rows(index).slice(1).join('\n');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_themes", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "uri_base_abs", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_label", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_content", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n\tbreak-inside: avoid;\n}\n\n[mol_text_spoiler_label_paragraph] {\n\tpadding: 0;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n\tbreak-inside: avoid;\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n\tbreak-after: avoid;\n\tletter-spacing: 2px;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-inline-start: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n\tbreak-inside: avoid;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$bog_doodle_score_grids = {
        '4': 4,
        '8': 8,
        '8t': 12,
        '16': 16,
        '16t': 24,
        '32': 32,
        'free': 96,
    };
    function rows_at(points, left, right, count) {
        const center = (left + right) / 2;
        const found = new Map();
        for (let i = 0; i + 3 < points.length; i += 3) {
            const x1 = points[i], x2 = points[i + 3];
            if (Math.min(x1, x2) > center || Math.max(x1, x2) < center || x1 === x2)
                continue;
            const t = (center - x1) / (x2 - x1);
            const y = points[i + 1] + t * (points[i + 4] - points[i + 1]);
            const p = points[i + 2] + t * (points[i + 5] - points[i + 2]);
            const row = $bog_doodle_scale_row(y, count);
            found.set(row, Math.max(found.get(row) ?? 0, p));
        }
        if (found.size)
            return found;
        let low = Infinity, high = -Infinity, pressure = 0;
        for (let i = 0; i < points.length; i += 3) {
            if (points[i] < left || points[i] >= right)
                continue;
            const row = $bog_doodle_scale_row(points[i + 1], count);
            low = Math.min(low, row);
            high = Math.max(high, row);
            pressure = Math.max(pressure, points[i + 2]);
        }
        for (let row = low; row <= high; ++row)
            found.set(row, pressure);
        return found;
    }
    function $bog_doodle_score(strokes, notes, steps) {
        const events = [];
        for (const stroke of strokes) {
            const box = $bog_doodle_sketch_stroke_box(stroke);
            const first = Math.max(0, Math.floor(box.left * steps));
            const last = Math.min(steps - 1, Math.max(first, Math.ceil(box.right * steps) - 1));
            let open = new Map();
            for (let step = first; step <= last; ++step) {
                const rows = rows_at(stroke.points, step / steps, (step + 1) / steps, notes.length);
                const next = new Map();
                for (const [row, pressure] of rows) {
                    const prev = open.get(row);
                    if (prev) {
                        prev.length++;
                        next.set(row, prev);
                        continue;
                    }
                    const event = {
                        stroke: stroke.id,
                        color: stroke.color,
                        step,
                        length: 1,
                        midi: notes[row],
                        velocity: Math.round((0.25 + 0.75 * pressure) * 100) / 100,
                    };
                    events.push(event);
                    next.set(row, event);
                }
                open = next;
            }
        }
        return events.sort((a, b) => a.step - b.step || a.midi - b.midi);
    }
    $.$bog_doodle_score = $bog_doodle_score;
    function $bog_doodle_score_thin(events, limit) {
        const by_step = new Map();
        for (const event of events) {
            const step = by_step.get(event.step) ?? new Map;
            const key = event.midi + ':' + event.color;
            const prev = step.get(key);
            if (!prev || prev.velocity < event.velocity || (prev.velocity === event.velocity && prev.length < event.length))
                step.set(key, event);
            by_step.set(event.step, step);
        }
        const result = [];
        for (const step of by_step.values()) {
            result.push(...[...step.values()].sort((a, b) => b.velocity - a.velocity || a.midi - b.midi).slice(0, limit));
        }
        return result.sort((a, b) => a.step - b.step || a.midi - b.midi);
    }
    $.$bog_doodle_score_thin = $bog_doodle_score_thin;
    function $bog_doodle_score_time(step, steps_per_bar, bar_time, swing) {
        const step_time = bar_time / steps_per_bar;
        const swingable = steps_per_bar === 8 || steps_per_bar === 16;
        const shift = swingable && step % 2 === 1 ? swing * step_time / 3 : 0;
        return step * step_time + shift;
    }
    $.$bog_doodle_score_time = $bog_doodle_score_time;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        return src.toBase64();
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function binary_string(bytes) {
        let binary = '';
        if (typeof bytes !== 'string') {
            for (const byte of bytes)
                binary += String.fromCharCode(byte);
        }
        else {
            binary = unescape(encodeURIComponent(bytes));
        }
        return binary;
    }
    function $mol_base64_encode_web(str) {
        return $mol_dom_context.btoa(binary_string(str));
    }
    $.$mol_base64_encode_web = $mol_base64_encode_web;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_encode = $mol_base64_encode_web;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        return Uint8Array.fromBase64(base64);
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_web(base64Str) {
        const buf = Uint8Array.from($mol_dom_context.atob(base64Str), c => c.charCodeAt(0));
        return buf;
    }
    $.$mol_base64_decode_web = $mol_base64_decode_web;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_decode = $mol_base64_decode_web;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $bog_doodle_piece_layer_of(piece, stroke) {
        const id = stroke.layer;
        return piece.layers.find(layer => layer.id === id) ?? piece.layers[0];
    }
    $.$bog_doodle_piece_layer_of = $bog_doodle_piece_layer_of;
    function $bog_doodle_piece_empty() {
        return {
            title: '',
            key: 0,
            scale: 'major_penta',
            octave: 3,
            range: 2,
            bpm: 100,
            bars: 2,
            grid: '8',
            swing: 0,
            patterns: [[]],
            chain: false,
            back: '',
            layers: [{ id: 'l1', name: '', visible: true }],
            axis: 'time_y',
        };
    }
    $.$bog_doodle_piece_empty = $bog_doodle_piece_empty;
    function points_pack(points) {
        const bytes = new Uint8Array(points.length / 3 * 4);
        for (let i = 0, j = 0; i < points.length; i += 3, j += 4) {
            const x = Math.round(Math.max(0, Math.min(1, points[i])) * 4095);
            const y = Math.round(Math.max(0, Math.min(1, points[i + 1])) * 4095);
            const p = Math.round(Math.max(0, Math.min(1, points[i + 2])) * 255);
            bytes[j] = x >> 4;
            bytes[j + 1] = ((x & 15) << 4) | (y >> 8);
            bytes[j + 2] = y & 255;
            bytes[j + 3] = p;
        }
        return $mol_base64_encode(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    function points_unpack(str) {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        const bytes = $mol_base64_decode(base64 + '='.repeat((4 - base64.length % 4) % 4));
        const points = [];
        for (let j = 0; j + 3 < bytes.length; j += 4) {
            const x = (bytes[j] << 4) | (bytes[j + 1] >> 4);
            const y = ((bytes[j + 1] & 15) << 8) | bytes[j + 2];
            points.push(x / 4095, y / 4095, bytes[j + 3] / 255);
        }
        return points;
    }
    function $bog_doodle_piece_pack(piece) {
        return JSON.stringify({
            v: 3,
            t: piece.title,
            k: piece.key,
            s: piece.scale,
            o: piece.octave,
            r: piece.range,
            b: piece.bpm,
            n: piece.bars,
            g: piece.grid,
            w: piece.swing,
            c: piece.chain ? 1 : 0,
            a: piece.axis,
            l: piece.layers.map(l => [l.id, l.name, l.visible ? 1 : 0, Math.round((l.opacity ?? 1) * 100) / 100]),
            p: piece.patterns.map(strokes => strokes.map(s => [
                s.color,
                points_pack(s.points),
                s.ink ?? '',
                Math.round((s.size ?? 1) * 100) / 100,
                s.layer ?? '',
            ])),
        });
    }
    $.$bog_doodle_piece_pack = $bog_doodle_piece_pack;
    function stroke_unpack(item) {
        if (typeof item === 'string') {
            const [color, points] = item.split('.');
            return { id: $bog_doodle_sketch_stroke_id(), color: Number(color) || 0, points: points_unpack(points ?? '') };
        }
        const [color, points, ink, size, layer] = item;
        return {
            id: $bog_doodle_sketch_stroke_id(),
            color: Number(color) || 0,
            points: points_unpack(String(points ?? '')),
            ...ink ? { ink: String(ink) } : {},
            ...size && Number(size) !== 1 ? { size: Number(size) } : {},
            ...layer ? { layer: String(layer) } : {},
        };
    }
    function $bog_doodle_piece_unpack(str) {
        const raw = JSON.parse(str);
        const empty = $bog_doodle_piece_empty();
        const patterns = (raw.p ?? [[]]).map(strokes => strokes.map(stroke_unpack));
        const layers = (raw.l ?? []).map(([id, name, visible, opacity]) => ({
            id: String(id),
            name: String(name ?? ''),
            visible: Boolean(visible),
            ...raw.v >= 3 && Number(opacity) < 1 ? { opacity: Math.max(0, Number(opacity)) } : {},
        }));
        return {
            ...empty,
            title: String(raw.t ?? ''),
            key: Number(raw.k ?? empty.key),
            scale: raw.s in $bog_doodle_scale_steps ? raw.s : empty.scale,
            octave: Number(raw.o ?? empty.octave),
            range: Number(raw.r ?? empty.range),
            bpm: Number(raw.b ?? empty.bpm),
            bars: Number(raw.n ?? empty.bars),
            grid: raw.g in $bog_doodle_score_grids ? raw.g : empty.grid,
            swing: Number(raw.w ?? 0),
            chain: Boolean(raw.c),
            axis: raw.a === 'time_x' ? 'time_x' : 'time_y',
            layers: layers.length ? layers : empty.layers,
            patterns: patterns.length ? patterns : [[]],
        };
    }
    $.$bog_doodle_piece_unpack = $bog_doodle_piece_unpack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_doodle_gallery extends $mol_object {
        ids(next) {
            return this.$.$mol_state_local.value('bog_doodle_ids', next) ?? [];
        }
        current(next) {
            const id = this.$.$mol_state_local.value('bog_doodle_current', next) ?? '';
            return this.ids().includes(id) ? id : this.ids()[0] ?? '';
        }
        piece(id, next) {
            const packed = this.$.$mol_state_local.value('bog_doodle_piece_' + id, next && $bog_doodle_piece_pack(next));
            if (next)
                return next;
            if (!packed)
                return $bog_doodle_piece_empty();
            try {
                return $bog_doodle_piece_unpack(packed);
            }
            catch {
                return $bog_doodle_piece_empty();
            }
        }
        back(id, next) {
            return this.$.$mol_state_local.value('bog_doodle_back_' + id, next === '' ? null : next) ?? '';
        }
        stamp(id, next) {
            return this.$.$mol_state_local.value('bog_doodle_stamp_' + id, next) ?? 0;
        }
        create(piece = $bog_doodle_piece_empty()) {
            const id = $bog_doodle_sketch_stroke_id();
            this.piece(id, piece);
            this.stamp(id, Date.now());
            this.ids([id, ...this.ids()]);
            this.current(id);
            return id;
        }
        save(id, piece) {
            this.piece(id, piece);
            this.stamp(id, Date.now());
        }
        remove(id) {
            this.ids(this.ids().filter(item => item !== id));
            this.$.$mol_state_local.value('bog_doodle_piece_' + id, null);
            this.$.$mol_state_local.value('bog_doodle_back_' + id, null);
            this.$.$mol_state_local.value('bog_doodle_stamp_' + id, null);
        }
    }
    __decorate([
        $mol_mem
    ], $bog_doodle_gallery.prototype, "ids", null);
    __decorate([
        $mol_mem
    ], $bog_doodle_gallery.prototype, "current", null);
    __decorate([
        $mol_mem_key
    ], $bog_doodle_gallery.prototype, "piece", null);
    __decorate([
        $mol_mem_key
    ], $bog_doodle_gallery.prototype, "back", null);
    __decorate([
        $mol_mem_key
    ], $bog_doodle_gallery.prototype, "stamp", null);
    $.$bog_doodle_gallery = $bog_doodle_gallery;
})($ || ($ = {}));

;
	($.$mol_text_list) = class $mol_text_list extends ($.$mol_text) {
		type(){
			return "";
		}
		auto_scroll(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_type": (this.type())};
		}
		Paragraph(id){
			const obj = new this.$.$mol_text_list_item();
			(obj.index) = () => ((this.item_index(id)));
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text_list.prototype), "Paragraph"));
	($.$mol_text_list_item) = class $mol_text_list_item extends ($.$mol_paragraph) {
		index(){
			return 0;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_item_index": (this.index())};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\n\tpadding-inline-start: 1.75rem;\n}\n\n[mol_text_list_item] {\n\tcontain: none;\n\tdisplay: list-item;\n}\n\n[mol_text_list_item]::before {\n\tcontent: attr( mol_text_list_item_index ) \".\";\n\twidth: 1.25rem;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tmargin-inline-start: -1.75rem;\n\ttext-align: end;\n}\n\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\n\tcontent: \"•\";\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$bog_doodle_app) = class $bog_doodle_app extends ($.$mol_view) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		hotkeys(){
			return null;
		}
		midi_listen(){
			return null;
		}
		Brand(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		piece_title(next){
			if(next !== undefined) return next;
			return "";
		}
		Title_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Title_input_hint")));
			(obj.value) = (next) => ((this.piece_title(next)));
			return obj;
		}
		play_toggle(next){
			if(next !== undefined) return next;
			return null;
		}
		Play_icon(){
			const obj = new this.$.$mol_icon_play();
			return obj;
		}
		Stop_icon(){
			const obj = new this.$.$mol_icon_stop();
			return obj;
		}
		play_icon(){
			return [(this.Play_icon()), (this.Stop_icon())];
		}
		Play(){
			const obj = new this.$.$mol_button_major();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Play_hint")));
			(obj.click) = (next) => ((this.play_toggle(next)));
			(obj.sub) = () => ((this.play_icon()));
			return obj;
		}
		undo_enabled(){
			return false;
		}
		undo(next){
			if(next !== undefined) return next;
			return null;
		}
		Undo_icon(){
			const obj = new this.$.$mol_icon_undo();
			return obj;
		}
		Undo(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Undo_hint")));
			(obj.enabled) = () => ((this.undo_enabled()));
			(obj.click) = (next) => ((this.undo(next)));
			(obj.sub) = () => ([(this.Undo_icon())]);
			return obj;
		}
		redo_enabled(){
			return false;
		}
		redo(next){
			if(next !== undefined) return next;
			return null;
		}
		Redo_icon(){
			const obj = new this.$.$mol_icon_redo();
			return obj;
		}
		Redo(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Redo_hint")));
			(obj.enabled) = () => ((this.redo_enabled()));
			(obj.click) = (next) => ((this.redo(next)));
			(obj.sub) = () => ([(this.Redo_icon())]);
			return obj;
		}
		gallery_opened(next){
			if(next !== undefined) return next;
			return false;
		}
		Gallery_open_icon(){
			const obj = new this.$.$mol_icon_folder_music();
			return obj;
		}
		Gallery_open(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Gallery_open_hint")));
			(obj.checked) = (next) => ((this.gallery_opened(next)));
			(obj.Icon) = () => ((this.Gallery_open_icon()));
			return obj;
		}
		layers_opened(next){
			if(next !== undefined) return next;
			return false;
		}
		Layers_open_icon(){
			const obj = new this.$.$mol_icon_layers();
			return obj;
		}
		Layers_open(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layers_open_hint")));
			(obj.checked) = (next) => ((this.layers_opened(next)));
			(obj.Icon) = () => ((this.Layers_open_icon()));
			return obj;
		}
		settings_opened(next){
			if(next !== undefined) return next;
			return false;
		}
		Settings_open_icon(){
			const obj = new this.$.$mol_icon_tune();
			return obj;
		}
		Settings_open(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Settings_open_hint")));
			(obj.checked) = (next) => ((this.settings_opened(next)));
			(obj.Icon) = () => ((this.Settings_open_icon()));
			return obj;
		}
		tool_draw(next){
			if(next !== undefined) return next;
			return false;
		}
		Tool_draw_icon(){
			const obj = new this.$.$mol_icon_brush();
			return obj;
		}
		Tool_draw(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tool_draw_hint")));
			(obj.checked) = (next) => ((this.tool_draw(next)));
			(obj.Icon) = () => ((this.Tool_draw_icon()));
			return obj;
		}
		tool_erase(next){
			if(next !== undefined) return next;
			return false;
		}
		Tool_erase_icon(){
			const obj = new this.$.$mol_icon_eraser();
			return obj;
		}
		Tool_erase(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tool_erase_hint")));
			(obj.checked) = (next) => ((this.tool_erase(next)));
			(obj.Icon) = () => ((this.Tool_erase_icon()));
			return obj;
		}
		tool_select(next){
			if(next !== undefined) return next;
			return false;
		}
		Tool_select_icon(){
			const obj = new this.$.$mol_icon_cursor_default();
			return obj;
		}
		Tool_select(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tool_select_hint")));
			(obj.checked) = (next) => ((this.tool_select(next)));
			(obj.Icon) = () => ((this.Tool_select_icon()));
			return obj;
		}
		tool_pan(next){
			if(next !== undefined) return next;
			return false;
		}
		Tool_pan_icon(){
			const obj = new this.$.$mol_icon_pan();
			return obj;
		}
		Tool_pan(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tool_pan_hint")));
			(obj.checked) = (next) => ((this.tool_pan(next)));
			(obj.Icon) = () => ((this.Tool_pan_icon()));
			return obj;
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Tool_draw()), 
				(this.Tool_erase()), 
				(this.Tool_select()), 
				(this.Tool_pan())
			]);
			return obj;
		}
		brush_value(next){
			if(next !== undefined) return next;
			return 10;
		}
		Brush_size(){
			const obj = new this.$.$bog_doodle_slider();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Brush_size_hint")));
			(obj.value) = (next) => ((this.brush_value(next)));
			(obj.min) = () => (2);
			(obj.max) = () => (40);
			return obj;
		}
		eraser(next){
			if(next !== undefined) return next;
			return 24;
		}
		Eraser_size(){
			const obj = new this.$.$bog_doodle_slider();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Eraser_size_hint")));
			(obj.value) = (next) => ((this.eraser(next)));
			(obj.min) = () => (6);
			(obj.max) = () => (120);
			return obj;
		}
		size_tools(){
			return [(this.Brush_size()), (this.Eraser_size())];
		}
		Size(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.size_tools()));
			return obj;
		}
		color_name(id){
			return "";
		}
		color_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		color_ink(id){
			return "";
		}
		Color_dot(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Color(id){
			const obj = new this.$.$mol_check();
			(obj.hint) = () => ((this.color_name(id)));
			(obj.checked) = (next) => ((this.color_checked(id, next)));
			(obj.style) = () => ({...(this.$.$mol_check.prototype.style.call(obj)), "--bog_doodle_app_ink": (this.color_ink(id))});
			(obj.sub) = () => ([(this.Color_dot(id))]);
			return obj;
		}
		ink(next){
			if(next !== undefined) return next;
			return "#1f1d1a";
		}
		Ink_dot(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({...(this.$.$mol_view.prototype.style.call(obj)), "--bog_doodle_app_ink": (this.ink())});
			return obj;
		}
		Ink_icon(){
			const obj = new this.$.$mol_icon_palette();
			return obj;
		}
		ink_recent(){
			return [];
		}
		Picker(){
			const obj = new this.$.$bog_doodle_picker();
			(obj.value) = (next) => ((this.ink(next)));
			(obj.swatches) = () => ((this.ink_recent()));
			return obj;
		}
		Ink_pick(){
			const obj = new this.$.$mol_pick();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Ink_pick_hint")));
			(obj.align_hor) = () => ("left");
			(obj.trigger_content) = () => ([(this.Ink_dot()), (this.Ink_icon())]);
			(obj.bubble_content) = () => ([(this.Picker())]);
			return obj;
		}
		voice_name(){
			return "";
		}
		Voice(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.voice_name())]);
			return obj;
		}
		palette(){
			return [
				(this.Color(id)), 
				(this.Ink_pick()), 
				(this.Voice())
			];
		}
		Palette(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.palette()));
			return obj;
		}
		zoom_out(next){
			if(next !== undefined) return next;
			return null;
		}
		Zoom_out_icon(){
			const obj = new this.$.$mol_icon_magnify_minus();
			return obj;
		}
		Zoom_out(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Zoom_out_hint")));
			(obj.click) = (next) => ((this.zoom_out(next)));
			(obj.sub) = () => ([(this.Zoom_out_icon())]);
			return obj;
		}
		zoom_reset(next){
			if(next !== undefined) return next;
			return null;
		}
		zoom_percent(){
			return "100%";
		}
		Zoom_level(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Zoom_level_hint")));
			(obj.click) = (next) => ((this.zoom_reset(next)));
			(obj.title) = () => ((this.zoom_percent()));
			return obj;
		}
		zoom_in(next){
			if(next !== undefined) return next;
			return null;
		}
		Zoom_in_icon(){
			const obj = new this.$.$mol_icon_magnify_plus();
			return obj;
		}
		Zoom_in(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Zoom_in_hint")));
			(obj.click) = (next) => ((this.zoom_in(next)));
			(obj.sub) = () => ([(this.Zoom_in_icon())]);
			return obj;
		}
		Zoom(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Zoom_out()), 
				(this.Zoom_level()), 
				(this.Zoom_in())
			]);
			return obj;
		}
		select_all(next){
			if(next !== undefined) return next;
			return null;
		}
		Select_all_icon(){
			const obj = new this.$.$mol_icon_select_all();
			return obj;
		}
		Select_all(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Select_all_hint")));
			(obj.click) = (next) => ((this.select_all(next)));
			(obj.sub) = () => ([(this.Select_all_icon())]);
			return obj;
		}
		selection_copy(next){
			if(next !== undefined) return next;
			return null;
		}
		Copy_icon(){
			const obj = new this.$.$mol_icon_content_duplicate();
			return obj;
		}
		Copy(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Copy_hint")));
			(obj.click) = (next) => ((this.selection_copy(next)));
			(obj.sub) = () => ([(this.Copy_icon())]);
			return obj;
		}
		selection_drop(next){
			if(next !== undefined) return next;
			return null;
		}
		Drop_icon(){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Drop(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Drop_hint")));
			(obj.click) = (next) => ((this.selection_drop(next)));
			(obj.sub) = () => ([(this.Drop_icon())]);
			return obj;
		}
		selection_tools(){
			return [
				(this.Select_all()), 
				(this.Copy()), 
				(this.Drop())
			];
		}
		Selection(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.selection_tools()));
			return obj;
		}
		pattern_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		pattern_title(id){
			return "";
		}
		Pattern(id){
			const obj = new this.$.$mol_check();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pattern_hint")));
			(obj.checked) = (next) => ((this.pattern_checked(id, next)));
			(obj.title) = () => ((this.pattern_title(id)));
			return obj;
		}
		pattern_add(next){
			if(next !== undefined) return next;
			return null;
		}
		Pattern_add_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Pattern_add(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pattern_add_hint")));
			(obj.click) = (next) => ((this.pattern_add(next)));
			(obj.sub) = () => ([(this.Pattern_add_icon())]);
			return obj;
		}
		pattern_tabs(){
			return [(this.Pattern(id)), (this.Pattern_add())];
		}
		Patterns(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.pattern_tabs()));
			return obj;
		}
		Bar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Brand()), 
				(this.Title_input()), 
				(this.Play()), 
				(this.Undo()), 
				(this.Redo()), 
				(this.Gallery_open()), 
				(this.Layers_open()), 
				(this.Settings_open()), 
				(this.Tools()), 
				(this.Size()), 
				(this.Palette()), 
				(this.Zoom()), 
				(this.Selection()), 
				(this.Patterns())
			]);
			return obj;
		}
		sketch(){
			const obj = new this.$.$bog_doodle_sketch();
			return obj;
		}
		notes(){
			return [];
		}
		steps(){
			return 16;
		}
		beat_steps(){
			return 2;
		}
		bar_steps(){
			return 8;
		}
		axis(){
			return "time_y";
		}
		tool(next){
			if(next !== undefined) return next;
			return "draw";
		}
		brush(){
			return 1;
		}
		snap(next){
			if(next !== undefined) return next;
			return false;
		}
		pen_only(next){
			if(next !== undefined) return next;
			return false;
		}
		back(){
			return "";
		}
		layer_order(){
			return [];
		}
		layer_active(next){
			if(next !== undefined) return next;
			return "l1";
		}
		layer_default(){
			return "l1";
		}
		layer_focus(next){
			if(next !== undefined) return next;
			return false;
		}
		layer_alpha(id){
			return 1;
		}
		panel_open(){
			return false;
		}
		panel_close(next){
			if(next !== undefined) return next;
			return null;
		}
		selected(next){
			if(next !== undefined) return next;
			return [];
		}
		playhead(){
			return null;
		}
		playing(){
			return false;
		}
		note_preview(next){
			if(next !== undefined) return next;
			return null;
		}
		Board(){
			const obj = new this.$.$bog_doodle_board();
			(obj.sketch) = () => ((this.sketch()));
			(obj.notes) = () => ((this.notes()));
			(obj.steps) = () => ((this.steps()));
			(obj.beat_steps) = () => ((this.beat_steps()));
			(obj.bar_steps) = () => ((this.bar_steps()));
			(obj.axis) = () => ((this.axis()));
			(obj.tool) = (next) => ((this.tool(next)));
			(obj.ink) = () => ((this.ink()));
			(obj.brush) = () => ((this.brush()));
			(obj.eraser) = () => ((this.eraser()));
			(obj.snap) = () => ((this.snap()));
			(obj.pen_only) = () => ((this.pen_only()));
			(obj.back) = () => ((this.back()));
			(obj.layer_order) = () => ((this.layer_order()));
			(obj.layer_active) = () => ((this.layer_active()));
			(obj.layer_default) = () => ((this.layer_default()));
			(obj.layer_focus) = () => ((this.layer_focus()));
			(obj.layer_alpha) = (id) => ((this.layer_alpha(id)));
			(obj.blocked) = () => ((this.panel_open()));
			(obj.unblock) = (next) => ((this.panel_close(next)));
			(obj.selected) = (next) => ((this.selected(next)));
			(obj.playhead) = () => ((this.playhead()));
			(obj.playing) = () => ((this.playing()));
			(obj.note_hover) = (next) => ((this.note_preview(next)));
			return obj;
		}
		panel_rows(){
			return [];
		}
		Panel_content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.panel_rows()));
			return obj;
		}
		Panel(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Panel_content())]);
			return obj;
		}
		main(){
			return [(this.Board()), (this.Panel())];
		}
		Main(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.main()));
			return obj;
		}
		layer_add(next){
			if(next !== undefined) return next;
			return null;
		}
		Layer_add(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_add_title")));
			(obj.click) = (next) => ((this.layer_add(next)));
			return obj;
		}
		Layer_focus(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_focus_title")));
			(obj.checked) = (next) => ((this.layer_focus(next)));
			return obj;
		}
		Layer_tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Layer_add()), (this.Layer_focus())]);
			return obj;
		}
		layer_name_hint(){
			return "";
		}
		layer_name(next){
			if(next !== undefined) return next;
			return "";
		}
		Layer_name(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.layer_name_hint()));
			(obj.value) = (next) => ((this.layer_name(next)));
			return obj;
		}
		Layer_name_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_name_field_title")));
			(obj.content) = () => ([(this.Layer_name())]);
			return obj;
		}
		layer_visible(id, next){
			if(next !== undefined) return next;
			return true;
		}
		Layer_visible_icon(id){
			const obj = new this.$.$mol_icon_eye();
			return obj;
		}
		Layer_visible(id){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_visible_hint")));
			(obj.checked) = (next) => ((this.layer_visible(id, next)));
			(obj.Icon) = () => ((this.Layer_visible_icon(id)));
			return obj;
		}
		layer_picked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		layer_title(id){
			return "";
		}
		Layer_pick(id){
			const obj = new this.$.$mol_check();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_pick_hint")));
			(obj.checked) = (next) => ((this.layer_picked(id, next)));
			(obj.title) = () => ((this.layer_title(id)));
			return obj;
		}
		layer_opacity(id, next){
			if(next !== undefined) return next;
			return 100;
		}
		Layer_opacity(id){
			const obj = new this.$.$bog_doodle_slider();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_opacity_hint")));
			(obj.value) = (next) => ((this.layer_opacity(id, next)));
			(obj.min) = () => (0);
			(obj.max) = () => (100);
			(obj.step) = () => (5);
			return obj;
		}
		layer_up(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Layer_up_icon(id){
			const obj = new this.$.$mol_icon_arrow_up();
			return obj;
		}
		Layer_up(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_up_hint")));
			(obj.click) = (next) => ((this.layer_up(id, next)));
			(obj.sub) = () => ([(this.Layer_up_icon(id))]);
			return obj;
		}
		layer_down(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Layer_down_icon(id){
			const obj = new this.$.$mol_icon_arrow_down();
			return obj;
		}
		Layer_down(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_down_hint")));
			(obj.click) = (next) => ((this.layer_down(id, next)));
			(obj.sub) = () => ([(this.Layer_down_icon(id))]);
			return obj;
		}
		layer_drop_enabled(){
			return false;
		}
		layer_drop(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Layer_drop_icon(id){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Layer_drop(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Layer_drop_hint")));
			(obj.enabled) = () => ((this.layer_drop_enabled()));
			(obj.click) = (next) => ((this.layer_drop(id, next)));
			(obj.sub) = () => ([(this.Layer_drop_icon(id))]);
			return obj;
		}
		Layer(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Layer_visible(id)), 
				(this.Layer_pick(id)), 
				(this.Layer_opacity(id)), 
				(this.Layer_up(id)), 
				(this.Layer_down(id)), 
				(this.Layer_drop(id))
			]);
			return obj;
		}
		layer_rows(){
			return [(this.Layer(id))];
		}
		Layer_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.layer_rows()));
			return obj;
		}
		vibe_name(id){
			return "";
		}
		vibe_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Vibe(id){
			const obj = new this.$.$mol_check();
			(obj.title) = () => ((this.vibe_name(id)));
			(obj.checked) = (next) => ((this.vibe_checked(id, next)));
			return obj;
		}
		vibe_list(){
			return [(this.Vibe(id))];
		}
		Vibes(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.vibe_list()));
			return obj;
		}
		Vibe_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Vibe_field_title")));
			(obj.content) = () => ([(this.Vibes())]);
			return obj;
		}
		key_value(next){
			if(next !== undefined) return next;
			return "0";
		}
		key_options(){
			return {};
		}
		Key_input(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.key_value(next)));
			(obj.dictionary) = () => ((this.key_options()));
			return obj;
		}
		Key_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Key_field_title")));
			(obj.content) = () => ([(this.Key_input())]);
			return obj;
		}
		scale_value(next){
			if(next !== undefined) return next;
			return "major_penta";
		}
		Scale_input(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.scale_value(next)));
			(obj.dictionary) = () => ({
				"major_penta": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_major_penta")), 
				"minor_penta": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_minor_penta")), 
				"major": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_major")), 
				"minor": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_minor")), 
				"harmonic": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_harmonic")), 
				"dorian": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_dorian")), 
				"phrygian": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_phrygian")), 
				"lydian": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_lydian")), 
				"mixolydian": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_mixolydian")), 
				"blues": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_blues")), 
				"chromatic": (this.$.$mol_locale.text("$bog_doodle_app_Scale_input_dictionary_chromatic"))
			});
			return obj;
		}
		Scale_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Scale_field_title")));
			(obj.content) = () => ([(this.Scale_input())]);
			return obj;
		}
		axis_value(next){
			if(next !== undefined) return next;
			return "time_y";
		}
		Axis_input(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.axis_value(next)));
			(obj.options) = () => ({"time_y": (this.$.$mol_locale.text("$bog_doodle_app_Axis_input_options_time_y")), "time_x": (this.$.$mol_locale.text("$bog_doodle_app_Axis_input_options_time_x"))});
			return obj;
		}
		Axis_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Axis_field_title")));
			(obj.content) = () => ([(this.Axis_input())]);
			return obj;
		}
		range_value(next){
			if(next !== undefined) return next;
			return "2";
		}
		Range_input(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.range_value(next)));
			(obj.options) = () => ({
				"1": "1", 
				"2": "2", 
				"3": "3"
			});
			return obj;
		}
		Range_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Range_field_title")));
			(obj.content) = () => ([(this.Range_input())]);
			return obj;
		}
		octave_value(next){
			if(next !== undefined) return next;
			return 3;
		}
		Octave_input(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.octave_value(next)));
			(obj.value_min) = () => (1);
			(obj.value_max) = () => (6);
			return obj;
		}
		Octave_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Octave_field_title")));
			(obj.content) = () => ([(this.Octave_input())]);
			return obj;
		}
		bpm_value(next){
			if(next !== undefined) return next;
			return 100;
		}
		Tempo_input(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.bpm_value(next)));
			(obj.value_min) = () => (30);
			(obj.value_max) = () => (300);
			return obj;
		}
		tap(next){
			if(next !== undefined) return next;
			return null;
		}
		Tap(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tap_hint")));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tap_title")));
			(obj.click) = (next) => ((this.tap(next)));
			return obj;
		}
		Tempo_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Tempo_input()), (this.Tap())]);
			return obj;
		}
		Tempo_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Tempo_field_title")));
			(obj.content) = () => ([(this.Tempo_row())]);
			return obj;
		}
		bars_value(next){
			if(next !== undefined) return next;
			return "2";
		}
		Bars_input(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.bars_value(next)));
			(obj.options) = () => ({
				"1": "1", 
				"2": "2", 
				"4": "4"
			});
			return obj;
		}
		Bars_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Bars_field_title")));
			(obj.content) = () => ([(this.Bars_input())]);
			return obj;
		}
		grid_value(next){
			if(next !== undefined) return next;
			return "8";
		}
		Grid_input(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.grid_value(next)));
			(obj.options) = () => ({
				"4": "1/4", 
				"8": "1/8", 
				"8t": (this.$.$mol_locale.text("$bog_doodle_app_Grid_input_options_8t")), 
				"16": "1/16", 
				"16t": (this.$.$mol_locale.text("$bog_doodle_app_Grid_input_options_16t")), 
				"32": "1/32", 
				"free": (this.$.$mol_locale.text("$bog_doodle_app_Grid_input_options_free"))
			});
			return obj;
		}
		Grid_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Grid_field_title")));
			(obj.content) = () => ([(this.Grid_input())]);
			return obj;
		}
		swing_value(next){
			if(next !== undefined) return next;
			return "0";
		}
		Swing_input(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.swing_value(next)));
			(obj.options) = () => ({
				"0": (this.$.$mol_locale.text("$bog_doodle_app_Swing_input_options_0")), 
				"0.33": (this.$.$mol_locale.text("$bog_doodle_app_Swing_input_options_0.33")), 
				"0.66": (this.$.$mol_locale.text("$bog_doodle_app_Swing_input_options_0.66")), 
				"1": (this.$.$mol_locale.text("$bog_doodle_app_Swing_input_options_1"))
			});
			return obj;
		}
		Swing_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Swing_field_title")));
			(obj.content) = () => ([(this.Swing_input())]);
			return obj;
		}
		draw_sound(next){
			if(next !== undefined) return next;
			return false;
		}
		Draw_sound_input(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Draw_sound_input_title")));
			(obj.checked) = (next) => ((this.draw_sound(next)));
			return obj;
		}
		click(next){
			if(next !== undefined) return next;
			return false;
		}
		Click_input(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Click_input_title")));
			(obj.checked) = (next) => ((this.click(next)));
			return obj;
		}
		Snap_input(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Snap_input_title")));
			(obj.checked) = (next) => ((this.snap(next)));
			return obj;
		}
		Pen_input(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pen_input_title")));
			(obj.checked) = (next) => ((this.pen_only(next)));
			return obj;
		}
		chain(next){
			if(next !== undefined) return next;
			return false;
		}
		Chain_input(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Chain_input_title")));
			(obj.checked) = (next) => ((this.chain(next)));
			return obj;
		}
		midi_in(next){
			if(next !== undefined) return next;
			return false;
		}
		Midi_input(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Midi_input_title")));
			(obj.checked) = (next) => ((this.midi_in(next)));
			return obj;
		}
		Flags(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Draw_sound_input()), 
				(this.Click_input()), 
				(this.Snap_input()), 
				(this.Pen_input()), 
				(this.Chain_input()), 
				(this.Midi_input())
			]);
			return obj;
		}
		pattern_copy(next){
			if(next !== undefined) return next;
			return null;
		}
		Pattern_copy(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pattern_copy_title")));
			(obj.click) = (next) => ((this.pattern_copy(next)));
			return obj;
		}
		pattern_clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Pattern_clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pattern_clear_title")));
			(obj.click) = (next) => ((this.pattern_clear(next)));
			return obj;
		}
		pattern_drop_enabled(){
			return false;
		}
		pattern_drop(next){
			if(next !== undefined) return next;
			return null;
		}
		Pattern_drop(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pattern_drop_title")));
			(obj.enabled) = () => ((this.pattern_drop_enabled()));
			(obj.click) = (next) => ((this.pattern_drop(next)));
			return obj;
		}
		Pattern_tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Pattern_copy()), 
				(this.Pattern_clear()), 
				(this.Pattern_drop())
			]);
			return obj;
		}
		Pattern_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Pattern_field_title")));
			(obj.content) = () => ([(this.Pattern_tools())]);
			return obj;
		}
		back_files(next){
			if(next !== undefined) return next;
			return [];
		}
		Back_open(){
			const obj = new this.$.$mol_button_open();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Back_open_title")));
			(obj.accept) = () => ("image/*");
			(obj.multiple) = () => (false);
			(obj.files) = (next) => ((this.back_files(next)));
			return obj;
		}
		back_enabled(){
			return false;
		}
		back_drop(next){
			if(next !== undefined) return next;
			return null;
		}
		Back_drop(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Back_drop_title")));
			(obj.enabled) = () => ((this.back_enabled()));
			(obj.click) = (next) => ((this.back_drop(next)));
			return obj;
		}
		Back_tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Back_open()), (this.Back_drop())]);
			return obj;
		}
		Back_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Back_field_title")));
			(obj.content) = () => ([(this.Back_tools())]);
			return obj;
		}
		share_link(){
			return "";
		}
		Share(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Share_title")));
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Share_hint")));
			(obj.text) = () => ((this.share_link()));
			return obj;
		}
		export_png(next){
			if(next !== undefined) return next;
			return null;
		}
		Png(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("PNG");
			(obj.click) = (next) => ((this.export_png(next)));
			return obj;
		}
		export_wav(next){
			if(next !== undefined) return next;
			return null;
		}
		Wav(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("WAV");
			(obj.click) = (next) => ((this.export_wav(next)));
			return obj;
		}
		export_midi(next){
			if(next !== undefined) return next;
			return null;
		}
		Midi(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("MIDI");
			(obj.click) = (next) => ((this.export_midi(next)));
			return obj;
		}
		Export_tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Share()), 
				(this.Png()), 
				(this.Wav()), 
				(this.Midi())
			]);
			return obj;
		}
		Export_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Export_field_title")));
			(obj.content) = () => ([(this.Export_tools())]);
			return obj;
		}
		About(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.$.$mol_locale.text("$bog_doodle_app_About_text")));
			return obj;
		}
		piece_new(next){
			if(next !== undefined) return next;
			return null;
		}
		Gallery_new(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Gallery_new_title")));
			(obj.click) = (next) => ((this.piece_new(next)));
			return obj;
		}
		piece_open(id, next){
			if(next !== undefined) return next;
			return null;
		}
		piece_name(id){
			return "";
		}
		Piece_title(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.piece_name(id))]);
			return obj;
		}
		piece_info(id){
			return "";
		}
		Piece_info(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.piece_info(id))]);
			return obj;
		}
		Piece_open(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.piece_open(id, next)));
			(obj.sub) = () => ([(this.Piece_title(id)), (this.Piece_info(id))]);
			return obj;
		}
		piece_drop(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Piece_drop_icon(id){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Piece_drop(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_doodle_app_Piece_drop_hint")));
			(obj.click) = (next) => ((this.piece_drop(id, next)));
			(obj.sub) = () => ([(this.Piece_drop_icon(id))]);
			return obj;
		}
		Piece(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Piece_open(id)), (this.Piece_drop(id))]);
			return obj;
		}
		gallery_rows(){
			return [(this.Gallery_new()), (this.Piece(id))];
		}
		title(){
			return (this.$.$mol_locale.text("$bog_doodle_app_title"));
		}
		untitled(){
			return (this.$.$mol_locale.text("$bog_doodle_app_untitled"));
		}
		layer_prefix(){
			return (this.$.$mol_locale.text("$bog_doodle_app_layer_prefix"));
		}
		voice_names(){
			return {
				"0": (this.$.$mol_locale.text("$bog_doodle_app_voice_names_0")), 
				"1": (this.$.$mol_locale.text("$bog_doodle_app_voice_names_1")), 
				"2": (this.$.$mol_locale.text("$bog_doodle_app_voice_names_2")), 
				"3": (this.$.$mol_locale.text("$bog_doodle_app_voice_names_3")), 
				"4": (this.$.$mol_locale.text("$bog_doodle_app_voice_names_4")), 
				"5": (this.$.$mol_locale.text("$bog_doodle_app_voice_names_5"))
			};
		}
		vibe_names(){
			return {
				"calm": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_calm")), 
				"sad": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_sad")), 
				"dream": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_dream")), 
				"lullaby": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_lullaby")), 
				"meditation": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_meditation")), 
				"rain": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_rain")), 
				"sunrise": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_sunrise")), 
				"space": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_space")), 
				"fairy": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_fairy")), 
				"epic": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_epic")), 
				"blues": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_blues")), 
				"jazz": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_jazz")), 
				"noir": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_noir")), 
				"lofi": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_lofi")), 
				"funk": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_funk")), 
				"dance": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_dance")), 
				"rock": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_rock")), 
				"tango": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_tango")), 
				"march": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_march")), 
				"medieval": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_medieval")), 
				"celtic": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_celtic")), 
				"east": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_east")), 
				"anxiety": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_anxiety")), 
				"horror": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_horror")), 
				"cyber": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_cyber")), 
				"game": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_game")), 
				"impressionism": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_impressionism")), 
				"minimalism": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_minimalism")), 
				"baroque": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_baroque")), 
				"avantgarde": (this.$.$mol_locale.text("$bog_doodle_app_vibe_names_avantgarde"))
			};
		}
		Store(){
			const obj = new this.$.$bog_doodle_gallery();
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		auto(){
			return [(this.hotkeys()), (this.midi_listen())];
		}
		sub(){
			return [(this.Bar()), (this.Main())];
		}
		Layers(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Layer_tools()), 
				(this.Layer_name_field()), 
				(this.Layer_list())
			]);
			return obj;
		}
		Settings(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Vibe_field()), 
				(this.Key_field()), 
				(this.Scale_field()), 
				(this.Axis_field()), 
				(this.Range_field()), 
				(this.Octave_field()), 
				(this.Tempo_field()), 
				(this.Bars_field()), 
				(this.Grid_field()), 
				(this.Swing_field()), 
				(this.Flags()), 
				(this.Pattern_field()), 
				(this.Back_field()), 
				(this.Export_field()), 
				(this.About())
			]);
			return obj;
		}
		Gallery(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.gallery_rows()));
			return obj;
		}
	};
	($mol_mem(($.$bog_doodle_app.prototype), "Theme"));
	($mol_mem(($.$bog_doodle_app.prototype), "Brand"));
	($mol_mem(($.$bog_doodle_app.prototype), "piece_title"));
	($mol_mem(($.$bog_doodle_app.prototype), "Title_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "play_toggle"));
	($mol_mem(($.$bog_doodle_app.prototype), "Play_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Stop_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Play"));
	($mol_mem(($.$bog_doodle_app.prototype), "undo"));
	($mol_mem(($.$bog_doodle_app.prototype), "Undo_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Undo"));
	($mol_mem(($.$bog_doodle_app.prototype), "redo"));
	($mol_mem(($.$bog_doodle_app.prototype), "Redo_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Redo"));
	($mol_mem(($.$bog_doodle_app.prototype), "gallery_opened"));
	($mol_mem(($.$bog_doodle_app.prototype), "Gallery_open_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Gallery_open"));
	($mol_mem(($.$bog_doodle_app.prototype), "layers_opened"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layers_open_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layers_open"));
	($mol_mem(($.$bog_doodle_app.prototype), "settings_opened"));
	($mol_mem(($.$bog_doodle_app.prototype), "Settings_open_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Settings_open"));
	($mol_mem(($.$bog_doodle_app.prototype), "tool_draw"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_draw_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_draw"));
	($mol_mem(($.$bog_doodle_app.prototype), "tool_erase"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_erase_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_erase"));
	($mol_mem(($.$bog_doodle_app.prototype), "tool_select"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_select_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_select"));
	($mol_mem(($.$bog_doodle_app.prototype), "tool_pan"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_pan_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tool_pan"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tools"));
	($mol_mem(($.$bog_doodle_app.prototype), "brush_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Brush_size"));
	($mol_mem(($.$bog_doodle_app.prototype), "eraser"));
	($mol_mem(($.$bog_doodle_app.prototype), "Eraser_size"));
	($mol_mem(($.$bog_doodle_app.prototype), "Size"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "color_checked"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Color_dot"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Color"));
	($mol_mem(($.$bog_doodle_app.prototype), "ink"));
	($mol_mem(($.$bog_doodle_app.prototype), "Ink_dot"));
	($mol_mem(($.$bog_doodle_app.prototype), "Ink_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Picker"));
	($mol_mem(($.$bog_doodle_app.prototype), "Ink_pick"));
	($mol_mem(($.$bog_doodle_app.prototype), "Voice"));
	($mol_mem(($.$bog_doodle_app.prototype), "Palette"));
	($mol_mem(($.$bog_doodle_app.prototype), "zoom_out"));
	($mol_mem(($.$bog_doodle_app.prototype), "Zoom_out_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Zoom_out"));
	($mol_mem(($.$bog_doodle_app.prototype), "zoom_reset"));
	($mol_mem(($.$bog_doodle_app.prototype), "Zoom_level"));
	($mol_mem(($.$bog_doodle_app.prototype), "zoom_in"));
	($mol_mem(($.$bog_doodle_app.prototype), "Zoom_in_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Zoom_in"));
	($mol_mem(($.$bog_doodle_app.prototype), "Zoom"));
	($mol_mem(($.$bog_doodle_app.prototype), "select_all"));
	($mol_mem(($.$bog_doodle_app.prototype), "Select_all_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Select_all"));
	($mol_mem(($.$bog_doodle_app.prototype), "selection_copy"));
	($mol_mem(($.$bog_doodle_app.prototype), "Copy_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Copy"));
	($mol_mem(($.$bog_doodle_app.prototype), "selection_drop"));
	($mol_mem(($.$bog_doodle_app.prototype), "Drop_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Drop"));
	($mol_mem(($.$bog_doodle_app.prototype), "Selection"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "pattern_checked"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Pattern"));
	($mol_mem(($.$bog_doodle_app.prototype), "pattern_add"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_add_icon"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_add"));
	($mol_mem(($.$bog_doodle_app.prototype), "Patterns"));
	($mol_mem(($.$bog_doodle_app.prototype), "Bar"));
	($mol_mem(($.$bog_doodle_app.prototype), "sketch"));
	($mol_mem(($.$bog_doodle_app.prototype), "tool"));
	($mol_mem(($.$bog_doodle_app.prototype), "snap"));
	($mol_mem(($.$bog_doodle_app.prototype), "pen_only"));
	($mol_mem(($.$bog_doodle_app.prototype), "layer_active"));
	($mol_mem(($.$bog_doodle_app.prototype), "layer_focus"));
	($mol_mem(($.$bog_doodle_app.prototype), "panel_close"));
	($mol_mem(($.$bog_doodle_app.prototype), "selected"));
	($mol_mem(($.$bog_doodle_app.prototype), "note_preview"));
	($mol_mem(($.$bog_doodle_app.prototype), "Board"));
	($mol_mem(($.$bog_doodle_app.prototype), "Panel_content"));
	($mol_mem(($.$bog_doodle_app.prototype), "Panel"));
	($mol_mem(($.$bog_doodle_app.prototype), "Main"));
	($mol_mem(($.$bog_doodle_app.prototype), "layer_add"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layer_add"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layer_focus"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layer_tools"));
	($mol_mem(($.$bog_doodle_app.prototype), "layer_name"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layer_name"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layer_name_field"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "layer_visible"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_visible_icon"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_visible"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "layer_picked"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_pick"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "layer_opacity"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_opacity"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "layer_up"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_up_icon"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_up"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "layer_down"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_down_icon"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_down"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "layer_drop"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_drop_icon"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer_drop"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Layer"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layer_list"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "vibe_checked"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Vibe"));
	($mol_mem(($.$bog_doodle_app.prototype), "Vibes"));
	($mol_mem(($.$bog_doodle_app.prototype), "Vibe_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "key_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Key_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Key_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "scale_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Scale_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Scale_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "axis_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Axis_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Axis_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "range_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Range_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Range_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "octave_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Octave_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Octave_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "bpm_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tempo_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "tap"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tap"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tempo_row"));
	($mol_mem(($.$bog_doodle_app.prototype), "Tempo_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "bars_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Bars_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Bars_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "grid_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Grid_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Grid_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "swing_value"));
	($mol_mem(($.$bog_doodle_app.prototype), "Swing_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Swing_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "draw_sound"));
	($mol_mem(($.$bog_doodle_app.prototype), "Draw_sound_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "click"));
	($mol_mem(($.$bog_doodle_app.prototype), "Click_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Snap_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pen_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "chain"));
	($mol_mem(($.$bog_doodle_app.prototype), "Chain_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "midi_in"));
	($mol_mem(($.$bog_doodle_app.prototype), "Midi_input"));
	($mol_mem(($.$bog_doodle_app.prototype), "Flags"));
	($mol_mem(($.$bog_doodle_app.prototype), "pattern_copy"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_copy"));
	($mol_mem(($.$bog_doodle_app.prototype), "pattern_clear"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_clear"));
	($mol_mem(($.$bog_doodle_app.prototype), "pattern_drop"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_drop"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_tools"));
	($mol_mem(($.$bog_doodle_app.prototype), "Pattern_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "back_files"));
	($mol_mem(($.$bog_doodle_app.prototype), "Back_open"));
	($mol_mem(($.$bog_doodle_app.prototype), "back_drop"));
	($mol_mem(($.$bog_doodle_app.prototype), "Back_drop"));
	($mol_mem(($.$bog_doodle_app.prototype), "Back_tools"));
	($mol_mem(($.$bog_doodle_app.prototype), "Back_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "Share"));
	($mol_mem(($.$bog_doodle_app.prototype), "export_png"));
	($mol_mem(($.$bog_doodle_app.prototype), "Png"));
	($mol_mem(($.$bog_doodle_app.prototype), "export_wav"));
	($mol_mem(($.$bog_doodle_app.prototype), "Wav"));
	($mol_mem(($.$bog_doodle_app.prototype), "export_midi"));
	($mol_mem(($.$bog_doodle_app.prototype), "Midi"));
	($mol_mem(($.$bog_doodle_app.prototype), "Export_tools"));
	($mol_mem(($.$bog_doodle_app.prototype), "Export_field"));
	($mol_mem(($.$bog_doodle_app.prototype), "About"));
	($mol_mem(($.$bog_doodle_app.prototype), "piece_new"));
	($mol_mem(($.$bog_doodle_app.prototype), "Gallery_new"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "piece_open"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Piece_title"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Piece_info"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Piece_open"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "piece_drop"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Piece_drop_icon"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Piece_drop"));
	($mol_mem_key(($.$bog_doodle_app.prototype), "Piece"));
	($mol_mem(($.$bog_doodle_app.prototype), "Store"));
	($mol_mem(($.$bog_doodle_app.prototype), "Layers"));
	($mol_mem(($.$bog_doodle_app.prototype), "Settings"));
	($mol_mem(($.$bog_doodle_app.prototype), "Gallery"));


;
"use strict";
var $;
(function ($) {
    function $bog_doodle_wav(channels, rate) {
        const count = channels.length;
        const frames = channels[0]?.length ?? 0;
        const size = frames * count * 2;
        const view = new DataView(new ArrayBuffer(44 + size));
        const text = (at, str) => {
            for (let i = 0; i < str.length; ++i)
                view.setUint8(at + i, str.charCodeAt(i));
        };
        text(0, 'RIFF');
        view.setUint32(4, 36 + size, true);
        text(8, 'WAVE');
        text(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, count, true);
        view.setUint32(24, rate, true);
        view.setUint32(28, rate * count * 2, true);
        view.setUint16(32, count * 2, true);
        view.setUint16(34, 16, true);
        text(36, 'data');
        view.setUint32(40, size, true);
        let at = 44;
        for (let frame = 0; frame < frames; ++frame) {
            for (const channel of channels) {
                const sample = Math.max(-1, Math.min(1, channel[frame]));
                view.setInt16(at, Math.round(sample < 0 ? sample * 0x8000 : sample * 0x7fff), true);
                at += 2;
            }
        }
        return new Uint8Array(view.buffer);
    }
    $.$bog_doodle_wav = $bog_doodle_wav;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function varlen(value) {
        const bytes = [value & 127];
        while (value > 127) {
            value >>= 7;
            bytes.unshift((value & 127) | 128);
        }
        return bytes;
    }
    function $bog_doodle_midi_file(notes, bpm, ppq = 480) {
        const moments = [];
        for (const note of notes) {
            const start = Math.round(note.time * ppq);
            const end = Math.max(start + 1, Math.round((note.time + note.length) * ppq));
            const velocity = Math.max(1, Math.min(127, Math.round(note.velocity * 127)));
            const channel = note.channel & 15;
            moments.push({ tick: start, order: 1, bytes: [0x90 | channel, note.midi, velocity] });
            moments.push({ tick: end, order: 0, bytes: [0x80 | channel, note.midi, 0] });
        }
        moments.sort((a, b) => a.tick - b.tick || a.order - b.order);
        const tempo = Math.round(60_000_000 / bpm);
        const track = [0, 0xff, 0x51, 3, (tempo >> 16) & 255, (tempo >> 8) & 255, tempo & 255];
        let tick = 0;
        for (const moment of moments) {
            track.push(...varlen(moment.tick - tick), ...moment.bytes);
            tick = moment.tick;
        }
        track.push(0, 0xff, 0x2f, 0);
        const size = track.length;
        return new Uint8Array([
            0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, (ppq >> 8) & 255, ppq & 255,
            0x4d, 0x54, 0x72, 0x6b, (size >>> 24) & 255, (size >> 16) & 255, (size >> 8) & 255, size & 255,
            ...track,
        ]);
    }
    $.$bog_doodle_midi_file = $bog_doodle_midi_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_doodle_player extends $mol_object {
        piece() {
            return $bog_doodle_piece_empty();
        }
        pattern() {
            return 0;
        }
        click() {
            return false;
        }
        steps_per_bar() {
            return $bog_doodle_score_grids[this.piece().grid] ?? 8;
        }
        steps() {
            return this.steps_per_bar() * this.piece().bars;
        }
        bar_time() {
            return 4 * 60 / Math.max(20, this.piece().bpm);
        }
        notes() {
            const piece = this.piece();
            return $bog_doodle_scale_notes(piece.key, piece.scale, piece.octave, piece.range);
        }
        events(pattern) {
            const events = $bog_doodle_score_thin($bog_doodle_score(this.piece().patterns[pattern] ?? [], this.notes(), this.steps()), this.step_voices());
            const by_step = new Map();
            for (const event of events) {
                const list = by_step.get(event.step) ?? [];
                list.push(event);
                by_step.set(event.step, list);
            }
            return by_step;
        }
        from = 0;
        order(from = this.from) {
            const piece = this.piece();
            const count = piece.patterns.length;
            if (!piece.chain)
                return [Math.min(this.pattern(), count - 1)];
            return piece.patterns.map((_, index) => (Math.min(from, count - 1) + index) % count);
        }
        weak() {
            const nav = this.$.$mol_dom_context.navigator;
            return (nav?.hardwareConcurrency ?? 8) <= 4 || (nav?.deviceMemory ?? 8) <= 4;
        }
        step_voices() {
            return this.weak() ? 6 : 10;
        }
        max_voices() {
            return this.weak() ? 16 : 32;
        }
        voices = [];
        voice_take(start, end) {
            this.voices = this.voices.filter(until => until > start);
            if (this.voices.length >= this.max_voices())
                return false;
            this.voices.push(end);
            return true;
        }
        lookahead() {
            return 0.4;
        }
        catch_up(now) {
            if (this.base >= now + 0.02)
                return 0;
            const duration = this.bar_time() / this.steps_per_bar();
            const skipped = Math.ceil((now + 0.05 - this.base) / duration);
            this.base += skipped * duration;
            this.step = (this.step + skipped) % (this.steps() * this.order().length);
            return skipped;
        }
        audio = null;
        bus = null;
        timer = null;
        step = 0;
        base = 0;
        marks = [];
        context() {
            if (this.audio)
                return this.audio;
            const Context = this.$.$mol_dom_context.AudioContext;
            this.audio = new Context({ latencyHint: 'playback' });
            this.bus = $bog_doodle_synth_bus(this.audio);
            return this.audio;
        }
        playing(next) {
            return next ?? false;
        }
        start() {
            const ctx = this.context();
            ctx.resume();
            this.step = 0;
            this.from = this.pattern();
            this.base = ctx.currentTime + 0.1;
            this.marks = [];
            this.voices = [];
            this.playing(true);
            this.tick();
        }
        stop() {
            this.timer?.destructor();
            this.timer = null;
            this.marks = [];
            this.playing(false);
        }
        toggle() {
            if (this.playing())
                this.stop();
            else
                this.start();
        }
        tick() {
            const ctx = this.context();
            this.catch_up(ctx.currentTime);
            const ahead = ctx.currentTime + this.lookahead();
            while (this.base < ahead)
                this.schedule(ctx);
            this.timer = new this.$.$mol_after_timeout(50, () => this.tick());
        }
        schedule(ctx) {
            const steps = this.steps();
            const order = this.order();
            const pattern = order[Math.floor(this.step / steps) % order.length];
            const local = this.step % steps;
            const per_bar = this.steps_per_bar();
            const duration = this.bar_time() / per_bar;
            const time = this.base + $bog_doodle_score_time(local, per_bar, this.bar_time(), this.piece().swing) - local * duration;
            for (const event of this.events(pattern).get(local) ?? []) {
                const length = event.length * duration * 0.95;
                if (!this.voice_take(time, time + length + 0.8))
                    continue;
                $bog_doodle_synth_note(ctx, this.bus, event.color, $bog_doodle_scale_freq(event.midi), time, length, event.velocity);
            }
            const beat = per_bar / 4;
            if (this.click() && local % beat === 0) {
                $bog_doodle_synth_click(ctx, this.bus, time, local % per_bar === 0);
            }
            this.marks.push({ step: this.step, time: this.base, duration });
            if (this.marks.length > 64)
                this.marks.shift();
            this.base += duration;
            this.step = (this.step + 1) % (steps * order.length);
        }
        playhead() {
            if (!this.audio || !this.playing())
                return null;
            const now = this.audio.currentTime;
            let found = null;
            for (const mark of this.marks)
                if (mark.time <= now)
                    found = mark;
            if (!found)
                return null;
            const steps = this.steps();
            const order = this.order();
            const frac = Math.min(1, (now - found.time) / found.duration);
            return {
                pattern: order[Math.floor(found.step / steps) % order.length],
                x: (found.step % steps + frac) / steps,
            };
        }
        live(color, midi, velocity, length = 0.4) {
            const ctx = this.context();
            ctx.resume();
            $bog_doodle_synth_note(ctx, this.bus, color, $bog_doodle_scale_freq(midi), ctx.currentTime + 0.01, length, velocity);
        }
        async render(loops) {
            const steps = this.steps();
            const order = this.order(0);
            const per_bar = this.steps_per_bar();
            const bar_time = this.bar_time();
            const duration = bar_time / per_bar;
            const total = steps * order.length * loops;
            const rate = 44100;
            const Offline = this.$.$mol_dom_context.OfflineAudioContext;
            const ctx = new Offline(2, Math.ceil((total * duration + 2) * rate), rate);
            const bus = $bog_doodle_synth_bus(ctx);
            for (let step = 0; step < total; ++step) {
                const pattern = order[Math.floor(step / steps) % order.length];
                const local = step % steps;
                const time = (step - local) * duration + $bog_doodle_score_time(local, per_bar, bar_time, this.piece().swing);
                for (const event of this.events(pattern).get(local) ?? []) {
                    $bog_doodle_synth_note(ctx, bus, event.color, $bog_doodle_scale_freq(event.midi), time, event.length * duration * 0.95, event.velocity);
                }
            }
            const buffer = await ctx.startRendering();
            const channels = [];
            for (let i = 0; i < buffer.numberOfChannels; ++i)
                channels.push(buffer.getChannelData(i));
            return $bog_doodle_wav(channels, rate);
        }
        midi_notes() {
            const steps = this.steps();
            const beat_steps = this.steps_per_bar() / 4;
            const notes = [];
            this.order(0).forEach((pattern, index) => {
                for (const events of this.events(pattern).values()) {
                    for (const event of events)
                        notes.push({
                            time: (index * steps + event.step) / beat_steps,
                            length: event.length / beat_steps,
                            midi: event.midi,
                            velocity: event.velocity,
                            channel: event.color,
                        });
                }
            });
            return notes;
        }
        destructor() {
            this.stop();
            this.audio?.close();
        }
    }
    __decorate([
        $mol_mem
    ], $bog_doodle_player.prototype, "notes", null);
    __decorate([
        $mol_mem_key
    ], $bog_doodle_player.prototype, "events", null);
    __decorate([
        $mol_mem
    ], $bog_doodle_player.prototype, "playing", null);
    $.$bog_doodle_player = $bog_doodle_player;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$bog_doodle_vibe_list = [
        { id: 'calm', ink: '#2f6fd8', settings: { key: 7, scale: 'major_penta', octave: 3, range: 2, bpm: 72, bars: 2, grid: '8', swing: 0 } },
        { id: 'sad', ink: '#1f1d1a', settings: { key: 9, scale: 'minor', octave: 3, range: 2, bpm: 66, bars: 2, grid: '8', swing: 0 } },
        { id: 'dream', ink: '#8a44c8', settings: { key: 5, scale: 'lydian', octave: 4, range: 2, bpm: 84, bars: 2, grid: '8t', swing: 0 } },
        { id: 'lullaby', ink: '#b35fd8', settings: { key: 0, scale: 'major', octave: 4, range: 1, bpm: 60, bars: 2, grid: '4', swing: 0 } },
        { id: 'meditation', ink: '#9b6fe0', settings: { key: 2, scale: 'major_penta', octave: 3, range: 2, bpm: 50, bars: 4, grid: '4', swing: 0 } },
        { id: 'rain', ink: '#3d8fd1', settings: { key: 11, scale: 'minor_penta', octave: 4, range: 2, bpm: 80, bars: 2, grid: '16', swing: 0 } },
        { id: 'sunrise', ink: '#f0a030', settings: { key: 2, scale: 'lydian', octave: 3, range: 2, bpm: 96, bars: 2, grid: '8', swing: 0 } },
        { id: 'space', ink: '#6a3fd0', settings: { key: 6, scale: 'lydian', octave: 2, range: 3, bpm: 60, bars: 4, grid: '8t', swing: 0 } },
        { id: 'fairy', ink: '#c060e0', settings: { key: 4, scale: 'major', octave: 4, range: 2, bpm: 88, bars: 2, grid: '8t', swing: 0 } },
        { id: 'epic', ink: '#2446a8', settings: { key: 2, scale: 'minor', octave: 2, range: 3, bpm: 90, bars: 2, grid: '8', swing: 0 } },
        { id: 'blues', ink: '#d8452f', settings: { key: 4, scale: 'blues', octave: 2, range: 2, bpm: 92, bars: 2, grid: '8', swing: 1 } },
        { id: 'jazz', ink: '#2a9d5c', settings: { key: 2, scale: 'dorian', octave: 3, range: 2, bpm: 118, bars: 2, grid: '8', swing: 0.66 } },
        { id: 'noir', ink: '#4a4a4a', settings: { key: 3, scale: 'harmonic', octave: 2, range: 2, bpm: 76, bars: 2, grid: '8', swing: 0.66 } },
        { id: 'lofi', ink: '#5a8fc8', settings: { key: 5, scale: 'dorian', octave: 3, range: 2, bpm: 78, bars: 2, grid: '8', swing: 0.66 } },
        { id: 'funk', ink: '#e08a1b', settings: { key: 4, scale: 'dorian', octave: 2, range: 2, bpm: 104, bars: 1, grid: '16', swing: 0.33 } },
        { id: 'dance', ink: '#e39a1b', settings: { key: 9, scale: 'minor_penta', octave: 3, range: 2, bpm: 124, bars: 1, grid: '16', swing: 0.33 } },
        { id: 'rock', ink: '#e8b020', settings: { key: 4, scale: 'minor_penta', octave: 2, range: 2, bpm: 136, bars: 2, grid: '8', swing: 0 } },
        { id: 'tango', ink: '#c8302a', settings: { key: 7, scale: 'harmonic', octave: 3, range: 2, bpm: 120, bars: 2, grid: '16', swing: 0 } },
        { id: 'march', ink: '#333333', settings: { key: 10, scale: 'major', octave: 3, range: 2, bpm: 112, bars: 2, grid: '8', swing: 0 } },
        { id: 'medieval', ink: '#a8402a', settings: { key: 2, scale: 'dorian', octave: 3, range: 2, bpm: 84, bars: 2, grid: '8t', swing: 0 } },
        { id: 'celtic', ink: '#3aa860', settings: { key: 2, scale: 'mixolydian', octave: 3, range: 2, bpm: 132, bars: 2, grid: '8t', swing: 0 } },
        { id: 'east', ink: '#e39a1b', settings: { key: 4, scale: 'harmonic', octave: 3, range: 2, bpm: 96, bars: 2, grid: '16', swing: 0 } },
        { id: 'anxiety', ink: '#b8201a', settings: { key: 1, scale: 'phrygian', octave: 2, range: 2, bpm: 108, bars: 1, grid: '16t', swing: 0 } },
        { id: 'horror', ink: '#5a1010', settings: { key: 6, scale: 'chromatic', octave: 2, range: 1, bpm: 70, bars: 2, grid: '8t', swing: 0 } },
        { id: 'cyber', ink: '#d82f8a', settings: { key: 1, scale: 'phrygian', octave: 2, range: 3, bpm: 140, bars: 1, grid: '16', swing: 0 } },
        { id: 'game', ink: '#f2c21b', settings: { key: 0, scale: 'mixolydian', octave: 4, range: 2, bpm: 150, bars: 2, grid: '16', swing: 0 } },
        { id: 'impressionism', ink: '#7fb0e0', settings: { key: 1, scale: 'lydian', octave: 3, range: 3, bpm: 70, bars: 4, grid: 'free', swing: 0 } },
        { id: 'minimalism', ink: '#2a9d8c', settings: { key: 0, scale: 'major_penta', octave: 3, range: 1, bpm: 120, bars: 1, grid: '16', swing: 0 } },
        { id: 'baroque', ink: '#c0502a', settings: { key: 2, scale: 'harmonic', octave: 3, range: 2, bpm: 100, bars: 2, grid: '16', swing: 0 } },
        { id: 'avantgarde', ink: '#a040c0', settings: { key: 6, scale: 'chromatic', octave: 3, range: 2, bpm: 96, bars: 2, grid: 'free', swing: 0 } },
    ];
    function $bog_doodle_vibe_apply(piece, id) {
        const vibe = $.$bog_doodle_vibe_list.find(item => item.id === id);
        return vibe ? { ...piece, ...vibe.settings } : piece;
    }
    $.$bog_doodle_vibe_apply = $bog_doodle_vibe_apply;
    function $bog_doodle_vibe_current(piece) {
        return $.$bog_doodle_vibe_list.find(vibe => Object.entries(vibe.settings).every(([key, value]) => piece[key] === value))?.id ?? '';
    }
    $.$bog_doodle_vibe_current = $bog_doodle_vibe_current;
})($ || ($ = {}));

;
	($.$mol_icon_eye_off) = class $mol_icon_eye_off extends ($.$mol_icon) {
		path(){
			return "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    class writer {
        bytes = [];
        uint(value) {
            value = Math.max(0, Math.round(value));
            while (value > 127) {
                this.bytes.push((value & 127) | 128);
                value = Math.floor(value / 128);
            }
            this.bytes.push(value);
        }
        int(value) {
            this.uint(value < 0 ? -value * 2 - 1 : value * 2);
        }
    }
    class reader {
        bytes;
        at = 0;
        constructor(bytes) {
            this.bytes = bytes;
        }
        uint() {
            let value = 0, scale = 1;
            while (this.at < this.bytes.length) {
                const byte = this.bytes[this.at++];
                value += (byte & 127) * scale;
                if (byte < 128)
                    break;
                scale *= 128;
            }
            return value;
        }
        int() {
            const value = this.uint();
            return value % 2 ? -(value + 1) / 2 : value / 2;
        }
    }
    const grid = 1023;
    const levels = 7;
    class $bog_doodle_share extends $mol_object {
        static bytes(piece) {
            const inks = [];
            const ink_index = (ink) => {
                const index = inks.indexOf(ink);
                if (index >= 0)
                    return index;
                inks.push(ink);
                return inks.length - 1;
            };
            const layer_ids = piece.layers.map(layer => layer.id);
            const body = new writer;
            body.uint(piece.patterns.length);
            for (const strokes of piece.patterns) {
                body.uint(strokes.length);
                for (const stroke of strokes) {
                    const points = $bog_doodle_sketch_simplify(stroke.points, 0.0015);
                    body.uint(ink_index($bog_doodle_synth_ink(stroke)));
                    body.uint(Math.max(0, layer_ids.indexOf(stroke.layer || layer_ids[0])));
                    body.uint((stroke.size ?? 1) * 20);
                    body.uint(points.length / 3);
                    let x = 0, y = 0, p = 0;
                    for (let i = 0; i < points.length; i += 3) {
                        const nx = Math.round(Math.max(0, Math.min(1, points[i])) * grid);
                        const ny = Math.round(Math.max(0, Math.min(1, points[i + 1])) * grid);
                        const np = Math.round(Math.max(0, Math.min(1, points[i + 2])) * levels);
                        body.int(nx - x);
                        body.int(ny - y);
                        body.int(np - p);
                        x = nx;
                        y = ny;
                        p = np;
                    }
                }
            }
            const head = new TextEncoder().encode(JSON.stringify({
                t: piece.title,
                k: piece.key,
                s: piece.scale,
                o: piece.octave,
                r: piece.range,
                b: piece.bpm,
                n: piece.bars,
                g: piece.grid,
                w: piece.swing,
                c: piece.chain ? 1 : 0,
                a: piece.axis,
                l: piece.layers.map(l => [l.name, l.visible ? 1 : 0, Math.round((l.opacity ?? 1) * 100)]),
                i: inks,
            }));
            const size = new writer;
            size.uint(head.length);
            return new Uint8Array([...size.bytes, ...head, ...body.bytes]);
        }
        static parse(bytes) {
            const read = new reader(bytes);
            const head_size = read.uint();
            const raw = JSON.parse(new TextDecoder().decode(bytes.slice(read.at, read.at + head_size)));
            read.at += head_size;
            const empty = $bog_doodle_piece_empty();
            const inks = (raw.i ?? []);
            const layers = (raw.l ?? []).map(([name, visible, opacity], index) => ({
                id: 'l' + (index + 1),
                name: String(name ?? ''),
                visible: Boolean(visible),
                ...Number(opacity) < 100 ? { opacity: Math.max(0, Number(opacity)) / 100 } : {},
            }));
            const patterns = [];
            const pattern_count = read.uint();
            for (let pi = 0; pi < pattern_count; ++pi) {
                const strokes = [];
                const stroke_count = read.uint();
                for (let si = 0; si < stroke_count; ++si) {
                    const ink = inks[read.uint()] ?? '#1f1d1a';
                    const layer = read.uint();
                    const size = read.uint() / 20;
                    const count = read.uint();
                    const points = [];
                    let x = 0, y = 0, p = 0;
                    for (let k = 0; k < count; ++k) {
                        x += read.int();
                        y += read.int();
                        p += read.int();
                        points.push(x / grid, y / grid, p / levels);
                    }
                    strokes.push({
                        id: $bog_doodle_sketch_stroke_id(),
                        color: $bog_doodle_synth_timbre(ink),
                        ink,
                        ...size && size !== 1 ? { size } : {},
                        layer: 'l' + (layer + 1),
                        points,
                    });
                }
                patterns.push(strokes);
            }
            return {
                ...empty,
                title: String(raw.t ?? ''),
                key: Number(raw.k ?? empty.key),
                scale: raw.s in $bog_doodle_scale_steps ? raw.s : empty.scale,
                octave: Number(raw.o ?? empty.octave),
                range: Number(raw.r ?? empty.range),
                bpm: Number(raw.b ?? empty.bpm),
                bars: Number(raw.n ?? empty.bars),
                grid: raw.g in $bog_doodle_score_grids ? raw.g : empty.grid,
                swing: Number(raw.w ?? 0),
                chain: Boolean(raw.c),
                axis: raw.a === 'time_x' ? 'time_x' : 'time_y',
                layers: layers.length ? layers : empty.layers,
                patterns: patterns.length ? patterns : [[]],
            };
        }
        static async squeeze(bytes, mode) {
            const Stream = mode === 'compress' ? CompressionStream : DecompressionStream;
            const stream = new Blob([bytes]).stream().pipeThrough(new Stream('deflate-raw'));
            return new Uint8Array(await new Response(stream).arrayBuffer());
        }
        static async encode(piece) {
            const packed = await this.squeeze(this.bytes(piece), 'compress');
            return 'z' + $mol_base64_encode(packed).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        }
        static async decode(code) {
            if (!code.startsWith('z'))
                return $bog_doodle_piece_unpack(code);
            const base64 = code.slice(1).replace(/-/g, '+').replace(/_/g, '/');
            const bytes = $mol_base64_decode(base64 + '='.repeat((4 - base64.length % 4) % 4));
            return this.parse(await this.squeeze(bytes, 'decompress'));
        }
    }
    $.$bog_doodle_share = $bog_doodle_share;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    /** Installs service worker proxy, which caches all requests and respond from cache on http errors. */
    function $mol_offline_web() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                // caches.delete( '$mol_offline' )
                ;
                self.clients.claim();
                $$.$mol_log3_done({
                    place: '$mol_offline',
                    message: 'Activated',
                });
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                // console.log( 'FETCH', request.mode, request.cache, request.url )
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET')
                    return;
                if (!/^https?:/.test(request.url))
                    return;
                if (/\?/.test(request.url))
                    return;
                if (request.cache === 'no-store')
                    return;
                const fetch_data = () => fetch(new Request(request, { credentials: 'omit' })).then(response => {
                    if (response.status !== 200)
                        return response;
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(request, response)));
                    return response.clone();
                });
                const enrich = (response) => {
                    // console.log( 'ENRICH', response.status, response.url )
                    if (!response.status)
                        return response;
                    const headers = new Headers(response.headers);
                    headers.set("$mol_offline", "");
                    headers.set("Origin-Agent-Cluster", "?1"); // prevent thread sharing
                    // headers.set( "Cross-Origin-Embedder-Policy", "credentialless" )
                    // headers.set( "Cross-Origin-Resource-Policy", "cross-origin" )
                    // headers.set( "Cross-Origin-Opener-Policy", "same-origin" )
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers,
                    });
                };
                const fresh = request.cache === 'force-cache' ? null : fetch_data();
                if (fresh)
                    event.waitUntil(fresh.then(enrich));
                event.respondWith(caches.match(request).then(cached => request.cache === 'no-cache' || request.cache === 'reload'
                    ? (cached
                        ? fresh
                            .then(actual => {
                            if (actual.status === cached.status)
                                return actual;
                            throw new Error(`${actual.status}${actual.statusText ? ` ${actual.statusText}` : ''}`, { cause: actual });
                        })
                            .catch((err) => {
                            const cloned = cached.clone();
                            const message = `${err.cause instanceof Response ? '' : '500 '}${err.message} $mol_offline fallback to cache`;
                            cloned.headers.set('$mol_offline_remote_status', message);
                            return cloned;
                        })
                        : fresh)
                    : (cached || fresh || fetch_data())).then(enrich));
            });
            self.addEventListener('beforeinstallprompt', (event) => event.prompt());
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            $mol_dom.addEventListener('DOMContentLoaded', () => {
                navigator.serviceWorker.register('web.js').then(reg => {
                    reg.addEventListener('updatefound', () => {
                        $$.$mol_log3_rise({
                            place: '$mol_offline',
                            message: 'Outdated',
                        });
                        const worker = reg.installing;
                        worker.addEventListener('statechange', () => {
                            if (worker.state !== 'activated')
                                return;
                            window.location.reload();
                        });
                    });
                });
            });
        }
    }
    $.$mol_offline_web = $mol_offline_web;
    $.$mol_offline = $mol_offline_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_doodle_app extends $.$bog_doodle_app {
            Player() {
                return $bog_doodle_player.make({
                    $: this.$,
                    piece: () => this.piece(),
                    pattern: () => this.pattern(),
                    click: () => this.click(),
                });
            }
            share() {
                return this.$.$mol_state_arg.value('share') ?? '';
            }
            piece(next) {
                const store = this.Store();
                const share = this.share();
                if (next === undefined) {
                    if (share)
                        return this.share_piece();
                    const id = store.current();
                    return id ? store.piece(id) : $bog_doodle_piece_empty();
                }
                if (share || !store.current()) {
                    store.create(next);
                    this.$.$mol_state_arg.value('share', null);
                    return next;
                }
                store.save(store.current(), next);
                return next;
            }
            piece_patch(patch) {
                this.piece({ ...this.piece(), ...patch });
            }
            pattern(next) {
                const count = this.piece().patterns.length;
                return this.pattern_kept = Math.max(0, Math.min(count - 1, next ?? this.pattern_kept));
            }
            pattern_kept = 0;
            strokes(pattern, next) {
                const piece = this.piece();
                if (next === undefined)
                    return piece.patterns[pattern] ?? [];
                const patterns = piece.patterns.slice();
                patterns[pattern] = next;
                this.piece_patch({ patterns });
                return next;
            }
            session(next) {
                return next ?? 0;
            }
            sketch_key() {
                return this.session() + '/' + this.pattern();
            }
            Sketch(key) {
                const pattern = Number(key.split('/')[1]);
                return $bog_doodle_sketch.make({
                    $: this.$,
                    strokes: (next) => this.strokes(pattern, next),
                });
            }
            sketch() {
                return this.Sketch(this.sketch_key());
            }
            undo_enabled() {
                return this.sketch().undo_enabled();
            }
            redo_enabled() {
                return this.sketch().redo_enabled();
            }
            undo() {
                this.sketch().undo();
                this.selected([]);
            }
            redo() {
                this.sketch().redo();
                this.selected([]);
            }
            notes() {
                return this.Player().notes();
            }
            steps() {
                return this.Player().steps();
            }
            beat_steps() {
                return this.Player().steps_per_bar() / 4;
            }
            bar_steps() {
                return this.Player().steps_per_bar();
            }
            playing() {
                return this.Player().playing();
            }
            playhead() {
                const head = this.Player().playhead();
                if (!head)
                    return null;
                if (head.pattern !== this.pattern() && this.piece().chain)
                    this.pattern_follow(head.pattern);
                return head.pattern === this.pattern() ? head.x : null;
            }
            pattern_follow(index) {
                this.pattern(index);
                this.selected([]);
            }
            play_toggle() {
                this.Player().toggle();
            }
            play_icon() {
                return [this.playing() ? this.Stop_icon() : this.Play_icon()];
            }
            pref(key, next, fallback) {
                return this.$.$mol_state_local.value('bog_doodle_' + key, next) ?? fallback;
            }
            tool(next) {
                return this.pref('tool', next, 'draw');
            }
            tool_set(tool, next) {
                if (next) {
                    this.tool(tool);
                    if (tool !== 'select')
                        this.selected([]);
                }
                return this.tool() === tool;
            }
            tool_draw(next) {
                return this.tool_set('draw', next);
            }
            tool_erase(next) {
                return this.tool_set('erase', next);
            }
            tool_select(next) {
                return this.tool_set('select', next);
            }
            tool_pan(next) {
                return this.tool_set('pan', next);
            }
            board() {
                return this.Board();
            }
            zoom_reset() {
                this.board().zoom_reset();
            }
            zoom_in() {
                this.board().zoom_in();
            }
            zoom_out() {
                this.board().zoom_out();
            }
            zoom_percent() {
                return this.board().zoom_percent();
            }
            ink(next) {
                if (next !== undefined) {
                    this.ink_remember(next);
                    const selected = this.selected();
                    if (selected.length)
                        this.recolor(selected, next);
                    if (this.tool() !== 'draw' && !selected.length)
                        this.tool('draw');
                }
                return this.pref('ink', next, $bog_doodle_synth_colors[0].ink);
            }
            ink_recent(next) {
                return this.pref('ink_recent', next, []);
            }
            ink_remember(ink) {
                const palette = $bog_doodle_synth_colors.map(c => c.ink);
                if (palette.includes(ink))
                    return;
                this.ink_recent([ink, ...this.ink_recent().filter(item => item !== ink)].slice(0, 12));
            }
            color() {
                return $bog_doodle_synth_timbre(this.ink());
            }
            voice_name() {
                return this.voice_names()[String(this.color())] ?? '';
            }
            palette() {
                return [...$bog_doodle_synth_colors.map((_, index) => this.Color(index)), this.Ink_pick(), this.Voice()];
            }
            color_name(index) {
                return this.voice_names()[String(index)] ?? '';
            }
            color_ink(index) {
                return $bog_doodle_synth_colors[index].ink;
            }
            color_checked(index, next) {
                if (next)
                    this.ink(this.color_ink(index));
                return this.ink() === this.color_ink(index);
            }
            recolor(ids, ink) {
                const picked = new Set(ids);
                const color = $bog_doodle_synth_timbre(ink);
                const sketch = this.sketch();
                sketch.commit(sketch.strokes().map(s => picked.has(s.id) ? { ...s, ink, color } : s));
            }
            brush_value(next) {
                return this.pref('brush', next, 10);
            }
            brush() {
                return this.brush_value() / 10;
            }
            eraser(next) {
                return this.pref('eraser', next, 24);
            }
            size_tools() {
                const tool = this.tool();
                if (tool === 'draw')
                    return [this.Brush_size()];
                if (tool === 'erase')
                    return [this.Eraser_size()];
                return [];
            }
            size_step(dir) {
                if (this.tool() === 'erase')
                    this.eraser(Math.max(6, Math.min(120, this.eraser() + dir * 6)));
                else
                    this.brush_value(Math.max(2, Math.min(40, this.brush_value() + dir * 2)));
            }
            selected(next) {
                this.sketch_key();
                return next ?? [];
            }
            selection_tools() {
                return [
                    ...this.tool() === 'select' ? [this.Select_all()] : [],
                    ...this.selected().length ? [this.Copy(), this.Drop()] : [],
                ];
            }
            select_all() {
                const board = this.board();
                if (this.tool() !== 'select')
                    this.tool('select');
                this.selected(this.sketch().strokes().filter(s => board.editable(s)).map(s => s.id));
            }
            panel_open() {
                return this.panel() !== '';
            }
            panel_close() {
                this.panel('');
            }
            layer_opacity(id, next) {
                if (next !== undefined)
                    this.layer_patch(id, { opacity: Math.max(0, Math.min(100, next)) / 100 });
                return Math.round((this.layers()[this.layer_index(id)]?.opacity ?? 1) * 100);
            }
            layer_alpha(id) {
                return this.layer_opacity(id) / 100;
            }
            selection_copy() {
                this.selected(this.sketch().copy(this.selected(), 0.02, -0.02));
            }
            selection_drop() {
                this.sketch().remove(this.selected());
                this.selected([]);
            }
            pattern_tabs() {
                return [...this.piece().patterns.map((_, index) => this.Pattern(index)), this.Pattern_add()];
            }
            pattern_title(index) {
                return String(index + 1);
            }
            pattern_checked(index, next) {
                if (next) {
                    this.pattern(index);
                    this.selected([]);
                }
                return this.pattern() === index;
            }
            pattern_add() {
                this.piece_patch({ patterns: [...this.piece().patterns, []] });
                this.pattern(this.piece().patterns.length - 1);
            }
            pattern_copy() {
                const patterns = this.piece().patterns.slice();
                const index = this.pattern();
                patterns.splice(index + 1, 0, patterns[index].map(s => ({ ...s, id: $bog_doodle_sketch_stroke_id() })));
                this.piece_patch({ patterns });
                this.pattern(index + 1);
            }
            pattern_clear() {
                this.sketch().clear();
                this.selected([]);
            }
            pattern_drop_enabled() {
                return this.piece().patterns.length > 1;
            }
            pattern_drop() {
                const patterns = this.piece().patterns.slice();
                if (patterns.length < 2)
                    return;
                patterns.splice(this.pattern(), 1);
                this.piece_patch({ patterns });
                this.pattern(this.pattern() - 1);
            }
            panel(next) {
                return next ?? '';
            }
            settings_opened(next) {
                if (next !== undefined)
                    this.panel(next ? 'settings' : '');
                return this.panel() === 'settings';
            }
            gallery_opened(next) {
                if (next !== undefined)
                    this.panel(next ? 'gallery' : '');
                return this.panel() === 'gallery';
            }
            main() {
                return this.panel() ? [this.Board(), this.Panel()] : [this.Board()];
            }
            layers_opened(next) {
                if (next !== undefined)
                    this.panel(next ? 'layers' : '');
                return this.panel() === 'layers';
            }
            panel_rows() {
                const panel = this.panel();
                if (panel === 'gallery')
                    return [this.Gallery()];
                if (panel === 'layers')
                    return [this.Layers()];
                return [this.Settings()];
            }
            axis() {
                return this.piece().axis;
            }
            axis_value(next) {
                if (next !== undefined)
                    this.piece_patch({ axis: next });
                return this.piece().axis;
            }
            vibe_list() {
                return $bog_doodle_vibe_list.map(vibe => this.Vibe(vibe.id));
            }
            vibe_name(id) {
                return this.vibe_names()[id] ?? id;
            }
            vibe_checked(id, next) {
                if (next) {
                    this.piece($bog_doodle_vibe_apply(this.piece(), id));
                    const vibe = $bog_doodle_vibe_list.find(item => item.id === id);
                    if (vibe)
                        this.ink(vibe.ink);
                }
                return $bog_doodle_vibe_current(this.piece()) === id;
            }
            layers() {
                return this.piece().layers;
            }
            layer_default() {
                return this.layers()[0].id;
            }
            layer_order() {
                return this.layers().filter(layer => layer.visible).map(layer => layer.id);
            }
            layer_kept = '';
            layer_active(next) {
                const ids = this.layers().map(layer => layer.id);
                const id = next ?? this.layer_kept;
                return this.layer_kept = ids.includes(id) ? id : ids[ids.length - 1];
            }
            layer_focus(next) {
                return this.pref('layer_focus', next, false);
            }
            layer_rows() {
                return this.layers().map(layer => layer.id).reverse().map(id => this.Layer(id));
            }
            layer_index(id) {
                return this.layers().findIndex(layer => layer.id === id);
            }
            layer_patch(id, patch) {
                this.piece_patch({ layers: this.layers().map(layer => layer.id === id ? { ...layer, ...patch } : layer) });
            }
            layer_title(id) {
                const layer = this.layers()[this.layer_index(id)];
                return layer?.name || this.layer_name_default(id);
            }
            layer_name_default(id) {
                return this.layer_prefix() + ' ' + (this.layer_index(id) + 1);
            }
            layer_name_hint() {
                return this.layer_name_default(this.layer_active());
            }
            layer_name(next) {
                const id = this.layer_active();
                if (next !== undefined)
                    this.layer_patch(id, { name: next });
                return this.layers()[this.layer_index(id)]?.name ?? '';
            }
            layer_visible(id, next) {
                if (next !== undefined)
                    this.layer_patch(id, { visible: next });
                return this.layers()[this.layer_index(id)]?.visible ?? true;
            }
            Layer_visible_icon(id) {
                return this.layer_visible(id) ? new this.$.$mol_icon_eye : new this.$.$mol_icon_eye_off;
            }
            layer_picked(id, next) {
                if (next) {
                    this.layer_active(id);
                    this.selected([]);
                    if (!this.layer_visible(id))
                        this.layer_visible(id, true);
                }
                return this.layer_active() === id;
            }
            layer_add() {
                const id = 'l' + $bog_doodle_sketch_stroke_id();
                this.piece_patch({ layers: [...this.layers(), { id, name: '', visible: true }] });
                this.layer_active(id);
                this.selected([]);
            }
            layer_move(id, dir) {
                const layers = this.layers().slice();
                const from = this.layer_index(id);
                const to = from + dir;
                if (from < 0 || to < 0 || to >= layers.length)
                    return;
                const [layer] = layers.splice(from, 1);
                layers.splice(to, 0, layer);
                const first = this.layers()[0].id;
                const patterns = first === layers[0].id
                    ? this.piece().patterns
                    : this.piece().patterns.map(strokes => strokes.map(s => s.layer ? s : { ...s, layer: first }));
                this.piece_patch({ layers, patterns });
            }
            layer_up(id) {
                this.layer_move(id, 1);
            }
            layer_down(id) {
                this.layer_move(id, -1);
            }
            layer_drop_enabled() {
                return this.layers().length > 1;
            }
            layer_drop(id) {
                if (this.layers().length < 2)
                    return;
                const first = this.layer_default();
                const of = (s) => s.layer || first;
                const layers = this.layers().filter(layer => layer.id !== id);
                const patterns = this.piece().patterns.map(strokes => strokes
                    .filter(s => of(s) !== id)
                    .map(s => s.layer ? s : { ...s, layer: first }));
                this.piece_patch({ layers, patterns });
                this.selected([]);
            }
            piece_title(next) {
                if (next !== undefined)
                    this.piece_patch({ title: next });
                return this.piece().title;
            }
            key_options() {
                return Object.fromEntries($bog_doodle_scale_keys.map((name, index) => [String(index), name]));
            }
            key_value(next) {
                if (next !== undefined)
                    this.piece_patch({ key: Number(next) });
                return String(this.piece().key);
            }
            scale_value(next) {
                if (next !== undefined)
                    this.piece_patch({ scale: next });
                return this.piece().scale;
            }
            range_value(next) {
                if (next !== undefined)
                    this.piece_patch({ range: Number(next) });
                return String(this.piece().range);
            }
            octave_value(next) {
                if (next !== undefined && next >= 1 && next <= 6)
                    this.piece_patch({ octave: Math.round(next) });
                return this.piece().octave;
            }
            bpm_value(next) {
                if (next !== undefined && next >= 30 && next <= 300)
                    this.piece_patch({ bpm: Math.round(next) });
                return this.piece().bpm;
            }
            bars_value(next) {
                if (next !== undefined)
                    this.piece_patch({ bars: Number(next) });
                return String(this.piece().bars);
            }
            grid_value(next) {
                if (next !== undefined)
                    this.piece_patch({ grid: next });
                return this.piece().grid;
            }
            swing_value(next) {
                if (next !== undefined)
                    this.piece_patch({ swing: Number(next) });
                return String(this.piece().swing);
            }
            chain(next) {
                if (next !== undefined)
                    this.piece_patch({ chain: next });
                return this.piece().chain;
            }
            taps = [];
            tap() {
                const now = Date.now();
                this.taps = [...this.taps.filter(time => now - time < 3000), now].slice(-5);
                if (this.taps.length < 2)
                    return;
                const gap = (this.taps[this.taps.length - 1] - this.taps[0]) / (this.taps.length - 1);
                this.bpm_value(Math.round(60000 / gap));
            }
            click(next) {
                return this.pref('click', next, false);
            }
            snap(next) {
                return this.pref('snap', next, false);
            }
            pen_only(next) {
                return this.pref('pen_only', next, false);
            }
            midi_in(next) {
                return this.pref('midi_in', next, false);
            }
            last_note = null;
            note_preview(next) {
                if (next !== undefined) {
                    if (next !== null && next !== this.last_note && this.draw_sound() && !this.playing())
                        this.note_sound(next);
                    this.last_note = next;
                }
                return this.last_note;
            }
            note_sound(midi) {
                this.Player().live(this.color(), midi, 0.5, 0.25);
            }
            draw_sound(next) {
                return this.pref('draw_sound', next, false);
            }
            back_id() {
                return this.share() ? '' : this.Store().current();
            }
            back(next) {
                const id = this.back_id();
                if (!id)
                    return '';
                return this.Store().back(id, next);
            }
            back_enabled() {
                return Boolean(this.back());
            }
            back_drop() {
                this.back('');
            }
            back_files(next) {
                const file = next?.[0];
                if (file)
                    this.back_load(file);
                return [];
            }
            back_load(file) {
                if (!this.back_id())
                    this.piece(this.piece());
                const win = this.$.$mol_dom_context;
                const url = win.URL.createObjectURL(file);
                const image = new win.Image;
                image.onload = () => {
                    const scale = Math.min(1, 1024 / Math.max(image.naturalWidth, image.naturalHeight));
                    const canvas = win.document.createElement('canvas');
                    canvas.width = Math.round(image.naturalWidth * scale);
                    canvas.height = Math.round(image.naturalHeight * scale);
                    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
                    win.URL.revokeObjectURL(url);
                    this.back(canvas.toDataURL('image/jpeg', 0.7));
                };
                image.src = url;
            }
            share_piece() {
                try {
                    return $mol_wire_sync(this.$.$bog_doodle_share).decode(this.share());
                }
                catch (error) {
                    if ($mol_promise_like(error))
                        $mol_fail_hidden(error);
                    return $bog_doodle_piece_empty();
                }
            }
            share_code() {
                return $mol_wire_sync(this.$.$bog_doodle_share).encode(this.piece());
            }
            share_link() {
                const link = this.$.$mol_state_arg.link({ share: this.share_code() });
                return new URL(link, this.$.$mol_dom_context.location.href).toString();
            }
            file_name(ext) {
                const title = this.piece().title.trim() || 'doodle';
                return title.replace(/[\\/:*?"<>|]+/g, '_') + '.' + ext;
            }
            download(blob, ext) {
                const win = this.$.$mol_dom_context;
                const link = win.document.createElement('a');
                link.href = win.URL.createObjectURL(blob);
                link.download = this.file_name(ext);
                link.click();
                new this.$.$mol_after_timeout(1000, () => win.URL.revokeObjectURL(link.href));
            }
            export_png() {
                this.board().export_canvas().toBlob((blob) => blob && this.download(blob, 'png'), 'image/png');
            }
            export_wav() {
                this.Player().render(this.piece().chain ? 1 : 2).then(bytes => this.download(new Blob([bytes], { type: 'audio/wav' }), 'wav'));
            }
            export_midi() {
                const bytes = $bog_doodle_midi_file(this.Player().midi_notes(), this.piece().bpm);
                this.download(new Blob([bytes], { type: 'audio/midi' }), 'mid');
            }
            gallery_rows() {
                return [this.Gallery_new(), ...this.Store().ids().map(id => this.Piece(id))];
            }
            piece_name(id) {
                return this.Store().piece(id).title.trim() || this.untitled();
            }
            piece_info(id) {
                const piece = this.Store().piece(id);
                const strokes = piece.patterns.reduce((sum, list) => sum + list.length, 0);
                const stamp = this.Store().stamp(id);
                const date = stamp ? new Date(stamp).toLocaleDateString() : '';
                return [`${$bog_doodle_scale_keys[piece.key]} · ${strokes} · ${piece.bpm} bpm`, date].filter(Boolean).join(' · ');
            }
            piece_open(id) {
                this.Player().stop();
                this.$.$mol_state_arg.value('share', null);
                this.Store().current(id);
                this.session(this.session() + 1);
                this.pattern(0);
                this.panel('');
            }
            piece_new() {
                this.Player().stop();
                this.$.$mol_state_arg.value('share', null);
                this.Store().create();
                this.session(this.session() + 1);
                this.pattern(0);
                this.panel('');
            }
            piece_drop(id) {
                if (id === this.Store().current())
                    this.session(this.session() + 1);
                this.Store().remove(id);
            }
            hotkeys() {
                return new this.$.$mol_dom_listener(this.$.$mol_dom_context, 'keydown', (event) => this.hotkey(event), { passive: false });
            }
            hotkey(event) {
                if (event.defaultPrevented)
                    return;
                const target = event.target;
                if (target?.closest?.('input, textarea, [contenteditable]'))
                    return;
                const mod = event.ctrlKey || event.metaKey;
                const action = mod
                    ? { KeyZ: event.shiftKey ? 'redo' : 'undo', KeyY: 'redo', KeyA: 'all' }[event.code]
                    : {
                        Space: 'play', KeyB: 'draw', KeyP: 'draw', KeyE: 'erase', KeyV: 'select', KeyH: 'pan',
                        Digit0: 'zoom', Equal: 'zoom_in', NumpadAdd: 'zoom_in', Minus: 'zoom_out', NumpadSubtract: 'zoom_out',
                        BracketLeft: 'smaller', BracketRight: 'bigger',
                        KeyD: 'copy', Delete: 'drop', Backspace: 'drop', Escape: 'escape',
                    }[event.code];
                if (!action)
                    return;
                event.preventDefault();
                switch (action) {
                    case 'undo': return this.undo();
                    case 'redo': return this.redo();
                    case 'play': return this.play_toggle();
                    case 'zoom': return this.zoom_reset();
                    case 'zoom_in': return this.zoom_in();
                    case 'zoom_out': return this.zoom_out();
                    case 'smaller': return this.size_step(-1);
                    case 'bigger': return this.size_step(1);
                    case 'copy': return this.selected().length && this.selection_copy();
                    case 'drop': return this.selected().length && this.selection_drop();
                    case 'all': return this.select_all();
                    case 'escape': return this.panel_open() ? this.panel_close() : this.selected([]);
                    default: this.tool_set(action, true);
                }
            }
            midi_hold = new Map();
            midi_listen() {
                if (!this.midi_in())
                    return null;
                const nav = this.$.$mol_dom_context.navigator;
                if (!nav.requestMIDIAccess)
                    return null;
                const access = $mol_wire_sync(nav).requestMIDIAccess();
                const inputs = [...access.inputs.values()];
                for (const input of inputs)
                    input.onmidimessage = event => this.midi_message(event.data);
                return {
                    destructor: () => {
                        for (const input of inputs)
                            input.onmidimessage = null;
                    },
                };
            }
            midi_message(data) {
                const kind = data[0] & 0xf0;
                const midi = data[1];
                const velocity = (data[2] ?? 0) / 127;
                if (kind === 0x90 && velocity > 0)
                    return this.midi_down(midi, velocity);
                if (kind === 0x80 || kind === 0x90)
                    return this.midi_up(midi);
            }
            midi_down(midi, velocity) {
                this.Player().live(this.color(), midi, velocity, 0.6);
                const x = this.playhead();
                if (x !== null)
                    this.midi_hold.set(midi, { x, velocity });
            }
            midi_up(midi) {
                const hold = this.midi_hold.get(midi);
                this.midi_hold.delete(midi);
                if (!hold)
                    return;
                const now = this.playhead() ?? 0.9999;
                const end = now > hold.x ? now : 0.9999;
                const notes = this.notes();
                let row = 0;
                for (let i = 1; i < notes.length; ++i) {
                    if (Math.abs(notes[i] - midi) < Math.abs(notes[row] - midi))
                        row = i;
                }
                const y = $bog_doodle_scale_row_y(row, notes.length);
                const p = Math.max(0, Math.min(1, (hold.velocity - 0.25) / 0.75));
                this.sketch().add({ id: $bog_doodle_sketch_stroke_id(), color: this.color(), ink: this.ink(), layer: this.layer_active(), points: [hold.x, y, p, end, y, p] });
            }
        }
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "Player", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "share", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "piece", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "pattern", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "session", null);
        __decorate([
            $mol_mem_key
        ], $bog_doodle_app.prototype, "Sketch", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "tool", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "ink", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "ink_recent", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "brush_value", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "eraser", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "selected", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "panel", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "layer_active", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "layer_focus", null);
        __decorate([
            $mol_mem_key
        ], $bog_doodle_app.prototype, "Layer_visible_icon", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "click", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "snap", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "pen_only", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "midi_in", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "draw_sound", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "share_piece", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "share_code", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "hotkeys", null);
        __decorate([
            $mol_mem
        ], $bog_doodle_app.prototype, "midi_listen", null);
        $$.$bog_doodle_app = $bog_doodle_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("bog/doodle/app/app.view.css", "@media ( max-width: 720px ) {\n\t[bog_doodle_app_panel] {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: var(--mol_gap_space);\n\t\tbottom: var(--mol_gap_space);\n\t\tleft: var(--mol_gap_space);\n\t\tz-index: 2;\n\t\tbox-shadow: 0 4px 24px 0 #0004;\n\t}\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bog_doodle_app, {
            flex: {
                direction: 'column',
            },
            height: '100%',
            background: {
                color: $mol_theme.back,
            },
            color: $mol_theme.text,
            Bar: {
                flex: {
                    wrap: 'wrap',
                    shrink: 0,
                },
                alignItems: 'center',
                gap: $mol_gap.space,
                padding: $mol_gap.space,
            },
            Brand: {
                font: {
                    weight: 'bold',
                    size: '1.25rem',
                },
                padding: {
                    left: $mol_gap.text,
                    right: $mol_gap.text,
                },
            },
            Title_input: {
                flex: {
                    grow: 0,
                    shrink: 1,
                    basis: '12rem',
                },
                minWidth: '7rem',
            },
            Tools: {
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.card,
                },
            },
            Palette: {
                flex: {
                    wrap: 'wrap',
                },
                maxWidth: '100%',
                alignItems: 'center',
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.card,
                },
            },
            Color: {
                padding: $mol_gap.text,
                '@': {
                    mol_check_checked: {
                        true: {
                            background: {
                                color: $mol_theme.hover,
                            },
                        },
                    },
                },
            },
            Color_dot: {
                width: '1.25rem',
                height: '1.25rem',
                border: {
                    radius: '50%',
                },
                background: {
                    color: $mol_style_func.vary('--bog_doodle_app_ink'),
                },
                boxShadow: `0 0 0 2px ${$mol_theme.back}`,
            },
            Ink_dot: {
                width: '1.25rem',
                height: '1.25rem',
                border: {
                    radius: '50%',
                },
                background: {
                    color: $mol_style_func.vary('--bog_doodle_app_ink'),
                },
                boxShadow: `0 0 0 2px ${$mol_theme.back}`,
            },
            Voice: {
                alignItems: 'center',
                color: $mol_theme.shade,
                padding: {
                    left: $mol_gap.text,
                    right: $mol_gap.text,
                },
                font: {
                    size: '.875rem',
                },
            },
            Size: {
                alignItems: 'center',
            },
            Zoom: {
                alignItems: 'center',
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.card,
                },
            },
            Zoom_level: {
                minWidth: '3.5rem',
                justify: {
                    content: 'center',
                },
            },
            Vibes: {
                flex: {
                    wrap: 'wrap',
                    shrink: 1,
                    basis: '100%',
                },
                minWidth: 0,
                gap: $mol_gap.space,
            },
            Vibe: {
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.card,
                },
                '@': {
                    mol_check_checked: {
                        true: {
                            color: $mol_theme.current,
                            font: {
                                weight: 'bold',
                            },
                        },
                    },
                },
            },
            Layer_tools: {
                flex: {
                    wrap: 'wrap',
                },
                alignItems: 'center',
                gap: $mol_gap.space,
                padding: $mol_gap.block,
            },
            Layer: {
                alignItems: 'center',
            },
            Layer_pick: {
                flex: {
                    grow: 1,
                },
                '@': {
                    mol_check_checked: {
                        true: {
                            color: $mol_theme.current,
                            font: {
                                weight: 'bold',
                            },
                        },
                    },
                },
            },
            Patterns: {
                flex: {
                    wrap: 'wrap',
                },
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.card,
                },
            },
            Pattern: {
                justify: {
                    content: 'center',
                },
                minWidth: '2.5rem',
                '@': {
                    mol_check_checked: {
                        true: {
                            color: $mol_theme.current,
                            font: {
                                weight: 'bold',
                            },
                        },
                    },
                },
            },
            Main: {
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 0,
                },
                minHeight: 0,
                position: 'relative',
                padding: {
                    top: 0,
                    right: $mol_gap.space,
                    bottom: $mol_gap.space,
                    left: $mol_gap.space,
                },
                gap: $mol_gap.space,
            },
            Panel: {
                flex: {
                    grow: 0,
                    shrink: 0,
                    basis: '22rem',
                },
                maxWidth: '100%',
                border: {
                    radius: $mol_gap.round,
                },
                background: {
                    color: $mol_theme.back,
                },
            },
            Tempo_row: {
                gap: $mol_gap.space,
            },
            Flags: {
                flex: {
                    direction: 'column',
                },
                padding: $mol_gap.block,
            },
            Pattern_tools: {
                flex: {
                    wrap: 'wrap',
                },
            },
            Back_tools: {
                flex: {
                    wrap: 'wrap',
                },
            },
            Export_tools: {
                flex: {
                    wrap: 'wrap',
                },
            },
            Piece: {
                alignItems: 'center',
            },
            Piece_open: {
                flex: {
                    grow: 1,
                    direction: 'column',
                },
                alignItems: 'flex-start',
            },
            Piece_info: {
                color: $mol_theme.shade,
                font: {
                    size: '.875rem',
                },
            },
            Gallery_new: {
                margin: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));


//# sourceMappingURL=web.js.map
