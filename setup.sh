#!/bin/bash

echo "Navigating to home directory - creating ~/Coding/battlefield"
cd ~/
mkdir Coding
cd Coding
mkdir /battlefield

echo "Navigating to ~/Coding/battlefield"
cd ~/Coding/battlefield

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt autoremove -y

echo "Installing required dependencies (git, pip3, etc.)"
sudo apt-get install git python3-pip python3-venv -y

echo "Creating Virtual Environment at venv"
python3 -m venv ./venv

venv/bin/pip3 install --upgrade setuptools
venv/bin/pip3 install -r requirements.txt

echo "Generating service file at /etc/systemd/system/battlefield.service"
sudo cat > battlefield.service <<EOF
[Unit]
Description=Battlefield Init Service

[Service]
WorkingDirectory=/home/pi/Coding/battlefield/
ExecStart=/home/pi/Coding/battlefield/venv/bin/python main.py
StandardOutput=inherit
StandardError=inherit
Restart=on-failure
RestartSec=15

[Install]
WantedBy=multi-user.target
Alias=battlefield.service
EOF

sudo cp battlefield.service /etc/systemd/system/battlefield.service

echo "enabling /etc/systemd/system/battlefield.service"
sudo systemctl enable battlefield.service
sudo systemctl start battlefield.service

echo "Battlefield Gaming Systems is fully enabled."
