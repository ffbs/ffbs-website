#!/bin/bash
for inc in $(ls -1 includes/); do
	declare "$inc"="$(cat includes/$inc)"
	export "$inc"
done
cp .gitignore.template .gitignore
(echo "# ignoring from *.template generated files"
for file in $(ls *.template); do
	new=$(echo $file | sed 's/template/html/')
	./mo $file > $new
	echo "$new"
done) >> .gitignore

