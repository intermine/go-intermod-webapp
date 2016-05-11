// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27725_27739 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27726_27740 = null;
var count__27727_27741 = (0);
var i__27728_27742 = (0);
while(true){
if((i__27728_27742 < count__27727_27741)){
var f_27743 = cljs.core._nth.call(null,chunk__27726_27740,i__27728_27742);
cljs.core.println.call(null,"  ",f_27743);

var G__27744 = seq__27725_27739;
var G__27745 = chunk__27726_27740;
var G__27746 = count__27727_27741;
var G__27747 = (i__27728_27742 + (1));
seq__27725_27739 = G__27744;
chunk__27726_27740 = G__27745;
count__27727_27741 = G__27746;
i__27728_27742 = G__27747;
continue;
} else {
var temp__4425__auto___27748 = cljs.core.seq.call(null,seq__27725_27739);
if(temp__4425__auto___27748){
var seq__27725_27749__$1 = temp__4425__auto___27748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27725_27749__$1)){
var c__17608__auto___27750 = cljs.core.chunk_first.call(null,seq__27725_27749__$1);
var G__27751 = cljs.core.chunk_rest.call(null,seq__27725_27749__$1);
var G__27752 = c__17608__auto___27750;
var G__27753 = cljs.core.count.call(null,c__17608__auto___27750);
var G__27754 = (0);
seq__27725_27739 = G__27751;
chunk__27726_27740 = G__27752;
count__27727_27741 = G__27753;
i__27728_27742 = G__27754;
continue;
} else {
var f_27755 = cljs.core.first.call(null,seq__27725_27749__$1);
cljs.core.println.call(null,"  ",f_27755);

var G__27756 = cljs.core.next.call(null,seq__27725_27749__$1);
var G__27757 = null;
var G__27758 = (0);
var G__27759 = (0);
seq__27725_27739 = G__27756;
chunk__27726_27740 = G__27757;
count__27727_27741 = G__27758;
i__27728_27742 = G__27759;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27760 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27760);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27760)))?cljs.core.second.call(null,arglists_27760):arglists_27760));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27730 = null;
var count__27731 = (0);
var i__27732 = (0);
while(true){
if((i__27732 < count__27731)){
var vec__27733 = cljs.core._nth.call(null,chunk__27730,i__27732);
var name = cljs.core.nth.call(null,vec__27733,(0),null);
var map__27734 = cljs.core.nth.call(null,vec__27733,(1),null);
var map__27734__$1 = ((((!((map__27734 == null)))?((((map__27734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27734):map__27734);
var doc = cljs.core.get.call(null,map__27734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27761 = seq__27729;
var G__27762 = chunk__27730;
var G__27763 = count__27731;
var G__27764 = (i__27732 + (1));
seq__27729 = G__27761;
chunk__27730 = G__27762;
count__27731 = G__27763;
i__27732 = G__27764;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27729);
if(temp__4425__auto__){
var seq__27729__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27729__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__27729__$1);
var G__27765 = cljs.core.chunk_rest.call(null,seq__27729__$1);
var G__27766 = c__17608__auto__;
var G__27767 = cljs.core.count.call(null,c__17608__auto__);
var G__27768 = (0);
seq__27729 = G__27765;
chunk__27730 = G__27766;
count__27731 = G__27767;
i__27732 = G__27768;
continue;
} else {
var vec__27736 = cljs.core.first.call(null,seq__27729__$1);
var name = cljs.core.nth.call(null,vec__27736,(0),null);
var map__27737 = cljs.core.nth.call(null,vec__27736,(1),null);
var map__27737__$1 = ((((!((map__27737 == null)))?((((map__27737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27737):map__27737);
var doc = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27769 = cljs.core.next.call(null,seq__27729__$1);
var G__27770 = null;
var G__27771 = (0);
var G__27772 = (0);
seq__27729 = G__27769;
chunk__27730 = G__27770;
count__27731 = G__27771;
i__27732 = G__27772;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1462895598735