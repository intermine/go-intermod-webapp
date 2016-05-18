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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34503_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34503_SHARP_));
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
var seq__34508 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34509 = null;
var count__34510 = (0);
var i__34511 = (0);
while(true){
if((i__34511 < count__34510)){
var n = cljs.core._nth.call(null,chunk__34509,i__34511);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34512 = seq__34508;
var G__34513 = chunk__34509;
var G__34514 = count__34510;
var G__34515 = (i__34511 + (1));
seq__34508 = G__34512;
chunk__34509 = G__34513;
count__34510 = G__34514;
i__34511 = G__34515;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34508);
if(temp__4425__auto__){
var seq__34508__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34508__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__34508__$1);
var G__34516 = cljs.core.chunk_rest.call(null,seq__34508__$1);
var G__34517 = c__17608__auto__;
var G__34518 = cljs.core.count.call(null,c__17608__auto__);
var G__34519 = (0);
seq__34508 = G__34516;
chunk__34509 = G__34517;
count__34510 = G__34518;
i__34511 = G__34519;
continue;
} else {
var n = cljs.core.first.call(null,seq__34508__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34520 = cljs.core.next.call(null,seq__34508__$1);
var G__34521 = null;
var G__34522 = (0);
var G__34523 = (0);
seq__34508 = G__34520;
chunk__34509 = G__34521;
count__34510 = G__34522;
i__34511 = G__34523;
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

var seq__34562_34569 = cljs.core.seq.call(null,deps);
var chunk__34563_34570 = null;
var count__34564_34571 = (0);
var i__34565_34572 = (0);
while(true){
if((i__34565_34572 < count__34564_34571)){
var dep_34573 = cljs.core._nth.call(null,chunk__34563_34570,i__34565_34572);
topo_sort_helper_STAR_.call(null,dep_34573,(depth + (1)),state);

var G__34574 = seq__34562_34569;
var G__34575 = chunk__34563_34570;
var G__34576 = count__34564_34571;
var G__34577 = (i__34565_34572 + (1));
seq__34562_34569 = G__34574;
chunk__34563_34570 = G__34575;
count__34564_34571 = G__34576;
i__34565_34572 = G__34577;
continue;
} else {
var temp__4425__auto___34578 = cljs.core.seq.call(null,seq__34562_34569);
if(temp__4425__auto___34578){
var seq__34562_34579__$1 = temp__4425__auto___34578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34562_34579__$1)){
var c__17608__auto___34580 = cljs.core.chunk_first.call(null,seq__34562_34579__$1);
var G__34581 = cljs.core.chunk_rest.call(null,seq__34562_34579__$1);
var G__34582 = c__17608__auto___34580;
var G__34583 = cljs.core.count.call(null,c__17608__auto___34580);
var G__34584 = (0);
seq__34562_34569 = G__34581;
chunk__34563_34570 = G__34582;
count__34564_34571 = G__34583;
i__34565_34572 = G__34584;
continue;
} else {
var dep_34585 = cljs.core.first.call(null,seq__34562_34579__$1);
topo_sort_helper_STAR_.call(null,dep_34585,(depth + (1)),state);

var G__34586 = cljs.core.next.call(null,seq__34562_34579__$1);
var G__34587 = null;
var G__34588 = (0);
var G__34589 = (0);
seq__34562_34569 = G__34586;
chunk__34563_34570 = G__34587;
count__34564_34571 = G__34588;
i__34565_34572 = G__34589;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34566){
var vec__34568 = p__34566;
var x = cljs.core.nth.call(null,vec__34568,(0),null);
var xs = cljs.core.nthnext.call(null,vec__34568,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34568,x,xs,get_deps__$1){
return (function (p1__34524_SHARP_){
return clojure.set.difference.call(null,p1__34524_SHARP_,x);
});})(vec__34568,x,xs,get_deps__$1))
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
var seq__34602 = cljs.core.seq.call(null,provides);
var chunk__34603 = null;
var count__34604 = (0);
var i__34605 = (0);
while(true){
if((i__34605 < count__34604)){
var prov = cljs.core._nth.call(null,chunk__34603,i__34605);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34606_34614 = cljs.core.seq.call(null,requires);
var chunk__34607_34615 = null;
var count__34608_34616 = (0);
var i__34609_34617 = (0);
while(true){
if((i__34609_34617 < count__34608_34616)){
var req_34618 = cljs.core._nth.call(null,chunk__34607_34615,i__34609_34617);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34618,prov);

var G__34619 = seq__34606_34614;
var G__34620 = chunk__34607_34615;
var G__34621 = count__34608_34616;
var G__34622 = (i__34609_34617 + (1));
seq__34606_34614 = G__34619;
chunk__34607_34615 = G__34620;
count__34608_34616 = G__34621;
i__34609_34617 = G__34622;
continue;
} else {
var temp__4425__auto___34623 = cljs.core.seq.call(null,seq__34606_34614);
if(temp__4425__auto___34623){
var seq__34606_34624__$1 = temp__4425__auto___34623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34606_34624__$1)){
var c__17608__auto___34625 = cljs.core.chunk_first.call(null,seq__34606_34624__$1);
var G__34626 = cljs.core.chunk_rest.call(null,seq__34606_34624__$1);
var G__34627 = c__17608__auto___34625;
var G__34628 = cljs.core.count.call(null,c__17608__auto___34625);
var G__34629 = (0);
seq__34606_34614 = G__34626;
chunk__34607_34615 = G__34627;
count__34608_34616 = G__34628;
i__34609_34617 = G__34629;
continue;
} else {
var req_34630 = cljs.core.first.call(null,seq__34606_34624__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34630,prov);

var G__34631 = cljs.core.next.call(null,seq__34606_34624__$1);
var G__34632 = null;
var G__34633 = (0);
var G__34634 = (0);
seq__34606_34614 = G__34631;
chunk__34607_34615 = G__34632;
count__34608_34616 = G__34633;
i__34609_34617 = G__34634;
continue;
}
} else {
}
}
break;
}

var G__34635 = seq__34602;
var G__34636 = chunk__34603;
var G__34637 = count__34604;
var G__34638 = (i__34605 + (1));
seq__34602 = G__34635;
chunk__34603 = G__34636;
count__34604 = G__34637;
i__34605 = G__34638;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34602);
if(temp__4425__auto__){
var seq__34602__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34602__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__34602__$1);
var G__34639 = cljs.core.chunk_rest.call(null,seq__34602__$1);
var G__34640 = c__17608__auto__;
var G__34641 = cljs.core.count.call(null,c__17608__auto__);
var G__34642 = (0);
seq__34602 = G__34639;
chunk__34603 = G__34640;
count__34604 = G__34641;
i__34605 = G__34642;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34602__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34610_34643 = cljs.core.seq.call(null,requires);
var chunk__34611_34644 = null;
var count__34612_34645 = (0);
var i__34613_34646 = (0);
while(true){
if((i__34613_34646 < count__34612_34645)){
var req_34647 = cljs.core._nth.call(null,chunk__34611_34644,i__34613_34646);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34647,prov);

var G__34648 = seq__34610_34643;
var G__34649 = chunk__34611_34644;
var G__34650 = count__34612_34645;
var G__34651 = (i__34613_34646 + (1));
seq__34610_34643 = G__34648;
chunk__34611_34644 = G__34649;
count__34612_34645 = G__34650;
i__34613_34646 = G__34651;
continue;
} else {
var temp__4425__auto___34652__$1 = cljs.core.seq.call(null,seq__34610_34643);
if(temp__4425__auto___34652__$1){
var seq__34610_34653__$1 = temp__4425__auto___34652__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34610_34653__$1)){
var c__17608__auto___34654 = cljs.core.chunk_first.call(null,seq__34610_34653__$1);
var G__34655 = cljs.core.chunk_rest.call(null,seq__34610_34653__$1);
var G__34656 = c__17608__auto___34654;
var G__34657 = cljs.core.count.call(null,c__17608__auto___34654);
var G__34658 = (0);
seq__34610_34643 = G__34655;
chunk__34611_34644 = G__34656;
count__34612_34645 = G__34657;
i__34613_34646 = G__34658;
continue;
} else {
var req_34659 = cljs.core.first.call(null,seq__34610_34653__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34659,prov);

var G__34660 = cljs.core.next.call(null,seq__34610_34653__$1);
var G__34661 = null;
var G__34662 = (0);
var G__34663 = (0);
seq__34610_34643 = G__34660;
chunk__34611_34644 = G__34661;
count__34612_34645 = G__34662;
i__34613_34646 = G__34663;
continue;
}
} else {
}
}
break;
}

var G__34664 = cljs.core.next.call(null,seq__34602__$1);
var G__34665 = null;
var G__34666 = (0);
var G__34667 = (0);
seq__34602 = G__34664;
chunk__34603 = G__34665;
count__34604 = G__34666;
i__34605 = G__34667;
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
var seq__34672_34676 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34673_34677 = null;
var count__34674_34678 = (0);
var i__34675_34679 = (0);
while(true){
if((i__34675_34679 < count__34674_34678)){
var ns_34680 = cljs.core._nth.call(null,chunk__34673_34677,i__34675_34679);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34680);

var G__34681 = seq__34672_34676;
var G__34682 = chunk__34673_34677;
var G__34683 = count__34674_34678;
var G__34684 = (i__34675_34679 + (1));
seq__34672_34676 = G__34681;
chunk__34673_34677 = G__34682;
count__34674_34678 = G__34683;
i__34675_34679 = G__34684;
continue;
} else {
var temp__4425__auto___34685 = cljs.core.seq.call(null,seq__34672_34676);
if(temp__4425__auto___34685){
var seq__34672_34686__$1 = temp__4425__auto___34685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34672_34686__$1)){
var c__17608__auto___34687 = cljs.core.chunk_first.call(null,seq__34672_34686__$1);
var G__34688 = cljs.core.chunk_rest.call(null,seq__34672_34686__$1);
var G__34689 = c__17608__auto___34687;
var G__34690 = cljs.core.count.call(null,c__17608__auto___34687);
var G__34691 = (0);
seq__34672_34676 = G__34688;
chunk__34673_34677 = G__34689;
count__34674_34678 = G__34690;
i__34675_34679 = G__34691;
continue;
} else {
var ns_34692 = cljs.core.first.call(null,seq__34672_34686__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34692);

var G__34693 = cljs.core.next.call(null,seq__34672_34686__$1);
var G__34694 = null;
var G__34695 = (0);
var G__34696 = (0);
seq__34672_34676 = G__34693;
chunk__34673_34677 = G__34694;
count__34674_34678 = G__34695;
i__34675_34679 = G__34696;
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
var G__34697__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34698__i = 0, G__34698__a = new Array(arguments.length -  0);
while (G__34698__i < G__34698__a.length) {G__34698__a[G__34698__i] = arguments[G__34698__i + 0]; ++G__34698__i;}
  args = new cljs.core.IndexedSeq(G__34698__a,0);
} 
return G__34697__delegate.call(this,args);};
G__34697.cljs$lang$maxFixedArity = 0;
G__34697.cljs$lang$applyTo = (function (arglist__34699){
var args = cljs.core.seq(arglist__34699);
return G__34697__delegate(args);
});
G__34697.cljs$core$IFn$_invoke$arity$variadic = G__34697__delegate;
return G__34697;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34701 = cljs.core._EQ_;
var expr__34702 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34701.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34702))){
var path_parts = ((function (pred__34701,expr__34702){
return (function (p1__34700_SHARP_){
return clojure.string.split.call(null,p1__34700_SHARP_,/[\/\\]/);
});})(pred__34701,expr__34702))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34701,expr__34702){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34704){if((e34704 instanceof Error)){
var e = e34704;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34704;

}
}})());
});
;})(path_parts,sep,root,pred__34701,expr__34702))
} else {
if(cljs.core.truth_(pred__34701.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34702))){
return ((function (pred__34701,expr__34702){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34701,expr__34702){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34701,expr__34702))
);

return deferred.addErrback(((function (deferred,pred__34701,expr__34702){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34701,expr__34702))
);
});
;})(pred__34701,expr__34702))
} else {
return ((function (pred__34701,expr__34702){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34701,expr__34702))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34705,callback){
var map__34708 = p__34705;
var map__34708__$1 = ((((!((map__34708 == null)))?((((map__34708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34708):map__34708);
var file_msg = map__34708__$1;
var request_url = cljs.core.get.call(null,map__34708__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34708,map__34708__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34708,map__34708__$1,file_msg,request_url))
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
return (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (7))){
var inst_34728 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34734_34754 = state_34732__$1;
(statearr_34734_34754[(2)] = inst_34728);

(statearr_34734_34754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (1))){
var state_34732__$1 = state_34732;
var statearr_34735_34755 = state_34732__$1;
(statearr_34735_34755[(2)] = null);

(statearr_34735_34755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (4))){
var inst_34712 = (state_34732[(7)]);
var inst_34712__$1 = (state_34732[(2)]);
var state_34732__$1 = (function (){var statearr_34736 = state_34732;
(statearr_34736[(7)] = inst_34712__$1);

return statearr_34736;
})();
if(cljs.core.truth_(inst_34712__$1)){
var statearr_34737_34756 = state_34732__$1;
(statearr_34737_34756[(1)] = (5));

} else {
var statearr_34738_34757 = state_34732__$1;
(statearr_34738_34757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (6))){
var state_34732__$1 = state_34732;
var statearr_34739_34758 = state_34732__$1;
(statearr_34739_34758[(2)] = null);

(statearr_34739_34758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (3))){
var inst_34730 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34732__$1,inst_34730);
} else {
if((state_val_34733 === (2))){
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34733 === (11))){
var inst_34724 = (state_34732[(2)]);
var state_34732__$1 = (function (){var statearr_34740 = state_34732;
(statearr_34740[(8)] = inst_34724);

return statearr_34740;
})();
var statearr_34741_34759 = state_34732__$1;
(statearr_34741_34759[(2)] = null);

(statearr_34741_34759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (9))){
var inst_34718 = (state_34732[(9)]);
var inst_34716 = (state_34732[(10)]);
var inst_34720 = inst_34718.call(null,inst_34716);
var state_34732__$1 = state_34732;
var statearr_34742_34760 = state_34732__$1;
(statearr_34742_34760[(2)] = inst_34720);

(statearr_34742_34760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (5))){
var inst_34712 = (state_34732[(7)]);
var inst_34714 = figwheel.client.file_reloading.blocking_load.call(null,inst_34712);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(8),inst_34714);
} else {
if((state_val_34733 === (10))){
var inst_34716 = (state_34732[(10)]);
var inst_34722 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34716);
var state_34732__$1 = state_34732;
var statearr_34743_34761 = state_34732__$1;
(statearr_34743_34761[(2)] = inst_34722);

(statearr_34743_34761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (8))){
var inst_34718 = (state_34732[(9)]);
var inst_34712 = (state_34732[(7)]);
var inst_34716 = (state_34732[(2)]);
var inst_34717 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34718__$1 = cljs.core.get.call(null,inst_34717,inst_34712);
var state_34732__$1 = (function (){var statearr_34744 = state_34732;
(statearr_34744[(9)] = inst_34718__$1);

(statearr_34744[(10)] = inst_34716);

return statearr_34744;
})();
if(cljs.core.truth_(inst_34718__$1)){
var statearr_34745_34762 = state_34732__$1;
(statearr_34745_34762[(1)] = (9));

} else {
var statearr_34746_34763 = state_34732__$1;
(statearr_34746_34763[(1)] = (10));

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
var statearr_34750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34750[(0)] = figwheel$client$file_reloading$state_machine__19164__auto__);

(statearr_34750[(1)] = (1));

return statearr_34750;
});
var figwheel$client$file_reloading$state_machine__19164__auto____1 = (function (state_34732){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_34732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e34751){if((e34751 instanceof Object)){
var ex__19167__auto__ = e34751;
var statearr_34752_34764 = state_34732;
(statearr_34752_34764[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34765 = state_34732;
state_34732 = G__34765;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19164__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19164__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19164__auto____0;
figwheel$client$file_reloading$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19164__auto____1;
return figwheel$client$file_reloading$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_34753 = f__19185__auto__.call(null);
(statearr_34753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_34753;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34766,callback){
var map__34769 = p__34766;
var map__34769__$1 = ((((!((map__34769 == null)))?((((map__34769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34769):map__34769);
var file_msg = map__34769__$1;
var namespace = cljs.core.get.call(null,map__34769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34769,map__34769__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34769,map__34769__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34771){
var map__34774 = p__34771;
var map__34774__$1 = ((((!((map__34774 == null)))?((((map__34774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34774):map__34774);
var file_msg = map__34774__$1;
var namespace = cljs.core.get.call(null,map__34774__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34776,callback){
var map__34779 = p__34776;
var map__34779__$1 = ((((!((map__34779 == null)))?((((map__34779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34779):map__34779);
var file_msg = map__34779__$1;
var request_url = cljs.core.get.call(null,map__34779__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34779__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19184__auto___34867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___34867,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___34867,out){
return (function (state_34849){
var state_val_34850 = (state_34849[(1)]);
if((state_val_34850 === (1))){
var inst_34827 = cljs.core.nth.call(null,files,(0),null);
var inst_34828 = cljs.core.nthnext.call(null,files,(1));
var inst_34829 = files;
var state_34849__$1 = (function (){var statearr_34851 = state_34849;
(statearr_34851[(7)] = inst_34829);

(statearr_34851[(8)] = inst_34828);

(statearr_34851[(9)] = inst_34827);

return statearr_34851;
})();
var statearr_34852_34868 = state_34849__$1;
(statearr_34852_34868[(2)] = null);

(statearr_34852_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (2))){
var inst_34829 = (state_34849[(7)]);
var inst_34832 = (state_34849[(10)]);
var inst_34832__$1 = cljs.core.nth.call(null,inst_34829,(0),null);
var inst_34833 = cljs.core.nthnext.call(null,inst_34829,(1));
var inst_34834 = (inst_34832__$1 == null);
var inst_34835 = cljs.core.not.call(null,inst_34834);
var state_34849__$1 = (function (){var statearr_34853 = state_34849;
(statearr_34853[(11)] = inst_34833);

(statearr_34853[(10)] = inst_34832__$1);

return statearr_34853;
})();
if(inst_34835){
var statearr_34854_34869 = state_34849__$1;
(statearr_34854_34869[(1)] = (4));

} else {
var statearr_34855_34870 = state_34849__$1;
(statearr_34855_34870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (3))){
var inst_34847 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34849__$1,inst_34847);
} else {
if((state_val_34850 === (4))){
var inst_34832 = (state_34849[(10)]);
var inst_34837 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34832);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34849__$1,(7),inst_34837);
} else {
if((state_val_34850 === (5))){
var inst_34843 = cljs.core.async.close_BANG_.call(null,out);
var state_34849__$1 = state_34849;
var statearr_34856_34871 = state_34849__$1;
(statearr_34856_34871[(2)] = inst_34843);

(statearr_34856_34871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (6))){
var inst_34845 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34857_34872 = state_34849__$1;
(statearr_34857_34872[(2)] = inst_34845);

(statearr_34857_34872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (7))){
var inst_34833 = (state_34849[(11)]);
var inst_34839 = (state_34849[(2)]);
var inst_34840 = cljs.core.async.put_BANG_.call(null,out,inst_34839);
var inst_34829 = inst_34833;
var state_34849__$1 = (function (){var statearr_34858 = state_34849;
(statearr_34858[(7)] = inst_34829);

(statearr_34858[(12)] = inst_34840);

return statearr_34858;
})();
var statearr_34859_34873 = state_34849__$1;
(statearr_34859_34873[(2)] = null);

(statearr_34859_34873[(1)] = (2));


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
});})(c__19184__auto___34867,out))
;
return ((function (switch__19163__auto__,c__19184__auto___34867,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____0 = (function (){
var statearr_34863 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34863[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__);

(statearr_34863[(1)] = (1));

return statearr_34863;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____1 = (function (state_34849){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_34849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e34864){if((e34864 instanceof Object)){
var ex__19167__auto__ = e34864;
var statearr_34865_34874 = state_34849;
(statearr_34865_34874[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_34849;
state_34849 = G__34875;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__ = function(state_34849){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____1.call(this,state_34849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___34867,out))
})();
var state__19186__auto__ = (function (){var statearr_34866 = f__19185__auto__.call(null);
(statearr_34866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___34867);

return statearr_34866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___34867,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34876,opts){
var map__34880 = p__34876;
var map__34880__$1 = ((((!((map__34880 == null)))?((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34880):map__34880);
var eval_body__$1 = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34882){var e = e34882;
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
return (function (p1__34883_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34883_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34888){
var vec__34889 = p__34888;
var k = cljs.core.nth.call(null,vec__34889,(0),null);
var v = cljs.core.nth.call(null,vec__34889,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34890){
var vec__34891 = p__34890;
var k = cljs.core.nth.call(null,vec__34891,(0),null);
var v = cljs.core.nth.call(null,vec__34891,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34895,p__34896){
var map__35143 = p__34895;
var map__35143__$1 = ((((!((map__35143 == null)))?((((map__35143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35143):map__35143);
var opts = map__35143__$1;
var before_jsload = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35144 = p__34896;
var map__35144__$1 = ((((!((map__35144 == null)))?((((map__35144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35144):map__35144);
var msg = map__35144__$1;
var files = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35297){
var state_val_35298 = (state_35297[(1)]);
if((state_val_35298 === (7))){
var inst_35159 = (state_35297[(7)]);
var inst_35161 = (state_35297[(8)]);
var inst_35160 = (state_35297[(9)]);
var inst_35158 = (state_35297[(10)]);
var inst_35166 = cljs.core._nth.call(null,inst_35159,inst_35161);
var inst_35167 = figwheel.client.file_reloading.eval_body.call(null,inst_35166,opts);
var inst_35168 = (inst_35161 + (1));
var tmp35299 = inst_35159;
var tmp35300 = inst_35160;
var tmp35301 = inst_35158;
var inst_35158__$1 = tmp35301;
var inst_35159__$1 = tmp35299;
var inst_35160__$1 = tmp35300;
var inst_35161__$1 = inst_35168;
var state_35297__$1 = (function (){var statearr_35302 = state_35297;
(statearr_35302[(7)] = inst_35159__$1);

(statearr_35302[(11)] = inst_35167);

(statearr_35302[(8)] = inst_35161__$1);

(statearr_35302[(9)] = inst_35160__$1);

(statearr_35302[(10)] = inst_35158__$1);

return statearr_35302;
})();
var statearr_35303_35389 = state_35297__$1;
(statearr_35303_35389[(2)] = null);

(statearr_35303_35389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (20))){
var inst_35201 = (state_35297[(12)]);
var inst_35209 = figwheel.client.file_reloading.sort_files.call(null,inst_35201);
var state_35297__$1 = state_35297;
var statearr_35304_35390 = state_35297__$1;
(statearr_35304_35390[(2)] = inst_35209);

(statearr_35304_35390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (27))){
var state_35297__$1 = state_35297;
var statearr_35305_35391 = state_35297__$1;
(statearr_35305_35391[(2)] = null);

(statearr_35305_35391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (1))){
var inst_35150 = (state_35297[(13)]);
var inst_35147 = before_jsload.call(null,files);
var inst_35148 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35149 = (function (){return ((function (inst_35150,inst_35147,inst_35148,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34892_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34892_SHARP_);
});
;})(inst_35150,inst_35147,inst_35148,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35150__$1 = cljs.core.filter.call(null,inst_35149,files);
var inst_35151 = cljs.core.not_empty.call(null,inst_35150__$1);
var state_35297__$1 = (function (){var statearr_35306 = state_35297;
(statearr_35306[(14)] = inst_35148);

(statearr_35306[(15)] = inst_35147);

(statearr_35306[(13)] = inst_35150__$1);

return statearr_35306;
})();
if(cljs.core.truth_(inst_35151)){
var statearr_35307_35392 = state_35297__$1;
(statearr_35307_35392[(1)] = (2));

} else {
var statearr_35308_35393 = state_35297__$1;
(statearr_35308_35393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (24))){
var state_35297__$1 = state_35297;
var statearr_35309_35394 = state_35297__$1;
(statearr_35309_35394[(2)] = null);

(statearr_35309_35394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (39))){
var inst_35251 = (state_35297[(16)]);
var state_35297__$1 = state_35297;
var statearr_35310_35395 = state_35297__$1;
(statearr_35310_35395[(2)] = inst_35251);

(statearr_35310_35395[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (46))){
var inst_35292 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35311_35396 = state_35297__$1;
(statearr_35311_35396[(2)] = inst_35292);

(statearr_35311_35396[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (4))){
var inst_35195 = (state_35297[(2)]);
var inst_35196 = cljs.core.List.EMPTY;
var inst_35197 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35196);
var inst_35198 = (function (){return ((function (inst_35195,inst_35196,inst_35197,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34893_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34893_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34893_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_35195,inst_35196,inst_35197,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35199 = cljs.core.filter.call(null,inst_35198,files);
var inst_35200 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35201 = cljs.core.concat.call(null,inst_35199,inst_35200);
var state_35297__$1 = (function (){var statearr_35312 = state_35297;
(statearr_35312[(17)] = inst_35195);

(statearr_35312[(12)] = inst_35201);

(statearr_35312[(18)] = inst_35197);

return statearr_35312;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35313_35397 = state_35297__$1;
(statearr_35313_35397[(1)] = (16));

} else {
var statearr_35314_35398 = state_35297__$1;
(statearr_35314_35398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (15))){
var inst_35185 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35315_35399 = state_35297__$1;
(statearr_35315_35399[(2)] = inst_35185);

(statearr_35315_35399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (21))){
var inst_35211 = (state_35297[(19)]);
var inst_35211__$1 = (state_35297[(2)]);
var inst_35212 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35211__$1);
var state_35297__$1 = (function (){var statearr_35316 = state_35297;
(statearr_35316[(19)] = inst_35211__$1);

return statearr_35316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35297__$1,(22),inst_35212);
} else {
if((state_val_35298 === (31))){
var inst_35295 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35297__$1,inst_35295);
} else {
if((state_val_35298 === (32))){
var inst_35251 = (state_35297[(16)]);
var inst_35256 = inst_35251.cljs$lang$protocol_mask$partition0$;
var inst_35257 = (inst_35256 & (64));
var inst_35258 = inst_35251.cljs$core$ISeq$;
var inst_35259 = (inst_35257) || (inst_35258);
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35259)){
var statearr_35317_35400 = state_35297__$1;
(statearr_35317_35400[(1)] = (35));

} else {
var statearr_35318_35401 = state_35297__$1;
(statearr_35318_35401[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (40))){
var inst_35272 = (state_35297[(20)]);
var inst_35271 = (state_35297[(2)]);
var inst_35272__$1 = cljs.core.get.call(null,inst_35271,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35273 = cljs.core.get.call(null,inst_35271,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35274 = cljs.core.not_empty.call(null,inst_35272__$1);
var state_35297__$1 = (function (){var statearr_35319 = state_35297;
(statearr_35319[(21)] = inst_35273);

(statearr_35319[(20)] = inst_35272__$1);

return statearr_35319;
})();
if(cljs.core.truth_(inst_35274)){
var statearr_35320_35402 = state_35297__$1;
(statearr_35320_35402[(1)] = (41));

} else {
var statearr_35321_35403 = state_35297__$1;
(statearr_35321_35403[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (33))){
var state_35297__$1 = state_35297;
var statearr_35322_35404 = state_35297__$1;
(statearr_35322_35404[(2)] = false);

(statearr_35322_35404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (13))){
var inst_35171 = (state_35297[(22)]);
var inst_35175 = cljs.core.chunk_first.call(null,inst_35171);
var inst_35176 = cljs.core.chunk_rest.call(null,inst_35171);
var inst_35177 = cljs.core.count.call(null,inst_35175);
var inst_35158 = inst_35176;
var inst_35159 = inst_35175;
var inst_35160 = inst_35177;
var inst_35161 = (0);
var state_35297__$1 = (function (){var statearr_35323 = state_35297;
(statearr_35323[(7)] = inst_35159);

(statearr_35323[(8)] = inst_35161);

(statearr_35323[(9)] = inst_35160);

(statearr_35323[(10)] = inst_35158);

return statearr_35323;
})();
var statearr_35324_35405 = state_35297__$1;
(statearr_35324_35405[(2)] = null);

(statearr_35324_35405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (22))){
var inst_35215 = (state_35297[(23)]);
var inst_35211 = (state_35297[(19)]);
var inst_35219 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35214__$1 = (state_35297[(2)]);
var inst_35215__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35214__$1);
var inst_35216 = (function (){var all_files = inst_35211;
var res_SINGLEQUOTE_ = inst_35214__$1;
var res = inst_35215__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35215,inst_35211,inst_35219,inst_35214,inst_35214__$1,inst_35215__$1,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34894_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34894_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35215,inst_35211,inst_35219,inst_35214,inst_35214__$1,inst_35215__$1,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35217 = cljs.core.filter.call(null,inst_35216,inst_35214__$1);
var inst_35218 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35219__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35218);
var inst_35220 = cljs.core.not_empty.call(null,inst_35219__$1);
var state_35297__$1 = (function (){var statearr_35325 = state_35297;
(statearr_35325[(26)] = inst_35217);

(statearr_35325[(23)] = inst_35215__$1);

(statearr_35325[(24)] = inst_35219__$1);

(statearr_35325[(25)] = inst_35214__$1);

return statearr_35325;
})();
if(cljs.core.truth_(inst_35220)){
var statearr_35326_35406 = state_35297__$1;
(statearr_35326_35406[(1)] = (23));

} else {
var statearr_35327_35407 = state_35297__$1;
(statearr_35327_35407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (36))){
var state_35297__$1 = state_35297;
var statearr_35328_35408 = state_35297__$1;
(statearr_35328_35408[(2)] = false);

(statearr_35328_35408[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (41))){
var inst_35272 = (state_35297[(20)]);
var inst_35276 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35277 = cljs.core.map.call(null,inst_35276,inst_35272);
var inst_35278 = cljs.core.pr_str.call(null,inst_35277);
var inst_35279 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35278)].join('');
var inst_35280 = figwheel.client.utils.log.call(null,inst_35279);
var state_35297__$1 = state_35297;
var statearr_35329_35409 = state_35297__$1;
(statearr_35329_35409[(2)] = inst_35280);

(statearr_35329_35409[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (43))){
var inst_35273 = (state_35297[(21)]);
var inst_35283 = (state_35297[(2)]);
var inst_35284 = cljs.core.not_empty.call(null,inst_35273);
var state_35297__$1 = (function (){var statearr_35330 = state_35297;
(statearr_35330[(27)] = inst_35283);

return statearr_35330;
})();
if(cljs.core.truth_(inst_35284)){
var statearr_35331_35410 = state_35297__$1;
(statearr_35331_35410[(1)] = (44));

} else {
var statearr_35332_35411 = state_35297__$1;
(statearr_35332_35411[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (29))){
var inst_35251 = (state_35297[(16)]);
var inst_35217 = (state_35297[(26)]);
var inst_35215 = (state_35297[(23)]);
var inst_35211 = (state_35297[(19)]);
var inst_35219 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35250 = (function (){var all_files = inst_35211;
var res_SINGLEQUOTE_ = inst_35214;
var res = inst_35215;
var files_not_loaded = inst_35217;
var dependencies_that_loaded = inst_35219;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35251,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35247,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35249){
var map__35333 = p__35249;
var map__35333__$1 = ((((!((map__35333 == null)))?((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var namespace = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35251,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35247,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35251__$1 = cljs.core.group_by.call(null,inst_35250,inst_35217);
var inst_35253 = (inst_35251__$1 == null);
var inst_35254 = cljs.core.not.call(null,inst_35253);
var state_35297__$1 = (function (){var statearr_35335 = state_35297;
(statearr_35335[(16)] = inst_35251__$1);

(statearr_35335[(28)] = inst_35247);

return statearr_35335;
})();
if(inst_35254){
var statearr_35336_35412 = state_35297__$1;
(statearr_35336_35412[(1)] = (32));

} else {
var statearr_35337_35413 = state_35297__$1;
(statearr_35337_35413[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (44))){
var inst_35273 = (state_35297[(21)]);
var inst_35286 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35273);
var inst_35287 = cljs.core.pr_str.call(null,inst_35286);
var inst_35288 = [cljs.core.str("not required: "),cljs.core.str(inst_35287)].join('');
var inst_35289 = figwheel.client.utils.log.call(null,inst_35288);
var state_35297__$1 = state_35297;
var statearr_35338_35414 = state_35297__$1;
(statearr_35338_35414[(2)] = inst_35289);

(statearr_35338_35414[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (6))){
var inst_35192 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35339_35415 = state_35297__$1;
(statearr_35339_35415[(2)] = inst_35192);

(statearr_35339_35415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (28))){
var inst_35217 = (state_35297[(26)]);
var inst_35244 = (state_35297[(2)]);
var inst_35245 = cljs.core.not_empty.call(null,inst_35217);
var state_35297__$1 = (function (){var statearr_35340 = state_35297;
(statearr_35340[(29)] = inst_35244);

return statearr_35340;
})();
if(cljs.core.truth_(inst_35245)){
var statearr_35341_35416 = state_35297__$1;
(statearr_35341_35416[(1)] = (29));

} else {
var statearr_35342_35417 = state_35297__$1;
(statearr_35342_35417[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (25))){
var inst_35215 = (state_35297[(23)]);
var inst_35231 = (state_35297[(2)]);
var inst_35232 = cljs.core.not_empty.call(null,inst_35215);
var state_35297__$1 = (function (){var statearr_35343 = state_35297;
(statearr_35343[(30)] = inst_35231);

return statearr_35343;
})();
if(cljs.core.truth_(inst_35232)){
var statearr_35344_35418 = state_35297__$1;
(statearr_35344_35418[(1)] = (26));

} else {
var statearr_35345_35419 = state_35297__$1;
(statearr_35345_35419[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (34))){
var inst_35266 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35266)){
var statearr_35346_35420 = state_35297__$1;
(statearr_35346_35420[(1)] = (38));

} else {
var statearr_35347_35421 = state_35297__$1;
(statearr_35347_35421[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (17))){
var state_35297__$1 = state_35297;
var statearr_35348_35422 = state_35297__$1;
(statearr_35348_35422[(2)] = recompile_dependents);

(statearr_35348_35422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (3))){
var state_35297__$1 = state_35297;
var statearr_35349_35423 = state_35297__$1;
(statearr_35349_35423[(2)] = null);

(statearr_35349_35423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (12))){
var inst_35188 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35350_35424 = state_35297__$1;
(statearr_35350_35424[(2)] = inst_35188);

(statearr_35350_35424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (2))){
var inst_35150 = (state_35297[(13)]);
var inst_35157 = cljs.core.seq.call(null,inst_35150);
var inst_35158 = inst_35157;
var inst_35159 = null;
var inst_35160 = (0);
var inst_35161 = (0);
var state_35297__$1 = (function (){var statearr_35351 = state_35297;
(statearr_35351[(7)] = inst_35159);

(statearr_35351[(8)] = inst_35161);

(statearr_35351[(9)] = inst_35160);

(statearr_35351[(10)] = inst_35158);

return statearr_35351;
})();
var statearr_35352_35425 = state_35297__$1;
(statearr_35352_35425[(2)] = null);

(statearr_35352_35425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (23))){
var inst_35217 = (state_35297[(26)]);
var inst_35215 = (state_35297[(23)]);
var inst_35211 = (state_35297[(19)]);
var inst_35219 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35224 = (function (){var all_files = inst_35211;
var res_SINGLEQUOTE_ = inst_35214;
var res = inst_35215;
var files_not_loaded = inst_35217;
var dependencies_that_loaded = inst_35219;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35222,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35223){
var map__35353 = p__35223;
var map__35353__$1 = ((((!((map__35353 == null)))?((((map__35353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35353):map__35353);
var request_url = cljs.core.get.call(null,map__35353__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35222,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35225 = cljs.core.reverse.call(null,inst_35219);
var inst_35226 = cljs.core.map.call(null,inst_35224,inst_35225);
var inst_35227 = cljs.core.pr_str.call(null,inst_35226);
var inst_35228 = figwheel.client.utils.log.call(null,inst_35227);
var state_35297__$1 = (function (){var statearr_35355 = state_35297;
(statearr_35355[(31)] = inst_35222);

return statearr_35355;
})();
var statearr_35356_35426 = state_35297__$1;
(statearr_35356_35426[(2)] = inst_35228);

(statearr_35356_35426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (35))){
var state_35297__$1 = state_35297;
var statearr_35357_35427 = state_35297__$1;
(statearr_35357_35427[(2)] = true);

(statearr_35357_35427[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (19))){
var inst_35201 = (state_35297[(12)]);
var inst_35207 = figwheel.client.file_reloading.expand_files.call(null,inst_35201);
var state_35297__$1 = state_35297;
var statearr_35358_35428 = state_35297__$1;
(statearr_35358_35428[(2)] = inst_35207);

(statearr_35358_35428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (11))){
var state_35297__$1 = state_35297;
var statearr_35359_35429 = state_35297__$1;
(statearr_35359_35429[(2)] = null);

(statearr_35359_35429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (9))){
var inst_35190 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35360_35430 = state_35297__$1;
(statearr_35360_35430[(2)] = inst_35190);

(statearr_35360_35430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (5))){
var inst_35161 = (state_35297[(8)]);
var inst_35160 = (state_35297[(9)]);
var inst_35163 = (inst_35161 < inst_35160);
var inst_35164 = inst_35163;
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35164)){
var statearr_35361_35431 = state_35297__$1;
(statearr_35361_35431[(1)] = (7));

} else {
var statearr_35362_35432 = state_35297__$1;
(statearr_35362_35432[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (14))){
var inst_35171 = (state_35297[(22)]);
var inst_35180 = cljs.core.first.call(null,inst_35171);
var inst_35181 = figwheel.client.file_reloading.eval_body.call(null,inst_35180,opts);
var inst_35182 = cljs.core.next.call(null,inst_35171);
var inst_35158 = inst_35182;
var inst_35159 = null;
var inst_35160 = (0);
var inst_35161 = (0);
var state_35297__$1 = (function (){var statearr_35363 = state_35297;
(statearr_35363[(7)] = inst_35159);

(statearr_35363[(8)] = inst_35161);

(statearr_35363[(32)] = inst_35181);

(statearr_35363[(9)] = inst_35160);

(statearr_35363[(10)] = inst_35158);

return statearr_35363;
})();
var statearr_35364_35433 = state_35297__$1;
(statearr_35364_35433[(2)] = null);

(statearr_35364_35433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (45))){
var state_35297__$1 = state_35297;
var statearr_35365_35434 = state_35297__$1;
(statearr_35365_35434[(2)] = null);

(statearr_35365_35434[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (26))){
var inst_35217 = (state_35297[(26)]);
var inst_35215 = (state_35297[(23)]);
var inst_35211 = (state_35297[(19)]);
var inst_35219 = (state_35297[(24)]);
var inst_35214 = (state_35297[(25)]);
var inst_35234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35236 = (function (){var all_files = inst_35211;
var res_SINGLEQUOTE_ = inst_35214;
var res = inst_35215;
var files_not_loaded = inst_35217;
var dependencies_that_loaded = inst_35219;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35234,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35235){
var map__35366 = p__35235;
var map__35366__$1 = ((((!((map__35366 == null)))?((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var namespace = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35234,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35237 = cljs.core.map.call(null,inst_35236,inst_35215);
var inst_35238 = cljs.core.pr_str.call(null,inst_35237);
var inst_35239 = figwheel.client.utils.log.call(null,inst_35238);
var inst_35240 = (function (){var all_files = inst_35211;
var res_SINGLEQUOTE_ = inst_35214;
var res = inst_35215;
var files_not_loaded = inst_35217;
var dependencies_that_loaded = inst_35219;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35234,inst_35236,inst_35237,inst_35238,inst_35239,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35217,inst_35215,inst_35211,inst_35219,inst_35214,inst_35234,inst_35236,inst_35237,inst_35238,inst_35239,state_val_35298,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35241 = setTimeout(inst_35240,(10));
var state_35297__$1 = (function (){var statearr_35368 = state_35297;
(statearr_35368[(33)] = inst_35239);

(statearr_35368[(34)] = inst_35234);

return statearr_35368;
})();
var statearr_35369_35435 = state_35297__$1;
(statearr_35369_35435[(2)] = inst_35241);

(statearr_35369_35435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (16))){
var state_35297__$1 = state_35297;
var statearr_35370_35436 = state_35297__$1;
(statearr_35370_35436[(2)] = reload_dependents);

(statearr_35370_35436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (38))){
var inst_35251 = (state_35297[(16)]);
var inst_35268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35251);
var state_35297__$1 = state_35297;
var statearr_35371_35437 = state_35297__$1;
(statearr_35371_35437[(2)] = inst_35268);

(statearr_35371_35437[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (30))){
var state_35297__$1 = state_35297;
var statearr_35372_35438 = state_35297__$1;
(statearr_35372_35438[(2)] = null);

(statearr_35372_35438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (10))){
var inst_35171 = (state_35297[(22)]);
var inst_35173 = cljs.core.chunked_seq_QMARK_.call(null,inst_35171);
var state_35297__$1 = state_35297;
if(inst_35173){
var statearr_35373_35439 = state_35297__$1;
(statearr_35373_35439[(1)] = (13));

} else {
var statearr_35374_35440 = state_35297__$1;
(statearr_35374_35440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (18))){
var inst_35205 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
if(cljs.core.truth_(inst_35205)){
var statearr_35375_35441 = state_35297__$1;
(statearr_35375_35441[(1)] = (19));

} else {
var statearr_35376_35442 = state_35297__$1;
(statearr_35376_35442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (42))){
var state_35297__$1 = state_35297;
var statearr_35377_35443 = state_35297__$1;
(statearr_35377_35443[(2)] = null);

(statearr_35377_35443[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (37))){
var inst_35263 = (state_35297[(2)]);
var state_35297__$1 = state_35297;
var statearr_35378_35444 = state_35297__$1;
(statearr_35378_35444[(2)] = inst_35263);

(statearr_35378_35444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35298 === (8))){
var inst_35171 = (state_35297[(22)]);
var inst_35158 = (state_35297[(10)]);
var inst_35171__$1 = cljs.core.seq.call(null,inst_35158);
var state_35297__$1 = (function (){var statearr_35379 = state_35297;
(statearr_35379[(22)] = inst_35171__$1);

return statearr_35379;
})();
if(inst_35171__$1){
var statearr_35380_35445 = state_35297__$1;
(statearr_35380_35445[(1)] = (10));

} else {
var statearr_35381_35446 = state_35297__$1;
(statearr_35381_35446[(1)] = (11));

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
});})(c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19163__auto__,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____0 = (function (){
var statearr_35385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35385[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__);

(statearr_35385[(1)] = (1));

return statearr_35385;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____1 = (function (state_35297){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_35297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e35386){if((e35386 instanceof Object)){
var ex__19167__auto__ = e35386;
var statearr_35387_35447 = state_35297;
(statearr_35387_35447[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35448 = state_35297;
state_35297 = G__35448;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__ = function(state_35297){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____1.call(this,state_35297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19186__auto__ = (function (){var statearr_35388 = f__19185__auto__.call(null);
(statearr_35388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_35388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,map__35143,map__35143__$1,opts,before_jsload,on_jsload,reload_dependents,map__35144,map__35144__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19184__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35451,link){
var map__35454 = p__35451;
var map__35454__$1 = ((((!((map__35454 == null)))?((((map__35454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35454):map__35454);
var file = cljs.core.get.call(null,map__35454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35454,map__35454__$1,file){
return (function (p1__35449_SHARP_,p2__35450_SHARP_){
if(cljs.core._EQ_.call(null,p1__35449_SHARP_,p2__35450_SHARP_)){
return p1__35449_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35454,map__35454__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35460){
var map__35461 = p__35460;
var map__35461__$1 = ((((!((map__35461 == null)))?((((map__35461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35461):map__35461);
var match_length = cljs.core.get.call(null,map__35461__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35461__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35456_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35456_SHARP_);
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
var args35463 = [];
var len__17863__auto___35466 = arguments.length;
var i__17864__auto___35467 = (0);
while(true){
if((i__17864__auto___35467 < len__17863__auto___35466)){
args35463.push((arguments[i__17864__auto___35467]));

var G__35468 = (i__17864__auto___35467 + (1));
i__17864__auto___35467 = G__35468;
continue;
} else {
}
break;
}

var G__35465 = args35463.length;
switch (G__35465) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35463.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35470_SHARP_,p2__35471_SHARP_){
return cljs.core.assoc.call(null,p1__35470_SHARP_,cljs.core.get.call(null,p2__35471_SHARP_,key),p2__35471_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35472){
var map__35475 = p__35472;
var map__35475__$1 = ((((!((map__35475 == null)))?((((map__35475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35475):map__35475);
var f_data = map__35475__$1;
var file = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35477,files_msg){
var map__35484 = p__35477;
var map__35484__$1 = ((((!((map__35484 == null)))?((((map__35484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35484):map__35484);
var opts = map__35484__$1;
var on_cssload = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35486_35490 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35487_35491 = null;
var count__35488_35492 = (0);
var i__35489_35493 = (0);
while(true){
if((i__35489_35493 < count__35488_35492)){
var f_35494 = cljs.core._nth.call(null,chunk__35487_35491,i__35489_35493);
figwheel.client.file_reloading.reload_css_file.call(null,f_35494);

var G__35495 = seq__35486_35490;
var G__35496 = chunk__35487_35491;
var G__35497 = count__35488_35492;
var G__35498 = (i__35489_35493 + (1));
seq__35486_35490 = G__35495;
chunk__35487_35491 = G__35496;
count__35488_35492 = G__35497;
i__35489_35493 = G__35498;
continue;
} else {
var temp__4425__auto___35499 = cljs.core.seq.call(null,seq__35486_35490);
if(temp__4425__auto___35499){
var seq__35486_35500__$1 = temp__4425__auto___35499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35486_35500__$1)){
var c__17608__auto___35501 = cljs.core.chunk_first.call(null,seq__35486_35500__$1);
var G__35502 = cljs.core.chunk_rest.call(null,seq__35486_35500__$1);
var G__35503 = c__17608__auto___35501;
var G__35504 = cljs.core.count.call(null,c__17608__auto___35501);
var G__35505 = (0);
seq__35486_35490 = G__35502;
chunk__35487_35491 = G__35503;
count__35488_35492 = G__35504;
i__35489_35493 = G__35505;
continue;
} else {
var f_35506 = cljs.core.first.call(null,seq__35486_35500__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35506);

var G__35507 = cljs.core.next.call(null,seq__35486_35500__$1);
var G__35508 = null;
var G__35509 = (0);
var G__35510 = (0);
seq__35486_35490 = G__35507;
chunk__35487_35491 = G__35508;
count__35488_35492 = G__35509;
i__35489_35493 = G__35510;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35484,map__35484__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35484,map__35484__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1463388066269