---
sidebar_position: 4
---

# Environment Variables
The service can read in environment variables on launch to change runtime settings.

To change these variables they can be set my manually editing the service file or preferably in the environment file.

:::warning
As of right now, only the Linux version allows dynamic environment variables to be read in via file, while the MacOS are hardcoded.

This will be supported in the future for MacOS, but currently not implemented and requires service file changes.
:::

## Environment file location
The environment file location that is read in is: `/var/quilibrium/quilibrium.env`