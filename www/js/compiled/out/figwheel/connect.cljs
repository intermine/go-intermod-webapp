(ns figwheel.connect (:require [gointermod.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/gointermod.core.mount-root (apply js/gointermod.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'gointermod.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

