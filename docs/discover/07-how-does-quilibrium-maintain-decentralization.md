# How does Quilibrium Maintain Decentralization?

One of the biggest problems in **blockchain mining** is **centralization** — where a small number of **powerful miners** dominate the network and control most of the rewards. This happens in **Bitcoin** and other Proof-of-Work (PoW) systems because of how mining rewards are distributed.

Quilibrium **2.1** introduces a new model called **Proof of Meaningful Work (PoMW)** that **fundamentally changes how mining works**. Instead of allowing **a few large players to dominate**, it ensures that mining rewards are **fairly distributed among many participants**, keeping the network **decentralized, secure, and resistant to manipulation**.

## The Problem: How Traditional PoW Leads to Centralization

### How Bitcoin & Other PoW Networks Become Centralized

* In **Bitcoin**, miners compete to solve **mathematical puzzles** to add blocks to the blockchain.
* The **first miner to solve the puzzle wins** and gets the entire reward.
* **Larger mining pools** (with more computing power) have a **higher chance of winning**, so:
  * **Small miners** almost **never win** and **join large mining pools** to get a share of rewards.
  * Over time, **a few mining pools control most of the network**.
  * Today, **the top 6 Bitcoin mining pools** control **over 80% of the network**, making it less decentralized.

### Why This is Dangerous

* **51% Attack Risk** – If one or two mining pools control the majority of the network, they could **manipulate transactions** or **double-spend coins**.
* **Power Concentration** – A few large entities effectively **decide how the network operates**.
* **Hardware Barrier** – Small miners **can’t compete**, making mining **only profitable for big corporations**.

### Quilibrium’s Solution: Proof of Meaningful Work (PoMW)

Quilibrium **2.1** completely redesigns the mining system to prevent these issues. Instead of a **single winner-takes-all model**, it:

1. **Splits mining tasks into small, unique shards**
2. **Makes every miner do verifiable work**, preventing fake participation
3. **Incentivizes decentralization by preventing mining pool dominance**

## How Quilibrium 2.1 Prevents Centralization

### Data Sharding – Distributing Mining Across the Network

Quilibrium 2.1 introduces a **sharded mining structure**, where the network is broken into **millions of potential shards** (approximately 2.5 million initially with the release of 2.1).

Instead of having all miners compete to process the same dataset, **data is distributed across multiple shards, each containing a portion of the network state**.

Miners can choose which shards to work on, but each shard has its own **unique proof structure**, making it computationally expensive to dominate multiple shards at once.

Miners working within a shard must generate **specific cryptographic proofs** related to the data in that shard.

The nature of these proofs ensures that simply increasing computational power does not guarantee dominance nor a linear increase in rewards.

This is due to that each shard contains **store and process verifiable data unique to each shard** so if a worker is enrolled into another shard, it has a completely different dataset and tasks.

And in the event that a miner allocates multiple workers into the same shard manually, it will not guarantee a similar shard enrollment position and there is reduced rewards the more workers there are in a shard. With the mixnet in play, network fees are not constant to any one worker in a shard, which results in miners allocating workers to more profitable shards.

And this incentive further enhances the point that **the cost and complexity of proving across multiple shards create a natural decentralization effect**.

##### Further Exploration
An in-depth explanation of this decentralizing incentive is highlighted by the fact that each worker must maintain their own set of encrypted data.

Each worker has it's own set of encrypted data it must encrypt with it's own unique key.

This prevents a miner from trying to be clever and using a single store for multiple workers in the same shard.

This means that there is no way to reduce the amount of resources each worker must have on hand.

Also, in consideration is that the "reward-greedy" default operation mode that most node operators will use to manage their worker deployments.  Using "reward-greedy" mode means that the network will automatically shift workers to enroll in any shards that will earn them more than their current rewards.

Because the enrollment periods for shards is long enough and this process is handled by the network automatically, there will always be competition for any open/high-reward slots and obtaining all top-tier slots (Ring 0) unlikely to happen and if it does happen, it's an unreliable strategy.

So even if a miner decides to place a handful of workers into a single shard, they will not gain any performance benefits and, in most cases, lead to sub-optimal rewards.

#### Why This Prevents Centralization:

* **Large mining pools cannot dominate the network easily** because each shard requires **separate verifiable work**, making it inefficient for a single entity to take control.
* **Smaller miners remain competitive** since they are not forced to compete with the entire network, but rather work within **localized proof structures** that make it harder for large players to outscale them.
* **Sharded proofs and encryption mechanisms prevent miners from faking multiple identities**, ensuring that decentralization remains intact.

### **Difficulty Calibration – Adapting Mining Based on Hardware**

One issue with **Bitcoin** is that it only rewards those who have **the most powerful and expensive computers**.

In Quilibrium **2.1**, the **difficulty of mining adjusts based on the hardware used**. **Low-power miners (like Raspberry Pi devices) can still participate**, but they **work on smaller tasks**. High-power machines **are given more difficult tasks**, but **won’t dominate all rewards**.

#### Why This Prevents Centralization:

* **People with basic computers can still mine**, making Quilibrium more accessible.
* No single **type of hardware gives an unfair advantage**, reducing the risk of centralization.

## **Adaptive Issuance Model – Preventing Long-Term Centralization**

One of Bitcoin’s biggest challenges is the gradual reduction of mining rewards, which makes it increasingly difficult for new miners to compete.

Over time, as profitability declines, mining becomes concentrated among those with the most powerful and efficient hardware, leading to centralization and a weaker security model.

This is often referred to as Bitcoin’s "shrinking security budget" problem, where fewer active miners result in a less secure and more vulnerable network.

Quilibrium addresses this issue with a **dynamic issuance model** that adjusts mining rewards based on real-time computational progress rather than fixed time-based halvings.

Instead of cutting emissions at set intervals, Quilibrium uses it's **Verifiable Delay Function's (VDF's)** global proof difficulty to track the state of the network’s processing power.

A VDF can have it's difficulty adjusted to speed up or slow down it's completion. The faster and/or more efficient a processor is, the higher the difficulty is for a data worker that uses that processor. And vice-versa.

To determine which difficulty a data worker will need to use for it's proofs, Quilibrium utilizes an algorithm called ASERTi3-2d, which is also used in Bitcoin Cash.  When the average difficulty of all nodes surpasses a threshold, a predefined computational milestone, the protocol will unlock a new emission phase.

For example, when the average difficulty reaches **100 million**, Quilibrium will trigger a new generation of emissions. This creates a temporary increase mining rewards before they gradually taper off again.

This is estimated to happen around 2033, and it ensures that mining remains profitable as technology advances, preventing an arms race where only those with the most sophisticated hardware can compete.

### How This Prevents Centralization

* **Sustained Mining Incentives:** Rewards adjust dynamically, preventing a sharp decline in miner participation over time.
* **Fair Entry for New Miners:** Unlike Bitcoin, where later miners face diminishing returns, Quilibrium ensures that new participants still have opportunities to mine profitably.
* **Balanced Rewards Across Generations:** Mining incentives are tied to actual network progress, preventing early adopters from having an unfair advantage over time.

By making token issuance responsive to real-world computational advancements rather than enforcing artificial supply cuts, Quilibrium creates a more sustainable, decentralized, and secure mining ecosystem.

:::info
To learn more about this adaptive issuance model, see [Quilibrium Tokenomics](/docs/discover/quilibrium-tokenomics).
:::