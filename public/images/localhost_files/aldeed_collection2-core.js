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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var EJSON = Package.ejson.EJSON;
var EventEmitter = Package['raix:eventemitter'].EventEmitter;

/* Package-scope variables */
var Collection2;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aldeed_collection2-core/lib/collection2.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Exported only for listening to events                                                                             // 1
Collection2 = new EventEmitter();                                                                                    // 2
                                                                                                                     // 3
// backwards compatibility                                                                                           // 4
if (typeof Mongo === "undefined") {                                                                                  // 5
  Mongo = {};                                                                                                        // 6
  Mongo.Collection = Meteor.Collection;                                                                              // 7
}                                                                                                                    // 8
                                                                                                                     // 9
/**                                                                                                                  // 10
 * Mongo.Collection.prototype.attachSchema                                                                           // 11
 * @param {SimpleSchema|Object} ss - SimpleSchema instance or a schema definition object                             // 12
 *    from which to create a new SimpleSchema instance                                                               // 13
 * @param {Object} [options]                                                                                         // 14
 * @param {Boolean} [options.transform=false] Set to `true` if your document must be passed                          // 15
 *    through the collection's transform to properly validate.                                                       // 16
 * @param {Boolean} [options.replace=false] Set to `true` to replace any existing schema instead of combining        // 17
 * @return {undefined}                                                                                               // 18
 *                                                                                                                   // 19
 * Use this method to attach a schema to a collection created by another package,                                    // 20
 * such as Meteor.users. It is most likely unsafe to call this method more than                                      // 21
 * once for a single collection, or to call this for a collection that had a                                         // 22
 * schema object passed to its constructor.                                                                          // 23
 */                                                                                                                  // 24
Mongo.Collection.prototype.attachSchema = function c2AttachSchema(ss, options) {                                     // 25
  var self = this;                                                                                                   // 26
  options = options || {};                                                                                           // 27
                                                                                                                     // 28
  // Allow passing just the schema object                                                                            // 29
  if (!(ss instanceof SimpleSchema)) {                                                                               // 30
    ss = new SimpleSchema(ss);                                                                                       // 31
  }                                                                                                                  // 32
                                                                                                                     // 33
  self._c2 = self._c2 || {};                                                                                         // 34
                                                                                                                     // 35
  // If we've already attached one schema, we combine both into a new schema unless options.replace is `true`        // 36
  if (self._c2._simpleSchema && options.replace !== true) {                                                          // 37
    ss = new SimpleSchema([self._c2._simpleSchema, ss]);                                                             // 38
  }                                                                                                                  // 39
                                                                                                                     // 40
  var selector = options.selector;                                                                                   // 41
                                                                                                                     // 42
  function attachTo(obj) {                                                                                           // 43
    if (typeof selector === "object") {                                                                              // 44
      // Index of existing schema with identical selector                                                            // 45
      var schemaIndex = -1;                                                                                          // 46
                                                                                                                     // 47
      // we need an array to hold multiple schemas                                                                   // 48
      obj._c2._simpleSchemas = obj._c2._simpleSchemas || [];                                                         // 49
                                                                                                                     // 50
      // Loop through existing schemas with selectors                                                                // 51
      obj._c2._simpleSchemas.forEach(function (schema, index) {                                                      // 52
        // if we find a schema with an identical selector, save it's index                                           // 53
        if(_.isEqual(schema.selector, selector)) {                                                                   // 54
          schemaIndex = index;                                                                                       // 55
        }                                                                                                            // 56
      });                                                                                                            // 57
      if (schemaIndex === -1) {                                                                                      // 58
        // We didn't find the schema in our array - push it into the array                                           // 59
        obj._c2._simpleSchemas.push({                                                                                // 60
          schema: new SimpleSchema(ss),                                                                              // 61
          selector: selector,                                                                                        // 62
        });                                                                                                          // 63
      } else {                                                                                                       // 64
        // We found a schema with an identical selector in our array,                                                // 65
        if (options.replace !== true) {                                                                              // 66
          // Merge with existing schema unless options.replace is `true`                                             // 67
          obj._c2._simpleSchemas[schemaIndex].schema = new SimpleSchema([obj._c2._simpleSchemas[schemaIndex].schema, ss]);
        } else {                                                                                                     // 69
          // If options.repalce is `true` replace existing schema with new schema                                    // 70
          obj._c2._simpleSchemas[schemaIndex].schema = ss;                                                           // 71
        }                                                                                                            // 72
                                                                                                                     // 73
      }                                                                                                              // 74
                                                                                                                     // 75
      // Remove existing schemas without selector                                                                    // 76
      delete obj._c2._simpleSchema;                                                                                  // 77
    } else {                                                                                                         // 78
      // Track the schema in the collection                                                                          // 79
      obj._c2._simpleSchema = ss;                                                                                    // 80
                                                                                                                     // 81
      // Remove existing schemas with selector                                                                       // 82
      delete obj._c2._simpleSchemas;                                                                                 // 83
    }                                                                                                                // 84
  }                                                                                                                  // 85
                                                                                                                     // 86
  attachTo(self);                                                                                                    // 87
  // Attach the schema to the underlying LocalCollection, too                                                        // 88
  if (self._collection instanceof LocalCollection) {                                                                 // 89
    self._collection._c2 = self._collection._c2 || {};                                                               // 90
    attachTo(self._collection);                                                                                      // 91
  }                                                                                                                  // 92
                                                                                                                     // 93
  defineDeny(self, options);                                                                                         // 94
  keepInsecure(self);                                                                                                // 95
                                                                                                                     // 96
  Collection2.emit('schema.attached', self, ss, options);                                                            // 97
};                                                                                                                   // 98
                                                                                                                     // 99
_.each([Mongo.Collection, LocalCollection], function (obj) {                                                         // 100
  /**                                                                                                                // 101
   * simpleSchema                                                                                                    // 102
   * @description function detect the correct schema by given params. If it                                          // 103
   * detect multi-schema presence in `self`, then it made an attempt to find a                                       // 104
   * `selector` in args                                                                                              // 105
   * @param {Object} doc - It could be <update> on update/upsert or document                                         // 106
   * itself on insert/remove                                                                                         // 107
   * @param {Object} [options] - It could be <update> on update/upsert etc                                           // 108
   * @param {Object} [query] - it could be <query> on update/upsert                                                  // 109
   * @return {Object} Schema                                                                                         // 110
   */                                                                                                                // 111
  obj.prototype.simpleSchema = function (doc, options, query) {                                                      // 112
    if (!this._c2) return null;                                                                                      // 113
    if (this._c2._simpleSchema) return this._c2._simpleSchema;                                                       // 114
                                                                                                                     // 115
    var schemas = this._c2._simpleSchemas;                                                                           // 116
    if (schemas && schemas.length > 0) {                                                                             // 117
      if (!doc) throw new Error('collection.simpleSchema() requires doc argument when there are multiple schemas');  // 118
                                                                                                                     // 119
      var schema, selector, target;                                                                                  // 120
      for (var i = 0; i < schemas.length; i++) {                                                                     // 121
        schema = schemas[i];                                                                                         // 122
        selector = Object.keys(schema.selector)[0];                                                                  // 123
                                                                                                                     // 124
        // We will set this to undefined because in theory you might want to select                                  // 125
        // on a null value.                                                                                          // 126
        target = undefined;                                                                                          // 127
                                                                                                                     // 128
        // here we are looking for selector in different places                                                      // 129
        // $set should have more priority here                                                                       // 130
        if (doc.$set && typeof doc.$set[selector] !== 'undefined') {                                                 // 131
          target = doc.$set[selector];                                                                               // 132
        } else if (typeof doc[selector] !== 'undefined') {                                                           // 133
          target = doc[selector];                                                                                    // 134
        } else if (options && options.selector) {                                                                    // 135
          target = options.selector[selector];                                                                       // 136
        } else if (query && query[selector]) { // on upsert/update operations                                        // 137
          target = query[selector];                                                                                  // 138
        }                                                                                                            // 139
                                                                                                                     // 140
        // we need to compare given selector with doc property or option to                                          // 141
        // find right schema                                                                                         // 142
        if (target !== undefined && target === schema.selector[selector]) {                                          // 143
          return schema.schema;                                                                                      // 144
        }                                                                                                            // 145
      }                                                                                                              // 146
    }                                                                                                                // 147
                                                                                                                     // 148
    return null;                                                                                                     // 149
  };                                                                                                                 // 150
});                                                                                                                  // 151
                                                                                                                     // 152
// Wrap DB write operation methods                                                                                   // 153
_.each(['insert', 'update'], function(methodName) {                                                                  // 154
  var _super = Mongo.Collection.prototype[methodName];                                                               // 155
  Mongo.Collection.prototype[methodName] = function() {                                                              // 156
    var self = this, options,                                                                                        // 157
        args = _.toArray(arguments);                                                                                 // 158
                                                                                                                     // 159
    options = (methodName === "insert") ? args[1] : args[2];                                                         // 160
                                                                                                                     // 161
    // Support missing options arg                                                                                   // 162
    if (!options || typeof options === "function") {                                                                 // 163
      options = {};                                                                                                  // 164
    }                                                                                                                // 165
                                                                                                                     // 166
    if (self._c2 && options.bypassCollection2 !== true) {                                                            // 167
      var userId = null;                                                                                             // 168
      try { // https://github.com/aldeed/meteor-collection2/issues/175                                               // 169
        userId = Meteor.userId();                                                                                    // 170
      } catch (err) {}                                                                                               // 171
                                                                                                                     // 172
      args = doValidate.call(                                                                                        // 173
        self,                                                                                                        // 174
        methodName,                                                                                                  // 175
        args,                                                                                                        // 176
        true, // getAutoValues                                                                                       // 177
        userId,                                                                                                      // 178
        Meteor.isServer // isFromTrustedCode                                                                         // 179
      );                                                                                                             // 180
      if (!args) {                                                                                                   // 181
        // doValidate already called the callback or threw the error so we're done.                                  // 182
        // But insert should always return an ID to match core behavior.                                             // 183
        return methodName === "insert" ? self._makeNewID() : undefined;                                              // 184
      }                                                                                                              // 185
    } else {                                                                                                         // 186
      // We still need to adjust args because insert does not take options                                           // 187
      if (methodName === "insert" && typeof args[1] !== 'function') args.splice(1, 1);                               // 188
    }                                                                                                                // 189
                                                                                                                     // 190
    return _super.apply(self, args);                                                                                 // 191
  };                                                                                                                 // 192
});                                                                                                                  // 193
                                                                                                                     // 194
/*                                                                                                                   // 195
 * Private                                                                                                           // 196
 */                                                                                                                  // 197
                                                                                                                     // 198
function doValidate(type, args, getAutoValues, userId, isFromTrustedCode) {                                          // 199
  var self = this, doc, callback, error, options, isUpsert, selector, last, hasCallback;                             // 200
                                                                                                                     // 201
  if (!args.length) {                                                                                                // 202
    throw new Error(type + " requires an argument");                                                                 // 203
  }                                                                                                                  // 204
                                                                                                                     // 205
  // Gather arguments and cache the selector                                                                         // 206
  if (type === "insert") {                                                                                           // 207
    doc = args[0];                                                                                                   // 208
    options = args[1];                                                                                               // 209
    callback = args[2];                                                                                              // 210
                                                                                                                     // 211
    // The real insert doesn't take options                                                                          // 212
    if (typeof options === "function") {                                                                             // 213
      args = [doc, options];                                                                                         // 214
    } else if (typeof callback === "function") {                                                                     // 215
      args = [doc, callback];                                                                                        // 216
    } else {                                                                                                         // 217
      args = [doc];                                                                                                  // 218
    }                                                                                                                // 219
  } else if (type === "update") {                                                                                    // 220
    selector = args[0];                                                                                              // 221
    doc = args[1];                                                                                                   // 222
    options = args[2];                                                                                               // 223
    callback = args[3];                                                                                              // 224
  } else {                                                                                                           // 225
    throw new Error("invalid type argument");                                                                        // 226
  }                                                                                                                  // 227
                                                                                                                     // 228
  var validatedObjectWasInitiallyEmpty = _.isEmpty(doc);                                                             // 229
                                                                                                                     // 230
  // Support missing options arg                                                                                     // 231
  if (!callback && typeof options === "function") {                                                                  // 232
    callback = options;                                                                                              // 233
    options = {};                                                                                                    // 234
  }                                                                                                                  // 235
  options = options || {};                                                                                           // 236
                                                                                                                     // 237
  last = args.length - 1;                                                                                            // 238
                                                                                                                     // 239
  hasCallback = (typeof args[last] === 'function');                                                                  // 240
                                                                                                                     // 241
  // If update was called with upsert:true, flag as an upsert                                                        // 242
  isUpsert = (type === "update" && options.upsert === true);                                                         // 243
                                                                                                                     // 244
  // we need to pass `doc` and `options` to `simpleSchema` method, that's why                                        // 245
  // schema declaration moved here                                                                                   // 246
  var schema = self.simpleSchema(doc, options, selector);                                                            // 247
  var isLocalCollection = (self._connection === null);                                                               // 248
                                                                                                                     // 249
  // On the server and for local collections, we allow passing `getAutoValues: false` to disable autoValue functions
  if ((Meteor.isServer || isLocalCollection) && options.getAutoValues === false) {                                   // 251
    getAutoValues = false;                                                                                           // 252
  }                                                                                                                  // 253
                                                                                                                     // 254
  // Determine validation context                                                                                    // 255
  var validationContext = options.validationContext;                                                                 // 256
  if (validationContext) {                                                                                           // 257
    if (typeof validationContext === 'string') {                                                                     // 258
      validationContext = schema.namedContext(validationContext);                                                    // 259
    }                                                                                                                // 260
  } else {                                                                                                           // 261
    validationContext = schema.namedContext();                                                                       // 262
  }                                                                                                                  // 263
                                                                                                                     // 264
  // Add a default callback function if we're on the client and no callback was given                                // 265
  if (Meteor.isClient && !callback) {                                                                                // 266
    // Client can't block, so it can't report errors by exception,                                                   // 267
    // only by callback. If they forget the callback, give them a                                                    // 268
    // default one that logs the error, so they aren't totally                                                       // 269
    // baffled if their writes don't work because their database is                                                  // 270
    // down.                                                                                                         // 271
    callback = function(err) {                                                                                       // 272
      if (err) {                                                                                                     // 273
        Meteor._debug(type + " failed: " + (err.reason || err.stack));                                               // 274
      }                                                                                                              // 275
    };                                                                                                               // 276
  }                                                                                                                  // 277
                                                                                                                     // 278
  // If client validation is fine or is skipped but then something                                                   // 279
  // is found to be invalid on the server, we get that error back                                                    // 280
  // as a special Meteor.Error that we need to parse.                                                                // 281
  if (Meteor.isClient && hasCallback) {                                                                              // 282
    callback = args[last] = wrapCallbackForParsingServerErrors(validationContext, callback);                         // 283
  }                                                                                                                  // 284
                                                                                                                     // 285
  var schemaAllowsId = schema.allowsKey("_id");                                                                      // 286
  if (type === "insert" && !doc._id && schemaAllowsId) {                                                             // 287
    doc._id = self._makeNewID();                                                                                     // 288
  }                                                                                                                  // 289
                                                                                                                     // 290
  // Get the docId for passing in the autoValue/custom context                                                       // 291
  var docId;                                                                                                         // 292
  if (type === 'insert') {                                                                                           // 293
    docId = doc._id; // might be undefined                                                                           // 294
  } else if (type === "update" && selector) {                                                                        // 295
    docId = typeof selector === 'string' || selector instanceof Mongo.ObjectID ? selector : selector._id;            // 296
  }                                                                                                                  // 297
                                                                                                                     // 298
  // If _id has already been added, remove it temporarily if it's                                                    // 299
  // not explicitly defined in the schema.                                                                           // 300
  var cachedId;                                                                                                      // 301
  if (doc._id && !schemaAllowsId) {                                                                                  // 302
    cachedId = doc._id;                                                                                              // 303
    delete doc._id;                                                                                                  // 304
  }                                                                                                                  // 305
                                                                                                                     // 306
  function doClean(docToClean, getAutoValues, filter, autoConvert, removeEmptyStrings, trimStrings) {                // 307
    // Clean the doc/modifier in place                                                                               // 308
    schema.clean(docToClean, {                                                                                       // 309
      filter: filter,                                                                                                // 310
      autoConvert: autoConvert,                                                                                      // 311
      getAutoValues: getAutoValues,                                                                                  // 312
      isModifier: (type !== "insert"),                                                                               // 313
      removeEmptyStrings: removeEmptyStrings,                                                                        // 314
      trimStrings: trimStrings,                                                                                      // 315
      extendAutoValueContext: _.extend({                                                                             // 316
        isInsert: (type === "insert"),                                                                               // 317
        isUpdate: (type === "update" && options.upsert !== true),                                                    // 318
        isUpsert: isUpsert,                                                                                          // 319
        userId: userId,                                                                                              // 320
        isFromTrustedCode: isFromTrustedCode,                                                                        // 321
        docId: docId,                                                                                                // 322
        isLocalCollection: isLocalCollection                                                                         // 323
      }, options.extendAutoValueContext || {})                                                                       // 324
    });                                                                                                              // 325
  }                                                                                                                  // 326
                                                                                                                     // 327
  // Preliminary cleaning on both client and server. On the server and for local                                     // 328
  // collections, automatic values will also be set at this point.                                                   // 329
  doClean(                                                                                                           // 330
    doc,                                                                                                             // 331
    getAutoValues,                                                                                                   // 332
    options.filter !== false,                                                                                        // 333
    options.autoConvert !== false,                                                                                   // 334
    options.removeEmptyStrings !== false,                                                                            // 335
    options.trimStrings !== false                                                                                    // 336
  );                                                                                                                 // 337
                                                                                                                     // 338
  // We clone before validating because in some cases we need to adjust the                                          // 339
  // object a bit before validating it. If we adjusted `doc` itself, our                                             // 340
  // changes would persist into the database.                                                                        // 341
  var docToValidate = {};                                                                                            // 342
  for (var prop in doc) {                                                                                            // 343
    // We omit prototype properties when cloning because they will not be valid                                      // 344
    // and mongo omits them when saving to the database anyway.                                                      // 345
    if (doc.hasOwnProperty(prop)) {                                                                                  // 346
      docToValidate[prop] = doc[prop];                                                                               // 347
    }                                                                                                                // 348
  }                                                                                                                  // 349
                                                                                                                     // 350
  // On the server, upserts are possible; SimpleSchema handles upserts pretty                                        // 351
  // well by default, but it will not know about the fields in the selector,                                         // 352
  // which are also stored in the database if an insert is performed. So we                                          // 353
  // will allow these fields to be considered for validation by adding them                                          // 354
  // to the $set in the modifier. This is no doubt prone to errors, but there                                        // 355
  // probably isn't any better way right now.                                                                        // 356
  if (Meteor.isServer && isUpsert && _.isObject(selector)) {                                                         // 357
    var set = docToValidate.$set || {};                                                                              // 358
    docToValidate.$set = _.clone(selector);                                                                          // 359
    if (!schemaAllowsId) delete docToValidate.$set._id;                                                              // 360
    _.extend(docToValidate.$set, set);                                                                               // 361
  }                                                                                                                  // 362
                                                                                                                     // 363
  // Set automatic values for validation on the client.                                                              // 364
  // On the server, we already updated doc with auto values, but on the client,                                      // 365
  // we will add them to docToValidate for validation purposes only.                                                 // 366
  // This is because we want all actual values generated on the server.                                              // 367
  if (Meteor.isClient && !isLocalCollection) {                                                                       // 368
    doClean(docToValidate, true, false, false, false, false);                                                        // 369
  }                                                                                                                  // 370
                                                                                                                     // 371
  // XXX Maybe move this into SimpleSchema                                                                           // 372
  if (!validatedObjectWasInitiallyEmpty && _.isEmpty(docToValidate)) {                                               // 373
    throw new Error('After filtering out keys not in the schema, your ' +                                            // 374
      (type === 'update' ? 'modifier' : 'object') +                                                                  // 375
      ' is now empty');                                                                                              // 376
  }                                                                                                                  // 377
                                                                                                                     // 378
  // Validate doc                                                                                                    // 379
  var isValid;                                                                                                       // 380
  if (options.validate === false) {                                                                                  // 381
    isValid = true;                                                                                                  // 382
  } else {                                                                                                           // 383
    isValid = validationContext.validate(docToValidate, {                                                            // 384
      modifier: (type === "update" || type === "upsert"),                                                            // 385
      upsert: isUpsert,                                                                                              // 386
      extendedCustomContext: _.extend({                                                                              // 387
        isInsert: (type === "insert"),                                                                               // 388
        isUpdate: (type === "update" && options.upsert !== true),                                                    // 389
        isUpsert: isUpsert,                                                                                          // 390
        userId: userId,                                                                                              // 391
        isFromTrustedCode: isFromTrustedCode,                                                                        // 392
        docId: docId,                                                                                                // 393
        isLocalCollection: isLocalCollection                                                                         // 394
      }, options.extendedCustomContext || {})                                                                        // 395
    });                                                                                                              // 396
  }                                                                                                                  // 397
                                                                                                                     // 398
  if (isValid) {                                                                                                     // 399
    // Add the ID back                                                                                               // 400
    if (cachedId) {                                                                                                  // 401
      doc._id = cachedId;                                                                                            // 402
    }                                                                                                                // 403
                                                                                                                     // 404
    // Update the args to reflect the cleaned doc                                                                    // 405
    // XXX not sure this is necessary since we mutate                                                                // 406
    if (type === "insert") {                                                                                         // 407
      args[0] = doc;                                                                                                 // 408
    } else {                                                                                                         // 409
      args[1] = doc;                                                                                                 // 410
    }                                                                                                                // 411
                                                                                                                     // 412
    // If callback, set invalidKey when we get a mongo unique error                                                  // 413
    if (Meteor.isServer && hasCallback) {                                                                            // 414
      args[last] = wrapCallbackForParsingMongoValidationErrors(validationContext, args[last]);                       // 415
    }                                                                                                                // 416
                                                                                                                     // 417
    return args;                                                                                                     // 418
  } else {                                                                                                           // 419
    error = getErrorObject(validationContext);                                                                       // 420
    if (callback) {                                                                                                  // 421
      // insert/update/upsert pass `false` when there's an error, so we do that                                      // 422
      callback(error, false);                                                                                        // 423
    } else {                                                                                                         // 424
      throw error;                                                                                                   // 425
    }                                                                                                                // 426
  }                                                                                                                  // 427
}                                                                                                                    // 428
                                                                                                                     // 429
function getErrorObject(context) {                                                                                   // 430
  var message, invalidKeys = context.invalidKeys();                                                                  // 431
  if (invalidKeys.length) {                                                                                          // 432
    message = context.keyErrorMessage(invalidKeys[0].name);                                                          // 433
  } else {                                                                                                           // 434
    message = "Failed validation";                                                                                   // 435
  }                                                                                                                  // 436
  var error = new Error(message);                                                                                    // 437
  error.invalidKeys = invalidKeys;                                                                                   // 438
  error.validationContext = context;                                                                                 // 439
  // If on the server, we add a sanitized error, too, in case we're                                                  // 440
  // called from a method.                                                                                           // 441
  if (Meteor.isServer) {                                                                                             // 442
    error.sanitizedError = new Meteor.Error(400, message, EJSON.stringify(error.invalidKeys));                       // 443
  }                                                                                                                  // 444
  return error;                                                                                                      // 445
}                                                                                                                    // 446
                                                                                                                     // 447
function addUniqueError(context, errorMessage) {                                                                     // 448
  var name = errorMessage.split('c2_')[1].split(' ')[0];                                                             // 449
  var val = errorMessage.split('dup key:')[1].split('"')[1];                                                         // 450
  context.addInvalidKeys([{                                                                                          // 451
    name: name,                                                                                                      // 452
    type: 'notUnique',                                                                                               // 453
    value: val                                                                                                       // 454
  }]);                                                                                                               // 455
}                                                                                                                    // 456
                                                                                                                     // 457
function wrapCallbackForParsingMongoValidationErrors(validationContext, cb) {                                        // 458
  return function wrappedCallbackForParsingMongoValidationErrors(error) {                                            // 459
    var args = _.toArray(arguments);                                                                                 // 460
    if (error &&                                                                                                     // 461
        ((error.name === "MongoError" && error.code === 11001) || error.message.indexOf('MongoError: E11000' !== -1)) &&
        error.message.indexOf('c2_') !== -1) {                                                                       // 463
      addUniqueError(validationContext, error.message);                                                              // 464
      args[0] = getErrorObject(validationContext);                                                                   // 465
    }                                                                                                                // 466
    return cb.apply(this, args);                                                                                     // 467
  };                                                                                                                 // 468
}                                                                                                                    // 469
                                                                                                                     // 470
function wrapCallbackForParsingServerErrors(validationContext, cb) {                                                 // 471
  return function wrappedCallbackForParsingServerErrors(error) {                                                     // 472
    var args = _.toArray(arguments);                                                                                 // 473
    // Handle our own validation errors                                                                              // 474
    if (error instanceof Meteor.Error &&                                                                             // 475
        error.error === 400 &&                                                                                       // 476
        error.reason === "INVALID" &&                                                                                // 477
        typeof error.details === "string") {                                                                         // 478
      var invalidKeysFromServer = EJSON.parse(error.details);                                                        // 479
      validationContext.addInvalidKeys(invalidKeysFromServer);                                                       // 480
      args[0] = getErrorObject(validationContext);                                                                   // 481
    }                                                                                                                // 482
    // Handle Mongo unique index errors, which are forwarded to the client as 409 errors                             // 483
    else if (error instanceof Meteor.Error &&                                                                        // 484
             error.error === 409 &&                                                                                  // 485
             error.reason &&                                                                                         // 486
             error.reason.indexOf('E11000') !== -1 &&                                                                // 487
             error.reason.indexOf('c2_') !== -1) {                                                                   // 488
      addUniqueError(validationContext, error.reason);                                                               // 489
      args[0] = getErrorObject(validationContext);                                                                   // 490
    }                                                                                                                // 491
    return cb.apply(this, args);                                                                                     // 492
  };                                                                                                                 // 493
}                                                                                                                    // 494
                                                                                                                     // 495
var alreadyInsecured = {};                                                                                           // 496
function keepInsecure(c) {                                                                                           // 497
  // If insecure package is in use, we need to add allow rules that return                                           // 498
  // true. Otherwise, it would seemingly turn off insecure mode.                                                     // 499
  if (Package && Package.insecure && !alreadyInsecured[c._name]) {                                                   // 500
    c.allow({                                                                                                        // 501
      insert: function() {                                                                                           // 502
        return true;                                                                                                 // 503
      },                                                                                                             // 504
      update: function() {                                                                                           // 505
        return true;                                                                                                 // 506
      },                                                                                                             // 507
      remove: function () {                                                                                          // 508
        return true;                                                                                                 // 509
      },                                                                                                             // 510
      fetch: [],                                                                                                     // 511
      transform: null                                                                                                // 512
    });                                                                                                              // 513
    alreadyInsecured[c._name] = true;                                                                                // 514
  }                                                                                                                  // 515
  // If insecure package is NOT in use, then adding the two deny functions                                           // 516
  // does not have any effect on the main app's security paradigm. The                                               // 517
  // user will still be required to add at least one allow function of her                                           // 518
  // own for each operation for this collection. And the user may still add                                          // 519
  // additional deny functions, but does not have to.                                                                // 520
}                                                                                                                    // 521
                                                                                                                     // 522
var alreadyDefined = {};                                                                                             // 523
function defineDeny(c, options) {                                                                                    // 524
  if (!alreadyDefined[c._name]) {                                                                                    // 525
                                                                                                                     // 526
    var isLocalCollection = (c._connection === null);                                                                // 527
                                                                                                                     // 528
    // First define deny functions to extend doc with the results of clean                                           // 529
    // and autovalues. This must be done with "transform: null" or we would be                                       // 530
    // extending a clone of doc and therefore have no effect.                                                        // 531
    c.deny({                                                                                                         // 532
      insert: function(userId, doc) {                                                                                // 533
        // Referenced doc is cleaned in place                                                                        // 534
        c.simpleSchema(doc).clean(doc, {                                                                             // 535
          isModifier: false,                                                                                         // 536
          // We don't do these here because they are done on the client if desired                                   // 537
          filter: false,                                                                                             // 538
          autoConvert: false,                                                                                        // 539
          removeEmptyStrings: false,                                                                                 // 540
          trimStrings: false,                                                                                        // 541
          extendAutoValueContext: {                                                                                  // 542
            isInsert: true,                                                                                          // 543
            isUpdate: false,                                                                                         // 544
            isUpsert: false,                                                                                         // 545
            userId: userId,                                                                                          // 546
            isFromTrustedCode: false,                                                                                // 547
            docId: doc._id,                                                                                          // 548
            isLocalCollection: isLocalCollection                                                                     // 549
          }                                                                                                          // 550
        });                                                                                                          // 551
                                                                                                                     // 552
        return false;                                                                                                // 553
      },                                                                                                             // 554
      update: function(userId, doc, fields, modifier) {                                                              // 555
        // Referenced modifier is cleaned in place                                                                   // 556
        c.simpleSchema(modifier).clean(modifier, {                                                                   // 557
          isModifier: true,                                                                                          // 558
          // We don't do these here because they are done on the client if desired                                   // 559
          filter: false,                                                                                             // 560
          autoConvert: false,                                                                                        // 561
          removeEmptyStrings: false,                                                                                 // 562
          trimStrings: false,                                                                                        // 563
          extendAutoValueContext: {                                                                                  // 564
            isInsert: false,                                                                                         // 565
            isUpdate: true,                                                                                          // 566
            isUpsert: false,                                                                                         // 567
            userId: userId,                                                                                          // 568
            isFromTrustedCode: false,                                                                                // 569
            docId: doc && doc._id,                                                                                   // 570
            isLocalCollection: isLocalCollection                                                                     // 571
          }                                                                                                          // 572
        });                                                                                                          // 573
                                                                                                                     // 574
        return false;                                                                                                // 575
      },                                                                                                             // 576
      fetch: ['_id'],                                                                                                // 577
      transform: null                                                                                                // 578
    });                                                                                                              // 579
                                                                                                                     // 580
    // Second define deny functions to validate again on the server                                                  // 581
    // for client-initiated inserts and updates. These should be                                                     // 582
    // called after the clean/autovalue functions since we're adding                                                 // 583
    // them after. These must *not* have "transform: null" if options.transform is true because                      // 584
    // we need to pass the doc through any transforms to be sure                                                     // 585
    // that custom types are properly recognized for type validation.                                                // 586
    c.deny(_.extend({                                                                                                // 587
      insert: function(userId, doc) {                                                                                // 588
        // We pass the false options because we will have done them on client if desired                             // 589
        doValidate.call(                                                                                             // 590
          c,                                                                                                         // 591
          "insert",                                                                                                  // 592
          [                                                                                                          // 593
            doc,                                                                                                     // 594
            {                                                                                                        // 595
              trimStrings: false,                                                                                    // 596
              removeEmptyStrings: false,                                                                             // 597
              filter: false,                                                                                         // 598
              autoConvert: false                                                                                     // 599
            },                                                                                                       // 600
            function(error) {                                                                                        // 601
              if (error) {                                                                                           // 602
                throw new Meteor.Error(400, 'INVALID', EJSON.stringify(error.invalidKeys));                          // 603
              }                                                                                                      // 604
            }                                                                                                        // 605
          ],                                                                                                         // 606
          false, // getAutoValues                                                                                    // 607
          userId,                                                                                                    // 608
          false // isFromTrustedCode                                                                                 // 609
        );                                                                                                           // 610
                                                                                                                     // 611
        return false;                                                                                                // 612
      },                                                                                                             // 613
      update: function(userId, doc, fields, modifier) {                                                              // 614
        // NOTE: This will never be an upsert because client-side upserts                                            // 615
        // are not allowed once you define allow/deny functions.                                                     // 616
        // We pass the false options because we will have done them on client if desired                             // 617
        doValidate.call(                                                                                             // 618
          c,                                                                                                         // 619
          "update",                                                                                                  // 620
          [                                                                                                          // 621
            {_id: doc && doc._id},                                                                                   // 622
            modifier,                                                                                                // 623
            {                                                                                                        // 624
              trimStrings: false,                                                                                    // 625
              removeEmptyStrings: false,                                                                             // 626
              filter: false,                                                                                         // 627
              autoConvert: false                                                                                     // 628
            },                                                                                                       // 629
            function(error) {                                                                                        // 630
              if (error) {                                                                                           // 631
                throw new Meteor.Error(400, 'INVALID', EJSON.stringify(error.invalidKeys));                          // 632
              }                                                                                                      // 633
            }                                                                                                        // 634
          ],                                                                                                         // 635
          false, // getAutoValues                                                                                    // 636
          userId,                                                                                                    // 637
          false // isFromTrustedCode                                                                                 // 638
        );                                                                                                           // 639
                                                                                                                     // 640
        return false;                                                                                                // 641
      },                                                                                                             // 642
      fetch: ['_id']                                                                                                 // 643
    }, options.transform === true ? {} : {transform: null}));                                                        // 644
                                                                                                                     // 645
    // note that we've already done this collection so that we don't do it again                                     // 646
    // if attachSchema is called again                                                                               // 647
    alreadyDefined[c._name] = true;                                                                                  // 648
  }                                                                                                                  // 649
}                                                                                                                    // 650
                                                                                                                     // 651
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['aldeed:collection2-core'] = {}, {
  Collection2: Collection2
});

})();
