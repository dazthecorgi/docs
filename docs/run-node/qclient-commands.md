---
sidebar_position: 8
---

# Qclient Commands

Please see the [How to use the qclient](how-to-use-the-qclient) section for details.

| **Command**                        | **Syntax**                                              | **Description**                                                                                   |
|------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Query Balance**                  | `qclient token balance`                                | Displays the total QUIL balance and associated account address.                                   |
| **Query Coins**                    | `qclient token coins`                                  | Lists individual coins owned by the account.                                                     |
| **Query Coins with Metadata**      | `qclient token coins metadata`                         | Lists individual coins with additional metadata (e.g., frame number, timestamp).                 |
| **Transfer (v2.0.x)**              | `qclient token transfer <ToAccount> <OfCoin>`          | Sends an entire coin to another account (immediate, no approval needed).                         |
| **Transfer (v2.1.x)**              | `qclient token transfer <ToAccount> <RefundAccount> <Amount\|OfCoin>` | Creates a pending transaction to send an amount or specific coin.                                |
| **Split Coins**                    | `qclient token split <OfCoin> <LeftAmount> <RightAmount>` | Splits a coin into two new coins with specified amounts.                                        |
| **Merge Coins**                    | `qclient token merge <LeftCoin> <RightCoin>`           | Merges two coins into a single coin.                                                             |
| **Accept Transaction**             | `qclient token accept <PendingTransaction>`            | Accepts a pending transaction, completing the transfer.                                           |
| **Reject Transaction**             | `qclient token reject <PendingTransaction>`            | Rejects a pending transaction, creating a new pending transaction for the refund.                |
| **Mutual Receive**                 | `qclient token mutual-receive <ExpectedAmount>`        | Initiates a mutual transfer by generating a rendezvous ID for the sender.                        |
| **Mutual Transfer (Sender)**       | `qclient token mutual-transfer <Rendezvous> <Amount\|OfCoin>` | Sends the agreed amount or coin using the rendezvous ID from the receiver.                    |


:::info

- Replace `qclient` with `./qclient-<version>-<os>-<arch>` (e.g., `./qclient-2.0.1-linux-amd64`) and optionally append `--config /path/to/config` if the `.config` folder isn’t in the default location.
- To use the public RPC you can also add the flag `--public-rpc`
- Version-specific details (e.g., v2.0.x vs. v2.1.x) are embedded in the command descriptions where applicable.

:::