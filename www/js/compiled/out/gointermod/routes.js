// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
gointermod.routes.hook_browser_navigation_BANG_ = (function gointermod$routes$hook_browser_navigation_BANG_(){
var G__22471 = (new goog.History());
goog.events.listen(G__22471,goog.history.EventType.NAVIGATE,((function (G__22471){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__22471))
);

G__22471.setEnabled(true);

return G__22471;
});
gointermod.routes.app_routes = (function gointermod$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__18071__auto___22496 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__22484 = params__18072__auto__;
var map__22484__$1 = ((((!((map__22484 == null)))?((((map__22484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22484):map__22484);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__22486 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18071__auto___22496);


var action__18071__auto___22497 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__22487 = params__18072__auto__;
var map__22487__$1 = ((((!((map__22487 == null)))?((((map__22487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22487):map__22487);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"heatmap","heatmap",-7865851)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__22489 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"heatmap","heatmap",-7865851)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heatmap",action__18071__auto___22497);


var action__18071__auto___22498 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__22490 = params__18072__auto__;
var map__22490__$1 = ((((!((map__22490 == null)))?((((map__22490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22490):map__22490);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ontology","ontology",1513220453)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__22492 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ontology","ontology",1513220453)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ontology",action__18071__auto___22498);


var action__18071__auto___22499 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__22493 = params__18072__auto__;
var map__22493__$1 = ((((!((map__22493 == null)))?((((map__22493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22493):map__22493);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__22495 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/enrichment",action__18071__auto___22499);


return gointermod.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1462895594321