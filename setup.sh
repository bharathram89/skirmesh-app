#!/bin/bash

cd ~/Coding/Ballahack

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt autoremove -y

echo "Installing required dependencies (git, pip3, etc.)"
sudo apt-get install git python3-pip python3-venv -y

echo "Creating Virtual Environment at ./VENV"
python3 -m venv ./VENV

./VENV/bin/pip3 install --upgrade setuptools
./VENV/bin/pip3 install -r requirements.txt
