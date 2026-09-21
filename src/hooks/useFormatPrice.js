import { useSelector } from 'react-redux'
import { selectCurrencyInfo } from '../slices/appSettingsSlice'

export function useFormatPrice() {
  const info = useSelector(selectCurrencyInfo)

  return (usdAmount) => {
    const converted = Number(usdAmount) * info.rate
    const formatted = converted.toFixed(2)
    return `${info.symbol}${formatted}`
  }
}

export function useFormatPriceWithSymbol() {
  const info = useSelector(selectCurrencyInfo)

  return (usdAmount) => {
    const converted = Number(usdAmount) * info.rate
    const formatted = converted.toFixed(2)
    return { formatted, symbol: info.symbol, code: info.code, value: converted }
  }
}
