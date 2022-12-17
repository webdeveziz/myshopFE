// дан массив  arr = [1,1,2,2,2,5,5,5,2,7]
// нужно вернуть уникальный массив отсортированный по частоте встречаемости
// 2 встречается чаще всего, потом 5 и тд
// ([2,5,1,7] )

function func(arr) {
  let temp = {}

  for (let i = 0; i < arr.length; i++) {
    if (temp[arr[i]]) {
      temp[arr[i]] = temp[arr[i]] + 1
      console.log(temp[arr[i]])
    } else {
      temp[arr[i]] = 1
    }
  }

  // const newArr = Object.entries(temp)

  // const elements = newArr.sort((a, b) => {
  //   return b[1] - a[1]
  // })

  // const m = elements.map((el) => Number(el[0]))
  // console.log(m)
}

func([1, 1, 2, 2, 2, 5, 5, 5, 2, 7])
