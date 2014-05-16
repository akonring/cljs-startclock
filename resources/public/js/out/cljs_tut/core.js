// Compiled by ClojureScript 0.0-2069
goog.provide('cljs_tut.core');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
goog.require('domina');
goog.require('domina');
cljs_tut.core.application_state = cljs.core.atom.call(null,0);
cljs_tut.core.custom_formatter = cljs_time.format.formatter.call(null,"hh:mm:ss");
cljs_tut.core.render = (function render(old_state,new_state){domina.destroy_children_BANG_.call(null,domina.by_id.call(null,"watch"));
return domina.append_BANG_.call(null,domina.by_id.call(null,"watch"),[cljs.core.str("<h1>"),cljs.core.str(cljs_time.format.unparse.call(null,cljs_tut.core.custom_formatter,cljs_time.core.now.call(null))),cljs.core.str("</h1>")].join(''));
});
cljs_tut.core.rendersound = (function rendersound(){var audiocontrol = domina.by_id.call(null,"watch-sound");audiocontrol.load();
return audiocontrol.play();
});
cljs.core.add_watch.call(null,cljs_tut.core.application_state,new cljs.core.Keyword(null,"app-watcher","app-watcher",3940186498),(function (key,reference,old_state,new_state){if(cljs.core._EQ_.call(null,55,cljs_time.core.second.call(null,cljs_time.core.now.call(null))))
{cljs_tut.core.rendersound.call(null);
cljs_tut.core.render.call(null,old_state,new_state);
} else
{}
return cljs_tut.core.render.call(null,old_state,new_state);
}));
cljs_tut.core.receive_input = (function receive_input(){cljs.core.swap_BANG_.call(null,cljs_tut.core.application_state,cljs.core.inc);
return window.setTimeout((function (){return receive_input.call(null);
}),1000);
});
window.onload = cljs_tut.core.receive_input;

//# sourceMappingURL=core.js.map