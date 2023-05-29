import { LoggerLevel } from './LoggerLevel';

export class Logger {
    public static styles = {
        [LoggerLevel.INFO]: 'color: gray',
        [LoggerLevel.DEBUG]: 'color: orange',
        [LoggerLevel.WARN]: 'color: hotpink',
        [LoggerLevel.ERROR]: 'color: red'
    };

    public static log(level: LoggerLevel, message: any, context?: string, scope?: string): void {
        // eslint-disable-next-line no-console
        console.log(`${ level } ${ scope || '...' } ${ context } ${ typeof message === 'object' ? JSON.stringify(message) : message }`);
    }

    public static info(message: any, context?: string): void {
        Logger.log(LoggerLevel.INFO, message, context);
    }

    public static debug(message: any, context?: string, scope?: string): void {
        Logger.log(LoggerLevel.DEBUG, message, context, scope);
    }

    public static warn(message: any, context?: string): void {
        Logger.log(LoggerLevel.WARN, message, context);
    }

    public static error(message: any, context?: string): void {
        Logger.log(LoggerLevel.ERROR, message, context);
    }
}
