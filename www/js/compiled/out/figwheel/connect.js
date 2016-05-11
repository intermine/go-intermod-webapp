// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('gointermod.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30314__delegate = function (x){
if(cljs.core.truth_(gointermod.core.mount_root)){
return cljs.core.apply.call(null,gointermod.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'gointermod.core/mount-root' is missing");
}
};
var G__30314 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__30315__i = 0, G__30315__a = new Array(arguments.length -  0);
while (G__30315__i < G__30315__a.length) {G__30315__a[G__30315__i] = arguments[G__30315__i + 0]; ++G__30315__i;}
  x = new cljs.core.IndexedSeq(G__30315__a,0);
} 
return G__30314__delegate.call(this,x);};
G__30314.cljs$lang$maxFixedArity = 0;
G__30314.cljs$lang$applyTo = (function (arglist__30316){
var x = cljs.core.seq(arglist__30316);
return G__30314__delegate(x);
});
G__30314.cljs$core$IFn$_invoke$arity$variadic = G__30314__delegate;
return G__30314;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1462956181148