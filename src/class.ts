class Items<U> {
  public items: U[]
  constructor(options: U[]) {
    this.items = options
  }
}

class Collection<T> extends Items<T> {}

export default Items
