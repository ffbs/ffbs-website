ffbs-website
============

Die Website des Freifunk Braunschweig

Alle Seiten werden statisch generiert. Die Templates werden mit Mustache gebaut, das entsprechende Tool zum
Generieren der HTML Dateien findet sich hier: https://github.com/tests-always-included/mo

Der Pfad in `generate.sh` muss entsprechend angepasst werden.

Folgende Konfiguration liegt im nginx vor, diese Seiten werden von einem anderen Server bearbeitet:

	location ~ ^/(api.json|nodes.json|nodes_compat.json|nodes.txt|nodecount|newkey|clientcount|deny_key|approve_key|contact)$


