#!/bin/sh
# localstack INIT_SCRIPTS_PATH
awslocal ssm put-parameter --overwrite --type String --name "/test/path/to" --value "cageyv"
