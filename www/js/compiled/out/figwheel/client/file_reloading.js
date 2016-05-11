// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26701_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26701_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26706 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26707 = null;
var count__26708 = (0);
var i__26709 = (0);
while(true){
if((i__26709 < count__26708)){
var n = cljs.core._nth.call(null,chunk__26707,i__26709);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26710 = seq__26706;
var G__26711 = chunk__26707;
var G__26712 = count__26708;
var G__26713 = (i__26709 + (1));
seq__26706 = G__26710;
chunk__26707 = G__26711;
count__26708 = G__26712;
i__26709 = G__26713;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26706);
if(temp__4425__auto__){
var seq__26706__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26706__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__26706__$1);
var G__26714 = cljs.core.chunk_rest.call(null,seq__26706__$1);
var G__26715 = c__17608__auto__;
var G__26716 = cljs.core.count.call(null,c__17608__auto__);
var G__26717 = (0);
seq__26706 = G__26714;
chunk__26707 = G__26715;
count__26708 = G__26716;
i__26709 = G__26717;
continue;
} else {
var n = cljs.core.first.call(null,seq__26706__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26718 = cljs.core.next.call(null,seq__26706__$1);
var G__26719 = null;
var G__26720 = (0);
var G__26721 = (0);
seq__26706 = G__26718;
chunk__26707 = G__26719;
count__26708 = G__26720;
i__26709 = G__26721;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26760_26767 = cljs.core.seq.call(null,deps);
var chunk__26761_26768 = null;
var count__26762_26769 = (0);
var i__26763_26770 = (0);
while(true){
if((i__26763_26770 < count__26762_26769)){
var dep_26771 = cljs.core._nth.call(null,chunk__26761_26768,i__26763_26770);
topo_sort_helper_STAR_.call(null,dep_26771,(depth + (1)),state);

var G__26772 = seq__26760_26767;
var G__26773 = chunk__26761_26768;
var G__26774 = count__26762_26769;
var G__26775 = (i__26763_26770 + (1));
seq__26760_26767 = G__26772;
chunk__26761_26768 = G__26773;
count__26762_26769 = G__26774;
i__26763_26770 = G__26775;
continue;
} else {
var temp__4425__auto___26776 = cljs.core.seq.call(null,seq__26760_26767);
if(temp__4425__auto___26776){
var seq__26760_26777__$1 = temp__4425__auto___26776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26760_26777__$1)){
var c__17608__auto___26778 = cljs.core.chunk_first.call(null,seq__26760_26777__$1);
var G__26779 = cljs.core.chunk_rest.call(null,seq__26760_26777__$1);
var G__26780 = c__17608__auto___26778;
var G__26781 = cljs.core.count.call(null,c__17608__auto___26778);
var G__26782 = (0);
seq__26760_26767 = G__26779;
chunk__26761_26768 = G__26780;
count__26762_26769 = G__26781;
i__26763_26770 = G__26782;
continue;
} else {
var dep_26783 = cljs.core.first.call(null,seq__26760_26777__$1);
topo_sort_helper_STAR_.call(null,dep_26783,(depth + (1)),state);

var G__26784 = cljs.core.next.call(null,seq__26760_26777__$1);
var G__26785 = null;
var G__26786 = (0);
var G__26787 = (0);
seq__26760_26767 = G__26784;
chunk__26761_26768 = G__26785;
count__26762_26769 = G__26786;
i__26763_26770 = G__26787;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26764){
var vec__26766 = p__26764;
var x = cljs.core.nth.call(null,vec__26766,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26766,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26766,x,xs,get_deps__$1){
return (function (p1__26722_SHARP_){
return clojure.set.difference.call(null,p1__26722_SHARP_,x);
});})(vec__26766,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26800 = cljs.core.seq.call(null,provides);
var chunk__26801 = null;
var count__26802 = (0);
var i__26803 = (0);
while(true){
if((i__26803 < count__26802)){
var prov = cljs.core._nth.call(null,chunk__26801,i__26803);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26804_26812 = cljs.core.seq.call(null,requires);
var chunk__26805_26813 = null;
var count__26806_26814 = (0);
var i__26807_26815 = (0);
while(true){
if((i__26807_26815 < count__26806_26814)){
var req_26816 = cljs.core._nth.call(null,chunk__26805_26813,i__26807_26815);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26816,prov);

var G__26817 = seq__26804_26812;
var G__26818 = chunk__26805_26813;
var G__26819 = count__26806_26814;
var G__26820 = (i__26807_26815 + (1));
seq__26804_26812 = G__26817;
chunk__26805_26813 = G__26818;
count__26806_26814 = G__26819;
i__26807_26815 = G__26820;
continue;
} else {
var temp__4425__auto___26821 = cljs.core.seq.call(null,seq__26804_26812);
if(temp__4425__auto___26821){
var seq__26804_26822__$1 = temp__4425__auto___26821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26804_26822__$1)){
var c__17608__auto___26823 = cljs.core.chunk_first.call(null,seq__26804_26822__$1);
var G__26824 = cljs.core.chunk_rest.call(null,seq__26804_26822__$1);
var G__26825 = c__17608__auto___26823;
var G__26826 = cljs.core.count.call(null,c__17608__auto___26823);
var G__26827 = (0);
seq__26804_26812 = G__26824;
chunk__26805_26813 = G__26825;
count__26806_26814 = G__26826;
i__26807_26815 = G__26827;
continue;
} else {
var req_26828 = cljs.core.first.call(null,seq__26804_26822__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26828,prov);

var G__26829 = cljs.core.next.call(null,seq__26804_26822__$1);
var G__26830 = null;
var G__26831 = (0);
var G__26832 = (0);
seq__26804_26812 = G__26829;
chunk__26805_26813 = G__26830;
count__26806_26814 = G__26831;
i__26807_26815 = G__26832;
continue;
}
} else {
}
}
break;
}

var G__26833 = seq__26800;
var G__26834 = chunk__26801;
var G__26835 = count__26802;
var G__26836 = (i__26803 + (1));
seq__26800 = G__26833;
chunk__26801 = G__26834;
count__26802 = G__26835;
i__26803 = G__26836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26800);
if(temp__4425__auto__){
var seq__26800__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26800__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__26800__$1);
var G__26837 = cljs.core.chunk_rest.call(null,seq__26800__$1);
var G__26838 = c__17608__auto__;
var G__26839 = cljs.core.count.call(null,c__17608__auto__);
var G__26840 = (0);
seq__26800 = G__26837;
chunk__26801 = G__26838;
count__26802 = G__26839;
i__26803 = G__26840;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26800__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26808_26841 = cljs.core.seq.call(null,requires);
var chunk__26809_26842 = null;
var count__26810_26843 = (0);
var i__26811_26844 = (0);
while(true){
if((i__26811_26844 < count__26810_26843)){
var req_26845 = cljs.core._nth.call(null,chunk__26809_26842,i__26811_26844);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26845,prov);

var G__26846 = seq__26808_26841;
var G__26847 = chunk__26809_26842;
var G__26848 = count__26810_26843;
var G__26849 = (i__26811_26844 + (1));
seq__26808_26841 = G__26846;
chunk__26809_26842 = G__26847;
count__26810_26843 = G__26848;
i__26811_26844 = G__26849;
continue;
} else {
var temp__4425__auto___26850__$1 = cljs.core.seq.call(null,seq__26808_26841);
if(temp__4425__auto___26850__$1){
var seq__26808_26851__$1 = temp__4425__auto___26850__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26808_26851__$1)){
var c__17608__auto___26852 = cljs.core.chunk_first.call(null,seq__26808_26851__$1);
var G__26853 = cljs.core.chunk_rest.call(null,seq__26808_26851__$1);
var G__26854 = c__17608__auto___26852;
var G__26855 = cljs.core.count.call(null,c__17608__auto___26852);
var G__26856 = (0);
seq__26808_26841 = G__26853;
chunk__26809_26842 = G__26854;
count__26810_26843 = G__26855;
i__26811_26844 = G__26856;
continue;
} else {
var req_26857 = cljs.core.first.call(null,seq__26808_26851__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26857,prov);

var G__26858 = cljs.core.next.call(null,seq__26808_26851__$1);
var G__26859 = null;
var G__26860 = (0);
var G__26861 = (0);
seq__26808_26841 = G__26858;
chunk__26809_26842 = G__26859;
count__26810_26843 = G__26860;
i__26811_26844 = G__26861;
continue;
}
} else {
}
}
break;
}

var G__26862 = cljs.core.next.call(null,seq__26800__$1);
var G__26863 = null;
var G__26864 = (0);
var G__26865 = (0);
seq__26800 = G__26862;
chunk__26801 = G__26863;
count__26802 = G__26864;
i__26803 = G__26865;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26870_26874 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26871_26875 = null;
var count__26872_26876 = (0);
var i__26873_26877 = (0);
while(true){
if((i__26873_26877 < count__26872_26876)){
var ns_26878 = cljs.core._nth.call(null,chunk__26871_26875,i__26873_26877);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26878);

var G__26879 = seq__26870_26874;
var G__26880 = chunk__26871_26875;
var G__26881 = count__26872_26876;
var G__26882 = (i__26873_26877 + (1));
seq__26870_26874 = G__26879;
chunk__26871_26875 = G__26880;
count__26872_26876 = G__26881;
i__26873_26877 = G__26882;
continue;
} else {
var temp__4425__auto___26883 = cljs.core.seq.call(null,seq__26870_26874);
if(temp__4425__auto___26883){
var seq__26870_26884__$1 = temp__4425__auto___26883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26870_26884__$1)){
var c__17608__auto___26885 = cljs.core.chunk_first.call(null,seq__26870_26884__$1);
var G__26886 = cljs.core.chunk_rest.call(null,seq__26870_26884__$1);
var G__26887 = c__17608__auto___26885;
var G__26888 = cljs.core.count.call(null,c__17608__auto___26885);
var G__26889 = (0);
seq__26870_26874 = G__26886;
chunk__26871_26875 = G__26887;
count__26872_26876 = G__26888;
i__26873_26877 = G__26889;
continue;
} else {
var ns_26890 = cljs.core.first.call(null,seq__26870_26884__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26890);

var G__26891 = cljs.core.next.call(null,seq__26870_26884__$1);
var G__26892 = null;
var G__26893 = (0);
var G__26894 = (0);
seq__26870_26874 = G__26891;
chunk__26871_26875 = G__26892;
count__26872_26876 = G__26893;
i__26873_26877 = G__26894;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26895__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26896__i = 0, G__26896__a = new Array(arguments.length -  0);
while (G__26896__i < G__26896__a.length) {G__26896__a[G__26896__i] = arguments[G__26896__i + 0]; ++G__26896__i;}
  args = new cljs.core.IndexedSeq(G__26896__a,0);
} 
return G__26895__delegate.call(this,args);};
G__26895.cljs$lang$maxFixedArity = 0;
G__26895.cljs$lang$applyTo = (function (arglist__26897){
var args = cljs.core.seq(arglist__26897);
return G__26895__delegate(args);
});
G__26895.cljs$core$IFn$_invoke$arity$variadic = G__26895__delegate;
return G__26895;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26899 = cljs.core._EQ_;
var expr__26900 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26899.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26900))){
var path_parts = ((function (pred__26899,expr__26900){
return (function (p1__26898_SHARP_){
return clojure.string.split.call(null,p1__26898_SHARP_,/[\/\\]/);
});})(pred__26899,expr__26900))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26899,expr__26900){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26902){if((e26902 instanceof Error)){
var e = e26902;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26902;

}
}})());
});
;})(path_parts,sep,root,pred__26899,expr__26900))
} else {
if(cljs.core.truth_(pred__26899.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26900))){
return ((function (pred__26899,expr__26900){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26899,expr__26900){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26899,expr__26900))
);

return deferred.addErrback(((function (deferred,pred__26899,expr__26900){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26899,expr__26900))
);
});
;})(pred__26899,expr__26900))
} else {
return ((function (pred__26899,expr__26900){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26899,expr__26900))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26903,callback){
var map__26906 = p__26903;
var map__26906__$1 = ((((!((map__26906 == null)))?((((map__26906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26906):map__26906);
var file_msg = map__26906__$1;
var request_url = cljs.core.get.call(null,map__26906__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26906,map__26906__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26906,map__26906__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_26930){
var state_val_26931 = (state_26930[(1)]);
if((state_val_26931 === (7))){
var inst_26926 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
var statearr_26932_26952 = state_26930__$1;
(statearr_26932_26952[(2)] = inst_26926);

(statearr_26932_26952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (1))){
var state_26930__$1 = state_26930;
var statearr_26933_26953 = state_26930__$1;
(statearr_26933_26953[(2)] = null);

(statearr_26933_26953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (4))){
var inst_26910 = (state_26930[(7)]);
var inst_26910__$1 = (state_26930[(2)]);
var state_26930__$1 = (function (){var statearr_26934 = state_26930;
(statearr_26934[(7)] = inst_26910__$1);

return statearr_26934;
})();
if(cljs.core.truth_(inst_26910__$1)){
var statearr_26935_26954 = state_26930__$1;
(statearr_26935_26954[(1)] = (5));

} else {
var statearr_26936_26955 = state_26930__$1;
(statearr_26936_26955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (6))){
var state_26930__$1 = state_26930;
var statearr_26937_26956 = state_26930__$1;
(statearr_26937_26956[(2)] = null);

(statearr_26937_26956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (3))){
var inst_26928 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26930__$1,inst_26928);
} else {
if((state_val_26931 === (2))){
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26930__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26931 === (11))){
var inst_26922 = (state_26930[(2)]);
var state_26930__$1 = (function (){var statearr_26938 = state_26930;
(statearr_26938[(8)] = inst_26922);

return statearr_26938;
})();
var statearr_26939_26957 = state_26930__$1;
(statearr_26939_26957[(2)] = null);

(statearr_26939_26957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (9))){
var inst_26916 = (state_26930[(9)]);
var inst_26914 = (state_26930[(10)]);
var inst_26918 = inst_26916.call(null,inst_26914);
var state_26930__$1 = state_26930;
var statearr_26940_26958 = state_26930__$1;
(statearr_26940_26958[(2)] = inst_26918);

(statearr_26940_26958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (5))){
var inst_26910 = (state_26930[(7)]);
var inst_26912 = figwheel.client.file_reloading.blocking_load.call(null,inst_26910);
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26930__$1,(8),inst_26912);
} else {
if((state_val_26931 === (10))){
var inst_26914 = (state_26930[(10)]);
var inst_26920 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26914);
var state_26930__$1 = state_26930;
var statearr_26941_26959 = state_26930__$1;
(statearr_26941_26959[(2)] = inst_26920);

(statearr_26941_26959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (8))){
var inst_26916 = (state_26930[(9)]);
var inst_26910 = (state_26930[(7)]);
var inst_26914 = (state_26930[(2)]);
var inst_26915 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26916__$1 = cljs.core.get.call(null,inst_26915,inst_26910);
var state_26930__$1 = (function (){var statearr_26942 = state_26930;
(statearr_26942[(9)] = inst_26916__$1);

(statearr_26942[(10)] = inst_26914);

return statearr_26942;
})();
if(cljs.core.truth_(inst_26916__$1)){
var statearr_26943_26960 = state_26930__$1;
(statearr_26943_26960[(1)] = (9));

} else {
var statearr_26944_26961 = state_26930__$1;
(statearr_26944_26961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19164__auto__ = null;
var figwheel$client$file_reloading$state_machine__19164__auto____0 = (function (){
var statearr_26948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26948[(0)] = figwheel$client$file_reloading$state_machine__19164__auto__);

(statearr_26948[(1)] = (1));

return statearr_26948;
});
var figwheel$client$file_reloading$state_machine__19164__auto____1 = (function (state_26930){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_26930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e26949){if((e26949 instanceof Object)){
var ex__19167__auto__ = e26949;
var statearr_26950_26962 = state_26930;
(statearr_26950_26962[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26963 = state_26930;
state_26930 = G__26963;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19164__auto__ = function(state_26930){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19164__auto____1.call(this,state_26930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19164__auto____0;
figwheel$client$file_reloading$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19164__auto____1;
return figwheel$client$file_reloading$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_26951 = f__19185__auto__.call(null);
(statearr_26951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_26951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26964,callback){
var map__26967 = p__26964;
var map__26967__$1 = ((((!((map__26967 == null)))?((((map__26967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26967):map__26967);
var file_msg = map__26967__$1;
var namespace = cljs.core.get.call(null,map__26967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26967,map__26967__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26967,map__26967__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26969){
var map__26972 = p__26969;
var map__26972__$1 = ((((!((map__26972 == null)))?((((map__26972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26972):map__26972);
var file_msg = map__26972__$1;
var namespace = cljs.core.get.call(null,map__26972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26974,callback){
var map__26977 = p__26974;
var map__26977__$1 = ((((!((map__26977 == null)))?((((map__26977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26977):map__26977);
var file_msg = map__26977__$1;
var request_url = cljs.core.get.call(null,map__26977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19184__auto___27065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___27065,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___27065,out){
return (function (state_27047){
var state_val_27048 = (state_27047[(1)]);
if((state_val_27048 === (1))){
var inst_27025 = cljs.core.nth.call(null,files,(0),null);
var inst_27026 = cljs.core.nthnext.call(null,files,(1));
var inst_27027 = files;
var state_27047__$1 = (function (){var statearr_27049 = state_27047;
(statearr_27049[(7)] = inst_27026);

(statearr_27049[(8)] = inst_27025);

(statearr_27049[(9)] = inst_27027);

return statearr_27049;
})();
var statearr_27050_27066 = state_27047__$1;
(statearr_27050_27066[(2)] = null);

(statearr_27050_27066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (2))){
var inst_27030 = (state_27047[(10)]);
var inst_27027 = (state_27047[(9)]);
var inst_27030__$1 = cljs.core.nth.call(null,inst_27027,(0),null);
var inst_27031 = cljs.core.nthnext.call(null,inst_27027,(1));
var inst_27032 = (inst_27030__$1 == null);
var inst_27033 = cljs.core.not.call(null,inst_27032);
var state_27047__$1 = (function (){var statearr_27051 = state_27047;
(statearr_27051[(10)] = inst_27030__$1);

(statearr_27051[(11)] = inst_27031);

return statearr_27051;
})();
if(inst_27033){
var statearr_27052_27067 = state_27047__$1;
(statearr_27052_27067[(1)] = (4));

} else {
var statearr_27053_27068 = state_27047__$1;
(statearr_27053_27068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (3))){
var inst_27045 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27047__$1,inst_27045);
} else {
if((state_val_27048 === (4))){
var inst_27030 = (state_27047[(10)]);
var inst_27035 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27030);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27047__$1,(7),inst_27035);
} else {
if((state_val_27048 === (5))){
var inst_27041 = cljs.core.async.close_BANG_.call(null,out);
var state_27047__$1 = state_27047;
var statearr_27054_27069 = state_27047__$1;
(statearr_27054_27069[(2)] = inst_27041);

(statearr_27054_27069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (6))){
var inst_27043 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27055_27070 = state_27047__$1;
(statearr_27055_27070[(2)] = inst_27043);

(statearr_27055_27070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (7))){
var inst_27031 = (state_27047[(11)]);
var inst_27037 = (state_27047[(2)]);
var inst_27038 = cljs.core.async.put_BANG_.call(null,out,inst_27037);
var inst_27027 = inst_27031;
var state_27047__$1 = (function (){var statearr_27056 = state_27047;
(statearr_27056[(12)] = inst_27038);

(statearr_27056[(9)] = inst_27027);

return statearr_27056;
})();
var statearr_27057_27071 = state_27047__$1;
(statearr_27057_27071[(2)] = null);

(statearr_27057_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19184__auto___27065,out))
;
return ((function (switch__19163__auto__,c__19184__auto___27065,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____0 = (function (){
var statearr_27061 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27061[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__);

(statearr_27061[(1)] = (1));

return statearr_27061;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____1 = (function (state_27047){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_27047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object)){
var ex__19167__auto__ = e27062;
var statearr_27063_27072 = state_27047;
(statearr_27063_27072[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27073 = state_27047;
state_27047 = G__27073;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__ = function(state_27047){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____1.call(this,state_27047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___27065,out))
})();
var state__19186__auto__ = (function (){var statearr_27064 = f__19185__auto__.call(null);
(statearr_27064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___27065);

return statearr_27064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___27065,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27074,opts){
var map__27078 = p__27074;
var map__27078__$1 = ((((!((map__27078 == null)))?((((map__27078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var eval_body__$1 = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27080){var e = e27080;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27081_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27081_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27086){
var vec__27087 = p__27086;
var k = cljs.core.nth.call(null,vec__27087,(0),null);
var v = cljs.core.nth.call(null,vec__27087,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27088){
var vec__27089 = p__27088;
var k = cljs.core.nth.call(null,vec__27089,(0),null);
var v = cljs.core.nth.call(null,vec__27089,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27093,p__27094){
var map__27341 = p__27093;
var map__27341__$1 = ((((!((map__27341 == null)))?((((map__27341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27341):map__27341);
var opts = map__27341__$1;
var before_jsload = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27342 = p__27094;
var map__27342__$1 = ((((!((map__27342 == null)))?((((map__27342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27342):map__27342);
var msg = map__27342__$1;
var files = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27495){
var state_val_27496 = (state_27495[(1)]);
if((state_val_27496 === (7))){
var inst_27356 = (state_27495[(7)]);
var inst_27358 = (state_27495[(8)]);
var inst_27359 = (state_27495[(9)]);
var inst_27357 = (state_27495[(10)]);
var inst_27364 = cljs.core._nth.call(null,inst_27357,inst_27359);
var inst_27365 = figwheel.client.file_reloading.eval_body.call(null,inst_27364,opts);
var inst_27366 = (inst_27359 + (1));
var tmp27497 = inst_27356;
var tmp27498 = inst_27358;
var tmp27499 = inst_27357;
var inst_27356__$1 = tmp27497;
var inst_27357__$1 = tmp27499;
var inst_27358__$1 = tmp27498;
var inst_27359__$1 = inst_27366;
var state_27495__$1 = (function (){var statearr_27500 = state_27495;
(statearr_27500[(7)] = inst_27356__$1);

(statearr_27500[(8)] = inst_27358__$1);

(statearr_27500[(11)] = inst_27365);

(statearr_27500[(9)] = inst_27359__$1);

(statearr_27500[(10)] = inst_27357__$1);

return statearr_27500;
})();
var statearr_27501_27587 = state_27495__$1;
(statearr_27501_27587[(2)] = null);

(statearr_27501_27587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (20))){
var inst_27399 = (state_27495[(12)]);
var inst_27407 = figwheel.client.file_reloading.sort_files.call(null,inst_27399);
var state_27495__$1 = state_27495;
var statearr_27502_27588 = state_27495__$1;
(statearr_27502_27588[(2)] = inst_27407);

(statearr_27502_27588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (27))){
var state_27495__$1 = state_27495;
var statearr_27503_27589 = state_27495__$1;
(statearr_27503_27589[(2)] = null);

(statearr_27503_27589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (1))){
var inst_27348 = (state_27495[(13)]);
var inst_27345 = before_jsload.call(null,files);
var inst_27346 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27347 = (function (){return ((function (inst_27348,inst_27345,inst_27346,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27090_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27090_SHARP_);
});
;})(inst_27348,inst_27345,inst_27346,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27348__$1 = cljs.core.filter.call(null,inst_27347,files);
var inst_27349 = cljs.core.not_empty.call(null,inst_27348__$1);
var state_27495__$1 = (function (){var statearr_27504 = state_27495;
(statearr_27504[(14)] = inst_27346);

(statearr_27504[(15)] = inst_27345);

(statearr_27504[(13)] = inst_27348__$1);

return statearr_27504;
})();
if(cljs.core.truth_(inst_27349)){
var statearr_27505_27590 = state_27495__$1;
(statearr_27505_27590[(1)] = (2));

} else {
var statearr_27506_27591 = state_27495__$1;
(statearr_27506_27591[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (24))){
var state_27495__$1 = state_27495;
var statearr_27507_27592 = state_27495__$1;
(statearr_27507_27592[(2)] = null);

(statearr_27507_27592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (39))){
var inst_27449 = (state_27495[(16)]);
var state_27495__$1 = state_27495;
var statearr_27508_27593 = state_27495__$1;
(statearr_27508_27593[(2)] = inst_27449);

(statearr_27508_27593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (46))){
var inst_27490 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27509_27594 = state_27495__$1;
(statearr_27509_27594[(2)] = inst_27490);

(statearr_27509_27594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (4))){
var inst_27393 = (state_27495[(2)]);
var inst_27394 = cljs.core.List.EMPTY;
var inst_27395 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27394);
var inst_27396 = (function (){return ((function (inst_27393,inst_27394,inst_27395,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27091_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27091_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27091_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_27393,inst_27394,inst_27395,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27397 = cljs.core.filter.call(null,inst_27396,files);
var inst_27398 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27399 = cljs.core.concat.call(null,inst_27397,inst_27398);
var state_27495__$1 = (function (){var statearr_27510 = state_27495;
(statearr_27510[(17)] = inst_27395);

(statearr_27510[(18)] = inst_27393);

(statearr_27510[(12)] = inst_27399);

return statearr_27510;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27511_27595 = state_27495__$1;
(statearr_27511_27595[(1)] = (16));

} else {
var statearr_27512_27596 = state_27495__$1;
(statearr_27512_27596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (15))){
var inst_27383 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27513_27597 = state_27495__$1;
(statearr_27513_27597[(2)] = inst_27383);

(statearr_27513_27597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (21))){
var inst_27409 = (state_27495[(19)]);
var inst_27409__$1 = (state_27495[(2)]);
var inst_27410 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27409__$1);
var state_27495__$1 = (function (){var statearr_27514 = state_27495;
(statearr_27514[(19)] = inst_27409__$1);

return statearr_27514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27495__$1,(22),inst_27410);
} else {
if((state_val_27496 === (31))){
var inst_27493 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27495__$1,inst_27493);
} else {
if((state_val_27496 === (32))){
var inst_27449 = (state_27495[(16)]);
var inst_27454 = inst_27449.cljs$lang$protocol_mask$partition0$;
var inst_27455 = (inst_27454 & (64));
var inst_27456 = inst_27449.cljs$core$ISeq$;
var inst_27457 = (inst_27455) || (inst_27456);
var state_27495__$1 = state_27495;
if(cljs.core.truth_(inst_27457)){
var statearr_27515_27598 = state_27495__$1;
(statearr_27515_27598[(1)] = (35));

} else {
var statearr_27516_27599 = state_27495__$1;
(statearr_27516_27599[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (40))){
var inst_27470 = (state_27495[(20)]);
var inst_27469 = (state_27495[(2)]);
var inst_27470__$1 = cljs.core.get.call(null,inst_27469,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27471 = cljs.core.get.call(null,inst_27469,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27472 = cljs.core.not_empty.call(null,inst_27470__$1);
var state_27495__$1 = (function (){var statearr_27517 = state_27495;
(statearr_27517[(21)] = inst_27471);

(statearr_27517[(20)] = inst_27470__$1);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27472)){
var statearr_27518_27600 = state_27495__$1;
(statearr_27518_27600[(1)] = (41));

} else {
var statearr_27519_27601 = state_27495__$1;
(statearr_27519_27601[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (33))){
var state_27495__$1 = state_27495;
var statearr_27520_27602 = state_27495__$1;
(statearr_27520_27602[(2)] = false);

(statearr_27520_27602[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (13))){
var inst_27369 = (state_27495[(22)]);
var inst_27373 = cljs.core.chunk_first.call(null,inst_27369);
var inst_27374 = cljs.core.chunk_rest.call(null,inst_27369);
var inst_27375 = cljs.core.count.call(null,inst_27373);
var inst_27356 = inst_27374;
var inst_27357 = inst_27373;
var inst_27358 = inst_27375;
var inst_27359 = (0);
var state_27495__$1 = (function (){var statearr_27521 = state_27495;
(statearr_27521[(7)] = inst_27356);

(statearr_27521[(8)] = inst_27358);

(statearr_27521[(9)] = inst_27359);

(statearr_27521[(10)] = inst_27357);

return statearr_27521;
})();
var statearr_27522_27603 = state_27495__$1;
(statearr_27522_27603[(2)] = null);

(statearr_27522_27603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (22))){
var inst_27413 = (state_27495[(23)]);
var inst_27409 = (state_27495[(19)]);
var inst_27412 = (state_27495[(24)]);
var inst_27417 = (state_27495[(25)]);
var inst_27412__$1 = (state_27495[(2)]);
var inst_27413__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27412__$1);
var inst_27414 = (function (){var all_files = inst_27409;
var res_SINGLEQUOTE_ = inst_27412__$1;
var res = inst_27413__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27413,inst_27409,inst_27412,inst_27417,inst_27412__$1,inst_27413__$1,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27092_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27092_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27413,inst_27409,inst_27412,inst_27417,inst_27412__$1,inst_27413__$1,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27415 = cljs.core.filter.call(null,inst_27414,inst_27412__$1);
var inst_27416 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27417__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27416);
var inst_27418 = cljs.core.not_empty.call(null,inst_27417__$1);
var state_27495__$1 = (function (){var statearr_27523 = state_27495;
(statearr_27523[(26)] = inst_27415);

(statearr_27523[(23)] = inst_27413__$1);

(statearr_27523[(24)] = inst_27412__$1);

(statearr_27523[(25)] = inst_27417__$1);

return statearr_27523;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27524_27604 = state_27495__$1;
(statearr_27524_27604[(1)] = (23));

} else {
var statearr_27525_27605 = state_27495__$1;
(statearr_27525_27605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (36))){
var state_27495__$1 = state_27495;
var statearr_27526_27606 = state_27495__$1;
(statearr_27526_27606[(2)] = false);

(statearr_27526_27606[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (41))){
var inst_27470 = (state_27495[(20)]);
var inst_27474 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27475 = cljs.core.map.call(null,inst_27474,inst_27470);
var inst_27476 = cljs.core.pr_str.call(null,inst_27475);
var inst_27477 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27476)].join('');
var inst_27478 = figwheel.client.utils.log.call(null,inst_27477);
var state_27495__$1 = state_27495;
var statearr_27527_27607 = state_27495__$1;
(statearr_27527_27607[(2)] = inst_27478);

(statearr_27527_27607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (43))){
var inst_27471 = (state_27495[(21)]);
var inst_27481 = (state_27495[(2)]);
var inst_27482 = cljs.core.not_empty.call(null,inst_27471);
var state_27495__$1 = (function (){var statearr_27528 = state_27495;
(statearr_27528[(27)] = inst_27481);

return statearr_27528;
})();
if(cljs.core.truth_(inst_27482)){
var statearr_27529_27608 = state_27495__$1;
(statearr_27529_27608[(1)] = (44));

} else {
var statearr_27530_27609 = state_27495__$1;
(statearr_27530_27609[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (29))){
var inst_27449 = (state_27495[(16)]);
var inst_27415 = (state_27495[(26)]);
var inst_27413 = (state_27495[(23)]);
var inst_27409 = (state_27495[(19)]);
var inst_27412 = (state_27495[(24)]);
var inst_27417 = (state_27495[(25)]);
var inst_27445 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27448 = (function (){var all_files = inst_27409;
var res_SINGLEQUOTE_ = inst_27412;
var res = inst_27413;
var files_not_loaded = inst_27415;
var dependencies_that_loaded = inst_27417;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27449,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27445,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27447){
var map__27531 = p__27447;
var map__27531__$1 = ((((!((map__27531 == null)))?((((map__27531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27531):map__27531);
var namespace = cljs.core.get.call(null,map__27531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27449,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27445,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27449__$1 = cljs.core.group_by.call(null,inst_27448,inst_27415);
var inst_27451 = (inst_27449__$1 == null);
var inst_27452 = cljs.core.not.call(null,inst_27451);
var state_27495__$1 = (function (){var statearr_27533 = state_27495;
(statearr_27533[(16)] = inst_27449__$1);

(statearr_27533[(28)] = inst_27445);

return statearr_27533;
})();
if(inst_27452){
var statearr_27534_27610 = state_27495__$1;
(statearr_27534_27610[(1)] = (32));

} else {
var statearr_27535_27611 = state_27495__$1;
(statearr_27535_27611[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (44))){
var inst_27471 = (state_27495[(21)]);
var inst_27484 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27471);
var inst_27485 = cljs.core.pr_str.call(null,inst_27484);
var inst_27486 = [cljs.core.str("not required: "),cljs.core.str(inst_27485)].join('');
var inst_27487 = figwheel.client.utils.log.call(null,inst_27486);
var state_27495__$1 = state_27495;
var statearr_27536_27612 = state_27495__$1;
(statearr_27536_27612[(2)] = inst_27487);

(statearr_27536_27612[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (6))){
var inst_27390 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27537_27613 = state_27495__$1;
(statearr_27537_27613[(2)] = inst_27390);

(statearr_27537_27613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (28))){
var inst_27415 = (state_27495[(26)]);
var inst_27442 = (state_27495[(2)]);
var inst_27443 = cljs.core.not_empty.call(null,inst_27415);
var state_27495__$1 = (function (){var statearr_27538 = state_27495;
(statearr_27538[(29)] = inst_27442);

return statearr_27538;
})();
if(cljs.core.truth_(inst_27443)){
var statearr_27539_27614 = state_27495__$1;
(statearr_27539_27614[(1)] = (29));

} else {
var statearr_27540_27615 = state_27495__$1;
(statearr_27540_27615[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (25))){
var inst_27413 = (state_27495[(23)]);
var inst_27429 = (state_27495[(2)]);
var inst_27430 = cljs.core.not_empty.call(null,inst_27413);
var state_27495__$1 = (function (){var statearr_27541 = state_27495;
(statearr_27541[(30)] = inst_27429);

return statearr_27541;
})();
if(cljs.core.truth_(inst_27430)){
var statearr_27542_27616 = state_27495__$1;
(statearr_27542_27616[(1)] = (26));

} else {
var statearr_27543_27617 = state_27495__$1;
(statearr_27543_27617[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (34))){
var inst_27464 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
if(cljs.core.truth_(inst_27464)){
var statearr_27544_27618 = state_27495__$1;
(statearr_27544_27618[(1)] = (38));

} else {
var statearr_27545_27619 = state_27495__$1;
(statearr_27545_27619[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (17))){
var state_27495__$1 = state_27495;
var statearr_27546_27620 = state_27495__$1;
(statearr_27546_27620[(2)] = recompile_dependents);

(statearr_27546_27620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (3))){
var state_27495__$1 = state_27495;
var statearr_27547_27621 = state_27495__$1;
(statearr_27547_27621[(2)] = null);

(statearr_27547_27621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (12))){
var inst_27386 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27548_27622 = state_27495__$1;
(statearr_27548_27622[(2)] = inst_27386);

(statearr_27548_27622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (2))){
var inst_27348 = (state_27495[(13)]);
var inst_27355 = cljs.core.seq.call(null,inst_27348);
var inst_27356 = inst_27355;
var inst_27357 = null;
var inst_27358 = (0);
var inst_27359 = (0);
var state_27495__$1 = (function (){var statearr_27549 = state_27495;
(statearr_27549[(7)] = inst_27356);

(statearr_27549[(8)] = inst_27358);

(statearr_27549[(9)] = inst_27359);

(statearr_27549[(10)] = inst_27357);

return statearr_27549;
})();
var statearr_27550_27623 = state_27495__$1;
(statearr_27550_27623[(2)] = null);

(statearr_27550_27623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (23))){
var inst_27415 = (state_27495[(26)]);
var inst_27413 = (state_27495[(23)]);
var inst_27409 = (state_27495[(19)]);
var inst_27412 = (state_27495[(24)]);
var inst_27417 = (state_27495[(25)]);
var inst_27420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27422 = (function (){var all_files = inst_27409;
var res_SINGLEQUOTE_ = inst_27412;
var res = inst_27413;
var files_not_loaded = inst_27415;
var dependencies_that_loaded = inst_27417;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27420,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27421){
var map__27551 = p__27421;
var map__27551__$1 = ((((!((map__27551 == null)))?((((map__27551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27551):map__27551);
var request_url = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27420,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27423 = cljs.core.reverse.call(null,inst_27417);
var inst_27424 = cljs.core.map.call(null,inst_27422,inst_27423);
var inst_27425 = cljs.core.pr_str.call(null,inst_27424);
var inst_27426 = figwheel.client.utils.log.call(null,inst_27425);
var state_27495__$1 = (function (){var statearr_27553 = state_27495;
(statearr_27553[(31)] = inst_27420);

return statearr_27553;
})();
var statearr_27554_27624 = state_27495__$1;
(statearr_27554_27624[(2)] = inst_27426);

(statearr_27554_27624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (35))){
var state_27495__$1 = state_27495;
var statearr_27555_27625 = state_27495__$1;
(statearr_27555_27625[(2)] = true);

(statearr_27555_27625[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (19))){
var inst_27399 = (state_27495[(12)]);
var inst_27405 = figwheel.client.file_reloading.expand_files.call(null,inst_27399);
var state_27495__$1 = state_27495;
var statearr_27556_27626 = state_27495__$1;
(statearr_27556_27626[(2)] = inst_27405);

(statearr_27556_27626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (11))){
var state_27495__$1 = state_27495;
var statearr_27557_27627 = state_27495__$1;
(statearr_27557_27627[(2)] = null);

(statearr_27557_27627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (9))){
var inst_27388 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27558_27628 = state_27495__$1;
(statearr_27558_27628[(2)] = inst_27388);

(statearr_27558_27628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (5))){
var inst_27358 = (state_27495[(8)]);
var inst_27359 = (state_27495[(9)]);
var inst_27361 = (inst_27359 < inst_27358);
var inst_27362 = inst_27361;
var state_27495__$1 = state_27495;
if(cljs.core.truth_(inst_27362)){
var statearr_27559_27629 = state_27495__$1;
(statearr_27559_27629[(1)] = (7));

} else {
var statearr_27560_27630 = state_27495__$1;
(statearr_27560_27630[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (14))){
var inst_27369 = (state_27495[(22)]);
var inst_27378 = cljs.core.first.call(null,inst_27369);
var inst_27379 = figwheel.client.file_reloading.eval_body.call(null,inst_27378,opts);
var inst_27380 = cljs.core.next.call(null,inst_27369);
var inst_27356 = inst_27380;
var inst_27357 = null;
var inst_27358 = (0);
var inst_27359 = (0);
var state_27495__$1 = (function (){var statearr_27561 = state_27495;
(statearr_27561[(7)] = inst_27356);

(statearr_27561[(8)] = inst_27358);

(statearr_27561[(32)] = inst_27379);

(statearr_27561[(9)] = inst_27359);

(statearr_27561[(10)] = inst_27357);

return statearr_27561;
})();
var statearr_27562_27631 = state_27495__$1;
(statearr_27562_27631[(2)] = null);

(statearr_27562_27631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (45))){
var state_27495__$1 = state_27495;
var statearr_27563_27632 = state_27495__$1;
(statearr_27563_27632[(2)] = null);

(statearr_27563_27632[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (26))){
var inst_27415 = (state_27495[(26)]);
var inst_27413 = (state_27495[(23)]);
var inst_27409 = (state_27495[(19)]);
var inst_27412 = (state_27495[(24)]);
var inst_27417 = (state_27495[(25)]);
var inst_27432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27434 = (function (){var all_files = inst_27409;
var res_SINGLEQUOTE_ = inst_27412;
var res = inst_27413;
var files_not_loaded = inst_27415;
var dependencies_that_loaded = inst_27417;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27432,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27433){
var map__27564 = p__27433;
var map__27564__$1 = ((((!((map__27564 == null)))?((((map__27564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27564):map__27564);
var namespace = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27432,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27435 = cljs.core.map.call(null,inst_27434,inst_27413);
var inst_27436 = cljs.core.pr_str.call(null,inst_27435);
var inst_27437 = figwheel.client.utils.log.call(null,inst_27436);
var inst_27438 = (function (){var all_files = inst_27409;
var res_SINGLEQUOTE_ = inst_27412;
var res = inst_27413;
var files_not_loaded = inst_27415;
var dependencies_that_loaded = inst_27417;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27432,inst_27434,inst_27435,inst_27436,inst_27437,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27415,inst_27413,inst_27409,inst_27412,inst_27417,inst_27432,inst_27434,inst_27435,inst_27436,inst_27437,state_val_27496,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27439 = setTimeout(inst_27438,(10));
var state_27495__$1 = (function (){var statearr_27566 = state_27495;
(statearr_27566[(33)] = inst_27437);

(statearr_27566[(34)] = inst_27432);

return statearr_27566;
})();
var statearr_27567_27633 = state_27495__$1;
(statearr_27567_27633[(2)] = inst_27439);

(statearr_27567_27633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (16))){
var state_27495__$1 = state_27495;
var statearr_27568_27634 = state_27495__$1;
(statearr_27568_27634[(2)] = reload_dependents);

(statearr_27568_27634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (38))){
var inst_27449 = (state_27495[(16)]);
var inst_27466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27449);
var state_27495__$1 = state_27495;
var statearr_27569_27635 = state_27495__$1;
(statearr_27569_27635[(2)] = inst_27466);

(statearr_27569_27635[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (30))){
var state_27495__$1 = state_27495;
var statearr_27570_27636 = state_27495__$1;
(statearr_27570_27636[(2)] = null);

(statearr_27570_27636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (10))){
var inst_27369 = (state_27495[(22)]);
var inst_27371 = cljs.core.chunked_seq_QMARK_.call(null,inst_27369);
var state_27495__$1 = state_27495;
if(inst_27371){
var statearr_27571_27637 = state_27495__$1;
(statearr_27571_27637[(1)] = (13));

} else {
var statearr_27572_27638 = state_27495__$1;
(statearr_27572_27638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (18))){
var inst_27403 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
if(cljs.core.truth_(inst_27403)){
var statearr_27573_27639 = state_27495__$1;
(statearr_27573_27639[(1)] = (19));

} else {
var statearr_27574_27640 = state_27495__$1;
(statearr_27574_27640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (42))){
var state_27495__$1 = state_27495;
var statearr_27575_27641 = state_27495__$1;
(statearr_27575_27641[(2)] = null);

(statearr_27575_27641[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (37))){
var inst_27461 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27576_27642 = state_27495__$1;
(statearr_27576_27642[(2)] = inst_27461);

(statearr_27576_27642[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (8))){
var inst_27356 = (state_27495[(7)]);
var inst_27369 = (state_27495[(22)]);
var inst_27369__$1 = cljs.core.seq.call(null,inst_27356);
var state_27495__$1 = (function (){var statearr_27577 = state_27495;
(statearr_27577[(22)] = inst_27369__$1);

return statearr_27577;
})();
if(inst_27369__$1){
var statearr_27578_27643 = state_27495__$1;
(statearr_27578_27643[(1)] = (10));

} else {
var statearr_27579_27644 = state_27495__$1;
(statearr_27579_27644[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19163__auto__,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____0 = (function (){
var statearr_27583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27583[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__);

(statearr_27583[(1)] = (1));

return statearr_27583;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____1 = (function (state_27495){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_27495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e27584){if((e27584 instanceof Object)){
var ex__19167__auto__ = e27584;
var statearr_27585_27645 = state_27495;
(statearr_27585_27645[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27646 = state_27495;
state_27495 = G__27646;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__ = function(state_27495){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____1.call(this,state_27495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19186__auto__ = (function (){var statearr_27586 = f__19185__auto__.call(null);
(statearr_27586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_27586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,map__27341,map__27341__$1,opts,before_jsload,on_jsload,reload_dependents,map__27342,map__27342__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19184__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27649,link){
var map__27652 = p__27649;
var map__27652__$1 = ((((!((map__27652 == null)))?((((map__27652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27652):map__27652);
var file = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27652,map__27652__$1,file){
return (function (p1__27647_SHARP_,p2__27648_SHARP_){
if(cljs.core._EQ_.call(null,p1__27647_SHARP_,p2__27648_SHARP_)){
return p1__27647_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27652,map__27652__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27658){
var map__27659 = p__27658;
var map__27659__$1 = ((((!((map__27659 == null)))?((((map__27659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27659):map__27659);
var match_length = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27654_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27654_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27661 = [];
var len__17863__auto___27664 = arguments.length;
var i__17864__auto___27665 = (0);
while(true){
if((i__17864__auto___27665 < len__17863__auto___27664)){
args27661.push((arguments[i__17864__auto___27665]));

var G__27666 = (i__17864__auto___27665 + (1));
i__17864__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var G__27663 = args27661.length;
switch (G__27663) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27661.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27668_SHARP_,p2__27669_SHARP_){
return cljs.core.assoc.call(null,p1__27668_SHARP_,cljs.core.get.call(null,p2__27669_SHARP_,key),p2__27669_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27670){
var map__27673 = p__27670;
var map__27673__$1 = ((((!((map__27673 == null)))?((((map__27673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27673):map__27673);
var f_data = map__27673__$1;
var file = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27675,files_msg){
var map__27682 = p__27675;
var map__27682__$1 = ((((!((map__27682 == null)))?((((map__27682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27682):map__27682);
var opts = map__27682__$1;
var on_cssload = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27684_27688 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27685_27689 = null;
var count__27686_27690 = (0);
var i__27687_27691 = (0);
while(true){
if((i__27687_27691 < count__27686_27690)){
var f_27692 = cljs.core._nth.call(null,chunk__27685_27689,i__27687_27691);
figwheel.client.file_reloading.reload_css_file.call(null,f_27692);

var G__27693 = seq__27684_27688;
var G__27694 = chunk__27685_27689;
var G__27695 = count__27686_27690;
var G__27696 = (i__27687_27691 + (1));
seq__27684_27688 = G__27693;
chunk__27685_27689 = G__27694;
count__27686_27690 = G__27695;
i__27687_27691 = G__27696;
continue;
} else {
var temp__4425__auto___27697 = cljs.core.seq.call(null,seq__27684_27688);
if(temp__4425__auto___27697){
var seq__27684_27698__$1 = temp__4425__auto___27697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27684_27698__$1)){
var c__17608__auto___27699 = cljs.core.chunk_first.call(null,seq__27684_27698__$1);
var G__27700 = cljs.core.chunk_rest.call(null,seq__27684_27698__$1);
var G__27701 = c__17608__auto___27699;
var G__27702 = cljs.core.count.call(null,c__17608__auto___27699);
var G__27703 = (0);
seq__27684_27688 = G__27700;
chunk__27685_27689 = G__27701;
count__27686_27690 = G__27702;
i__27687_27691 = G__27703;
continue;
} else {
var f_27704 = cljs.core.first.call(null,seq__27684_27698__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27704);

var G__27705 = cljs.core.next.call(null,seq__27684_27698__$1);
var G__27706 = null;
var G__27707 = (0);
var G__27708 = (0);
seq__27684_27688 = G__27705;
chunk__27685_27689 = G__27706;
count__27686_27690 = G__27707;
i__27687_27691 = G__27708;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27682,map__27682__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27682,map__27682__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1462895598645