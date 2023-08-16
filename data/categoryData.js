const categoryData = {
  data: {
    listCategories: {
      items: [
        {
          id: 11,
          name: "Electronics",
          slug: "Electronics",
          parentCategory: null,
          children: [
            {
              id: 111,
              name: "Laptop",
              slug: "laptop",
              children: [
                {
                  id: 1111,
                  name: "Lenovo",
                  slug: "premium",
                },
                {
                  id: 1112,
                  name: "Dell",
                  slug: "premium",
                },
                {
                  id: 1113,
                  name: "Asus",
                  slug: "premium",
                },
              ],
            },
            {
              id: 112,
              name: "Desktop",
              slug: "desktop",
              children: [
                {
                  id: 1121,
                  name: "Lenovo",
                  slug: "premium",
                },
                {
                  id: 1122,
                  name: "Dell",
                  slug: "premium",
                },
                {
                  id: 1123,
                  name: "Asus",
                  slug: "premium",
                },
              ],
            },
            {
              id: 113,
              name: "Tv",
              slug: "Tv",
              children: [
                {
                  id: 1131,
                  name: "Samsung",
                  slug: "premium",
                },
                {
                  id: 1132,
                  name: "Panasonic",
                  slug: "premium",
                },
              ],
            },
          ],
        },
        {
          id: 12,
          name: "Car",
          slug: "Car",
          parentCategory: null,
          children: [
            {
              id: 121,
              name: "Mercedes-Benz",
              slug: "Mercedes-Benz",
              children: [],
            },
            {
              id: 122,
              name: "BMW",
              slug: "BMW",
              children: [
                {
                  id: 6,
                  name: "Premium ",
                  slug: "premium",
                },
              ],
            },
          ],
        },
        {
          id: 13,
          name: "Mobile",
          slug: "Mobile",
          parentCategory: null,
          children: [
            {
              id: 131,
              name: "Iphone",
              slug: "Iphone",
              children: [
                {
                  id: 1311,
                  name: "Iphone 14 ",
                  slug: "premium",
                },
                {
                  id: 1312,
                  name: "Iphone 13 ",
                  slug: "premium",
                },
              ],
            },
            {
              id: 132,
              name: "Samsung",
              slug: "Samsung",
              children: [
                {
                  id: 1321,
                  name: "Galaxy Z Flip",
                  slug: "premium",
                },
                {
                  id: 1322,
                  name: "Galaxy Z Fold",
                  slug: "premium",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export default categoryData;
