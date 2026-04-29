#!/bin/bash
set -e

# Generate app key if not set
php artisan key:generate --force

# Run migrations and seed
php artisan migrate --force
php artisan db:seed --force

# Clear and cache config
php artisan config:cache
php artisan route:cache

exec "$@"
