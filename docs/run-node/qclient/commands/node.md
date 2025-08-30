# Node Commands
This is a list of node-specific operations for qclient.

For a complete list of all qclient commands, see [QClient Commands](/docs/run-node/qclient/commands/command-list).

Node commands have a --config param that you can use to specify either a directory path, e.g. `/home/user/my-config/` or a name of a config `my-config` if you've imported the config via QClient import command (see [Import Keysets](/docs/run-node/qclient/node/key-management/import-keysets)).

---

## Installing the Node Application

Command:

```bash
qclient node install
```

Description:

The `install` command sets up the node application along with all necessary dependencies on your system.

---
## General Node Commands
### Updating the Node Application

Command:

```bash
qclient node update [<Version>] [--restart|-r]
```

Description:

The `update` command checks for available updates to the node application and applies them if found, ensuring you have the latest features and security patches.

**Parameters:**
- `[<Version>]`: Optional specific version to update to
- `[--restart|-r]`: Automatically restart the node after update

**Examples:**

Update to latest version:
```bash
qclient node update
```

Update to specific version with restart:
```bash
qclient node update 2.1.1 --restart
```

---

### Configuring Auto-Update

Command:

```bash
qclient node auto-update <enable|disable|status>
```

Description:

The `auto-update` command manages automatic updates for the node application via a cron task.

**Options:**
- `enable`: Turn on automatic updates
- `disable`: Turn off automatic updates
- `status`: Check current auto-update status

**Examples:**
```bash
qclient node auto-update enable
qclient node auto-update status
```

---

### Cleaning Up Files

Command:

```bash
qclient node clean [--all|--logs|--node]
```

Description:

The `clean` command removes unnecessary or temporary files related to the node application, helping to free up space and maintain a clean environment.

**Options:**
- `--all`: Clean all temporary files and logs
- `--logs`: Clean only log files
- `--node`: Clean only old node binaries

**Examples:**
```bash
qclient node clean --logs
qclient node clean --all
```

---

## Node Service Commands

### Starting the Node Service

Command:

```bash
qclient node service start
```

Description:

The `start` command initiates the node service if it is installed on your system.

---

### Stopping the Node Service

Command:

```bash
qclient node service stop
```

Description:

The `stop` command halts the node service if it is currently running.

---

### Restarting the Node Service

Command:

```bash
qclient node service restart
```

Description:

The `restart` command stops and then starts the node service, useful for applying configuration changes or recovering from issues.

---

### Checking Service Status

Command:

```bash
qclient node service status
```

Description:

The `status` command displays the current status of the node service, indicating whether it is running or stopped.

---

### Enabling Service on Boot

Command:

```bash
qclient node service enable
```

Description:

The `enable` command configures the node service to start automatically when the system boots.

---

### Disabling Service on Boot

Command:

```bash
qclient node service disable
```

Description:

The `disable` command prevents the node service from starting automatically on system boot.

---

### Reloading Service Configuration

Command:

```bash
qclient node service reload
```

Description:

The `reload` command refreshes the node service configuration without stopping the service.

---

### Installing the Node Service

Command:

```bash
qclient node service install
```

Description:

The `install` command sets up the node service on the system, creating necessary service files.

---

### Updating Service Configuration

Command:

```bash
qclient node service update
```

Description:

The `update` command refreshes the node service configuration file with any new settings or changes.

---

### Uninstalling the Node Service

Command:

```bash
qclient node service uninstall
```

Description:

The `uninstall` command removes the node service from the system, including associated service files.

---

## Node Prover Commands

### Merging Prover Data

Command:

```bash
qclient node prover merge
```

Description:

The `merge` command consolidates prover seniority data into a single, assigned configuration.

---

### Pausing Prover Activity

Command:

```bash
qclient node prover pause [<WorkerId>]
```

Description:

The `pause` command issues an emergency pause notice to the network for a prover to avoid penalization.

**Parameters:**
- `[<WorkerId>]`: Optional specific worker ID to pause

---

### Checking Prover Status

Command:

```bash
qclient node prover status [<WorkerId>]
```

Description:

Lists prover worker statuses, shard assignments, and storage availability.

**Parameters:**
- `[<WorkerId>]`: Optional specific worker ID (shows all workers if omitted)

**Example Output:**
```
Worker 1: Active - Shard 0x123 (Ring 0) - Storage: 85% available
Worker 2: Active - Shard 0x456 (Ring 0) - Storage: 92% available
```

---

### Initiating Prover Leave

Command:

```bash
qclient node prover leave [<WorkerId>]
```

Description:

Initiates a graceful leave process for a prover from the network.

**Parameters:**
- `[<WorkerId>]`: Optional specific worker ID to remove

---

### Delegating Prover Rewards

Command:

```bash
qclient node prover delegate [<DestinationAddress>]
```

Description:

Delegates prover rewards to an alternative address.

**Parameters:**
- `[<DestinationAddress>]`: Address to receive delegated rewards

**Example:**
```bash
qclient node prover delegate 0x[32-byte hex string]
```

---

## Node Config Commands

### Creating a New Configuration

Command:

```bash
qclient node config create [name] [--default|-d]
```

Description:

The `create` command generates a new configuration set for the node with an optional name (cannot be 'default'). Use the `--default` or `-d` flag to assign it as the default configuration used by the node.

---

### Importing a Configuration

Command:

```bash
qclient node config import [name] <path> [--default]
```

Description:

The `import` command brings in an existing configuration folder from the specified path to the given name, with an optional flag to set it as the default configuration.

---

### Modifying Configuration Settings

Command:

```bash
qclient node config set <key> <value>
```

Description:

The `set` command modifies a specific key in the default configuration file with the provided value.

---

### Switching Configurations

Command:

```bash
qclient node config switch [name]
```

Description:

The `switch` command changes the active configuration set to the specified name. If no name is provided, it lists available configuration options.

---

### Assigning Rewards to Configuration

Command:

```bash
qclient node config assign-rewards [config-name]
```

Description:

Assigns reward collection to a specific configuration.

**Parameters:**
- `[config-name]`: Name of the configuration to assign rewards to

**Example:**
```bash
qclient node config assign-rewards my-config
```

### Create a Symlink

Command:

```bash
qclient node link [--version|-v <Version>]
```

Description:

Creates a version-specific symlink for the node binary.

**Parameters:**
- `[--version|-v <Version>]`: Specific version to link

**Examples:**
```bash
qclient node link
qclient node link --version 2.1.0
```

---

### Getting Node Information

Command:

```bash
qclient node info [<ConfigName>] [--latest-version|-l]
```

Description:

Displays detailed information about the node.

**Parameters:**
- `[<ConfigName>]`: Configuration name to check (defaults to active config)
- `[--latest-version|-l]`: Show latest available version

**Examples:**
```bash
qclient node info
qclient node info my-config --latest-version
```

---

### Uninstalling the Node

Command:

```bash
qclient node uninstall [--force]
```

Description:

Completely removes the node application from your system.

**Parameters:**
- `[--force]`: Force uninstall without confirmation prompts

**Example:**
```bash
qclient node uninstall
qclient node uninstall --force
```

:::warning
Uninstalling the node will stop all node operations and may affect your rewards.
Ensure you have backed up any important data before uninstalling.
:::