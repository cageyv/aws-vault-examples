#!/usr/bin/env bash
aws-vault exec localstack -n -- docker-compose up --build
docker-compose down -v