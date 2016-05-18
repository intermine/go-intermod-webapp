// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__16793__auto__ = v;
if(cljs.core.truth_(and__16793__auto__)){
return (v > (0));
} else {
return and__16793__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__33560_SHARP_,p2__33559_SHARP_){
var vec__33562 = clojure.string.split.call(null,p2__33559_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__33562,(0),null);
var v = cljs.core.nth.call(null,vec__33562,(1),null);
return cljs.core.assoc.call(null,p1__33560_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__33563_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__33563_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__33564){
var vec__33566 = p__33564;
var k = cljs.core.nth.call(null,vec__33566,(0),null);
var v = cljs.core.nth.call(null,vec__33566,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__33567_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__33567_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__16793__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__16793__auto__){
var and__16793__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__16793__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__33568_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33568_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33573 = arguments.length;
var i__17864__auto___33574 = (0);
while(true){
if((i__17864__auto___33574 < len__17863__auto___33573)){
args__17870__auto__.push((arguments[i__17864__auto___33574]));

var G__33575 = (i__17864__auto___33574 + (1));
i__17864__auto___33574 = G__33575;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33571){
var vec__33572 = p__33571;
var default_headers = cljs.core.nth.call(null,vec__33572,(0),null);
return ((function (vec__33572,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__33572,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq33569){
var G__33570 = cljs.core.first.call(null,seq33569);
var seq33569__$1 = cljs.core.next.call(null,seq33569);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__33570,seq33569__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33580 = arguments.length;
var i__17864__auto___33581 = (0);
while(true){
if((i__17864__auto___33581 < len__17863__auto___33580)){
args__17870__auto__.push((arguments[i__17864__auto___33581]));

var G__33582 = (i__17864__auto___33581 + (1));
i__17864__auto___33581 = G__33582;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33578){
var vec__33579 = p__33578;
var accept = cljs.core.nth.call(null,vec__33579,(0),null);
return ((function (vec__33579,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__33579,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq33576){
var G__33577 = cljs.core.first.call(null,seq33576);
var seq33576__$1 = cljs.core.next.call(null,seq33576);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__33577,seq33576__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33587 = arguments.length;
var i__17864__auto___33588 = (0);
while(true){
if((i__17864__auto___33588 < len__17863__auto___33587)){
args__17870__auto__.push((arguments[i__17864__auto___33588]));

var G__33589 = (i__17864__auto___33588 + (1));
i__17864__auto___33588 = G__33589;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33585){
var vec__33586 = p__33585;
var content_type = cljs.core.nth.call(null,vec__33586,(0),null);
return ((function (vec__33586,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__33586,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq33583){
var G__33584 = cljs.core.first.call(null,seq33583);
var seq33583__$1 = cljs.core.next.call(null,seq33583);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__33584,seq33583__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__33592 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__33592__$1 = ((((!((map__33592 == null)))?((((map__33592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33592):map__33592);
var encoding = cljs.core.get.call(null,map__33592__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__33592__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__33598 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__33598__$1 = ((((!((map__33598 == null)))?((((map__33598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33598):map__33598);
var decoding = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__33598,map__33598__$1,decoding,decoding_opts){
return (function (p1__33594_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__33594_SHARP_,decoding,decoding_opts);
});})(map__33598,map__33598__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__33598,map__33598__$1,decoding,decoding_opts,transit_decode){
return (function (p1__33595_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33595_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__33598,map__33598__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__33600_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33600_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__33604){
var map__33605 = p__33604;
var map__33605__$1 = ((((!((map__33605 == null)))?((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33605):map__33605);
var req = map__33605__$1;
var query_params = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__33610){
var map__33611 = p__33610;
var map__33611__$1 = ((((!((map__33611 == null)))?((((map__33611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33611):map__33611);
var request = map__33611__$1;
var form_params = cljs.core.get.call(null,map__33611__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__33611__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__33611__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__16793__auto__ = form_params;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16793__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__33619_33625 = cljs.core.seq.call(null,params);
var chunk__33620_33626 = null;
var count__33621_33627 = (0);
var i__33622_33628 = (0);
while(true){
if((i__33622_33628 < count__33621_33627)){
var vec__33623_33629 = cljs.core._nth.call(null,chunk__33620_33626,i__33622_33628);
var k_33630 = cljs.core.nth.call(null,vec__33623_33629,(0),null);
var v_33631 = cljs.core.nth.call(null,vec__33623_33629,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_33631)){
form_data.append(cljs.core.name.call(null,k_33630),cljs.core.first.call(null,v_33631),cljs.core.second.call(null,v_33631));
} else {
form_data.append(cljs.core.name.call(null,k_33630),v_33631);
}

var G__33632 = seq__33619_33625;
var G__33633 = chunk__33620_33626;
var G__33634 = count__33621_33627;
var G__33635 = (i__33622_33628 + (1));
seq__33619_33625 = G__33632;
chunk__33620_33626 = G__33633;
count__33621_33627 = G__33634;
i__33622_33628 = G__33635;
continue;
} else {
var temp__4425__auto___33636 = cljs.core.seq.call(null,seq__33619_33625);
if(temp__4425__auto___33636){
var seq__33619_33637__$1 = temp__4425__auto___33636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33619_33637__$1)){
var c__17608__auto___33638 = cljs.core.chunk_first.call(null,seq__33619_33637__$1);
var G__33639 = cljs.core.chunk_rest.call(null,seq__33619_33637__$1);
var G__33640 = c__17608__auto___33638;
var G__33641 = cljs.core.count.call(null,c__17608__auto___33638);
var G__33642 = (0);
seq__33619_33625 = G__33639;
chunk__33620_33626 = G__33640;
count__33621_33627 = G__33641;
i__33622_33628 = G__33642;
continue;
} else {
var vec__33624_33643 = cljs.core.first.call(null,seq__33619_33637__$1);
var k_33644 = cljs.core.nth.call(null,vec__33624_33643,(0),null);
var v_33645 = cljs.core.nth.call(null,vec__33624_33643,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_33645)){
form_data.append(cljs.core.name.call(null,k_33644),cljs.core.first.call(null,v_33645),cljs.core.second.call(null,v_33645));
} else {
form_data.append(cljs.core.name.call(null,k_33644),v_33645);
}

var G__33646 = cljs.core.next.call(null,seq__33619_33637__$1);
var G__33647 = null;
var G__33648 = (0);
var G__33649 = (0);
seq__33619_33625 = G__33646;
chunk__33620_33626 = G__33647;
count__33621_33627 = G__33648;
i__33622_33628 = G__33649;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__33653){
var map__33654 = p__33653;
var map__33654__$1 = ((((!((map__33654 == null)))?((((map__33654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33654):map__33654);
var request = map__33654__$1;
var multipart_params = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__16793__auto__ = multipart_params;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16793__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__33656_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__33656_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__33661){
var map__33662 = p__33661;
var map__33662__$1 = ((((!((map__33662 == null)))?((((map__33662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33662):map__33662);
var req = map__33662__$1;
var query_params = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__33662,map__33662__$1,req,query_params){
return (function (p1__33657_SHARP_){
return cljs.core.merge.call(null,p1__33657_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__33662,map__33662__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33668 = arguments.length;
var i__17864__auto___33669 = (0);
while(true){
if((i__17864__auto___33669 < len__17863__auto___33668)){
args__17870__auto__.push((arguments[i__17864__auto___33669]));

var G__33670 = (i__17864__auto___33669 + (1));
i__17864__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33666){
var vec__33667 = p__33666;
var credentials = cljs.core.nth.call(null,vec__33667,(0),null);
return ((function (vec__33667,credentials){
return (function (req){
var credentials__$1 = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__33667,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq33664){
var G__33665 = cljs.core.first.call(null,seq33664);
var seq33664__$1 = cljs.core.next.call(null,seq33664);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__33665,seq33664__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33675 = arguments.length;
var i__17864__auto___33676 = (0);
while(true){
if((i__17864__auto___33676 < len__17863__auto___33675)){
args__17870__auto__.push((arguments[i__17864__auto___33676]));

var G__33677 = (i__17864__auto___33676 + (1));
i__17864__auto___33676 = G__33677;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33673){
var vec__33674 = p__33673;
var req = cljs.core.nth.call(null,vec__33674,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq33671){
var G__33672 = cljs.core.first.call(null,seq33671);
var seq33671__$1 = cljs.core.next.call(null,seq33671);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__33672,seq33671__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33682 = arguments.length;
var i__17864__auto___33683 = (0);
while(true){
if((i__17864__auto___33683 < len__17863__auto___33682)){
args__17870__auto__.push((arguments[i__17864__auto___33683]));

var G__33684 = (i__17864__auto___33683 + (1));
i__17864__auto___33683 = G__33684;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33680){
var vec__33681 = p__33680;
var req = cljs.core.nth.call(null,vec__33681,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq33678){
var G__33679 = cljs.core.first.call(null,seq33678);
var seq33678__$1 = cljs.core.next.call(null,seq33678);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__33679,seq33678__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33689 = arguments.length;
var i__17864__auto___33690 = (0);
while(true){
if((i__17864__auto___33690 < len__17863__auto___33689)){
args__17870__auto__.push((arguments[i__17864__auto___33690]));

var G__33691 = (i__17864__auto___33690 + (1));
i__17864__auto___33690 = G__33691;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33687){
var vec__33688 = p__33687;
var req = cljs.core.nth.call(null,vec__33688,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq33685){
var G__33686 = cljs.core.first.call(null,seq33685);
var seq33685__$1 = cljs.core.next.call(null,seq33685);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__33686,seq33685__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33696 = arguments.length;
var i__17864__auto___33697 = (0);
while(true){
if((i__17864__auto___33697 < len__17863__auto___33696)){
args__17870__auto__.push((arguments[i__17864__auto___33697]));

var G__33698 = (i__17864__auto___33697 + (1));
i__17864__auto___33697 = G__33698;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33694){
var vec__33695 = p__33694;
var req = cljs.core.nth.call(null,vec__33695,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq33692){
var G__33693 = cljs.core.first.call(null,seq33692);
var seq33692__$1 = cljs.core.next.call(null,seq33692);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__33693,seq33692__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33703 = arguments.length;
var i__17864__auto___33704 = (0);
while(true){
if((i__17864__auto___33704 < len__17863__auto___33703)){
args__17870__auto__.push((arguments[i__17864__auto___33704]));

var G__33705 = (i__17864__auto___33704 + (1));
i__17864__auto___33704 = G__33705;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33701){
var vec__33702 = p__33701;
var req = cljs.core.nth.call(null,vec__33702,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq33699){
var G__33700 = cljs.core.first.call(null,seq33699);
var seq33699__$1 = cljs.core.next.call(null,seq33699);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__33700,seq33699__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33710 = arguments.length;
var i__17864__auto___33711 = (0);
while(true){
if((i__17864__auto___33711 < len__17863__auto___33710)){
args__17870__auto__.push((arguments[i__17864__auto___33711]));

var G__33712 = (i__17864__auto___33711 + (1));
i__17864__auto___33711 = G__33712;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33708){
var vec__33709 = p__33708;
var req = cljs.core.nth.call(null,vec__33709,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq33706){
var G__33707 = cljs.core.first.call(null,seq33706);
var seq33706__$1 = cljs.core.next.call(null,seq33706);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__33707,seq33706__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33717 = arguments.length;
var i__17864__auto___33718 = (0);
while(true){
if((i__17864__auto___33718 < len__17863__auto___33717)){
args__17870__auto__.push((arguments[i__17864__auto___33718]));

var G__33719 = (i__17864__auto___33718 + (1));
i__17864__auto___33718 = G__33719;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33715){
var vec__33716 = p__33715;
var req = cljs.core.nth.call(null,vec__33716,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq33713){
var G__33714 = cljs.core.first.call(null,seq33713);
var seq33713__$1 = cljs.core.next.call(null,seq33713);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__33714,seq33713__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33724 = arguments.length;
var i__17864__auto___33725 = (0);
while(true){
if((i__17864__auto___33725 < len__17863__auto___33724)){
args__17870__auto__.push((arguments[i__17864__auto___33725]));

var G__33726 = (i__17864__auto___33725 + (1));
i__17864__auto___33725 = G__33726;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33722){
var vec__33723 = p__33722;
var req = cljs.core.nth.call(null,vec__33723,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq33720){
var G__33721 = cljs.core.first.call(null,seq33720);
var seq33720__$1 = cljs.core.next.call(null,seq33720);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__33721,seq33720__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__17870__auto__ = [];
var len__17863__auto___33731 = arguments.length;
var i__17864__auto___33732 = (0);
while(true){
if((i__17864__auto___33732 < len__17863__auto___33731)){
args__17870__auto__.push((arguments[i__17864__auto___33732]));

var G__33733 = (i__17864__auto___33732 + (1));
i__17864__auto___33732 = G__33733;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33729){
var vec__33730 = p__33729;
var req = cljs.core.nth.call(null,vec__33730,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq33727){
var G__33728 = cljs.core.first.call(null,seq33727);
var seq33727__$1 = cljs.core.next.call(null,seq33727);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__33728,seq33727__$1);
});

//# sourceMappingURL=client.js.map?rel=1463388064842