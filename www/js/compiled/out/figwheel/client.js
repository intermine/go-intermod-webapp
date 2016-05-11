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
var pred__28029 = cljs.core._EQ_;
var expr__28030 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e28033){if((e28033 instanceof Error)){
var e = e28033;
return false;
} else {
throw e28033;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28029.call(null,"true",expr__28030))){
return true;
} else {
if(cljs.core.truth_(pred__28029.call(null,"false",expr__28030))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28030)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28035){if((e28035 instanceof Error)){
var e = e28035;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28035;

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
var len__17863__auto___28037 = arguments.length;
var i__17864__auto___28038 = (0);
while(true){
if((i__17864__auto___28038 < len__17863__auto___28037)){
args__17870__auto__.push((arguments[i__17864__auto___28038]));

var G__28039 = (i__17864__auto___28038 + (1));
i__17864__auto___28038 = G__28039;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28036){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28036));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28040){
var map__28043 = p__28040;
var map__28043__$1 = ((((!((map__28043 == null)))?((((map__28043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28043):map__28043);
var message = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19184__auto___28205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___28205,ch){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___28205,ch){
return (function (state_28174){
var state_val_28175 = (state_28174[(1)]);
if((state_val_28175 === (7))){
var inst_28170 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28176_28206 = state_28174__$1;
(statearr_28176_28206[(2)] = inst_28170);

(statearr_28176_28206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (1))){
var state_28174__$1 = state_28174;
var statearr_28177_28207 = state_28174__$1;
(statearr_28177_28207[(2)] = null);

(statearr_28177_28207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (4))){
var inst_28127 = (state_28174[(7)]);
var inst_28127__$1 = (state_28174[(2)]);
var state_28174__$1 = (function (){var statearr_28178 = state_28174;
(statearr_28178[(7)] = inst_28127__$1);

return statearr_28178;
})();
if(cljs.core.truth_(inst_28127__$1)){
var statearr_28179_28208 = state_28174__$1;
(statearr_28179_28208[(1)] = (5));

} else {
var statearr_28180_28209 = state_28174__$1;
(statearr_28180_28209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (15))){
var inst_28134 = (state_28174[(8)]);
var inst_28149 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28134);
var inst_28150 = cljs.core.first.call(null,inst_28149);
var inst_28151 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28150);
var inst_28152 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28151)].join('');
var inst_28153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28152);
var state_28174__$1 = state_28174;
var statearr_28181_28210 = state_28174__$1;
(statearr_28181_28210[(2)] = inst_28153);

(statearr_28181_28210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (13))){
var inst_28158 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28182_28211 = state_28174__$1;
(statearr_28182_28211[(2)] = inst_28158);

(statearr_28182_28211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (6))){
var state_28174__$1 = state_28174;
var statearr_28183_28212 = state_28174__$1;
(statearr_28183_28212[(2)] = null);

(statearr_28183_28212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (17))){
var inst_28156 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28184_28213 = state_28174__$1;
(statearr_28184_28213[(2)] = inst_28156);

(statearr_28184_28213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (3))){
var inst_28172 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28174__$1,inst_28172);
} else {
if((state_val_28175 === (12))){
var inst_28133 = (state_28174[(9)]);
var inst_28147 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28133,opts);
var state_28174__$1 = state_28174;
if(cljs.core.truth_(inst_28147)){
var statearr_28185_28214 = state_28174__$1;
(statearr_28185_28214[(1)] = (15));

} else {
var statearr_28186_28215 = state_28174__$1;
(statearr_28186_28215[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (2))){
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28174__$1,(4),ch);
} else {
if((state_val_28175 === (11))){
var inst_28134 = (state_28174[(8)]);
var inst_28139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28140 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28134);
var inst_28141 = cljs.core.async.timeout.call(null,(1000));
var inst_28142 = [inst_28140,inst_28141];
var inst_28143 = (new cljs.core.PersistentVector(null,2,(5),inst_28139,inst_28142,null));
var state_28174__$1 = state_28174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28174__$1,(14),inst_28143);
} else {
if((state_val_28175 === (9))){
var inst_28134 = (state_28174[(8)]);
var inst_28160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28161 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28134);
var inst_28162 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28161);
var inst_28163 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28162)].join('');
var inst_28164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28163);
var state_28174__$1 = (function (){var statearr_28187 = state_28174;
(statearr_28187[(10)] = inst_28160);

return statearr_28187;
})();
var statearr_28188_28216 = state_28174__$1;
(statearr_28188_28216[(2)] = inst_28164);

(statearr_28188_28216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (5))){
var inst_28127 = (state_28174[(7)]);
var inst_28129 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28130 = (new cljs.core.PersistentArrayMap(null,2,inst_28129,null));
var inst_28131 = (new cljs.core.PersistentHashSet(null,inst_28130,null));
var inst_28132 = figwheel.client.focus_msgs.call(null,inst_28131,inst_28127);
var inst_28133 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28132);
var inst_28134 = cljs.core.first.call(null,inst_28132);
var inst_28135 = figwheel.client.autoload_QMARK_.call(null);
var state_28174__$1 = (function (){var statearr_28189 = state_28174;
(statearr_28189[(8)] = inst_28134);

(statearr_28189[(9)] = inst_28133);

return statearr_28189;
})();
if(cljs.core.truth_(inst_28135)){
var statearr_28190_28217 = state_28174__$1;
(statearr_28190_28217[(1)] = (8));

} else {
var statearr_28191_28218 = state_28174__$1;
(statearr_28191_28218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (14))){
var inst_28145 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28192_28219 = state_28174__$1;
(statearr_28192_28219[(2)] = inst_28145);

(statearr_28192_28219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (16))){
var state_28174__$1 = state_28174;
var statearr_28193_28220 = state_28174__$1;
(statearr_28193_28220[(2)] = null);

(statearr_28193_28220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (10))){
var inst_28166 = (state_28174[(2)]);
var state_28174__$1 = (function (){var statearr_28194 = state_28174;
(statearr_28194[(11)] = inst_28166);

return statearr_28194;
})();
var statearr_28195_28221 = state_28174__$1;
(statearr_28195_28221[(2)] = null);

(statearr_28195_28221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (8))){
var inst_28133 = (state_28174[(9)]);
var inst_28137 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28133,opts);
var state_28174__$1 = state_28174;
if(cljs.core.truth_(inst_28137)){
var statearr_28196_28222 = state_28174__$1;
(statearr_28196_28222[(1)] = (11));

} else {
var statearr_28197_28223 = state_28174__$1;
(statearr_28197_28223[(1)] = (12));

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
});})(c__19184__auto___28205,ch))
;
return ((function (switch__19163__auto__,c__19184__auto___28205,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____0 = (function (){
var statearr_28201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28201[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__);

(statearr_28201[(1)] = (1));

return statearr_28201;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____1 = (function (state_28174){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_28174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e28202){if((e28202 instanceof Object)){
var ex__19167__auto__ = e28202;
var statearr_28203_28224 = state_28174;
(statearr_28203_28224[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28225 = state_28174;
state_28174 = G__28225;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__ = function(state_28174){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____1.call(this,state_28174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19164__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___28205,ch))
})();
var state__19186__auto__ = (function (){var statearr_28204 = f__19185__auto__.call(null);
(statearr_28204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___28205);

return statearr_28204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___28205,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28226_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28226_SHARP_));
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
var base_path_28233 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28233){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28232 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28232;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28231;
}}catch (e28230){if((e28230 instanceof Error)){
var e = e28230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28233], null));
} else {
var e = e28230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28233))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28234){
var map__28241 = p__28234;
var map__28241__$1 = ((((!((map__28241 == null)))?((((map__28241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28241):map__28241);
var opts = map__28241__$1;
var build_id = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28241,map__28241__$1,opts,build_id){
return (function (p__28243){
var vec__28244 = p__28243;
var map__28245 = cljs.core.nth.call(null,vec__28244,(0),null);
var map__28245__$1 = ((((!((map__28245 == null)))?((((map__28245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28245):map__28245);
var msg = map__28245__$1;
var msg_name = cljs.core.get.call(null,map__28245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28244,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28244,map__28245,map__28245__$1,msg,msg_name,_,map__28241,map__28241__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28244,map__28245,map__28245__$1,msg,msg_name,_,map__28241,map__28241__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28241,map__28241__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28251){
var vec__28252 = p__28251;
var map__28253 = cljs.core.nth.call(null,vec__28252,(0),null);
var map__28253__$1 = ((((!((map__28253 == null)))?((((map__28253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28253):map__28253);
var msg = map__28253__$1;
var msg_name = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28252,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28255){
var map__28265 = p__28255;
var map__28265__$1 = ((((!((map__28265 == null)))?((((map__28265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28265):map__28265);
var on_compile_warning = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28265,map__28265__$1,on_compile_warning,on_compile_fail){
return (function (p__28267){
var vec__28268 = p__28267;
var map__28269 = cljs.core.nth.call(null,vec__28268,(0),null);
var map__28269__$1 = ((((!((map__28269 == null)))?((((map__28269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var msg = map__28269__$1;
var msg_name = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28268,(1));
var pred__28271 = cljs.core._EQ_;
var expr__28272 = msg_name;
if(cljs.core.truth_(pred__28271.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28272))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28271.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28272))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28265,map__28265__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,msg_hist,msg_names,msg){
return (function (state_28488){
var state_val_28489 = (state_28488[(1)]);
if((state_val_28489 === (7))){
var inst_28412 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28412)){
var statearr_28490_28536 = state_28488__$1;
(statearr_28490_28536[(1)] = (8));

} else {
var statearr_28491_28537 = state_28488__$1;
(statearr_28491_28537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (20))){
var inst_28482 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28492_28538 = state_28488__$1;
(statearr_28492_28538[(2)] = inst_28482);

(statearr_28492_28538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (27))){
var inst_28478 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28493_28539 = state_28488__$1;
(statearr_28493_28539[(2)] = inst_28478);

(statearr_28493_28539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (1))){
var inst_28405 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28405)){
var statearr_28494_28540 = state_28488__$1;
(statearr_28494_28540[(1)] = (2));

} else {
var statearr_28495_28541 = state_28488__$1;
(statearr_28495_28541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (24))){
var inst_28480 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28496_28542 = state_28488__$1;
(statearr_28496_28542[(2)] = inst_28480);

(statearr_28496_28542[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (4))){
var inst_28486 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28488__$1,inst_28486);
} else {
if((state_val_28489 === (15))){
var inst_28484 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28497_28543 = state_28488__$1;
(statearr_28497_28543[(2)] = inst_28484);

(statearr_28497_28543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (21))){
var inst_28443 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28498_28544 = state_28488__$1;
(statearr_28498_28544[(2)] = inst_28443);

(statearr_28498_28544[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (31))){
var inst_28467 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28467)){
var statearr_28499_28545 = state_28488__$1;
(statearr_28499_28545[(1)] = (34));

} else {
var statearr_28500_28546 = state_28488__$1;
(statearr_28500_28546[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (32))){
var inst_28476 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28501_28547 = state_28488__$1;
(statearr_28501_28547[(2)] = inst_28476);

(statearr_28501_28547[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (33))){
var inst_28465 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28502_28548 = state_28488__$1;
(statearr_28502_28548[(2)] = inst_28465);

(statearr_28502_28548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (13))){
var inst_28426 = figwheel.client.heads_up.clear.call(null);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(16),inst_28426);
} else {
if((state_val_28489 === (22))){
var inst_28447 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28448 = figwheel.client.heads_up.append_message.call(null,inst_28447);
var state_28488__$1 = state_28488;
var statearr_28503_28549 = state_28488__$1;
(statearr_28503_28549[(2)] = inst_28448);

(statearr_28503_28549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (36))){
var inst_28474 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28504_28550 = state_28488__$1;
(statearr_28504_28550[(2)] = inst_28474);

(statearr_28504_28550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (29))){
var inst_28458 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28505_28551 = state_28488__$1;
(statearr_28505_28551[(2)] = inst_28458);

(statearr_28505_28551[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (6))){
var inst_28407 = (state_28488[(7)]);
var state_28488__$1 = state_28488;
var statearr_28506_28552 = state_28488__$1;
(statearr_28506_28552[(2)] = inst_28407);

(statearr_28506_28552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (28))){
var inst_28454 = (state_28488[(2)]);
var inst_28455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28456 = figwheel.client.heads_up.display_warning.call(null,inst_28455);
var state_28488__$1 = (function (){var statearr_28507 = state_28488;
(statearr_28507[(8)] = inst_28454);

return statearr_28507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(29),inst_28456);
} else {
if((state_val_28489 === (25))){
var inst_28452 = figwheel.client.heads_up.clear.call(null);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(28),inst_28452);
} else {
if((state_val_28489 === (34))){
var inst_28469 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(37),inst_28469);
} else {
if((state_val_28489 === (17))){
var inst_28434 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28508_28553 = state_28488__$1;
(statearr_28508_28553[(2)] = inst_28434);

(statearr_28508_28553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (3))){
var inst_28424 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28424)){
var statearr_28509_28554 = state_28488__$1;
(statearr_28509_28554[(1)] = (13));

} else {
var statearr_28510_28555 = state_28488__$1;
(statearr_28510_28555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (12))){
var inst_28420 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28511_28556 = state_28488__$1;
(statearr_28511_28556[(2)] = inst_28420);

(statearr_28511_28556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (2))){
var inst_28407 = (state_28488[(7)]);
var inst_28407__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28488__$1 = (function (){var statearr_28512 = state_28488;
(statearr_28512[(7)] = inst_28407__$1);

return statearr_28512;
})();
if(cljs.core.truth_(inst_28407__$1)){
var statearr_28513_28557 = state_28488__$1;
(statearr_28513_28557[(1)] = (5));

} else {
var statearr_28514_28558 = state_28488__$1;
(statearr_28514_28558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (23))){
var inst_28450 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28450)){
var statearr_28515_28559 = state_28488__$1;
(statearr_28515_28559[(1)] = (25));

} else {
var statearr_28516_28560 = state_28488__$1;
(statearr_28516_28560[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (35))){
var state_28488__$1 = state_28488;
var statearr_28517_28561 = state_28488__$1;
(statearr_28517_28561[(2)] = null);

(statearr_28517_28561[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (19))){
var inst_28445 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28445)){
var statearr_28518_28562 = state_28488__$1;
(statearr_28518_28562[(1)] = (22));

} else {
var statearr_28519_28563 = state_28488__$1;
(statearr_28519_28563[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (11))){
var inst_28416 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28520_28564 = state_28488__$1;
(statearr_28520_28564[(2)] = inst_28416);

(statearr_28520_28564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (9))){
var inst_28418 = figwheel.client.heads_up.clear.call(null);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(12),inst_28418);
} else {
if((state_val_28489 === (5))){
var inst_28409 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28488__$1 = state_28488;
var statearr_28521_28565 = state_28488__$1;
(statearr_28521_28565[(2)] = inst_28409);

(statearr_28521_28565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (14))){
var inst_28436 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28436)){
var statearr_28522_28566 = state_28488__$1;
(statearr_28522_28566[(1)] = (18));

} else {
var statearr_28523_28567 = state_28488__$1;
(statearr_28523_28567[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (26))){
var inst_28460 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28460)){
var statearr_28524_28568 = state_28488__$1;
(statearr_28524_28568[(1)] = (30));

} else {
var statearr_28525_28569 = state_28488__$1;
(statearr_28525_28569[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (16))){
var inst_28428 = (state_28488[(2)]);
var inst_28429 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28430 = figwheel.client.format_messages.call(null,inst_28429);
var inst_28431 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28432 = figwheel.client.heads_up.display_error.call(null,inst_28430,inst_28431);
var state_28488__$1 = (function (){var statearr_28526 = state_28488;
(statearr_28526[(9)] = inst_28428);

return statearr_28526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(17),inst_28432);
} else {
if((state_val_28489 === (30))){
var inst_28462 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28463 = figwheel.client.heads_up.display_warning.call(null,inst_28462);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(33),inst_28463);
} else {
if((state_val_28489 === (10))){
var inst_28422 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28527_28570 = state_28488__$1;
(statearr_28527_28570[(2)] = inst_28422);

(statearr_28527_28570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (18))){
var inst_28438 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28439 = figwheel.client.format_messages.call(null,inst_28438);
var inst_28440 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28441 = figwheel.client.heads_up.display_error.call(null,inst_28439,inst_28440);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(21),inst_28441);
} else {
if((state_val_28489 === (37))){
var inst_28471 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28528_28571 = state_28488__$1;
(statearr_28528_28571[(2)] = inst_28471);

(statearr_28528_28571[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (8))){
var inst_28414 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(11),inst_28414);
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
var statearr_28532 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28532[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____1 = (function (state_28488){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_28488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e28533){if((e28533 instanceof Object)){
var ex__19167__auto__ = e28533;
var statearr_28534_28572 = state_28488;
(statearr_28534_28572[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28573 = state_28488;
state_28488 = G__28573;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__ = function(state_28488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____1.call(this,state_28488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,msg_hist,msg_names,msg))
})();
var state__19186__auto__ = (function (){var statearr_28535 = f__19185__auto__.call(null);
(statearr_28535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,msg_hist,msg_names,msg))
);

return c__19184__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19184__auto___28636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___28636,ch){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___28636,ch){
return (function (state_28619){
var state_val_28620 = (state_28619[(1)]);
if((state_val_28620 === (1))){
var state_28619__$1 = state_28619;
var statearr_28621_28637 = state_28619__$1;
(statearr_28621_28637[(2)] = null);

(statearr_28621_28637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (2))){
var state_28619__$1 = state_28619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28619__$1,(4),ch);
} else {
if((state_val_28620 === (3))){
var inst_28617 = (state_28619[(2)]);
var state_28619__$1 = state_28619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28619__$1,inst_28617);
} else {
if((state_val_28620 === (4))){
var inst_28607 = (state_28619[(7)]);
var inst_28607__$1 = (state_28619[(2)]);
var state_28619__$1 = (function (){var statearr_28622 = state_28619;
(statearr_28622[(7)] = inst_28607__$1);

return statearr_28622;
})();
if(cljs.core.truth_(inst_28607__$1)){
var statearr_28623_28638 = state_28619__$1;
(statearr_28623_28638[(1)] = (5));

} else {
var statearr_28624_28639 = state_28619__$1;
(statearr_28624_28639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (5))){
var inst_28607 = (state_28619[(7)]);
var inst_28609 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28607);
var state_28619__$1 = state_28619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28619__$1,(8),inst_28609);
} else {
if((state_val_28620 === (6))){
var state_28619__$1 = state_28619;
var statearr_28625_28640 = state_28619__$1;
(statearr_28625_28640[(2)] = null);

(statearr_28625_28640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (7))){
var inst_28615 = (state_28619[(2)]);
var state_28619__$1 = state_28619;
var statearr_28626_28641 = state_28619__$1;
(statearr_28626_28641[(2)] = inst_28615);

(statearr_28626_28641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (8))){
var inst_28611 = (state_28619[(2)]);
var state_28619__$1 = (function (){var statearr_28627 = state_28619;
(statearr_28627[(8)] = inst_28611);

return statearr_28627;
})();
var statearr_28628_28642 = state_28619__$1;
(statearr_28628_28642[(2)] = null);

(statearr_28628_28642[(1)] = (2));


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
});})(c__19184__auto___28636,ch))
;
return ((function (switch__19163__auto__,c__19184__auto___28636,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19164__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19164__auto____0 = (function (){
var statearr_28632 = [null,null,null,null,null,null,null,null,null];
(statearr_28632[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19164__auto__);

(statearr_28632[(1)] = (1));

return statearr_28632;
});
var figwheel$client$heads_up_plugin_$_state_machine__19164__auto____1 = (function (state_28619){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_28619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e28633){if((e28633 instanceof Object)){
var ex__19167__auto__ = e28633;
var statearr_28634_28643 = state_28619;
(statearr_28634_28643[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28644 = state_28619;
state_28619 = G__28644;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19164__auto__ = function(state_28619){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19164__auto____1.call(this,state_28619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19164__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19164__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___28636,ch))
})();
var state__19186__auto__ = (function (){var statearr_28635 = f__19185__auto__.call(null);
(statearr_28635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___28636);

return statearr_28635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___28636,ch))
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
return (function (state_28665){
var state_val_28666 = (state_28665[(1)]);
if((state_val_28666 === (1))){
var inst_28660 = cljs.core.async.timeout.call(null,(3000));
var state_28665__$1 = state_28665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28665__$1,(2),inst_28660);
} else {
if((state_val_28666 === (2))){
var inst_28662 = (state_28665[(2)]);
var inst_28663 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28665__$1 = (function (){var statearr_28667 = state_28665;
(statearr_28667[(7)] = inst_28662);

return statearr_28667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28665__$1,inst_28663);
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
var statearr_28671 = [null,null,null,null,null,null,null,null];
(statearr_28671[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__);

(statearr_28671[(1)] = (1));

return statearr_28671;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____1 = (function (state_28665){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_28665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e28672){if((e28672 instanceof Object)){
var ex__19167__auto__ = e28672;
var statearr_28673_28675 = state_28665;
(statearr_28673_28675[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28665;
state_28665 = G__28676;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__ = function(state_28665){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____1.call(this,state_28665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19164__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_28674 = f__19185__auto__.call(null);
(statearr_28674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_28674;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28677){
var map__28684 = p__28677;
var map__28684__$1 = ((((!((map__28684 == null)))?((((map__28684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);
var ed = map__28684__$1;
var formatted_exception = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28686_28690 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28687_28691 = null;
var count__28688_28692 = (0);
var i__28689_28693 = (0);
while(true){
if((i__28689_28693 < count__28688_28692)){
var msg_28694 = cljs.core._nth.call(null,chunk__28687_28691,i__28689_28693);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28694);

var G__28695 = seq__28686_28690;
var G__28696 = chunk__28687_28691;
var G__28697 = count__28688_28692;
var G__28698 = (i__28689_28693 + (1));
seq__28686_28690 = G__28695;
chunk__28687_28691 = G__28696;
count__28688_28692 = G__28697;
i__28689_28693 = G__28698;
continue;
} else {
var temp__4425__auto___28699 = cljs.core.seq.call(null,seq__28686_28690);
if(temp__4425__auto___28699){
var seq__28686_28700__$1 = temp__4425__auto___28699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28686_28700__$1)){
var c__17608__auto___28701 = cljs.core.chunk_first.call(null,seq__28686_28700__$1);
var G__28702 = cljs.core.chunk_rest.call(null,seq__28686_28700__$1);
var G__28703 = c__17608__auto___28701;
var G__28704 = cljs.core.count.call(null,c__17608__auto___28701);
var G__28705 = (0);
seq__28686_28690 = G__28702;
chunk__28687_28691 = G__28703;
count__28688_28692 = G__28704;
i__28689_28693 = G__28705;
continue;
} else {
var msg_28706 = cljs.core.first.call(null,seq__28686_28700__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28706);

var G__28707 = cljs.core.next.call(null,seq__28686_28700__$1);
var G__28708 = null;
var G__28709 = (0);
var G__28710 = (0);
seq__28686_28690 = G__28707;
chunk__28687_28691 = G__28708;
count__28688_28692 = G__28709;
i__28689_28693 = G__28710;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28711){
var map__28714 = p__28711;
var map__28714__$1 = ((((!((map__28714 == null)))?((((map__28714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28714):map__28714);
var w = map__28714__$1;
var message = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28722 = cljs.core.seq.call(null,plugins);
var chunk__28723 = null;
var count__28724 = (0);
var i__28725 = (0);
while(true){
if((i__28725 < count__28724)){
var vec__28726 = cljs.core._nth.call(null,chunk__28723,i__28725);
var k = cljs.core.nth.call(null,vec__28726,(0),null);
var plugin = cljs.core.nth.call(null,vec__28726,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28728 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28722,chunk__28723,count__28724,i__28725,pl_28728,vec__28726,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28728.call(null,msg_hist);
});})(seq__28722,chunk__28723,count__28724,i__28725,pl_28728,vec__28726,k,plugin))
);
} else {
}

var G__28729 = seq__28722;
var G__28730 = chunk__28723;
var G__28731 = count__28724;
var G__28732 = (i__28725 + (1));
seq__28722 = G__28729;
chunk__28723 = G__28730;
count__28724 = G__28731;
i__28725 = G__28732;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28722);
if(temp__4425__auto__){
var seq__28722__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28722__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__28722__$1);
var G__28733 = cljs.core.chunk_rest.call(null,seq__28722__$1);
var G__28734 = c__17608__auto__;
var G__28735 = cljs.core.count.call(null,c__17608__auto__);
var G__28736 = (0);
seq__28722 = G__28733;
chunk__28723 = G__28734;
count__28724 = G__28735;
i__28725 = G__28736;
continue;
} else {
var vec__28727 = cljs.core.first.call(null,seq__28722__$1);
var k = cljs.core.nth.call(null,vec__28727,(0),null);
var plugin = cljs.core.nth.call(null,vec__28727,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28737 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28722,chunk__28723,count__28724,i__28725,pl_28737,vec__28727,k,plugin,seq__28722__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28737.call(null,msg_hist);
});})(seq__28722,chunk__28723,count__28724,i__28725,pl_28737,vec__28727,k,plugin,seq__28722__$1,temp__4425__auto__))
);
} else {
}

var G__28738 = cljs.core.next.call(null,seq__28722__$1);
var G__28739 = null;
var G__28740 = (0);
var G__28741 = (0);
seq__28722 = G__28738;
chunk__28723 = G__28739;
count__28724 = G__28740;
i__28725 = G__28741;
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
var args28742 = [];
var len__17863__auto___28745 = arguments.length;
var i__17864__auto___28746 = (0);
while(true){
if((i__17864__auto___28746 < len__17863__auto___28745)){
args28742.push((arguments[i__17864__auto___28746]));

var G__28747 = (i__17864__auto___28746 + (1));
i__17864__auto___28746 = G__28747;
continue;
} else {
}
break;
}

var G__28744 = args28742.length;
switch (G__28744) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28742.length)].join('')));

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
var len__17863__auto___28753 = arguments.length;
var i__17864__auto___28754 = (0);
while(true){
if((i__17864__auto___28754 < len__17863__auto___28753)){
args__17870__auto__.push((arguments[i__17864__auto___28754]));

var G__28755 = (i__17864__auto___28754 + (1));
i__17864__auto___28754 = G__28755;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28750){
var map__28751 = p__28750;
var map__28751__$1 = ((((!((map__28751 == null)))?((((map__28751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);
var opts = map__28751__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28749){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28749));
});

//# sourceMappingURL=client.js.map?rel=1462895599310