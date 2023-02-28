@echo off
title Browser Sync
SETLOCAL EnableDelayedExpansion
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do     rem"') do (
  set "DEL=%%a"
)
echo.
call :colorEcho 0c "Ensure Directory;"
echo.
cd 
echo.
timeout /t 5 >nul /nobreak
call :colorEcho 0a "------------------------------"
echo.
echo.
call :colorEcho 0f " Starting Browser-Sync Server"
echo.
echo.
call :colorEcho 0a "------------------------------"
echo.
echo.
timeout /t 2 >nul /nobreak

rem "Change Files Mention Within The Double Quotes ;Below; "
start "" browser-sync start --s --f "**/*"
rem "Change Files Mention Within The Double Quotes ;Above; "

timeout 1 >nul
exit
:colorEcho
echo off
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1i