#!/usr/bin/env bash
aws-vault exec sample --server -- docker-compose -f ec2.docker-compose.yml up --build
docker-compose down -v
aws-vault proxy --stop
