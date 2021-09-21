module.exports = class Log {
    headers = [];
    constructor(headers) {
        if (typeof headers === 'string') {
            this.headers.push(headers);
        } else {
            this.headers = headers;
        }
    }

    base(head, color, args) {
        var args = Array.prototype.slice.call(arguments);

        process.stdout.write(color);
        process.stdout.write(head);

        this.headers.forEach((header) => process.stdout.write(`[${header}]`));
        args.forEach((arg, i) => {
            if (i >= 2) {
                process.stdout.write(` ${arg} `)
            }
        })
        
        process.stdout.write(`\r\n${Reset}`);
    }

    out(){
        this.base('[OUT]',Green,Array.prototype.slice.call(arguments));
        return undefined;
    }
    progress(){
        this.base('[PROGRESS]',Yellow,Array.prototype.slice.call(arguments));
        return undefined;
    }
    error(){
        this.base('[ERROR]',Red,Array.prototype.slice.call(arguments));
        return undefined;
    }
    debug(){
        this.base('[DEBUG]',BgCyan,Array.prototype.slice.call(arguments));
        return undefined;
    }
}

const Reset = "\x1b[0m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",
    Black = "\x1b[30m",
    Red = "\x1b[31m",
    Green = "\x1b[32m",
    Yellow = "\x1b[33m",
    Blue = "\x1b[34m",
    Magenta = "\x1b[35m",
    Cyan = "\x1b[36m",
    White = "\x1b[37m",
    BgBlack = "\x1b[40m",
    BgRed = "\x1b[41m",
    BgGreen = "\x1b[42m",
    BgYellow = "\x1b[43m",
    BgBlue = "\x1b[44m",
    BgMagenta = "\x1b[45m",
    BgCyan = "\x1b[46m",
    BgWhite = "\x1b[47m";