//static 

class Counter {
    static count: number = 0; //static memory

    increment() {
        return (Counter.count = Counter.count + 1)
    }

    static decrement() {
        return (Counter.count = Counter.count - 1)
    }
}

const instance1 = new Counter();
instance1.increment()

// console.log(instance1);

const instance2 = new Counter()
instance2.increment()
instance2.increment()
console.log(Counter.count);

instance1.increment()
instance1.increment()
instance1.increment()
instance1.increment()

Counter.decrement()

console.log(Counter.count);