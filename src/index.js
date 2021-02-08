import { ybfn } from './md';
class Zzh  {
  constructor() {
    this.name = '123';
  }
}
class Jc extends Zzh {
  constructor() {
    super();
    // this.name = '456';
  }
}
const zzh = new Zzh()
const zzy = new Jc()
const arr = ['ddd', 'eeeee']
console.log(zzh.name)
console.log(zzy.name)
arr.forEach((item) => {
  console.log(item)
})
ybfn()