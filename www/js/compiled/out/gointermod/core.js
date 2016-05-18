// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gointermod.views');
goog.require('gointermod.routes');
goog.require('gointermod.subs');
goog.require('gointermod.config');
goog.require('gointermod.handlers');
goog.require('re_frame.core');
if(cljs.core.truth_(gointermod.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
gointermod.core.mount_root = (function gointermod$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.views.main_panel], null),document.getElementById("app"));
});
gointermod.core.init = (function gointermod$core$init(){
gointermod.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return gointermod.core.mount_root.call(null);
});
goog.exportSymbol('gointermod.core.init', gointermod.core.init);

//# sourceMappingURL=core.js.map?rel=1463582264005