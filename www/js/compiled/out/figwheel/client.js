// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35831 = cljs.core._EQ_;
var expr__35832 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e35835){if((e35835 instanceof Error)){
var e = e35835;
return false;
} else {
throw e35835;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35831.call(null,"true",expr__35832))){
return true;
} else {
if(cljs.core.truth_(pred__35831.call(null,"false",expr__35832))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35832)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35837){if((e35837 instanceof Error)){
var e = e35837;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35837;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___35839 = arguments.length;
var i__17864__auto___35840 = (0);
while(true){
if((i__17864__auto___35840 < len__17863__auto___35839)){
args__17870__auto__.push((arguments[i__17864__auto___35840]));

var G__35841 = (i__17864__auto___35840 + (1));
i__17864__auto___35840 = G__35841;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq35838){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35838));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35842){
var map__35845 = p__35842;
var map__35845__$1 = ((((!((map__35845 == null)))?((((map__35845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35845):map__35845);
var message = cljs.core.get.call(null,map__35845__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35845__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19184__auto___36007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___36007,ch){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___36007,ch){
return (function (state_35976){
var state_val_35977 = (state_35976[(1)]);
if((state_val_35977 === (7))){
var inst_35972 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35978_36008 = state_35976__$1;
(statearr_35978_36008[(2)] = inst_35972);

(statearr_35978_36008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (1))){
var state_35976__$1 = state_35976;
var statearr_35979_36009 = state_35976__$1;
(statearr_35979_36009[(2)] = null);

(statearr_35979_36009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (4))){
var inst_35929 = (state_35976[(7)]);
var inst_35929__$1 = (state_35976[(2)]);
var state_35976__$1 = (function (){var statearr_35980 = state_35976;
(statearr_35980[(7)] = inst_35929__$1);

return statearr_35980;
})();
if(cljs.core.truth_(inst_35929__$1)){
var statearr_35981_36010 = state_35976__$1;
(statearr_35981_36010[(1)] = (5));

} else {
var statearr_35982_36011 = state_35976__$1;
(statearr_35982_36011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (15))){
var inst_35936 = (state_35976[(8)]);
var inst_35951 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35936);
var inst_35952 = cljs.core.first.call(null,inst_35951);
var inst_35953 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35952);
var inst_35954 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35953)].join('');
var inst_35955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35954);
var state_35976__$1 = state_35976;
var statearr_35983_36012 = state_35976__$1;
(statearr_35983_36012[(2)] = inst_35955);

(statearr_35983_36012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (13))){
var inst_35960 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35984_36013 = state_35976__$1;
(statearr_35984_36013[(2)] = inst_35960);

(statearr_35984_36013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (6))){
var state_35976__$1 = state_35976;
var statearr_35985_36014 = state_35976__$1;
(statearr_35985_36014[(2)] = null);

(statearr_35985_36014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (17))){
var inst_35958 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35986_36015 = state_35976__$1;
(statearr_35986_36015[(2)] = inst_35958);

(statearr_35986_36015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (3))){
var inst_35974 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35976__$1,inst_35974);
} else {
if((state_val_35977 === (12))){
var inst_35935 = (state_35976[(9)]);
var inst_35949 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35935,opts);
var state_35976__$1 = state_35976;
if(cljs.core.truth_(inst_35949)){
var statearr_35987_36016 = state_35976__$1;
(statearr_35987_36016[(1)] = (15));

} else {
var statearr_35988_36017 = state_35976__$1;
(statearr_35988_36017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (2))){
var state_35976__$1 = state_35976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35976__$1,(4),ch);
} else {
if((state_val_35977 === (11))){
var inst_35936 = (state_35976[(8)]);
var inst_35941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35942 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35936);
var inst_35943 = cljs.core.async.timeout.call(null,(1000));
var inst_35944 = [inst_35942,inst_35943];
var inst_35945 = (new cljs.core.PersistentVector(null,2,(5),inst_35941,inst_35944,null));
var state_35976__$1 = state_35976;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35976__$1,(14),inst_35945);
} else {
if((state_val_35977 === (9))){
var inst_35936 = (state_35976[(8)]);
var inst_35962 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35936);
var inst_35964 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35963);
var inst_35965 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35964)].join('');
var inst_35966 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35965);
var state_35976__$1 = (function (){var statearr_35989 = state_35976;
(statearr_35989[(10)] = inst_35962);

return statearr_35989;
})();
var statearr_35990_36018 = state_35976__$1;
(statearr_35990_36018[(2)] = inst_35966);

(statearr_35990_36018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (5))){
var inst_35929 = (state_35976[(7)]);
var inst_35931 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35932 = (new cljs.core.PersistentArrayMap(null,2,inst_35931,null));
var inst_35933 = (new cljs.core.PersistentHashSet(null,inst_35932,null));
var inst_35934 = figwheel.client.focus_msgs.call(null,inst_35933,inst_35929);
var inst_35935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35934);
var inst_35936 = cljs.core.first.call(null,inst_35934);
var inst_35937 = figwheel.client.autoload_QMARK_.call(null);
var state_35976__$1 = (function (){var statearr_35991 = state_35976;
(statearr_35991[(8)] = inst_35936);

(statearr_35991[(9)] = inst_35935);

return statearr_35991;
})();
if(cljs.core.truth_(inst_35937)){
var statearr_35992_36019 = state_35976__$1;
(statearr_35992_36019[(1)] = (8));

} else {
var statearr_35993_36020 = state_35976__$1;
(statearr_35993_36020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (14))){
var inst_35947 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35994_36021 = state_35976__$1;
(statearr_35994_36021[(2)] = inst_35947);

(statearr_35994_36021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (16))){
var state_35976__$1 = state_35976;
var statearr_35995_36022 = state_35976__$1;
(statearr_35995_36022[(2)] = null);

(statearr_35995_36022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (10))){
var inst_35968 = (state_35976[(2)]);
var state_35976__$1 = (function (){var statearr_35996 = state_35976;
(statearr_35996[(11)] = inst_35968);

return statearr_35996;
})();
var statearr_35997_36023 = state_35976__$1;
(statearr_35997_36023[(2)] = null);

(statearr_35997_36023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (8))){
var inst_35935 = (state_35976[(9)]);
var inst_35939 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35935,opts);
var state_35976__$1 = state_35976;
if(cljs.core.truth_(inst_35939)){
var statearr_35998_36024 = state_35976__$1;
(statearr_35998_36024[(1)] = (11));

} else {
var statearr_35999_36025 = state_35976__$1;
(statearr_35999_36025[(1)] = (12));

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
});})(c__19184__auto___36007,ch))
;
return ((function (switch__19163__auto__,c__19184__auto___36007,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____0 = (function (){
var statearr_36003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36003[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__);

(statearr_36003[(1)] = (1));

return statearr_36003;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____1 = (function (state_35976){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_35976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e36004){if((e36004 instanceof Object)){
var ex__19167__auto__ = e36004;
var statearr_36005_36026 = state_35976;
(statearr_36005_36026[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36027 = state_35976;
state_35976 = G__36027;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__ = function(state_35976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____1.call(this,state_35976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___36007,ch))
})();
var state__19186__auto__ = (function (){var statearr_36006 = f__19185__auto__.call(null);
(statearr_36006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___36007);

return statearr_36006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___36007,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36028_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36028_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36035 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36035){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_36033 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36034 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36034;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36033;
}}catch (e36032){if((e36032 instanceof Error)){
var e = e36032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36035], null));
} else {
var e = e36032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36035))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36036){
var map__36043 = p__36036;
var map__36043__$1 = ((((!((map__36043 == null)))?((((map__36043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36043):map__36043);
var opts = map__36043__$1;
var build_id = cljs.core.get.call(null,map__36043__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36043,map__36043__$1,opts,build_id){
return (function (p__36045){
var vec__36046 = p__36045;
var map__36047 = cljs.core.nth.call(null,vec__36046,(0),null);
var map__36047__$1 = ((((!((map__36047 == null)))?((((map__36047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36047):map__36047);
var msg = map__36047__$1;
var msg_name = cljs.core.get.call(null,map__36047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36046,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36046,map__36047,map__36047__$1,msg,msg_name,_,map__36043,map__36043__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36046,map__36047,map__36047__$1,msg,msg_name,_,map__36043,map__36043__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36043,map__36043__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36053){
var vec__36054 = p__36053;
var map__36055 = cljs.core.nth.call(null,vec__36054,(0),null);
var map__36055__$1 = ((((!((map__36055 == null)))?((((map__36055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36055):map__36055);
var msg = map__36055__$1;
var msg_name = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36054,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36057){
var map__36067 = p__36057;
var map__36067__$1 = ((((!((map__36067 == null)))?((((map__36067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36067):map__36067);
var on_compile_warning = cljs.core.get.call(null,map__36067__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36067__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36067,map__36067__$1,on_compile_warning,on_compile_fail){
return (function (p__36069){
var vec__36070 = p__36069;
var map__36071 = cljs.core.nth.call(null,vec__36070,(0),null);
var map__36071__$1 = ((((!((map__36071 == null)))?((((map__36071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36071):map__36071);
var msg = map__36071__$1;
var msg_name = cljs.core.get.call(null,map__36071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36070,(1));
var pred__36073 = cljs.core._EQ_;
var expr__36074 = msg_name;
if(cljs.core.truth_(pred__36073.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36074))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36073.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36074))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36067,map__36067__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,msg_hist,msg_names,msg){
return (function (state_36290){
var state_val_36291 = (state_36290[(1)]);
if((state_val_36291 === (7))){
var inst_36214 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36214)){
var statearr_36292_36338 = state_36290__$1;
(statearr_36292_36338[(1)] = (8));

} else {
var statearr_36293_36339 = state_36290__$1;
(statearr_36293_36339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (20))){
var inst_36284 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36294_36340 = state_36290__$1;
(statearr_36294_36340[(2)] = inst_36284);

(statearr_36294_36340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (27))){
var inst_36280 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36295_36341 = state_36290__$1;
(statearr_36295_36341[(2)] = inst_36280);

(statearr_36295_36341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (1))){
var inst_36207 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36207)){
var statearr_36296_36342 = state_36290__$1;
(statearr_36296_36342[(1)] = (2));

} else {
var statearr_36297_36343 = state_36290__$1;
(statearr_36297_36343[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (24))){
var inst_36282 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36298_36344 = state_36290__$1;
(statearr_36298_36344[(2)] = inst_36282);

(statearr_36298_36344[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (4))){
var inst_36288 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36290__$1,inst_36288);
} else {
if((state_val_36291 === (15))){
var inst_36286 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36299_36345 = state_36290__$1;
(statearr_36299_36345[(2)] = inst_36286);

(statearr_36299_36345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (21))){
var inst_36245 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36300_36346 = state_36290__$1;
(statearr_36300_36346[(2)] = inst_36245);

(statearr_36300_36346[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (31))){
var inst_36269 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36269)){
var statearr_36301_36347 = state_36290__$1;
(statearr_36301_36347[(1)] = (34));

} else {
var statearr_36302_36348 = state_36290__$1;
(statearr_36302_36348[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (32))){
var inst_36278 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36303_36349 = state_36290__$1;
(statearr_36303_36349[(2)] = inst_36278);

(statearr_36303_36349[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (33))){
var inst_36267 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36304_36350 = state_36290__$1;
(statearr_36304_36350[(2)] = inst_36267);

(statearr_36304_36350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (13))){
var inst_36228 = figwheel.client.heads_up.clear.call(null);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(16),inst_36228);
} else {
if((state_val_36291 === (22))){
var inst_36249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36250 = figwheel.client.heads_up.append_message.call(null,inst_36249);
var state_36290__$1 = state_36290;
var statearr_36305_36351 = state_36290__$1;
(statearr_36305_36351[(2)] = inst_36250);

(statearr_36305_36351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (36))){
var inst_36276 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36306_36352 = state_36290__$1;
(statearr_36306_36352[(2)] = inst_36276);

(statearr_36306_36352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (29))){
var inst_36260 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36307_36353 = state_36290__$1;
(statearr_36307_36353[(2)] = inst_36260);

(statearr_36307_36353[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (6))){
var inst_36209 = (state_36290[(7)]);
var state_36290__$1 = state_36290;
var statearr_36308_36354 = state_36290__$1;
(statearr_36308_36354[(2)] = inst_36209);

(statearr_36308_36354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (28))){
var inst_36256 = (state_36290[(2)]);
var inst_36257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36258 = figwheel.client.heads_up.display_warning.call(null,inst_36257);
var state_36290__$1 = (function (){var statearr_36309 = state_36290;
(statearr_36309[(8)] = inst_36256);

return statearr_36309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(29),inst_36258);
} else {
if((state_val_36291 === (25))){
var inst_36254 = figwheel.client.heads_up.clear.call(null);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(28),inst_36254);
} else {
if((state_val_36291 === (34))){
var inst_36271 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(37),inst_36271);
} else {
if((state_val_36291 === (17))){
var inst_36236 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36310_36355 = state_36290__$1;
(statearr_36310_36355[(2)] = inst_36236);

(statearr_36310_36355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (3))){
var inst_36226 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36226)){
var statearr_36311_36356 = state_36290__$1;
(statearr_36311_36356[(1)] = (13));

} else {
var statearr_36312_36357 = state_36290__$1;
(statearr_36312_36357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (12))){
var inst_36222 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36313_36358 = state_36290__$1;
(statearr_36313_36358[(2)] = inst_36222);

(statearr_36313_36358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (2))){
var inst_36209 = (state_36290[(7)]);
var inst_36209__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36290__$1 = (function (){var statearr_36314 = state_36290;
(statearr_36314[(7)] = inst_36209__$1);

return statearr_36314;
})();
if(cljs.core.truth_(inst_36209__$1)){
var statearr_36315_36359 = state_36290__$1;
(statearr_36315_36359[(1)] = (5));

} else {
var statearr_36316_36360 = state_36290__$1;
(statearr_36316_36360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (23))){
var inst_36252 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36252)){
var statearr_36317_36361 = state_36290__$1;
(statearr_36317_36361[(1)] = (25));

} else {
var statearr_36318_36362 = state_36290__$1;
(statearr_36318_36362[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (35))){
var state_36290__$1 = state_36290;
var statearr_36319_36363 = state_36290__$1;
(statearr_36319_36363[(2)] = null);

(statearr_36319_36363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (19))){
var inst_36247 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36247)){
var statearr_36320_36364 = state_36290__$1;
(statearr_36320_36364[(1)] = (22));

} else {
var statearr_36321_36365 = state_36290__$1;
(statearr_36321_36365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (11))){
var inst_36218 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36322_36366 = state_36290__$1;
(statearr_36322_36366[(2)] = inst_36218);

(statearr_36322_36366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (9))){
var inst_36220 = figwheel.client.heads_up.clear.call(null);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(12),inst_36220);
} else {
if((state_val_36291 === (5))){
var inst_36211 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36290__$1 = state_36290;
var statearr_36323_36367 = state_36290__$1;
(statearr_36323_36367[(2)] = inst_36211);

(statearr_36323_36367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (14))){
var inst_36238 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36238)){
var statearr_36324_36368 = state_36290__$1;
(statearr_36324_36368[(1)] = (18));

} else {
var statearr_36325_36369 = state_36290__$1;
(statearr_36325_36369[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (26))){
var inst_36262 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36262)){
var statearr_36326_36370 = state_36290__$1;
(statearr_36326_36370[(1)] = (30));

} else {
var statearr_36327_36371 = state_36290__$1;
(statearr_36327_36371[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (16))){
var inst_36230 = (state_36290[(2)]);
var inst_36231 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36232 = figwheel.client.format_messages.call(null,inst_36231);
var inst_36233 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36234 = figwheel.client.heads_up.display_error.call(null,inst_36232,inst_36233);
var state_36290__$1 = (function (){var statearr_36328 = state_36290;
(statearr_36328[(9)] = inst_36230);

return statearr_36328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(17),inst_36234);
} else {
if((state_val_36291 === (30))){
var inst_36264 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36265 = figwheel.client.heads_up.display_warning.call(null,inst_36264);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(33),inst_36265);
} else {
if((state_val_36291 === (10))){
var inst_36224 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36329_36372 = state_36290__$1;
(statearr_36329_36372[(2)] = inst_36224);

(statearr_36329_36372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (18))){
var inst_36240 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36241 = figwheel.client.format_messages.call(null,inst_36240);
var inst_36242 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36243 = figwheel.client.heads_up.display_error.call(null,inst_36241,inst_36242);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(21),inst_36243);
} else {
if((state_val_36291 === (37))){
var inst_36273 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36330_36373 = state_36290__$1;
(statearr_36330_36373[(2)] = inst_36273);

(statearr_36330_36373[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (8))){
var inst_36216 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(11),inst_36216);
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
});})(c__19184__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19163__auto__,c__19184__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____0 = (function (){
var statearr_36334 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36334[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__);

(statearr_36334[(1)] = (1));

return statearr_36334;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____1 = (function (state_36290){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_36290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e36335){if((e36335 instanceof Object)){
var ex__19167__auto__ = e36335;
var statearr_36336_36374 = state_36290;
(statearr_36336_36374[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_36290;
state_36290 = G__36375;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__ = function(state_36290){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____1.call(this,state_36290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,msg_hist,msg_names,msg))
})();
var state__19186__auto__ = (function (){var statearr_36337 = f__19185__auto__.call(null);
(statearr_36337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_36337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,msg_hist,msg_names,msg))
);

return c__19184__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19184__auto___36438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___36438,ch){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___36438,ch){
return (function (state_36421){
var state_val_36422 = (state_36421[(1)]);
if((state_val_36422 === (1))){
var state_36421__$1 = state_36421;
var statearr_36423_36439 = state_36421__$1;
(statearr_36423_36439[(2)] = null);

(statearr_36423_36439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (2))){
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36421__$1,(4),ch);
} else {
if((state_val_36422 === (3))){
var inst_36419 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36421__$1,inst_36419);
} else {
if((state_val_36422 === (4))){
var inst_36409 = (state_36421[(7)]);
var inst_36409__$1 = (state_36421[(2)]);
var state_36421__$1 = (function (){var statearr_36424 = state_36421;
(statearr_36424[(7)] = inst_36409__$1);

return statearr_36424;
})();
if(cljs.core.truth_(inst_36409__$1)){
var statearr_36425_36440 = state_36421__$1;
(statearr_36425_36440[(1)] = (5));

} else {
var statearr_36426_36441 = state_36421__$1;
(statearr_36426_36441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (5))){
var inst_36409 = (state_36421[(7)]);
var inst_36411 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36409);
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36421__$1,(8),inst_36411);
} else {
if((state_val_36422 === (6))){
var state_36421__$1 = state_36421;
var statearr_36427_36442 = state_36421__$1;
(statearr_36427_36442[(2)] = null);

(statearr_36427_36442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (7))){
var inst_36417 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
var statearr_36428_36443 = state_36421__$1;
(statearr_36428_36443[(2)] = inst_36417);

(statearr_36428_36443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (8))){
var inst_36413 = (state_36421[(2)]);
var state_36421__$1 = (function (){var statearr_36429 = state_36421;
(statearr_36429[(8)] = inst_36413);

return statearr_36429;
})();
var statearr_36430_36444 = state_36421__$1;
(statearr_36430_36444[(2)] = null);

(statearr_36430_36444[(1)] = (2));


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
});})(c__19184__auto___36438,ch))
;
return ((function (switch__19163__auto__,c__19184__auto___36438,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19164__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19164__auto____0 = (function (){
var statearr_36434 = [null,null,null,null,null,null,null,null,null];
(statearr_36434[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19164__auto__);

(statearr_36434[(1)] = (1));

return statearr_36434;
});
var figwheel$client$heads_up_plugin_$_state_machine__19164__auto____1 = (function (state_36421){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_36421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e36435){if((e36435 instanceof Object)){
var ex__19167__auto__ = e36435;
var statearr_36436_36445 = state_36421;
(statearr_36436_36445[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36446 = state_36421;
state_36421 = G__36446;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19164__auto__ = function(state_36421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19164__auto____1.call(this,state_36421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19164__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19164__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___36438,ch))
})();
var state__19186__auto__ = (function (){var statearr_36437 = f__19185__auto__.call(null);
(statearr_36437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___36438);

return statearr_36437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___36438,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_36467){
var state_val_36468 = (state_36467[(1)]);
if((state_val_36468 === (1))){
var inst_36462 = cljs.core.async.timeout.call(null,(3000));
var state_36467__$1 = state_36467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36467__$1,(2),inst_36462);
} else {
if((state_val_36468 === (2))){
var inst_36464 = (state_36467[(2)]);
var inst_36465 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36467__$1 = (function (){var statearr_36469 = state_36467;
(statearr_36469[(7)] = inst_36464);

return statearr_36469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36467__$1,inst_36465);
} else {
return null;
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____0 = (function (){
var statearr_36473 = [null,null,null,null,null,null,null,null];
(statearr_36473[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__);

(statearr_36473[(1)] = (1));

return statearr_36473;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____1 = (function (state_36467){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_36467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e36474){if((e36474 instanceof Object)){
var ex__19167__auto__ = e36474;
var statearr_36475_36477 = state_36467;
(statearr_36475_36477[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36478 = state_36467;
state_36467 = G__36478;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__ = function(state_36467){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____1.call(this,state_36467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_36476 = f__19185__auto__.call(null);
(statearr_36476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_36476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36479){
var map__36486 = p__36479;
var map__36486__$1 = ((((!((map__36486 == null)))?((((map__36486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36486):map__36486);
var ed = map__36486__$1;
var formatted_exception = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36488_36492 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36489_36493 = null;
var count__36490_36494 = (0);
var i__36491_36495 = (0);
while(true){
if((i__36491_36495 < count__36490_36494)){
var msg_36496 = cljs.core._nth.call(null,chunk__36489_36493,i__36491_36495);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36496);

var G__36497 = seq__36488_36492;
var G__36498 = chunk__36489_36493;
var G__36499 = count__36490_36494;
var G__36500 = (i__36491_36495 + (1));
seq__36488_36492 = G__36497;
chunk__36489_36493 = G__36498;
count__36490_36494 = G__36499;
i__36491_36495 = G__36500;
continue;
} else {
var temp__4425__auto___36501 = cljs.core.seq.call(null,seq__36488_36492);
if(temp__4425__auto___36501){
var seq__36488_36502__$1 = temp__4425__auto___36501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36488_36502__$1)){
var c__17608__auto___36503 = cljs.core.chunk_first.call(null,seq__36488_36502__$1);
var G__36504 = cljs.core.chunk_rest.call(null,seq__36488_36502__$1);
var G__36505 = c__17608__auto___36503;
var G__36506 = cljs.core.count.call(null,c__17608__auto___36503);
var G__36507 = (0);
seq__36488_36492 = G__36504;
chunk__36489_36493 = G__36505;
count__36490_36494 = G__36506;
i__36491_36495 = G__36507;
continue;
} else {
var msg_36508 = cljs.core.first.call(null,seq__36488_36502__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36508);

var G__36509 = cljs.core.next.call(null,seq__36488_36502__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__36488_36492 = G__36509;
chunk__36489_36493 = G__36510;
count__36490_36494 = G__36511;
i__36491_36495 = G__36512;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36513){
var map__36516 = p__36513;
var map__36516__$1 = ((((!((map__36516 == null)))?((((map__36516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36516):map__36516);
var w = map__36516__$1;
var message = cljs.core.get.call(null,map__36516__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36524 = cljs.core.seq.call(null,plugins);
var chunk__36525 = null;
var count__36526 = (0);
var i__36527 = (0);
while(true){
if((i__36527 < count__36526)){
var vec__36528 = cljs.core._nth.call(null,chunk__36525,i__36527);
var k = cljs.core.nth.call(null,vec__36528,(0),null);
var plugin = cljs.core.nth.call(null,vec__36528,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36530 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36524,chunk__36525,count__36526,i__36527,pl_36530,vec__36528,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36530.call(null,msg_hist);
});})(seq__36524,chunk__36525,count__36526,i__36527,pl_36530,vec__36528,k,plugin))
);
} else {
}

var G__36531 = seq__36524;
var G__36532 = chunk__36525;
var G__36533 = count__36526;
var G__36534 = (i__36527 + (1));
seq__36524 = G__36531;
chunk__36525 = G__36532;
count__36526 = G__36533;
i__36527 = G__36534;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36524);
if(temp__4425__auto__){
var seq__36524__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36524__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__36524__$1);
var G__36535 = cljs.core.chunk_rest.call(null,seq__36524__$1);
var G__36536 = c__17608__auto__;
var G__36537 = cljs.core.count.call(null,c__17608__auto__);
var G__36538 = (0);
seq__36524 = G__36535;
chunk__36525 = G__36536;
count__36526 = G__36537;
i__36527 = G__36538;
continue;
} else {
var vec__36529 = cljs.core.first.call(null,seq__36524__$1);
var k = cljs.core.nth.call(null,vec__36529,(0),null);
var plugin = cljs.core.nth.call(null,vec__36529,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36539 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36524,chunk__36525,count__36526,i__36527,pl_36539,vec__36529,k,plugin,seq__36524__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36539.call(null,msg_hist);
});})(seq__36524,chunk__36525,count__36526,i__36527,pl_36539,vec__36529,k,plugin,seq__36524__$1,temp__4425__auto__))
);
} else {
}

var G__36540 = cljs.core.next.call(null,seq__36524__$1);
var G__36541 = null;
var G__36542 = (0);
var G__36543 = (0);
seq__36524 = G__36540;
chunk__36525 = G__36541;
count__36526 = G__36542;
i__36527 = G__36543;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36544 = [];
var len__17863__auto___36547 = arguments.length;
var i__17864__auto___36548 = (0);
while(true){
if((i__17864__auto___36548 < len__17863__auto___36547)){
args36544.push((arguments[i__17864__auto___36548]));

var G__36549 = (i__17864__auto___36548 + (1));
i__17864__auto___36548 = G__36549;
continue;
} else {
}
break;
}

var G__36546 = args36544.length;
switch (G__36546) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36544.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___36555 = arguments.length;
var i__17864__auto___36556 = (0);
while(true){
if((i__17864__auto___36556 < len__17863__auto___36555)){
args__17870__auto__.push((arguments[i__17864__auto___36556]));

var G__36557 = (i__17864__auto___36556 + (1));
i__17864__auto___36556 = G__36557;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36552){
var map__36553 = p__36552;
var map__36553__$1 = ((((!((map__36553 == null)))?((((map__36553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36553):map__36553);
var opts = map__36553__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36551){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36551));
});

//# sourceMappingURL=client.js.map?rel=1463388066883