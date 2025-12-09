# 8085 Microprocessor Simulator (CLI VERSION)

[![License](https://img.shields.io/badge/License-Non--Commercial-blue.svg)](LICENSE.md)
[![Python](https://img.shields.io/badge/Python-3.12+-3776AB?logo=python&logoColor=white)](https://python.org)

8085 Microprocessor Simulator is an open-source simulator for the Intel 8085 microprocessor. It provides an interface to write, assemble, and execute 8085 assembly programs while observing the complete state of the processor including registers, memory, flags, and I/O ports.

## Features

- Interactive REPL for writing and executing 8085 assembly
- Real-time register monitoring (A, B, C, D, E, H, L, PC, SP)
- Memory inspection with range and list queries
- Flag status display (S, Z, AC, P, C)
- Timing diagram visualization
- Built-in instruction documentation
- AI assistant for 8085 programming help (via Groq API)
- Program file management
- Styled terminal output

## Download & Releases

You can get the 8085 Microprocessor Simulator in two ways:

1. **View the website / project page:**  
   Explore features, documentation, and demos on the official project page:  
   [https://github.com/girisakar365/8085-Microprocessor](https://github.com/girisakar365/8085-Microprocessor)

2. **Direct download from Releases:**  
   Download pre-built versions of the simulator from the GitHub Releases page:  
   [https://github.com/girisakar365/8085-Microprocessor/releases](https://github.com/girisakar365/8085-Microprocessor/releases)  
   Each release includes ready-to-run CLI versions and release notes for updates and bug fixes.

## Requirements

- Python 3.12+

## Installation

```bash
git clone https://github.com/girisakar365/8085-Microprocessor.git
cd 8085-Microprocessor
python3 -m venv .venv
source .venv/bin/activate    # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Usage

```bash
python -m CLI
```

## Commands

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `run [file.asm]` | Execute code from buffer or load from file |
| `register`       | Display all processor registers            |
| `memory <addr>`  | Inspect memory contents                    |
| `flag`           | Display processor flags                    |
| `assemble`       | Show assembled output with opcodes         |
| `timing <instr>` | Open timing diagram in browser             |
| `docs <instr>`   | Show instruction documentation             |
| `showprograms`   | List saved .asm files                      |
| `ask <question>` | Query AI assistant                         |
| `setkey <key>`   | Store Groq API key                         |
| `deletekey`      | Remove stored API key                      |
| `clear`          | Clear terminal                             |
| `clear_code`     | Clear code buffer                          |
| `help [cmd]`     | Show command help                          |
| `exit`           | Exit simulator                             |

---

## Examples

### Write and execute code directly

```
> MVI A, 05H
> INR A
> HLT
> run
```

### Inspect memory range

```
> memory 2000H - 200FH
```

### Inspect specific addresses

```
> memory 2000H, 2001H, 2002H
```

### Load and run a saved program

```
> run program1.asm
```

### View assembled machine code

```
> MVI A, 05H
> ADD B
> HLT
> assemble
```

### Get instruction documentation

```
> docs MOV
```

### Ask the AI assistant

```
> ask How does the PUSH instruction work?
```

## Program Storage

Programs are saved to and loaded from:

```
~/Documents/8085_Programs/
```

## AI Assistant

The `ask` command uses the Groq API for 8085-specific help:

1. Get an API key from [console.groq.com/keys](https://console.groq.com/keys)
2. Store it securely: `setkey <your_api_key>`
3. Ask questions: `ask How do I add two 8-bit numbers?`

> The key is stored in your system keyring for security.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## Code of Conduct

This project has adopted a [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating.

## License

This project is licensed under a Non-Commercial License. See [LICENSE.md](LICENSE.md) for details.
