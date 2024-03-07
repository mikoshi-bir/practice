import { Word } from '@/lib/hooks/useSavedWords'

export default function WordCard({
  word: { word, transcription, translation },
}: {
  word: Word
}) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <div className="p-6">
        <h5 className="text-xl leading-tight font-medium mb-2">{word}</h5>
        <p className="text-gray-300 text-base mb-4">{translation}</p>
        <p className="text-gray-500 text-sm">{transcription}</p>
      </div>
    </div>
  )
}
