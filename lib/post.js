const posts = [
    {
      id: 1,
      title: "Smashed potatoes and meetballs",
      publishDate: "2021-09-05",
      author: "Tuoħo Kankaanpää",
      coverImage: "/../public/images/237-536x354.jpeg",
      excerpt: "Today we will create smashed potatoes with some delicious meetballs",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio",
      slug: "smashed-potatoes-and-meetballs",
    },
    {
        id: 2,
        title: "How to make a pizza",
        publishDate: "2021-09-05",
        author: "Tuoħo Kankaanpää",
        coverImage: "/../public/images/237-536x354.jpeg",
        excerpt: "Today we will create smashed potatoes with some delicious meetballs",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio",
        slug: "how-to-make-a-pizza",
    },
    {
        id: 3,
        title: "How to make a glace",
        publishDate: "2021-03-05",
        author: "Tuoħo Kankaanpää",
        coverImage: "/../public/images/237-536x354.jpeg",
        excerpt: "Today we will create glace delicious",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio",
        slug: "how-to-make-a-glace",
    },
    ]

    export function getAllPosts() {
        return posts;
    }