#!/bin/sh

jq -r '.[] | .description = "hyper-detailed anime " + .description | [.sign, .description] | @csv' input.json > output.csv
