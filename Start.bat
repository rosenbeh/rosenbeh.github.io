SET IISExpressPath=%ProgramFiles(x86)%\IIS Express
SET RuntimePath=%~dp0
SET RuntimePath=%RuntimePath:~0,-1%
"%IISExpressPath%\iisexpress.exe" /port:1992 /path:"%RuntimePath%"
