import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useIncreasingCounter } from '@/lib/hooks/useIncreasingCounter'
import { Input } from '@/components/ui/input'

export default function Counter() {
  const [play, setPlay] = useState(true)
  const [interval, setInterval] = useState(1000)
  const [quantity, setQuantity] = useState(1)

  const counter = useIncreasingCounter(0, play, interval, quantity)

  return (
    <>
      <div>Значение счетчика: {counter}</div>
      <button onClick={() => setPlay(!play)}>{play ? 'stop' : 'play'}</button>
      <Input
        onBlur={(event) => setInterval(Number(event.target.value))}
        defaultValue={interval}
        type="number"
      />
      <Input
        onBlur={(event) => setQuantity(Number(event.target.value))}
        defaultValue={quantity}
        type="number"
      />
    </>
  )
}
