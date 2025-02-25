# QStorage API Reference

This section provides detailed information about the QStorage API operations. QStorage is designed to be compatible with the Amazon S3 API, making it easy to use with existing S3 clients and SDKs.

## API Categories

### Bucket Operations
- [CreateBucket](./01-bucket-operations/create-bucket.md)
- [DeleteBucket](./01-bucket-operations/delete-bucket.md)
- [ListBuckets](./01-bucket-operations/list-buckets.md)
- [HeadBucket](./01-bucket-operations/head-bucket.md)

### Object Operations
- [PutObject](./02-object-operations/put-object.md)
- [GetObject](./02-object-operations/get-object.md)
- [DeleteObject](./02-object-operations/delete-object.md)
- [CopyObject](./02-object-operations/copy-object.md)
- [ListObjects](./02-object-operations/list-objects.md)
- [HeadObject](./02-object-operations/head-object.md)

### Multipart Upload Operations
- [CreateMultipartUpload](./03-multipart-operations/create-multipart-upload.md)
- [UploadPart](./03-multipart-operations/upload-part.md)
- [CompleteMultipartUpload](./03-multipart-operations/complete-multipart-upload.md)
- [AbortMultipartUpload](./03-multipart-operations/abort-multipart-upload.md)
- [ListMultipartUploads](./03-multipart-operations/list-multipart-uploads.md)
- [ListParts](./03-multipart-operations/list-parts.md)

### Access Control
- [GetBucketAcl](./04-access-control/get-bucket-acl.md)
- [PutBucketAcl](./04-access-control/put-bucket-acl.md)
- [GetObjectAcl](./04-access-control/get-object-acl.md)
- [PutObjectAcl](./04-access-control/put-object-acl.md)

### Lifecycle Operations
- [PutBucketLifecycle](./05-lifecycle-operations/put-bucket-lifecycle.md)
- [GetBucketLifecycle](./05-lifecycle-operations/get-bucket-lifecycle.md)
- [DeleteBucketLifecycle](./05-lifecycle-operations/delete-bucket-lifecycle.md)

### Analytics and Metrics
- [GetBucketMetrics](./06-analytics-metrics/get-bucket-metrics.md)
- [PutBucketMetrics](./06-analytics-metrics/put-bucket-metrics.md)
- [ListBucketMetrics](./06-analytics-metrics/list-bucket-metrics.md)
- [DeleteBucketMetrics](./06-analytics-metrics/delete-bucket-metrics.md)

### Notification Operations
- [PutBucketNotification](./07-notification-operations/put-bucket-notification.md)
- [GetBucketNotification](./07-notification-operations/get-bucket-notification.md)

### Website Operations
- [PutBucketWebsite](./08-website-operations/put-bucket-website.md)
- [GetBucketWebsite](./08-website-operations/get-bucket-website.md)
- [DeleteBucketWebsite](./08-website-operations/delete-bucket-website.md) 