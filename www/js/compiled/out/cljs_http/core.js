// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__25720){
var vec__25721 = p__25720;
var k = cljs.core.nth.call(null,vec__25721,(0),null);
var v = cljs.core.nth.call(null,vec__25721,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__25723 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__25723)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__25723)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__25723)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__25723)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__25723)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__25723)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__25724){
var map__25728 = p__25724;
var map__25728__$1 = ((((!((map__25728 == null)))?((((map__25728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25728):map__25728);
var request = map__25728__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__25730 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__25730,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__25730,response_type);

G__25730.setTimeoutInterval(timeout);

G__25730.setWithCredentials(send_credentials);

return G__25730;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__25731){
var map__25758 = p__25731;
var map__25758__$1 = ((((!((map__25758 == null)))?((((map__25758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25758):map__25758);
var request = map__25758__$1;
var request_method = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__16805__auto__ = request_method;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__19184__auto___25784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25784,channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25784,channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_25770){
var state_val_25771 = (state_25770[(1)]);
if((state_val_25771 === (1))){
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25770__$1,(2),cancel);
} else {
if((state_val_25771 === (2))){
var inst_25761 = (state_25770[(2)]);
var inst_25762 = xhr__$1.isComplete();
var inst_25763 = cljs.core.not.call(null,inst_25762);
var state_25770__$1 = (function (){var statearr_25772 = state_25770;
(statearr_25772[(7)] = inst_25761);

return statearr_25772;
})();
if(inst_25763){
var statearr_25773_25785 = state_25770__$1;
(statearr_25773_25785[(1)] = (3));

} else {
var statearr_25774_25786 = state_25770__$1;
(statearr_25774_25786[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (3))){
var inst_25765 = xhr__$1.abort();
var state_25770__$1 = state_25770;
var statearr_25775_25787 = state_25770__$1;
(statearr_25775_25787[(2)] = inst_25765);

(statearr_25775_25787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (4))){
var state_25770__$1 = state_25770;
var statearr_25776_25788 = state_25770__$1;
(statearr_25776_25788[(2)] = null);

(statearr_25776_25788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (5))){
var inst_25768 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25770__$1,inst_25768);
} else {
return null;
}
}
}
}
}
});})(c__19184__auto___25784,channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__19163__auto__,c__19184__auto___25784,channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__19164__auto__ = null;
var cljs_http$core$xhr_$_state_machine__19164__auto____0 = (function (){
var statearr_25780 = [null,null,null,null,null,null,null,null];
(statearr_25780[(0)] = cljs_http$core$xhr_$_state_machine__19164__auto__);

(statearr_25780[(1)] = (1));

return statearr_25780;
});
var cljs_http$core$xhr_$_state_machine__19164__auto____1 = (function (state_25770){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object)){
var ex__19167__auto__ = e25781;
var statearr_25782_25789 = state_25770;
(statearr_25782_25789[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25790 = state_25770;
state_25770 = G__25790;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__19164__auto__ = function(state_25770){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__19164__auto____1.call(this,state_25770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__19164__auto____0;
cljs_http$core$xhr_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__19164__auto____1;
return cljs_http$core$xhr_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25784,channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__19186__auto__ = (function (){var statearr_25783 = f__19185__auto__.call(null);
(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25784);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25784,channel,request_url,method,headers__$1,xhr__$1,map__25758,map__25758__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__25791){
var map__25808 = p__25791;
var map__25808__$1 = ((((!((map__25808 == null)))?((((map__25808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25808):map__25808);
var request = map__25808__$1;
var timeout = cljs.core.get.call(null,map__25808__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__25808__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__25808__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__25808__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_25824 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_25824], null));

if(cljs.core.truth_(cancel)){
var c__19184__auto___25825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25825,req_25824,channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25825,req_25824,channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_25814){
var state_val_25815 = (state_25814[(1)]);
if((state_val_25815 === (1))){
var state_25814__$1 = state_25814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25814__$1,(2),cancel);
} else {
if((state_val_25815 === (2))){
var inst_25811 = (state_25814[(2)]);
var inst_25812 = jsonp__$1.cancel(req_25824);
var state_25814__$1 = (function (){var statearr_25816 = state_25814;
(statearr_25816[(7)] = inst_25811);

return statearr_25816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25814__$1,inst_25812);
} else {
return null;
}
}
});})(c__19184__auto___25825,req_25824,channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__19163__auto__,c__19184__auto___25825,req_25824,channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__19164__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__19164__auto____0 = (function (){
var statearr_25820 = [null,null,null,null,null,null,null,null];
(statearr_25820[(0)] = cljs_http$core$jsonp_$_state_machine__19164__auto__);

(statearr_25820[(1)] = (1));

return statearr_25820;
});
var cljs_http$core$jsonp_$_state_machine__19164__auto____1 = (function (state_25814){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25821){if((e25821 instanceof Object)){
var ex__19167__auto__ = e25821;
var statearr_25822_25826 = state_25814;
(statearr_25822_25826[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25827 = state_25814;
state_25814 = G__25827;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__19164__auto__ = function(state_25814){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__19164__auto____1.call(this,state_25814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__19164__auto____0;
cljs_http$core$jsonp_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__19164__auto____1;
return cljs_http$core$jsonp_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25825,req_25824,channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__19186__auto__ = (function (){var statearr_25823 = f__19185__auto__.call(null);
(statearr_25823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25825);

return statearr_25823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25825,req_25824,channel,jsonp__$1,map__25808,map__25808__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__25828){
var map__25831 = p__25828;
var map__25831__$1 = ((((!((map__25831 == null)))?((((map__25831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25831):map__25831);
var request__$1 = map__25831__$1;
var request_method = cljs.core.get.call(null,map__25831__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1462895596943