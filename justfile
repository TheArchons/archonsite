set shell := ["zsh", "-uc"]

start:
        cd /home/archons/archonsite
        yarn run build
        nohup /home/archons/.nvm/versions/node/v21.7.2/bin/node ./build/server/index.js