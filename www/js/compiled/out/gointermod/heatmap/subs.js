// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.heatmap.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"heatmap-aggregate","heatmap-aggregate",459262902),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"heatmap","heatmap",-7865851).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"all-results","all-results",1238854783),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"all-results","all-results",1238854783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heatmap","heatmap",-7865851).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1463388065227