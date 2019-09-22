export default class CategoriesService {
  data = {
    categories: [
      {
        id: 1,
        title: "Продукты",
        limit: 10500.00,
        spent: 5000.12,
      },
      {
        id: 2,
        title: "Хозяйство",
        limit: 5000.00,
        spent: 5000.00,
      },
      {
        id: 3,
        title: "Развлечения",
        limit: 5000.00,
        spent: 2560.50,
      },
    ]
  }

  getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.data.categories), 500)
    })
  }
}
