import { Subscribable } from './SubscribableClass'

const sub = new Subscribable<string>()
const unsub = sub.subscribe(console.log)

sub.publish('Hello')
sub.publish('Whatever')

unsub()

sub.publish('Goodbye')

class DataClass extends Subscribable<number> {
  constructor(public value: number) {
    super()
  }

  setValue(v: number) {
    this.value = v
    this.publish(v)
  }
}

const dc = new DataClass(0)

const dcUnsubscribeOne = dc.subscribe((v: number) => console.log(`DC1: ${v}`))
const dcUnsubscribeTwo = dc.subscribe((v: number) => console.log(`DC2: ${v}`))

dc.setValue(2)
dc.setValue(4)
dcUnsubscribeOne()
dcUnsubscribeTwo()
dc.setValue(8)
