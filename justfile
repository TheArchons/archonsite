set shell := ["zsh", "-uc"]

start:
        cd /home/archons/archonsite
        export PATH="$PATH:/home/archons/.nvm/versions/node/v22.15.1/bin"
        git pull
        npm install
        npm run build
