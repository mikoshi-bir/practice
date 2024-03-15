import WordCard from '@/components/ui/word-card'
import { useSavedWords } from '@/lib/hooks/useSavedWords'
import { Button } from '@/components/ui/button'
import { useUiOptions } from '@/lib/hooks/useUiOptions'
import Link from 'next/link'

export default function LearnPage() {
  const {
    savedWords,
    getLearnedWords,
    getUnlearnedWords,
    changeLearnedState,
    removeWord,
    unlearnAllWords,
  } = useSavedWords()

  const { toggleWordsTranslation, showWordsTranslation } = useUiOptions()

  console.log('saved words: ', savedWords)
  return (
    <div className="container mx-auto p-4">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight my-5">
        Слова для изучения
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {getUnlearnedWords().map((word) => {
          return (
            <WordCard
              key={word.text}
              word={word}
              isLearned={false}
              onWordRemoved={() => removeWord(word)}
              onLearnedChange={() => changeLearnedState(word, true)}
            />
          )
        })}
      </div>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight my-5">
        Изученные слова
      </h2>
      <div className="flex flex-col sm:gap-3 sm:flex-row gap-2 my-5">
        <Button onClick={toggleWordsTranslation} variant="secondary">
          {showWordsTranslation
            ? 'Скрыть перевод слов'
            : 'Показать перевод слов'}
        </Button>
        <Button onClick={unlearnAllWords} variant="secondary">
          Пометить все слова как неизученные
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {getLearnedWords().map((word) => {
          return (
            <WordCard
              key={word.text}
              word={word}
              isLearned={true}
              onWordRemoved={() => removeWord(word)}
              onLearnedChange={() => changeLearnedState(word, false)}
            />
          )
        })}
      </div>
      <div className="flex justify-center">
        <Button asChild className="my-5 w-full max-w-52" variant="secondary">
          <Link href="/">Сделать новый запрос</Link>
        </Button>
      </div>
    </div>
  )
}
