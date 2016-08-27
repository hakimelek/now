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
var Collection2 = Package['aldeed:collection2-core'].Collection2;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var check = Package.check.check;
var Match = Package.check.Match;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Mongo = Package.mongo.Mongo;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/aldeed_schema-index/lib/indexing.js                                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
// Extend the schema options allowed by SimpleSchema                                 // 1
SimpleSchema.extendOptions({                                                         // 2
  index: Match.Optional(Match.OneOf(Number, String, Boolean)),                       // 3
  unique: Match.Optional(Boolean),                                                   // 4
  sparse: Match.Optional(Boolean),                                                   // 5
});                                                                                  // 6
                                                                                     // 7
// Define validation error messages                                                  // 8
SimpleSchema.messages({                                                              // 9
  notUnique: "[label] must be unique",                                               // 10
});                                                                                  // 11
                                                                                     // 12
if (Meteor.isServer) {                                                               // 13
  Collection2.on('schema.attached', function (collection, ss) {                      // 14
    function ensureIndex(index, indexName, unique, sparse) {                         // 15
      Meteor.startup(function () {                                                   // 16
        collection._collection._ensureIndex(index, {                                 // 17
          background: true,                                                          // 18
          name: indexName,                                                           // 19
          unique: unique,                                                            // 20
          sparse: sparse                                                             // 21
        });                                                                          // 22
      });                                                                            // 23
    }                                                                                // 24
                                                                                     // 25
    function dropIndex(indexName) {                                                  // 26
      Meteor.startup(function () {                                                   // 27
        try {                                                                        // 28
          collection._collection._dropIndex(indexName);                              // 29
        } catch (err) {                                                              // 30
          // no index with that name, which is what we want                          // 31
        }                                                                            // 32
      });                                                                            // 33
    }                                                                                // 34
                                                                                     // 35
    // Loop over fields definitions and ensure collection indexes (server side only)
    _.each(ss.schema(), function(definition, fieldName) {                            // 37
      if ('index' in definition || definition.unique === true) {                     // 38
        var index = {}, indexValue;                                                  // 39
        // If they specified `unique: true` but not `index`,                         // 40
        // we assume `index: 1` to set up the unique index in mongo                  // 41
        if ('index' in definition) {                                                 // 42
          indexValue = definition.index;                                             // 43
          if (indexValue === true) indexValue = 1;                                   // 44
        } else {                                                                     // 45
          indexValue = 1;                                                            // 46
        }                                                                            // 47
        var indexName = 'c2_' + fieldName;                                           // 48
        // In the index object, we want object array keys without the ".$" piece     // 49
        var idxFieldName = fieldName.replace(/\.\$\./g, ".");                        // 50
        index[idxFieldName] = indexValue;                                            // 51
        var unique = !!definition.unique && (indexValue === 1 || indexValue === -1);
        var sparse = definition.sparse || false;                                     // 53
                                                                                     // 54
        // If unique and optional, force sparse to prevent errors                    // 55
        if (!sparse && unique && definition.optional) sparse = true;                 // 56
                                                                                     // 57
        if (indexValue === false) {                                                  // 58
          dropIndex(indexName);                                                      // 59
        } else {                                                                     // 60
          ensureIndex(index, indexName, unique, sparse);                             // 61
        }                                                                            // 62
      }                                                                              // 63
    });                                                                              // 64
  });                                                                                // 65
}                                                                                    // 66
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:schema-index'] = {};

})();
