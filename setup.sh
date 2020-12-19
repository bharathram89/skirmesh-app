#!/bin/bash

cd ~/Projects/battlefield

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt autoremove -y

echo "Installing required dependencies (git, pip3, etc.)"
sudo apt-get install git python3-pip python3-venv -y

echo "Creating Virtual Environment at venv"
python3 -m venv ./venv

venv/bin/pip3 install --upgrade setuptools
venv/bin/pip3 install -r requirements.txt
