# cpp-file-watcher
Nodemon for C++ files. Watches C++ files in a directory for changes and compiles to object code. 

# Why cpp-file-watcher
The library was built to automate the generation of C++ object files when writing `.cpp` programs. Generating `.o` files was a problem for me as I would need to run the following lines of code over and over again:

`g++ -o output_file_name source_file.cpp`

then run `./output_file_name` to execute the program.

This library would reduce the need to type and run the `g++` command manually.

# Requirements

1. `nodejs` must be installed on your machine.
2. `g++` must be installed on your machine.

# Installation

You can find and use it on (https://www.privjs.com) by searching cpp-file-watcher in the marketplace

# Usage
 
 Once installed globally, navigate to the folder containing `.cpp` files. 

 On the command line within the folder containing the `.cpp` files type

 `cpp-file-watcher <filename>.cpp`

 An object file `.o` with the same name as the `.cpp` file will be created. 

# My Github

This is the place where you can follow my work or maybe just say hi.

[Martin Matei](https://github.com/MateiMartin)

