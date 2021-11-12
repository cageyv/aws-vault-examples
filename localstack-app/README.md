# localstack-app

## Set up AWS profile for localstack
- nano ~/.aws/config
```
[profile localstack]
aws_access_key_id=test
aws_secret_access_key=test
region=eu-central-1
output=json
```
- aws-vault for localstack
```shell
aws-vault add localstack
```
- Access Key ID: test
- Secret Access Key: test 

## How to run?
```shell
aws-vault exec localstack -n -- zsh
docker-compose up -d
```

## How to stop with cleanup?
```shell
docker-compose down -v
sudo rm -rf /tmp/localstack
```

# Known errors
## Linux. ipv4 forwarding is disabled
```shell
sudo sysctl net.ipv4.ip_forward=1
```
