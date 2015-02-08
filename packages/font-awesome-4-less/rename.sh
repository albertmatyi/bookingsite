#!/bin/bash
cd lib/less
for file in *.less ; do mv "$file" "${file/.less/}.import.less" ; done
sed -i "s/\@{fa-css-prefix}/fa/g" *.import.less

