#!/usr/bin/env bash
aws_cli_version="$(aws --version)"
docker_version="$(docker --version)"
docker_compose_version="$(docker-compose --version)"
echo "aws-cli: $aws_cli_version"
echo "docker: $docker_version"
echo "docker-compose: $docker_compose_version"
echo "aws-vault: " && aws-vault --version
echo "Done."
