---
sidebar_position: 2
---
# Updating Node Binaries
Updating node binaries can be done either manually, or using the auto-update feature.

## Manual Updates
```bash
qclient node update
```

### Restart After Update
The node service needs to restart for the upgrade to take effect.

```bash
qclient node service restart
```

Or the restart flag can be used to indicate a service restart after the update (if it fails to update it will not restart).
```bash
qclient node update --restart
```

## Auto-update
Auto-updates will check every 10 minutes for an update by running the `qclient node update --restart` command.

### Enable auto-updates
```bash
qclient node auto-update enable
```
### Disable auto-updates
```bash
qclient node auto-update disable
```