import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Bucket
Creating a bucket is necessary to start uploading Objects.

<Tabs>
  <TabItem value="qconsole" label="Using QConsole" default>
    To create a bucket using QConsole:

    1. Log in to your QConsole account
    2. Navigate to the QStorage service section
    3. Click on the "Create Bucket" button
    4. Enter a bucket name, for naming help and guidelines refer to the [Naming documentation](bucket-names)
       - Plan for a unique name if it will be public
    5. Configure any additional settings as needed
    6. Click "Create" to finalize the bucket creation

    Your new bucket will appear in the bucket list and is immediately available for use.
  </TabItem>
  <TabItem value="qcli" label="Using Q's CLI tooling">
    Quilibrium's native CLI tooling will default to use the correct endpoint.
    ```bash
     qcli s3 create-bucket --bucket quil-s3-demo-bucket
    ```
  </TabItem>
  <TabItem value="thirdparty" label="Using a Third-party S3-compatible CLI">
    You can utilize a third-party S3-compatible CLI with a QStorage API key and modifying the endpoint to point to QStorage.

    ```bash
    aws s3api create-bucket \
        --bucket quil-s3-demo-bucket \
        --endpoint-url https://qstorage.quilibrium.com
    ```

    with your QConsole credentials stored set like this:

    ### Via config file
    ```bash
    aws_access_key_id=QmPublicAddress # Qmabc123 format
    aws_secret_access_key=0xprivatekey # hex format
    ```
    You can utilize the other methods to set this as described in their [documentation](https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-files.html).  
  </TabItem>
</Tabs>


