#!/bin/bash
cd /appdata/scratch

git clone --recursive git@github.com:MemoryLong/scratch-gui.git

cd scratch-gui

npm install

nohup npm start & sleep 1
