(ns cljs-startclock.core
  (:require [domina :as dom]
            [cljs-time.format :as f]
            [cljs-time.core :as time]))

(def application-state (atom 0))

(def custom-formatter (f/formatter "hh:mm:ss"))

(defn render [old-state new-state]
  (dom/destroy-children! (dom/by-id "watch"))
  (dom/append! (dom/by-id "watch")
               (str "<h1>" (f/unparse custom-formatter (time/now)) "</h1>")))

(defn rendersound []
  (let [audiocontrol (dom/by-id "watch-sound")]
    (.load audiocontrol)
    (.play audiocontrol)))

(add-watch application-state :app-watcher
           (fn [key reference old-state new-state]
             (when 
                 (= 55 (time/second (time/now)))
               (do (rendersound)
                   (render old-state new-state)))
             (render old-state new-state)))

(defn receive-input []
  (swap! application-state inc)
  (.setTimeout js/window #(receive-input) 1000))

(set! (.-onload js/window) receive-input)






