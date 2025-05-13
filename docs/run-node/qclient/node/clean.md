# Cleaning Your Node Server
Over time files can take up more space than desired, so the built in node cleaning tool will remove old versions and log files.

Log rotate is installed by default, so the logs should never get too large, but this will clean it automatically if needed.

## Remove All
To clean both old node versions and logs:
```bash
qclient node clean --all
```

## Remove Only Unused Node Versions
To only remove old node versions:
```bash
qclient node clean --node 
```
:::note
This will not remove the latest version that is currently installed. 

To remove even the current version, run the `qclient node uninstall`
:::

## Remove Only Logs
To only remove logs:
```bash
qclient node clean --logs
```