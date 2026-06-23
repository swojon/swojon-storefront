export const getCategoryTree = (categories:any[], target:any): any[] =>{
    let cats = categories.filter(cat => target === null? cat.parentCategory === null: cat.parentCategory?.id === target.id)
    const categoryList:any[] = []

    cats.forEach(cat => {
      categoryList.push({
        ...cat,
        children: getCategoryTree(categories, cat)
      })
    });
    return categoryList
  }

  export const getLocationTree = (categories:any[], target:any): any[] =>{
    let cats = categories.filter(cat => target === null? cat.parentLocation === null: cat.parentLocation?.id === target.id)
    const categoryList:any[] = []

    cats.forEach(cat => {
      categoryList.push({
        ...cat,
        children: getLocationTree(categories, cat)
      })
    });
    return categoryList
  }