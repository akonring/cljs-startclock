(ns cljs-startclock.core
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]
            [ring.util.response :as response]
            ring.adapter.jetty
            [clojure.java.io :as io]))

(enlive/deftemplate page
  (io/resource "public/simple.html")
  []
  [:body] (enlive/append
           (enlive/html [:script (browser-connected-repl-js)])))

(defroutes site
  (GET "/public/silvaclock.mp3" req 
       (response/content-type 
        (response/file-response "resources/public/silvaclock.mp3") "audio/mpeg"))
  (resources "/")
  (GET "/" req (page)))

(defn run
  []
  (defonce ^:private server
    (ring.adapter.jetty/run-jetty #'site {:port 8080 :join? false}))
  server)

(defonce Hest (atom {}))
