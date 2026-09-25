@echo off
echo Setting up AI & Society Course Website...
echo.

REM Create public directory
if not exist "public" mkdir "public"

REM Copy assets to public
echo Copying assets to public folder...
copy "Assests\Hanging Banner.png" "public\banner.png" >nul 2>&1
copy "Assests\acm-logo.webp" "public\acm-logo.webp" >nul 2>&1
copy "Assests\Promo Video.mp4" "public\promo.mp4" >nul 2>&1

echo Assets copied successfully!
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

echo.
echo ============================================
echo  Setup complete!
echo  Run 'npm run dev' to start the dev server
echo ============================================
echo.
pause
