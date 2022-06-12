---
sidebar_position: 17
title: focusManager
---

# 포커스 매니져

`FocusManager` 는 리액트 쿼리에서 **포커스** 상태를 관리합니다.

앱 구동 시 이벤트 리스너를 등록하여 기본 설정으로 제어하실 수 있고, 개별 쿼리에 옵션으로 부여해서 제어하실 수도 있습니다.

:::info 다음의 3가지 메소드를 활용하실 수 있습니다.

-   [setEventListener](https://react-query.tanstack.com/reference/focusManager#focusmanagerseteventlistener)
-   [setFocused](https://react-query.tanstack.com/reference/focusManager#focusmanagersetfocused)
-   [isFocused](https://react-query.tanstack.com/reference/focusManager#focusmanagerisfocused)

:::

## **`focusManager.setEventListener`**

`setEventListener` 를 활용하여 커스텀 이벤트 리스너를 등록하실 수 있습니다.

```tsx
import { focusManager } from 'react-query';

focusManager.setEventListener((handleFocus) => {
    // 포커스 되었는지를 리스닝합니다.
    if (typeof window !== 'undefined' && window.addEventListener) {
        window.addEventListener('visibilitychange', handleFocus, false);
        window.addEventListener('focus', handleFocus, false);
    }

    return () => {
        // 언마운트 시 이벤트 리스너 등록해제 잊지마세요.
        window.removeEventListener('visibilitychange', handleFocus);
        window.removeEventListener('focus', handleFocus);
    };
});
```

## **`focusManager.setFocused`**

`setFocused` 로 포커스 여부를 세팅하세요. undefined를 부여하면 기본 설정값대로 동작합니다.

```tsx
import { focusManager } from 'react-query';

// Set focused
focusManager.setFocused(true);

// Set unfocused
focusManager.setFocused(false);

// Fallback to the default focus check
focusManager.setFocused(undefined);
```

**Options**

-   `focused: boolean | undefined`

## **`focusManager.isFocused`**

`isFocused` 포커스되었는지 여부를 확인합니다.

```tsx
const isFocused = focusManager.isFocused();
```
