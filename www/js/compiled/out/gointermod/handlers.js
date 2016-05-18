// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.handlers');
goog.require('cljs.core');
goog.require('gointermod.search.handlers');
goog.require('gointermod.orthologresults.handlers');
goog.require('gointermod.db');
goog.require('gointermod.enrichment.handlers');
goog.require('gointermod.heatmap.handlers');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return gointermod.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (db,p__26998){
var vec__26999 = p__26998;
var _ = cljs.core.nth.call(null,vec__26999,(0),null);
var active_view = cljs.core.nth.call(null,vec__26999,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),active_view);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"active-filter","active-filter",845441376),(function (db,p__27000){
var vec__27001 = p__27000;
var _ = cljs.core.nth.call(null,vec__27001,(0),null);
var active_filter = cljs.core.nth.call(null,vec__27001,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrich-results","enrich-results",-1335167070)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregate-heatmap-results","aggregate-heatmap-results",-1585485743)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-filter","active-filter",845441376),active_filter);
}));

//# sourceMappingURL=handlers.js.map?rel=1463581744970