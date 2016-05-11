// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.views');
goog.require('cljs.core');
goog.require('gointermod.nav');
goog.require('gointermod.orthologresults.views');
goog.require('gointermod.heatmap.views');
goog.require('gointermod.ontology.views');
goog.require('gointermod.search.views');
goog.require('gointermod.config');
goog.require('gointermod.utils.icons');
goog.require('json_html.core');
goog.require('gointermod.enrichment.views');
goog.require('re_frame.core');
gointermod.views.main_panel = (function gointermod$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.utils.icons.icons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.search.views.search], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.nav.nav], null),(function (){var active_view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.contentbody","section.contentbody",485128752),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.orthologresults.views.orthologs], null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"heatmap","heatmap",-7865851)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.heatmap.views.heatmap], null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"ontology","ontology",1513220453)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.ontology.views.ontology], null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.enrichment], null):null))))], null);
})()], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1462956180839