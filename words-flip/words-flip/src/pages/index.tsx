import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { FormEvent, useState } from 'react'
import { useSavedWords } from '@/lib/hooks/useSavedWords'
import { queryWords } from '@/lib/queryWords'
import { ButtonWithSpinner } from '@/components/ui/loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [subject, setSubject] = useState('')
  const { setSavedWords, savedWords } = useSavedWords()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    queryWords(subject)
      .then((result) => {
        setSavedWords(result)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form
      onSubmit={onFormSubmit}
      className={`max-w-screen-md flex min-h-screen flex-col p-24 gap-5 ${inter.className}`}
    >
      <Label htmlFor="message-2">
        Укажите тематику слов, которые хотите изучать
      </Label>
      <Textarea
        name="subject"
        onChange={(event) => setSubject(event.target.value)}
        value={subject}
        placeholder="Прямо в этом окне"
        id="message-2"
        required
      />
      <p className="text-sm text-muted-foreground">
        Так мы сможем подобрать вам слова, которые вы хотите изучить
      </p>
      <ButtonWithSpinner loading={loading} />
      {error ? (
        <div className="text-sm text-muted-foreground text-red-600">
          Возникла ошибка: {error}
        </div>
      ) : null}
    </form>
  )
}
