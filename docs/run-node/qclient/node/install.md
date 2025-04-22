---
sidebar_position: 1
---
# Install the Node Binary
You can install the node binary manually without qclient, but this page is dedicated to how to install via qclient.

## Benefits of Using QClient to Manage Node
The goal of integrating Node management into QClient is multiple-fold:
  - A standardized set of directories for singular and multiple configs (keysets) and node versions
  - Ease of setup
  - Batteries-included features like binary linking, manual and auto-update, a system service, and system logging can be made standardized patterns regarding the above.
  - Node diagnostics, config changes, and integrated token operations with node configs

## Command
Assuming your qclient has been linked (`qclient link` manually or as part of the initial qclient install via scripted [setup](/docs/run-node/qclient/setup#scripted-installation)), this will install the latest version available.
:::note
This requires sudo, as it will install binaries to `/var/quilibrium/bin/node/<version>/`, install a service, setup log-rotate, and a create symlink.
:::
```bash
sudo qclient node install
```

### Installing a Specific Version
Sometimes, in the event of optional updates, you may wish to revert or use a specific version of the node software (generally upgrades are forwards only, though).
```bash
sudo qclient node install "2.1.0"
```

## Install Process
The install process is highly verbose in order to follow along with the progress, and you should be able to follow along.  As a general overview, the process does the following in this order:
  1. Detects if the user is root or using sudo privileges
  2. Determines, which the version to install, defaults to 'latest' which will find the latest version number automatically.
  3. Checks if the version exists
  4. Creates the `/var/quilibrium/bin/node/<version>/` directory, if it doesn't exist
  5. Detects if the version is already installed
  6. Creates a Service
  7. Sets ownership of the `/var/quilibrium/` directory to your current user
  8. Makes the binary executable
  9. Creates a 'quilibrium-node' symlink (linking this version to `/usr/local/bin/quilibrium-node`)
  10. Sets up the log rotate

## Uninstall
The uninstall command is not yet implemented.