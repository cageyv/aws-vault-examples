#!/usr/bin/env bash
aws-vault exec sample -- docker-compose up --build
docker-compose down -v