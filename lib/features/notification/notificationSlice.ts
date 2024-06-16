import { Draft } from '@reduxjs/toolkit'
import { createAppSlice } from '@/lib/createAppSlice'
import { AlertColor } from '@mui/material/Alert'

export interface InitialState {
  isOpen: boolean
  message: string
  severity?: AlertColor
}

const initialState: InitialState = {
  isOpen: false,
  message: '',
  severity: undefined,
}

const setNotification = (
  state: Draft<InitialState>,
  action: {
    payload: any
    type: string
  },
  severity: AlertColor,
) => {
  state.isOpen = true
  state.message = action.payload
  state.severity = severity
}

export const notificationSlice = createAppSlice({
  name: 'notification',
  initialState,
  reducers: {
    setSuccessNotification: (state, action) => {
      setNotification(state, action, 'success')
    },
    setWarningNotification: (state, action) => {
      setNotification(state, action, 'warning')
    },
    setErrorNotification: (state, action) => {
      setNotification(state, action, 'error')
    },
    setInfoNotification: (state, action) => {
      setNotification(state, action, 'info')
    },
    closeNotification: (state) => {
      state.isOpen = false
      state.message = ''
    },
  },
})

export const {
  setSuccessNotification,
  setWarningNotification,
  setInfoNotification,
  setErrorNotification,
  closeNotification,
} = notificationSlice.actions

export default notificationSlice.reducer
