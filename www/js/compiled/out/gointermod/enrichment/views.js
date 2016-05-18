// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.enrichment.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.utils.utils');
goog.require('gointermod.utils.comms');
goog.require('cljs.core.async');
gointermod.enrichment.views.output_success = (function gointermod$enrichment$views$output_success(this_response){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.matches","th.matches",-613367655),"Matches"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.description","th.description",1130526201),"GO Term"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.pval","th.pval",1443966286),"P-value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,(function (result){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.matches","td.matches",-167530674),new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.description","td.description",-881566780),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pval","td.pval",-136829542),new cljs.core.Keyword(null,"p-value","p-value",1434023819).cljs$core$IFn$_invoke$arity$1(result)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"p-value","p-value",1434023819).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(result))].join('')], null));
}),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(this_response))], null)], null);
});
gointermod.enrichment.views.output_error = (function gointermod$enrichment$views$output_error(result){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.icon","svg.icon",521947604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),"#icon-sad"], null)], null)], null),"Error loading results. The server says: \"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], null),"\""], null);
});
gointermod.enrichment.views.output_loading = (function gointermod$enrichment$views$output_loading(result){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.utils.utils.loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading results...."], null)], null);
});
gointermod.enrichment.views.build_class = (function gointermod$enrichment$views$build_class(organism,this_response){
return [cljs.core.str(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(organism))),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"wasSuccessful","wasSuccessful",52216184).cljs$core$IFn$_invoke$arity$1(this_response))?"success":(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(this_response))?"error":(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(this_response))?"loading":null))))].join('');
});
gointermod.enrichment.views.process_response = (function gointermod$enrichment$views$process_response(organism,this_response){

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.organism","div.organism",1891170386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gointermod.enrichment.views.build_class.call(null,organism,this_response)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"abbrev","abbrev",10803847).cljs$core$IFn$_invoke$arity$1(organism)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(this_response))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.output_loading,this_response], null):(cljs.core.truth_(new cljs.core.Keyword(null,"wasSuccessful","wasSuccessful",52216184).cljs$core$IFn$_invoke$arity$1(this_response))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.output_success,this_response], null):(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(this_response))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.output_error,this_response], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.output_loading,this_response], null)
)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(organism)], null));
});
gointermod.enrichment.views.organism_enrichment = (function gointermod$enrichment$views$organism_enrichment(){

var organisms = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
var enrichment = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrichment-results","enrichment-results",-1610770142)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.organisms","div.organisms",1394270512),cljs.core.doall.call(null,cljs.core.map.call(null,((function (organisms,enrichment){
return (function (p__26752){
var vec__26753 = p__26752;
var id = cljs.core.nth.call(null,vec__26753,(0),null);
var organism = cljs.core.nth.call(null,vec__26753,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.process_response,id.call(null,cljs.core.deref.call(null,organisms)),id.call(null,cljs.core.deref.call(null,enrichment))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("enrich"),cljs.core.str(id)].join('')], null));
});})(organisms,enrichment))
,cljs.core.deref.call(null,organisms)))], null);
});
gointermod.enrichment.views.test_correction_filter = (function gointermod$enrichment$views$test_correction_filter(){

var correction = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-correction","test-correction",1270084834)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Test correction",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (correction){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-correction","test-correction",1270084834),(e["target"]["value"])], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrich-results","enrich-results",-1335167070)], null));
});})(correction))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,correction)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Holm-Bonferroni"], null),"Holm-Bonferroni"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Benjamini Hochberg"], null),"Benjamini Hochberg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Bonferroni"], null),"Bonferroni"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"None"], null),"None"], null)], null)], null)], null);
});
gointermod.enrichment.views.ontology_filter = (function gointermod$enrichment$views$ontology_filter(){

var filters = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919)], null));
var active_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-filter","active-filter",845441376)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Ontology",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (filters,active_filter){
return (function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-filter","active-filter",845441376),(e["target"]["value"])], null));
});})(filters,active_filter))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,active_filter)], null),cljs.core.map.call(null,((function (filters,active_filter){
return (function (p__26756){
var vec__26757 = p__26756;
var k = cljs.core.nth.call(null,vec__26757,(0),null);
var v = cljs.core.nth.call(null,vec__26757,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),new cljs.core.Keyword(null,"pretty-name","pretty-name",282563528).cljs$core$IFn$_invoke$arity$1(v)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("filter"),cljs.core.str(k)].join('')], null));
});})(filters,active_filter))
,cljs.core.deref.call(null,filters))], null)], null)], null);
});
gointermod.enrichment.views.max_p_filter = (function gointermod$enrichment$views$max_p_filter(){

var max_p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-p","max-p",1528182779)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Max p-value",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,max_p),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (max_p){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-p","max-p",1528182779),(e["target"]["value"])], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrich-results","enrich-results",-1335167070)], null));
});})(max_p))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),0.05], null),"0.05"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),0.1], null),"0.10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),1.0], null),"1.00"], null)], null)], null)], null);
});
gointermod.enrichment.views.checked_organism_list = (function gointermod$enrichment$views$checked_organism_list(){

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__26760){
var vec__26761 = p__26760;
var id = cljs.core.nth.call(null,vec__26761,(0),null);
var organism = cljs.core.nth.call(null,vec__26761,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"output?","output?",911035219).cljs$core$IFn$_invoke$arity$1(organism))){
return new cljs.core.Keyword(null,"abbrev","abbrev",10803847).cljs$core$IFn$_invoke$arity$1(organism);
} else {
return null;
}
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null))))));
});
gointermod.enrichment.views.non_searched_organisms = (function gointermod$enrichment$views$non_searched_organisms(){

var organisms = gointermod.enrichment.views.checked_organism_list.call(null);
if(cljs.core.empty_QMARK_.call(null,organisms)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.notsearched","div.notsearched",14691097),"The following organisms were not selected as an output species: ",clojure.string.join.call(null," ",organisms)], null);
}
});
gointermod.enrichment.views.enrichment = (function gointermod$enrichment$views$enrichment(){
var max_p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-p","max-p",1528182779)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrich-results","enrich-results",-1335167070)], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.enrichment","div.enrichment",1540382298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Enrichment"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings","div.settings",902581738),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.test_correction_filter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.max_p_filter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.ontology_filter], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.organism_enrichment], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.enrichment.views.non_searched_organisms], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1463581199276