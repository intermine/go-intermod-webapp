// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.utils.utils');
goog.require('cljs.core');
goog.require('re_frame.core');
gointermod.utils.utils.get_id = (function gointermod$utils$utils$get_id(var_args){
var args26305 = [];
var len__17863__auto___26308 = arguments.length;
var i__17864__auto___26309 = (0);
while(true){
if((i__17864__auto___26309 < len__17863__auto___26308)){
args26305.push((arguments[i__17864__auto___26309]));

var G__26310 = (i__17864__auto___26309 + (1));
i__17864__auto___26309 = G__26310;
continue;
} else {
}
break;
}

var G__26307 = args26305.length;
switch (G__26307) {
case 2:
return gointermod.utils.utils.get_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return gointermod.utils.utils.get_id.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26305.length)].join('')));

}
});

gointermod.utils.utils.get_id.cljs$core$IFn$_invoke$arity$2 = (function (resultvec,original_or_ortholog){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ortholog","ortholog",-1829675822),original_or_ortholog)){
return gointermod.utils.utils.get_id.call(null,cljs.core.get.call(null,resultvec,(3)),cljs.core.get.call(null,resultvec,(2)),cljs.core.get.call(null,resultvec,(1)),cljs.core.get.call(null,resultvec,(4)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"original","original",-445386197),original_or_ortholog)){
return gointermod.utils.utils.get_id.call(null,cljs.core.get.call(null,resultvec,(7)),cljs.core.get.call(null,resultvec,(8)),cljs.core.get.call(null,resultvec,(9)),cljs.core.get.call(null,resultvec,(10)));
} else {
return null;
}
}
});

gointermod.utils.utils.get_id.cljs$core$IFn$_invoke$arity$4 = (function (primary,secondary,symbol,organism){

if(cljs.core._EQ_.call(null,organism,"S. cerevisiae")){
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [secondary,symbol,primary], null)));
} else {
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [symbol,secondary,primary], null)));
}
});

gointermod.utils.utils.get_id.cljs$lang$maxFixedArity = 4;
gointermod.utils.utils.get_organism_details_by_name = (function gointermod$utils$utils$get_organism_details_by_name(organism_name){
var organisms = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
return cljs.core.filter.call(null,((function (organisms){
return (function (p__26314){
var vec__26315 = p__26314;
var organism = cljs.core.nth.call(null,vec__26315,(0),null);
var vals = cljs.core.nth.call(null,vec__26315,(1),null);
return cljs.core._EQ_.call(null,organism_name,new cljs.core.Keyword(null,"abbrev","abbrev",10803847).cljs$core$IFn$_invoke$arity$1(vals));
});})(organisms))
,cljs.core.deref.call(null,organisms));
});
gointermod.utils.utils.get_abbrev = (function gointermod$utils$utils$get_abbrev(source){
var mines = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
var organism = new cljs.core.Keyword(null,"abbrev","abbrev",10803847).cljs$core$IFn$_invoke$arity$1(source.call(null,cljs.core.deref.call(null,mines)));
return cljs.core.clj__GT_js.call(null,organism);
});
gointermod.utils.utils.organism_name_to_id = (function gointermod$utils$utils$organism_name_to_id(organism_name){
var vec__26318 = gointermod.utils.utils.get_organism_details_by_name.call(null,organism_name);
var vec__26319 = cljs.core.nth.call(null,vec__26318,(0),null);
var organism = cljs.core.nth.call(null,vec__26319,(0),null);
var details = cljs.core.nth.call(null,vec__26319,(1),null);
var x = cljs.core.nth.call(null,vec__26318,(1),null);
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(details);
});
gointermod.utils.utils.loader = (function gointermod$utils$utils$loader(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.worm.loader-organism","div.worm.loader-organism",-1547606332)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zebra.loader-organism","div.zebra.loader-organism",-391606499)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.human.loader-organism","div.human.loader-organism",-474260488)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.yeast.loader-organism","div.yeast.loader-organism",-1172608455)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rat.loader-organism","div.rat.loader-organism",-355785678)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mouse.loader-organism","div.mouse.loader-organism",-1248751381)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fly.loader-organism","div.fly.loader-organism",197528597)], null)], null);
});

//# sourceMappingURL=utils.js.map?rel=1463581198927