FROM wordpress:latest

# Copy custom plugins, themes, and uploads (if any)
COPY wp-content /var/www/html/wp-content

# Set up any additional environment variables
ENV WORDPRESS_DB_HOST=db:3306
ENV WORDPRESS_DB_NAME=wordpress
ENV WORDPRESS_DB_USER=root
ENV WORDPRESS_DB_PASSWORD=password

# Expose the port WordPress runs on
EXPOSE 80
