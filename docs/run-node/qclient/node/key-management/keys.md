---
sidebar_position: 1
---
# Node Keys
When running a node, you will need a set of keys.  

By default you will get a set generated for you if you do not create one yourself. See [Initial Keyset](./initial-keyset) for more information.

:::info
This process happens with qclient when you first run a command. You do not need to use this set of keys if you already have a set.
:::

## Keyset Location
The location for keys is in the user's home directory, in `$HOME/.quilibrium/configs/`.

### Installing as Root:
```bash
/root/.quilibrium/configs/
```

### Install as a non-root user
```bash
/home/<user>/.quilibrium/configs/
```

## Configuring Keys for Node to Use
See [Import Keysets](import-keysets) on how to import and select which key for your node to use while running.