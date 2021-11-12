# Basics with aws-vault
## Psevdo credentials
- `aws-vault add sample1` (test/test)
- `aws-vault exec sample1 -- env | grep AWS` (error)
- `aws-vault exec sample1 -n -- env | grep AWS` (result)

## Real case
- `aws-vault exec sample -- env | grep AWS` get temp session
- `aws-vault clear` - clear all temp sessuions 
