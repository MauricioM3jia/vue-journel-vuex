export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsum. Inventore quam distinctio nobis sequi eum! Error doloribus labore culpa aperiam molestias minus, suscipit ullam sequi ipsam reprehenderit eius magnam.`,
      picture: null,
    },
    {
        id: new Date().getTime() +1000,
        date: new Date().toDateString(),
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim, tempora iure minima totam adipisci nemo sed quod. Necessitatibus repudiandae atque eveniet distinctio voluptatem iusto, aspernatur inventore vitae praesentium delectus!`,
        picture: null,
      },
      
      {
        id: new Date().getTime() +2000,
        date: new Date().toDateString(),
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae velit ex doloribus molestiae explicabo nihil aspernatur laboriosam quisquam ea similique, quidem repellat nemo maiores optio amet commodi aliquid error maxime.`,
        picture: null,
      },
  ],
});
