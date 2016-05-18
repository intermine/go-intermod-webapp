// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.enrichment.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.db');
goog.require('gointermod.utils.comms');
goog.require('cljs.core.async');
gointermod.enrichment.handlers.filter_by_branch = (function gointermod$enrichment$handlers$filter_by_branch(results,branch){
return cljs.core.filter.call(null,(function (res){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ontology-branch","ontology-branch",102202782).cljs$core$IFn$_invoke$arity$1(res),branch);
}),results);
});
gointermod.enrichment.handlers.get_ids = (function gointermod$enrichment$handlers$get_ids(organism){
var results = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-mine-results","multi-mine-results",1095589949)], null));
var active_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-filter","active-filter",845441376)], null));
var this_resultset = organism.call(null,cljs.core.deref.call(null,results));
var filtered = gointermod.enrichment.handlers.filter_by_branch.call(null,this_resultset,cljs.core.deref.call(null,active_filter));
return cljs.core.distinct.call(null,cljs.core.reduce.call(null,((function (results,active_filter,this_resultset,filtered){
return (function (new_vec,result){
return cljs.core.conj.call(null,new_vec,new cljs.core.Keyword(null,"ortho-db-id","ortho-db-id",-1244175468).cljs$core$IFn$_invoke$arity$1(result));
});})(results,active_filter,this_resultset,filtered))
,cljs.core.PersistentVector.EMPTY,filtered));
});
gointermod.enrichment.handlers.sort_by_pval = (function gointermod$enrichment$handlers$sort_by_pval(server_response){
var results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(server_response);
return cljs.core.assoc.call(null,server_response,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"p-value","p-value",1434023819),results));
});
gointermod.enrichment.handlers.enrich = (function gointermod$enrichment$handlers$enrich(db){
var organisms = new cljs.core.Keyword(null,"organisms","organisms",-239799703).cljs$core$IFn$_invoke$arity$1(db);
var max_p = new cljs.core.Keyword(null,"max-p","max-p",1528182779).cljs$core$IFn$_invoke$arity$1(db);
var test_correction = new cljs.core.Keyword(null,"test-correction","test-correction",1270084834).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (organisms,max_p,test_correction){
return (function (p__26858){
var vec__26859 = p__26858;
var id = cljs.core.nth.call(null,vec__26859,(0),null);
var organism = cljs.core.nth.call(null,vec__26859,(1),null);
var ids = gointermod.enrichment.handlers.get_ids.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(organism));
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"output?","output?",911035219).cljs$core$IFn$_invoke$arity$1(organism);
if(cljs.core.truth_(and__16793__auto__)){
return (cljs.core.count.call(null,ids) > (1));
} else {
return and__16793__auto__;
}
})())){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,ids,vec__26859,id,organism,organisms,max_p,test_correction){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,ids,vec__26859,id,organism,organisms,max_p,test_correction){
return (function (state_26877){
var state_val_26878 = (state_26877[(1)]);
if((state_val_26878 === (1))){
var inst_26860 = new cljs.core.Keyword(null,"mine","mine",-130428525).cljs$core$IFn$_invoke$arity$1(organism);
var inst_26861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26862 = [new cljs.core.Keyword(null,"service","service",-1963054559)];
var inst_26863 = (new cljs.core.PersistentVector(null,1,(5),inst_26861,inst_26862,null));
var inst_26864 = cljs.core.select_keys.call(null,inst_26860,inst_26863);
var inst_26865 = [new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.Keyword(null,"maxp","maxp",-1041949792),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"correction","correction",-1158421777),new cljs.core.Keyword(null,"ids","ids",-998535796)];
var inst_26866 = ["go_enrichment_for_gene",max_p,"json",test_correction,ids];
var inst_26867 = cljs.core.PersistentHashMap.fromArrays(inst_26865,inst_26866);
var inst_26868 = gointermod.utils.comms.enrichment.call(null,inst_26864,inst_26867);
var state_26877__$1 = state_26877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26877__$1,(2),inst_26868);
} else {
if((state_val_26878 === (2))){
var inst_26870 = (state_26877[(2)]);
var inst_26871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26872 = gointermod.enrichment.handlers.sort_by_pval.call(null,inst_26870);
var inst_26873 = [new cljs.core.Keyword(null,"concat-enrichment-results","concat-enrichment-results",-891403502),inst_26872,id];
var inst_26874 = (new cljs.core.PersistentVector(null,3,(5),inst_26871,inst_26873,null));
var inst_26875 = re_frame.core.dispatch.call(null,inst_26874);
var state_26877__$1 = state_26877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26877__$1,inst_26875);
} else {
return null;
}
}
});})(c__19184__auto__,ids,vec__26859,id,organism,organisms,max_p,test_correction))
;
return ((function (switch__19163__auto__,c__19184__auto__,ids,vec__26859,id,organism,organisms,max_p,test_correction){
return (function() {
var gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto__ = null;
var gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto____0 = (function (){
var statearr_26882 = [null,null,null,null,null,null,null];
(statearr_26882[(0)] = gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto__);

(statearr_26882[(1)] = (1));

return statearr_26882;
});
var gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto____1 = (function (state_26877){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26883){if((e26883 instanceof Object)){
var ex__19167__auto__ = e26883;
var statearr_26884_26886 = state_26877;
(statearr_26884_26886[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26887 = state_26877;
state_26877 = G__26887;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto__ = function(state_26877){
switch(arguments.length){
case 0:
return gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto____0.call(this);
case 1:
return gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto____1.call(this,state_26877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto____0;
gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto____1;
return gointermod$enrichment$handlers$enrich_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,ids,vec__26859,id,organism,organisms,max_p,test_correction))
})();
var state__19186__auto__ = (function (){var statearr_26885 = f__19185__auto__.call(null);
(statearr_26885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,ids,vec__26859,id,organism,organisms,max_p,test_correction))
);

return c__19184__auto__;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,ids),(0))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concat-enrichment-results","concat-enrichment-results",-891403502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"There were no orthologues for this organism"], null),id], null));
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,ids),(1))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concat-enrichment-results","concat-enrichment-results",-891403502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"More than one orthologue per organism is required in order to enrich a list. Try searching for multiple genes. "], null),id], null));
} else {
return null;
}
}
}
});})(organisms,max_p,test_correction))
,organisms));
});
gointermod.enrichment.handlers.refresh_enrichment_statuses = (function gointermod$enrichment$handlers$refresh_enrichment_statuses(db){

return cljs.core.reduce.call(null,(function (new_map,p__26890){
var vec__26891 = p__26890;
var id = cljs.core.nth.call(null,vec__26891,(0),null);
var organism = cljs.core.nth.call(null,vec__26891,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"output?","output?",911035219).cljs$core$IFn$_invoke$arity$1(organism))){
return cljs.core.assoc_in.call(null,new_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"organisms","organisms",-239799703).cljs$core$IFn$_invoke$arity$1(db));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"enrich-results","enrich-results",-1335167070),(function (db,p__26892){
var vec__26893 = p__26892;
var _ = cljs.core.nth.call(null,vec__26893,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26893,(1),null);
gointermod.enrichment.handlers.enrich.call(null,db);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"enrichment","enrichment",-925265804),gointermod.enrichment.handlers.refresh_enrichment_statuses.call(null,db));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"concat-enrichment-results","concat-enrichment-results",-891403502),(function (db,p__26894){
var vec__26895 = p__26894;
var _ = cljs.core.nth.call(null,vec__26895,(0),null);
var results = cljs.core.nth.call(null,vec__26895,(1),null);
var organism = cljs.core.nth.call(null,vec__26895,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrichment","enrichment",-925265804),organism], null),results);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"test-correction","test-correction",1270084834),(function (db,p__26896){
var vec__26897 = p__26896;
var _ = cljs.core.nth.call(null,vec__26897,(0),null);
var correction_value = cljs.core.nth.call(null,vec__26897,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"test-correction","test-correction",1270084834),correction_value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"max-p","max-p",1528182779),(function (db,p__26898){
var vec__26899 = p__26898;
var _ = cljs.core.nth.call(null,vec__26899,(0),null);
var max_p_value = cljs.core.nth.call(null,vec__26899,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-p","max-p",1528182779),max_p_value);
}));

//# sourceMappingURL=handlers.js.map?rel=1463581199470