# Multiple Keysets
If you wish to have multiple keys on one server for ease of interacting, you can.

The node will only run with the set that is linked to the 'default' set.

When switching which set to use, you will need to restart your node.

## Importing Existing Keys
If you have a set of existing keys, you can import a set of them to be readily used by qclient.

You must specify an alias for the keyset for reference later.

This will create the directory for this set of keys in `$HOME/.quilibrium/configs/<name>/` and only copy over the `config.yml` and `keys.yml` files.

### General Import (non-default)
If you wish to import a set of keys without the node running them, you can use this command:
```bash
qclient node config import [name] /path/to/existing/keys/
```

### Using the Import for the node
If you wish to use the keyset for running the node, specify the `--default` or `-d` flag.
```bash
qclient node config import [name] /path/to/existing/keys/ --default
```

## Switching Configs
If you have multiple keysets, you can switch what the node uses using: 
```bash
qclient node config switch [name]
```

If you do not specify a name when switching, it will list available options for you to select.