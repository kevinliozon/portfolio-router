@ECHO OFF
TITLE Portfolio
ECHO *** Opening localhost in default browser ***
ECHO Success!
start "" http://localhost:8000
ECHO *** Serving project ***
ECHO Success!
python -m http.server 8000
PAUSE
