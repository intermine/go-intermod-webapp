// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.search.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.db');
goog.require('gointermod.utils.utils');
goog.require('cljs.core.async');
goog.require('gointermod.utils.comms');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-evidence-codes","toggle-evidence-codes",-404798881),(function (db,p__30193){
var vec__30194 = p__30193;
var _ = cljs.core.nth.call(null,vec__30194,(0),null);
var args = cljs.core.nth.call(null,vec__30194,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"expand-evidence-codes?","expand-evidence-codes?",-763768372),cljs.core.not.call(null,new cljs.core.Keyword(null,"expand-evidence-codes?","expand-evidence-codes?",-763768372).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-evidence-code","toggle-evidence-code",-2059997943),(function (db,p__30195){
var vec__30196 = p__30195;
var _ = cljs.core.nth.call(null,vec__30196,(0),null);
var index = cljs.core.nth.call(null,vec__30196,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evidence-codes","evidence-codes",1390569596),index,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-output-organism","toggle-output-organism",836301349),(function (db,p__30197){
var vec__30198 = p__30197;
var _ = cljs.core.nth.call(null,vec__30198,(0),null);
var organism = cljs.core.nth.call(null,vec__30198,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703),organism,new cljs.core.Keyword(null,"output?","output?",911035219)], null),cljs.core.not);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-input-organism","select-input-organism",832666437),(function (db,p__30199){
var vec__30200 = p__30199;
var _ = cljs.core.nth.call(null,vec__30200,(0),null);
var organism = cljs.core.nth.call(null,vec__30200,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-organism","selected-organism",-197871422),cljs.core.keyword.call(null,organism));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__30201){
var vec__30202 = p__30201;
var _ = cljs.core.nth.call(null,vec__30202,(0),null);
var term = cljs.core.nth.call(null,vec__30202,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),term);
}));
gointermod.search.handlers.aggregate_by_orthologue = (function gointermod$search$handlers$aggregate_by_orthologue(search_results){

return cljs.core.reduce.call(null,(function (new_map,result){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,new_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-ortholog-id","display-ortholog-id",234365334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"ontology-branch","ontology-branch",102202782).cljs$core$IFn$_invoke$arity$1(result)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-ortholog-id","display-ortholog-id",234365334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-ortholog-id","display-ortholog-id",234365334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"dataset","dataset",1159262238)], null),new cljs.core.Keyword(null,"data-set-name","data-set-name",-1516100965).cljs$core$IFn$_invoke$arity$1(result)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-ortholog-id","display-ortholog-id",234365334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"original-id","original-id",-1395890821)], null),new cljs.core.Keyword(null,"display-original-id","display-original-id",-423176168).cljs$core$IFn$_invoke$arity$1(result));
}),cljs.core.PersistentArrayMap.EMPTY,search_results);
});
gointermod.search.handlers.resultset_to_map = (function gointermod$search$handlers$resultset_to_map(results){

return cljs.core.map.call(null,(function (result){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"original-symbol","original-symbol",-1613591872),new cljs.core.Keyword(null,"ortho-secondary-id","ortho-secondary-id",-1879594654),new cljs.core.Keyword(null,"ortho-organism","ortho-organism",762660355),new cljs.core.Keyword(null,"go-term","go-term",250143271),new cljs.core.Keyword(null,"go-id","go-id",-2085429428),new cljs.core.Keyword(null,"original-primary-id","original-primary-id",95386255),new cljs.core.Keyword(null,"original-organism","original-organism",872207312),new cljs.core.Keyword(null,"ortho-db-id","ortho-db-id",-1244175468),new cljs.core.Keyword(null,"display-ortholog-id","display-ortholog-id",234365334),new cljs.core.Keyword(null,"display-original-id","display-original-id",-423176168),new cljs.core.Keyword(null,"data-set-url","data-set-url",-858406536),new cljs.core.Keyword(null,"original-db-id","original-db-id",-356828230),new cljs.core.Keyword(null,"data-set-name","data-set-name",-1516100965),new cljs.core.Keyword(null,"original-secondary-id","original-secondary-id",-2037571781),new cljs.core.Keyword(null,"ontology-branch","ontology-branch",102202782),new cljs.core.Keyword(null,"ortho-primary-id","ortho-primary-id",106947134),new cljs.core.Keyword(null,"ortho-symbol","ortho-symbol",726932671),new cljs.core.Keyword(null,"results","results",-1134170113)],[cljs.core.get.call(null,result,(9)),cljs.core.get.call(null,result,(2)),cljs.core.get.call(null,result,(4)),cljs.core.get.call(null,result,(18)),cljs.core.get.call(null,result,(17)),cljs.core.get.call(null,result,(7)),cljs.core.get.call(null,result,(10)),cljs.core.get.call(null,result,(0)),gointermod.utils.utils.get_id.call(null,result,new cljs.core.Keyword(null,"ortholog","ortholog",-1829675822)),gointermod.utils.utils.get_id.call(null,result,new cljs.core.Keyword(null,"original","original",-445386197)),cljs.core.get.call(null,result,(13)),cljs.core.get.call(null,result,(6)),cljs.core.get.call(null,result,(12)),cljs.core.get.call(null,result,(8)),cljs.core.get.call(null,result,(19)),cljs.core.get.call(null,result,(3)),cljs.core.get.call(null,result,(1)),result]);
}),results);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"concat-results","concat-results",266364004),(function (db,p__30203){
var vec__30204 = p__30203;
var _ = cljs.core.nth.call(null,vec__30204,(0),null);
var search_results = cljs.core.nth.call(null,vec__30204,(1),null);
var source = cljs.core.nth.call(null,vec__30204,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregate-heatmap-results","aggregate-heatmap-results",-1585485743)], null));

var mapped_results = gointermod.search.handlers.resultset_to_map.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(search_results));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-mine-results","multi-mine-results",1095589949),source], null),mapped_results),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-mine-aggregate","multi-mine-aggregate",-1950286882),source], null),gointermod.search.handlers.aggregate_by_orthologue.call(null,mapped_results));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"perform-search","perform-search",-1935380727),(function (db,p__30205){
var vec__30206 = p__30205;
var _ = cljs.core.nth.call(null,vec__30206,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30206,(1),null);
var c__19184__auto___30220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___30220,vec__30206,_,___$1){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___30220,vec__30206,_,___$1){
return (function (state_30211){
var state_val_30212 = (state_30211[(1)]);
if((state_val_30212 === (1))){
var inst_30207 = new cljs.core.Keyword(null,"selected-organism","selected-organism",-197871422).cljs$core$IFn$_invoke$arity$1(db);
var inst_30208 = new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(db);
var inst_30209 = gointermod.utils.comms.query_all_selected_organisms.call(null,inst_30207,inst_30208);
var state_30211__$1 = state_30211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30211__$1,inst_30209);
} else {
return null;
}
});})(c__19184__auto___30220,vec__30206,_,___$1))
;
return ((function (switch__19163__auto__,c__19184__auto___30220,vec__30206,_,___$1){
return (function() {
var gointermod$search$handlers$state_machine__19164__auto__ = null;
var gointermod$search$handlers$state_machine__19164__auto____0 = (function (){
var statearr_30216 = [null,null,null,null,null,null,null];
(statearr_30216[(0)] = gointermod$search$handlers$state_machine__19164__auto__);

(statearr_30216[(1)] = (1));

return statearr_30216;
});
var gointermod$search$handlers$state_machine__19164__auto____1 = (function (state_30211){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_30211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e30217){if((e30217 instanceof Object)){
var ex__19167__auto__ = e30217;
var statearr_30218_30221 = state_30211;
(statearr_30218_30221[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30222 = state_30211;
state_30211 = G__30222;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$search$handlers$state_machine__19164__auto__ = function(state_30211){
switch(arguments.length){
case 0:
return gointermod$search$handlers$state_machine__19164__auto____0.call(this);
case 1:
return gointermod$search$handlers$state_machine__19164__auto____1.call(this,state_30211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$search$handlers$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$search$handlers$state_machine__19164__auto____0;
gointermod$search$handlers$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$search$handlers$state_machine__19164__auto____1;
return gointermod$search$handlers$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___30220,vec__30206,_,___$1))
})();
var state__19186__auto__ = (function (){var statearr_30219 = f__19185__auto__.call(null);
(statearr_30219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___30220);

return statearr_30219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___30220,vec__30206,_,___$1))
);


return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"multi-mine-results","multi-mine-results",1095589949),new cljs.core.Keyword(null,"multi-mine-aggregate","multi-mine-aggregate",-1950286882));
}));

//# sourceMappingURL=handlers.js.map?rel=1462956079768