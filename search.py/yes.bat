@echo off

:: Navigate to server directory and run command
cd /d F:\projects\final-PROJECT\bistro boss server
start cmd /k "npx nodemon index.js"

:: Navigate to client directory and run command
cd /d F:\projects\final-PROJECT\bistro boss client menu
start cmd /k "npm run dev"
