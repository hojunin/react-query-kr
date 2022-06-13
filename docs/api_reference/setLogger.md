---
sidebar_position: 19
title: setLogger
---

# **setLogger**

## **`setLogger`**

**`setLogger`**는 리액트에서 제공하는 기본 로거를 대체할 **커스텀 가능한** 리액트 쿼리 전용 로거입니다. 기본적으로 window.console 객체가 사용되기 때문에, 전역 객체에 console이 없으면 아무것도 기록되지 않습니다.

```tsx
import { setLogger } from 'react-query';
import { printLog, printWarn, printError } from 'custom-logger';

// Custom logger
setLogger({
    log: printLog,
    warn: printWarn,
    error: printError,
});

// Sentry logger
setLogger({
    log: (message) => {
        Sentry.captureMessage(message);
    },
    warn: (message) => {
        Sentry.captureMessage(message);
    },
    error: (error) => {
        Sentry.captureException(error);
    },
});

// Winston logger
setLogger(winston.createLogger());
```

**Options**

-   `logger: Logger`
    -   `log`, `warn`, 그리고 `error` 메소드를 구현하셔야 합니다.
