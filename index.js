class Logger {
  constructor(config) {
    this.config = config;
    this.connected = this.config.success;
    if (Logger.instance instanceof Logger) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  error(message) {
    console.group(this.config);
    console.error(message);
  }

  warning(message) {
    console.warn(message);
  }

  info(message) {
    console.info(message);
  }

  openConnection = () => {
    if (!this.connected) {
      this.info('Соединение установлено');
      this.connected = true;
    } else {
      this.info('Соединение уже установлено');
      console.log('Чтобы установить новое соединение остановите текущее');
    }
  }

  closeConnection = () => {
    if (this.connected) {
      this.info('Соединение закрыто');
      this.connected = false;
    } else {
      this.info('Никакого соединений не запущено');
      console.log('Чтобы закрыть, надо открыть');
    }
  }
}

const config = {
  PORT: '5050',
  date: new Date(),
  success: true
};

const config1 = {
  PORT: '5050',
  date: new Date(),
  success: false
};

const logger = new Logger(config1);

// logger.error('Неудача');
logger.openConnection();
// setTimeout(logger.closeConnection, 1000);