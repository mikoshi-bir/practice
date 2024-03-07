import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Counter() {
  const [counter, setCounter] = useState<number[]>([])

  console.log(counter.slice(-1))
  return (
    <div>
      <Button onClick={(event) => setCounter(counter.slice(0, -1))}>
        Уменьшить
      </Button>
      <div>Значение счетчика: {counter.join(', ')}</div>
      <Button
        onClick={(event) =>
          setCounter([...counter, (counter.slice(-1)[0] || 0) + 1])
        }
      >
        Увеличить
      </Button>
    </div>
  )
}
