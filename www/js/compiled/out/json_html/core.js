// Compiled by ClojureScript 1.7.170 {}
goog.provide('json_html.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hiccups.runtime');
json_html.core.escape_html = (function json_html$core$escape_html(s){
return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;",">","&gt;","<","&lt;","\"","&quot;"], null));
});
json_html.core.render_keyword = (function json_html$core$render_keyword(k){
return clojure.string.join.call(null,"/",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,k)));
});
json_html.core.str_compare = (function json_html$core$str_compare(k1,k2){
return cljs.core.compare.call(null,[cljs.core.str(k1)].join(''),[cljs.core.str(k2)].join(''));
});
json_html.core.sort_map = (function json_html$core$sort_map(m){
try{return cljs.core.into.call(null,cljs.core.sorted_map.call(null),m);
}catch (e34220){if((e34220 instanceof Error)){
var _ = e34220;
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,json_html.core.str_compare),m);
} else {
throw e34220;

}
}});
json_html.core.sort_set = (function json_html$core$sort_set(s){
try{return cljs.core.into.call(null,cljs.core.sorted_set.call(null),s);
}catch (e34222){if((e34222 instanceof Error)){
var _ = e34222;
return cljs.core.into.call(null,cljs.core.sorted_set_by.call(null,json_html.core.str_compare),s);
} else {
throw e34222;

}
}});
json_html.core.render;
json_html.core.render_collection = (function json_html$core$render_collection(col){
if(cljs.core.empty_QMARK_.call(null,col)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-collection","span.jh-empty-collection",-107581393)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17577__auto__ = (function json_html$core$render_collection_$_iter__34231(s__34232){
return (new cljs.core.LazySeq(null,(function (){
var s__34232__$1 = s__34232;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34232__$1);
if(temp__4425__auto__){
var s__34232__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34232__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__34232__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__34234 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__34233 = (0);
while(true){
if((i__34233 < size__17576__auto__)){
var vec__34237 = cljs.core._nth.call(null,c__17575__auto__,i__34233);
var i = cljs.core.nth.call(null,vec__34237,(0),null);
var v = cljs.core.nth.call(null,vec__34237,(1),null);
cljs.core.chunk_append.call(null,b__34234,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__34239 = (i__34233 + (1));
i__34233 = G__34239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34234),json_html$core$render_collection_$_iter__34231.call(null,cljs.core.chunk_rest.call(null,s__34232__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34234),null);
}
} else {
var vec__34238 = cljs.core.first.call(null,s__34232__$2);
var i = cljs.core.nth.call(null,vec__34238,(0),null);
var v = cljs.core.nth.call(null,vec__34238,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),json_html$core$render_collection_$_iter__34231.call(null,cljs.core.rest.call(null,s__34232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,col));
})()], null)], null);
}
});
json_html.core.render_set = (function json_html$core$render_set(s){
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-set","div.jh-type-set",-367189823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-set","span.jh-empty-set",-1364654969)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17577__auto__ = (function json_html$core$render_set_$_iter__34244(s__34245){
return (new cljs.core.LazySeq(null,(function (){
var s__34245__$1 = s__34245;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34245__$1);
if(temp__4425__auto__){
var s__34245__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34245__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__34245__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__34247 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__34246 = (0);
while(true){
if((i__34246 < size__17576__auto__)){
var item = cljs.core._nth.call(null,c__17575__auto__,i__34246);
cljs.core.chunk_append.call(null,b__34247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null));

var G__34248 = (i__34246 + (1));
i__34246 = G__34248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34247),json_html$core$render_set_$_iter__34244.call(null,cljs.core.chunk_rest.call(null,s__34245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34247),null);
}
} else {
var item = cljs.core.first.call(null,s__34245__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null),json_html$core$render_set_$_iter__34244.call(null,cljs.core.rest.call(null,s__34245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,json_html.core.sort_set.call(null,s));
})()], null);
}
});
json_html.core.render_map = (function json_html$core$render_map(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-map","span.jh-empty-map",-2061532971)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17577__auto__ = (function json_html$core$render_map_$_iter__34257(s__34258){
return (new cljs.core.LazySeq(null,(function (){
var s__34258__$1 = s__34258;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34258__$1);
if(temp__4425__auto__){
var s__34258__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34258__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__34258__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__34260 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__34259 = (0);
while(true){
if((i__34259 < size__17576__auto__)){
var vec__34263 = cljs.core._nth.call(null,c__17575__auto__,i__34259);
var k = cljs.core.nth.call(null,vec__34263,(0),null);
var v = cljs.core.nth.call(null,vec__34263,(1),null);
cljs.core.chunk_append.call(null,b__34260,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__34265 = (i__34259 + (1));
i__34259 = G__34265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34260),json_html$core$render_map_$_iter__34257.call(null,cljs.core.chunk_rest.call(null,s__34258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34260),null);
}
} else {
var vec__34264 = cljs.core.first.call(null,s__34258__$2);
var k = cljs.core.nth.call(null,vec__34264,(0),null);
var v = cljs.core.nth.call(null,vec__34264,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),json_html$core$render_map_$_iter__34257.call(null,cljs.core.rest.call(null,s__34258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,json_html.core.sort_map.call(null,m));
})()], null)], null);
}
});
json_html.core.render_string = (function json_html$core$render_string(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),((clojure.string.blank_QMARK_.call(null,s))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-string","span.jh-empty-string",1227187446)], null):json_html.core.escape_html.call(null,s))], null);
});
json_html.core.render = (function json_html$core$render(v){
var t = cljs.core.type.call(null,v);
if(cljs.core._EQ_.call(null,t,cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.render_keyword.call(null,v)], null);
} else {
if(cljs.core._EQ_.call(null,t,String)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.escape_html.call(null,v)], null);
} else {
if(cljs.core._EQ_.call(null,t,Date)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-date","span.jh-type-date",-1243309956),v.toString()], null);
} else {
if(cljs.core._EQ_.call(null,t,Boolean)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-bool","span.jh-type-bool",53751640),[cljs.core.str(v)].join('')], null);
} else {
if(cljs.core._EQ_.call(null,t,Number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-number","span.jh-type-number",1495617844),v], null);
} else {
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (1024))) || (v.cljs$core$IMap$))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,v))){
return json_html.core.render_map.call(null,v);
} else {
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (4096))) || (v.cljs$core$ISet$))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,v))){
return json_html.core.render_set.call(null,v);
} else {
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (8))) || (v.cljs$core$ICollection$))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,v))){
return json_html.core.render_collection.call(null,v);
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
});
json_html.core.edn__GT_hiccup = (function json_html$core$edn__GT_hiccup(edn){
return json_html.core.render.call(null,edn);
});
json_html.core.edn__GT_html = (function json_html$core$edn__GT_html(edn){
return [cljs.core.str(hiccups.runtime.render_html.call(null,json_html.core.edn__GT_hiccup.call(null,edn)))].join('');
});
json_html.core.json__GT_hiccup = (function json_html$core$json__GT_hiccup(json){
return json_html.core.render.call(null,cljs.core.js__GT_clj.call(null,json));
});
json_html.core.json__GT_html = (function json_html$core$json__GT_html(json){
return [cljs.core.str(hiccups.runtime.render_html.call(null,json_html.core.json__GT_hiccup.call(null,json)))].join('');
});

//# sourceMappingURL=core.js.map?rel=1463388065416