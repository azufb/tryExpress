#!/bin/bash

mysql -u root -prootpass my_mysql_db < "/docker-entrypoint-initdb.d/init.sql"