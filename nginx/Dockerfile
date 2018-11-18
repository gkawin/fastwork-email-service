FROM nginx
COPY nginx.conf /data/conf/
COPY email-service.conf /data/sites-enabled/email-service.conf

# overriding main configuration
CMD ["nginx", "-c", "/data/conf/nginx.conf"]