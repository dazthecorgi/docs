---
sidebar_label: NoncurrentVersionTransition
title: NoncurrentVersionTransition
---

# NoncurrentVersionTransition

Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that QStorage transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.

## Contents

### NewerNoncurrentVersions

Specifies the number of newer noncurrent object versions to retain. If there are this many more recent noncurrent versions, this object version can be transitioned.

**Type**: Integer  
**Required**: No

### NoncurrentDays

Specifies the number of days an object is noncurrent object version expires.

**Type**: Integer  
**Required**: No

### StorageClass

The class of storage used to store the object.

**Type**: String  
**Required**: No

## Examples

### Example 1: Basic noncurrent version transition

```xml
<NoncurrentVersionTransition>
   <NoncurrentDays>30</NoncurrentDays>
   <StorageClass>STANDARD_IA</StorageClass>
</NoncurrentVersionTransition>
```

### Example 2: With newer versions retention

```xml
<NoncurrentVersionTransition>
   <NewerNoncurrentVersions>5</NewerNoncurrentVersions>
   <NoncurrentDays>90</NoncurrentDays>
   <StorageClass>GLACIER</StorageClass>
</NoncurrentVersionTransition>
``` 