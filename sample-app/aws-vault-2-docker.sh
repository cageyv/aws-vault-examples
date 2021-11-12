#!/usr/bin/env bash
docker build -t sample-app .
aws-vault exec sample -- docker run --rm -e AWS_REGION="eu-central-1" -e AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY -e AWS_SESSION_TOKEN sample-app