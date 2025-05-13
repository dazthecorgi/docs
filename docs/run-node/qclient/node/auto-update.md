# Auto-Updating
QClient has a built in command to create an auto-update scheduled task.

:::info
By default, the installed cron task will check every 10 minutes.
:::

If your operating system does not have the `cron` it will be installed. 

## Enable Auto-Updates
This will add a cron task for you.
```bash
qclient node auto-update enable
```

## Disable Auto-Updates
This will remove the auto-update cron task.
```bash
qclient node auto-updates disable
```