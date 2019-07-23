#!/sh/bash
echo "$1"
if [ "$1" == "--cov" ] || [ "$1" == "-c" ]; then
    TS_NODE_COMPILER_OPTIONS='{"module":"commonjs"}' npx nyc mocha
else
    TS_NODE_COMPILER_OPTIONS='{"module":"commonjs"}' npx mocha
fi
