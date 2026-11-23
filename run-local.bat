@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if not errorlevel 1 (
  py run-local.py
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python 3 was not found. Use VS Code Live Server to preview the site.
    pause
    exit /b 1
  )
  python run-local.py
)
