#!/bin/bash
while true; do
  /usr/local/bin/php /home/defaultwebsite/public/moodle/admin/cli/cron.php
  sleep 60
done
