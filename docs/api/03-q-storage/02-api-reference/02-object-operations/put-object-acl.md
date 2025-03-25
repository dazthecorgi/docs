---
title: PutObjectAcl
label: PutObjectAcl
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ApiTester from '@site/src/components/ApiTester';
import ParamsTable from '@site/src/components/ParamsTable';
import ApiExample from '@site/src/components/ApiExample';

export const requestHeaders = [
  {
    name: "x-amz-acl",
    description: "Predefined ACL to apply to the object.",
    validValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"],
    required: false,
    type: "string"
  },
  {
    name: "Content-MD5",
    description: "Base64-encoded 128-bit MD5 digest of the data",
    required: true,
    type: "string"
  },
  {
    name: "x-amz-request-payer",
    description: "Confirms that the requester knows that they will be charged for the request",
    required: false,
    type: "string"
  },
  {
    name: "x-amz-expected-bucket-owner",
    description: "The account ID of the expected bucket owner",
    required: false,
    type: "string"
  }
];

export const uriParameters = [
  {
    name: "versionId",
    description: "Version ID of the object that you want to set the ACL for",
    required: false,
    type: "string"
  }
];

export const requestBodyElements = [
  {
    name: "AccessControlPolicy",
    description: "Container for the request",
    required: true,
    type: "XML"
  },
  {
    name: "Owner",
    description: "Container for the bucket owner's ID and display name. See <a href='/docs/api/q-storage/api-reference/data-types/owner'>Owner</a> for details.",
    type: "Container"
  },
  {
    name: "Grants",
    description: "Array of Grant data types. See <a href='/docs/api/q-storage/api-reference/data-types/grant'>Grant</a> for details.",
    required: false,
    type: "Container"
  }
];

export const responseHeaders = [
  {
    name: "x-amz-request-charged",
    description: "If present, indicates that the requester was successfully charged for the request",
    required: false,
    validValues: ['requester']
  }
];

export const responseErrors = [
  {
    name: "NoSuchKey",
    description: "The specified key does not exist (HTTP Code 404)",
    type: "Error"
  }
];

# PutObjectAcl

Sets the access control list (ACL) permissions for an object that already exists in a bucket.

## Description

The `PutObjectAcl` operation uses the `acl` subresource to set the access control list (ACL) permissions for an existing object in a bucket. You must have `WRITE_ACP` permission to change an object's ACL.

## Permissions

You need the following permissions to use this operation:
- `s3:PutObjectAcl` on the object
- `s3:PutObject` on the object if you're also the object owner

## Request

### Request Headers

<ParamsTable parameters={requestHeaders} />

### Request URI Parameters

<ParamsTable parameters={uriParameters} />

### Request Body

The request accepts the following XML elements:

<ParamsTable parameters={requestBodyElements} />

### Request Syntax

```http
PUT /ObjectName?acl HTTP/1.1
Host: bucket.qstorage.example
x-amz-acl: ACL
Content-MD5: MD5
Authorization: authorization string
Date: date

<?xml version="1.0" encoding="UTF-8"?>
<AccessControlPolicy>
   <Owner>
      <ID>ID</ID>
      <DisplayName>DisplayName</DisplayName>
   </Owner>
   <AccessControlList>
      <Grant>
         <Grantee>
            <ID>ID</ID>
            <DisplayName>DisplayName</DisplayName>
         </Grantee>
         <Permission>Permission</Permission>
      </Grant>
   </AccessControlList>
</AccessControlPolicy>
```

## Response

### Response Headers

<ParamsTable parameters={responseHeaders} />

### Response Body

This operation does not return a response body.

### Response Errors

<ParamsTable parameters={responseErrors} />

## Examples

### Set ACL for an Object

This example sets the ACL on an object to grant full control to the owner.

#### Sample Request

```http
PUT /example-object?acl HTTP/1.1
Host: bucket.qstorage.example
x-amz-acl: private
Content-MD5: 6aKJsA2R/DqbxeJX7HaXzw==
Date: Wed, 28 Oct 2023 22:32:00 GMT
Authorization: authorization string

<?xml version="1.0" encoding="UTF-8"?>
<AccessControlPolicy>
   <Owner>
      <ID>123456789abc</ID>
      <DisplayName>owner-name</DisplayName>
   </Owner>
   <AccessControlList>
      <Grant>
         <Grantee>
            <ID>123456789abc</ID>
            <DisplayName>owner-name</DisplayName>
         </Grantee>
         <Permission>FULL_CONTROL</Permission>
      </Grant>
   </AccessControlList>
</AccessControlPolicy>
```

#### Sample Response

```http
HTTP/1.1 200 OK
x-amz-id-2: eftixk72aD6Ap51TnqcoF8eFidJG9Z/2mkiDFu8yU9AS1ed4OpIszj7UDNEHGran
x-amz-request-id: 318BC8BC148832E5
Date: Wed, 28 Oct 2023 22:32:00 GMT
```