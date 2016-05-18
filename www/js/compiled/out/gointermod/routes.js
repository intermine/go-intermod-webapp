// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
gointermod.routes.hook_browser_navigation_BANG_ = (function gointermod$routes$hook_browser_navigation_BANG_(){
var G__42712 = (new goog.History());
goog.events.listen(G__42712,goog.history.EventType.NAVIGATE,((function (G__42712){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__42712))
);

G__42712.setEnabled(true);

return G__42712;
});
gointermod.routes.app_routes = (function gointermod$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__18071__auto___42737 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__42725 = params__18072__auto__;
var map__42725__$1 = ((((!((map__42725 == null)))?((((map__42725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42725):map__42725);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__42727 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18071__auto___42737);


var action__18071__auto___42738 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__42728 = params__18072__auto__;
var map__42728__$1 = ((((!((map__42728 == null)))?((((map__42728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42728):map__42728);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"heatmap","heatmap",-7865851)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__42730 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"heatmap","heatmap",-7865851)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heatmap",action__18071__auto___42738);


var action__18071__auto___42739 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__42731 = params__18072__auto__;
var map__42731__$1 = ((((!((map__42731 == null)))?((((map__42731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42731):map__42731);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ontology","ontology",1513220453)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__42733 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"ontology","ontology",1513220453)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ontology",action__18071__auto___42739);


var action__18071__auto___42740 = (function (params__18072__auto__){
if(cljs.core.map_QMARK_.call(null,params__18072__auto__)){
var map__42734 = params__18072__auto__;
var map__42734__$1 = ((((!((map__42734 == null)))?((((map__42734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42734):map__42734);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18072__auto__)){
var vec__42736 = params__18072__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),new cljs.core.Keyword(null,"enrichment","enrichment",-925265804)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/enrichment",action__18071__auto___42740);


return gointermod.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1463500676121