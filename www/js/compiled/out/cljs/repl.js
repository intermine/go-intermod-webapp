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
var seq__35527_35541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35528_35542 = null;
var count__35529_35543 = (0);
var i__35530_35544 = (0);
while(true){
if((i__35530_35544 < count__35529_35543)){
var f_35545 = cljs.core._nth.call(null,chunk__35528_35542,i__35530_35544);
cljs.core.println.call(null,"  ",f_35545);

var G__35546 = seq__35527_35541;
var G__35547 = chunk__35528_35542;
var G__35548 = count__35529_35543;
var G__35549 = (i__35530_35544 + (1));
seq__35527_35541 = G__35546;
chunk__35528_35542 = G__35547;
count__35529_35543 = G__35548;
i__35530_35544 = G__35549;
continue;
} else {
var temp__4425__auto___35550 = cljs.core.seq.call(null,seq__35527_35541);
if(temp__4425__auto___35550){
var seq__35527_35551__$1 = temp__4425__auto___35550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35527_35551__$1)){
var c__17608__auto___35552 = cljs.core.chunk_first.call(null,seq__35527_35551__$1);
var G__35553 = cljs.core.chunk_rest.call(null,seq__35527_35551__$1);
var G__35554 = c__17608__auto___35552;
var G__35555 = cljs.core.count.call(null,c__17608__auto___35552);
var G__35556 = (0);
seq__35527_35541 = G__35553;
chunk__35528_35542 = G__35554;
count__35529_35543 = G__35555;
i__35530_35544 = G__35556;
continue;
} else {
var f_35557 = cljs.core.first.call(null,seq__35527_35551__$1);
cljs.core.println.call(null,"  ",f_35557);

var G__35558 = cljs.core.next.call(null,seq__35527_35551__$1);
var G__35559 = null;
var G__35560 = (0);
var G__35561 = (0);
seq__35527_35541 = G__35558;
chunk__35528_35542 = G__35559;
count__35529_35543 = G__35560;
i__35530_35544 = G__35561;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35562 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35562);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35562)))?cljs.core.second.call(null,arglists_35562):arglists_35562));
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
var seq__35531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35532 = null;
var count__35533 = (0);
var i__35534 = (0);
while(true){
if((i__35534 < count__35533)){
var vec__35535 = cljs.core._nth.call(null,chunk__35532,i__35534);
var name = cljs.core.nth.call(null,vec__35535,(0),null);
var map__35536 = cljs.core.nth.call(null,vec__35535,(1),null);
var map__35536__$1 = ((((!((map__35536 == null)))?((((map__35536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35536):map__35536);
var doc = cljs.core.get.call(null,map__35536__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35536__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35563 = seq__35531;
var G__35564 = chunk__35532;
var G__35565 = count__35533;
var G__35566 = (i__35534 + (1));
seq__35531 = G__35563;
chunk__35532 = G__35564;
count__35533 = G__35565;
i__35534 = G__35566;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35531);
if(temp__4425__auto__){
var seq__35531__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35531__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__35531__$1);
var G__35567 = cljs.core.chunk_rest.call(null,seq__35531__$1);
var G__35568 = c__17608__auto__;
var G__35569 = cljs.core.count.call(null,c__17608__auto__);
var G__35570 = (0);
seq__35531 = G__35567;
chunk__35532 = G__35568;
count__35533 = G__35569;
i__35534 = G__35570;
continue;
} else {
var vec__35538 = cljs.core.first.call(null,seq__35531__$1);
var name = cljs.core.nth.call(null,vec__35538,(0),null);
var map__35539 = cljs.core.nth.call(null,vec__35538,(1),null);
var map__35539__$1 = ((((!((map__35539 == null)))?((((map__35539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35539):map__35539);
var doc = cljs.core.get.call(null,map__35539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35571 = cljs.core.next.call(null,seq__35531__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__35531 = G__35571;
chunk__35532 = G__35572;
count__35533 = G__35573;
i__35534 = G__35574;
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

//# sourceMappingURL=repl.js.map?rel=1463388066356