// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.orthologresults.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.walk');
goog.require('gointermod.db');
gointermod.orthologresults.handlers.set_all_aggregate_results_to = (function gointermod$orthologresults$handlers$set_all_aggregate_results_to(the_boolean,db){

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-mine-aggregate","multi-mine-aggregate",-1950286882)], null),(function (m){
return clojure.walk.postwalk.call(null,(function (x){
if((cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043)))){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043),the_boolean);
} else {
return x;
}
}),m);
})),new cljs.core.Keyword(null,"are-all-orthologs-selected?","are-all-orthologs-selected?",1752058993),the_boolean);
});
gointermod.orthologresults.handlers.are_all_selected_QMARK_ = (function gointermod$orthologresults$handlers$are_all_selected_QMARK_(results){

var all_selected_QMARK_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (all_selected_QMARK_){
return (function (p__26620,x){
var vec__26621 = p__26620;
var organism = cljs.core.nth.call(null,vec__26621,(0),null);
var org_details = cljs.core.nth.call(null,vec__26621,(1),null);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (vec__26621,organism,org_details,all_selected_QMARK_){
return (function (p__26622,y){
var vec__26623 = p__26622;
var ortholog = cljs.core.nth.call(null,vec__26623,(0),null);
var orth_details = cljs.core.nth.call(null,vec__26623,(1),null);
return cljs.core.swap_BANG_.call(null,all_selected_QMARK_,cljs.core.conj,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043).cljs$core$IFn$_invoke$arity$1(orth_details));
});})(vec__26621,organism,org_details,all_selected_QMARK_))
,org_details));
});})(all_selected_QMARK_))
,results));

return cljs.core.reduce.call(null,((function (all_selected_QMARK_){
return (function (a,b){
var and__16793__auto__ = a;
if(cljs.core.truth_(and__16793__auto__)){
return b;
} else {
return and__16793__auto__;
}
});})(all_selected_QMARK_))
,cljs.core.deref.call(null,all_selected_QMARK_));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-select-all","toggle-select-all",710721078),(function (db,p__26624){
var vec__26625 = p__26624;
var _ = cljs.core.nth.call(null,vec__26625,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26625,(1),null);
if(cljs.core.truth_(gointermod.orthologresults.handlers.are_all_selected_QMARK_.call(null,new cljs.core.Keyword(null,"multi-mine-aggregate","multi-mine-aggregate",-1950286882).cljs$core$IFn$_invoke$arity$1(db)))){
return gointermod.orthologresults.handlers.set_all_aggregate_results_to.call(null,false,db);
} else {
return gointermod.orthologresults.handlers.set_all_aggregate_results_to.call(null,true,db);
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-ortholog-result","select-ortholog-result",-181095547),(function (db,p__26626){
var vec__26627 = p__26626;
var _ = cljs.core.nth.call(null,vec__26627,(0),null);
var organism = cljs.core.nth.call(null,vec__26627,(1),null);
var ortholog = cljs.core.nth.call(null,vec__26627,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-mine-aggregate","multi-mine-aggregate",-1950286882),organism,ortholog,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043)], null),cljs.core.not);
}));

//# sourceMappingURL=handlers.js.map?rel=1462895597958