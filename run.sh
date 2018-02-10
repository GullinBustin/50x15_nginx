#!/bin/bash
sed -i 's/SERVER_URL/'$SERVER_URL'/g' /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'
