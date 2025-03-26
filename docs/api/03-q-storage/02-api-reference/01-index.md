# QStorage API Reference

This section provides detailed information about the QStorage API operations. QStorage is designed to be compatible with the Amazon S3 API, making it easy to use with existing S3 clients and SDKs.

## API Categories

### Bucket Operations
- [CreateBucket](bucket-operations/create-bucket)
- [DeleteBucket](bucket-operations/delete-bucket)
- [ListBuckets](bucket-operations/list-buckets)
- [HeadBucket](bucket-operations/head-bucket)

### Object Operations
- [PutObject](object-operations/put-object)
- [GetObject](object-operations/get-object)
- [DeleteObject](object-operations/delete-object)
- [CopyObject](object-operations/copy-object)
- [ListObjects](object-operations/list-objects)
- [HeadObject](object-operations/head-object)

### Multipart Upload Operations
- [CreateMultipartUpload](multipart-operations/create-multipart-upload)
- [UploadPart](multipart-operations/upload-part)
- [CompleteMultipartUpload](multipart-operations/complete-multipart-upload)
- [AbortMultipartUpload](multipart-operations/abort-multipart-upload)
- [ListMultipartUploads](multipart-operations/list-multipart-uploads)
- [ListParts](multipart-operations/list-parts)

### Access Control
- [GetBucketAcl](bucket-operations/get-bucket-acl)
- [PutBucketAcl](bucket-operations/put-bucket-acl)
- [GetObjectAcl](object-operations/get-object-acl)
- [PutObjectAcl](object-operations/put-object-acl)

### Lifecycle Operations
- [PutBucketLifecycle](bucket-operations/put-bucket-lifecycle)
- [GetBucketLifecycle](bucket-operations/get-bucket-lifecycle)
- [DeleteBucketLifecycle](bucket-operations/delete-bucket-lifecycle)

<!-- ### Analytics and Metrics
- [GetBucketMetrics](analytics-metrics/get-bucket-metrics)
- [PutBucketMetrics](analytics-metrics/put-bucket-metrics)
- [ListBucketMetrics](analytics-metrics/list-bucket-metrics)
- [DeleteBucketMetrics](analytics-metrics/delete-bucket-metrics) -->

<!-- ### Notification Operations
- [PutBucketNotification](notification-operations/put-bucket-notification)
- [GetBucketNotification](notification-operations/get-bucket-notification) -->

### Website Operations
- [PutBucketWebsite](bucket-operations/put-bucket-website)
- [GetBucketWebsite](bucket-operations/get-bucket-website)
- [DeleteBucketWebsite](bucket-operations/delete-bucket-website) 