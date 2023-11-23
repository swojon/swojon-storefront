import cartImg from "../public/cat1.jpg";
import cartImg2 from "../public/cat2.jpg";
import cartImg3 from "../public/cat3.jpg";
import cartImg4 from "../public/cat4.jpg";

const categoryData = {
  data: {
    listCategories: {
      items: [
        {
          id: 11,
          name: "Electronics",
          slug: "electronics",
          parentCategory: null,
          banner: "",
          cardImg: cartImg,
          children: [
            {
              id: 111,
              name: "Laptop",
              slug: "laptop",
              children: [
                {
                  id: 1113,
                  name: "Asus",
                  slug: "premium",
                },
                {
                  id: 1114,
                  name: "Lenovo",
                  slug: "premium",
                },
                {
                  id: 1115,
                  name: "Dell",
                  slug: "premium",
                },
              ],
            },
          ],
        },

        {
          id: 127,
          name: "property",
          slug: "property",
          parentCategory: null,
          banner: "",
          cardImg: cartImg,
          children: [
            {
              id: 1217,
              name: "Mercedes-Benz",
              slug: "Mercedes-Benz",
              children: [],
            },
            {
              id: 1227,
              name: "BMW",
              slug: "BMW",
              children: [
                {
                  id: 675,
                  name: "Premium ",
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
