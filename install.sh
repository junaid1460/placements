#!/bin/bash

if [ "$(whoami)" != "root" ]
then
    echo "root permission required!"
    echo "run : sudo $0 {student username}"
    exit
fi

if [ "$1" == "" ]
then
    echo "please pass your username."
    echo "run : sudo $0 {student username}"
    exit
fi

user=$1

if [ "$(cat /etc/passwd|grep ^$user\:)"  == "" ]
then
    print "Invalid username"
    exit
fi

# install missing dependencies if exist
sudo apt-get install -f --yes

sudo apt-get install --yes docker docker-compose git --allow-change-held-packages

sudo groupadd docker
sudo usermod -aG docker "$user" #add student to docker group



wget https://az764295.vo.msecnd.net/stable/490ef761b76b3f3b3832eff7a588aac891e5fe80/code_1.19.2-1515599945_amd64.deb -O vscode.deb

sudo dpkg -i vscode.deb

# install missing dependencies if exist
sudo apt-get install -f --yes



sudo -H -u $user bash -c "cd ~  && curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash"

echo 
echo
echo "Now reopen terminal and type : nvm install v8.9.4"