// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.enrichment.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.db');
goog.require('cljs.core.async');
gointermod.enrichment.handlers.enrich = (function gointermod$enrichment$handlers$enrich(db){
console.log(cljs.core.clj__GT_js.call(null,db));

var organisms = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
return null;
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"enrich-results","enrich-results",-1335167070),(function (db,p__26612){
var vec__26613 = p__26612;
var _ = cljs.core.nth.call(null,vec__26613,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26613,(1),null);
console.clear();

gointermod.enrichment.handlers.enrich.call(null,db);

return db;
}));

//# sourceMappingURL=handlers.js.map?rel=1462895597931