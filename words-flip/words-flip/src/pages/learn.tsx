import WordCard from '@/components/ui/word-card'
import { useSavedWords } from '@/lib/hooks/useSavedWords'

export default function LearnPage() {
  const { savedWords } = useSavedWords()

  console.log('saved words: ', savedWords)
  return (
    <div className="container mx-auto p-4">
      <h2>Слова для изучения</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {savedWords.map((word) => {
          return <WordCard key={word.word} word={word} />
        })}
      </div>
    </div>
  )
}
