export const getFlatCategories = (categories: any) : any[] => {
    let cats: any[] = [];
    const flatCats = (_cats: []) => {
        _cats.forEach((_cat: any) => {
            cats.push(_cat)
            if (_cat.children) flatCats(_cat.children)
        });
        
    }
    flatCats(categories)
    return cats
}