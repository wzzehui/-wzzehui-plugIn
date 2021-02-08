
const yb = new Promise ((resolve, reject) => {
  setTimeout(() => {
    console.log('dddddddddd')
    resolve()
  }, 3000)
})
async function ybfn () {
  await yb;
  console.log('enednednednen')
}

export { ybfn }