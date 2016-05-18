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
var G__29597__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29598__i = 0, G__29598__a = new Array(arguments.length -  0);
while (G__29598__i < G__29598__a.length) {G__29598__a[G__29598__i] = arguments[G__29598__i + 0]; ++G__29598__i;}
  args = new cljs.core.IndexedSeq(G__29598__a,0);
} 
return G__29597__delegate.call(this,args);};
G__29597.cljs$lang$maxFixedArity = 0;
G__29597.cljs$lang$applyTo = (function (arglist__29599){
var args = cljs.core.seq(arglist__29599);
return G__29597__delegate(args);
});
G__29597.cljs$core$IFn$_invoke$arity$variadic = G__29597__delegate;
return G__29597;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29600__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29601__i = 0, G__29601__a = new Array(arguments.length -  0);
while (G__29601__i < G__29601__a.length) {G__29601__a[G__29601__i] = arguments[G__29601__i + 0]; ++G__29601__i;}
  args = new cljs.core.IndexedSeq(G__29601__a,0);
} 
return G__29600__delegate.call(this,args);};
G__29600.cljs$lang$maxFixedArity = 0;
G__29600.cljs$lang$applyTo = (function (arglist__29602){
var args = cljs.core.seq(arglist__29602);
return G__29600__delegate(args);
});
G__29600.cljs$core$IFn$_invoke$arity$variadic = G__29600__delegate;
return G__29600;
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

//# sourceMappingURL=debug.js.map?rel=1463388060978