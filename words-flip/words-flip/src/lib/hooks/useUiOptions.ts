import { useLocalStorage } from 'usehooks-ts'

export type Options = {
  showWordsTranslation: boolean
}

export function useUiOptions() {
  const [uiOptions, setUiOptions] = useLocalStorage<Options>(
    'ui-options',
    {
      showWordsTranslation: true,
    },
    {
      initializeWithValue: false,
    }
  )

  return {
    ...uiOptions,
    updateOptions(newOptions: Partial<Options>) {
      setUiOptions((prevOptions) => ({
        ...prevOptions,
        ...newOptions,
      }))
    },
    toggleWordsTranslation() {
      setUiOptions((prevOptions) => ({
        ...prevOptions,
        showWordsTranslation: !prevOptions.showWordsTranslation,
      }))
    },
    
  }
}
