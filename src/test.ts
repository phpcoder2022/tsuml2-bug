export class Test {
  constructor(
    public publicField: number,
    protected protectedField: number,
    private privateField: number,
  ) {
    console.log(this.privateField);
  }
}
