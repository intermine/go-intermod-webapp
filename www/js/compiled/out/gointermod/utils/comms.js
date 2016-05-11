// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.utils.comms');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('gointermod.utils.utils');
goog.require('re_frame.core');
goog.require('cljs.core.async');
gointermod.utils.comms.get_service = (function gointermod$utils$comms$get_service(source){
var mines = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
var service = new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mine","mine",-130428525).cljs$core$IFn$_invoke$arity$1(source.call(null,cljs.core.deref.call(null,mines))));
return cljs.core.clj__GT_js.call(null,service);
});
gointermod.utils.comms.make_base_query = (function gointermod$utils$comms$make_base_query(identifier,organism,evidence_codes){
return [cljs.core.str("<query model=\"genomic\" view=\"Gene.id Gene.symbol Gene.secondaryIdentifier Gene.primaryIdentifier Gene.organism.shortName Gene.organism.taxonId Gene.homologues.homologue.id Gene.homologues.homologue.primaryIdentifier Gene.homologues.homologue.secondaryIdentifier Gene.homologues.homologue.symbol Gene.homologues.homologue.organism.shortName Gene.homologues.homologue.organism.taxonId Gene.homologues.dataSets.name Gene.homologues.dataSets.url Gene.goAnnotation.evidence.code.code Gene.goAnnotation.evidence.publications.pubMedId Gene.goAnnotation.evidence.publications.title Gene.goAnnotation.ontologyTerm.identifier Gene.goAnnotation.ontologyTerm.name Gene.goAnnotation.ontologyTerm.namespace\" sortOrder=\"Gene.symbol ASC\" constraintLogic=\"B and C and A and E\" name=\"intermod_go\" >\n    <constraint path=\"Gene.goAnnotation.qualifier\" op=\"IS NULL\" code=\"B\" />\n    <constraint path=\"Gene.goAnnotation.ontologyTerm.obsolete\" op=\"=\" value=\"false\" code=\"C\" />\n    <constraint path=\"Gene.homologues.homologue\" code=\"A\" op=\"LOOKUP\" value=\""),cljs.core.str(identifier),cljs.core.str("\" extraValue=\""),cljs.core.str(gointermod.utils.utils.get_abbrev.call(null,organism)),cljs.core.str("\"/>\n    <constraint path=\"Gene.goAnnotation.evidence.code.code\" op=\"ONE OF\" code=\"E\">"),cljs.core.str(evidence_codes),cljs.core.str("</constraint>\n</query>")].join('');
});
gointermod.utils.comms.create_constraint_values = (function gointermod$utils$comms$create_constraint_values(values){
return cljs.core.reduce.call(null,(function (new_str,value){
return [cljs.core.str(new_str),cljs.core.str("<value>"),cljs.core.str(value),cljs.core.str("</value>")].join('');
}),"",values);
});
/**
 * Get the results of GO term query for specified symbol/identifier
 */
gointermod.utils.comms.go_query = (function gointermod$utils$comms$go_query(input_organism,identifiers,output_organism){
var service = gointermod.utils.comms.get_service.call(null,output_organism);
var evidence_codes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-evidence-codes","active-evidence-codes",1701297813)], null));
var evidence_code_constraint_values = gointermod.utils.comms.create_constraint_values.call(null,cljs.core.deref.call(null,evidence_codes));
var query = gointermod.utils.comms.make_base_query.call(null,identifiers,output_organism,evidence_code_constraint_values);
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query){
return (function (state_29844){
var state_val_29845 = (state_29844[(1)]);
if((state_val_29845 === (1))){
var inst_29830 = service.root;
var inst_29831 = [cljs.core.str("http://"),cljs.core.str(inst_29830),cljs.core.str("/service/query/results")].join('');
var inst_29832 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_29833 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_29834 = [query,"json"];
var inst_29835 = cljs.core.PersistentHashMap.fromArrays(inst_29833,inst_29834);
var inst_29836 = [false,true,inst_29835];
var inst_29837 = cljs.core.PersistentHashMap.fromArrays(inst_29832,inst_29836);
var inst_29838 = cljs_http.client.post.call(null,inst_29831,inst_29837);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29844__$1,(2),inst_29838);
} else {
if((state_val_29845 === (2))){
var inst_29840 = (state_29844[(2)]);
var inst_29841 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29840);
var inst_29842 = cljs.core.js__GT_clj.call(null,inst_29841);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29844__$1,inst_29842);
} else {
return null;
}
}
});})(c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query))
;
return ((function (switch__19163__auto__,c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query){
return (function() {
var gointermod$utils$comms$go_query_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$go_query_$_state_machine__19164__auto____0 = (function (){
var statearr_29849 = [null,null,null,null,null,null,null];
(statearr_29849[(0)] = gointermod$utils$comms$go_query_$_state_machine__19164__auto__);

(statearr_29849[(1)] = (1));

return statearr_29849;
});
var gointermod$utils$comms$go_query_$_state_machine__19164__auto____1 = (function (state_29844){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_29844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e29850){if((e29850 instanceof Object)){
var ex__19167__auto__ = e29850;
var statearr_29851_29853 = state_29844;
(statearr_29851_29853[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29844;
state_29844 = G__29854;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$go_query_$_state_machine__19164__auto__ = function(state_29844){
switch(arguments.length){
case 0:
return gointermod$utils$comms$go_query_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$go_query_$_state_machine__19164__auto____1.call(this,state_29844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$go_query_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$go_query_$_state_machine__19164__auto____0;
gointermod$utils$comms$go_query_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$go_query_$_state_machine__19164__auto____1;
return gointermod$utils$comms$go_query_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query))
})();
var state__19186__auto__ = (function (){var statearr_29852 = f__19185__auto__.call(null);
(statearr_29852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query))
);

return c__19184__auto__;
});
gointermod.utils.comms.query_all_selected_organisms = (function gointermod$utils$comms$query_all_selected_organisms(input_organism,identifiers){

var output_organisms = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (output_organisms){
return (function (p__29874,stuff){
var vec__29875 = p__29874;
var output_organism = cljs.core.nth.call(null,vec__29875,(0),null);
var vals = cljs.core.nth.call(null,vec__29875,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"output?","output?",911035219).cljs$core$IFn$_invoke$arity$1(vals))){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,vec__29875,output_organism,vals,output_organisms){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,vec__29875,output_organism,vals,output_organisms){
return (function (state_29884){
var state_val_29885 = (state_29884[(1)]);
if((state_val_29885 === (1))){
var inst_29876 = gointermod.utils.comms.go_query.call(null,input_organism,identifiers,output_organism);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(2),inst_29876);
} else {
if((state_val_29885 === (2))){
var inst_29878 = (state_29884[(2)]);
var inst_29879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29880 = [new cljs.core.Keyword(null,"concat-results","concat-results",266364004),inst_29878,output_organism];
var inst_29881 = (new cljs.core.PersistentVector(null,3,(5),inst_29879,inst_29880,null));
var inst_29882 = re_frame.core.dispatch.call(null,inst_29881);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29884__$1,inst_29882);
} else {
return null;
}
}
});})(c__19184__auto__,vec__29875,output_organism,vals,output_organisms))
;
return ((function (switch__19163__auto__,c__19184__auto__,vec__29875,output_organism,vals,output_organisms){
return (function() {
var gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____0 = (function (){
var statearr_29889 = [null,null,null,null,null,null,null];
(statearr_29889[(0)] = gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__);

(statearr_29889[(1)] = (1));

return statearr_29889;
});
var gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____1 = (function (state_29884){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_29884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e29890){if((e29890 instanceof Object)){
var ex__19167__auto__ = e29890;
var statearr_29891_29893 = state_29884;
(statearr_29891_29893[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_29884;
state_29884 = G__29894;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__ = function(state_29884){
switch(arguments.length){
case 0:
return gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____1.call(this,state_29884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____0;
gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____1;
return gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,vec__29875,output_organism,vals,output_organisms))
})();
var state__19186__auto__ = (function (){var statearr_29892 = f__19185__auto__.call(null);
(statearr_29892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_29892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,vec__29875,output_organism,vals,output_organisms))
);

return c__19184__auto__;
} else {
return null;
}
});})(output_organisms))
,cljs.core.deref.call(null,output_organisms)));
});
/**
 * Completes the steps required to resolve identifiers.
 *   1. Start an ID Resolution job.
 *   2. Poll the server for the job status (every 1s)
 *   3. Delete the job (side effect).
 *   4. Return results
 */
gointermod.utils.comms.resolve_ids = (function gointermod$utils$comms$resolve_ids(source,input){
console.log(cljs.core.clj__GT_js.call(null,source),cljs.core.clj__GT_js.call(null,input));

var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_30018){
var state_val_30019 = (state_30018[(1)]);
if((state_val_30019 === (7))){
var inst_30013 = (state_30018[(2)]);
var state_30018__$1 = state_30018;
var statearr_30020_30041 = state_30018__$1;
(statearr_30020_30041[(2)] = inst_30013);

(statearr_30020_30041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (1))){
var inst_29969 = (state_30018[(7)]);
var inst_29968 = gointermod.utils.comms.get_service.call(null,source);
var inst_29969__$1 = inst_29968.root;
var inst_29970 = [cljs.core.str("http://"),cljs.core.str(inst_29969__$1),cljs.core.str("/service/ids")].join('');
var inst_29971 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29972 = cljs.core.clj__GT_js.call(null,input);
var inst_29973 = [false,inst_29972];
var inst_29974 = cljs.core.PersistentHashMap.fromArrays(inst_29971,inst_29973);
var inst_29975 = cljs_http.client.post.call(null,inst_29970,inst_29974);
var state_30018__$1 = (function (){var statearr_30021 = state_30018;
(statearr_30021[(7)] = inst_29969__$1);

return statearr_30021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30018__$1,(2),inst_29975);
} else {
if((state_val_30019 === (4))){
var state_30018__$1 = state_30018;
var statearr_30022_30042 = state_30018__$1;
(statearr_30022_30042[(2)] = null);

(statearr_30022_30042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (13))){
var inst_30008 = (state_30018[(2)]);
var state_30018__$1 = (function (){var statearr_30023 = state_30018;
(statearr_30023[(8)] = inst_30008);

return statearr_30023;
})();
var statearr_30024_30043 = state_30018__$1;
(statearr_30024_30043[(2)] = null);

(statearr_30024_30043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (6))){
var inst_29969 = (state_30018[(7)]);
var inst_29979 = (state_30018[(9)]);
var inst_29982 = [cljs.core.str("http://"),cljs.core.str(inst_29969),cljs.core.str("/service/ids/"),cljs.core.str(inst_29979),cljs.core.str("/status")].join('');
var inst_29983 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_29984 = [false];
var inst_29985 = cljs.core.PersistentHashMap.fromArrays(inst_29983,inst_29984);
var inst_29986 = cljs_http.client.get.call(null,inst_29982,inst_29985);
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30018__$1,(8),inst_29986);
} else {
if((state_val_30019 === (3))){
var state_30018__$1 = state_30018;
var statearr_30025_30044 = state_30018__$1;
(statearr_30025_30044[(2)] = null);

(statearr_30025_30044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (12))){
var inst_29969 = (state_30018[(7)]);
var inst_29979 = (state_30018[(9)]);
var inst_29999 = (state_30018[(2)]);
var inst_30000 = [cljs.core.str("http://"),cljs.core.str(inst_29969),cljs.core.str("/service/ids/"),cljs.core.str(inst_29979)].join('');
var inst_30001 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_30002 = [false];
var inst_30003 = cljs.core.PersistentHashMap.fromArrays(inst_30001,inst_30002);
var inst_30004 = cljs_http.client.delete$.call(null,inst_30000,inst_30003);
var state_30018__$1 = (function (){var statearr_30026 = state_30018;
(statearr_30026[(10)] = inst_30004);

return statearr_30026;
})();
var statearr_30027_30045 = state_30018__$1;
(statearr_30027_30045[(2)] = inst_29999);

(statearr_30027_30045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (2))){
var inst_29979 = (state_30018[(9)]);
var inst_29977 = (state_30018[(2)]);
var inst_29978 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29977);
var inst_29979__$1 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_29978);
var state_30018__$1 = (function (){var statearr_30028 = state_30018;
(statearr_30028[(9)] = inst_29979__$1);

return statearr_30028;
})();
if(cljs.core.truth_(inst_29979__$1)){
var statearr_30029_30046 = state_30018__$1;
(statearr_30029_30046[(1)] = (3));

} else {
var statearr_30030_30047 = state_30018__$1;
(statearr_30030_30047[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (11))){
var inst_30011 = (state_30018[(2)]);
var state_30018__$1 = state_30018;
var statearr_30031_30048 = state_30018__$1;
(statearr_30031_30048[(2)] = inst_30011);

(statearr_30031_30048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30019 === (9))){
var inst_29969 = (state_30018[(7)]);
var inst_29979 = (state_30018[(9)]);
var inst_29993 = [cljs.core.str("http://"),cljs.core.str(inst_29969),cljs.core.str("/service/ids/"),cljs.core.str(inst_29979),cljs.core.str("/results")].join('');
var inst_29994 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_29995 = [false];
var inst_29996 = cljs.core.PersistentHashMap.fromArrays(inst_29994,inst_29995);
var inst_29997 = cljs_http.client.get.call(null,inst_29993,inst_29996);
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30018__$1,(12),inst_29997);
} else {
if((state_val_30019 === (5))){
var inst_30016 = (state_30018[(2)]);
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30018__$1,inst_30016);
} else {
if((state_val_30019 === (10))){
var inst_30006 = cljs.core.async.timeout.call(null,(1000));
var state_30018__$1 = state_30018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30018__$1,(13),inst_30006);
} else {
if((state_val_30019 === (8))){
var inst_29988 = (state_30018[(2)]);
var inst_29989 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29988);
var inst_29990 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29989);
var inst_29991 = cljs.core._EQ_.call(null,"SUCCESS",inst_29990);
var state_30018__$1 = state_30018;
if(inst_29991){
var statearr_30032_30049 = state_30018__$1;
(statearr_30032_30049[(1)] = (9));

} else {
var statearr_30033_30050 = state_30018__$1;
(statearr_30033_30050[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____0 = (function (){
var statearr_30037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30037[(0)] = gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__);

(statearr_30037[(1)] = (1));

return statearr_30037;
});
var gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____1 = (function (state_30018){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_30018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e30038){if((e30038 instanceof Object)){
var ex__19167__auto__ = e30038;
var statearr_30039_30051 = state_30018;
(statearr_30039_30051[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30052 = state_30018;
state_30018 = G__30052;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__ = function(state_30018){
switch(arguments.length){
case 0:
return gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____1.call(this,state_30018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____0;
gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____1;
return gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_30040 = f__19185__auto__.call(null);
(statearr_30040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_30040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});
/**
 * Resolves an ID or set of IDs from Intermine.
 */
gointermod.utils.comms.resolve_id = (function gointermod$utils$comms$resolve_id(source,input){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (1))){
var inst_30085 = [new cljs.core.Keyword(null,"identifiers","identifiers",-2057597722),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"caseSensitive","caseSensitive",-586669673),new cljs.core.Keyword(null,"wildCards","wildCards",-2054689560),new cljs.core.Keyword(null,"extra","extra",1612569067)];
var inst_30086 = typeof input === 'string';
var state_30103__$1 = (function (){var statearr_30105 = state_30103;
(statearr_30105[(7)] = inst_30085);

return statearr_30105;
})();
if(cljs.core.truth_(inst_30086)){
var statearr_30106_30117 = state_30103__$1;
(statearr_30106_30117[(1)] = (3));

} else {
var statearr_30107_30118 = state_30103__$1;
(statearr_30107_30118[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (2))){
var inst_30099 = (state_30103[(2)]);
var inst_30100 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30099);
var inst_30101 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_30100);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (3))){
var inst_30088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30089 = [input];
var inst_30090 = (new cljs.core.PersistentVector(null,1,(5),inst_30088,inst_30089,null));
var state_30103__$1 = state_30103;
var statearr_30108_30119 = state_30103__$1;
(statearr_30108_30119[(2)] = inst_30090);

(statearr_30108_30119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (4))){
var state_30103__$1 = state_30103;
var statearr_30109_30120 = state_30103__$1;
(statearr_30109_30120[(2)] = input);

(statearr_30109_30120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (5))){
var inst_30085 = (state_30103[(7)]);
var inst_30093 = (state_30103[(2)]);
var inst_30094 = gointermod.utils.utils.get_abbrev.call(null,source);
var inst_30095 = [inst_30093,"Gene",false,true,inst_30094];
var inst_30096 = cljs.core.PersistentHashMap.fromArrays(inst_30085,inst_30095);
var inst_30097 = gointermod.utils.comms.resolve_ids.call(null,source,inst_30096);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(2),inst_30097);
} else {
return null;
}
}
}
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null,null];
(statearr_30113[(0)] = gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____1 = (function (state_30103){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_30103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__19167__auto__ = e30114;
var statearr_30115_30121 = state_30103;
(statearr_30115_30121[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30122 = state_30103;
state_30103 = G__30122;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____0;
gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____1;
return gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_30116 = f__19185__auto__.call(null);
(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});
/**
 * Get the results of using a list enrichment widget to calculate statistics for a set of objects.
 */
gointermod.utils.comms.enrichment = (function gointermod$utils$comms$enrichment(p__30123,p__30124){
var map__30157 = p__30123;
var map__30157__$1 = ((((!((map__30157 == null)))?((((map__30157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30157):map__30157);
var map__30158 = cljs.core.get.call(null,map__30157__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var map__30158__$1 = ((((!((map__30158 == null)))?((((map__30158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30158):map__30158);
var root = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var token = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var map__30159 = p__30124;
var map__30159__$1 = ((((!((map__30159 == null)))?((((map__30159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);
var ids = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var widget = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
var maxp = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"maxp","maxp",-1041949792));
var correction = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"correction","correction",-1158421777));
cljs.core.println.call(null,"ids",ids);

var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,map__30157,map__30157__$1,map__30158,map__30158__$1,root,token,map__30159,map__30159__$1,ids,widget,maxp,correction){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,map__30157,map__30157__$1,map__30158,map__30158__$1,root,token,map__30159,map__30159__$1,ids,widget,maxp,correction){
return (function (state_30180){
var state_val_30181 = (state_30180[(1)]);
if((state_val_30181 === (1))){
var inst_30163 = [cljs.core.str("http://"),cljs.core.str(root),cljs.core.str("/service/list/enrichment")].join('');
var inst_30164 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_30165 = [new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.Keyword(null,"maxp","maxp",-1041949792),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"correction","correction",-1158421777)];
var inst_30166 = [widget,maxp,"json",correction];
var inst_30167 = cljs.core.PersistentHashMap.fromArrays(inst_30165,inst_30166);
var inst_30168 = [new cljs.core.Keyword(null,"ids","ids",-998535796)];
var inst_30169 = clojure.string.join.call(null,",",ids);
var inst_30170 = [inst_30169];
var inst_30171 = cljs.core.PersistentHashMap.fromArrays(inst_30168,inst_30170);
var inst_30172 = cljs.core.merge.call(null,inst_30167,inst_30171);
var inst_30173 = [false,true,inst_30172];
var inst_30174 = cljs.core.PersistentHashMap.fromArrays(inst_30164,inst_30173);
var inst_30175 = cljs_http.client.post.call(null,inst_30163,inst_30174);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30180__$1,(2),inst_30175);
} else {
if((state_val_30181 === (2))){
var inst_30177 = (state_30180[(2)]);
var inst_30178 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30177);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30180__$1,inst_30178);
} else {
return null;
}
}
});})(c__19184__auto__,map__30157,map__30157__$1,map__30158,map__30158__$1,root,token,map__30159,map__30159__$1,ids,widget,maxp,correction))
;
return ((function (switch__19163__auto__,c__19184__auto__,map__30157,map__30157__$1,map__30158,map__30158__$1,root,token,map__30159,map__30159__$1,ids,widget,maxp,correction){
return (function() {
var gointermod$utils$comms$enrichment_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$enrichment_$_state_machine__19164__auto____0 = (function (){
var statearr_30185 = [null,null,null,null,null,null,null];
(statearr_30185[(0)] = gointermod$utils$comms$enrichment_$_state_machine__19164__auto__);

(statearr_30185[(1)] = (1));

return statearr_30185;
});
var gointermod$utils$comms$enrichment_$_state_machine__19164__auto____1 = (function (state_30180){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_30180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e30186){if((e30186 instanceof Object)){
var ex__19167__auto__ = e30186;
var statearr_30187_30189 = state_30180;
(statearr_30187_30189[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30190 = state_30180;
state_30180 = G__30190;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$enrichment_$_state_machine__19164__auto__ = function(state_30180){
switch(arguments.length){
case 0:
return gointermod$utils$comms$enrichment_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$enrichment_$_state_machine__19164__auto____1.call(this,state_30180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$enrichment_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$enrichment_$_state_machine__19164__auto____0;
gointermod$utils$comms$enrichment_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$enrichment_$_state_machine__19164__auto____1;
return gointermod$utils$comms$enrichment_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,map__30157,map__30157__$1,map__30158,map__30158__$1,root,token,map__30159,map__30159__$1,ids,widget,maxp,correction))
})();
var state__19186__auto__ = (function (){var statearr_30188 = f__19185__auto__.call(null);
(statearr_30188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,map__30157,map__30157__$1,map__30158,map__30158__$1,root,token,map__30159,map__30159__$1,ids,widget,maxp,correction))
);

return c__19184__auto__;
});

//# sourceMappingURL=comms.js.map?rel=1462956079706