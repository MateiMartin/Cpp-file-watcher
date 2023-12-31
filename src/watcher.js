#!/usr/bin/env node
const { time } = require('console');
const fs = require('fs');
const spawn = require('child_process').spawn;
const args = process.argv.slice(2);


const app = {
    /**
     * Checks if a filename was passed as command
     * line arguments.
     */
    init: function () {
        that = this;
        if (args[0] === undefined || args[0] === "") {
            console.error("Error: No filename passed, exiting...");
            return;
        }
        const file_name = './' + args[0];
        that.watch_file(file_name);
    },
    /**
     * Watches .cpp file for changes.
     */
    watch_file: function (file_name) {
        let fswait = false;
        console.log(`Watching process started for file ${file_name}`);
        let ext = args[0].length - 4;
        let output_file = args[0].substring(0, ext);
        fs.watch(file_name, (event, filename) => {
            if (filename) {
                if (fswait) return;
                fswait = setTimeout(() => {
                    fswait = false;
                }, 100);
                const compile_file = spawn('g++', ["-o", output_file, file_name]);

                compile_file.stdout.on('data', function (data) {
                    console.log(`stdout: ${data}`);
                    console.log(`${output_file} object file successfully generated`);
                });

                compile_file.stderr.on('data', function (data) {
                    console.log('\x1b[37m%s\x1b[0m',`Error:\n ${data}`);
                });

                compile_file.on('close', (code) => {
                    if (code === 0) {
                        setTimeout(() => {
                            const run_program = spawn(`./${output_file}`);
                            run_program.stdout.on('data', function (data) {
                                console.log('\x1b[37m%s\x1b[0m',`Code outputted without errors at ${new Date().toLocaleTimeString()}:`);
                                console.log('\x1b[36m', `${data}`);
                            });

                        }, 100);


                    } else {
                        console.error(`Compilation failed with code ${code}`);
                    }
                });
            }
        });
    }
}

// Starts the application
app.init();

module.exports = app;
