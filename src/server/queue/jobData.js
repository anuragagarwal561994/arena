module.exports = class JobData {
  constructor({id, name, data, stacktrace, timestamp, progress, delay, attemptsMade, returnValue, failedReason, logs}) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.progress = progress;
    this.attemptsMade = attemptsMade;
    this.returnValue = returnValue;
    this.failedReason = failedReason;
    this.logs = logs;
    this.options = {
      stacktrace,
      timestamp,
      delay,
    };
  }
};
