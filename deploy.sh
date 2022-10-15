#!/bin/bash
APP_NAME=scratch-gui

cd /appdata/scratch

PID=`ps -ef | grep ${APP_NAME} | grep -v grep | awk '{print $2}'` && kill -9 ${PID} && echo "kill process "${PID}" finished!"

# git clone --recursive https://github.com/MemoryLong/scratch-gui.git
git clone https://github.com/MemoryLong/scratch-gui.git

cd scratch-gui

# 更新代码
git pull

# install、start
npm install
nohup npm start & sleep 1
