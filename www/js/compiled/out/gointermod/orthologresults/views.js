// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.orthologresults.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.utils.utils');
goog.require('gointermod.utils.comms');
goog.require('cljs.core.async');
gointermod.orthologresults.views.headers = (function gointermod$orthologresults$views$headers(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Species"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Orthologs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"GO identifier thingy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Term"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Branch"], null)], null)], null);
});
gointermod.orthologresults.views.aggregate_headers = (function gointermod$orthologresults$views$aggregate_headers(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"are-all-orthologs-selected?","are-all-orthologs-selected?",1752058993)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-select-all","toggle-select-all",710721078)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Species"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Input Gene"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Orthologs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.count","th.count",1106027402),"Biological Process"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.count","th.count",1106027402),"Molecular Function"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.count","th.count",1106027402),"Cellular Component"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Source"], null)], null)], null);
});
gointermod.orthologresults.views.aggregate_results = (function gointermod$orthologresults$views$aggregate_results(){

var results = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregate-results","aggregate-results",-149805792)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map.call(null,((function (results){
return (function (p__26768,organisms){
var vec__26769 = p__26768;
var organism = cljs.core.nth.call(null,vec__26769,(0),null);
var organism_details = cljs.core.nth.call(null,vec__26769,(1),null);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (vec__26769,organism,organism_details,results){
return (function (p__26770,organism_details__$1){
var vec__26771 = p__26770;
var ortholog = cljs.core.nth.call(null,vec__26771,(0),null);
var ortholog_details = cljs.core.nth.call(null,vec__26771,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.clj__GT_js.call(null,organism)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043).cljs$core$IFn$_invoke$arity$1(ortholog_details),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__26771,ortholog,ortholog_details,vec__26769,organism,organism_details,results){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-ortholog-result","select-ortholog-result",-181095547),organism,ortholog], null));
});})(vec__26771,ortholog,ortholog_details,vec__26769,organism,organism_details,results))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.organism","td.organism",64489178),gointermod.utils.utils.get_abbrev.call(null,organism)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"original-id","original-id",-1395890821).cljs$core$IFn$_invoke$arity$1(ortholog_details)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.clj__GT_js.call(null,ortholog)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,ortholog_details,"biological_process",(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,ortholog_details,"molecular_function",(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,ortholog_details,"cellular_component",(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.dataset","td.dataset",2010018524),clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"dataset","dataset",1159262238).cljs$core$IFn$_invoke$arity$1(ortholog_details))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null)], null));
});})(vec__26769,organism,organism_details,results))
,organism_details));
});})(results))
,cljs.core.deref.call(null,results)))], null);
});
gointermod.orthologresults.views.resolve_ids = (function gointermod$orthologresults$views$resolve_ids(){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_26810){
var state_val_26811 = (state_26810[(1)]);
if((state_val_26811 === (1))){
var inst_26796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26797 = [new cljs.core.Keyword(null,"search-term","search-term",356193544)];
var inst_26798 = (new cljs.core.PersistentVector(null,1,(5),inst_26796,inst_26797,null));
var inst_26799 = re_frame.core.subscribe.call(null,inst_26798);
var inst_26800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26801 = [new cljs.core.Keyword(null,"input-organism","input-organism",-416065692)];
var inst_26802 = (new cljs.core.PersistentVector(null,1,(5),inst_26800,inst_26801,null));
var inst_26803 = re_frame.core.subscribe.call(null,inst_26802);
var inst_26804 = cljs.core.deref.call(null,inst_26803);
var inst_26805 = cljs.core.deref.call(null,inst_26799);
var inst_26806 = gointermod.utils.comms.resolve_id.call(null,inst_26804,inst_26805);
var state_26810__$1 = state_26810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26810__$1,(2),inst_26806);
} else {
if((state_val_26811 === (2))){
var inst_26808 = (state_26810[(2)]);
var state_26810__$1 = (function (){var statearr_26812 = state_26810;
(statearr_26812[(7)] = inst_26808);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26810__$1,null);
} else {
return null;
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto__ = null;
var gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto____0 = (function (){
var statearr_26816 = [null,null,null,null,null,null,null,null];
(statearr_26816[(0)] = gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto__);

(statearr_26816[(1)] = (1));

return statearr_26816;
});
var gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto____1 = (function (state_26810){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26817){if((e26817 instanceof Object)){
var ex__19167__auto__ = e26817;
var statearr_26818_26820 = state_26810;
(statearr_26818_26820[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26821 = state_26810;
state_26810 = G__26821;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto__ = function(state_26810){
switch(arguments.length){
case 0:
return gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto____1.call(this,state_26810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto____0;
gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto____1;
return gointermod$orthologresults$views$resolve_ids_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_26819 = f__19185__auto__.call(null);
(statearr_26819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});
gointermod.orthologresults.views.orthologs = (function gointermod$orthologresults$views$orthologs(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ortholog-results","div.ortholog-results",-2019002093),(function (){var are_there_results_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregate-results","aggregate-results",-149805792)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,are_there_results_QMARK_))){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Orthologous Genes"], null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.aggregate","table.aggregate",-1401443972),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.orthologresults.views.aggregate_headers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.orthologresults.views.aggregate_results], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"type something into the searchbar up the top and press search"], null);
}
})()], null);
});
});

//# sourceMappingURL=views.js.map?rel=1463581199328