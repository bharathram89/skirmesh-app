# Battlefield Gaming System

This projct aims to provide stationary or mobile nodes throughout gameplay, which enhance obsevability from a controlling station. Examples are team control of certain objectives, medic validation, or even follow a unit as they traverse the battlefield.

## Nodes

Nodes can serve various functions. For the beta stages, nodes will serve as a stationary control point used for tracking team control over an objective. As the project progresses, nodes will become mobile and utilize additional features---gps, etc.---to enhance gameplay.

## Base Station

The base station will communicate with and direct node functions. During beta, the base station will communicate and manage database structures for validating team capture. In the future, the base station will be used to reconfigure each node for a specific purpose. The base station will also provide a GUI that can monitor team action via top-down GPS views.


### Define Payload structure

Payload is defined for Ballahack as follows:  
* payload[0] = COMMAND  
* payload[1:] = UID or other to get parsed by the command dictionary

Controller to Node structure:
* payload[0] = COMMAND
* payload[1] = Configuration
* payload[2] = Configuration arguments

### Command Dictionary

0x00 - CONFIGURE  
0x01 - REGISTER  
0x02 - QUERY  
...  
0x0A - CAPTURE  
0x0B -      
...  
0x0E - MEDIC  
0x53 - NODE STATUS  
0xDD - DISCOVERY  
0x0F -   
...  
0xFF  

### systemd file contents

Generate a service file with contents as shown:  

    sudo nano /etc/systemd/system/battlefield.service

Cut and paste the following into the file created above:

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

Start/Stop the service with:  

    sudo systemctl start battlefield.service
    sudo systemctl stop battlefield.service

Enable the service with:

    sudo systemctl enable battlefield.service

For some reason, syslog takes an inordinate amount of space and seems to fill my syslog in one night of constant running. To preven this, run:

    sudo nano /etc/rsyslog.conf 
    
In the section titled:

    ###############
    #### RULES ####
    ###############
    
Comment out the following lines by prepending a "#":

    #*.*;auth,authpriv.none         -/var/log/syslog
    #daemon.*                       -/var/log/daemon.log

Finally, add the following to the bottom:

    *.*     ~

Then run:

    sudo service rsyslog restart
    
To compile micropython files, run:

    for file in *.py; do python3 -m mpy_cross -mno-unicode -msmall-int-bits=31 $file; done
    

    
    
