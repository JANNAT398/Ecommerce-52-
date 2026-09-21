import { createSlice } from '@reduxjs/toolkit'

const USD_TO_BDT = 119.5

export const currencies = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  BDT: { code: 'BDT', symbol: '৳', rate: USD_TO_BDT },
}

export const languages = {
  en: { code: 'en', label: 'Eng' },
  bn: { code: 'bn', label: 'বাং' },
}

const initialState = {
  currency: 'USD',
  language: 'en',
}

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      if (currencies[action.payload]) {
        state.currency = action.payload
      }
    },
    setLanguage: (state, action) => {
      if (languages[action.payload]) {
        state.language = action.payload
      }
    },
  },
})

export const { setCurrency, setLanguage } = appSettingsSlice.actions

export const selectCurrency = (state) => state.appSettings?.currency || 'USD'
export const selectLanguage = (state) => state.appSettings?.language || 'en'

export const selectCurrencyInfo = (state) => currencies[selectCurrency(state)] || currencies.USD

export const formatPrice = (usdAmount, state) => {
  const info = currencies[state?.appSettings?.currency || 'USD'] || currencies.USD
  const converted = Number(usdAmount) * info.rate
  const formatted = converted.toFixed(2)
  return `${info.symbol}${formatted}`
}

export default appSettingsSlice.reducer
