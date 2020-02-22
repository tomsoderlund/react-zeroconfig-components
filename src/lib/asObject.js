const asObject = (strOrObj) => ({
  name: typeof strOrObj === 'object' ? strOrObj.name : strOrObj,
  value: typeof strOrObj === 'object' ? strOrObj.value : strOrObj
})
export default asObject
