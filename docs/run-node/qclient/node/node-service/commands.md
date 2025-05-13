---
sidebar_position: 2
---
# Node Service Commands
For both MacOS and Linux, commands for operating your node have been stubbed into qclient for ease of use.

:::tip
For MacOS, the service uses the native Launchd service.

For Linux, Systemd is used.

This will detect which operating system and use the relevant commands.
:::


## Commands
To start the node:
### Start
```bash
qclient node service start
```
### Status
To get the current status of the node:
```bash
qclient node service status
```
### Stop
To stop the node gracefully,
```bash
qclient node service stop
```
### Restart
To restart the node:
```bash
qclient node service restart
```
### Reload
If there are any config changes, you must reload the service (should be rare that this happens).
```bash
qclient node service reload
```
### Enable
To enable to service to start the node on server restarts:
```bash
qclient node service enable
```
### Disable
To disable node startup on restarts:
```bash
qclient node service disable
```

### Update
When new updates of qclient come out, there may be changes to the service file for optimization, but by default, this will not automatically replace your existing service file (the changes will not take effect).

To update the service file to the latest version:
```bash
qclient node service update
```

### Uninstall
If you wish to remove the standard service install:
```bash
qclient node service uninstall
```
