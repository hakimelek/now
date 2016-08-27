//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/moment.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.14.4                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
;(function (global, factory) {                                                                                         // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, function () { 'use strict';                                                                                    // 11
                                                                                                                       // 12
    var hookCallback;                                                                                                  // 13
                                                                                                                       // 14
    function utils_hooks__hooks () {                                                                                   // 15
        return hookCallback.apply(null, arguments);                                                                    // 16
    }                                                                                                                  // 17
                                                                                                                       // 18
    // This is done to register the method called with moment()                                                        // 19
    // without creating circular dependencies.                                                                         // 20
    function setHookCallback (callback) {                                                                              // 21
        hookCallback = callback;                                                                                       // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    function isArray(input) {                                                                                          // 25
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';                   // 26
    }                                                                                                                  // 27
                                                                                                                       // 28
    function isObject(input) {                                                                                         // 29
        return Object.prototype.toString.call(input) === '[object Object]';                                            // 30
    }                                                                                                                  // 31
                                                                                                                       // 32
    function isObjectEmpty(obj) {                                                                                      // 33
        var k;                                                                                                         // 34
        for (k in obj) {                                                                                               // 35
            // even if its not own property I'd still call it non-empty                                                // 36
            return false;                                                                                              // 37
        }                                                                                                              // 38
        return true;                                                                                                   // 39
    }                                                                                                                  // 40
                                                                                                                       // 41
    function isDate(input) {                                                                                           // 42
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';                     // 43
    }                                                                                                                  // 44
                                                                                                                       // 45
    function map(arr, fn) {                                                                                            // 46
        var res = [], i;                                                                                               // 47
        for (i = 0; i < arr.length; ++i) {                                                                             // 48
            res.push(fn(arr[i], i));                                                                                   // 49
        }                                                                                                              // 50
        return res;                                                                                                    // 51
    }                                                                                                                  // 52
                                                                                                                       // 53
    function hasOwnProp(a, b) {                                                                                        // 54
        return Object.prototype.hasOwnProperty.call(a, b);                                                             // 55
    }                                                                                                                  // 56
                                                                                                                       // 57
    function extend(a, b) {                                                                                            // 58
        for (var i in b) {                                                                                             // 59
            if (hasOwnProp(b, i)) {                                                                                    // 60
                a[i] = b[i];                                                                                           // 61
            }                                                                                                          // 62
        }                                                                                                              // 63
                                                                                                                       // 64
        if (hasOwnProp(b, 'toString')) {                                                                               // 65
            a.toString = b.toString;                                                                                   // 66
        }                                                                                                              // 67
                                                                                                                       // 68
        if (hasOwnProp(b, 'valueOf')) {                                                                                // 69
            a.valueOf = b.valueOf;                                                                                     // 70
        }                                                                                                              // 71
                                                                                                                       // 72
        return a;                                                                                                      // 73
    }                                                                                                                  // 74
                                                                                                                       // 75
    function create_utc__createUTC (input, format, locale, strict) {                                                   // 76
        return createLocalOrUTC(input, format, locale, strict, true).utc();                                            // 77
    }                                                                                                                  // 78
                                                                                                                       // 79
    function defaultParsingFlags() {                                                                                   // 80
        // We need to deep clone this object.                                                                          // 81
        return {                                                                                                       // 82
            empty           : false,                                                                                   // 83
            unusedTokens    : [],                                                                                      // 84
            unusedInput     : [],                                                                                      // 85
            overflow        : -2,                                                                                      // 86
            charsLeftOver   : 0,                                                                                       // 87
            nullInput       : false,                                                                                   // 88
            invalidMonth    : null,                                                                                    // 89
            invalidFormat   : false,                                                                                   // 90
            userInvalidated : false,                                                                                   // 91
            iso             : false,                                                                                   // 92
            parsedDateParts : [],                                                                                      // 93
            meridiem        : null                                                                                     // 94
        };                                                                                                             // 95
    }                                                                                                                  // 96
                                                                                                                       // 97
    function getParsingFlags(m) {                                                                                      // 98
        if (m._pf == null) {                                                                                           // 99
            m._pf = defaultParsingFlags();                                                                             // 100
        }                                                                                                              // 101
        return m._pf;                                                                                                  // 102
    }                                                                                                                  // 103
                                                                                                                       // 104
    var some;                                                                                                          // 105
    if (Array.prototype.some) {                                                                                        // 106
        some = Array.prototype.some;                                                                                   // 107
    } else {                                                                                                           // 108
        some = function (fun) {                                                                                        // 109
            var t = Object(this);                                                                                      // 110
            var len = t.length >>> 0;                                                                                  // 111
                                                                                                                       // 112
            for (var i = 0; i < len; i++) {                                                                            // 113
                if (i in t && fun.call(this, t[i], i, t)) {                                                            // 114
                    return true;                                                                                       // 115
                }                                                                                                      // 116
            }                                                                                                          // 117
                                                                                                                       // 118
            return false;                                                                                              // 119
        };                                                                                                             // 120
    }                                                                                                                  // 121
                                                                                                                       // 122
    function valid__isValid(m) {                                                                                       // 123
        if (m._isValid == null) {                                                                                      // 124
            var flags = getParsingFlags(m);                                                                            // 125
            var parsedParts = some.call(flags.parsedDateParts, function (i) {                                          // 126
                return i != null;                                                                                      // 127
            });                                                                                                        // 128
            m._isValid = !isNaN(m._d.getTime()) &&                                                                     // 129
                flags.overflow < 0 &&                                                                                  // 130
                !flags.empty &&                                                                                        // 131
                !flags.invalidMonth &&                                                                                 // 132
                !flags.invalidWeekday &&                                                                               // 133
                !flags.nullInput &&                                                                                    // 134
                !flags.invalidFormat &&                                                                                // 135
                !flags.userInvalidated &&                                                                              // 136
                (!flags.meridiem || (flags.meridiem && parsedParts));                                                  // 137
                                                                                                                       // 138
            if (m._strict) {                                                                                           // 139
                m._isValid = m._isValid &&                                                                             // 140
                    flags.charsLeftOver === 0 &&                                                                       // 141
                    flags.unusedTokens.length === 0 &&                                                                 // 142
                    flags.bigHour === undefined;                                                                       // 143
            }                                                                                                          // 144
        }                                                                                                              // 145
        return m._isValid;                                                                                             // 146
    }                                                                                                                  // 147
                                                                                                                       // 148
    function valid__createInvalid (flags) {                                                                            // 149
        var m = create_utc__createUTC(NaN);                                                                            // 150
        if (flags != null) {                                                                                           // 151
            extend(getParsingFlags(m), flags);                                                                         // 152
        }                                                                                                              // 153
        else {                                                                                                         // 154
            getParsingFlags(m).userInvalidated = true;                                                                 // 155
        }                                                                                                              // 156
                                                                                                                       // 157
        return m;                                                                                                      // 158
    }                                                                                                                  // 159
                                                                                                                       // 160
    function isUndefined(input) {                                                                                      // 161
        return input === void 0;                                                                                       // 162
    }                                                                                                                  // 163
                                                                                                                       // 164
    // Plugins that add properties should also add the key here (null value),                                          // 165
    // so we can properly clone ourselves.                                                                             // 166
    var momentProperties = utils_hooks__hooks.momentProperties = [];                                                   // 167
                                                                                                                       // 168
    function copyConfig(to, from) {                                                                                    // 169
        var i, prop, val;                                                                                              // 170
                                                                                                                       // 171
        if (!isUndefined(from._isAMomentObject)) {                                                                     // 172
            to._isAMomentObject = from._isAMomentObject;                                                               // 173
        }                                                                                                              // 174
        if (!isUndefined(from._i)) {                                                                                   // 175
            to._i = from._i;                                                                                           // 176
        }                                                                                                              // 177
        if (!isUndefined(from._f)) {                                                                                   // 178
            to._f = from._f;                                                                                           // 179
        }                                                                                                              // 180
        if (!isUndefined(from._l)) {                                                                                   // 181
            to._l = from._l;                                                                                           // 182
        }                                                                                                              // 183
        if (!isUndefined(from._strict)) {                                                                              // 184
            to._strict = from._strict;                                                                                 // 185
        }                                                                                                              // 186
        if (!isUndefined(from._tzm)) {                                                                                 // 187
            to._tzm = from._tzm;                                                                                       // 188
        }                                                                                                              // 189
        if (!isUndefined(from._isUTC)) {                                                                               // 190
            to._isUTC = from._isUTC;                                                                                   // 191
        }                                                                                                              // 192
        if (!isUndefined(from._offset)) {                                                                              // 193
            to._offset = from._offset;                                                                                 // 194
        }                                                                                                              // 195
        if (!isUndefined(from._pf)) {                                                                                  // 196
            to._pf = getParsingFlags(from);                                                                            // 197
        }                                                                                                              // 198
        if (!isUndefined(from._locale)) {                                                                              // 199
            to._locale = from._locale;                                                                                 // 200
        }                                                                                                              // 201
                                                                                                                       // 202
        if (momentProperties.length > 0) {                                                                             // 203
            for (i in momentProperties) {                                                                              // 204
                prop = momentProperties[i];                                                                            // 205
                val = from[prop];                                                                                      // 206
                if (!isUndefined(val)) {                                                                               // 207
                    to[prop] = val;                                                                                    // 208
                }                                                                                                      // 209
            }                                                                                                          // 210
        }                                                                                                              // 211
                                                                                                                       // 212
        return to;                                                                                                     // 213
    }                                                                                                                  // 214
                                                                                                                       // 215
    var updateInProgress = false;                                                                                      // 216
                                                                                                                       // 217
    // Moment prototype object                                                                                         // 218
    function Moment(config) {                                                                                          // 219
        copyConfig(this, config);                                                                                      // 220
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);                                             // 221
        // Prevent infinite loop in case updateOffset creates new moment                                               // 222
        // objects.                                                                                                    // 223
        if (updateInProgress === false) {                                                                              // 224
            updateInProgress = true;                                                                                   // 225
            utils_hooks__hooks.updateOffset(this);                                                                     // 226
            updateInProgress = false;                                                                                  // 227
        }                                                                                                              // 228
    }                                                                                                                  // 229
                                                                                                                       // 230
    function isMoment (obj) {                                                                                          // 231
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);                                 // 232
    }                                                                                                                  // 233
                                                                                                                       // 234
    function absFloor (number) {                                                                                       // 235
        if (number < 0) {                                                                                              // 236
            // -0 -> 0                                                                                                 // 237
            return Math.ceil(number) || 0;                                                                             // 238
        } else {                                                                                                       // 239
            return Math.floor(number);                                                                                 // 240
        }                                                                                                              // 241
    }                                                                                                                  // 242
                                                                                                                       // 243
    function toInt(argumentForCoercion) {                                                                              // 244
        var coercedNumber = +argumentForCoercion,                                                                      // 245
            value = 0;                                                                                                 // 246
                                                                                                                       // 247
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                          // 248
            value = absFloor(coercedNumber);                                                                           // 249
        }                                                                                                              // 250
                                                                                                                       // 251
        return value;                                                                                                  // 252
    }                                                                                                                  // 253
                                                                                                                       // 254
    // compare two arrays, return the number of differences                                                            // 255
    function compareArrays(array1, array2, dontConvert) {                                                              // 256
        var len = Math.min(array1.length, array2.length),                                                              // 257
            lengthDiff = Math.abs(array1.length - array2.length),                                                      // 258
            diffs = 0,                                                                                                 // 259
            i;                                                                                                         // 260
        for (i = 0; i < len; i++) {                                                                                    // 261
            if ((dontConvert && array1[i] !== array2[i]) ||                                                            // 262
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                             // 263
                diffs++;                                                                                               // 264
            }                                                                                                          // 265
        }                                                                                                              // 266
        return diffs + lengthDiff;                                                                                     // 267
    }                                                                                                                  // 268
                                                                                                                       // 269
    function warn(msg) {                                                                                               // 270
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&                                                // 271
                (typeof console !==  'undefined') && console.warn) {                                                   // 272
            console.warn('Deprecation warning: ' + msg);                                                               // 273
        }                                                                                                              // 274
    }                                                                                                                  // 275
                                                                                                                       // 276
    function deprecate(msg, fn) {                                                                                      // 277
        var firstTime = true;                                                                                          // 278
                                                                                                                       // 279
        return extend(function () {                                                                                    // 280
            if (utils_hooks__hooks.deprecationHandler != null) {                                                       // 281
                utils_hooks__hooks.deprecationHandler(null, msg);                                                      // 282
            }                                                                                                          // 283
            if (firstTime) {                                                                                           // 284
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;                                                                                     // 286
            }                                                                                                          // 287
            return fn.apply(this, arguments);                                                                          // 288
        }, fn);                                                                                                        // 289
    }                                                                                                                  // 290
                                                                                                                       // 291
    var deprecations = {};                                                                                             // 292
                                                                                                                       // 293
    function deprecateSimple(name, msg) {                                                                              // 294
        if (utils_hooks__hooks.deprecationHandler != null) {                                                           // 295
            utils_hooks__hooks.deprecationHandler(name, msg);                                                          // 296
        }                                                                                                              // 297
        if (!deprecations[name]) {                                                                                     // 298
            warn(msg);                                                                                                 // 299
            deprecations[name] = true;                                                                                 // 300
        }                                                                                                              // 301
    }                                                                                                                  // 302
                                                                                                                       // 303
    utils_hooks__hooks.suppressDeprecationWarnings = false;                                                            // 304
    utils_hooks__hooks.deprecationHandler = null;                                                                      // 305
                                                                                                                       // 306
    function isFunction(input) {                                                                                       // 307
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';             // 308
    }                                                                                                                  // 309
                                                                                                                       // 310
    function locale_set__set (config) {                                                                                // 311
        var prop, i;                                                                                                   // 312
        for (i in config) {                                                                                            // 313
            prop = config[i];                                                                                          // 314
            if (isFunction(prop)) {                                                                                    // 315
                this[i] = prop;                                                                                        // 316
            } else {                                                                                                   // 317
                this['_' + i] = prop;                                                                                  // 318
            }                                                                                                          // 319
        }                                                                                                              // 320
        this._config = config;                                                                                         // 321
        // Lenient ordinal parsing accepts just a number in addition to                                                // 322
        // number + (possibly) stuff coming from _ordinalParseLenient.                                                 // 323
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);                  // 324
    }                                                                                                                  // 325
                                                                                                                       // 326
    function mergeConfigs(parentConfig, childConfig) {                                                                 // 327
        var res = extend({}, parentConfig), prop;                                                                      // 328
        for (prop in childConfig) {                                                                                    // 329
            if (hasOwnProp(childConfig, prop)) {                                                                       // 330
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {                                     // 331
                    res[prop] = {};                                                                                    // 332
                    extend(res[prop], parentConfig[prop]);                                                             // 333
                    extend(res[prop], childConfig[prop]);                                                              // 334
                } else if (childConfig[prop] != null) {                                                                // 335
                    res[prop] = childConfig[prop];                                                                     // 336
                } else {                                                                                               // 337
                    delete res[prop];                                                                                  // 338
                }                                                                                                      // 339
            }                                                                                                          // 340
        }                                                                                                              // 341
        for (prop in parentConfig) {                                                                                   // 342
            if (hasOwnProp(parentConfig, prop) &&                                                                      // 343
                    !hasOwnProp(childConfig, prop) &&                                                                  // 344
                    isObject(parentConfig[prop])) {                                                                    // 345
                // make sure changes to properties don't modify parent config                                          // 346
                res[prop] = extend({}, res[prop]);                                                                     // 347
            }                                                                                                          // 348
        }                                                                                                              // 349
        return res;                                                                                                    // 350
    }                                                                                                                  // 351
                                                                                                                       // 352
    function Locale(config) {                                                                                          // 353
        if (config != null) {                                                                                          // 354
            this.set(config);                                                                                          // 355
        }                                                                                                              // 356
    }                                                                                                                  // 357
                                                                                                                       // 358
    var keys;                                                                                                          // 359
                                                                                                                       // 360
    if (Object.keys) {                                                                                                 // 361
        keys = Object.keys;                                                                                            // 362
    } else {                                                                                                           // 363
        keys = function (obj) {                                                                                        // 364
            var i, res = [];                                                                                           // 365
            for (i in obj) {                                                                                           // 366
                if (hasOwnProp(obj, i)) {                                                                              // 367
                    res.push(i);                                                                                       // 368
                }                                                                                                      // 369
            }                                                                                                          // 370
            return res;                                                                                                // 371
        };                                                                                                             // 372
    }                                                                                                                  // 373
                                                                                                                       // 374
    var defaultCalendar = {                                                                                            // 375
        sameDay : '[Today at] LT',                                                                                     // 376
        nextDay : '[Tomorrow at] LT',                                                                                  // 377
        nextWeek : 'dddd [at] LT',                                                                                     // 378
        lastDay : '[Yesterday at] LT',                                                                                 // 379
        lastWeek : '[Last] dddd [at] LT',                                                                              // 380
        sameElse : 'L'                                                                                                 // 381
    };                                                                                                                 // 382
                                                                                                                       // 383
    function locale_calendar__calendar (key, mom, now) {                                                               // 384
        var output = this._calendar[key] || this._calendar['sameElse'];                                                // 385
        return isFunction(output) ? output.call(mom, now) : output;                                                    // 386
    }                                                                                                                  // 387
                                                                                                                       // 388
    var defaultLongDateFormat = {                                                                                      // 389
        LTS  : 'h:mm:ss A',                                                                                            // 390
        LT   : 'h:mm A',                                                                                               // 391
        L    : 'MM/DD/YYYY',                                                                                           // 392
        LL   : 'MMMM D, YYYY',                                                                                         // 393
        LLL  : 'MMMM D, YYYY h:mm A',                                                                                  // 394
        LLLL : 'dddd, MMMM D, YYYY h:mm A'                                                                             // 395
    };                                                                                                                 // 396
                                                                                                                       // 397
    function longDateFormat (key) {                                                                                    // 398
        var format = this._longDateFormat[key],                                                                        // 399
            formatUpper = this._longDateFormat[key.toUpperCase()];                                                     // 400
                                                                                                                       // 401
        if (format || !formatUpper) {                                                                                  // 402
            return format;                                                                                             // 403
        }                                                                                                              // 404
                                                                                                                       // 405
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {                           // 406
            return val.slice(1);                                                                                       // 407
        });                                                                                                            // 408
                                                                                                                       // 409
        return this._longDateFormat[key];                                                                              // 410
    }                                                                                                                  // 411
                                                                                                                       // 412
    var defaultInvalidDate = 'Invalid date';                                                                           // 413
                                                                                                                       // 414
    function invalidDate () {                                                                                          // 415
        return this._invalidDate;                                                                                      // 416
    }                                                                                                                  // 417
                                                                                                                       // 418
    var defaultOrdinal = '%d';                                                                                         // 419
    var defaultOrdinalParse = /\d{1,2}/;                                                                               // 420
                                                                                                                       // 421
    function ordinal (number) {                                                                                        // 422
        return this._ordinal.replace('%d', number);                                                                    // 423
    }                                                                                                                  // 424
                                                                                                                       // 425
    var defaultRelativeTime = {                                                                                        // 426
        future : 'in %s',                                                                                              // 427
        past   : '%s ago',                                                                                             // 428
        s  : 'a few seconds',                                                                                          // 429
        m  : 'a minute',                                                                                               // 430
        mm : '%d minutes',                                                                                             // 431
        h  : 'an hour',                                                                                                // 432
        hh : '%d hours',                                                                                               // 433
        d  : 'a day',                                                                                                  // 434
        dd : '%d days',                                                                                                // 435
        M  : 'a month',                                                                                                // 436
        MM : '%d months',                                                                                              // 437
        y  : 'a year',                                                                                                 // 438
        yy : '%d years'                                                                                                // 439
    };                                                                                                                 // 440
                                                                                                                       // 441
    function relative__relativeTime (number, withoutSuffix, string, isFuture) {                                        // 442
        var output = this._relativeTime[string];                                                                       // 443
        return (isFunction(output)) ?                                                                                  // 444
            output(number, withoutSuffix, string, isFuture) :                                                          // 445
            output.replace(/%d/i, number);                                                                             // 446
    }                                                                                                                  // 447
                                                                                                                       // 448
    function pastFuture (diff, output) {                                                                               // 449
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                 // 450
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);                                    // 451
    }                                                                                                                  // 452
                                                                                                                       // 453
    var aliases = {};                                                                                                  // 454
                                                                                                                       // 455
    function addUnitAlias (unit, shorthand) {                                                                          // 456
        var lowerCase = unit.toLowerCase();                                                                            // 457
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                     // 458
    }                                                                                                                  // 459
                                                                                                                       // 460
    function normalizeUnits(units) {                                                                                   // 461
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                 // 462
    }                                                                                                                  // 463
                                                                                                                       // 464
    function normalizeObjectUnits(inputObject) {                                                                       // 465
        var normalizedInput = {},                                                                                      // 466
            normalizedProp,                                                                                            // 467
            prop;                                                                                                      // 468
                                                                                                                       // 469
        for (prop in inputObject) {                                                                                    // 470
            if (hasOwnProp(inputObject, prop)) {                                                                       // 471
                normalizedProp = normalizeUnits(prop);                                                                 // 472
                if (normalizedProp) {                                                                                  // 473
                    normalizedInput[normalizedProp] = inputObject[prop];                                               // 474
                }                                                                                                      // 475
            }                                                                                                          // 476
        }                                                                                                              // 477
                                                                                                                       // 478
        return normalizedInput;                                                                                        // 479
    }                                                                                                                  // 480
                                                                                                                       // 481
    var priorities = {};                                                                                               // 482
                                                                                                                       // 483
    function addUnitPriority(unit, priority) {                                                                         // 484
        priorities[unit] = priority;                                                                                   // 485
    }                                                                                                                  // 486
                                                                                                                       // 487
    function getPrioritizedUnits(unitsObj) {                                                                           // 488
        var units = [];                                                                                                // 489
        for (var u in unitsObj) {                                                                                      // 490
            units.push({unit: u, priority: priorities[u]});                                                            // 491
        }                                                                                                              // 492
        units.sort(function (a, b) {                                                                                   // 493
            return a.priority - b.priority;                                                                            // 494
        });                                                                                                            // 495
        return units;                                                                                                  // 496
    }                                                                                                                  // 497
                                                                                                                       // 498
    function makeGetSet (unit, keepTime) {                                                                             // 499
        return function (value) {                                                                                      // 500
            if (value != null) {                                                                                       // 501
                get_set__set(this, unit, value);                                                                       // 502
                utils_hooks__hooks.updateOffset(this, keepTime);                                                       // 503
                return this;                                                                                           // 504
            } else {                                                                                                   // 505
                return get_set__get(this, unit);                                                                       // 506
            }                                                                                                          // 507
        };                                                                                                             // 508
    }                                                                                                                  // 509
                                                                                                                       // 510
    function get_set__get (mom, unit) {                                                                                // 511
        return mom.isValid() ?                                                                                         // 512
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;                                                  // 513
    }                                                                                                                  // 514
                                                                                                                       // 515
    function get_set__set (mom, unit, value) {                                                                         // 516
        if (mom.isValid()) {                                                                                           // 517
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                   // 518
        }                                                                                                              // 519
    }                                                                                                                  // 520
                                                                                                                       // 521
    // MOMENTS                                                                                                         // 522
                                                                                                                       // 523
    function stringGet (units) {                                                                                       // 524
        units = normalizeUnits(units);                                                                                 // 525
        if (isFunction(this[units])) {                                                                                 // 526
            return this[units]();                                                                                      // 527
        }                                                                                                              // 528
        return this;                                                                                                   // 529
    }                                                                                                                  // 530
                                                                                                                       // 531
                                                                                                                       // 532
    function stringSet (units, value) {                                                                                // 533
        if (typeof units === 'object') {                                                                               // 534
            units = normalizeObjectUnits(units);                                                                       // 535
            var prioritized = getPrioritizedUnits(units);                                                              // 536
            for (var i = 0; i < prioritized.length; i++) {                                                             // 537
                this[prioritized[i].unit](units[prioritized[i].unit]);                                                 // 538
            }                                                                                                          // 539
        } else {                                                                                                       // 540
            units = normalizeUnits(units);                                                                             // 541
            if (isFunction(this[units])) {                                                                             // 542
                return this[units](value);                                                                             // 543
            }                                                                                                          // 544
        }                                                                                                              // 545
        return this;                                                                                                   // 546
    }                                                                                                                  // 547
                                                                                                                       // 548
    function zeroFill(number, targetLength, forceSign) {                                                               // 549
        var absNumber = '' + Math.abs(number),                                                                         // 550
            zerosToFill = targetLength - absNumber.length,                                                             // 551
            sign = number >= 0;                                                                                        // 552
        return (sign ? (forceSign ? '+' : '') : '-') +                                                                 // 553
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;                                   // 554
    }                                                                                                                  // 555
                                                                                                                       // 556
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 558
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                          // 559
                                                                                                                       // 560
    var formatFunctions = {};                                                                                          // 561
                                                                                                                       // 562
    var formatTokenFunctions = {};                                                                                     // 563
                                                                                                                       // 564
    // token:    'M'                                                                                                   // 565
    // padded:   ['MM', 2]                                                                                             // 566
    // ordinal:  'Mo'                                                                                                  // 567
    // callback: function () { this.month() + 1 }                                                                      // 568
    function addFormatToken (token, padded, ordinal, callback) {                                                       // 569
        var func = callback;                                                                                           // 570
        if (typeof callback === 'string') {                                                                            // 571
            func = function () {                                                                                       // 572
                return this[callback]();                                                                               // 573
            };                                                                                                         // 574
        }                                                                                                              // 575
        if (token) {                                                                                                   // 576
            formatTokenFunctions[token] = func;                                                                        // 577
        }                                                                                                              // 578
        if (padded) {                                                                                                  // 579
            formatTokenFunctions[padded[0]] = function () {                                                            // 580
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                    // 581
            };                                                                                                         // 582
        }                                                                                                              // 583
        if (ordinal) {                                                                                                 // 584
            formatTokenFunctions[ordinal] = function () {                                                              // 585
                return this.localeData().ordinal(func.apply(this, arguments), token);                                  // 586
            };                                                                                                         // 587
        }                                                                                                              // 588
    }                                                                                                                  // 589
                                                                                                                       // 590
    function removeFormattingTokens(input) {                                                                           // 591
        if (input.match(/\[[\s\S]/)) {                                                                                 // 592
            return input.replace(/^\[|\]$/g, '');                                                                      // 593
        }                                                                                                              // 594
        return input.replace(/\\/g, '');                                                                               // 595
    }                                                                                                                  // 596
                                                                                                                       // 597
    function makeFormatFunction(format) {                                                                              // 598
        var array = format.match(formattingTokens), i, length;                                                         // 599
                                                                                                                       // 600
        for (i = 0, length = array.length; i < length; i++) {                                                          // 601
            if (formatTokenFunctions[array[i]]) {                                                                      // 602
                array[i] = formatTokenFunctions[array[i]];                                                             // 603
            } else {                                                                                                   // 604
                array[i] = removeFormattingTokens(array[i]);                                                           // 605
            }                                                                                                          // 606
        }                                                                                                              // 607
                                                                                                                       // 608
        return function (mom) {                                                                                        // 609
            var output = '', i;                                                                                        // 610
            for (i = 0; i < length; i++) {                                                                             // 611
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];                        // 612
            }                                                                                                          // 613
            return output;                                                                                             // 614
        };                                                                                                             // 615
    }                                                                                                                  // 616
                                                                                                                       // 617
    // format date using native date object                                                                            // 618
    function formatMoment(m, format) {                                                                                 // 619
        if (!m.isValid()) {                                                                                            // 620
            return m.localeData().invalidDate();                                                                       // 621
        }                                                                                                              // 622
                                                                                                                       // 623
        format = expandFormat(format, m.localeData());                                                                 // 624
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);                               // 625
                                                                                                                       // 626
        return formatFunctions[format](m);                                                                             // 627
    }                                                                                                                  // 628
                                                                                                                       // 629
    function expandFormat(format, locale) {                                                                            // 630
        var i = 5;                                                                                                     // 631
                                                                                                                       // 632
        function replaceLongDateFormatTokens(input) {                                                                  // 633
            return locale.longDateFormat(input) || input;                                                              // 634
        }                                                                                                              // 635
                                                                                                                       // 636
        localFormattingTokens.lastIndex = 0;                                                                           // 637
        while (i >= 0 && localFormattingTokens.test(format)) {                                                         // 638
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                               // 639
            localFormattingTokens.lastIndex = 0;                                                                       // 640
            i -= 1;                                                                                                    // 641
        }                                                                                                              // 642
                                                                                                                       // 643
        return format;                                                                                                 // 644
    }                                                                                                                  // 645
                                                                                                                       // 646
    var match1         = /\d/;            //       0 - 9                                                               // 647
    var match2         = /\d\d/;          //      00 - 99                                                              // 648
    var match3         = /\d{3}/;         //     000 - 999                                                             // 649
    var match4         = /\d{4}/;         //    0000 - 9999                                                            // 650
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                          // 651
    var match1to2      = /\d\d?/;         //       0 - 99                                                              // 652
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999                                                            // 653
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999                                                          // 654
    var match1to3      = /\d{1,3}/;       //       0 - 999                                                             // 655
    var match1to4      = /\d{1,4}/;       //       0 - 9999                                                            // 656
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                          // 657
                                                                                                                       // 658
    var matchUnsigned  = /\d+/;           //       0 - inf                                                             // 659
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                             // 660
                                                                                                                       // 661
    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                       // 662
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z                        // 663
                                                                                                                       // 664
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                            // 665
                                                                                                                       // 666
    // any word (or two) characters or numbers including two/three word month in arabic.                               // 667
    // includes scottish gaelic two word and hyphenated months                                                         // 668
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 670
                                                                                                                       // 671
    var regexes = {};                                                                                                  // 672
                                                                                                                       // 673
    function addRegexToken (token, regex, strictRegex) {                                                               // 674
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {                                 // 675
            return (isStrict && strictRegex) ? strictRegex : regex;                                                    // 676
        };                                                                                                             // 677
    }                                                                                                                  // 678
                                                                                                                       // 679
    function getParseRegexForToken (token, config) {                                                                   // 680
        if (!hasOwnProp(regexes, token)) {                                                                             // 681
            return new RegExp(unescapeFormat(token));                                                                  // 682
        }                                                                                                              // 683
                                                                                                                       // 684
        return regexes[token](config._strict, config._locale);                                                         // 685
    }                                                                                                                  // 686
                                                                                                                       // 687
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript            // 688
    function unescapeFormat(s) {                                                                                       // 689
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;                                                                               // 691
        }));                                                                                                           // 692
    }                                                                                                                  // 693
                                                                                                                       // 694
    function regexEscape(s) {                                                                                          // 695
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                            // 696
    }                                                                                                                  // 697
                                                                                                                       // 698
    var tokens = {};                                                                                                   // 699
                                                                                                                       // 700
    function addParseToken (token, callback) {                                                                         // 701
        var i, func = callback;                                                                                        // 702
        if (typeof token === 'string') {                                                                               // 703
            token = [token];                                                                                           // 704
        }                                                                                                              // 705
        if (typeof callback === 'number') {                                                                            // 706
            func = function (input, array) {                                                                           // 707
                array[callback] = toInt(input);                                                                        // 708
            };                                                                                                         // 709
        }                                                                                                              // 710
        for (i = 0; i < token.length; i++) {                                                                           // 711
            tokens[token[i]] = func;                                                                                   // 712
        }                                                                                                              // 713
    }                                                                                                                  // 714
                                                                                                                       // 715
    function addWeekParseToken (token, callback) {                                                                     // 716
        addParseToken(token, function (input, array, config, token) {                                                  // 717
            config._w = config._w || {};                                                                               // 718
            callback(input, config._w, config, token);                                                                 // 719
        });                                                                                                            // 720
    }                                                                                                                  // 721
                                                                                                                       // 722
    function addTimeToArrayFromToken(token, input, config) {                                                           // 723
        if (input != null && hasOwnProp(tokens, token)) {                                                              // 724
            tokens[token](input, config._a, config, token);                                                            // 725
        }                                                                                                              // 726
    }                                                                                                                  // 727
                                                                                                                       // 728
    var YEAR = 0;                                                                                                      // 729
    var MONTH = 1;                                                                                                     // 730
    var DATE = 2;                                                                                                      // 731
    var HOUR = 3;                                                                                                      // 732
    var MINUTE = 4;                                                                                                    // 733
    var SECOND = 5;                                                                                                    // 734
    var MILLISECOND = 6;                                                                                               // 735
    var WEEK = 7;                                                                                                      // 736
    var WEEKDAY = 8;                                                                                                   // 737
                                                                                                                       // 738
    var indexOf;                                                                                                       // 739
                                                                                                                       // 740
    if (Array.prototype.indexOf) {                                                                                     // 741
        indexOf = Array.prototype.indexOf;                                                                             // 742
    } else {                                                                                                           // 743
        indexOf = function (o) {                                                                                       // 744
            // I know                                                                                                  // 745
            var i;                                                                                                     // 746
            for (i = 0; i < this.length; ++i) {                                                                        // 747
                if (this[i] === o) {                                                                                   // 748
                    return i;                                                                                          // 749
                }                                                                                                      // 750
            }                                                                                                          // 751
            return -1;                                                                                                 // 752
        };                                                                                                             // 753
    }                                                                                                                  // 754
                                                                                                                       // 755
    function daysInMonth(year, month) {                                                                                // 756
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                    // 757
    }                                                                                                                  // 758
                                                                                                                       // 759
    // FORMATTING                                                                                                      // 760
                                                                                                                       // 761
    addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                 // 762
        return this.month() + 1;                                                                                       // 763
    });                                                                                                                // 764
                                                                                                                       // 765
    addFormatToken('MMM', 0, 0, function (format) {                                                                    // 766
        return this.localeData().monthsShort(this, format);                                                            // 767
    });                                                                                                                // 768
                                                                                                                       // 769
    addFormatToken('MMMM', 0, 0, function (format) {                                                                   // 770
        return this.localeData().months(this, format);                                                                 // 771
    });                                                                                                                // 772
                                                                                                                       // 773
    // ALIASES                                                                                                         // 774
                                                                                                                       // 775
    addUnitAlias('month', 'M');                                                                                        // 776
                                                                                                                       // 777
    // PRIORITY                                                                                                        // 778
                                                                                                                       // 779
    addUnitPriority('month', 8);                                                                                       // 780
                                                                                                                       // 781
    // PARSING                                                                                                         // 782
                                                                                                                       // 783
    addRegexToken('M',    match1to2);                                                                                  // 784
    addRegexToken('MM',   match1to2, match2);                                                                          // 785
    addRegexToken('MMM',  function (isStrict, locale) {                                                                // 786
        return locale.monthsShortRegex(isStrict);                                                                      // 787
    });                                                                                                                // 788
    addRegexToken('MMMM', function (isStrict, locale) {                                                                // 789
        return locale.monthsRegex(isStrict);                                                                           // 790
    });                                                                                                                // 791
                                                                                                                       // 792
    addParseToken(['M', 'MM'], function (input, array) {                                                               // 793
        array[MONTH] = toInt(input) - 1;                                                                               // 794
    });                                                                                                                // 795
                                                                                                                       // 796
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                            // 797
        var month = config._locale.monthsParse(input, token, config._strict);                                          // 798
        // if we didn't find a month name, mark the date as invalid.                                                   // 799
        if (month != null) {                                                                                           // 800
            array[MONTH] = month;                                                                                      // 801
        } else {                                                                                                       // 802
            getParsingFlags(config).invalidMonth = input;                                                              // 803
        }                                                                                                              // 804
    });                                                                                                                // 805
                                                                                                                       // 806
    // LOCALES                                                                                                         // 807
                                                                                                                       // 808
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;                                                           // 809
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {                                                                                // 811
        return isArray(this._months) ? this._months[m.month()] :                                                       // 812
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }                                                                                                                  // 814
                                                                                                                       // 815
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                       // 816
    function localeMonthsShort (m, format) {                                                                           // 817
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :                                             // 818
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                     // 819
    }                                                                                                                  // 820
                                                                                                                       // 821
    function units_month__handleStrictParse(monthName, format, strict) {                                               // 822
        var i, ii, mom, llc = monthName.toLocaleLowerCase();                                                           // 823
        if (!this._monthsParse) {                                                                                      // 824
            // this is not used                                                                                        // 825
            this._monthsParse = [];                                                                                    // 826
            this._longMonthsParse = [];                                                                                // 827
            this._shortMonthsParse = [];                                                                               // 828
            for (i = 0; i < 12; ++i) {                                                                                 // 829
                mom = create_utc__createUTC([2000, i]);                                                                // 830
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();                             // 831
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();                                   // 832
            }                                                                                                          // 833
        }                                                                                                              // 834
                                                                                                                       // 835
        if (strict) {                                                                                                  // 836
            if (format === 'MMM') {                                                                                    // 837
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 838
                return ii !== -1 ? ii : null;                                                                          // 839
            } else {                                                                                                   // 840
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 841
                return ii !== -1 ? ii : null;                                                                          // 842
            }                                                                                                          // 843
        } else {                                                                                                       // 844
            if (format === 'MMM') {                                                                                    // 845
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 846
                if (ii !== -1) {                                                                                       // 847
                    return ii;                                                                                         // 848
                }                                                                                                      // 849
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 850
                return ii !== -1 ? ii : null;                                                                          // 851
            } else {                                                                                                   // 852
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 853
                if (ii !== -1) {                                                                                       // 854
                    return ii;                                                                                         // 855
                }                                                                                                      // 856
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 857
                return ii !== -1 ? ii : null;                                                                          // 858
            }                                                                                                          // 859
        }                                                                                                              // 860
    }                                                                                                                  // 861
                                                                                                                       // 862
    function localeMonthsParse (monthName, format, strict) {                                                           // 863
        var i, mom, regex;                                                                                             // 864
                                                                                                                       // 865
        if (this._monthsParseExact) {                                                                                  // 866
            return units_month__handleStrictParse.call(this, monthName, format, strict);                               // 867
        }                                                                                                              // 868
                                                                                                                       // 869
        if (!this._monthsParse) {                                                                                      // 870
            this._monthsParse = [];                                                                                    // 871
            this._longMonthsParse = [];                                                                                // 872
            this._shortMonthsParse = [];                                                                               // 873
        }                                                                                                              // 874
                                                                                                                       // 875
        // TODO: add sorting                                                                                           // 876
        // Sorting makes sure if one month (or abbr) is a prefix of another                                            // 877
        // see sorting in computeMonthsParse                                                                           // 878
        for (i = 0; i < 12; i++) {                                                                                     // 879
            // make the regex if we don't have it already                                                              // 880
            mom = create_utc__createUTC([2000, i]);                                                                    // 881
            if (strict && !this._longMonthsParse[i]) {                                                                 // 882
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');         // 883
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');   // 884
            }                                                                                                          // 885
            if (!strict && !this._monthsParse[i]) {                                                                    // 886
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                 // 887
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 888
            }                                                                                                          // 889
            // test the regex                                                                                          // 890
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                             // 891
                return i;                                                                                              // 892
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                      // 893
                return i;                                                                                              // 894
            } else if (!strict && this._monthsParse[i].test(monthName)) {                                              // 895
                return i;                                                                                              // 896
            }                                                                                                          // 897
        }                                                                                                              // 898
    }                                                                                                                  // 899
                                                                                                                       // 900
    // MOMENTS                                                                                                         // 901
                                                                                                                       // 902
    function setMonth (mom, value) {                                                                                   // 903
        var dayOfMonth;                                                                                                // 904
                                                                                                                       // 905
        if (!mom.isValid()) {                                                                                          // 906
            // No op                                                                                                   // 907
            return mom;                                                                                                // 908
        }                                                                                                              // 909
                                                                                                                       // 910
        if (typeof value === 'string') {                                                                               // 911
            if (/^\d+$/.test(value)) {                                                                                 // 912
                value = toInt(value);                                                                                  // 913
            } else {                                                                                                   // 914
                value = mom.localeData().monthsParse(value);                                                           // 915
                // TODO: Another silent failure?                                                                       // 916
                if (typeof value !== 'number') {                                                                       // 917
                    return mom;                                                                                        // 918
                }                                                                                                      // 919
            }                                                                                                          // 920
        }                                                                                                              // 921
                                                                                                                       // 922
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                             // 923
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                        // 924
        return mom;                                                                                                    // 925
    }                                                                                                                  // 926
                                                                                                                       // 927
    function getSetMonth (value) {                                                                                     // 928
        if (value != null) {                                                                                           // 929
            setMonth(this, value);                                                                                     // 930
            utils_hooks__hooks.updateOffset(this, true);                                                               // 931
            return this;                                                                                               // 932
        } else {                                                                                                       // 933
            return get_set__get(this, 'Month');                                                                        // 934
        }                                                                                                              // 935
    }                                                                                                                  // 936
                                                                                                                       // 937
    function getDaysInMonth () {                                                                                       // 938
        return daysInMonth(this.year(), this.month());                                                                 // 939
    }                                                                                                                  // 940
                                                                                                                       // 941
    var defaultMonthsShortRegex = matchWord;                                                                           // 942
    function monthsShortRegex (isStrict) {                                                                             // 943
        if (this._monthsParseExact) {                                                                                  // 944
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 945
                computeMonthsParse.call(this);                                                                         // 946
            }                                                                                                          // 947
            if (isStrict) {                                                                                            // 948
                return this._monthsShortStrictRegex;                                                                   // 949
            } else {                                                                                                   // 950
                return this._monthsShortRegex;                                                                         // 951
            }                                                                                                          // 952
        } else {                                                                                                       // 953
            if (!hasOwnProp(this, '_monthsShortRegex')) {                                                              // 954
                this._monthsShortRegex = defaultMonthsShortRegex;                                                      // 955
            }                                                                                                          // 956
            return this._monthsShortStrictRegex && isStrict ?                                                          // 957
                this._monthsShortStrictRegex : this._monthsShortRegex;                                                 // 958
        }                                                                                                              // 959
    }                                                                                                                  // 960
                                                                                                                       // 961
    var defaultMonthsRegex = matchWord;                                                                                // 962
    function monthsRegex (isStrict) {                                                                                  // 963
        if (this._monthsParseExact) {                                                                                  // 964
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 965
                computeMonthsParse.call(this);                                                                         // 966
            }                                                                                                          // 967
            if (isStrict) {                                                                                            // 968
                return this._monthsStrictRegex;                                                                        // 969
            } else {                                                                                                   // 970
                return this._monthsRegex;                                                                              // 971
            }                                                                                                          // 972
        } else {                                                                                                       // 973
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 974
                this._monthsRegex = defaultMonthsRegex;                                                                // 975
            }                                                                                                          // 976
            return this._monthsStrictRegex && isStrict ?                                                               // 977
                this._monthsStrictRegex : this._monthsRegex;                                                           // 978
        }                                                                                                              // 979
    }                                                                                                                  // 980
                                                                                                                       // 981
    function computeMonthsParse () {                                                                                   // 982
        function cmpLenRev(a, b) {                                                                                     // 983
            return b.length - a.length;                                                                                // 984
        }                                                                                                              // 985
                                                                                                                       // 986
        var shortPieces = [], longPieces = [], mixedPieces = [],                                                       // 987
            i, mom;                                                                                                    // 988
        for (i = 0; i < 12; i++) {                                                                                     // 989
            // make the regex if we don't have it already                                                              // 990
            mom = create_utc__createUTC([2000, i]);                                                                    // 991
            shortPieces.push(this.monthsShort(mom, ''));                                                               // 992
            longPieces.push(this.months(mom, ''));                                                                     // 993
            mixedPieces.push(this.months(mom, ''));                                                                    // 994
            mixedPieces.push(this.monthsShort(mom, ''));                                                               // 995
        }                                                                                                              // 996
        // Sorting makes sure if one month (or abbr) is a prefix of another it                                         // 997
        // will match the longer piece.                                                                                // 998
        shortPieces.sort(cmpLenRev);                                                                                   // 999
        longPieces.sort(cmpLenRev);                                                                                    // 1000
        mixedPieces.sort(cmpLenRev);                                                                                   // 1001
        for (i = 0; i < 12; i++) {                                                                                     // 1002
            shortPieces[i] = regexEscape(shortPieces[i]);                                                              // 1003
            longPieces[i] = regexEscape(longPieces[i]);                                                                // 1004
        }                                                                                                              // 1005
        for (i = 0; i < 24; i++) {                                                                                     // 1006
            mixedPieces[i] = regexEscape(mixedPieces[i]);                                                              // 1007
        }                                                                                                              // 1008
                                                                                                                       // 1009
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                       // 1010
        this._monthsShortRegex = this._monthsRegex;                                                                    // 1011
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                  // 1012
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                            // 1013
    }                                                                                                                  // 1014
                                                                                                                       // 1015
    // FORMATTING                                                                                                      // 1016
                                                                                                                       // 1017
    addFormatToken('Y', 0, 0, function () {                                                                            // 1018
        var y = this.year();                                                                                           // 1019
        return y <= 9999 ? '' + y : '+' + y;                                                                           // 1020
    });                                                                                                                // 1021
                                                                                                                       // 1022
    addFormatToken(0, ['YY', 2], 0, function () {                                                                      // 1023
        return this.year() % 100;                                                                                      // 1024
    });                                                                                                                // 1025
                                                                                                                       // 1026
    addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                 // 1027
    addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                 // 1028
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                 // 1029
                                                                                                                       // 1030
    // ALIASES                                                                                                         // 1031
                                                                                                                       // 1032
    addUnitAlias('year', 'y');                                                                                         // 1033
                                                                                                                       // 1034
    // PRIORITIES                                                                                                      // 1035
                                                                                                                       // 1036
    addUnitPriority('year', 1);                                                                                        // 1037
                                                                                                                       // 1038
    // PARSING                                                                                                         // 1039
                                                                                                                       // 1040
    addRegexToken('Y',      matchSigned);                                                                              // 1041
    addRegexToken('YY',     match1to2, match2);                                                                        // 1042
    addRegexToken('YYYY',   match1to4, match4);                                                                        // 1043
    addRegexToken('YYYYY',  match1to6, match6);                                                                        // 1044
    addRegexToken('YYYYYY', match1to6, match6);                                                                        // 1045
                                                                                                                       // 1046
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);                                                                          // 1047
    addParseToken('YYYY', function (input, array) {                                                                    // 1048
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);                 // 1049
    });                                                                                                                // 1050
    addParseToken('YY', function (input, array) {                                                                      // 1051
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 1052
    });                                                                                                                // 1053
    addParseToken('Y', function (input, array) {                                                                       // 1054
        array[YEAR] = parseInt(input, 10);                                                                             // 1055
    });                                                                                                                // 1056
                                                                                                                       // 1057
    // HELPERS                                                                                                         // 1058
                                                                                                                       // 1059
    function daysInYear(year) {                                                                                        // 1060
        return isLeapYear(year) ? 366 : 365;                                                                           // 1061
    }                                                                                                                  // 1062
                                                                                                                       // 1063
    function isLeapYear(year) {                                                                                        // 1064
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                               // 1065
    }                                                                                                                  // 1066
                                                                                                                       // 1067
    // HOOKS                                                                                                           // 1068
                                                                                                                       // 1069
    utils_hooks__hooks.parseTwoDigitYear = function (input) {                                                          // 1070
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                       // 1071
    };                                                                                                                 // 1072
                                                                                                                       // 1073
    // MOMENTS                                                                                                         // 1074
                                                                                                                       // 1075
    var getSetYear = makeGetSet('FullYear', true);                                                                     // 1076
                                                                                                                       // 1077
    function getIsLeapYear () {                                                                                        // 1078
        return isLeapYear(this.year());                                                                                // 1079
    }                                                                                                                  // 1080
                                                                                                                       // 1081
    function createDate (y, m, d, h, M, s, ms) {                                                                       // 1082
        //can't just apply() to create a date:                                                                         // 1083
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);                                                                     // 1085
                                                                                                                       // 1086
        //the date constructor remaps years 0-99 to 1900-1999                                                          // 1087
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {                                                       // 1088
            date.setFullYear(y);                                                                                       // 1089
        }                                                                                                              // 1090
        return date;                                                                                                   // 1091
    }                                                                                                                  // 1092
                                                                                                                       // 1093
    function createUTCDate (y) {                                                                                       // 1094
        var date = new Date(Date.UTC.apply(null, arguments));                                                          // 1095
                                                                                                                       // 1096
        //the Date.UTC function remaps years 0-99 to 1900-1999                                                         // 1097
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {                                                    // 1098
            date.setUTCFullYear(y);                                                                                    // 1099
        }                                                                                                              // 1100
        return date;                                                                                                   // 1101
    }                                                                                                                  // 1102
                                                                                                                       // 1103
    // start-of-first-week - start-of-year                                                                             // 1104
    function firstWeekOffset(year, dow, doy) {                                                                         // 1105
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)                    // 1106
            fwd = 7 + dow - doy,                                                                                       // 1107
            // first-week day local weekday -- which local weekday is fwd                                              // 1108
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;                                           // 1109
                                                                                                                       // 1110
        return -fwdlw + fwd - 1;                                                                                       // 1111
    }                                                                                                                  // 1112
                                                                                                                       // 1113
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 1114
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {                                                       // 1115
        var localWeekday = (7 + weekday - dow) % 7,                                                                    // 1116
            weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1117
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,                                                // 1118
            resYear, resDayOfYear;                                                                                     // 1119
                                                                                                                       // 1120
        if (dayOfYear <= 0) {                                                                                          // 1121
            resYear = year - 1;                                                                                        // 1122
            resDayOfYear = daysInYear(resYear) + dayOfYear;                                                            // 1123
        } else if (dayOfYear > daysInYear(year)) {                                                                     // 1124
            resYear = year + 1;                                                                                        // 1125
            resDayOfYear = dayOfYear - daysInYear(year);                                                               // 1126
        } else {                                                                                                       // 1127
            resYear = year;                                                                                            // 1128
            resDayOfYear = dayOfYear;                                                                                  // 1129
        }                                                                                                              // 1130
                                                                                                                       // 1131
        return {                                                                                                       // 1132
            year: resYear,                                                                                             // 1133
            dayOfYear: resDayOfYear                                                                                    // 1134
        };                                                                                                             // 1135
    }                                                                                                                  // 1136
                                                                                                                       // 1137
    function weekOfYear(mom, dow, doy) {                                                                               // 1138
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),                                                        // 1139
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,                                             // 1140
            resWeek, resYear;                                                                                          // 1141
                                                                                                                       // 1142
        if (week < 1) {                                                                                                // 1143
            resYear = mom.year() - 1;                                                                                  // 1144
            resWeek = week + weeksInYear(resYear, dow, doy);                                                           // 1145
        } else if (week > weeksInYear(mom.year(), dow, doy)) {                                                         // 1146
            resWeek = week - weeksInYear(mom.year(), dow, doy);                                                        // 1147
            resYear = mom.year() + 1;                                                                                  // 1148
        } else {                                                                                                       // 1149
            resYear = mom.year();                                                                                      // 1150
            resWeek = week;                                                                                            // 1151
        }                                                                                                              // 1152
                                                                                                                       // 1153
        return {                                                                                                       // 1154
            week: resWeek,                                                                                             // 1155
            year: resYear                                                                                              // 1156
        };                                                                                                             // 1157
    }                                                                                                                  // 1158
                                                                                                                       // 1159
    function weeksInYear(year, dow, doy) {                                                                             // 1160
        var weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1161
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);                                                      // 1162
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;                                                   // 1163
    }                                                                                                                  // 1164
                                                                                                                       // 1165
    // FORMATTING                                                                                                      // 1166
                                                                                                                       // 1167
    addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                      // 1168
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                   // 1169
                                                                                                                       // 1170
    // ALIASES                                                                                                         // 1171
                                                                                                                       // 1172
    addUnitAlias('week', 'w');                                                                                         // 1173
    addUnitAlias('isoWeek', 'W');                                                                                      // 1174
                                                                                                                       // 1175
    // PRIORITIES                                                                                                      // 1176
                                                                                                                       // 1177
    addUnitPriority('week', 5);                                                                                        // 1178
    addUnitPriority('isoWeek', 5);                                                                                     // 1179
                                                                                                                       // 1180
    // PARSING                                                                                                         // 1181
                                                                                                                       // 1182
    addRegexToken('w',  match1to2);                                                                                    // 1183
    addRegexToken('ww', match1to2, match2);                                                                            // 1184
    addRegexToken('W',  match1to2);                                                                                    // 1185
    addRegexToken('WW', match1to2, match2);                                                                            // 1186
                                                                                                                       // 1187
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                  // 1188
        week[token.substr(0, 1)] = toInt(input);                                                                       // 1189
    });                                                                                                                // 1190
                                                                                                                       // 1191
    // HELPERS                                                                                                         // 1192
                                                                                                                       // 1193
    // LOCALES                                                                                                         // 1194
                                                                                                                       // 1195
    function localeWeek (mom) {                                                                                        // 1196
        return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                   // 1197
    }                                                                                                                  // 1198
                                                                                                                       // 1199
    var defaultLocaleWeek = {                                                                                          // 1200
        dow : 0, // Sunday is the first day of the week.                                                               // 1201
        doy : 6  // The week that contains Jan 1st is the first week of the year.                                      // 1202
    };                                                                                                                 // 1203
                                                                                                                       // 1204
    function localeFirstDayOfWeek () {                                                                                 // 1205
        return this._week.dow;                                                                                         // 1206
    }                                                                                                                  // 1207
                                                                                                                       // 1208
    function localeFirstDayOfYear () {                                                                                 // 1209
        return this._week.doy;                                                                                         // 1210
    }                                                                                                                  // 1211
                                                                                                                       // 1212
    // MOMENTS                                                                                                         // 1213
                                                                                                                       // 1214
    function getSetWeek (input) {                                                                                      // 1215
        var week = this.localeData().week(this);                                                                       // 1216
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 1217
    }                                                                                                                  // 1218
                                                                                                                       // 1219
    function getSetISOWeek (input) {                                                                                   // 1220
        var week = weekOfYear(this, 1, 4).week;                                                                        // 1221
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 1222
    }                                                                                                                  // 1223
                                                                                                                       // 1224
    // FORMATTING                                                                                                      // 1225
                                                                                                                       // 1226
    addFormatToken('d', 0, 'do', 'day');                                                                               // 1227
                                                                                                                       // 1228
    addFormatToken('dd', 0, 0, function (format) {                                                                     // 1229
        return this.localeData().weekdaysMin(this, format);                                                            // 1230
    });                                                                                                                // 1231
                                                                                                                       // 1232
    addFormatToken('ddd', 0, 0, function (format) {                                                                    // 1233
        return this.localeData().weekdaysShort(this, format);                                                          // 1234
    });                                                                                                                // 1235
                                                                                                                       // 1236
    addFormatToken('dddd', 0, 0, function (format) {                                                                   // 1237
        return this.localeData().weekdays(this, format);                                                               // 1238
    });                                                                                                                // 1239
                                                                                                                       // 1240
    addFormatToken('e', 0, 0, 'weekday');                                                                              // 1241
    addFormatToken('E', 0, 0, 'isoWeekday');                                                                           // 1242
                                                                                                                       // 1243
    // ALIASES                                                                                                         // 1244
                                                                                                                       // 1245
    addUnitAlias('day', 'd');                                                                                          // 1246
    addUnitAlias('weekday', 'e');                                                                                      // 1247
    addUnitAlias('isoWeekday', 'E');                                                                                   // 1248
                                                                                                                       // 1249
    // PRIORITY                                                                                                        // 1250
    addUnitPriority('day', 11);                                                                                        // 1251
    addUnitPriority('weekday', 11);                                                                                    // 1252
    addUnitPriority('isoWeekday', 11);                                                                                 // 1253
                                                                                                                       // 1254
    // PARSING                                                                                                         // 1255
                                                                                                                       // 1256
    addRegexToken('d',    match1to2);                                                                                  // 1257
    addRegexToken('e',    match1to2);                                                                                  // 1258
    addRegexToken('E',    match1to2);                                                                                  // 1259
    addRegexToken('dd',   function (isStrict, locale) {                                                                // 1260
        return locale.weekdaysMinRegex(isStrict);                                                                      // 1261
    });                                                                                                                // 1262
    addRegexToken('ddd',   function (isStrict, locale) {                                                               // 1263
        return locale.weekdaysShortRegex(isStrict);                                                                    // 1264
    });                                                                                                                // 1265
    addRegexToken('dddd',   function (isStrict, locale) {                                                              // 1266
        return locale.weekdaysRegex(isStrict);                                                                         // 1267
    });                                                                                                                // 1268
                                                                                                                       // 1269
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {                                   // 1270
        var weekday = config._locale.weekdaysParse(input, token, config._strict);                                      // 1271
        // if we didn't get a weekday name, mark the date as invalid                                                   // 1272
        if (weekday != null) {                                                                                         // 1273
            week.d = weekday;                                                                                          // 1274
        } else {                                                                                                       // 1275
            getParsingFlags(config).invalidWeekday = input;                                                            // 1276
        }                                                                                                              // 1277
    });                                                                                                                // 1278
                                                                                                                       // 1279
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                         // 1280
        week[token] = toInt(input);                                                                                    // 1281
    });                                                                                                                // 1282
                                                                                                                       // 1283
    // HELPERS                                                                                                         // 1284
                                                                                                                       // 1285
    function parseWeekday(input, locale) {                                                                             // 1286
        if (typeof input !== 'string') {                                                                               // 1287
            return input;                                                                                              // 1288
        }                                                                                                              // 1289
                                                                                                                       // 1290
        if (!isNaN(input)) {                                                                                           // 1291
            return parseInt(input, 10);                                                                                // 1292
        }                                                                                                              // 1293
                                                                                                                       // 1294
        input = locale.weekdaysParse(input);                                                                           // 1295
        if (typeof input === 'number') {                                                                               // 1296
            return input;                                                                                              // 1297
        }                                                                                                              // 1298
                                                                                                                       // 1299
        return null;                                                                                                   // 1300
    }                                                                                                                  // 1301
                                                                                                                       // 1302
    function parseIsoWeekday(input, locale) {                                                                          // 1303
        if (typeof input === 'string') {                                                                               // 1304
            return locale.weekdaysParse(input) % 7 || 7;                                                               // 1305
        }                                                                                                              // 1306
        return isNaN(input) ? null : input;                                                                            // 1307
    }                                                                                                                  // 1308
                                                                                                                       // 1309
    // LOCALES                                                                                                         // 1310
                                                                                                                       // 1311
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                 // 1312
    function localeWeekdays (m, format) {                                                                              // 1313
        return isArray(this._weekdays) ? this._weekdays[m.day()] :                                                     // 1314
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];                   // 1315
    }                                                                                                                  // 1316
                                                                                                                       // 1317
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                         // 1318
    function localeWeekdaysShort (m) {                                                                                 // 1319
        return this._weekdaysShort[m.day()];                                                                           // 1320
    }                                                                                                                  // 1321
                                                                                                                       // 1322
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                  // 1323
    function localeWeekdaysMin (m) {                                                                                   // 1324
        return this._weekdaysMin[m.day()];                                                                             // 1325
    }                                                                                                                  // 1326
                                                                                                                       // 1327
    function day_of_week__handleStrictParse(weekdayName, format, strict) {                                             // 1328
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();                                                         // 1329
        if (!this._weekdaysParse) {                                                                                    // 1330
            this._weekdaysParse = [];                                                                                  // 1331
            this._shortWeekdaysParse = [];                                                                             // 1332
            this._minWeekdaysParse = [];                                                                               // 1333
                                                                                                                       // 1334
            for (i = 0; i < 7; ++i) {                                                                                  // 1335
                mom = create_utc__createUTC([2000, 1]).day(i);                                                         // 1336
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();                             // 1337
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();                         // 1338
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();                                   // 1339
            }                                                                                                          // 1340
        }                                                                                                              // 1341
                                                                                                                       // 1342
        if (strict) {                                                                                                  // 1343
            if (format === 'dddd') {                                                                                   // 1344
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1345
                return ii !== -1 ? ii : null;                                                                          // 1346
            } else if (format === 'ddd') {                                                                             // 1347
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1348
                return ii !== -1 ? ii : null;                                                                          // 1349
            } else {                                                                                                   // 1350
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1351
                return ii !== -1 ? ii : null;                                                                          // 1352
            }                                                                                                          // 1353
        } else {                                                                                                       // 1354
            if (format === 'dddd') {                                                                                   // 1355
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1356
                if (ii !== -1) {                                                                                       // 1357
                    return ii;                                                                                         // 1358
                }                                                                                                      // 1359
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1360
                if (ii !== -1) {                                                                                       // 1361
                    return ii;                                                                                         // 1362
                }                                                                                                      // 1363
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1364
                return ii !== -1 ? ii : null;                                                                          // 1365
            } else if (format === 'ddd') {                                                                             // 1366
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1367
                if (ii !== -1) {                                                                                       // 1368
                    return ii;                                                                                         // 1369
                }                                                                                                      // 1370
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1371
                if (ii !== -1) {                                                                                       // 1372
                    return ii;                                                                                         // 1373
                }                                                                                                      // 1374
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1375
                return ii !== -1 ? ii : null;                                                                          // 1376
            } else {                                                                                                   // 1377
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1378
                if (ii !== -1) {                                                                                       // 1379
                    return ii;                                                                                         // 1380
                }                                                                                                      // 1381
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1382
                if (ii !== -1) {                                                                                       // 1383
                    return ii;                                                                                         // 1384
                }                                                                                                      // 1385
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1386
                return ii !== -1 ? ii : null;                                                                          // 1387
            }                                                                                                          // 1388
        }                                                                                                              // 1389
    }                                                                                                                  // 1390
                                                                                                                       // 1391
    function localeWeekdaysParse (weekdayName, format, strict) {                                                       // 1392
        var i, mom, regex;                                                                                             // 1393
                                                                                                                       // 1394
        if (this._weekdaysParseExact) {                                                                                // 1395
            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);                             // 1396
        }                                                                                                              // 1397
                                                                                                                       // 1398
        if (!this._weekdaysParse) {                                                                                    // 1399
            this._weekdaysParse = [];                                                                                  // 1400
            this._minWeekdaysParse = [];                                                                               // 1401
            this._shortWeekdaysParse = [];                                                                             // 1402
            this._fullWeekdaysParse = [];                                                                              // 1403
        }                                                                                                              // 1404
                                                                                                                       // 1405
        for (i = 0; i < 7; i++) {                                                                                      // 1406
            // make the regex if we don't have it already                                                              // 1407
                                                                                                                       // 1408
            mom = create_utc__createUTC([2000, 1]).day(i);                                                             // 1409
            if (strict && !this._fullWeekdaysParse[i]) {                                                               // 1410
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');  // 1411
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }                                                                                                          // 1414
            if (!this._weekdaysParse[i]) {                                                                             // 1415
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                      // 1417
            }                                                                                                          // 1418
            // test the regex                                                                                          // 1419
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {                         // 1420
                return i;                                                                                              // 1421
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {                  // 1422
                return i;                                                                                              // 1423
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {                     // 1424
                return i;                                                                                              // 1425
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {                                          // 1426
                return i;                                                                                              // 1427
            }                                                                                                          // 1428
        }                                                                                                              // 1429
    }                                                                                                                  // 1430
                                                                                                                       // 1431
    // MOMENTS                                                                                                         // 1432
                                                                                                                       // 1433
    function getSetDayOfWeek (input) {                                                                                 // 1434
        if (!this.isValid()) {                                                                                         // 1435
            return input != null ? this : NaN;                                                                         // 1436
        }                                                                                                              // 1437
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                // 1438
        if (input != null) {                                                                                           // 1439
            input = parseWeekday(input, this.localeData());                                                            // 1440
            return this.add(input - day, 'd');                                                                         // 1441
        } else {                                                                                                       // 1442
            return day;                                                                                                // 1443
        }                                                                                                              // 1444
    }                                                                                                                  // 1445
                                                                                                                       // 1446
    function getSetLocaleDayOfWeek (input) {                                                                           // 1447
        if (!this.isValid()) {                                                                                         // 1448
            return input != null ? this : NaN;                                                                         // 1449
        }                                                                                                              // 1450
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                              // 1451
        return input == null ? weekday : this.add(input - weekday, 'd');                                               // 1452
    }                                                                                                                  // 1453
                                                                                                                       // 1454
    function getSetISODayOfWeek (input) {                                                                              // 1455
        if (!this.isValid()) {                                                                                         // 1456
            return input != null ? this : NaN;                                                                         // 1457
        }                                                                                                              // 1458
                                                                                                                       // 1459
        // behaves the same as moment#day except                                                                       // 1460
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                              // 1461
        // as a setter, sunday should belong to the previous week.                                                     // 1462
                                                                                                                       // 1463
        if (input != null) {                                                                                           // 1464
            var weekday = parseIsoWeekday(input, this.localeData());                                                   // 1465
            return this.day(this.day() % 7 ? weekday : weekday - 7);                                                   // 1466
        } else {                                                                                                       // 1467
            return this.day() || 7;                                                                                    // 1468
        }                                                                                                              // 1469
    }                                                                                                                  // 1470
                                                                                                                       // 1471
    var defaultWeekdaysRegex = matchWord;                                                                              // 1472
    function weekdaysRegex (isStrict) {                                                                                // 1473
        if (this._weekdaysParseExact) {                                                                                // 1474
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1475
                computeWeekdaysParse.call(this);                                                                       // 1476
            }                                                                                                          // 1477
            if (isStrict) {                                                                                            // 1478
                return this._weekdaysStrictRegex;                                                                      // 1479
            } else {                                                                                                   // 1480
                return this._weekdaysRegex;                                                                            // 1481
            }                                                                                                          // 1482
        } else {                                                                                                       // 1483
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1484
                this._weekdaysRegex = defaultWeekdaysRegex;                                                            // 1485
            }                                                                                                          // 1486
            return this._weekdaysStrictRegex && isStrict ?                                                             // 1487
                this._weekdaysStrictRegex : this._weekdaysRegex;                                                       // 1488
        }                                                                                                              // 1489
    }                                                                                                                  // 1490
                                                                                                                       // 1491
    var defaultWeekdaysShortRegex = matchWord;                                                                         // 1492
    function weekdaysShortRegex (isStrict) {                                                                           // 1493
        if (this._weekdaysParseExact) {                                                                                // 1494
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1495
                computeWeekdaysParse.call(this);                                                                       // 1496
            }                                                                                                          // 1497
            if (isStrict) {                                                                                            // 1498
                return this._weekdaysShortStrictRegex;                                                                 // 1499
            } else {                                                                                                   // 1500
                return this._weekdaysShortRegex;                                                                       // 1501
            }                                                                                                          // 1502
        } else {                                                                                                       // 1503
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {                                                            // 1504
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;                                                  // 1505
            }                                                                                                          // 1506
            return this._weekdaysShortStrictRegex && isStrict ?                                                        // 1507
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;                                             // 1508
        }                                                                                                              // 1509
    }                                                                                                                  // 1510
                                                                                                                       // 1511
    var defaultWeekdaysMinRegex = matchWord;                                                                           // 1512
    function weekdaysMinRegex (isStrict) {                                                                             // 1513
        if (this._weekdaysParseExact) {                                                                                // 1514
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1515
                computeWeekdaysParse.call(this);                                                                       // 1516
            }                                                                                                          // 1517
            if (isStrict) {                                                                                            // 1518
                return this._weekdaysMinStrictRegex;                                                                   // 1519
            } else {                                                                                                   // 1520
                return this._weekdaysMinRegex;                                                                         // 1521
            }                                                                                                          // 1522
        } else {                                                                                                       // 1523
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {                                                              // 1524
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;                                                      // 1525
            }                                                                                                          // 1526
            return this._weekdaysMinStrictRegex && isStrict ?                                                          // 1527
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;                                                 // 1528
        }                                                                                                              // 1529
    }                                                                                                                  // 1530
                                                                                                                       // 1531
                                                                                                                       // 1532
    function computeWeekdaysParse () {                                                                                 // 1533
        function cmpLenRev(a, b) {                                                                                     // 1534
            return b.length - a.length;                                                                                // 1535
        }                                                                                                              // 1536
                                                                                                                       // 1537
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],                                       // 1538
            i, mom, minp, shortp, longp;                                                                               // 1539
        for (i = 0; i < 7; i++) {                                                                                      // 1540
            // make the regex if we don't have it already                                                              // 1541
            mom = create_utc__createUTC([2000, 1]).day(i);                                                             // 1542
            minp = this.weekdaysMin(mom, '');                                                                          // 1543
            shortp = this.weekdaysShort(mom, '');                                                                      // 1544
            longp = this.weekdays(mom, '');                                                                            // 1545
            minPieces.push(minp);                                                                                      // 1546
            shortPieces.push(shortp);                                                                                  // 1547
            longPieces.push(longp);                                                                                    // 1548
            mixedPieces.push(minp);                                                                                    // 1549
            mixedPieces.push(shortp);                                                                                  // 1550
            mixedPieces.push(longp);                                                                                   // 1551
        }                                                                                                              // 1552
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it                                       // 1553
        // will match the longer piece.                                                                                // 1554
        minPieces.sort(cmpLenRev);                                                                                     // 1555
        shortPieces.sort(cmpLenRev);                                                                                   // 1556
        longPieces.sort(cmpLenRev);                                                                                    // 1557
        mixedPieces.sort(cmpLenRev);                                                                                   // 1558
        for (i = 0; i < 7; i++) {                                                                                      // 1559
            shortPieces[i] = regexEscape(shortPieces[i]);                                                              // 1560
            longPieces[i] = regexEscape(longPieces[i]);                                                                // 1561
            mixedPieces[i] = regexEscape(mixedPieces[i]);                                                              // 1562
        }                                                                                                              // 1563
                                                                                                                       // 1564
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                     // 1565
        this._weekdaysShortRegex = this._weekdaysRegex;                                                                // 1566
        this._weekdaysMinRegex = this._weekdaysRegex;                                                                  // 1567
                                                                                                                       // 1568
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                // 1569
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                          // 1570
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');                              // 1571
    }                                                                                                                  // 1572
                                                                                                                       // 1573
    // FORMATTING                                                                                                      // 1574
                                                                                                                       // 1575
    function hFormat() {                                                                                               // 1576
        return this.hours() % 12 || 12;                                                                                // 1577
    }                                                                                                                  // 1578
                                                                                                                       // 1579
    function kFormat() {                                                                                               // 1580
        return this.hours() || 24;                                                                                     // 1581
    }                                                                                                                  // 1582
                                                                                                                       // 1583
    addFormatToken('H', ['HH', 2], 0, 'hour');                                                                         // 1584
    addFormatToken('h', ['hh', 2], 0, hFormat);                                                                        // 1585
    addFormatToken('k', ['kk', 2], 0, kFormat);                                                                        // 1586
                                                                                                                       // 1587
    addFormatToken('hmm', 0, 0, function () {                                                                          // 1588
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);                                                 // 1589
    });                                                                                                                // 1590
                                                                                                                       // 1591
    addFormatToken('hmmss', 0, 0, function () {                                                                        // 1592
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +                                                // 1593
            zeroFill(this.seconds(), 2);                                                                               // 1594
    });                                                                                                                // 1595
                                                                                                                       // 1596
    addFormatToken('Hmm', 0, 0, function () {                                                                          // 1597
        return '' + this.hours() + zeroFill(this.minutes(), 2);                                                        // 1598
    });                                                                                                                // 1599
                                                                                                                       // 1600
    addFormatToken('Hmmss', 0, 0, function () {                                                                        // 1601
        return '' + this.hours() + zeroFill(this.minutes(), 2) +                                                       // 1602
            zeroFill(this.seconds(), 2);                                                                               // 1603
    });                                                                                                                // 1604
                                                                                                                       // 1605
    function meridiem (token, lowercase) {                                                                             // 1606
        addFormatToken(token, 0, 0, function () {                                                                      // 1607
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                // 1608
        });                                                                                                            // 1609
    }                                                                                                                  // 1610
                                                                                                                       // 1611
    meridiem('a', true);                                                                                               // 1612
    meridiem('A', false);                                                                                              // 1613
                                                                                                                       // 1614
    // ALIASES                                                                                                         // 1615
                                                                                                                       // 1616
    addUnitAlias('hour', 'h');                                                                                         // 1617
                                                                                                                       // 1618
    // PRIORITY                                                                                                        // 1619
    addUnitPriority('hour', 13);                                                                                       // 1620
                                                                                                                       // 1621
    // PARSING                                                                                                         // 1622
                                                                                                                       // 1623
    function matchMeridiem (isStrict, locale) {                                                                        // 1624
        return locale._meridiemParse;                                                                                  // 1625
    }                                                                                                                  // 1626
                                                                                                                       // 1627
    addRegexToken('a',  matchMeridiem);                                                                                // 1628
    addRegexToken('A',  matchMeridiem);                                                                                // 1629
    addRegexToken('H',  match1to2);                                                                                    // 1630
    addRegexToken('h',  match1to2);                                                                                    // 1631
    addRegexToken('HH', match1to2, match2);                                                                            // 1632
    addRegexToken('hh', match1to2, match2);                                                                            // 1633
                                                                                                                       // 1634
    addRegexToken('hmm', match3to4);                                                                                   // 1635
    addRegexToken('hmmss', match5to6);                                                                                 // 1636
    addRegexToken('Hmm', match3to4);                                                                                   // 1637
    addRegexToken('Hmmss', match5to6);                                                                                 // 1638
                                                                                                                       // 1639
    addParseToken(['H', 'HH'], HOUR);                                                                                  // 1640
    addParseToken(['a', 'A'], function (input, array, config) {                                                        // 1641
        config._isPm = config._locale.isPM(input);                                                                     // 1642
        config._meridiem = input;                                                                                      // 1643
    });                                                                                                                // 1644
    addParseToken(['h', 'hh'], function (input, array, config) {                                                       // 1645
        array[HOUR] = toInt(input);                                                                                    // 1646
        getParsingFlags(config).bigHour = true;                                                                        // 1647
    });                                                                                                                // 1648
    addParseToken('hmm', function (input, array, config) {                                                             // 1649
        var pos = input.length - 2;                                                                                    // 1650
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 1651
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 1652
        getParsingFlags(config).bigHour = true;                                                                        // 1653
    });                                                                                                                // 1654
    addParseToken('hmmss', function (input, array, config) {                                                           // 1655
        var pos1 = input.length - 4;                                                                                   // 1656
        var pos2 = input.length - 2;                                                                                   // 1657
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 1658
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 1659
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 1660
        getParsingFlags(config).bigHour = true;                                                                        // 1661
    });                                                                                                                // 1662
    addParseToken('Hmm', function (input, array, config) {                                                             // 1663
        var pos = input.length - 2;                                                                                    // 1664
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 1665
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 1666
    });                                                                                                                // 1667
    addParseToken('Hmmss', function (input, array, config) {                                                           // 1668
        var pos1 = input.length - 4;                                                                                   // 1669
        var pos2 = input.length - 2;                                                                                   // 1670
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 1671
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 1672
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 1673
    });                                                                                                                // 1674
                                                                                                                       // 1675
    // LOCALES                                                                                                         // 1676
                                                                                                                       // 1677
    function localeIsPM (input) {                                                                                      // 1678
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                             // 1679
        // Using charAt should be more compatible.                                                                     // 1680
        return ((input + '').toLowerCase().charAt(0) === 'p');                                                         // 1681
    }                                                                                                                  // 1682
                                                                                                                       // 1683
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                  // 1684
    function localeMeridiem (hours, minutes, isLower) {                                                                // 1685
        if (hours > 11) {                                                                                              // 1686
            return isLower ? 'pm' : 'PM';                                                                              // 1687
        } else {                                                                                                       // 1688
            return isLower ? 'am' : 'AM';                                                                              // 1689
        }                                                                                                              // 1690
    }                                                                                                                  // 1691
                                                                                                                       // 1692
                                                                                                                       // 1693
    // MOMENTS                                                                                                         // 1694
                                                                                                                       // 1695
    // Setting the hour should keep the time, because the user explicitly                                              // 1696
    // specified which hour he wants. So trying to maintain the same hour (in                                          // 1697
    // a new timezone) makes sense. Adding/subtracting hours does not follow                                           // 1698
    // this rule.                                                                                                      // 1699
    var getSetHour = makeGetSet('Hours', true);                                                                        // 1700
                                                                                                                       // 1701
    var baseConfig = {                                                                                                 // 1702
        calendar: defaultCalendar,                                                                                     // 1703
        longDateFormat: defaultLongDateFormat,                                                                         // 1704
        invalidDate: defaultInvalidDate,                                                                               // 1705
        ordinal: defaultOrdinal,                                                                                       // 1706
        ordinalParse: defaultOrdinalParse,                                                                             // 1707
        relativeTime: defaultRelativeTime,                                                                             // 1708
                                                                                                                       // 1709
        months: defaultLocaleMonths,                                                                                   // 1710
        monthsShort: defaultLocaleMonthsShort,                                                                         // 1711
                                                                                                                       // 1712
        week: defaultLocaleWeek,                                                                                       // 1713
                                                                                                                       // 1714
        weekdays: defaultLocaleWeekdays,                                                                               // 1715
        weekdaysMin: defaultLocaleWeekdaysMin,                                                                         // 1716
        weekdaysShort: defaultLocaleWeekdaysShort,                                                                     // 1717
                                                                                                                       // 1718
        meridiemParse: defaultLocaleMeridiemParse                                                                      // 1719
    };                                                                                                                 // 1720
                                                                                                                       // 1721
    // internal storage for locale config files                                                                        // 1722
    var locales = {};                                                                                                  // 1723
    var globalLocale;                                                                                                  // 1724
                                                                                                                       // 1725
    function normalizeLocale(key) {                                                                                    // 1726
        return key ? key.toLowerCase().replace('_', '-') : key;                                                        // 1727
    }                                                                                                                  // 1728
                                                                                                                       // 1729
    // pick the locale from the array                                                                                  // 1730
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                       // 1731
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {                                                                                     // 1733
        var i = 0, j, next, locale, split;                                                                             // 1734
                                                                                                                       // 1735
        while (i < names.length) {                                                                                     // 1736
            split = normalizeLocale(names[i]).split('-');                                                              // 1737
            j = split.length;                                                                                          // 1738
            next = normalizeLocale(names[i + 1]);                                                                      // 1739
            next = next ? next.split('-') : null;                                                                      // 1740
            while (j > 0) {                                                                                            // 1741
                locale = loadLocale(split.slice(0, j).join('-'));                                                      // 1742
                if (locale) {                                                                                          // 1743
                    return locale;                                                                                     // 1744
                }                                                                                                      // 1745
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                           // 1746
                    //the next array item is better than a shallower substring of this one                             // 1747
                    break;                                                                                             // 1748
                }                                                                                                      // 1749
                j--;                                                                                                   // 1750
            }                                                                                                          // 1751
            i++;                                                                                                       // 1752
        }                                                                                                              // 1753
        return null;                                                                                                   // 1754
    }                                                                                                                  // 1755
                                                                                                                       // 1756
    function loadLocale(name) {                                                                                        // 1757
        var oldLocale = null;                                                                                          // 1758
        // TODO: Find a better way to register and load all the locales in Node                                        // 1759
        if (!locales[name] && (typeof module !== 'undefined') &&                                                       // 1760
                module && module.exports) {                                                                            // 1761
            try {                                                                                                      // 1762
                oldLocale = globalLocale._abbr;                                                                        // 1763
                require('./locale/' + name);                                                                           // 1764
                // because defineLocale currently also sets the global locale, we                                      // 1765
                // want to undo that for lazy loaded locales                                                           // 1766
                locale_locales__getSetGlobalLocale(oldLocale);                                                         // 1767
            } catch (e) { }                                                                                            // 1768
        }                                                                                                              // 1769
        return locales[name];                                                                                          // 1770
    }                                                                                                                  // 1771
                                                                                                                       // 1772
    // This function will load locale and then set the global locale.  If                                              // 1773
    // no arguments are passed in, it will simply return the current global                                            // 1774
    // locale key.                                                                                                     // 1775
    function locale_locales__getSetGlobalLocale (key, values) {                                                        // 1776
        var data;                                                                                                      // 1777
        if (key) {                                                                                                     // 1778
            if (isUndefined(values)) {                                                                                 // 1779
                data = locale_locales__getLocale(key);                                                                 // 1780
            }                                                                                                          // 1781
            else {                                                                                                     // 1782
                data = defineLocale(key, values);                                                                      // 1783
            }                                                                                                          // 1784
                                                                                                                       // 1785
            if (data) {                                                                                                // 1786
                // moment.duration._locale = moment._locale = data;                                                    // 1787
                globalLocale = data;                                                                                   // 1788
            }                                                                                                          // 1789
        }                                                                                                              // 1790
                                                                                                                       // 1791
        return globalLocale._abbr;                                                                                     // 1792
    }                                                                                                                  // 1793
                                                                                                                       // 1794
    function defineLocale (name, config) {                                                                             // 1795
        if (config !== null) {                                                                                         // 1796
            var parentConfig = baseConfig;                                                                             // 1797
            config.abbr = name;                                                                                        // 1798
            if (locales[name] != null) {                                                                               // 1799
                deprecateSimple('defineLocaleOverride',                                                                // 1800
                        'use moment.updateLocale(localeName, config) to change ' +                                     // 1801
                        'an existing locale. moment.defineLocale(localeName, ' +                                       // 1802
                        'config) should only be used for creating a new locale ' +                                     // 1803
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');                    // 1804
                parentConfig = locales[name]._config;                                                                  // 1805
            } else if (config.parentLocale != null) {                                                                  // 1806
                if (locales[config.parentLocale] != null) {                                                            // 1807
                    parentConfig = locales[config.parentLocale]._config;                                               // 1808
                } else {                                                                                               // 1809
                    // treat as if there is no base config                                                             // 1810
                    deprecateSimple('parentLocaleUndefined',                                                           // 1811
                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
                }                                                                                                      // 1813
            }                                                                                                          // 1814
            locales[name] = new Locale(mergeConfigs(parentConfig, config));                                            // 1815
                                                                                                                       // 1816
            // backwards compat for now: also set the locale                                                           // 1817
            locale_locales__getSetGlobalLocale(name);                                                                  // 1818
                                                                                                                       // 1819
            return locales[name];                                                                                      // 1820
        } else {                                                                                                       // 1821
            // useful for testing                                                                                      // 1822
            delete locales[name];                                                                                      // 1823
            return null;                                                                                               // 1824
        }                                                                                                              // 1825
    }                                                                                                                  // 1826
                                                                                                                       // 1827
    function updateLocale(name, config) {                                                                              // 1828
        if (config != null) {                                                                                          // 1829
            var locale, parentConfig = baseConfig;                                                                     // 1830
            // MERGE                                                                                                   // 1831
            if (locales[name] != null) {                                                                               // 1832
                parentConfig = locales[name]._config;                                                                  // 1833
            }                                                                                                          // 1834
            config = mergeConfigs(parentConfig, config);                                                               // 1835
            locale = new Locale(config);                                                                               // 1836
            locale.parentLocale = locales[name];                                                                       // 1837
            locales[name] = locale;                                                                                    // 1838
                                                                                                                       // 1839
            // backwards compat for now: also set the locale                                                           // 1840
            locale_locales__getSetGlobalLocale(name);                                                                  // 1841
        } else {                                                                                                       // 1842
            // pass null for config to unupdate, useful for tests                                                      // 1843
            if (locales[name] != null) {                                                                               // 1844
                if (locales[name].parentLocale != null) {                                                              // 1845
                    locales[name] = locales[name].parentLocale;                                                        // 1846
                } else if (locales[name] != null) {                                                                    // 1847
                    delete locales[name];                                                                              // 1848
                }                                                                                                      // 1849
            }                                                                                                          // 1850
        }                                                                                                              // 1851
        return locales[name];                                                                                          // 1852
    }                                                                                                                  // 1853
                                                                                                                       // 1854
    // returns locale data                                                                                             // 1855
    function locale_locales__getLocale (key) {                                                                         // 1856
        var locale;                                                                                                    // 1857
                                                                                                                       // 1858
        if (key && key._locale && key._locale._abbr) {                                                                 // 1859
            key = key._locale._abbr;                                                                                   // 1860
        }                                                                                                              // 1861
                                                                                                                       // 1862
        if (!key) {                                                                                                    // 1863
            return globalLocale;                                                                                       // 1864
        }                                                                                                              // 1865
                                                                                                                       // 1866
        if (!isArray(key)) {                                                                                           // 1867
            //short-circuit everything else                                                                            // 1868
            locale = loadLocale(key);                                                                                  // 1869
            if (locale) {                                                                                              // 1870
                return locale;                                                                                         // 1871
            }                                                                                                          // 1872
            key = [key];                                                                                               // 1873
        }                                                                                                              // 1874
                                                                                                                       // 1875
        return chooseLocale(key);                                                                                      // 1876
    }                                                                                                                  // 1877
                                                                                                                       // 1878
    function locale_locales__listLocales() {                                                                           // 1879
        return keys(locales);                                                                                          // 1880
    }                                                                                                                  // 1881
                                                                                                                       // 1882
    function checkOverflow (m) {                                                                                       // 1883
        var overflow;                                                                                                  // 1884
        var a = m._a;                                                                                                  // 1885
                                                                                                                       // 1886
        if (a && getParsingFlags(m).overflow === -2) {                                                                 // 1887
            overflow =                                                                                                 // 1888
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                   // 1889
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                         // 1890
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                  // 1892
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                  // 1893
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                             // 1894
                -1;                                                                                                    // 1895
                                                                                                                       // 1896
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                       // 1897
                overflow = DATE;                                                                                       // 1898
            }                                                                                                          // 1899
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {                                                // 1900
                overflow = WEEK;                                                                                       // 1901
            }                                                                                                          // 1902
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {                                              // 1903
                overflow = WEEKDAY;                                                                                    // 1904
            }                                                                                                          // 1905
                                                                                                                       // 1906
            getParsingFlags(m).overflow = overflow;                                                                    // 1907
        }                                                                                                              // 1908
                                                                                                                       // 1909
        return m;                                                                                                      // 1910
    }                                                                                                                  // 1911
                                                                                                                       // 1912
    // iso 8601 regex                                                                                                  // 1913
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)       // 1914
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
                                                                                                                       // 1917
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;                                                                             // 1918
                                                                                                                       // 1919
    var isoDates = [                                                                                                   // 1920
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],                                                                       // 1921
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],                                                                             // 1922
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],                                                                            // 1923
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],                                                                          // 1924
        ['YYYY-DDD', /\d{4}-\d{3}/],                                                                                   // 1925
        ['YYYY-MM', /\d{4}-\d\d/, false],                                                                              // 1926
        ['YYYYYYMMDD', /[+-]\d{10}/],                                                                                  // 1927
        ['YYYYMMDD', /\d{8}/],                                                                                         // 1928
        // YYYYMM is NOT allowed by the standard                                                                       // 1929
        ['GGGG[W]WWE', /\d{4}W\d{3}/],                                                                                 // 1930
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],                                                                           // 1931
        ['YYYYDDD', /\d{7}/]                                                                                           // 1932
    ];                                                                                                                 // 1933
                                                                                                                       // 1934
    // iso time formats and regexes                                                                                    // 1935
    var isoTimes = [                                                                                                   // 1936
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],                                                                      // 1937
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],                                                                       // 1938
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],                                                                                // 1939
        ['HH:mm', /\d\d:\d\d/],                                                                                        // 1940
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],                                                                          // 1941
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],                                                                           // 1942
        ['HHmmss', /\d\d\d\d\d\d/],                                                                                    // 1943
        ['HHmm', /\d\d\d\d/],                                                                                          // 1944
        ['HH', /\d\d/]                                                                                                 // 1945
    ];                                                                                                                 // 1946
                                                                                                                       // 1947
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                       // 1948
                                                                                                                       // 1949
    // date from iso format                                                                                            // 1950
    function configFromISO(config) {                                                                                   // 1951
        var i, l,                                                                                                      // 1952
            string = config._i,                                                                                        // 1953
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),                                       // 1954
            allowTime, dateFormat, timeFormat, tzFormat;                                                               // 1955
                                                                                                                       // 1956
        if (match) {                                                                                                   // 1957
            getParsingFlags(config).iso = true;                                                                        // 1958
                                                                                                                       // 1959
            for (i = 0, l = isoDates.length; i < l; i++) {                                                             // 1960
                if (isoDates[i][1].exec(match[1])) {                                                                   // 1961
                    dateFormat = isoDates[i][0];                                                                       // 1962
                    allowTime = isoDates[i][2] !== false;                                                              // 1963
                    break;                                                                                             // 1964
                }                                                                                                      // 1965
            }                                                                                                          // 1966
            if (dateFormat == null) {                                                                                  // 1967
                config._isValid = false;                                                                               // 1968
                return;                                                                                                // 1969
            }                                                                                                          // 1970
            if (match[3]) {                                                                                            // 1971
                for (i = 0, l = isoTimes.length; i < l; i++) {                                                         // 1972
                    if (isoTimes[i][1].exec(match[3])) {                                                               // 1973
                        // match[2] should be 'T' or space                                                             // 1974
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];                                               // 1975
                        break;                                                                                         // 1976
                    }                                                                                                  // 1977
                }                                                                                                      // 1978
                if (timeFormat == null) {                                                                              // 1979
                    config._isValid = false;                                                                           // 1980
                    return;                                                                                            // 1981
                }                                                                                                      // 1982
            }                                                                                                          // 1983
            if (!allowTime && timeFormat != null) {                                                                    // 1984
                config._isValid = false;                                                                               // 1985
                return;                                                                                                // 1986
            }                                                                                                          // 1987
            if (match[4]) {                                                                                            // 1988
                if (tzRegex.exec(match[4])) {                                                                          // 1989
                    tzFormat = 'Z';                                                                                    // 1990
                } else {                                                                                               // 1991
                    config._isValid = false;                                                                           // 1992
                    return;                                                                                            // 1993
                }                                                                                                      // 1994
            }                                                                                                          // 1995
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');                                            // 1996
            configFromStringAndFormat(config);                                                                         // 1997
        } else {                                                                                                       // 1998
            config._isValid = false;                                                                                   // 1999
        }                                                                                                              // 2000
    }                                                                                                                  // 2001
                                                                                                                       // 2002
    // date from iso format or fallback                                                                                // 2003
    function configFromString(config) {                                                                                // 2004
        var matched = aspNetJsonRegex.exec(config._i);                                                                 // 2005
                                                                                                                       // 2006
        if (matched !== null) {                                                                                        // 2007
            config._d = new Date(+matched[1]);                                                                         // 2008
            return;                                                                                                    // 2009
        }                                                                                                              // 2010
                                                                                                                       // 2011
        configFromISO(config);                                                                                         // 2012
        if (config._isValid === false) {                                                                               // 2013
            delete config._isValid;                                                                                    // 2014
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 2015
        }                                                                                                              // 2016
    }                                                                                                                  // 2017
                                                                                                                       // 2018
    utils_hooks__hooks.createFromInputFallback = deprecate(                                                            // 2019
        'moment construction falls back to js Date. This is ' +                                                        // 2020
        'discouraged and will be removed in upcoming major ' +                                                         // 2021
        'release. Please refer to ' +                                                                                  // 2022
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',                                               // 2023
        function (config) {                                                                                            // 2024
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                          // 2025
        }                                                                                                              // 2026
    );                                                                                                                 // 2027
                                                                                                                       // 2028
    // Pick the first defined of two or three arguments.                                                               // 2029
    function defaults(a, b, c) {                                                                                       // 2030
        if (a != null) {                                                                                               // 2031
            return a;                                                                                                  // 2032
        }                                                                                                              // 2033
        if (b != null) {                                                                                               // 2034
            return b;                                                                                                  // 2035
        }                                                                                                              // 2036
        return c;                                                                                                      // 2037
    }                                                                                                                  // 2038
                                                                                                                       // 2039
    function currentDateArray(config) {                                                                                // 2040
        // hooks is actually the exported moment object                                                                // 2041
        var nowValue = new Date(utils_hooks__hooks.now());                                                             // 2042
        if (config._useUTC) {                                                                                          // 2043
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];                         // 2044
        }                                                                                                              // 2045
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];                                      // 2046
    }                                                                                                                  // 2047
                                                                                                                       // 2048
    // convert an array to a date.                                                                                     // 2049
    // the array should mirror the parameters below                                                                    // 2050
    // note: all values past the year are optional and will default to the lowest possible value.                      // 2051
    // [year, month, day , hour, minute, second, millisecond]                                                          // 2052
    function configFromArray (config) {                                                                                // 2053
        var i, date, input = [], currentDate, yearToUse;                                                               // 2054
                                                                                                                       // 2055
        if (config._d) {                                                                                               // 2056
            return;                                                                                                    // 2057
        }                                                                                                              // 2058
                                                                                                                       // 2059
        currentDate = currentDateArray(config);                                                                        // 2060
                                                                                                                       // 2061
        //compute day of the year from weeks and weekdays                                                              // 2062
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                        // 2063
            dayOfYearFromWeekInfo(config);                                                                             // 2064
        }                                                                                                              // 2065
                                                                                                                       // 2066
        //if the day of the year is set, figure out what it is                                                         // 2067
        if (config._dayOfYear) {                                                                                       // 2068
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                  // 2069
                                                                                                                       // 2070
            if (config._dayOfYear > daysInYear(yearToUse)) {                                                           // 2071
                getParsingFlags(config)._overflowDayOfYear = true;                                                     // 2072
            }                                                                                                          // 2073
                                                                                                                       // 2074
            date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                     // 2075
            config._a[MONTH] = date.getUTCMonth();                                                                     // 2076
            config._a[DATE] = date.getUTCDate();                                                                       // 2077
        }                                                                                                              // 2078
                                                                                                                       // 2079
        // Default to current date.                                                                                    // 2080
        // * if no year, month, day of month are given, default to today                                               // 2081
        // * if day of month is given, default month and year                                                          // 2082
        // * if month is given, default only year                                                                      // 2083
        // * if year is given, don't default anything                                                                  // 2084
        for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                              // 2085
            config._a[i] = input[i] = currentDate[i];                                                                  // 2086
        }                                                                                                              // 2087
                                                                                                                       // 2088
        // Zero out whatever was not defaulted, including time                                                         // 2089
        for (; i < 7; i++) {                                                                                           // 2090
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                       // 2091
        }                                                                                                              // 2092
                                                                                                                       // 2093
        // Check for 24:00:00.000                                                                                      // 2094
        if (config._a[HOUR] === 24 &&                                                                                  // 2095
                config._a[MINUTE] === 0 &&                                                                             // 2096
                config._a[SECOND] === 0 &&                                                                             // 2097
                config._a[MILLISECOND] === 0) {                                                                        // 2098
            config._nextDay = true;                                                                                    // 2099
            config._a[HOUR] = 0;                                                                                       // 2100
        }                                                                                                              // 2101
                                                                                                                       // 2102
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                  // 2103
        // Apply timezone offset from input. The actual utcOffset can be changed                                       // 2104
        // with parseZone.                                                                                             // 2105
        if (config._tzm != null) {                                                                                     // 2106
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                          // 2107
        }                                                                                                              // 2108
                                                                                                                       // 2109
        if (config._nextDay) {                                                                                         // 2110
            config._a[HOUR] = 24;                                                                                      // 2111
        }                                                                                                              // 2112
    }                                                                                                                  // 2113
                                                                                                                       // 2114
    function dayOfYearFromWeekInfo(config) {                                                                           // 2115
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;                                               // 2116
                                                                                                                       // 2117
        w = config._w;                                                                                                 // 2118
        if (w.GG != null || w.W != null || w.E != null) {                                                              // 2119
            dow = 1;                                                                                                   // 2120
            doy = 4;                                                                                                   // 2121
                                                                                                                       // 2122
            // TODO: We need to take the current isoWeekYear, but that depends on                                      // 2123
            // how we interpret now (local, utc, fixed offset). So create                                              // 2124
            // a now version of current config (take local/utc/offset flags, and                                       // 2125
            // create now).                                                                                            // 2126
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);                   // 2127
            week = defaults(w.W, 1);                                                                                   // 2128
            weekday = defaults(w.E, 1);                                                                                // 2129
            if (weekday < 1 || weekday > 7) {                                                                          // 2130
                weekdayOverflow = true;                                                                                // 2131
            }                                                                                                          // 2132
        } else {                                                                                                       // 2133
            dow = config._locale._week.dow;                                                                            // 2134
            doy = config._locale._week.doy;                                                                            // 2135
                                                                                                                       // 2136
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);               // 2137
            week = defaults(w.w, 1);                                                                                   // 2138
                                                                                                                       // 2139
            if (w.d != null) {                                                                                         // 2140
                // weekday -- low day numbers are considered next week                                                 // 2141
                weekday = w.d;                                                                                         // 2142
                if (weekday < 0 || weekday > 6) {                                                                      // 2143
                    weekdayOverflow = true;                                                                            // 2144
                }                                                                                                      // 2145
            } else if (w.e != null) {                                                                                  // 2146
                // local weekday -- counting starts from begining of week                                              // 2147
                weekday = w.e + dow;                                                                                   // 2148
                if (w.e < 0 || w.e > 6) {                                                                              // 2149
                    weekdayOverflow = true;                                                                            // 2150
                }                                                                                                      // 2151
            } else {                                                                                                   // 2152
                // default to begining of week                                                                         // 2153
                weekday = dow;                                                                                         // 2154
            }                                                                                                          // 2155
        }                                                                                                              // 2156
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {                                                      // 2157
            getParsingFlags(config)._overflowWeeks = true;                                                             // 2158
        } else if (weekdayOverflow != null) {                                                                          // 2159
            getParsingFlags(config)._overflowWeekday = true;                                                           // 2160
        } else {                                                                                                       // 2161
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);                                              // 2162
            config._a[YEAR] = temp.year;                                                                               // 2163
            config._dayOfYear = temp.dayOfYear;                                                                        // 2164
        }                                                                                                              // 2165
    }                                                                                                                  // 2166
                                                                                                                       // 2167
    // constant that refers to the ISO standard                                                                        // 2168
    utils_hooks__hooks.ISO_8601 = function () {};                                                                      // 2169
                                                                                                                       // 2170
    // date from string and format string                                                                              // 2171
    function configFromStringAndFormat(config) {                                                                       // 2172
        // TODO: Move this to another part of the creation flow to prevent circular deps                               // 2173
        if (config._f === utils_hooks__hooks.ISO_8601) {                                                               // 2174
            configFromISO(config);                                                                                     // 2175
            return;                                                                                                    // 2176
        }                                                                                                              // 2177
                                                                                                                       // 2178
        config._a = [];                                                                                                // 2179
        getParsingFlags(config).empty = true;                                                                          // 2180
                                                                                                                       // 2181
        // This array is used to make a Date, either with `new Date` or `Date.UTC`                                     // 2182
        var string = '' + config._i,                                                                                   // 2183
            i, parsedInput, tokens, token, skipped,                                                                    // 2184
            stringLength = string.length,                                                                              // 2185
            totalParsedInputLength = 0;                                                                                // 2186
                                                                                                                       // 2187
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                // 2188
                                                                                                                       // 2189
        for (i = 0; i < tokens.length; i++) {                                                                          // 2190
            token = tokens[i];                                                                                         // 2191
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                               // 2192
            // console.log('token', token, 'parsedInput', parsedInput,                                                 // 2193
            //         'regex', getParseRegexForToken(token, config));                                                 // 2194
            if (parsedInput) {                                                                                         // 2195
                skipped = string.substr(0, string.indexOf(parsedInput));                                               // 2196
                if (skipped.length > 0) {                                                                              // 2197
                    getParsingFlags(config).unusedInput.push(skipped);                                                 // 2198
                }                                                                                                      // 2199
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                               // 2200
                totalParsedInputLength += parsedInput.length;                                                          // 2201
            }                                                                                                          // 2202
            // don't parse if it's not a known token                                                                   // 2203
            if (formatTokenFunctions[token]) {                                                                         // 2204
                if (parsedInput) {                                                                                     // 2205
                    getParsingFlags(config).empty = false;                                                             // 2206
                }                                                                                                      // 2207
                else {                                                                                                 // 2208
                    getParsingFlags(config).unusedTokens.push(token);                                                  // 2209
                }                                                                                                      // 2210
                addTimeToArrayFromToken(token, parsedInput, config);                                                   // 2211
            }                                                                                                          // 2212
            else if (config._strict && !parsedInput) {                                                                 // 2213
                getParsingFlags(config).unusedTokens.push(token);                                                      // 2214
            }                                                                                                          // 2215
        }                                                                                                              // 2216
                                                                                                                       // 2217
        // add remaining unparsed input length to the string                                                           // 2218
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;                                 // 2219
        if (string.length > 0) {                                                                                       // 2220
            getParsingFlags(config).unusedInput.push(string);                                                          // 2221
        }                                                                                                              // 2222
                                                                                                                       // 2223
        // clear _12h flag if hour is <= 12                                                                            // 2224
        if (config._a[HOUR] <= 12 &&                                                                                   // 2225
            getParsingFlags(config).bigHour === true &&                                                                // 2226
            config._a[HOUR] > 0) {                                                                                     // 2227
            getParsingFlags(config).bigHour = undefined;                                                               // 2228
        }                                                                                                              // 2229
                                                                                                                       // 2230
        getParsingFlags(config).parsedDateParts = config._a.slice(0);                                                  // 2231
        getParsingFlags(config).meridiem = config._meridiem;                                                           // 2232
        // handle meridiem                                                                                             // 2233
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                          // 2234
                                                                                                                       // 2235
        configFromArray(config);                                                                                       // 2236
        checkOverflow(config);                                                                                         // 2237
    }                                                                                                                  // 2238
                                                                                                                       // 2239
                                                                                                                       // 2240
    function meridiemFixWrap (locale, hour, meridiem) {                                                                // 2241
        var isPm;                                                                                                      // 2242
                                                                                                                       // 2243
        if (meridiem == null) {                                                                                        // 2244
            // nothing to do                                                                                           // 2245
            return hour;                                                                                               // 2246
        }                                                                                                              // 2247
        if (locale.meridiemHour != null) {                                                                             // 2248
            return locale.meridiemHour(hour, meridiem);                                                                // 2249
        } else if (locale.isPM != null) {                                                                              // 2250
            // Fallback                                                                                                // 2251
            isPm = locale.isPM(meridiem);                                                                              // 2252
            if (isPm && hour < 12) {                                                                                   // 2253
                hour += 12;                                                                                            // 2254
            }                                                                                                          // 2255
            if (!isPm && hour === 12) {                                                                                // 2256
                hour = 0;                                                                                              // 2257
            }                                                                                                          // 2258
            return hour;                                                                                               // 2259
        } else {                                                                                                       // 2260
            // this is not supposed to happen                                                                          // 2261
            return hour;                                                                                               // 2262
        }                                                                                                              // 2263
    }                                                                                                                  // 2264
                                                                                                                       // 2265
    // date from string and array of format strings                                                                    // 2266
    function configFromStringAndArray(config) {                                                                        // 2267
        var tempConfig,                                                                                                // 2268
            bestMoment,                                                                                                // 2269
                                                                                                                       // 2270
            scoreToBeat,                                                                                               // 2271
            i,                                                                                                         // 2272
            currentScore;                                                                                              // 2273
                                                                                                                       // 2274
        if (config._f.length === 0) {                                                                                  // 2275
            getParsingFlags(config).invalidFormat = true;                                                              // 2276
            config._d = new Date(NaN);                                                                                 // 2277
            return;                                                                                                    // 2278
        }                                                                                                              // 2279
                                                                                                                       // 2280
        for (i = 0; i < config._f.length; i++) {                                                                       // 2281
            currentScore = 0;                                                                                          // 2282
            tempConfig = copyConfig({}, config);                                                                       // 2283
            if (config._useUTC != null) {                                                                              // 2284
                tempConfig._useUTC = config._useUTC;                                                                   // 2285
            }                                                                                                          // 2286
            tempConfig._f = config._f[i];                                                                              // 2287
            configFromStringAndFormat(tempConfig);                                                                     // 2288
                                                                                                                       // 2289
            if (!valid__isValid(tempConfig)) {                                                                         // 2290
                continue;                                                                                              // 2291
            }                                                                                                          // 2292
                                                                                                                       // 2293
            // if there is any input that was not parsed add a penalty for that format                                 // 2294
            currentScore += getParsingFlags(tempConfig).charsLeftOver;                                                 // 2295
                                                                                                                       // 2296
            //or tokens                                                                                                // 2297
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;                                      // 2298
                                                                                                                       // 2299
            getParsingFlags(tempConfig).score = currentScore;                                                          // 2300
                                                                                                                       // 2301
            if (scoreToBeat == null || currentScore < scoreToBeat) {                                                   // 2302
                scoreToBeat = currentScore;                                                                            // 2303
                bestMoment = tempConfig;                                                                               // 2304
            }                                                                                                          // 2305
        }                                                                                                              // 2306
                                                                                                                       // 2307
        extend(config, bestMoment || tempConfig);                                                                      // 2308
    }                                                                                                                  // 2309
                                                                                                                       // 2310
    function configFromObject(config) {                                                                                // 2311
        if (config._d) {                                                                                               // 2312
            return;                                                                                                    // 2313
        }                                                                                                              // 2314
                                                                                                                       // 2315
        var i = normalizeObjectUnits(config._i);                                                                       // 2316
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);                                                                           // 2318
        });                                                                                                            // 2319
                                                                                                                       // 2320
        configFromArray(config);                                                                                       // 2321
    }                                                                                                                  // 2322
                                                                                                                       // 2323
    function createFromConfig (config) {                                                                               // 2324
        var res = new Moment(checkOverflow(prepareConfig(config)));                                                    // 2325
        if (res._nextDay) {                                                                                            // 2326
            // Adding is smart enough around DST                                                                       // 2327
            res.add(1, 'd');                                                                                           // 2328
            res._nextDay = undefined;                                                                                  // 2329
        }                                                                                                              // 2330
                                                                                                                       // 2331
        return res;                                                                                                    // 2332
    }                                                                                                                  // 2333
                                                                                                                       // 2334
    function prepareConfig (config) {                                                                                  // 2335
        var input = config._i,                                                                                         // 2336
            format = config._f;                                                                                        // 2337
                                                                                                                       // 2338
        config._locale = config._locale || locale_locales__getLocale(config._l);                                       // 2339
                                                                                                                       // 2340
        if (input === null || (format === undefined && input === '')) {                                                // 2341
            return valid__createInvalid({nullInput: true});                                                            // 2342
        }                                                                                                              // 2343
                                                                                                                       // 2344
        if (typeof input === 'string') {                                                                               // 2345
            config._i = input = config._locale.preparse(input);                                                        // 2346
        }                                                                                                              // 2347
                                                                                                                       // 2348
        if (isMoment(input)) {                                                                                         // 2349
            return new Moment(checkOverflow(input));                                                                   // 2350
        } else if (isArray(format)) {                                                                                  // 2351
            configFromStringAndArray(config);                                                                          // 2352
        } else if (isDate(input)) {                                                                                    // 2353
            config._d = input;                                                                                         // 2354
        } else if (format) {                                                                                           // 2355
            configFromStringAndFormat(config);                                                                         // 2356
        }  else {                                                                                                      // 2357
            configFromInput(config);                                                                                   // 2358
        }                                                                                                              // 2359
                                                                                                                       // 2360
        if (!valid__isValid(config)) {                                                                                 // 2361
            config._d = null;                                                                                          // 2362
        }                                                                                                              // 2363
                                                                                                                       // 2364
        return config;                                                                                                 // 2365
    }                                                                                                                  // 2366
                                                                                                                       // 2367
    function configFromInput(config) {                                                                                 // 2368
        var input = config._i;                                                                                         // 2369
        if (input === undefined) {                                                                                     // 2370
            config._d = new Date(utils_hooks__hooks.now());                                                            // 2371
        } else if (isDate(input)) {                                                                                    // 2372
            config._d = new Date(input.valueOf());                                                                     // 2373
        } else if (typeof input === 'string') {                                                                        // 2374
            configFromString(config);                                                                                  // 2375
        } else if (isArray(input)) {                                                                                   // 2376
            config._a = map(input.slice(0), function (obj) {                                                           // 2377
                return parseInt(obj, 10);                                                                              // 2378
            });                                                                                                        // 2379
            configFromArray(config);                                                                                   // 2380
        } else if (typeof(input) === 'object') {                                                                       // 2381
            configFromObject(config);                                                                                  // 2382
        } else if (typeof(input) === 'number') {                                                                       // 2383
            // from milliseconds                                                                                       // 2384
            config._d = new Date(input);                                                                               // 2385
        } else {                                                                                                       // 2386
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 2387
        }                                                                                                              // 2388
    }                                                                                                                  // 2389
                                                                                                                       // 2390
    function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                 // 2391
        var c = {};                                                                                                    // 2392
                                                                                                                       // 2393
        if (typeof(locale) === 'boolean') {                                                                            // 2394
            strict = locale;                                                                                           // 2395
            locale = undefined;                                                                                        // 2396
        }                                                                                                              // 2397
                                                                                                                       // 2398
        if ((isObject(input) && isObjectEmpty(input)) ||                                                               // 2399
                (isArray(input) && input.length === 0)) {                                                              // 2400
            input = undefined;                                                                                         // 2401
        }                                                                                                              // 2402
        // object construction must be done this way.                                                                  // 2403
        // https://github.com/moment/moment/issues/1423                                                                // 2404
        c._isAMomentObject = true;                                                                                     // 2405
        c._useUTC = c._isUTC = isUTC;                                                                                  // 2406
        c._l = locale;                                                                                                 // 2407
        c._i = input;                                                                                                  // 2408
        c._f = format;                                                                                                 // 2409
        c._strict = strict;                                                                                            // 2410
                                                                                                                       // 2411
        return createFromConfig(c);                                                                                    // 2412
    }                                                                                                                  // 2413
                                                                                                                       // 2414
    function local__createLocal (input, format, locale, strict) {                                                      // 2415
        return createLocalOrUTC(input, format, locale, strict, false);                                                 // 2416
    }                                                                                                                  // 2417
                                                                                                                       // 2418
    var prototypeMin = deprecate(                                                                                      // 2419
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',          // 2420
        function () {                                                                                                  // 2421
            var other = local__createLocal.apply(null, arguments);                                                     // 2422
            if (this.isValid() && other.isValid()) {                                                                   // 2423
                return other < this ? this : other;                                                                    // 2424
            } else {                                                                                                   // 2425
                return valid__createInvalid();                                                                         // 2426
            }                                                                                                          // 2427
        }                                                                                                              // 2428
    );                                                                                                                 // 2429
                                                                                                                       // 2430
    var prototypeMax = deprecate(                                                                                      // 2431
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',          // 2432
        function () {                                                                                                  // 2433
            var other = local__createLocal.apply(null, arguments);                                                     // 2434
            if (this.isValid() && other.isValid()) {                                                                   // 2435
                return other > this ? this : other;                                                                    // 2436
            } else {                                                                                                   // 2437
                return valid__createInvalid();                                                                         // 2438
            }                                                                                                          // 2439
        }                                                                                                              // 2440
    );                                                                                                                 // 2441
                                                                                                                       // 2442
    // Pick a moment m from moments so that m[fn](other) is true for all                                               // 2443
    // other. This relies on the function fn to be transitive.                                                         // 2444
    //                                                                                                                 // 2445
    // moments should either be an array of moment objects or an array, whose                                          // 2446
    // first element is an array of moment objects.                                                                    // 2447
    function pickBy(fn, moments) {                                                                                     // 2448
        var res, i;                                                                                                    // 2449
        if (moments.length === 1 && isArray(moments[0])) {                                                             // 2450
            moments = moments[0];                                                                                      // 2451
        }                                                                                                              // 2452
        if (!moments.length) {                                                                                         // 2453
            return local__createLocal();                                                                               // 2454
        }                                                                                                              // 2455
        res = moments[0];                                                                                              // 2456
        for (i = 1; i < moments.length; ++i) {                                                                         // 2457
            if (!moments[i].isValid() || moments[i][fn](res)) {                                                        // 2458
                res = moments[i];                                                                                      // 2459
            }                                                                                                          // 2460
        }                                                                                                              // 2461
        return res;                                                                                                    // 2462
    }                                                                                                                  // 2463
                                                                                                                       // 2464
    // TODO: Use [].sort instead?                                                                                      // 2465
    function min () {                                                                                                  // 2466
        var args = [].slice.call(arguments, 0);                                                                        // 2467
                                                                                                                       // 2468
        return pickBy('isBefore', args);                                                                               // 2469
    }                                                                                                                  // 2470
                                                                                                                       // 2471
    function max () {                                                                                                  // 2472
        var args = [].slice.call(arguments, 0);                                                                        // 2473
                                                                                                                       // 2474
        return pickBy('isAfter', args);                                                                                // 2475
    }                                                                                                                  // 2476
                                                                                                                       // 2477
    var now = function () {                                                                                            // 2478
        return Date.now ? Date.now() : +(new Date());                                                                  // 2479
    };                                                                                                                 // 2480
                                                                                                                       // 2481
    function Duration (duration) {                                                                                     // 2482
        var normalizedInput = normalizeObjectUnits(duration),                                                          // 2483
            years = normalizedInput.year || 0,                                                                         // 2484
            quarters = normalizedInput.quarter || 0,                                                                   // 2485
            months = normalizedInput.month || 0,                                                                       // 2486
            weeks = normalizedInput.week || 0,                                                                         // 2487
            days = normalizedInput.day || 0,                                                                           // 2488
            hours = normalizedInput.hour || 0,                                                                         // 2489
            minutes = normalizedInput.minute || 0,                                                                     // 2490
            seconds = normalizedInput.second || 0,                                                                     // 2491
            milliseconds = normalizedInput.millisecond || 0;                                                           // 2492
                                                                                                                       // 2493
        // representation for dateAddRemove                                                                            // 2494
        this._milliseconds = +milliseconds +                                                                           // 2495
            seconds * 1e3 + // 1000                                                                                    // 2496
            minutes * 6e4 + // 1000 * 60                                                                               // 2497
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a                                                // 2499
        // day when working around DST, we need to store them separately                                               // 2500
        this._days = +days +                                                                                           // 2501
            weeks * 7;                                                                                                 // 2502
        // It is impossible translate months into days without knowing                                                 // 2503
        // which months you are are talking about, so we have to store                                                 // 2504
        // it separately.                                                                                              // 2505
        this._months = +months +                                                                                       // 2506
            quarters * 3 +                                                                                             // 2507
            years * 12;                                                                                                // 2508
                                                                                                                       // 2509
        this._data = {};                                                                                               // 2510
                                                                                                                       // 2511
        this._locale = locale_locales__getLocale();                                                                    // 2512
                                                                                                                       // 2513
        this._bubble();                                                                                                // 2514
    }                                                                                                                  // 2515
                                                                                                                       // 2516
    function isDuration (obj) {                                                                                        // 2517
        return obj instanceof Duration;                                                                                // 2518
    }                                                                                                                  // 2519
                                                                                                                       // 2520
    // FORMATTING                                                                                                      // 2521
                                                                                                                       // 2522
    function offset (token, separator) {                                                                               // 2523
        addFormatToken(token, 0, 0, function () {                                                                      // 2524
            var offset = this.utcOffset();                                                                             // 2525
            var sign = '+';                                                                                            // 2526
            if (offset < 0) {                                                                                          // 2527
                offset = -offset;                                                                                      // 2528
                sign = '-';                                                                                            // 2529
            }                                                                                                          // 2530
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                     // 2531
        });                                                                                                            // 2532
    }                                                                                                                  // 2533
                                                                                                                       // 2534
    offset('Z', ':');                                                                                                  // 2535
    offset('ZZ', '');                                                                                                  // 2536
                                                                                                                       // 2537
    // PARSING                                                                                                         // 2538
                                                                                                                       // 2539
    addRegexToken('Z',  matchShortOffset);                                                                             // 2540
    addRegexToken('ZZ', matchShortOffset);                                                                             // 2541
    addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                       // 2542
        config._useUTC = true;                                                                                         // 2543
        config._tzm = offsetFromString(matchShortOffset, input);                                                       // 2544
    });                                                                                                                // 2545
                                                                                                                       // 2546
    // HELPERS                                                                                                         // 2547
                                                                                                                       // 2548
    // timezone chunker                                                                                                // 2549
    // '+10:00' > ['10',  '00']                                                                                        // 2550
    // '-1530'  > ['-15', '30']                                                                                        // 2551
    var chunkOffset = /([\+\-]|\d\d)/gi;                                                                               // 2552
                                                                                                                       // 2553
    function offsetFromString(matcher, string) {                                                                       // 2554
        var matches = ((string || '').match(matcher) || []);                                                           // 2555
        var chunk   = matches[matches.length - 1] || [];                                                               // 2556
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                  // 2557
        var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                              // 2558
                                                                                                                       // 2559
        return parts[0] === '+' ? minutes : -minutes;                                                                  // 2560
    }                                                                                                                  // 2561
                                                                                                                       // 2562
    // Return a moment from input, that is local/utc/zone equivalent to model.                                         // 2563
    function cloneWithOffset(input, model) {                                                                           // 2564
        var res, diff;                                                                                                 // 2565
        if (model._isUTC) {                                                                                            // 2566
            res = model.clone();                                                                                       // 2567
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.                                                    // 2569
            res._d.setTime(res._d.valueOf() + diff);                                                                   // 2570
            utils_hooks__hooks.updateOffset(res, false);                                                               // 2571
            return res;                                                                                                // 2572
        } else {                                                                                                       // 2573
            return local__createLocal(input).local();                                                                  // 2574
        }                                                                                                              // 2575
    }                                                                                                                  // 2576
                                                                                                                       // 2577
    function getDateOffset (m) {                                                                                       // 2578
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                              // 2579
        // https://github.com/moment/moment/pull/1871                                                                  // 2580
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                        // 2581
    }                                                                                                                  // 2582
                                                                                                                       // 2583
    // HOOKS                                                                                                           // 2584
                                                                                                                       // 2585
    // This function will be called whenever a moment is mutated.                                                      // 2586
    // It is intended to keep the offset in sync with the timezone.                                                    // 2587
    utils_hooks__hooks.updateOffset = function () {};                                                                  // 2588
                                                                                                                       // 2589
    // MOMENTS                                                                                                         // 2590
                                                                                                                       // 2591
    // keepLocalTime = true means only change the timezone, without                                                    // 2592
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                            // 2593
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                             // 2594
    // +0200, so we adjust the time as needed, to be valid.                                                            // 2595
    //                                                                                                                 // 2596
    // Keeping the time actually adds/subtracts (one hour)                                                             // 2597
    // from the actual represented time. That is why we call updateOffset                                              // 2598
    // a second time. In case it wants us to change the offset again                                                   // 2599
    // _changeInProgress == true case, then we have to adjust, because                                                 // 2600
    // there is no such time in the given timezone.                                                                    // 2601
    function getSetOffset (input, keepLocalTime) {                                                                     // 2602
        var offset = this._offset || 0,                                                                                // 2603
            localAdjust;                                                                                               // 2604
        if (!this.isValid()) {                                                                                         // 2605
            return input != null ? this : NaN;                                                                         // 2606
        }                                                                                                              // 2607
        if (input != null) {                                                                                           // 2608
            if (typeof input === 'string') {                                                                           // 2609
                input = offsetFromString(matchShortOffset, input);                                                     // 2610
            } else if (Math.abs(input) < 16) {                                                                         // 2611
                input = input * 60;                                                                                    // 2612
            }                                                                                                          // 2613
            if (!this._isUTC && keepLocalTime) {                                                                       // 2614
                localAdjust = getDateOffset(this);                                                                     // 2615
            }                                                                                                          // 2616
            this._offset = input;                                                                                      // 2617
            this._isUTC = true;                                                                                        // 2618
            if (localAdjust != null) {                                                                                 // 2619
                this.add(localAdjust, 'm');                                                                            // 2620
            }                                                                                                          // 2621
            if (offset !== input) {                                                                                    // 2622
                if (!keepLocalTime || this._changeInProgress) {                                                        // 2623
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);            // 2624
                } else if (!this._changeInProgress) {                                                                  // 2625
                    this._changeInProgress = true;                                                                     // 2626
                    utils_hooks__hooks.updateOffset(this, true);                                                       // 2627
                    this._changeInProgress = null;                                                                     // 2628
                }                                                                                                      // 2629
            }                                                                                                          // 2630
            return this;                                                                                               // 2631
        } else {                                                                                                       // 2632
            return this._isUTC ? offset : getDateOffset(this);                                                         // 2633
        }                                                                                                              // 2634
    }                                                                                                                  // 2635
                                                                                                                       // 2636
    function getSetZone (input, keepLocalTime) {                                                                       // 2637
        if (input != null) {                                                                                           // 2638
            if (typeof input !== 'string') {                                                                           // 2639
                input = -input;                                                                                        // 2640
            }                                                                                                          // 2641
                                                                                                                       // 2642
            this.utcOffset(input, keepLocalTime);                                                                      // 2643
                                                                                                                       // 2644
            return this;                                                                                               // 2645
        } else {                                                                                                       // 2646
            return -this.utcOffset();                                                                                  // 2647
        }                                                                                                              // 2648
    }                                                                                                                  // 2649
                                                                                                                       // 2650
    function setOffsetToUTC (keepLocalTime) {                                                                          // 2651
        return this.utcOffset(0, keepLocalTime);                                                                       // 2652
    }                                                                                                                  // 2653
                                                                                                                       // 2654
    function setOffsetToLocal (keepLocalTime) {                                                                        // 2655
        if (this._isUTC) {                                                                                             // 2656
            this.utcOffset(0, keepLocalTime);                                                                          // 2657
            this._isUTC = false;                                                                                       // 2658
                                                                                                                       // 2659
            if (keepLocalTime) {                                                                                       // 2660
                this.subtract(getDateOffset(this), 'm');                                                               // 2661
            }                                                                                                          // 2662
        }                                                                                                              // 2663
        return this;                                                                                                   // 2664
    }                                                                                                                  // 2665
                                                                                                                       // 2666
    function setOffsetToParsedOffset () {                                                                              // 2667
        if (this._tzm) {                                                                                               // 2668
            this.utcOffset(this._tzm);                                                                                 // 2669
        } else if (typeof this._i === 'string') {                                                                      // 2670
            this.utcOffset(offsetFromString(matchOffset, this._i));                                                    // 2671
        }                                                                                                              // 2672
        return this;                                                                                                   // 2673
    }                                                                                                                  // 2674
                                                                                                                       // 2675
    function hasAlignedHourOffset (input) {                                                                            // 2676
        if (!this.isValid()) {                                                                                         // 2677
            return false;                                                                                              // 2678
        }                                                                                                              // 2679
        input = input ? local__createLocal(input).utcOffset() : 0;                                                     // 2680
                                                                                                                       // 2681
        return (this.utcOffset() - input) % 60 === 0;                                                                  // 2682
    }                                                                                                                  // 2683
                                                                                                                       // 2684
    function isDaylightSavingTime () {                                                                                 // 2685
        return (                                                                                                       // 2686
            this.utcOffset() > this.clone().month(0).utcOffset() ||                                                    // 2687
            this.utcOffset() > this.clone().month(5).utcOffset()                                                       // 2688
        );                                                                                                             // 2689
    }                                                                                                                  // 2690
                                                                                                                       // 2691
    function isDaylightSavingTimeShifted () {                                                                          // 2692
        if (!isUndefined(this._isDSTShifted)) {                                                                        // 2693
            return this._isDSTShifted;                                                                                 // 2694
        }                                                                                                              // 2695
                                                                                                                       // 2696
        var c = {};                                                                                                    // 2697
                                                                                                                       // 2698
        copyConfig(c, this);                                                                                           // 2699
        c = prepareConfig(c);                                                                                          // 2700
                                                                                                                       // 2701
        if (c._a) {                                                                                                    // 2702
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);                             // 2703
            this._isDSTShifted = this.isValid() &&                                                                     // 2704
                compareArrays(c._a, other.toArray()) > 0;                                                              // 2705
        } else {                                                                                                       // 2706
            this._isDSTShifted = false;                                                                                // 2707
        }                                                                                                              // 2708
                                                                                                                       // 2709
        return this._isDSTShifted;                                                                                     // 2710
    }                                                                                                                  // 2711
                                                                                                                       // 2712
    function isLocal () {                                                                                              // 2713
        return this.isValid() ? !this._isUTC : false;                                                                  // 2714
    }                                                                                                                  // 2715
                                                                                                                       // 2716
    function isUtcOffset () {                                                                                          // 2717
        return this.isValid() ? this._isUTC : false;                                                                   // 2718
    }                                                                                                                  // 2719
                                                                                                                       // 2720
    function isUtc () {                                                                                                // 2721
        return this.isValid() ? this._isUTC && this._offset === 0 : false;                                             // 2722
    }                                                                                                                  // 2723
                                                                                                                       // 2724
    // ASP.NET json date format regex                                                                                  // 2725
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;                                   // 2726
                                                                                                                       // 2727
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                       // 2728
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                       // 2729
    // and further modified to allow for strings containing both week and day                                          // 2730
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                                                                                                                       // 2732
    function create__createDuration (input, key) {                                                                     // 2733
        var duration = input,                                                                                          // 2734
            // matching against regexp is expensive, do it on demand                                                   // 2735
            match = null,                                                                                              // 2736
            sign,                                                                                                      // 2737
            ret,                                                                                                       // 2738
            diffRes;                                                                                                   // 2739
                                                                                                                       // 2740
        if (isDuration(input)) {                                                                                       // 2741
            duration = {                                                                                               // 2742
                ms : input._milliseconds,                                                                              // 2743
                d  : input._days,                                                                                      // 2744
                M  : input._months                                                                                     // 2745
            };                                                                                                         // 2746
        } else if (typeof input === 'number') {                                                                        // 2747
            duration = {};                                                                                             // 2748
            if (key) {                                                                                                 // 2749
                duration[key] = input;                                                                                 // 2750
            } else {                                                                                                   // 2751
                duration.milliseconds = input;                                                                         // 2752
            }                                                                                                          // 2753
        } else if (!!(match = aspNetRegex.exec(input))) {                                                              // 2754
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 2755
            duration = {                                                                                               // 2756
                y  : 0,                                                                                                // 2757
                d  : toInt(match[DATE])        * sign,                                                                 // 2758
                h  : toInt(match[HOUR])        * sign,                                                                 // 2759
                m  : toInt(match[MINUTE])      * sign,                                                                 // 2760
                s  : toInt(match[SECOND])      * sign,                                                                 // 2761
                ms : toInt(match[MILLISECOND]) * sign                                                                  // 2762
            };                                                                                                         // 2763
        } else if (!!(match = isoRegex.exec(input))) {                                                                 // 2764
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 2765
            duration = {                                                                                               // 2766
                y : parseIso(match[2], sign),                                                                          // 2767
                M : parseIso(match[3], sign),                                                                          // 2768
                w : parseIso(match[4], sign),                                                                          // 2769
                d : parseIso(match[5], sign),                                                                          // 2770
                h : parseIso(match[6], sign),                                                                          // 2771
                m : parseIso(match[7], sign),                                                                          // 2772
                s : parseIso(match[8], sign)                                                                           // 2773
            };                                                                                                         // 2774
        } else if (duration == null) {// checks for null or undefined                                                  // 2775
            duration = {};                                                                                             // 2776
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                         // 2777
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));           // 2778
                                                                                                                       // 2779
            duration = {};                                                                                             // 2780
            duration.ms = diffRes.milliseconds;                                                                        // 2781
            duration.M = diffRes.months;                                                                               // 2782
        }                                                                                                              // 2783
                                                                                                                       // 2784
        ret = new Duration(duration);                                                                                  // 2785
                                                                                                                       // 2786
        if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                       // 2787
            ret._locale = input._locale;                                                                               // 2788
        }                                                                                                              // 2789
                                                                                                                       // 2790
        return ret;                                                                                                    // 2791
    }                                                                                                                  // 2792
                                                                                                                       // 2793
    create__createDuration.fn = Duration.prototype;                                                                    // 2794
                                                                                                                       // 2795
    function parseIso (inp, sign) {                                                                                    // 2796
        // We'd normally use ~~inp for this, but unfortunately it also                                                 // 2797
        // converts floats to ints.                                                                                    // 2798
        // inp may be undefined, so careful calling replace on it.                                                     // 2799
        var res = inp && parseFloat(inp.replace(',', '.'));                                                            // 2800
        // apply sign while we're at it                                                                                // 2801
        return (isNaN(res) ? 0 : res) * sign;                                                                          // 2802
    }                                                                                                                  // 2803
                                                                                                                       // 2804
    function positiveMomentsDifference(base, other) {                                                                  // 2805
        var res = {milliseconds: 0, months: 0};                                                                        // 2806
                                                                                                                       // 2807
        res.months = other.month() - base.month() +                                                                    // 2808
            (other.year() - base.year()) * 12;                                                                         // 2809
        if (base.clone().add(res.months, 'M').isAfter(other)) {                                                        // 2810
            --res.months;                                                                                              // 2811
        }                                                                                                              // 2812
                                                                                                                       // 2813
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                              // 2814
                                                                                                                       // 2815
        return res;                                                                                                    // 2816
    }                                                                                                                  // 2817
                                                                                                                       // 2818
    function momentsDifference(base, other) {                                                                          // 2819
        var res;                                                                                                       // 2820
        if (!(base.isValid() && other.isValid())) {                                                                    // 2821
            return {milliseconds: 0, months: 0};                                                                       // 2822
        }                                                                                                              // 2823
                                                                                                                       // 2824
        other = cloneWithOffset(other, base);                                                                          // 2825
        if (base.isBefore(other)) {                                                                                    // 2826
            res = positiveMomentsDifference(base, other);                                                              // 2827
        } else {                                                                                                       // 2828
            res = positiveMomentsDifference(other, base);                                                              // 2829
            res.milliseconds = -res.milliseconds;                                                                      // 2830
            res.months = -res.months;                                                                                  // 2831
        }                                                                                                              // 2832
                                                                                                                       // 2833
        return res;                                                                                                    // 2834
    }                                                                                                                  // 2835
                                                                                                                       // 2836
    function absRound (number) {                                                                                       // 2837
        if (number < 0) {                                                                                              // 2838
            return Math.round(-1 * number) * -1;                                                                       // 2839
        } else {                                                                                                       // 2840
            return Math.round(number);                                                                                 // 2841
        }                                                                                                              // 2842
    }                                                                                                                  // 2843
                                                                                                                       // 2844
    // TODO: remove 'name' arg after deprecation is removed                                                            // 2845
    function createAdder(direction, name) {                                                                            // 2846
        return function (val, period) {                                                                                // 2847
            var dur, tmp;                                                                                              // 2848
            //invert the arguments, but complain about it                                                              // 2849
            if (period !== null && !isNaN(+period)) {                                                                  // 2850
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');                       // 2852
                tmp = val; val = period; period = tmp;                                                                 // 2853
            }                                                                                                          // 2854
                                                                                                                       // 2855
            val = typeof val === 'string' ? +val : val;                                                                // 2856
            dur = create__createDuration(val, period);                                                                 // 2857
            add_subtract__addSubtract(this, dur, direction);                                                           // 2858
            return this;                                                                                               // 2859
        };                                                                                                             // 2860
    }                                                                                                                  // 2861
                                                                                                                       // 2862
    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {                                       // 2863
        var milliseconds = duration._milliseconds,                                                                     // 2864
            days = absRound(duration._days),                                                                           // 2865
            months = absRound(duration._months);                                                                       // 2866
                                                                                                                       // 2867
        if (!mom.isValid()) {                                                                                          // 2868
            // No op                                                                                                   // 2869
            return;                                                                                                    // 2870
        }                                                                                                              // 2871
                                                                                                                       // 2872
        updateOffset = updateOffset == null ? true : updateOffset;                                                     // 2873
                                                                                                                       // 2874
        if (milliseconds) {                                                                                            // 2875
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);                                                // 2876
        }                                                                                                              // 2877
        if (days) {                                                                                                    // 2878
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);                                    // 2879
        }                                                                                                              // 2880
        if (months) {                                                                                                  // 2881
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);                                             // 2882
        }                                                                                                              // 2883
        if (updateOffset) {                                                                                            // 2884
            utils_hooks__hooks.updateOffset(mom, days || months);                                                      // 2885
        }                                                                                                              // 2886
    }                                                                                                                  // 2887
                                                                                                                       // 2888
    var add_subtract__add      = createAdder(1, 'add');                                                                // 2889
    var add_subtract__subtract = createAdder(-1, 'subtract');                                                          // 2890
                                                                                                                       // 2891
    function getCalendarFormat(myMoment, now) {                                                                        // 2892
        var diff = myMoment.diff(now, 'days', true);                                                                   // 2893
        return diff < -6 ? 'sameElse' :                                                                                // 2894
                diff < -1 ? 'lastWeek' :                                                                               // 2895
                diff < 0 ? 'lastDay' :                                                                                 // 2896
                diff < 1 ? 'sameDay' :                                                                                 // 2897
                diff < 2 ? 'nextDay' :                                                                                 // 2898
                diff < 7 ? 'nextWeek' : 'sameElse';                                                                    // 2899
    }                                                                                                                  // 2900
                                                                                                                       // 2901
    function moment_calendar__calendar (time, formats) {                                                               // 2902
        // We want to compare the start of today, vs this.                                                             // 2903
        // Getting start-of-today depends on whether we're local/utc/offset or not.                                    // 2904
        var now = time || local__createLocal(),                                                                        // 2905
            sod = cloneWithOffset(now, this).startOf('day'),                                                           // 2906
            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';                                       // 2907
                                                                                                                       // 2908
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);     // 2909
                                                                                                                       // 2910
        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));               // 2911
    }                                                                                                                  // 2912
                                                                                                                       // 2913
    function clone () {                                                                                                // 2914
        return new Moment(this);                                                                                       // 2915
    }                                                                                                                  // 2916
                                                                                                                       // 2917
    function isAfter (input, units) {                                                                                  // 2918
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 2919
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2920
            return false;                                                                                              // 2921
        }                                                                                                              // 2922
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 2923
        if (units === 'millisecond') {                                                                                 // 2924
            return this.valueOf() > localInput.valueOf();                                                              // 2925
        } else {                                                                                                       // 2926
            return localInput.valueOf() < this.clone().startOf(units).valueOf();                                       // 2927
        }                                                                                                              // 2928
    }                                                                                                                  // 2929
                                                                                                                       // 2930
    function isBefore (input, units) {                                                                                 // 2931
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 2932
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2933
            return false;                                                                                              // 2934
        }                                                                                                              // 2935
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 2936
        if (units === 'millisecond') {                                                                                 // 2937
            return this.valueOf() < localInput.valueOf();                                                              // 2938
        } else {                                                                                                       // 2939
            return this.clone().endOf(units).valueOf() < localInput.valueOf();                                         // 2940
        }                                                                                                              // 2941
    }                                                                                                                  // 2942
                                                                                                                       // 2943
    function isBetween (from, to, units, inclusivity) {                                                                // 2944
        inclusivity = inclusivity || '()';                                                                             // 2945
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&                   // 2946
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));                            // 2947
    }                                                                                                                  // 2948
                                                                                                                       // 2949
    function isSame (input, units) {                                                                                   // 2950
        var localInput = isMoment(input) ? input : local__createLocal(input),                                          // 2951
            inputMs;                                                                                                   // 2952
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2953
            return false;                                                                                              // 2954
        }                                                                                                              // 2955
        units = normalizeUnits(units || 'millisecond');                                                                // 2956
        if (units === 'millisecond') {                                                                                 // 2957
            return this.valueOf() === localInput.valueOf();                                                            // 2958
        } else {                                                                                                       // 2959
            inputMs = localInput.valueOf();                                                                            // 2960
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }                                                                                                              // 2962
    }                                                                                                                  // 2963
                                                                                                                       // 2964
    function isSameOrAfter (input, units) {                                                                            // 2965
        return this.isSame(input, units) || this.isAfter(input,units);                                                 // 2966
    }                                                                                                                  // 2967
                                                                                                                       // 2968
    function isSameOrBefore (input, units) {                                                                           // 2969
        return this.isSame(input, units) || this.isBefore(input,units);                                                // 2970
    }                                                                                                                  // 2971
                                                                                                                       // 2972
    function diff (input, units, asFloat) {                                                                            // 2973
        var that,                                                                                                      // 2974
            zoneDelta,                                                                                                 // 2975
            delta, output;                                                                                             // 2976
                                                                                                                       // 2977
        if (!this.isValid()) {                                                                                         // 2978
            return NaN;                                                                                                // 2979
        }                                                                                                              // 2980
                                                                                                                       // 2981
        that = cloneWithOffset(input, this);                                                                           // 2982
                                                                                                                       // 2983
        if (!that.isValid()) {                                                                                         // 2984
            return NaN;                                                                                                // 2985
        }                                                                                                              // 2986
                                                                                                                       // 2987
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;                                                       // 2988
                                                                                                                       // 2989
        units = normalizeUnits(units);                                                                                 // 2990
                                                                                                                       // 2991
        if (units === 'year' || units === 'month' || units === 'quarter') {                                            // 2992
            output = monthDiff(this, that);                                                                            // 2993
            if (units === 'quarter') {                                                                                 // 2994
                output = output / 3;                                                                                   // 2995
            } else if (units === 'year') {                                                                             // 2996
                output = output / 12;                                                                                  // 2997
            }                                                                                                          // 2998
        } else {                                                                                                       // 2999
            delta = this - that;                                                                                       // 3000
            output = units === 'second' ? delta / 1e3 : // 1000                                                        // 3001
                units === 'minute' ? delta / 6e4 : // 1000 * 60                                                        // 3002
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                    // 3003
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                     // 3004
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst               // 3005
                delta;                                                                                                 // 3006
        }                                                                                                              // 3007
        return asFloat ? output : absFloor(output);                                                                    // 3008
    }                                                                                                                  // 3009
                                                                                                                       // 3010
    function monthDiff (a, b) {                                                                                        // 3011
        // difference in months                                                                                        // 3012
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                   // 3013
            // b is in (anchor - 1 month, anchor + 1 month)                                                            // 3014
            anchor = a.clone().add(wholeMonthDiff, 'months'),                                                          // 3015
            anchor2, adjust;                                                                                           // 3016
                                                                                                                       // 3017
        if (b - anchor < 0) {                                                                                          // 3018
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                     // 3019
            // linear across the month                                                                                 // 3020
            adjust = (b - anchor) / (anchor - anchor2);                                                                // 3021
        } else {                                                                                                       // 3022
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                     // 3023
            // linear across the month                                                                                 // 3024
            adjust = (b - anchor) / (anchor2 - anchor);                                                                // 3025
        }                                                                                                              // 3026
                                                                                                                       // 3027
        //check for negative zero, return zero if negative zero                                                        // 3028
        return -(wholeMonthDiff + adjust) || 0;                                                                        // 3029
    }                                                                                                                  // 3030
                                                                                                                       // 3031
    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                         // 3032
    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';                                                    // 3033
                                                                                                                       // 3034
    function toString () {                                                                                             // 3035
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                   // 3036
    }                                                                                                                  // 3037
                                                                                                                       // 3038
    function moment_format__toISOString () {                                                                           // 3039
        var m = this.clone().utc();                                                                                    // 3040
        if (0 < m.year() && m.year() <= 9999) {                                                                        // 3041
            if (isFunction(Date.prototype.toISOString)) {                                                              // 3042
                // native implementation is ~50x faster, use it when we can                                            // 3043
                return this.toDate().toISOString();                                                                    // 3044
            } else {                                                                                                   // 3045
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                // 3046
            }                                                                                                          // 3047
        } else {                                                                                                       // 3048
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                  // 3049
        }                                                                                                              // 3050
    }                                                                                                                  // 3051
                                                                                                                       // 3052
    function format (inputString) {                                                                                    // 3053
        if (!inputString) {                                                                                            // 3054
            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;       // 3055
        }                                                                                                              // 3056
        var output = formatMoment(this, inputString);                                                                  // 3057
        return this.localeData().postformat(output);                                                                   // 3058
    }                                                                                                                  // 3059
                                                                                                                       // 3060
    function from (time, withoutSuffix) {                                                                              // 3061
        if (this.isValid() &&                                                                                          // 3062
                ((isMoment(time) && time.isValid()) ||                                                                 // 3063
                 local__createLocal(time).isValid())) {                                                                // 3064
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);      // 3065
        } else {                                                                                                       // 3066
            return this.localeData().invalidDate();                                                                    // 3067
        }                                                                                                              // 3068
    }                                                                                                                  // 3069
                                                                                                                       // 3070
    function fromNow (withoutSuffix) {                                                                                 // 3071
        return this.from(local__createLocal(), withoutSuffix);                                                         // 3072
    }                                                                                                                  // 3073
                                                                                                                       // 3074
    function to (time, withoutSuffix) {                                                                                // 3075
        if (this.isValid() &&                                                                                          // 3076
                ((isMoment(time) && time.isValid()) ||                                                                 // 3077
                 local__createLocal(time).isValid())) {                                                                // 3078
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);      // 3079
        } else {                                                                                                       // 3080
            return this.localeData().invalidDate();                                                                    // 3081
        }                                                                                                              // 3082
    }                                                                                                                  // 3083
                                                                                                                       // 3084
    function toNow (withoutSuffix) {                                                                                   // 3085
        return this.to(local__createLocal(), withoutSuffix);                                                           // 3086
    }                                                                                                                  // 3087
                                                                                                                       // 3088
    // If passed a locale key, it will set the locale for this                                                         // 3089
    // instance.  Otherwise, it will return the locale configuration                                                   // 3090
    // variables for this instance.                                                                                    // 3091
    function locale (key) {                                                                                            // 3092
        var newLocaleData;                                                                                             // 3093
                                                                                                                       // 3094
        if (key === undefined) {                                                                                       // 3095
            return this._locale._abbr;                                                                                 // 3096
        } else {                                                                                                       // 3097
            newLocaleData = locale_locales__getLocale(key);                                                            // 3098
            if (newLocaleData != null) {                                                                               // 3099
                this._locale = newLocaleData;                                                                          // 3100
            }                                                                                                          // 3101
            return this;                                                                                               // 3102
        }                                                                                                              // 3103
    }                                                                                                                  // 3104
                                                                                                                       // 3105
    var lang = deprecate(                                                                                              // 3106
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {                                                                                               // 3108
            if (key === undefined) {                                                                                   // 3109
                return this.localeData();                                                                              // 3110
            } else {                                                                                                   // 3111
                return this.locale(key);                                                                               // 3112
            }                                                                                                          // 3113
        }                                                                                                              // 3114
    );                                                                                                                 // 3115
                                                                                                                       // 3116
    function localeData () {                                                                                           // 3117
        return this._locale;                                                                                           // 3118
    }                                                                                                                  // 3119
                                                                                                                       // 3120
    function startOf (units) {                                                                                         // 3121
        units = normalizeUnits(units);                                                                                 // 3122
        // the following switch intentionally omits break keywords                                                     // 3123
        // to utilize falling through the cases.                                                                       // 3124
        switch (units) {                                                                                               // 3125
            case 'year':                                                                                               // 3126
                this.month(0);                                                                                         // 3127
                /* falls through */                                                                                    // 3128
            case 'quarter':                                                                                            // 3129
            case 'month':                                                                                              // 3130
                this.date(1);                                                                                          // 3131
                /* falls through */                                                                                    // 3132
            case 'week':                                                                                               // 3133
            case 'isoWeek':                                                                                            // 3134
            case 'day':                                                                                                // 3135
            case 'date':                                                                                               // 3136
                this.hours(0);                                                                                         // 3137
                /* falls through */                                                                                    // 3138
            case 'hour':                                                                                               // 3139
                this.minutes(0);                                                                                       // 3140
                /* falls through */                                                                                    // 3141
            case 'minute':                                                                                             // 3142
                this.seconds(0);                                                                                       // 3143
                /* falls through */                                                                                    // 3144
            case 'second':                                                                                             // 3145
                this.milliseconds(0);                                                                                  // 3146
        }                                                                                                              // 3147
                                                                                                                       // 3148
        // weeks are a special case                                                                                    // 3149
        if (units === 'week') {                                                                                        // 3150
            this.weekday(0);                                                                                           // 3151
        }                                                                                                              // 3152
        if (units === 'isoWeek') {                                                                                     // 3153
            this.isoWeekday(1);                                                                                        // 3154
        }                                                                                                              // 3155
                                                                                                                       // 3156
        // quarters are also special                                                                                   // 3157
        if (units === 'quarter') {                                                                                     // 3158
            this.month(Math.floor(this.month() / 3) * 3);                                                              // 3159
        }                                                                                                              // 3160
                                                                                                                       // 3161
        return this;                                                                                                   // 3162
    }                                                                                                                  // 3163
                                                                                                                       // 3164
    function endOf (units) {                                                                                           // 3165
        units = normalizeUnits(units);                                                                                 // 3166
        if (units === undefined || units === 'millisecond') {                                                          // 3167
            return this;                                                                                               // 3168
        }                                                                                                              // 3169
                                                                                                                       // 3170
        // 'date' is an alias for 'day', so it should be considered as such.                                           // 3171
        if (units === 'date') {                                                                                        // 3172
            units = 'day';                                                                                             // 3173
        }                                                                                                              // 3174
                                                                                                                       // 3175
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                   // 3176
    }                                                                                                                  // 3177
                                                                                                                       // 3178
    function to_type__valueOf () {                                                                                     // 3179
        return this._d.valueOf() - ((this._offset || 0) * 60000);                                                      // 3180
    }                                                                                                                  // 3181
                                                                                                                       // 3182
    function unix () {                                                                                                 // 3183
        return Math.floor(this.valueOf() / 1000);                                                                      // 3184
    }                                                                                                                  // 3185
                                                                                                                       // 3186
    function toDate () {                                                                                               // 3187
        return new Date(this.valueOf());                                                                               // 3188
    }                                                                                                                  // 3189
                                                                                                                       // 3190
    function toArray () {                                                                                              // 3191
        var m = this;                                                                                                  // 3192
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                     // 3193
    }                                                                                                                  // 3194
                                                                                                                       // 3195
    function toObject () {                                                                                             // 3196
        var m = this;                                                                                                  // 3197
        return {                                                                                                       // 3198
            years: m.year(),                                                                                           // 3199
            months: m.month(),                                                                                         // 3200
            date: m.date(),                                                                                            // 3201
            hours: m.hours(),                                                                                          // 3202
            minutes: m.minutes(),                                                                                      // 3203
            seconds: m.seconds(),                                                                                      // 3204
            milliseconds: m.milliseconds()                                                                             // 3205
        };                                                                                                             // 3206
    }                                                                                                                  // 3207
                                                                                                                       // 3208
    function toJSON () {                                                                                               // 3209
        // new Date(NaN).toJSON() === null                                                                             // 3210
        return this.isValid() ? this.toISOString() : null;                                                             // 3211
    }                                                                                                                  // 3212
                                                                                                                       // 3213
    function moment_valid__isValid () {                                                                                // 3214
        return valid__isValid(this);                                                                                   // 3215
    }                                                                                                                  // 3216
                                                                                                                       // 3217
    function parsingFlags () {                                                                                         // 3218
        return extend({}, getParsingFlags(this));                                                                      // 3219
    }                                                                                                                  // 3220
                                                                                                                       // 3221
    function invalidAt () {                                                                                            // 3222
        return getParsingFlags(this).overflow;                                                                         // 3223
    }                                                                                                                  // 3224
                                                                                                                       // 3225
    function creationData() {                                                                                          // 3226
        return {                                                                                                       // 3227
            input: this._i,                                                                                            // 3228
            format: this._f,                                                                                           // 3229
            locale: this._locale,                                                                                      // 3230
            isUTC: this._isUTC,                                                                                        // 3231
            strict: this._strict                                                                                       // 3232
        };                                                                                                             // 3233
    }                                                                                                                  // 3234
                                                                                                                       // 3235
    // FORMATTING                                                                                                      // 3236
                                                                                                                       // 3237
    addFormatToken(0, ['gg', 2], 0, function () {                                                                      // 3238
        return this.weekYear() % 100;                                                                                  // 3239
    });                                                                                                                // 3240
                                                                                                                       // 3241
    addFormatToken(0, ['GG', 2], 0, function () {                                                                      // 3242
        return this.isoWeekYear() % 100;                                                                               // 3243
    });                                                                                                                // 3244
                                                                                                                       // 3245
    function addWeekYearFormatToken (token, getter) {                                                                  // 3246
        addFormatToken(0, [token, token.length], 0, getter);                                                           // 3247
    }                                                                                                                  // 3248
                                                                                                                       // 3249
    addWeekYearFormatToken('gggg',     'weekYear');                                                                    // 3250
    addWeekYearFormatToken('ggggg',    'weekYear');                                                                    // 3251
    addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                    // 3252
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                    // 3253
                                                                                                                       // 3254
    // ALIASES                                                                                                         // 3255
                                                                                                                       // 3256
    addUnitAlias('weekYear', 'gg');                                                                                    // 3257
    addUnitAlias('isoWeekYear', 'GG');                                                                                 // 3258
                                                                                                                       // 3259
    // PRIORITY                                                                                                        // 3260
                                                                                                                       // 3261
    addUnitPriority('weekYear', 1);                                                                                    // 3262
    addUnitPriority('isoWeekYear', 1);                                                                                 // 3263
                                                                                                                       // 3264
                                                                                                                       // 3265
    // PARSING                                                                                                         // 3266
                                                                                                                       // 3267
    addRegexToken('G',      matchSigned);                                                                              // 3268
    addRegexToken('g',      matchSigned);                                                                              // 3269
    addRegexToken('GG',     match1to2, match2);                                                                        // 3270
    addRegexToken('gg',     match1to2, match2);                                                                        // 3271
    addRegexToken('GGGG',   match1to4, match4);                                                                        // 3272
    addRegexToken('gggg',   match1to4, match4);                                                                        // 3273
    addRegexToken('GGGGG',  match1to6, match6);                                                                        // 3274
    addRegexToken('ggggg',  match1to6, match6);                                                                        // 3275
                                                                                                                       // 3276
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                      // 3277
        week[token.substr(0, 2)] = toInt(input);                                                                       // 3278
    });                                                                                                                // 3279
                                                                                                                       // 3280
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                            // 3281
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 3282
    });                                                                                                                // 3283
                                                                                                                       // 3284
    // MOMENTS                                                                                                         // 3285
                                                                                                                       // 3286
    function getSetWeekYear (input) {                                                                                  // 3287
        return getSetWeekYearHelper.call(this,                                                                         // 3288
                input,                                                                                                 // 3289
                this.week(),                                                                                           // 3290
                this.weekday(),                                                                                        // 3291
                this.localeData()._week.dow,                                                                           // 3292
                this.localeData()._week.doy);                                                                          // 3293
    }                                                                                                                  // 3294
                                                                                                                       // 3295
    function getSetISOWeekYear (input) {                                                                               // 3296
        return getSetWeekYearHelper.call(this,                                                                         // 3297
                input, this.isoWeek(), this.isoWeekday(), 1, 4);                                                       // 3298
    }                                                                                                                  // 3299
                                                                                                                       // 3300
    function getISOWeeksInYear () {                                                                                    // 3301
        return weeksInYear(this.year(), 1, 4);                                                                         // 3302
    }                                                                                                                  // 3303
                                                                                                                       // 3304
    function getWeeksInYear () {                                                                                       // 3305
        var weekInfo = this.localeData()._week;                                                                        // 3306
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                   // 3307
    }                                                                                                                  // 3308
                                                                                                                       // 3309
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {                                                    // 3310
        var weeksTarget;                                                                                               // 3311
        if (input == null) {                                                                                           // 3312
            return weekOfYear(this, dow, doy).year;                                                                    // 3313
        } else {                                                                                                       // 3314
            weeksTarget = weeksInYear(input, dow, doy);                                                                // 3315
            if (week > weeksTarget) {                                                                                  // 3316
                week = weeksTarget;                                                                                    // 3317
            }                                                                                                          // 3318
            return setWeekAll.call(this, input, week, weekday, dow, doy);                                              // 3319
        }                                                                                                              // 3320
    }                                                                                                                  // 3321
                                                                                                                       // 3322
    function setWeekAll(weekYear, week, weekday, dow, doy) {                                                           // 3323
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),                                     // 3324
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);                                      // 3325
                                                                                                                       // 3326
        this.year(date.getUTCFullYear());                                                                              // 3327
        this.month(date.getUTCMonth());                                                                                // 3328
        this.date(date.getUTCDate());                                                                                  // 3329
        return this;                                                                                                   // 3330
    }                                                                                                                  // 3331
                                                                                                                       // 3332
    // FORMATTING                                                                                                      // 3333
                                                                                                                       // 3334
    addFormatToken('Q', 0, 'Qo', 'quarter');                                                                           // 3335
                                                                                                                       // 3336
    // ALIASES                                                                                                         // 3337
                                                                                                                       // 3338
    addUnitAlias('quarter', 'Q');                                                                                      // 3339
                                                                                                                       // 3340
    // PRIORITY                                                                                                        // 3341
                                                                                                                       // 3342
    addUnitPriority('quarter', 7);                                                                                     // 3343
                                                                                                                       // 3344
    // PARSING                                                                                                         // 3345
                                                                                                                       // 3346
    addRegexToken('Q', match1);                                                                                        // 3347
    addParseToken('Q', function (input, array) {                                                                       // 3348
        array[MONTH] = (toInt(input) - 1) * 3;                                                                         // 3349
    });                                                                                                                // 3350
                                                                                                                       // 3351
    // MOMENTS                                                                                                         // 3352
                                                                                                                       // 3353
    function getSetQuarter (input) {                                                                                   // 3354
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);     // 3355
    }                                                                                                                  // 3356
                                                                                                                       // 3357
    // FORMATTING                                                                                                      // 3358
                                                                                                                       // 3359
    addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                      // 3360
                                                                                                                       // 3361
    // ALIASES                                                                                                         // 3362
                                                                                                                       // 3363
    addUnitAlias('date', 'D');                                                                                         // 3364
                                                                                                                       // 3365
    // PRIOROITY                                                                                                       // 3366
    addUnitPriority('date', 9);                                                                                        // 3367
                                                                                                                       // 3368
    // PARSING                                                                                                         // 3369
                                                                                                                       // 3370
    addRegexToken('D',  match1to2);                                                                                    // 3371
    addRegexToken('DD', match1to2, match2);                                                                            // 3372
    addRegexToken('Do', function (isStrict, locale) {                                                                  // 3373
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;                                          // 3374
    });                                                                                                                // 3375
                                                                                                                       // 3376
    addParseToken(['D', 'DD'], DATE);                                                                                  // 3377
    addParseToken('Do', function (input, array) {                                                                      // 3378
        array[DATE] = toInt(input.match(match1to2)[0], 10);                                                            // 3379
    });                                                                                                                // 3380
                                                                                                                       // 3381
    // MOMENTS                                                                                                         // 3382
                                                                                                                       // 3383
    var getSetDayOfMonth = makeGetSet('Date', true);                                                                   // 3384
                                                                                                                       // 3385
    // FORMATTING                                                                                                      // 3386
                                                                                                                       // 3387
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                           // 3388
                                                                                                                       // 3389
    // ALIASES                                                                                                         // 3390
                                                                                                                       // 3391
    addUnitAlias('dayOfYear', 'DDD');                                                                                  // 3392
                                                                                                                       // 3393
    // PRIORITY                                                                                                        // 3394
    addUnitPriority('dayOfYear', 4);                                                                                   // 3395
                                                                                                                       // 3396
    // PARSING                                                                                                         // 3397
                                                                                                                       // 3398
    addRegexToken('DDD',  match1to3);                                                                                  // 3399
    addRegexToken('DDDD', match3);                                                                                     // 3400
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                   // 3401
        config._dayOfYear = toInt(input);                                                                              // 3402
    });                                                                                                                // 3403
                                                                                                                       // 3404
    // HELPERS                                                                                                         // 3405
                                                                                                                       // 3406
    // MOMENTS                                                                                                         // 3407
                                                                                                                       // 3408
    function getSetDayOfYear (input) {                                                                                 // 3409
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;          // 3410
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                         // 3411
    }                                                                                                                  // 3412
                                                                                                                       // 3413
    // FORMATTING                                                                                                      // 3414
                                                                                                                       // 3415
    addFormatToken('m', ['mm', 2], 0, 'minute');                                                                       // 3416
                                                                                                                       // 3417
    // ALIASES                                                                                                         // 3418
                                                                                                                       // 3419
    addUnitAlias('minute', 'm');                                                                                       // 3420
                                                                                                                       // 3421
    // PRIORITY                                                                                                        // 3422
                                                                                                                       // 3423
    addUnitPriority('minute', 14);                                                                                     // 3424
                                                                                                                       // 3425
    // PARSING                                                                                                         // 3426
                                                                                                                       // 3427
    addRegexToken('m',  match1to2);                                                                                    // 3428
    addRegexToken('mm', match1to2, match2);                                                                            // 3429
    addParseToken(['m', 'mm'], MINUTE);                                                                                // 3430
                                                                                                                       // 3431
    // MOMENTS                                                                                                         // 3432
                                                                                                                       // 3433
    var getSetMinute = makeGetSet('Minutes', false);                                                                   // 3434
                                                                                                                       // 3435
    // FORMATTING                                                                                                      // 3436
                                                                                                                       // 3437
    addFormatToken('s', ['ss', 2], 0, 'second');                                                                       // 3438
                                                                                                                       // 3439
    // ALIASES                                                                                                         // 3440
                                                                                                                       // 3441
    addUnitAlias('second', 's');                                                                                       // 3442
                                                                                                                       // 3443
    // PRIORITY                                                                                                        // 3444
                                                                                                                       // 3445
    addUnitPriority('second', 15);                                                                                     // 3446
                                                                                                                       // 3447
    // PARSING                                                                                                         // 3448
                                                                                                                       // 3449
    addRegexToken('s',  match1to2);                                                                                    // 3450
    addRegexToken('ss', match1to2, match2);                                                                            // 3451
    addParseToken(['s', 'ss'], SECOND);                                                                                // 3452
                                                                                                                       // 3453
    // MOMENTS                                                                                                         // 3454
                                                                                                                       // 3455
    var getSetSecond = makeGetSet('Seconds', false);                                                                   // 3456
                                                                                                                       // 3457
    // FORMATTING                                                                                                      // 3458
                                                                                                                       // 3459
    addFormatToken('S', 0, 0, function () {                                                                            // 3460
        return ~~(this.millisecond() / 100);                                                                           // 3461
    });                                                                                                                // 3462
                                                                                                                       // 3463
    addFormatToken(0, ['SS', 2], 0, function () {                                                                      // 3464
        return ~~(this.millisecond() / 10);                                                                            // 3465
    });                                                                                                                // 3466
                                                                                                                       // 3467
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');                                                                   // 3468
    addFormatToken(0, ['SSSS', 4], 0, function () {                                                                    // 3469
        return this.millisecond() * 10;                                                                                // 3470
    });                                                                                                                // 3471
    addFormatToken(0, ['SSSSS', 5], 0, function () {                                                                   // 3472
        return this.millisecond() * 100;                                                                               // 3473
    });                                                                                                                // 3474
    addFormatToken(0, ['SSSSSS', 6], 0, function () {                                                                  // 3475
        return this.millisecond() * 1000;                                                                              // 3476
    });                                                                                                                // 3477
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {                                                                 // 3478
        return this.millisecond() * 10000;                                                                             // 3479
    });                                                                                                                // 3480
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {                                                                // 3481
        return this.millisecond() * 100000;                                                                            // 3482
    });                                                                                                                // 3483
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {                                                               // 3484
        return this.millisecond() * 1000000;                                                                           // 3485
    });                                                                                                                // 3486
                                                                                                                       // 3487
                                                                                                                       // 3488
    // ALIASES                                                                                                         // 3489
                                                                                                                       // 3490
    addUnitAlias('millisecond', 'ms');                                                                                 // 3491
                                                                                                                       // 3492
    // PRIORITY                                                                                                        // 3493
                                                                                                                       // 3494
    addUnitPriority('millisecond', 16);                                                                                // 3495
                                                                                                                       // 3496
    // PARSING                                                                                                         // 3497
                                                                                                                       // 3498
    addRegexToken('S',    match1to3, match1);                                                                          // 3499
    addRegexToken('SS',   match1to3, match2);                                                                          // 3500
    addRegexToken('SSS',  match1to3, match3);                                                                          // 3501
                                                                                                                       // 3502
    var token;                                                                                                         // 3503
    for (token = 'SSSS'; token.length <= 9; token += 'S') {                                                            // 3504
        addRegexToken(token, matchUnsigned);                                                                           // 3505
    }                                                                                                                  // 3506
                                                                                                                       // 3507
    function parseMs(input, array) {                                                                                   // 3508
        array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                             // 3509
    }                                                                                                                  // 3510
                                                                                                                       // 3511
    for (token = 'S'; token.length <= 9; token += 'S') {                                                               // 3512
        addParseToken(token, parseMs);                                                                                 // 3513
    }                                                                                                                  // 3514
    // MOMENTS                                                                                                         // 3515
                                                                                                                       // 3516
    var getSetMillisecond = makeGetSet('Milliseconds', false);                                                         // 3517
                                                                                                                       // 3518
    // FORMATTING                                                                                                      // 3519
                                                                                                                       // 3520
    addFormatToken('z',  0, 0, 'zoneAbbr');                                                                            // 3521
    addFormatToken('zz', 0, 0, 'zoneName');                                                                            // 3522
                                                                                                                       // 3523
    // MOMENTS                                                                                                         // 3524
                                                                                                                       // 3525
    function getZoneAbbr () {                                                                                          // 3526
        return this._isUTC ? 'UTC' : '';                                                                               // 3527
    }                                                                                                                  // 3528
                                                                                                                       // 3529
    function getZoneName () {                                                                                          // 3530
        return this._isUTC ? 'Coordinated Universal Time' : '';                                                        // 3531
    }                                                                                                                  // 3532
                                                                                                                       // 3533
    var momentPrototype__proto = Moment.prototype;                                                                     // 3534
                                                                                                                       // 3535
    momentPrototype__proto.add               = add_subtract__add;                                                      // 3536
    momentPrototype__proto.calendar          = moment_calendar__calendar;                                              // 3537
    momentPrototype__proto.clone             = clone;                                                                  // 3538
    momentPrototype__proto.diff              = diff;                                                                   // 3539
    momentPrototype__proto.endOf             = endOf;                                                                  // 3540
    momentPrototype__proto.format            = format;                                                                 // 3541
    momentPrototype__proto.from              = from;                                                                   // 3542
    momentPrototype__proto.fromNow           = fromNow;                                                                // 3543
    momentPrototype__proto.to                = to;                                                                     // 3544
    momentPrototype__proto.toNow             = toNow;                                                                  // 3545
    momentPrototype__proto.get               = stringGet;                                                              // 3546
    momentPrototype__proto.invalidAt         = invalidAt;                                                              // 3547
    momentPrototype__proto.isAfter           = isAfter;                                                                // 3548
    momentPrototype__proto.isBefore          = isBefore;                                                               // 3549
    momentPrototype__proto.isBetween         = isBetween;                                                              // 3550
    momentPrototype__proto.isSame            = isSame;                                                                 // 3551
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;                                                          // 3552
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;                                                         // 3553
    momentPrototype__proto.isValid           = moment_valid__isValid;                                                  // 3554
    momentPrototype__proto.lang              = lang;                                                                   // 3555
    momentPrototype__proto.locale            = locale;                                                                 // 3556
    momentPrototype__proto.localeData        = localeData;                                                             // 3557
    momentPrototype__proto.max               = prototypeMax;                                                           // 3558
    momentPrototype__proto.min               = prototypeMin;                                                           // 3559
    momentPrototype__proto.parsingFlags      = parsingFlags;                                                           // 3560
    momentPrototype__proto.set               = stringSet;                                                              // 3561
    momentPrototype__proto.startOf           = startOf;                                                                // 3562
    momentPrototype__proto.subtract          = add_subtract__subtract;                                                 // 3563
    momentPrototype__proto.toArray           = toArray;                                                                // 3564
    momentPrototype__proto.toObject          = toObject;                                                               // 3565
    momentPrototype__proto.toDate            = toDate;                                                                 // 3566
    momentPrototype__proto.toISOString       = moment_format__toISOString;                                             // 3567
    momentPrototype__proto.toJSON            = toJSON;                                                                 // 3568
    momentPrototype__proto.toString          = toString;                                                               // 3569
    momentPrototype__proto.unix              = unix;                                                                   // 3570
    momentPrototype__proto.valueOf           = to_type__valueOf;                                                       // 3571
    momentPrototype__proto.creationData      = creationData;                                                           // 3572
                                                                                                                       // 3573
    // Year                                                                                                            // 3574
    momentPrototype__proto.year       = getSetYear;                                                                    // 3575
    momentPrototype__proto.isLeapYear = getIsLeapYear;                                                                 // 3576
                                                                                                                       // 3577
    // Week Year                                                                                                       // 3578
    momentPrototype__proto.weekYear    = getSetWeekYear;                                                               // 3579
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;                                                            // 3580
                                                                                                                       // 3581
    // Quarter                                                                                                         // 3582
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;                                  // 3583
                                                                                                                       // 3584
    // Month                                                                                                           // 3585
    momentPrototype__proto.month       = getSetMonth;                                                                  // 3586
    momentPrototype__proto.daysInMonth = getDaysInMonth;                                                               // 3587
                                                                                                                       // 3588
    // Week                                                                                                            // 3589
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;                          // 3590
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;                       // 3591
    momentPrototype__proto.weeksInYear    = getWeeksInYear;                                                            // 3592
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;                                                         // 3593
                                                                                                                       // 3594
    // Day                                                                                                             // 3595
    momentPrototype__proto.date       = getSetDayOfMonth;                                                              // 3596
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;                     // 3597
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;                                                         // 3598
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;                                                            // 3599
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;                                                               // 3600
                                                                                                                       // 3601
    // Hour                                                                                                            // 3602
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;                                           // 3603
                                                                                                                       // 3604
    // Minute                                                                                                          // 3605
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;                                     // 3606
                                                                                                                       // 3607
    // Second                                                                                                          // 3608
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;                                     // 3609
                                                                                                                       // 3610
    // Millisecond                                                                                                     // 3611
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;                      // 3612
                                                                                                                       // 3613
    // Offset                                                                                                          // 3614
    momentPrototype__proto.utcOffset            = getSetOffset;                                                        // 3615
    momentPrototype__proto.utc                  = setOffsetToUTC;                                                      // 3616
    momentPrototype__proto.local                = setOffsetToLocal;                                                    // 3617
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;                                             // 3618
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                // 3619
    momentPrototype__proto.isDST                = isDaylightSavingTime;                                                // 3620
    momentPrototype__proto.isLocal              = isLocal;                                                             // 3621
    momentPrototype__proto.isUtcOffset          = isUtcOffset;                                                         // 3622
    momentPrototype__proto.isUtc                = isUtc;                                                               // 3623
    momentPrototype__proto.isUTC                = isUtc;                                                               // 3624
                                                                                                                       // 3625
    // Timezone                                                                                                        // 3626
    momentPrototype__proto.zoneAbbr = getZoneAbbr;                                                                     // 3627
    momentPrototype__proto.zoneName = getZoneName;                                                                     // 3628
                                                                                                                       // 3629
    // Deprecations                                                                                                    // 3630
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);    // 3631
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);        // 3632
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);           // 3633
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
                                                                                                                       // 3636
    var momentPrototype = momentPrototype__proto;                                                                      // 3637
                                                                                                                       // 3638
    function moment__createUnix (input) {                                                                              // 3639
        return local__createLocal(input * 1000);                                                                       // 3640
    }                                                                                                                  // 3641
                                                                                                                       // 3642
    function moment__createInZone () {                                                                                 // 3643
        return local__createLocal.apply(null, arguments).parseZone();                                                  // 3644
    }                                                                                                                  // 3645
                                                                                                                       // 3646
    function preParsePostFormat (string) {                                                                             // 3647
        return string;                                                                                                 // 3648
    }                                                                                                                  // 3649
                                                                                                                       // 3650
    var prototype__proto = Locale.prototype;                                                                           // 3651
                                                                                                                       // 3652
    prototype__proto.calendar        = locale_calendar__calendar;                                                      // 3653
    prototype__proto.longDateFormat  = longDateFormat;                                                                 // 3654
    prototype__proto.invalidDate     = invalidDate;                                                                    // 3655
    prototype__proto.ordinal         = ordinal;                                                                        // 3656
    prototype__proto.preparse        = preParsePostFormat;                                                             // 3657
    prototype__proto.postformat      = preParsePostFormat;                                                             // 3658
    prototype__proto.relativeTime    = relative__relativeTime;                                                         // 3659
    prototype__proto.pastFuture      = pastFuture;                                                                     // 3660
    prototype__proto.set             = locale_set__set;                                                                // 3661
                                                                                                                       // 3662
    // Month                                                                                                           // 3663
    prototype__proto.months            =        localeMonths;                                                          // 3664
    prototype__proto.monthsShort       =        localeMonthsShort;                                                     // 3665
    prototype__proto.monthsParse       =        localeMonthsParse;                                                     // 3666
    prototype__proto.monthsRegex       = monthsRegex;                                                                  // 3667
    prototype__proto.monthsShortRegex  = monthsShortRegex;                                                             // 3668
                                                                                                                       // 3669
    // Week                                                                                                            // 3670
    prototype__proto.week = localeWeek;                                                                                // 3671
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;                                                            // 3672
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;                                                            // 3673
                                                                                                                       // 3674
    // Day of Week                                                                                                     // 3675
    prototype__proto.weekdays       =        localeWeekdays;                                                           // 3676
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;                                                        // 3677
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;                                                      // 3678
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;                                                      // 3679
                                                                                                                       // 3680
    prototype__proto.weekdaysRegex       =        weekdaysRegex;                                                       // 3681
    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;                                                  // 3682
    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;                                                    // 3683
                                                                                                                       // 3684
    // Hours                                                                                                           // 3685
    prototype__proto.isPM = localeIsPM;                                                                                // 3686
    prototype__proto.meridiem = localeMeridiem;                                                                        // 3687
                                                                                                                       // 3688
    function lists__get (format, index, field, setter) {                                                               // 3689
        var locale = locale_locales__getLocale();                                                                      // 3690
        var utc = create_utc__createUTC().set(setter, index);                                                          // 3691
        return locale[field](utc, format);                                                                             // 3692
    }                                                                                                                  // 3693
                                                                                                                       // 3694
    function listMonthsImpl (format, index, field) {                                                                   // 3695
        if (typeof format === 'number') {                                                                              // 3696
            index = format;                                                                                            // 3697
            format = undefined;                                                                                        // 3698
        }                                                                                                              // 3699
                                                                                                                       // 3700
        format = format || '';                                                                                         // 3701
                                                                                                                       // 3702
        if (index != null) {                                                                                           // 3703
            return lists__get(format, index, field, 'month');                                                          // 3704
        }                                                                                                              // 3705
                                                                                                                       // 3706
        var i;                                                                                                         // 3707
        var out = [];                                                                                                  // 3708
        for (i = 0; i < 12; i++) {                                                                                     // 3709
            out[i] = lists__get(format, i, field, 'month');                                                            // 3710
        }                                                                                                              // 3711
        return out;                                                                                                    // 3712
    }                                                                                                                  // 3713
                                                                                                                       // 3714
    // ()                                                                                                              // 3715
    // (5)                                                                                                             // 3716
    // (fmt, 5)                                                                                                        // 3717
    // (fmt)                                                                                                           // 3718
    // (true)                                                                                                          // 3719
    // (true, 5)                                                                                                       // 3720
    // (true, fmt, 5)                                                                                                  // 3721
    // (true, fmt)                                                                                                     // 3722
    function listWeekdaysImpl (localeSorted, format, index, field) {                                                   // 3723
        if (typeof localeSorted === 'boolean') {                                                                       // 3724
            if (typeof format === 'number') {                                                                          // 3725
                index = format;                                                                                        // 3726
                format = undefined;                                                                                    // 3727
            }                                                                                                          // 3728
                                                                                                                       // 3729
            format = format || '';                                                                                     // 3730
        } else {                                                                                                       // 3731
            format = localeSorted;                                                                                     // 3732
            index = format;                                                                                            // 3733
            localeSorted = false;                                                                                      // 3734
                                                                                                                       // 3735
            if (typeof format === 'number') {                                                                          // 3736
                index = format;                                                                                        // 3737
                format = undefined;                                                                                    // 3738
            }                                                                                                          // 3739
                                                                                                                       // 3740
            format = format || '';                                                                                     // 3741
        }                                                                                                              // 3742
                                                                                                                       // 3743
        var locale = locale_locales__getLocale(),                                                                      // 3744
            shift = localeSorted ? locale._week.dow : 0;                                                               // 3745
                                                                                                                       // 3746
        if (index != null) {                                                                                           // 3747
            return lists__get(format, (index + shift) % 7, field, 'day');                                              // 3748
        }                                                                                                              // 3749
                                                                                                                       // 3750
        var i;                                                                                                         // 3751
        var out = [];                                                                                                  // 3752
        for (i = 0; i < 7; i++) {                                                                                      // 3753
            out[i] = lists__get(format, (i + shift) % 7, field, 'day');                                                // 3754
        }                                                                                                              // 3755
        return out;                                                                                                    // 3756
    }                                                                                                                  // 3757
                                                                                                                       // 3758
    function lists__listMonths (format, index) {                                                                       // 3759
        return listMonthsImpl(format, index, 'months');                                                                // 3760
    }                                                                                                                  // 3761
                                                                                                                       // 3762
    function lists__listMonthsShort (format, index) {                                                                  // 3763
        return listMonthsImpl(format, index, 'monthsShort');                                                           // 3764
    }                                                                                                                  // 3765
                                                                                                                       // 3766
    function lists__listWeekdays (localeSorted, format, index) {                                                       // 3767
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');                                              // 3768
    }                                                                                                                  // 3769
                                                                                                                       // 3770
    function lists__listWeekdaysShort (localeSorted, format, index) {                                                  // 3771
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');                                         // 3772
    }                                                                                                                  // 3773
                                                                                                                       // 3774
    function lists__listWeekdaysMin (localeSorted, format, index) {                                                    // 3775
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');                                           // 3776
    }                                                                                                                  // 3777
                                                                                                                       // 3778
    locale_locales__getSetGlobalLocale('en', {                                                                         // 3779
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                          // 3780
        ordinal : function (number) {                                                                                  // 3781
            var b = number % 10,                                                                                       // 3782
                output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                     // 3783
                (b === 1) ? 'st' :                                                                                     // 3784
                (b === 2) ? 'nd' :                                                                                     // 3785
                (b === 3) ? 'rd' : 'th';                                                                               // 3786
            return number + output;                                                                                    // 3787
        }                                                                                                              // 3788
    });                                                                                                                // 3789
                                                                                                                       // 3790
    // Side effect imports                                                                                             // 3791
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
                                                                                                                       // 3794
    var mathAbs = Math.abs;                                                                                            // 3795
                                                                                                                       // 3796
    function duration_abs__abs () {                                                                                    // 3797
        var data           = this._data;                                                                               // 3798
                                                                                                                       // 3799
        this._milliseconds = mathAbs(this._milliseconds);                                                              // 3800
        this._days         = mathAbs(this._days);                                                                      // 3801
        this._months       = mathAbs(this._months);                                                                    // 3802
                                                                                                                       // 3803
        data.milliseconds  = mathAbs(data.milliseconds);                                                               // 3804
        data.seconds       = mathAbs(data.seconds);                                                                    // 3805
        data.minutes       = mathAbs(data.minutes);                                                                    // 3806
        data.hours         = mathAbs(data.hours);                                                                      // 3807
        data.months        = mathAbs(data.months);                                                                     // 3808
        data.years         = mathAbs(data.years);                                                                      // 3809
                                                                                                                       // 3810
        return this;                                                                                                   // 3811
    }                                                                                                                  // 3812
                                                                                                                       // 3813
    function duration_add_subtract__addSubtract (duration, input, value, direction) {                                  // 3814
        var other = create__createDuration(input, value);                                                              // 3815
                                                                                                                       // 3816
        duration._milliseconds += direction * other._milliseconds;                                                     // 3817
        duration._days         += direction * other._days;                                                             // 3818
        duration._months       += direction * other._months;                                                           // 3819
                                                                                                                       // 3820
        return duration._bubble();                                                                                     // 3821
    }                                                                                                                  // 3822
                                                                                                                       // 3823
    // supports only 2.0-style add(1, 's') or add(duration)                                                            // 3824
    function duration_add_subtract__add (input, value) {                                                               // 3825
        return duration_add_subtract__addSubtract(this, input, value, 1);                                              // 3826
    }                                                                                                                  // 3827
                                                                                                                       // 3828
    // supports only 2.0-style subtract(1, 's') or subtract(duration)                                                  // 3829
    function duration_add_subtract__subtract (input, value) {                                                          // 3830
        return duration_add_subtract__addSubtract(this, input, value, -1);                                             // 3831
    }                                                                                                                  // 3832
                                                                                                                       // 3833
    function absCeil (number) {                                                                                        // 3834
        if (number < 0) {                                                                                              // 3835
            return Math.floor(number);                                                                                 // 3836
        } else {                                                                                                       // 3837
            return Math.ceil(number);                                                                                  // 3838
        }                                                                                                              // 3839
    }                                                                                                                  // 3840
                                                                                                                       // 3841
    function bubble () {                                                                                               // 3842
        var milliseconds = this._milliseconds;                                                                         // 3843
        var days         = this._days;                                                                                 // 3844
        var months       = this._months;                                                                               // 3845
        var data         = this._data;                                                                                 // 3846
        var seconds, minutes, hours, years, monthsFromDays;                                                            // 3847
                                                                                                                       // 3848
        // if we have a mix of positive and negative values, bubble down first                                         // 3849
        // check: https://github.com/moment/moment/issues/2166                                                         // 3850
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||                                                       // 3851
                (milliseconds <= 0 && days <= 0 && months <= 0))) {                                                    // 3852
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;                                              // 3853
            days = 0;                                                                                                  // 3854
            months = 0;                                                                                                // 3855
        }                                                                                                              // 3856
                                                                                                                       // 3857
        // The following code bubbles up values, see the tests for                                                     // 3858
        // examples of what that means.                                                                                // 3859
        data.milliseconds = milliseconds % 1000;                                                                       // 3860
                                                                                                                       // 3861
        seconds           = absFloor(milliseconds / 1000);                                                             // 3862
        data.seconds      = seconds % 60;                                                                              // 3863
                                                                                                                       // 3864
        minutes           = absFloor(seconds / 60);                                                                    // 3865
        data.minutes      = minutes % 60;                                                                              // 3866
                                                                                                                       // 3867
        hours             = absFloor(minutes / 60);                                                                    // 3868
        data.hours        = hours % 24;                                                                                // 3869
                                                                                                                       // 3870
        days += absFloor(hours / 24);                                                                                  // 3871
                                                                                                                       // 3872
        // convert days to months                                                                                      // 3873
        monthsFromDays = absFloor(daysToMonths(days));                                                                 // 3874
        months += monthsFromDays;                                                                                      // 3875
        days -= absCeil(monthsToDays(monthsFromDays));                                                                 // 3876
                                                                                                                       // 3877
        // 12 months -> 1 year                                                                                         // 3878
        years = absFloor(months / 12);                                                                                 // 3879
        months %= 12;                                                                                                  // 3880
                                                                                                                       // 3881
        data.days   = days;                                                                                            // 3882
        data.months = months;                                                                                          // 3883
        data.years  = years;                                                                                           // 3884
                                                                                                                       // 3885
        return this;                                                                                                   // 3886
    }                                                                                                                  // 3887
                                                                                                                       // 3888
    function daysToMonths (days) {                                                                                     // 3889
        // 400 years have 146097 days (taking into account leap year rules)                                            // 3890
        // 400 years have 12 months === 4800                                                                           // 3891
        return days * 4800 / 146097;                                                                                   // 3892
    }                                                                                                                  // 3893
                                                                                                                       // 3894
    function monthsToDays (months) {                                                                                   // 3895
        // the reverse of daysToMonths                                                                                 // 3896
        return months * 146097 / 4800;                                                                                 // 3897
    }                                                                                                                  // 3898
                                                                                                                       // 3899
    function as (units) {                                                                                              // 3900
        var days;                                                                                                      // 3901
        var months;                                                                                                    // 3902
        var milliseconds = this._milliseconds;                                                                         // 3903
                                                                                                                       // 3904
        units = normalizeUnits(units);                                                                                 // 3905
                                                                                                                       // 3906
        if (units === 'month' || units === 'year') {                                                                   // 3907
            days   = this._days   + milliseconds / 864e5;                                                              // 3908
            months = this._months + daysToMonths(days);                                                                // 3909
            return units === 'month' ? months : months / 12;                                                           // 3910
        } else {                                                                                                       // 3911
            // handle milliseconds separately because of floating point math errors (issue #1867)                      // 3912
            days = this._days + Math.round(monthsToDays(this._months));                                                // 3913
            switch (units) {                                                                                           // 3914
                case 'week'   : return days / 7     + milliseconds / 6048e5;                                           // 3915
                case 'day'    : return days         + milliseconds / 864e5;                                            // 3916
                case 'hour'   : return days * 24    + milliseconds / 36e5;                                             // 3917
                case 'minute' : return days * 1440  + milliseconds / 6e4;                                              // 3918
                case 'second' : return days * 86400 + milliseconds / 1000;                                             // 3919
                // Math.floor prevents floating point math errors here                                                 // 3920
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;                                    // 3921
                default: throw new Error('Unknown unit ' + units);                                                     // 3922
            }                                                                                                          // 3923
        }                                                                                                              // 3924
    }                                                                                                                  // 3925
                                                                                                                       // 3926
    // TODO: Use this.as('ms')?                                                                                        // 3927
    function duration_as__valueOf () {                                                                                 // 3928
        return (                                                                                                       // 3929
            this._milliseconds +                                                                                       // 3930
            this._days * 864e5 +                                                                                       // 3931
            (this._months % 12) * 2592e6 +                                                                             // 3932
            toInt(this._months / 12) * 31536e6                                                                         // 3933
        );                                                                                                             // 3934
    }                                                                                                                  // 3935
                                                                                                                       // 3936
    function makeAs (alias) {                                                                                          // 3937
        return function () {                                                                                           // 3938
            return this.as(alias);                                                                                     // 3939
        };                                                                                                             // 3940
    }                                                                                                                  // 3941
                                                                                                                       // 3942
    var asMilliseconds = makeAs('ms');                                                                                 // 3943
    var asSeconds      = makeAs('s');                                                                                  // 3944
    var asMinutes      = makeAs('m');                                                                                  // 3945
    var asHours        = makeAs('h');                                                                                  // 3946
    var asDays         = makeAs('d');                                                                                  // 3947
    var asWeeks        = makeAs('w');                                                                                  // 3948
    var asMonths       = makeAs('M');                                                                                  // 3949
    var asYears        = makeAs('y');                                                                                  // 3950
                                                                                                                       // 3951
    function duration_get__get (units) {                                                                               // 3952
        units = normalizeUnits(units);                                                                                 // 3953
        return this[units + 's']();                                                                                    // 3954
    }                                                                                                                  // 3955
                                                                                                                       // 3956
    function makeGetter(name) {                                                                                        // 3957
        return function () {                                                                                           // 3958
            return this._data[name];                                                                                   // 3959
        };                                                                                                             // 3960
    }                                                                                                                  // 3961
                                                                                                                       // 3962
    var milliseconds = makeGetter('milliseconds');                                                                     // 3963
    var seconds      = makeGetter('seconds');                                                                          // 3964
    var minutes      = makeGetter('minutes');                                                                          // 3965
    var hours        = makeGetter('hours');                                                                            // 3966
    var days         = makeGetter('days');                                                                             // 3967
    var months       = makeGetter('months');                                                                           // 3968
    var years        = makeGetter('years');                                                                            // 3969
                                                                                                                       // 3970
    function weeks () {                                                                                                // 3971
        return absFloor(this.days() / 7);                                                                              // 3972
    }                                                                                                                  // 3973
                                                                                                                       // 3974
    var round = Math.round;                                                                                            // 3975
    var thresholds = {                                                                                                 // 3976
        s: 45,  // seconds to minute                                                                                   // 3977
        m: 45,  // minutes to hour                                                                                     // 3978
        h: 22,  // hours to day                                                                                        // 3979
        d: 26,  // days to month                                                                                       // 3980
        M: 11   // months to year                                                                                      // 3981
    };                                                                                                                 // 3982
                                                                                                                       // 3983
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                          // 3984
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                      // 3985
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                    // 3986
    }                                                                                                                  // 3987
                                                                                                                       // 3988
    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {                                 // 3989
        var duration = create__createDuration(posNegDuration).abs();                                                   // 3990
        var seconds  = round(duration.as('s'));                                                                        // 3991
        var minutes  = round(duration.as('m'));                                                                        // 3992
        var hours    = round(duration.as('h'));                                                                        // 3993
        var days     = round(duration.as('d'));                                                                        // 3994
        var months   = round(duration.as('M'));                                                                        // 3995
        var years    = round(duration.as('y'));                                                                        // 3996
                                                                                                                       // 3997
        var a = seconds < thresholds.s && ['s', seconds]  ||                                                           // 3998
                minutes <= 1           && ['m']           ||                                                           // 3999
                minutes < thresholds.m && ['mm', minutes] ||                                                           // 4000
                hours   <= 1           && ['h']           ||                                                           // 4001
                hours   < thresholds.h && ['hh', hours]   ||                                                           // 4002
                days    <= 1           && ['d']           ||                                                           // 4003
                days    < thresholds.d && ['dd', days]    ||                                                           // 4004
                months  <= 1           && ['M']           ||                                                           // 4005
                months  < thresholds.M && ['MM', months]  ||                                                           // 4006
                years   <= 1           && ['y']           || ['yy', years];                                            // 4007
                                                                                                                       // 4008
        a[2] = withoutSuffix;                                                                                          // 4009
        a[3] = +posNegDuration > 0;                                                                                    // 4010
        a[4] = locale;                                                                                                 // 4011
        return substituteTimeAgo.apply(null, a);                                                                       // 4012
    }                                                                                                                  // 4013
                                                                                                                       // 4014
    // This function allows you to set the rounding function for relative time strings                                 // 4015
    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {                                        // 4016
        if (roundingFunction === undefined) {                                                                          // 4017
            return round;                                                                                              // 4018
        }                                                                                                              // 4019
        if (typeof(roundingFunction) === 'function') {                                                                 // 4020
            round = roundingFunction;                                                                                  // 4021
            return true;                                                                                               // 4022
        }                                                                                                              // 4023
        return false;                                                                                                  // 4024
    }                                                                                                                  // 4025
                                                                                                                       // 4026
    // This function allows you to set a threshold for relative time strings                                           // 4027
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {                                       // 4028
        if (thresholds[threshold] === undefined) {                                                                     // 4029
            return false;                                                                                              // 4030
        }                                                                                                              // 4031
        if (limit === undefined) {                                                                                     // 4032
            return thresholds[threshold];                                                                              // 4033
        }                                                                                                              // 4034
        thresholds[threshold] = limit;                                                                                 // 4035
        return true;                                                                                                   // 4036
    }                                                                                                                  // 4037
                                                                                                                       // 4038
    function humanize (withSuffix) {                                                                                   // 4039
        var locale = this.localeData();                                                                                // 4040
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);                                       // 4041
                                                                                                                       // 4042
        if (withSuffix) {                                                                                              // 4043
            output = locale.pastFuture(+this, output);                                                                 // 4044
        }                                                                                                              // 4045
                                                                                                                       // 4046
        return locale.postformat(output);                                                                              // 4047
    }                                                                                                                  // 4048
                                                                                                                       // 4049
    var iso_string__abs = Math.abs;                                                                                    // 4050
                                                                                                                       // 4051
    function iso_string__toISOString() {                                                                               // 4052
        // for ISO strings we do not use the normal bubbling rules:                                                    // 4053
        //  * milliseconds bubble up until they become hours                                                           // 4054
        //  * days do not bubble at all                                                                                // 4055
        //  * months bubble up until they become years                                                                 // 4056
        // This is because there is no context-free conversion between hours and days                                  // 4057
        // (think of clock changes)                                                                                    // 4058
        // and also not between days and months (28-31 days per month)                                                 // 4059
        var seconds = iso_string__abs(this._milliseconds) / 1000;                                                      // 4060
        var days         = iso_string__abs(this._days);                                                                // 4061
        var months       = iso_string__abs(this._months);                                                              // 4062
        var minutes, hours, years;                                                                                     // 4063
                                                                                                                       // 4064
        // 3600 seconds -> 60 minutes -> 1 hour                                                                        // 4065
        minutes           = absFloor(seconds / 60);                                                                    // 4066
        hours             = absFloor(minutes / 60);                                                                    // 4067
        seconds %= 60;                                                                                                 // 4068
        minutes %= 60;                                                                                                 // 4069
                                                                                                                       // 4070
        // 12 months -> 1 year                                                                                         // 4071
        years  = absFloor(months / 12);                                                                                // 4072
        months %= 12;                                                                                                  // 4073
                                                                                                                       // 4074
                                                                                                                       // 4075
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                // 4076
        var Y = years;                                                                                                 // 4077
        var M = months;                                                                                                // 4078
        var D = days;                                                                                                  // 4079
        var h = hours;                                                                                                 // 4080
        var m = minutes;                                                                                               // 4081
        var s = seconds;                                                                                               // 4082
        var total = this.asSeconds();                                                                                  // 4083
                                                                                                                       // 4084
        if (!total) {                                                                                                  // 4085
            // this is the same as C#'s (Noda) and python (isodate)...                                                 // 4086
            // but not other JS (goog.date)                                                                            // 4087
            return 'P0D';                                                                                              // 4088
        }                                                                                                              // 4089
                                                                                                                       // 4090
        return (total < 0 ? '-' : '') +                                                                                // 4091
            'P' +                                                                                                      // 4092
            (Y ? Y + 'Y' : '') +                                                                                       // 4093
            (M ? M + 'M' : '') +                                                                                       // 4094
            (D ? D + 'D' : '') +                                                                                       // 4095
            ((h || m || s) ? 'T' : '') +                                                                               // 4096
            (h ? h + 'H' : '') +                                                                                       // 4097
            (m ? m + 'M' : '') +                                                                                       // 4098
            (s ? s + 'S' : '');                                                                                        // 4099
    }                                                                                                                  // 4100
                                                                                                                       // 4101
    var duration_prototype__proto = Duration.prototype;                                                                // 4102
                                                                                                                       // 4103
    duration_prototype__proto.abs            = duration_abs__abs;                                                      // 4104
    duration_prototype__proto.add            = duration_add_subtract__add;                                             // 4105
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;                                        // 4106
    duration_prototype__proto.as             = as;                                                                     // 4107
    duration_prototype__proto.asMilliseconds = asMilliseconds;                                                         // 4108
    duration_prototype__proto.asSeconds      = asSeconds;                                                              // 4109
    duration_prototype__proto.asMinutes      = asMinutes;                                                              // 4110
    duration_prototype__proto.asHours        = asHours;                                                                // 4111
    duration_prototype__proto.asDays         = asDays;                                                                 // 4112
    duration_prototype__proto.asWeeks        = asWeeks;                                                                // 4113
    duration_prototype__proto.asMonths       = asMonths;                                                               // 4114
    duration_prototype__proto.asYears        = asYears;                                                                // 4115
    duration_prototype__proto.valueOf        = duration_as__valueOf;                                                   // 4116
    duration_prototype__proto._bubble        = bubble;                                                                 // 4117
    duration_prototype__proto.get            = duration_get__get;                                                      // 4118
    duration_prototype__proto.milliseconds   = milliseconds;                                                           // 4119
    duration_prototype__proto.seconds        = seconds;                                                                // 4120
    duration_prototype__proto.minutes        = minutes;                                                                // 4121
    duration_prototype__proto.hours          = hours;                                                                  // 4122
    duration_prototype__proto.days           = days;                                                                   // 4123
    duration_prototype__proto.weeks          = weeks;                                                                  // 4124
    duration_prototype__proto.months         = months;                                                                 // 4125
    duration_prototype__proto.years          = years;                                                                  // 4126
    duration_prototype__proto.humanize       = humanize;                                                               // 4127
    duration_prototype__proto.toISOString    = iso_string__toISOString;                                                // 4128
    duration_prototype__proto.toString       = iso_string__toISOString;                                                // 4129
    duration_prototype__proto.toJSON         = iso_string__toISOString;                                                // 4130
    duration_prototype__proto.locale         = locale;                                                                 // 4131
    duration_prototype__proto.localeData     = localeData;                                                             // 4132
                                                                                                                       // 4133
    // Deprecations                                                                                                    // 4134
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;                                                                             // 4136
                                                                                                                       // 4137
    // Side effect imports                                                                                             // 4138
                                                                                                                       // 4139
    // FORMATTING                                                                                                      // 4140
                                                                                                                       // 4141
    addFormatToken('X', 0, 0, 'unix');                                                                                 // 4142
    addFormatToken('x', 0, 0, 'valueOf');                                                                              // 4143
                                                                                                                       // 4144
    // PARSING                                                                                                         // 4145
                                                                                                                       // 4146
    addRegexToken('x', matchSigned);                                                                                   // 4147
    addRegexToken('X', matchTimestamp);                                                                                // 4148
    addParseToken('X', function (input, array, config) {                                                               // 4149
        config._d = new Date(parseFloat(input, 10) * 1000);                                                            // 4150
    });                                                                                                                // 4151
    addParseToken('x', function (input, array, config) {                                                               // 4152
        config._d = new Date(toInt(input));                                                                            // 4153
    });                                                                                                                // 4154
                                                                                                                       // 4155
    // Side effect imports                                                                                             // 4156
                                                                                                                       // 4157
                                                                                                                       // 4158
    utils_hooks__hooks.version = '2.14.4';                                                                             // 4159
                                                                                                                       // 4160
    setHookCallback(local__createLocal);                                                                               // 4161
                                                                                                                       // 4162
    utils_hooks__hooks.fn                    = momentPrototype;                                                        // 4163
    utils_hooks__hooks.min                   = min;                                                                    // 4164
    utils_hooks__hooks.max                   = max;                                                                    // 4165
    utils_hooks__hooks.now                   = now;                                                                    // 4166
    utils_hooks__hooks.utc                   = create_utc__createUTC;                                                  // 4167
    utils_hooks__hooks.unix                  = moment__createUnix;                                                     // 4168
    utils_hooks__hooks.months                = lists__listMonths;                                                      // 4169
    utils_hooks__hooks.isDate                = isDate;                                                                 // 4170
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;                                     // 4171
    utils_hooks__hooks.invalid               = valid__createInvalid;                                                   // 4172
    utils_hooks__hooks.duration              = create__createDuration;                                                 // 4173
    utils_hooks__hooks.isMoment              = isMoment;                                                               // 4174
    utils_hooks__hooks.weekdays              = lists__listWeekdays;                                                    // 4175
    utils_hooks__hooks.parseZone             = moment__createInZone;                                                   // 4176
    utils_hooks__hooks.localeData            = locale_locales__getLocale;                                              // 4177
    utils_hooks__hooks.isDuration            = isDuration;                                                             // 4178
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;                                                 // 4179
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;                                                 // 4180
    utils_hooks__hooks.defineLocale          = defineLocale;                                                           // 4181
    utils_hooks__hooks.updateLocale          = updateLocale;                                                           // 4182
    utils_hooks__hooks.locales               = locale_locales__listLocales;                                            // 4183
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;                                               // 4184
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;                                                         // 4185
    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;                           // 4186
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;                         // 4187
    utils_hooks__hooks.calendarFormat        = getCalendarFormat;                                                      // 4188
    utils_hooks__hooks.prototype             = momentPrototype;                                                        // 4189
                                                                                                                       // 4190
    var _moment = utils_hooks__hooks;                                                                                  // 4191
                                                                                                                       // 4192
    return _moment;                                                                                                    // 4193
                                                                                                                       // 4194
}));                                                                                                                   // 4195
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                  // 2
try {                                                                                                                  // 3
    delete this.moment;                                                                                                // 4
} catch (e) {                                                                                                          // 5
}                                                                                                                      // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['momentjs:moment'] = {}, {
  moment: moment
});

})();
