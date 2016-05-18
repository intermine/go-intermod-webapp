// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.views');
goog.require('cljs.core');
goog.require('gointermod.nav');
goog.require('secretary.core');
goog.require('gointermod.orthologresults.views');
goog.require('gointermod.heatmap.views');
goog.require('gointermod.ontology.views');
goog.require('gointermod.search.views');
goog.require('gointermod.config');
goog.require('gointermod.utils.icons');
goog.require('json_html.core');
goog.require('gointermod.enrichment.views');
goog.require('gointermod.utils.utils');
goog.require('re_frame.core');
gointermod.views.content = (function gointermod$views$content(){
var active_view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.orthologresults.views.orthologs], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"heatmap","heatmap",-7865851))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.heatmap.views.heatmap], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"ontology","ontology",1513220453))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.ontology.views.ontology], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_view),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.enrichment], null);
} else {
return null;
}
}
}
}
});
gointermod.views.sample_query = (function gointermod$views$sample_query(identifier){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),identifier], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-status-loading","set-status-loading",1569222084)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"perform-search","perform-search",-1935380727)], null));
})], null),identifier], null);
});
gointermod.views.organism_line = (function gointermod$views$organism_line(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.organism-line","div.organism-line",-807140476),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rat","div.rat",1565525869)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zebrafish","div.zebrafish",314622990)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.yeast","div.yeast",-1722947960)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.human","div.human",-574528989)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mouse","div.mouse",-1374844557)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fly","div.fly",1606081884)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.worm","div.worm",-661428632)], null)], null);
});
gointermod.views.starter_content = (function gointermod$views$starter_content(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.default","div.default",-1605327606),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/logo.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"InterMOD GO Tool"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Type a Gene identifier or symbol into the searchbar up the top and press search."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you're not sure what genes to choose, check out the results for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.sample_query,"SOX18"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.sample_query,"ADH5"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.organism_line], null)], null)], null);
});
gointermod.views.default_content = (function gointermod$views$default_content(){
var initialised = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialised","initialised",-1792259028)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,initialised))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.utils.utils.loader], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.starter_content], null);
}
});
gointermod.views.main_panel = (function gointermod$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.utils.icons.icons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.search.views.search], null),(function (){var are_there_results_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregate-results","aggregate-results",-149805792)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),(cljs.core.truth_(cljs.core.deref.call(null,are_there_results_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.nav.nav], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.contentbody","section.contentbody",485128752),(cljs.core.truth_(cljs.core.deref.call(null,are_there_results_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.content], null):(function (){
(window["location"]["href"] = "#");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.default_content], null);
})()
)], null)], null);
})()], null);
});
});

//# sourceMappingURL=views.js.map?rel=1463582263978