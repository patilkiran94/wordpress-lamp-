FROM php:8.2-apache

# Install PHP extensions required by WordPress
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache rewrite
RUN a2enmod rewrite

# Download WordPress
WORKDIR /var/www/html
RUN curl -O https://wordpress.org/latest.tar.gz \
    && tar -xzf latest.tar.gz \
    && chown -R www-data:www-data wordpress

EXPOSE 80
