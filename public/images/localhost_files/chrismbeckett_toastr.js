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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/chrismbeckett_toastr/packages/chrismbeckett_toastr.js    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/chrismbeckett:toastr/lib/toastr.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Toastr                                                                                                              // 2
 * Copyright 2012-2015                                                                                                 // 3
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.                                                               // 4
 * All Rights Reserved.                                                                                                // 5
 * Use, reproduction, distribution, and modification of this code is subject to the terms and                          // 6
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php                      // 7
 *                                                                                                                     // 8
 * ARIA Support: Greta Krafsig                                                                                         // 9
 *                                                                                                                     // 10
 * Project: https://github.com/CodeSeven/toastr                                                                        // 11
 */                                                                                                                    // 12
/* global define */                                                                                                    // 13
; (function (define) {                                                                                                 // 14
    define(['jquery'], function ($) {                                                                                  // 15
        return (function () {                                                                                          // 16
            var $container;                                                                                            // 17
            var listener;                                                                                              // 18
            var toastId = 0;                                                                                           // 19
            var toastType = {                                                                                          // 20
                error: 'error',                                                                                        // 21
                info: 'info',                                                                                          // 22
                success: 'success',                                                                                    // 23
                warning: 'warning'                                                                                     // 24
            };                                                                                                         // 25
                                                                                                                       // 26
            var toastr = {                                                                                             // 27
                clear: clear,                                                                                          // 28
                remove: remove,                                                                                        // 29
                error: error,                                                                                          // 30
                getContainer: getContainer,                                                                            // 31
                info: info,                                                                                            // 32
                options: {},                                                                                           // 33
                subscribe: subscribe,                                                                                  // 34
                success: success,                                                                                      // 35
                version: '2.1.2',                                                                                      // 36
                warning: warning                                                                                       // 37
            };                                                                                                         // 38
                                                                                                                       // 39
            var previousToast;                                                                                         // 40
                                                                                                                       // 41
            return toastr;                                                                                             // 42
                                                                                                                       // 43
            ////////////////                                                                                           // 44
                                                                                                                       // 45
            function error(message, title, optionsOverride) {                                                          // 46
                return notify({                                                                                        // 47
                    type: toastType.error,                                                                             // 48
                    iconClass: getOptions().iconClasses.error,                                                         // 49
                    message: message,                                                                                  // 50
                    optionsOverride: optionsOverride,                                                                  // 51
                    title: title                                                                                       // 52
                });                                                                                                    // 53
            }                                                                                                          // 54
                                                                                                                       // 55
            function getContainer(options, create) {                                                                   // 56
                if (!options) { options = getOptions(); }                                                              // 57
                $container = $('#' + options.containerId);                                                             // 58
                if ($container.length) {                                                                               // 59
                    return $container;                                                                                 // 60
                }                                                                                                      // 61
                if (create) {                                                                                          // 62
                    $container = createContainer(options);                                                             // 63
                }                                                                                                      // 64
                return $container;                                                                                     // 65
            }                                                                                                          // 66
                                                                                                                       // 67
            function info(message, title, optionsOverride) {                                                           // 68
                return notify({                                                                                        // 69
                    type: toastType.info,                                                                              // 70
                    iconClass: getOptions().iconClasses.info,                                                          // 71
                    message: message,                                                                                  // 72
                    optionsOverride: optionsOverride,                                                                  // 73
                    title: title                                                                                       // 74
                });                                                                                                    // 75
            }                                                                                                          // 76
                                                                                                                       // 77
            function subscribe(callback) {                                                                             // 78
                listener = callback;                                                                                   // 79
            }                                                                                                          // 80
                                                                                                                       // 81
            function success(message, title, optionsOverride) {                                                        // 82
                return notify({                                                                                        // 83
                    type: toastType.success,                                                                           // 84
                    iconClass: getOptions().iconClasses.success,                                                       // 85
                    message: message,                                                                                  // 86
                    optionsOverride: optionsOverride,                                                                  // 87
                    title: title                                                                                       // 88
                });                                                                                                    // 89
            }                                                                                                          // 90
                                                                                                                       // 91
            function warning(message, title, optionsOverride) {                                                        // 92
                return notify({                                                                                        // 93
                    type: toastType.warning,                                                                           // 94
                    iconClass: getOptions().iconClasses.warning,                                                       // 95
                    message: message,                                                                                  // 96
                    optionsOverride: optionsOverride,                                                                  // 97
                    title: title                                                                                       // 98
                });                                                                                                    // 99
            }                                                                                                          // 100
                                                                                                                       // 101
            function clear($toastElement, clearOptions) {                                                              // 102
                var options = getOptions();                                                                            // 103
                if (!$container) { getContainer(options); }                                                            // 104
                if (!clearToast($toastElement, options, clearOptions)) {                                               // 105
                    clearContainer(options);                                                                           // 106
                }                                                                                                      // 107
            }                                                                                                          // 108
                                                                                                                       // 109
            function remove($toastElement) {                                                                           // 110
                var options = getOptions();                                                                            // 111
                if (!$container) { getContainer(options); }                                                            // 112
                if ($toastElement && $(':focus', $toastElement).length === 0) {                                        // 113
                    removeToast($toastElement);                                                                        // 114
                    return;                                                                                            // 115
                }                                                                                                      // 116
                if ($container.children().length) {                                                                    // 117
                    $container.remove();                                                                               // 118
                }                                                                                                      // 119
            }                                                                                                          // 120
                                                                                                                       // 121
            // internal functions                                                                                      // 122
                                                                                                                       // 123
            function clearContainer (options) {                                                                        // 124
                var toastsToClear = $container.children();                                                             // 125
                for (var i = toastsToClear.length - 1; i >= 0; i--) {                                                  // 126
                    clearToast($(toastsToClear[i]), options);                                                          // 127
                }                                                                                                      // 128
            }                                                                                                          // 129
                                                                                                                       // 130
            function clearToast ($toastElement, options, clearOptions) {                                               // 131
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;                           // 132
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {                             // 133
                    $toastElement[options.hideMethod]({                                                                // 134
                        duration: options.hideDuration,                                                                // 135
                        easing: options.hideEasing,                                                                    // 136
                        complete: function () { removeToast($toastElement); }                                          // 137
                    });                                                                                                // 138
                    return true;                                                                                       // 139
                }                                                                                                      // 140
                return false;                                                                                          // 141
            }                                                                                                          // 142
                                                                                                                       // 143
            function createContainer(options) {                                                                        // 144
                $container = $('<div/>')                                                                               // 145
                    .attr('id', options.containerId)                                                                   // 146
                    .addClass(options.positionClass)                                                                   // 147
                    .attr('aria-live', 'polite')                                                                       // 148
                    .attr('role', 'alert');                                                                            // 149
                                                                                                                       // 150
                $container.appendTo($(options.target));                                                                // 151
                return $container;                                                                                     // 152
            }                                                                                                          // 153
                                                                                                                       // 154
            function getDefaults() {                                                                                   // 155
                return {                                                                                               // 156
                    tapToDismiss: true,                                                                                // 157
                    toastClass: 'toast',                                                                               // 158
                    containerId: 'toast-container',                                                                    // 159
                    debug: false,                                                                                      // 160
                                                                                                                       // 161
                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery                          // 162
                    showDuration: 300,                                                                                 // 163
                    showEasing: 'swing', //swing and linear are built into jQuery                                      // 164
                    onShown: undefined,                                                                                // 165
                    hideMethod: 'fadeOut',                                                                             // 166
                    hideDuration: 1000,                                                                                // 167
                    hideEasing: 'swing',                                                                               // 168
                    onHidden: undefined,                                                                               // 169
                    closeMethod: false,                                                                                // 170
                    closeDuration: false,                                                                              // 171
                    closeEasing: false,                                                                                // 172
                                                                                                                       // 173
                    extendedTimeOut: 1000,                                                                             // 174
                    iconClasses: {                                                                                     // 175
                        error: 'toast-error',                                                                          // 176
                        info: 'toast-info',                                                                            // 177
                        success: 'toast-success',                                                                      // 178
                        warning: 'toast-warning'                                                                       // 179
                    },                                                                                                 // 180
                    iconClass: 'toast-info',                                                                           // 181
                    positionClass: 'toast-top-right',                                                                  // 182
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky                           // 183
                    titleClass: 'toast-title',                                                                         // 184
                    messageClass: 'toast-message',                                                                     // 185
                    escapeHtml: false,                                                                                 // 186
                    target: 'body',                                                                                    // 187
                    closeHtml: '<button type="button">&times;</button>',                                               // 188
                    newestOnTop: true,                                                                                 // 189
                    preventDuplicates: false,                                                                          // 190
                    progressBar: false                                                                                 // 191
                };                                                                                                     // 192
            }                                                                                                          // 193
                                                                                                                       // 194
            function publish(args) {                                                                                   // 195
                if (!listener) { return; }                                                                             // 196
                listener(args);                                                                                        // 197
            }                                                                                                          // 198
                                                                                                                       // 199
            function notify(map) {                                                                                     // 200
                var options = getOptions();                                                                            // 201
                var iconClass = map.iconClass || options.iconClass;                                                    // 202
                                                                                                                       // 203
                if (typeof (map.optionsOverride) !== 'undefined') {                                                    // 204
                    options = $.extend(options, map.optionsOverride);                                                  // 205
                    iconClass = map.optionsOverride.iconClass || iconClass;                                            // 206
                }                                                                                                      // 207
                                                                                                                       // 208
                if (shouldExit(options, map)) { return; }                                                              // 209
                                                                                                                       // 210
                toastId++;                                                                                             // 211
                                                                                                                       // 212
                $container = getContainer(options, true);                                                              // 213
                                                                                                                       // 214
                var intervalId = null;                                                                                 // 215
                var $toastElement = $('<div/>');                                                                       // 216
                var $titleElement = $('<div/>');                                                                       // 217
                var $messageElement = $('<div/>');                                                                     // 218
                var $progressElement = $('<div/>');                                                                    // 219
                var $closeElement = $(options.closeHtml);                                                              // 220
                var progressBar = {                                                                                    // 221
                    intervalId: null,                                                                                  // 222
                    hideEta: null,                                                                                     // 223
                    maxHideTime: null                                                                                  // 224
                };                                                                                                     // 225
                var response = {                                                                                       // 226
                    toastId: toastId,                                                                                  // 227
                    state: 'visible',                                                                                  // 228
                    startTime: new Date(),                                                                             // 229
                    options: options,                                                                                  // 230
                    map: map                                                                                           // 231
                };                                                                                                     // 232
                                                                                                                       // 233
                personalizeToast();                                                                                    // 234
                                                                                                                       // 235
                displayToast();                                                                                        // 236
                                                                                                                       // 237
                handleEvents();                                                                                        // 238
                                                                                                                       // 239
                publish(response);                                                                                     // 240
                                                                                                                       // 241
                if (options.debug && console) {                                                                        // 242
                    console.log(response);                                                                             // 243
                }                                                                                                      // 244
                                                                                                                       // 245
                return $toastElement;                                                                                  // 246
                                                                                                                       // 247
                function escapeHtml(source) {                                                                          // 248
                    if (source == null)                                                                                // 249
                        source = "";                                                                                   // 250
                                                                                                                       // 251
                    return new String(source)                                                                          // 252
                        .replace(/&/g, '&amp;')                                                                        // 253
                        .replace(/"/g, '&quot;')                                                                       // 254
                        .replace(/'/g, '&#39;')                                                                        // 255
                        .replace(/</g, '&lt;')                                                                         // 256
                        .replace(/>/g, '&gt;');                                                                        // 257
                }                                                                                                      // 258
                                                                                                                       // 259
                function personalizeToast() {                                                                          // 260
                    setIcon();                                                                                         // 261
                    setTitle();                                                                                        // 262
                    setMessage();                                                                                      // 263
                    setCloseButton();                                                                                  // 264
                    setProgressBar();                                                                                  // 265
                    setSequence();                                                                                     // 266
                }                                                                                                      // 267
                                                                                                                       // 268
                function handleEvents() {                                                                              // 269
                    $toastElement.hover(stickAround, delayedHideToast);                                                // 270
                    if (!options.onclick && options.tapToDismiss) {                                                    // 271
                        $toastElement.click(hideToast);                                                                // 272
                    }                                                                                                  // 273
                                                                                                                       // 274
                    if (options.closeButton && $closeElement) {                                                        // 275
                        $closeElement.click(function (event) {                                                         // 276
                            if (event.stopPropagation) {                                                               // 277
                                event.stopPropagation();                                                               // 278
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {              // 279
                                event.cancelBubble = true;                                                             // 280
                            }                                                                                          // 281
                            hideToast(true);                                                                           // 282
                        });                                                                                            // 283
                    }                                                                                                  // 284
                                                                                                                       // 285
                    if (options.onclick) {                                                                             // 286
                        $toastElement.click(function (event) {                                                         // 287
                            options.onclick(event);                                                                    // 288
                            hideToast();                                                                               // 289
                        });                                                                                            // 290
                    }                                                                                                  // 291
                }                                                                                                      // 292
                                                                                                                       // 293
                function displayToast() {                                                                              // 294
                    $toastElement.hide();                                                                              // 295
                                                                                                                       // 296
                    $toastElement[options.showMethod](                                                                 // 297
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}        // 298
                    );                                                                                                 // 299
                                                                                                                       // 300
                    if (options.timeOut > 0) {                                                                         // 301
                        intervalId = setTimeout(hideToast, options.timeOut);                                           // 302
                        progressBar.maxHideTime = parseFloat(options.timeOut);                                         // 303
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;                          // 304
                        if (options.progressBar) {                                                                     // 305
                            progressBar.intervalId = setInterval(updateProgress, 10);                                  // 306
                        }                                                                                              // 307
                    }                                                                                                  // 308
                }                                                                                                      // 309
                                                                                                                       // 310
                function setIcon() {                                                                                   // 311
                    if (map.iconClass) {                                                                               // 312
                        $toastElement.addClass(options.toastClass).addClass(iconClass);                                // 313
                    }                                                                                                  // 314
                }                                                                                                      // 315
                                                                                                                       // 316
                function setSequence() {                                                                               // 317
                    if (options.newestOnTop) {                                                                         // 318
                        $container.prepend($toastElement);                                                             // 319
                    } else {                                                                                           // 320
                        $container.append($toastElement);                                                              // 321
                    }                                                                                                  // 322
                }                                                                                                      // 323
                                                                                                                       // 324
                function setTitle() {                                                                                  // 325
                    if (map.title) {                                                                                   // 326
                        $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                        $toastElement.append($titleElement);                                                           // 328
                    }                                                                                                  // 329
                }                                                                                                      // 330
                                                                                                                       // 331
                function setMessage() {                                                                                // 332
                    if (map.message) {                                                                                 // 333
                        $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                        $toastElement.append($messageElement);                                                         // 335
                    }                                                                                                  // 336
                }                                                                                                      // 337
                                                                                                                       // 338
                function setCloseButton() {                                                                            // 339
                    if (options.closeButton) {                                                                         // 340
                        $closeElement.addClass('toast-close-button').attr('role', 'button');                           // 341
                        $toastElement.prepend($closeElement);                                                          // 342
                    }                                                                                                  // 343
                }                                                                                                      // 344
                                                                                                                       // 345
                function setProgressBar() {                                                                            // 346
                    if (options.progressBar) {                                                                         // 347
                        $progressElement.addClass('toast-progress');                                                   // 348
                        $toastElement.prepend($progressElement);                                                       // 349
                    }                                                                                                  // 350
                }                                                                                                      // 351
                                                                                                                       // 352
                function shouldExit(options, map) {                                                                    // 353
                    if (options.preventDuplicates) {                                                                   // 354
                        if (map.message === previousToast) {                                                           // 355
                            return true;                                                                               // 356
                        } else {                                                                                       // 357
                            previousToast = map.message;                                                               // 358
                        }                                                                                              // 359
                    }                                                                                                  // 360
                    return false;                                                                                      // 361
                }                                                                                                      // 362
                                                                                                                       // 363
                function hideToast(override) {                                                                         // 364
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod; // 365
                    var duration = override && options.closeDuration !== false ?                                       // 366
                        options.closeDuration : options.hideDuration;                                                  // 367
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing; // 368
                    if ($(':focus', $toastElement).length && !override) {                                              // 369
                        return;                                                                                        // 370
                    }                                                                                                  // 371
                    clearTimeout(progressBar.intervalId);                                                              // 372
                    return $toastElement[method]({                                                                     // 373
                        duration: duration,                                                                            // 374
                        easing: easing,                                                                                // 375
                        complete: function () {                                                                        // 376
                            removeToast($toastElement);                                                                // 377
                            if (options.onHidden && response.state !== 'hidden') {                                     // 378
                                options.onHidden();                                                                    // 379
                            }                                                                                          // 380
                            response.state = 'hidden';                                                                 // 381
                            response.endTime = new Date();                                                             // 382
                            publish(response);                                                                         // 383
                        }                                                                                              // 384
                    });                                                                                                // 385
                }                                                                                                      // 386
                                                                                                                       // 387
                function delayedHideToast() {                                                                          // 388
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {                                          // 389
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);                                   // 390
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);                                 // 391
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;                          // 392
                    }                                                                                                  // 393
                }                                                                                                      // 394
                                                                                                                       // 395
                function stickAround() {                                                                               // 396
                    clearTimeout(intervalId);                                                                          // 397
                    progressBar.hideEta = 0;                                                                           // 398
                    $toastElement.stop(true, true)[options.showMethod](                                                // 399
                        {duration: options.showDuration, easing: options.showEasing}                                   // 400
                    );                                                                                                 // 401
                }                                                                                                      // 402
                                                                                                                       // 403
                function updateProgress() {                                                                            // 404
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100; // 405
                    $progressElement.width(percentage + '%');                                                          // 406
                }                                                                                                      // 407
            }                                                                                                          // 408
                                                                                                                       // 409
            function getOptions() {                                                                                    // 410
                return $.extend({}, getDefaults(), toastr.options);                                                    // 411
            }                                                                                                          // 412
                                                                                                                       // 413
            function removeToast($toastElement) {                                                                      // 414
                if (!$container) { $container = getContainer(); }                                                      // 415
                if ($toastElement.is(':visible')) {                                                                    // 416
                    return;                                                                                            // 417
                }                                                                                                      // 418
                $toastElement.remove();                                                                                // 419
                $toastElement = null;                                                                                  // 420
                if ($container.children().length === 0) {                                                              // 421
                    $container.remove();                                                                               // 422
                    previousToast = undefined;                                                                         // 423
                }                                                                                                      // 424
            }                                                                                                          // 425
                                                                                                                       // 426
        })();                                                                                                          // 427
    });                                                                                                                // 428
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {                                     // 429
    if (typeof module !== 'undefined' && module.exports) { //Node                                                      // 430
        module.exports = factory(require('jquery'));                                                                   // 431
    } else {                                                                                                           // 432
        window.toastr = factory(window.jQuery);                                                                        // 433
    }                                                                                                                  // 434
}));                                                                                                                   // 435
                                                                                                                       // 436
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 446
}).call(this);                                                       // 447
                                                                     // 448
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['chrismbeckett:toastr'] = {};

})();
