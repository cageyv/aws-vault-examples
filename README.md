# aws-vault-examples

## Required tools
- aws-vault 6.13+
- aws-cli 2.2+
- docker 20+
- docker-compose 1.27+
- node and npm (optional) 12+
- ./tools_checker.sh - for check all tools

### For Apple M1
- `softwareupdate --install-rosetta`
- [Docker Desktop](https://docs.docker.com/desktop/mac/apple-silicon/)

## aws-vault

https://github.com/99designs/aws-vault

### Linux:

```shell
curl -L "https://github.com/99designs/aws-vault/releases/download/v6.3.1/aws-vault-linux-amd64" -o "aws-vault" && chmod +x "aws-vault"
```
```shell
sudo mv aws-vault /usr/local/bin
```

### Verify 
```shell
aws-vault --version
```

## aws cli v2
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## docker
https://docs.docker.com/engine/install/

## docker-compose (linux or wsl)
https://docs.docker.com/compose/install/

## node js and npm (optional)
https://nodejs.org/en/download
https://nodesource.com/

