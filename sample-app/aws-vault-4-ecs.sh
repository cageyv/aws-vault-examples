#!/usr/bin/env bash
aws-vault exec sample --ecs-server -- docker-compose up --build
