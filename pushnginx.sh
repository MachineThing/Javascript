sudo cp .service/nginx.conf /etc/nginx/sites-enabled/javascript
sudo systemctl restart nginx
sudo nginx -t
