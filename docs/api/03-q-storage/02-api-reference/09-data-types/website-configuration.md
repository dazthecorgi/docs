---
sidebar_label: WebsiteConfiguration
title: WebsiteConfiguration
---

# WebsiteConfiguration

Container for all website configuration elements.

## Syntax

```xml
<WebsiteConfiguration>
   <RedirectAllRequestsTo>
      <HostName>string</HostName>
      <Protocol>string</Protocol>
   </RedirectAllRequestsTo>
   <IndexDocument>
      <Suffix>string</Suffix>
   </IndexDocument>
   <ErrorDocument>
      <Key>string</Key>
   </ErrorDocument>
   <RoutingRules>
      <RoutingRule>
         <Condition>
            <HttpErrorCodeReturnedEquals>string</HttpErrorCodeReturnedEquals>
            <KeyPrefixEquals>string</KeyPrefixEquals>
         </Condition>
         <Redirect>
            <HostName>string</HostName>
            <HttpRedirectCode>string</HttpRedirectCode>
            <Protocol>string</Protocol>
            <ReplaceKeyPrefixWith>string</ReplaceKeyPrefixWith>
            <ReplaceKeyWith>string</ReplaceKeyWith>
         </Redirect>
      </RoutingRule>
   </RoutingRules>
</WebsiteConfiguration>
```

## Elements

| Name | Type | Description | Required |
|------|------|-------------|----------|
| RedirectAllRequestsTo | [RedirectAllRequestsTo](./redirect-all-requests-to) | Container element that specifies the redirect behavior of all requests to a website endpoint of a bucket. | No |
| IndexDocument | [IndexDocument](./index-document) | Container element that specifies the name of the index document for the website. | No |
| ErrorDocument | [ErrorDocument](./error-document) | Container element that specifies the object key name to use when a 4XX class error occurs. | No |
| RoutingRules | Array of [RoutingRule](./routing-rule) | Container element for a collection of RoutingRule elements. | No | 