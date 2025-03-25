---
sidebar_label: GetBucketReplication
title: GetBucketReplication


---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ApiTester from '@site/src/components/ApiTester';
import ParamsTable from '@site/src/components/ParamsTable';
import ApiExample from '@site/src/components/ApiExample';

export const HEADER_PARAMETERS = [
  {
    name: "x-amz-expected-bucket-owner",
    type: "text",
    description: "The account ID of the expected bucket owner",
    required: false,
    placeholder: "123456789012"
  }
];

export const RESPONSE_HEADERS = [
  {
    name: "x-amz-id-2",
    description: "An identifier for the request"
  },
  {
    name: "x-amz-request-id",
    description: "A unique identifier for the request"
  },
  {
    name: "Date",
    description: "The date and time at which the response was sent"
  }
];

export const RESPONSE_ELEMENTS = [
  {
    name: "ReplicationConfiguration",
    description: "Container for replication rules"
  },
  {
    name: "Role",
    description: "The Amazon Resource Name (ARN) of the IAM role used for replication"
  },
  {
    name: "Rule",
    description: "Container for information about a specific replication rule"
  },
  {
    name: "ID",
    description: "Unique identifier for the rule"
  },
  {
    name: "Status",
    description: "Whether the rule is enabled (Enabled or Disabled)"
  },
  {
    name: "Priority",
    description: "The priority associated with the rule"
  },
  {
    name: "DeleteMarkerReplication",
    description: "Whether delete markers are replicated"
  },
  {
    name: "Destination",
    description: "Where the objects are replicated to"
  },
  {
    name: "Filter",
    description: "Filter that identifies subset of objects to which the rule applies"
  }
];

# GetBucketReplication

Returns the replication configuration of a bucket.

## Description

The `GetBucketReplication` operation returns the replication configuration information set on a bucket. For information about replication configuration, see [Replication](../../../concepts/replication.md).

:::note
- To use this operation, you must have permission to perform the `s3:GetReplicationConfiguration` action.
- You must be the bucket owner to use this operation.
- If there is no replication configuration, QStorage returns a `ReplicationConfigurationNotFoundError` error.
:::

## Request Syntax

<ApiExample
  request={{
    method: "GET",
    path: "/?replication",
    headers: {
      "Host": "_BucketName_.qstorage.quilibrium.com",
      "x-amz-expected-bucket-owner": "_OwnerAccountId_"
    }
  }}
  response={{}}
/>

This operation does not have a request body.

## Request Parameters

### Headers

<ParamsTable parameters={HEADER_PARAMETERS} />

## Examples

### Example 1: Get bucket replication configuration

<ApiExample
  request={{
    method: "GET",
    path: "/?replication",
    headers: {
      "Host": "_my-bucket_.qstorage.quilibrium.com"
    }
  }}
  response={{
    status: 200,
    headers: {
      "x-amz-id-2": "_Example7qoYGN7uMuFuYS6m7a4l_",
      "x-amz-request-id": "_TX234S0F24A06C7_",
      "Date": "_Wed, 01 Mar 2024 12:00:00 GMT_"
    },
    body: `<?xml version="1.0" encoding="UTF-8"?>
<ReplicationConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
   <Role>arn:aws:iam:q-world-1:123456789012:role/s3-replication-role</Role>
   <Rule>
      <ID>Rule1</ID>
      <Priority>1</Priority>
      <Status>Enabled</Status>
      <DeleteMarkerReplication>
         <Status>Enabled</Status>
      </DeleteMarkerReplication>
      <Filter>
         <Prefix>images/</Prefix>
      </Filter>
      <Destination>
         <Bucket>arn:aws:s3:::destination-bucket</Bucket>
      </Destination>
   </Rule>
</ReplicationConfiguration>`
  }}
/>

## Response Syntax

<ApiExample
  request={{}}
  response={{
    status: 200,
    headers: {
      "x-amz-id-2": "_RequestId_",
      "x-amz-request-id": "_AmazonRequestId_",
      "Date": "_ISO8601Date_"
    },
    body: `<?xml version="1.0" encoding="UTF-8"?>
<ReplicationConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
   <Role>_IAMRoleARN_</Role>
   <Rule>
      <ID>_RuleId_</ID>
      <Priority>_RulePriority_</Priority>
      <Status>_RuleStatus_</Status>
      <DeleteMarkerReplication>
         <Status>_DeleteMarkerReplicationStatus_</Status>
      </DeleteMarkerReplication>
      <Filter>
         <Prefix>_Prefix_</Prefix>
         <Tag>
            <Key>_TagKey_</Key>
            <Value>_TagValue_</Value>
         </Tag>
      </Filter>
      <Destination>
         <Bucket>_DestinationBucketARN_</Bucket>
         <AccessControlTranslation>
            <Owner>_Owner_</Owner>
         </AccessControlTranslation>
         <Account>_AccountId_</Account>
         <EncryptionConfiguration>
            <ReplicaKmsKeyID>_KMSKeyId_</ReplicaKmsKeyID>
         </EncryptionConfiguration>
      </Destination>
      <SourceSelectionCriteria>
         <SseKmsEncryptedObjects>
            <Status>_Status_</Status>
         </SseKmsEncryptedObjects>
      </SourceSelectionCriteria>
   </Rule>
</ReplicationConfiguration>`
  }}
/>

## Response Elements

### Response Headers

<ParamsTable responseElements={RESPONSE_HEADERS} type="response" />

### Response Body Elements

| Name | Description |
|------|-------------|
| ReplicationConfiguration | Container for replication rules |
| Role | IAM role used for replication |
| Rule | Container for information about a specific replication rule |
| ID | Unique identifier for the rule |
| Priority | Priority associated with the rule |
| Status | Whether the rule is enabled (Enabled or Disabled) |
| DeleteMarkerReplication | How delete markers should be replicated |
| Filter | Container for elements that identify objects subject to replication |
| Prefix | Object key name prefix identifying objects to replicate |
| Tag | Container for tag key and value |
| Destination | Container for destination information |
| Bucket | Amazon Resource Name (ARN) of the destination bucket |
| AccessControlTranslation | Container for information about access control translation |
| Owner | Specifies the replica ownership |
| Account | Account ID of the destination bucket owner |
| EncryptionConfiguration | Container for information about encryption |
| ReplicaKmsKeyID | KMS key ID for encrypting destination objects |
| SourceSelectionCriteria | Container for filters that define source objects eligible for replication |
| SseKmsEncryptedObjects | Container for filter information for KMS encrypted objects |

## Special Errors

| Error Code | Description |
|------------|-------------|
| NoSuchBucket | The specified bucket does not exist |
| ReplicationConfigurationNotFoundError | The replication configuration was not found |
| 403 | Forbidden. Authentication failed or you do not have permission to get the bucket replication configuration |

## Permissions

You must have the `s3:GetReplicationConfiguration` permission.

## Try It Out

<ApiTester
  operation="GetBucketReplication"
  description="Get the replication configuration of a bucket."
  parameters={[
    {
      name: "bucketName",
      type: "text",
      required: true,
      placeholder: "my-bucket",
      description: "Name of the bucket to get replication configuration from"
    },
    ...HEADER_PARAMETERS
  ]}
  exampleResponse={{
    "ReplicationConfiguration": {
      "Role": "arn:aws:iam::123456789012:role/s3-replication-role",
      "Rules": [
        {
          "ID": "Rule1",
          "Priority": 1,
          "Status": "Enabled",
          "DeleteMarkerReplication": {
            "Status": "Enabled"
          },
          "Filter": {
            "Prefix": "images/"
          },
          "Destination": {
            "Bucket": "arn:aws:s3:::destination-bucket"
          }
        }
      ]
    }
  }}
/> 