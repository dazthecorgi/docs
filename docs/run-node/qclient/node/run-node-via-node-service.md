# Run a Node via Service

This guide provides instructions on how to manage a Quilibrium node using service commands through the qclient. For a complete list of all qclient commands, see [QClient Commands](/docs/run-node/qclient/commands/command-list).

## Overview

Running a node via a service allows for better management and automation of the node process. Service commands enable you to start, stop, restart, and check the status of your node, as well as configure it to run automatically on system boot.

## Starting the Node Service

Command:

```bash
qclient node service start
```

Description:

The `start` command initiates the node service if it is installed on your system. This will begin the node's operation, allowing it to connect to the Quilibrium network.

---

## Stopping the Node Service

Command:

```bash
qclient node service stop
```

Description:

The `stop` command halts the node service if it is currently running, disconnecting it from the network. This will attempt to gracefully stop your node as to avoid penalization.

Please wait for the command to finish, as it may take up to 2-3 minutes (not always) depending on the current node process.

If the node process gets killed without a SIGINT it will likely be penalized for not informing the network of it's deliberate absence.

You should use the `qclient node prover pause` command to manually inform the network of it's downtime and avoid seniority penalties.

---

## Restarting the Node Service

Command:

```bash
qclient node service restart
```

Description:

The `restart` command stops and then starts the node service, which is useful for applying configuration changes or recovering from issues.

---

## Checking Service Status

Command:

```bash
qclient node service status
```

Description:

The `status` command displays the current status of the node service, indicating whether it is running or stopped.

---

## Enabling Service on Boot

Command:

```bash
qclient node service enable
```

Description:

The `enable` command configures the node service to start automatically when the system boots, ensuring continuous operation.

---

## Disabling Service on Boot

Command:

```bash
qclient node service disable
```

Description:

The `disable` command prevents the node service from starting automatically on system boot.

---

## Reloading Service Configuration

Command:

```bash
qclient node service reload
```

Description:

The `reload` command refreshes the node service configuration without stopping the service, allowing for updates to take effect.

---

## Installing the Node Service

Command:

```bash
qclient node service install
```

Description:

The `install` command sets up the node service on the system, creating necessary service files for management.

---

## Updating Service Configuration

Command:

```bash
qclient node service update
```

Description:

The `update` command refreshes the node service configuration file with any new settings or changes.

---

## Uninstalling the Node Service

Command:

```bash
qclient node service uninstall
```

Description:

The `uninstall` command removes the node service from the system, including associated service files.

