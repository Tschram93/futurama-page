#!/usr/bin/env bash

cd ~/Desktop/find-out

git add . 

DATE=$(date)

git commit -m "changes made on $DATE"

git push

echo SUCCESSFULLY PUSHED TO REMOTE REPOSITORY