import { useLocalStorage } from 'usehooks-ts'

export type Word = {
  word: string
  translation: string
  transcription: string
}

export function useSavedWords() {
  const [savedWords, setSavedWords] = useLocalStorage<Word[]>(
    'saved-words',
    [],
    { initializeWithValue: false }
  )

  return {
    savedWords,
    setSavedWords,
    isInitialized: savedWords.length > 0,
  }
}
