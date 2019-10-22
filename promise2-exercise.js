// console.log("Before")
// A((text) => {c
//   console.log(text)
//   C((text) => {
//     console.log(text)
//     B((text) => {
//       console.log(text)
//     })
//   })
// })
// console.log("After")

const p = A()
p.then(() => B(text))

function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Function A done')
    }, 3000)
  })
}


function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Function B done')
    }, 1000)
  })
}


function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Function C done')
    }, 2000)
  })
}