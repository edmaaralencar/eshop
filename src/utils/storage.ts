const APP_KEY = '@eshop'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}.${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: any[]) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}.${key}`, data)
}

export function removeStorageItem(key: string) {
  if (typeof window === 'undefined') return

  return window.localStorage.removeItem(`${APP_KEY}.${key}`)
}
