### Use `tgv` to manage multiple versions of terragrunt with ease.
      __
      | |_    __ _  __   __
      | __|  / _` | \ \ / /
      | |_  | (_| |  \ V / 
      \__|   \__, |   \_/  
             |___/   

        Happy terragrunting 😍🥂!
  ---------------------------------------

## Installation
> **_NOTE:_** `tgv` should be installed `globally` so that it can be run from anywhere on your computer.
```sh
npm install -g tgv
```
or
```sh
npm i -g tgv
```
# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
  * [Usage](#usage)
    * [Modules](#modules)
      * [install](#install)
      * [use](#use)
      * [list](#list)
<!--te-->

## Usage

https://user-images.githubusercontent.com/25563661/142188036-4f2a8b65-1a3e-4298-95e0-9ed533c66a18.mp4

### Modules

#### *install*
```sh
tgv install <version>
```
or
```sh
tgv i <version>
```
| Version          | Description                                |
| ---------------- | ------------------------------------------ |
| x.x.x            | Installs terragrunt version x.x.x           |
| x^               | Installs latest version of release x       |
| x.x.^            | Installs latest version of release x.x     |
| latest           | Installs latest version of terragrunt       |

#### *use*
```sh
tgv use <version>
```

| Version          | Description                               |
| ---------------- | ----------------------------------------- |
| x.x.x            | use terragrunt version x.x.x               |
| latest           | use latest version of terragrunt           |

> **_NOTE:_** If you're using windows OS, you would be prompted for admin privilege. Accept it. This is a one-time request to set terragrunt location in you system path. Unix machines would also get password prompt, as this requires permission to copy terragrunt to your bin directory.

#### *list*
```sh
tgv list [option]
```
or
```sh
tgv ls [option]
```
| Option         | Option Alias  |                Description                                             |
| ---------------|---------------|----------------------------------------------------------------------- |
| `--local`      |  `-l`         |  Lists all terragrunt versions installed locally                        |
| `--remote`     |  `-r`         |  Lists all terragrunt versions available remotely, on terragrunt server  |
|                |               |  Defaults to listing terragrunt versions installed locally              |
