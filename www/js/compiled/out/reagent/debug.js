// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__21877__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21878__i = 0, G__21878__a = new Array(arguments.length -  0);
while (G__21878__i < G__21878__a.length) {G__21878__a[G__21878__i] = arguments[G__21878__i + 0]; ++G__21878__i;}
  args = new cljs.core.IndexedSeq(G__21878__a,0);
} 
return G__21877__delegate.call(this,args);};
G__21877.cljs$lang$maxFixedArity = 0;
G__21877.cljs$lang$applyTo = (function (arglist__21879){
var args = cljs.core.seq(arglist__21879);
return G__21877__delegate(args);
});
G__21877.cljs$core$IFn$_invoke$arity$variadic = G__21877__delegate;
return G__21877;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21880__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21881__i = 0, G__21881__a = new Array(arguments.length -  0);
while (G__21881__i < G__21881__a.length) {G__21881__a[G__21881__i] = arguments[G__21881__i + 0]; ++G__21881__i;}
  args = new cljs.core.IndexedSeq(G__21881__a,0);
} 
return G__21880__delegate.call(this,args);};
G__21880.cljs$lang$maxFixedArity = 0;
G__21880.cljs$lang$applyTo = (function (arglist__21882){
var args = cljs.core.seq(arglist__21882);
return G__21880__delegate(args);
});
G__21880.cljs$core$IFn$_invoke$arity$variadic = G__21880__delegate;
return G__21880;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1462895592972