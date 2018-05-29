FROM nginx:1.13

COPY ./default.txt /etc/nginx/conf.d/default.conf
COPY ./run.sh ./run.sh

RUN chmod +x run.sh

CMD [ "./run.sh" ]
