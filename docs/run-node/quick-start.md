---
sidebar_position: 1
---

# Quick Start

## System Requirements

Please see the [system requirements](system-requirements) section for details.

## Default Ports to Open on Firewall

Ports 8336 and 8340 must be open for UDP or TCP traffic in order to join the network. Additionally, for as many individual workers enumerated by the ports 50000 and 60000, e.g. for four worker processes, the ports 50000, 50001, 50002, 50003, 60000, 60001, 60002, 60003 need to be open.

:::info

If you're running the node at your home (on a residential ISP), then you must additionally set up [port forwarding](https://portforward.com/router.htm) in order for your node to be reachable by the network.
For this use case, it's recommended to use TCP connection for your node.
This can be achieved by setting `listenMultiaddr` to `/ip4/0.0.0.0/tcp/8336` and `streamListenMultiaddr` to `/ip4/0.0.0.0/tcp/8340` in the [p2p section](./advanced-configuration#peer-to-peer-networking-section) of the config, and `dataWorkerBaseListenMultiaddr` to `/ip4/0.0.0.0/tcp/%d` (don't omit the `%d`) in the [engine section](./advanced-configuration#engine-section).

:::

## Autorun

The release autorun script will automatically download the latest release binary, run the node and periodically check for new releases. You can run the script as follows:

```bash
git clone --depth 1 --branch release https://github.com/QuilibriumNetwork/ceremonyclient.git
cd ceremonyclient/node
# Inspect the contents of the `release_autorun.sh` script before executing it
./release_autorun.sh
```

This script is intended to help get started quickly, but for robust deployments it is recommended to use some service orchestration solution (e.g. `systemd` on Linux).

## Backups

The node's configuration, private keys and database must be backed up in order to claim rewards. 

If you followed the instructions in the [Autorun](#autorun) section, this data will be stored in the `ceremonyclient/node/.config` directory. It's recommended to back up this entire directory. 

The `.config/keys.yml` and `.config/config.yml` files contain private keys and should be encrypted in backups. If you back up the entire directory, it's easiest to encrypt the entire backup.



