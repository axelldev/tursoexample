import Container from '@/components/Container'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  return (
    <div className="container m-auto">
      <div className="py-8">
        <Header />
      </div>
      <Container>
        <main className="flex gap-4">
          <Input type="text" placeholder="add a task" />
          <Button type="submit" variant="secondary">
            Submit
          </Button>
        </main>
      </Container>
    </div>
  )
}
