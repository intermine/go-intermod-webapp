// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.orthologresults.subs');
goog.require('gointermod.heatmap.subs');
goog.require('gointermod.search.subs');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"organisms","organisms",-239799703),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"organisms","organisms",-239799703).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"active-view","active-view",-1531689252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-filter","active-filter",845441376),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"active-filter","active-filter",845441376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"filters","filters",974726919),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
gointermod.subs.get_pretty_active_filter = (function gointermod$subs$get_pretty_active_filter(db){
var active_filter = new cljs.core.Keyword(null,"active-filter","active-filter",845441376).cljs$core$IFn$_invoke$arity$1(db);
var filters = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.call(null,filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_filter,new cljs.core.Keyword(null,"pretty-name","pretty-name",282563528)], null));
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-filter-pretty","active-filter-pretty",-1372585345),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return gointermod.subs.get_pretty_active_filter.call(null,cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1462895597595