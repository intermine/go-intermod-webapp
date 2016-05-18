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
return [cljs.core.str("<query model=\"genomic\" view=\"Gene.id Gene.symbol Gene.secondaryIdentifier Gene.primaryIdentifier Gene.organism.shortName Gene.organism.taxonId Gene.homologues.homologue.id Gene.homologues.homologue.primaryIdentifier Gene.homologues.homologue.secondaryIdentifier Gene.homologues.homologue.symbol Gene.homologues.homologue.organism.shortName Gene.homologues.homologue.organism.taxonId Gene.homologues.dataSets.name Gene.homologues.dataSets.url Gene.goAnnotation.evidence.code.code Gene.goAnnotation.ontologyTerm.identifier Gene.goAnnotation.ontologyTerm.name Gene.goAnnotation.ontologyTerm.namespace\" sortOrder=\"Gene.symbol ASC\" constraintLogic=\"A and B and C and D and E\" name=\"intermod_go\" >\n    <constraint path=\"Gene.goAnnotation.qualifier\" op=\"IS NULL\" code=\"B\" />\n    <constraint path=\"Gene.goAnnotation.ontologyTerm.obsolete\" op=\"=\" value=\"false\" code=\"C\" />\n    <constraint path=\"Gene.homologues.homologue\" code=\"A\" op=\"LOOKUP\" value=\""),cljs.core.str(identifier),cljs.core.str("\" extraValue=\"H. sapiens\"/>\n    <constraint path=\"Gene.organism.shortName\" code=\"D\" op=\"=\" value=\""),cljs.core.str(gointermod.utils.utils.get_abbrev.call(null,organism)),cljs.core.str("\"/>\n    <constraint path=\"Gene.goAnnotation.evidence.code.code\" op=\"ONE OF\" code=\"E\">"),cljs.core.str(evidence_codes),cljs.core.str("</constraint>\n</query>")].join('');
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
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-query","save-query",219592352),query,output_organism], null));

var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query){
return (function (state_26359){
var state_val_26360 = (state_26359[(1)]);
if((state_val_26360 === (1))){
var inst_26345 = service.root;
var inst_26346 = [cljs.core.str("http://"),cljs.core.str(inst_26345),cljs.core.str("/service/query/results")].join('');
var inst_26347 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_26348 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_26349 = [query,"json"];
var inst_26350 = cljs.core.PersistentHashMap.fromArrays(inst_26348,inst_26349);
var inst_26351 = [false,true,inst_26350];
var inst_26352 = cljs.core.PersistentHashMap.fromArrays(inst_26347,inst_26351);
var inst_26353 = cljs_http.client.post.call(null,inst_26346,inst_26352);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26359__$1,(2),inst_26353);
} else {
if((state_val_26360 === (2))){
var inst_26355 = (state_26359[(2)]);
var inst_26356 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26355);
var inst_26357 = cljs.core.js__GT_clj.call(null,inst_26356);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26359__$1,inst_26357);
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
var statearr_26364 = [null,null,null,null,null,null,null];
(statearr_26364[(0)] = gointermod$utils$comms$go_query_$_state_machine__19164__auto__);

(statearr_26364[(1)] = (1));

return statearr_26364;
});
var gointermod$utils$comms$go_query_$_state_machine__19164__auto____1 = (function (state_26359){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26365){if((e26365 instanceof Object)){
var ex__19167__auto__ = e26365;
var statearr_26366_26368 = state_26359;
(statearr_26366_26368[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26369 = state_26359;
state_26359 = G__26369;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$go_query_$_state_machine__19164__auto__ = function(state_26359){
switch(arguments.length){
case 0:
return gointermod$utils$comms$go_query_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$go_query_$_state_machine__19164__auto____1.call(this,state_26359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$go_query_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$go_query_$_state_machine__19164__auto____0;
gointermod$utils$comms$go_query_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$go_query_$_state_machine__19164__auto____1;
return gointermod$utils$comms$go_query_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query))
})();
var state__19186__auto__ = (function (){var statearr_26367 = f__19185__auto__.call(null);
(statearr_26367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,service,evidence_codes,evidence_code_constraint_values,query))
);

return c__19184__auto__;
});
gointermod.utils.comms.query_all_selected_organisms = (function gointermod$utils$comms$query_all_selected_organisms(input_organism,identifiers){

var output_organisms = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (output_organisms){
return (function (p__26389,stuff){
var vec__26390 = p__26389;
var output_organism = cljs.core.nth.call(null,vec__26390,(0),null);
var vals = cljs.core.nth.call(null,vec__26390,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"output?","output?",911035219).cljs$core$IFn$_invoke$arity$1(vals))){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,vec__26390,output_organism,vals,output_organisms){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,vec__26390,output_organism,vals,output_organisms){
return (function (state_26399){
var state_val_26400 = (state_26399[(1)]);
if((state_val_26400 === (1))){
var inst_26391 = gointermod.utils.comms.go_query.call(null,input_organism,identifiers,output_organism);
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26399__$1,(2),inst_26391);
} else {
if((state_val_26400 === (2))){
var inst_26393 = (state_26399[(2)]);
var inst_26394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26395 = [new cljs.core.Keyword(null,"concat-results","concat-results",266364004),inst_26393,output_organism];
var inst_26396 = (new cljs.core.PersistentVector(null,3,(5),inst_26394,inst_26395,null));
var inst_26397 = re_frame.core.dispatch.call(null,inst_26396);
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26399__$1,inst_26397);
} else {
return null;
}
}
});})(c__19184__auto__,vec__26390,output_organism,vals,output_organisms))
;
return ((function (switch__19163__auto__,c__19184__auto__,vec__26390,output_organism,vals,output_organisms){
return (function() {
var gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____0 = (function (){
var statearr_26404 = [null,null,null,null,null,null,null];
(statearr_26404[(0)] = gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__);

(statearr_26404[(1)] = (1));

return statearr_26404;
});
var gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____1 = (function (state_26399){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26405){if((e26405 instanceof Object)){
var ex__19167__auto__ = e26405;
var statearr_26406_26408 = state_26399;
(statearr_26406_26408[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26409 = state_26399;
state_26399 = G__26409;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__ = function(state_26399){
switch(arguments.length){
case 0:
return gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____1.call(this,state_26399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____0;
gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto____1;
return gointermod$utils$comms$query_all_selected_organisms_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,vec__26390,output_organism,vals,output_organisms))
})();
var state__19186__auto__ = (function (){var statearr_26407 = f__19185__auto__.call(null);
(statearr_26407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,vec__26390,output_organism,vals,output_organisms))
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
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_26533){
var state_val_26534 = (state_26533[(1)]);
if((state_val_26534 === (7))){
var inst_26528 = (state_26533[(2)]);
var state_26533__$1 = state_26533;
var statearr_26535_26556 = state_26533__$1;
(statearr_26535_26556[(2)] = inst_26528);

(statearr_26535_26556[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (1))){
var inst_26484 = (state_26533[(7)]);
var inst_26483 = gointermod.utils.comms.get_service.call(null,source);
var inst_26484__$1 = inst_26483.root;
var inst_26485 = [cljs.core.str("http://"),cljs.core.str(inst_26484__$1),cljs.core.str("/service/ids")].join('');
var inst_26486 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_26487 = cljs.core.clj__GT_js.call(null,input);
var inst_26488 = [false,inst_26487];
var inst_26489 = cljs.core.PersistentHashMap.fromArrays(inst_26486,inst_26488);
var inst_26490 = cljs_http.client.post.call(null,inst_26485,inst_26489);
var state_26533__$1 = (function (){var statearr_26536 = state_26533;
(statearr_26536[(7)] = inst_26484__$1);

return statearr_26536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26533__$1,(2),inst_26490);
} else {
if((state_val_26534 === (4))){
var state_26533__$1 = state_26533;
var statearr_26537_26557 = state_26533__$1;
(statearr_26537_26557[(2)] = null);

(statearr_26537_26557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (13))){
var inst_26523 = (state_26533[(2)]);
var state_26533__$1 = (function (){var statearr_26538 = state_26533;
(statearr_26538[(8)] = inst_26523);

return statearr_26538;
})();
var statearr_26539_26558 = state_26533__$1;
(statearr_26539_26558[(2)] = null);

(statearr_26539_26558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (6))){
var inst_26484 = (state_26533[(7)]);
var inst_26494 = (state_26533[(9)]);
var inst_26497 = [cljs.core.str("http://"),cljs.core.str(inst_26484),cljs.core.str("/service/ids/"),cljs.core.str(inst_26494),cljs.core.str("/status")].join('');
var inst_26498 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26499 = [false];
var inst_26500 = cljs.core.PersistentHashMap.fromArrays(inst_26498,inst_26499);
var inst_26501 = cljs_http.client.get.call(null,inst_26497,inst_26500);
var state_26533__$1 = state_26533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26533__$1,(8),inst_26501);
} else {
if((state_val_26534 === (3))){
var state_26533__$1 = state_26533;
var statearr_26540_26559 = state_26533__$1;
(statearr_26540_26559[(2)] = null);

(statearr_26540_26559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (12))){
var inst_26484 = (state_26533[(7)]);
var inst_26494 = (state_26533[(9)]);
var inst_26514 = (state_26533[(2)]);
var inst_26515 = [cljs.core.str("http://"),cljs.core.str(inst_26484),cljs.core.str("/service/ids/"),cljs.core.str(inst_26494)].join('');
var inst_26516 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26517 = [false];
var inst_26518 = cljs.core.PersistentHashMap.fromArrays(inst_26516,inst_26517);
var inst_26519 = cljs_http.client.delete$.call(null,inst_26515,inst_26518);
var state_26533__$1 = (function (){var statearr_26541 = state_26533;
(statearr_26541[(10)] = inst_26519);

return statearr_26541;
})();
var statearr_26542_26560 = state_26533__$1;
(statearr_26542_26560[(2)] = inst_26514);

(statearr_26542_26560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (2))){
var inst_26494 = (state_26533[(9)]);
var inst_26492 = (state_26533[(2)]);
var inst_26493 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26492);
var inst_26494__$1 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_26493);
var state_26533__$1 = (function (){var statearr_26543 = state_26533;
(statearr_26543[(9)] = inst_26494__$1);

return statearr_26543;
})();
if(cljs.core.truth_(inst_26494__$1)){
var statearr_26544_26561 = state_26533__$1;
(statearr_26544_26561[(1)] = (3));

} else {
var statearr_26545_26562 = state_26533__$1;
(statearr_26545_26562[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (11))){
var inst_26526 = (state_26533[(2)]);
var state_26533__$1 = state_26533;
var statearr_26546_26563 = state_26533__$1;
(statearr_26546_26563[(2)] = inst_26526);

(statearr_26546_26563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26534 === (9))){
var inst_26484 = (state_26533[(7)]);
var inst_26494 = (state_26533[(9)]);
var inst_26508 = [cljs.core.str("http://"),cljs.core.str(inst_26484),cljs.core.str("/service/ids/"),cljs.core.str(inst_26494),cljs.core.str("/results")].join('');
var inst_26509 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26510 = [false];
var inst_26511 = cljs.core.PersistentHashMap.fromArrays(inst_26509,inst_26510);
var inst_26512 = cljs_http.client.get.call(null,inst_26508,inst_26511);
var state_26533__$1 = state_26533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26533__$1,(12),inst_26512);
} else {
if((state_val_26534 === (5))){
var inst_26531 = (state_26533[(2)]);
var state_26533__$1 = state_26533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26533__$1,inst_26531);
} else {
if((state_val_26534 === (10))){
var inst_26521 = cljs.core.async.timeout.call(null,(1000));
var state_26533__$1 = state_26533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26533__$1,(13),inst_26521);
} else {
if((state_val_26534 === (8))){
var inst_26503 = (state_26533[(2)]);
var inst_26504 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26503);
var inst_26505 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26504);
var inst_26506 = cljs.core._EQ_.call(null,"SUCCESS",inst_26505);
var state_26533__$1 = state_26533;
if(inst_26506){
var statearr_26547_26564 = state_26533__$1;
(statearr_26547_26564[(1)] = (9));

} else {
var statearr_26548_26565 = state_26533__$1;
(statearr_26548_26565[(1)] = (10));

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
var statearr_26552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26552[(0)] = gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__);

(statearr_26552[(1)] = (1));

return statearr_26552;
});
var gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____1 = (function (state_26533){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26553){if((e26553 instanceof Object)){
var ex__19167__auto__ = e26553;
var statearr_26554_26566 = state_26533;
(statearr_26554_26566[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26567 = state_26533;
state_26533 = G__26567;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__ = function(state_26533){
switch(arguments.length){
case 0:
return gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____1.call(this,state_26533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____0;
gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto____1;
return gointermod$utils$comms$resolve_ids_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_26555 = f__19185__auto__.call(null);
(statearr_26555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26555;
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
return (function (state_26618){
var state_val_26619 = (state_26618[(1)]);
if((state_val_26619 === (1))){
var inst_26600 = [new cljs.core.Keyword(null,"identifiers","identifiers",-2057597722),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"caseSensitive","caseSensitive",-586669673),new cljs.core.Keyword(null,"wildCards","wildCards",-2054689560),new cljs.core.Keyword(null,"extra","extra",1612569067)];
var inst_26601 = typeof input === 'string';
var state_26618__$1 = (function (){var statearr_26620 = state_26618;
(statearr_26620[(7)] = inst_26600);

return statearr_26620;
})();
if(cljs.core.truth_(inst_26601)){
var statearr_26621_26632 = state_26618__$1;
(statearr_26621_26632[(1)] = (3));

} else {
var statearr_26622_26633 = state_26618__$1;
(statearr_26622_26633[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26619 === (2))){
var inst_26614 = (state_26618[(2)]);
var inst_26615 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26614);
var inst_26616 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_26615);
var state_26618__$1 = state_26618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26618__$1,inst_26616);
} else {
if((state_val_26619 === (3))){
var inst_26603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26604 = [input];
var inst_26605 = (new cljs.core.PersistentVector(null,1,(5),inst_26603,inst_26604,null));
var state_26618__$1 = state_26618;
var statearr_26623_26634 = state_26618__$1;
(statearr_26623_26634[(2)] = inst_26605);

(statearr_26623_26634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26619 === (4))){
var state_26618__$1 = state_26618;
var statearr_26624_26635 = state_26618__$1;
(statearr_26624_26635[(2)] = input);

(statearr_26624_26635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26619 === (5))){
var inst_26600 = (state_26618[(7)]);
var inst_26608 = (state_26618[(2)]);
var inst_26609 = gointermod.utils.utils.get_abbrev.call(null,source);
var inst_26610 = [inst_26608,"Gene",false,true,inst_26609];
var inst_26611 = cljs.core.PersistentHashMap.fromArrays(inst_26600,inst_26610);
var inst_26612 = gointermod.utils.comms.resolve_ids.call(null,source,inst_26611);
var state_26618__$1 = state_26618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26618__$1,(2),inst_26612);
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
var statearr_26628 = [null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____1 = (function (state_26618){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__19167__auto__ = e26629;
var statearr_26630_26636 = state_26618;
(statearr_26630_26636[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26637 = state_26618;
state_26618 = G__26637;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__ = function(state_26618){
switch(arguments.length){
case 0:
return gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____1.call(this,state_26618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____0;
gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$resolve_id_$_state_machine__19164__auto____1;
return gointermod$utils$comms$resolve_id_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_26631 = f__19185__auto__.call(null);
(statearr_26631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});
/**
 * Get the results of using a list enrichment widget to calculate statistics for a set of objects.
 */
gointermod.utils.comms.enrichment = (function gointermod$utils$comms$enrichment(p__26638,p__26639){
var map__26672 = p__26638;
var map__26672__$1 = ((((!((map__26672 == null)))?((((map__26672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672):map__26672);
var map__26673 = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var map__26673__$1 = ((((!((map__26673 == null)))?((((map__26673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26673):map__26673);
var root = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var token = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var map__26674 = p__26639;
var map__26674__$1 = ((((!((map__26674 == null)))?((((map__26674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26674):map__26674);
var ids = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var widget = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
var maxp = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"maxp","maxp",-1041949792));
var correction = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"correction","correction",-1158421777));
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,map__26672,map__26672__$1,map__26673,map__26673__$1,root,token,map__26674,map__26674__$1,ids,widget,maxp,correction){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,map__26672,map__26672__$1,map__26673,map__26673__$1,root,token,map__26674,map__26674__$1,ids,widget,maxp,correction){
return (function (state_26695){
var state_val_26696 = (state_26695[(1)]);
if((state_val_26696 === (1))){
var inst_26678 = [cljs.core.str("http://"),cljs.core.str(root),cljs.core.str("/service/list/enrichment")].join('');
var inst_26679 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_26680 = [new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.Keyword(null,"maxp","maxp",-1041949792),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"correction","correction",-1158421777)];
var inst_26681 = [widget,maxp,"json",correction];
var inst_26682 = cljs.core.PersistentHashMap.fromArrays(inst_26680,inst_26681);
var inst_26683 = [new cljs.core.Keyword(null,"ids","ids",-998535796)];
var inst_26684 = clojure.string.join.call(null,",",ids);
var inst_26685 = [inst_26684];
var inst_26686 = cljs.core.PersistentHashMap.fromArrays(inst_26683,inst_26685);
var inst_26687 = cljs.core.merge.call(null,inst_26682,inst_26686);
var inst_26688 = [false,true,inst_26687];
var inst_26689 = cljs.core.PersistentHashMap.fromArrays(inst_26679,inst_26688);
var inst_26690 = cljs_http.client.post.call(null,inst_26678,inst_26689);
var state_26695__$1 = state_26695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(2),inst_26690);
} else {
if((state_val_26696 === (2))){
var inst_26692 = (state_26695[(2)]);
var inst_26693 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26692);
var state_26695__$1 = state_26695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else {
return null;
}
}
});})(c__19184__auto__,map__26672,map__26672__$1,map__26673,map__26673__$1,root,token,map__26674,map__26674__$1,ids,widget,maxp,correction))
;
return ((function (switch__19163__auto__,c__19184__auto__,map__26672,map__26672__$1,map__26673,map__26673__$1,root,token,map__26674,map__26674__$1,ids,widget,maxp,correction){
return (function() {
var gointermod$utils$comms$enrichment_$_state_machine__19164__auto__ = null;
var gointermod$utils$comms$enrichment_$_state_machine__19164__auto____0 = (function (){
var statearr_26700 = [null,null,null,null,null,null,null];
(statearr_26700[(0)] = gointermod$utils$comms$enrichment_$_state_machine__19164__auto__);

(statearr_26700[(1)] = (1));

return statearr_26700;
});
var gointermod$utils$comms$enrichment_$_state_machine__19164__auto____1 = (function (state_26695){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26701){if((e26701 instanceof Object)){
var ex__19167__auto__ = e26701;
var statearr_26702_26704 = state_26695;
(statearr_26702_26704[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26705 = state_26695;
state_26695 = G__26705;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$utils$comms$enrichment_$_state_machine__19164__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return gointermod$utils$comms$enrichment_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$utils$comms$enrichment_$_state_machine__19164__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$utils$comms$enrichment_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$utils$comms$enrichment_$_state_machine__19164__auto____0;
gointermod$utils$comms$enrichment_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$utils$comms$enrichment_$_state_machine__19164__auto____1;
return gointermod$utils$comms$enrichment_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,map__26672,map__26672__$1,map__26673,map__26673__$1,root,token,map__26674,map__26674__$1,ids,widget,maxp,correction))
})();
var state__19186__auto__ = (function (){var statearr_26703 = f__19185__auto__.call(null);
(statearr_26703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,map__26672,map__26672__$1,map__26673,map__26673__$1,root,token,map__26674,map__26674__$1,ids,widget,maxp,correction))
);

return c__19184__auto__;
});

//# sourceMappingURL=comms.js.map?rel=1463581199104