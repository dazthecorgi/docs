---
sidebar_label: DeleteBucketReplication
title: DeleteBucketReplication
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

# DeleteBucketReplication

Deletes the replication configuration from the specified bucket.

## Description

The `DeleteBucketReplication` operation removes the replication configuration from the bucket. After this operation is performed, QStorage will stop replicating objects according to the deleted replication configuration.

:::note
- To use this operation, you must have permission to perform the `s3:PutReplicationConfiguration` action.
- This operation will succeed even if there is no replication configuration on the bucket.
- After deleting the replication configuration, existing replicated objects will remain in their destination buckets, but no new objects will be replicated.
:::

## Request Syntax

<ApiExample
  request={{
    method: "DELETE",
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

### Example 1: Delete replication configuration from a bucket

<ApiExample
  request={{
    method: "DELETE",
    path: "/?replication",
    headers: {
      "Host": "_my-bucket_.qstorage.quilibrium.com"
    }
  }}
  response={{
    status: 204,
    headers: {
      "x-amz-id-2": "_Example7qoYGN7uMuFuYS6m7a4l_",
      "x-amz-request-id": "_TX234S0F24A06C7_",
      "Date": "_Wed, 01 Mar 2024 12:00:00 GMT_"
    }
  }}
/>

## Response Syntax

<ApiExample
  request={{}}
  response={{
    status: 204,
    headers: {
      "x-amz-id-2": "_RequestId_",
      "x-amz-request-id": "_AmazonRequestId_",
      "Date": "_ISO8601Date_"
    }
  }}
/>

## Response Elements

### Response Headers

<ParamsTable responseElements={RESPONSE_HEADERS} type="response" />

## Special Errors

| Error Code | Description |
|------------|-------------|
| NoSuchBucket | The specified bucket does not exist |
| 403 | Forbidden. Authentication failed or you do not have permission to delete the replication configuration |

## Permissions

You must have the `s3:PutReplicationConfiguration` permission.

## Try It Out

<ApiTester
  operation="DeleteBucketReplication"
  description="Delete the replication configuration from a bucket."
  parameters={[
    {
      name: "bucketName",
      type: "text",
      required: true,
      placeholder: "my-bucket",
      description: "Name of the bucket to delete replication configuration from"
    },
    ...HEADER_PARAMETERS
  ]}
  exampleResponse={{
    "status": 204,
    "headers": {
      "x-amz-id-2": "_Example7qoYGN7uMuFuYS6m7a4l_",
      "x-amz-request-id": "_TX234S0F24A06C7_",
      "Date": "_Wed, 01 Mar 2024 12:00:00 GMT_"
    }
  }}
/> 