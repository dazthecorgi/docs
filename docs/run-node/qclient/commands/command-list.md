---
sidebar_position: 8
---

# Qclient Commands

Please see the [QClient 101](/docs/run-node/qclient/qclient-101) guide for details how to use.

## General
| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Version**                        | `qclient version [--checksum\|-c]`                                      | Displays the current version of the qclient application. Optionally, can get the checksum for the current binary.                                         |
| **Cross-Mint**                     | `qclient cross-mint [payload]`                                   | Initiates a cross-mint operation for token management across networks (currently supporting Ethereum).                           |
| **Link**                           | `qclient link`                                         | Links the qclient to a specific node or service for easy interaction.                                 |
| **Update**                         | `qclient update`                                       | Checks for and applies updates to the qclient application.                                       |
| **Download-Signatures**            | `qclient download-signatures`                          | Downloads necessary signatures for the current version's binary.                             |


## Token Commands

| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Query Balance**                  | `qclient token balance`                                | Displays the total QUIL balance and associated account address.                                   |
| **Query Coins**                    | `qclient token coins`                                  | Lists individual coins owned by the account.                                                     |
| **Query Coins with Metadata**      | `qclient token coins metadata`                         | Lists individual coins with additional metadata (e.g., frame number, timestamp).                 |
| **Transfer**              | `qclient token transfer <ToAccount> <RefundAccount> <Amount\|OfCoin>` | Creates a pending transaction to send an amount or specific coin.                                |
| **Split Coins**                    | `qclient token split <OfCoin> <LeftAmount> <RightAmount>` | Splits a coin into two new coins with specified amounts.                                        |
| **Merge Coins**                    | `qclient token merge <LeftCoin> <RightCoin>`           | Merges two coins into a single coin.                                                             |
| **Accept Transaction**             | `qclient token accept <PendingTransaction>`            | Accepts a pending transaction, completing the transfer.                                           |
| **Reject Transaction**             | `qclient token reject <PendingTransaction>`            | Rejects a pending transaction, creating a new pending transaction for the refund.                |
| **Mutual Receive**                 | `qclient token mutual-receive <ExpectedAmount>`        | Initiates a mutual transfer by generating a rendezvous ID for the sender.                        |
| **Mutual Transfer (Sender)**       | `qclient token mutual-transfer <Rendezvous> <Amount\|OfCoin>` | Sends the agreed amount or coin using the rendezvous ID from the receiver.                    |

## Node Commands

| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Install**                        | `qclient node install`                                 | Installs the node application and necessary dependencies.                                        |
| **Update**                         | `qclient node update`                                  | Checks for and applies updates to the node application.                                          |
| **Auto-Update**                    | `qclient node auto-update [enable\|disable]`           | Enables or disables automatic updates for the node application via a cron task.                  |
| **Clean**                          | `qclient node clean`                                   | Removes unnecessary or temporary files related to the node application.                          |
| **Link**                           | `qclient node link [-v\|--version]`                    | Links the qclient to a specific node for streamlined interaction.                                |
| **Info**                           | `qclient node info [name] [--latest-version]`                                    | Displays detailed information about the node. Alias to 'quilibrium-node --node-info'. Defaults to the config set for running the node, although you can specify the name if you have multiple configs. `--latest-version` will print the latest version available.                          |

### Node Service Commands
| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Start**                          | `qclient node service start`                           | Starts the node service if it is installed.                                                      |
| **Stop**                           | `qclient node service stop`                            | Stops the node service if it is running.                                                         |
| **Restart**                        | `qclient node service restart`                         | Restarts the node service.                                                                       |
| **Status**                         | `qclient node service status`                          | Checks the current status of the node service.                                                   |
| **Enable**                         | `qclient node service enable`                          | Enables the node service to start automatically on boot.                                         |
| **Disable**                        | `qclient node service disable`                         | Disables the node service from starting automatically on boot.                                   |
| **Reload**                         | `qclient node service reload`                          | Reloads the node service configuration.                                                          |
| **Install**                        | `qclient node service install`                         | Installs the node service on the system.                                                         |
| **Update**                         | `qclient node service update`                          | Updates the node service configuration file.                                                     |
| **Uninstall**                      | `qclient node service uninstall`                       | Removes the node service from the system.                                                        |

### Node Prover Commands
| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Prover Merge**                   | `qclient node prover merge`                            | Merges prover seniority data into a single, assigned config.                                               |
| **Prover Pause**                   | `qclient node prover pause`                            | Issue a notice to the network of a prover/config being paused to avoid penalization.                                           |

### Node Config Commands
| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Create**                         | `qclient node config create [name] [--default\|-d]`                    | Creates a new configuration set for the node with a name*. Optionally assign it to be used by the node with the --default (-d) flag. |
| **Import**                         | `qclient node config import [name] <path> [--default]` | Imports an existing set of config folder from the specified path to the given name, with an optional flag to set as default. |
| **Set**                            | `qclient node config set <key> <value>`                | Modify a key in the default config file.                                       |
| **Switch**                         | `qclient node config switch [name]`                    | Switches the active configuration set to the specified name. If no name is provided, lists available options to choose. |

:::note 
*Cannot use the name 'default'.  This is reserved for node operations.
:::   


## QClient Config Commands

| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Print**                          | `qclient config print`                                 | Prints the current configuration settings for QClient.                                           |
| **Public RPC**                     | `qclient config public-rpc [true\|false]`                            | Sets the configuration to always use a public RPC endpoint for network interactions.                    |
| **Set Custom RPC**                 | `qclient config set-custom-rpc <endpoint>`             | Overrides the default light client RPC (the Quilibrium's public RPC).                          |
| **Signature Check**                | `qclient config signature-check [enable\|disable]`                       | Allows you to persist a signature check disable for all future QClient commands.               |
