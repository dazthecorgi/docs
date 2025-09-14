#!/bin/bash

# Wrapper script for hyperlink CLI tool
# First tries to run hyperlink directly if available on PATH
# Falls back to npx on supported platforms, otherwise shows cargo install instructions

is_supported_platform() {
    local arch=$(uname -m)
    local os=$(uname -s)

    case "$os" in
        Darwin)
            # MacOS (both Intel and ARM)
            return 0
            ;;
        CYGWIN*|MINGW*|MSYS*)
            # Windows
            return 0
            ;;
        Linux)
            # Only x86 Linux is supported by npm package
            if [[ "$arch" == "x86_64" ]]; then
                return 0
            else
                return 1
            fi
            ;;
        *)
            return 1
            ;;
    esac
}

main() {
    # First, try to use hyperlink if it's available on PATH
    if command -v hyperlink >/dev/null 2>&1; then
        exec hyperlink "$@"
    fi

    # If not available, check if we can use npx
    if is_supported_platform; then
        exec npx @untitaker/hyperlink "$@"
    else
        echo "Error: hyperlink not found and npm package not available for this platform."
        echo "Please install it with: cargo install --locked hyperlink"
        echo "Make sure you have Rust/Cargo installed first."
        exit 1
    fi
}

main "$@"