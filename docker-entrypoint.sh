#!/bin/bash
set -e

# Generate app key if not set
php artisan key:generate --force

# Clear config cache first
php artisan config:clear

# Try to run migrations (may fail if DB not ready yet, that's ok)
php artisan migrate --force || echo "Migration failed, DB might not be ready"
php artisan db:seed --force || echo "Seeding failed, DB might not be ready"

# Cache config and routes
php artisan config:cache
php artisan route:cache

exec "$@"
