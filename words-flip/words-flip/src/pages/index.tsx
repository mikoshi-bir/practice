
import { Inter } from "next/font/google";
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`max-w-screen-md flex min-h-screen flex-col p-24 gap-5 ${inter.className}`}
    >
      <Label htmlFor="message-2">Укажите тематику слов, которые хотите изучать</Label>
      <Textarea placeholder="Прямо в этом окне" id="message-2" />
      <p className="text-sm text-muted-foreground">
        Так мы сможем подобрать вам слова, которые вы хотите изучить
      </p>
      <Button>Начать изучать слова</Button>

    </main>
  );
}
