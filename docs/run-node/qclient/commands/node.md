# Node Commands
This is a list of node-specific operations for qclient.

For a complete list of all qclient commands, see [QClient Commands](command-list).

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
qclient node update
```

Description:

The `update` command checks for available updates to the node application and applies them if found, ensuring you have the latest features and security patches.

---

### Configuring Auto-Update

Command:

```bash
qclient node auto-update [enable|disable]
```

Description:

The `auto-update` command allows you to enable or disable automatic updates for the node application via a cron task. Use `enable` to turn on automatic updates or `disable` to turn them off.

---

### Cleaning Up Files

Command:

```bash
qclient node clean
```

Description:

The `clean` command removes unnecessary or temporary files related to the node application, helping to free up space and maintain a clean environment.

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
qclient node prover pause
```

Description:

The `pause` command issues a notice to the network that a prover or configuration is being paused to avoid penalization.

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

### Create a Symlink
You can create a symlink by running:
```bash
qclient node link
```
or optionally (if you have multiple version) to specify which version:
```bash
qclient node link 2.1.0
```