// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.search.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"evidence-codes","evidence-codes",1390569596),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"evidence-codes","evidence-codes",1390569596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
gointermod.search.subs.get_active_evidence_codes = (function gointermod$search$subs$get_active_evidence_codes(evidence_codes){

return cljs.core.reduce.call(null,(function (new_vec,code){
if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(code))){
return cljs.core.conj.call(null,new_vec,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(code));
} else {
return new_vec;
}
}),cljs.core.PersistentVector.EMPTY,evidence_codes);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-evidence-codes","active-evidence-codes",1701297813),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return gointermod.search.subs.get_active_evidence_codes.call(null,new cljs.core.Keyword(null,"evidence-codes","evidence-codes",1390569596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"expand-evidence-codes?","expand-evidence-codes?",-763768372),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"expand-evidence-codes?","expand-evidence-codes?",-763768372).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"initialised","initialised",-1792259028),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"initialised","initialised",-1792259028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-modal","active-modal",1608517958),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"active-modal","active-modal",1608517958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"input-organism","input-organism",-416065692),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"selected-organism","selected-organism",-197871422).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"search-term","search-term",356193544),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1463582130483