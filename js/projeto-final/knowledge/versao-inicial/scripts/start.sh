#! /bin/sh
mongodb
npm start
knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles
knex migrate:make add_deleted_at_table_users
