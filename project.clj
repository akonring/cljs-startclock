(defproject cljs-startclock "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [compojure "1.1.6"]
                 [org.clojure/clojurescript "0.0-2069"]
                 [enlive "1.1.5"]
                 [ring "1.2.1"]
                 [com.andrewmcveigh/cljs-time "0.1.1"]
                 [domina "1.0.3-SNAPSHOT"]]
  :source-paths ["src/clj" "src/cljs"]

  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-ring "0.8.10"]]
  
  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.4"]]}}

  :ring {:handler cljs-startclock.core/site}
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:optimizations :none
                           :pretty-print true
                           :output-to "resources/public/js/main.js"
                           :output-dir "resources/public/js/out"
                           :source-map "core.js.map" }}]})

