#!/usr/bin/env bash
aws-vault exec sample --ecs-server -- docker-compose -f ecs.docker-compose.yml up --build
docker-compose down -v