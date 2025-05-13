# Token Commands
This is a list of Token specific operations, like querying balances, split/merge, accept/receive.

For a list of all qclient commands, see [QClient Commands](command-list).

## Querying Balance and Account Address

The command line tool accepts arguments in either decimal (xx.xxxxx) format or raw unit (0x00000) format. Note that raw units are a multiple of QUIL: 1 QUIL = 0x1DCD65000 units

Command:

```bash
qclient token balance
```

Response:

```bash
50.0 QUIL (Account 0x23c0f371e9faa7be4ffedd616361e0c9aeb776ae4d7f3a37605ecbfa40a55a90)
```
---
### Querying Individual Coins

Command:

```bash
qclient token coins
```

Response:

```bash
25.0 QUIL (Coin 0x1148092cdce78c721835601ef39f9c2cd8b48b7787cbea032dd3913a4106a58d)
25.0 QUIL (Coin 0x2dda9dc9770a1e5a01974fcd5af2a77147d0f19fb4935a1df677ec6050be0a9e)
```

To see all metadata associated with each coin (frame number and timestamp):

```bash
qclient token coins metadata
```
---

## Creating a Pending Transaction

Quilibrium's token application has two modes: a two-stage transfer/accept (or reject), or a single-stage mutual transfer.

### Command:

```bash
qclient token transfer <ToAccount> <RefundAccount> <Amount|OfCoin>
```

Response:

```bash
<Amount> QUIL (Pending Transaction 0x0382e4da0c7c0133a1b53453b05096272b80c1575c6828d0211c4e371f7c81bb)
```

:::tip

You will need to provide the pending transaction ID to the receiver, so they can accept it on their side.

:::

Omitting the `RefundAccount` will simply provide your own originating account. The option to specify exists so that you can maintain anonymity when sending by creating a fresh account to receive the refund. The `RefundAccount` cannot be the same as the `ToAccount`.

Using `Amount` a user-friendly version of a transfer, similar to what account-based networks like Ethereum and Solana do, where you operate on a balance. Behind the scenes, the client is actually splitting and/or merging coins as needed to create the required amount to send as a discrete coin. 

Using `Ofcoin` is an application-aware version of a transfer, similar to what UTXO-based networks like Bitcoin do, where you operate on the raw coin balance under a specific address. If you have good reason to manage coins separately (yet under the control of the same managing account), you will want to use the second option in conjunction with split/merge operations if needed.


## Splitting and merging commands

:::tip

Both `token merge` and `token split` support also operating on up to 100 coins or amounts at a time (although not recommended to use so many). In other words, you can input 3,4,5... 10 coins IDs or amounts instead of just 2.

:::

### Split command:

```bash
qclient token split <OfCoin> <LeftAmount> <RightAmount>
```

### Merge command:

```bash
qclient token merge <LeftCoin> <RightCoin>
```
---

## Accepting a Pending Transaction

To accept a pending transaction, you simply run:

```bash
qclient token accept <PendingTransaction>
```

The same applies for rejecting a pending transaction:

```bash
qclient token reject <PendingTransaction>
```

Rejecting a transaction creates a separate pending transaction because if the refund address is specified by the originator, and were they to specify another of your own addresses, it would be no different from accepting.


### Performing a Mutual Transfer
Pending transactions add friction, but without it, users risk receiving unwanted coins or interacting with unknown addresses. If both parties agree beforehand, they can perform a mutual transfer. This requires both parties to be online, but avoids the two-phase transaction. It's ideal for privacy (both accounts remain private) and ensures the transaction completes quickly:

1. **Receiver's Action**:  
   The receiver starts by sending this command:
   ```bash
   $ qclient token mutual-receive <ExpectedAmount>
   ```

   **Response**:
   ```bash
   Rendezvous: 0x2ad567e4fc1ac335a8d3d6077de2ee998aff996b51936da04ee1b0f5dc196a4f  
   Awaiting sender...
   ```

2. **Receiver's Next Step**:  
   The receiver gives the Rendezvous ID to the sender.

3. **Sender's Action**:  
   The sender runs this command:
   ```bash
   qclient token mutual-transfer <Rendezvous> <Amount/OfCoin>
   ```

   **Response on Receiver's Side**:
   ```bash
   Awaiting sender... OK  
   <Amount> QUIL (Coin 0x0525c76ecdc6ef21c2eb75df628b52396adcf402ba26a518ac395db8f5874a82)
   ```

   **Response on Sender's Side**:
   ```bash
   Confirming rendezvous... OK  
   <Amount> QUIL (Coin [private])
   ```

:::info

This will likely be the first unique experience Quilibrium provides to users already familiar with other networks, as privacy preservation is an immediately obvious and first class experience here by showing the user what it can (or _cannot_) see.

:::