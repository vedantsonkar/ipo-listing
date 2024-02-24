const tableHeadings: string[] = [
  "Company/Issue Date",
  "Issue size",
  "Price range",
  "Min Invest/qty",
];

const timeline: TimeLine[] = [
  {
    title: "Bidding Starts",
    value: 0,
    date: "12 Dec 2023",
  },
  {
    title: "Bidding Ends",
    value: 1,
    date: "15 Dec 2023",
  },
  {
    title: "Allotment Finalization",
    value: 2,
    date: "18 Dec 2023",
  },
  {
    title: "Refund Initiation",
    value: 3,
    date: "18 Dec 2023",
  },
  {
    title: "Demat Transfer",
    value: 4,
    date: "18 Dec 2023",
  },
  {
    title: "Listing Date",
    value: 5,
    date: "21 Dec 2023",
  },
];

const companies: Company[] = [
  {
    name: "GO Air Private Limited",
    symbol: "GO AIR",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a imperdiet mauris, vel pulvinar nisi. Sed rhoncus iaculis tempus. Mauris id iaculis orci, a consequat justo. Sed pharetra sapien magna, eget maximus quam consequat vel. Morbi imperdiet faucibus diam et tempor. Mauris facilisis at ligula a facilisis. Nunc accumsan ut diam a aliquam. Mauris vel velit dignissim, condimentum nunc ut, sagittis felis. Donec vitae iaculis diam, eu ultrices lorem. Pellentesque id tellus pellentesque, laoreet velit at, iaculis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a porttitor mi, et auctor enim. Etiam ac lacus tortor. Cras fermentum in risus nec suscipit. Cras massa diam, tincidunt non accumsan tincidunt, rutrum at dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed condimentum, risus quis elementum blandit, turpis tortor auctor dui, ut consectetur massa enim eu metus. Sed consequat sapien diam, nec sagittis massa interdum ac. Nam lacus arcu, placerat condimentum risus ac, consectetur gravida ante. Integer auctor purus ut nisl sollicitudin, vel blandit neque bibendum. Mauris vitae scelerisque arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Mauris leo sapien, bibendum in purus nec, fringilla rutrum velit. Ut suscipit libero eros, quis suscipit nisl finibus vel. Nullam congue viverra ligula, et porta libero sodales nec. Phasellus mollis massa pretium elit posuere aliquam. Sed diam ante, facilisis a nibh vitae, ornare vehicula odio. In efficitur ligula vel risus vestibulum ultricies. Aliquam non luctus augue, non tempor tellus. Integer a fringilla quam, eu lobortis felis. In sed nunc sed erat mattis pharetra.`,
    logo: "/images/logos/GO_AIR.png",
    issue: {
      size: {
        from: 3600,
        to: 3700,
      },
      date: {
        from: "12 Dec 22",
        to: "15 Dec 22",
      },
    },
    price: {
      from: 50,
      to: 60,
    },
    status: 0,
    minAmount: 50000,
    lotSize: 150,
    listedOn: "15 Dec 22",
    listedPrice: 150,
    listingGains: 10,
    urlKey: "go-air",
  },
  {
    name: "OYO Private Limited",
    symbol: "OYO",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a imperdiet mauris, vel pulvinar nisi. Sed rhoncus iaculis tempus. Mauris id iaculis orci, a consequat justo. Sed pharetra sapien magna, eget maximus quam consequat vel. Morbi imperdiet faucibus diam et tempor. Mauris facilisis at ligula a facilisis. Nunc accumsan ut diam a aliquam. Mauris vel velit dignissim, condimentum nunc ut, sagittis felis. Donec vitae iaculis diam, eu ultrices lorem. Pellentesque id tellus pellentesque, laoreet velit at, iaculis eros.`,
    logo: "/images/logos/OYO.png",
    issue: {
      size: {
        from: 3800,
        to: 3900,
      },
      date: {
        from: "20 Feb 23",
        to: "23 Feb 23",
      },
    },
    price: {
      from: 55,
      to: 65,
    },
    status: 3,
    minAmount: 60000,
    lotSize: 100,
    listedOn: "28 Feb 23",
    listedPrice: 160,
    listingGains: 15,
    urlKey: "oyo",
  },
  {
    name: "Bajaj Energy Private Limited",
    symbol: "BJE",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a imperdiet mauris, vel pulvinar nisi. Sed rhoncus iaculis tempus. Mauris id iaculis orci, a consequat justo. Sed pharetra sapien magna, eget maximus quam consequat vel. Morbi imperdiet faucibus diam et tempor. Mauris facilisis at ligula a facilisis. Nunc accumsan ut diam a aliquam. Mauris vel velit dignissim, condimentum nunc ut, sagittis felis. Donec vitae iaculis diam, eu ultrices lorem. Pellentesque id tellus pellentesque, laoreet velit at, iaculis eros.`,
    logo: "/images/logos/BAJAJ_ENERGY.jpg",
    issue: {
      size: {
        from: 3800,
        to: 3900,
      },
      date: {
        from: "20 Feb 23",
        to: "23 Feb 23",
      },
    },
    price: {
      from: 55,
      to: 65,
    },
    status: 2,
    minAmount: 60000,
    lotSize: 100,
    listedOn: "28 Feb 23",
    listedPrice: 160,
    listingGains: 15,
    urlKey: "bje",
  },
  {
    name: "SkyTech Innovations Ltd",
    symbol: "SKYI",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a imperdiet mauris, vel pulvinar nisi. Sed rhoncus iaculis tempus. Mauris id iaculis orci, a consequat justo. Sed pharetra sapien magna, eget maximus quam consequat vel. Morbi imperdiet faucibus diam et tempor. Mauris facilisis at ligula a facilisis. Nunc accumsan ut diam a aliquam. Mauris vel velit dignissim, condimentum nunc ut, sagittis felis. Donec vitae iaculis diam, eu ultrices lorem. Pellentesque id tellus pellentesque, laoreet velit at, iaculis eros.`,
    logo: "/images/logos/SKY_TECH.png",
    issue: {
      size: {
        from: 3500,
        to: 3600,
      },
      date: {
        from: "10 Jan 23",
        to: "13 Jan 23",
      },
    },
    price: {
      from: 45,
      to: 55,
    },
    status: 1,
    minAmount: 45000,
    lotSize: 120,
    listedOn: "15 Jan 23",
    listedPrice: 130,
    listingGains: 8,
    urlKey: "skyi",
  },
  {
    name: "TechVista Solutions Inc",
    symbol: "TECH",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a imperdiet mauris, vel pulvinar nisi. Sed rhoncus iaculis tempus. Mauris id iaculis orci, a consequat justo. Sed pharetra sapien magna, eget maximus quam consequat vel. Morbi imperdiet faucibus diam et tempor. Mauris facilisis at ligula a facilisis. Nunc accumsan ut diam a aliquam. Mauris vel velit dignissim, condimentum nunc ut, sagittis felis. Donec vitae iaculis diam, eu ultrices lorem. Pellentesque id tellus pellentesque, laoreet velit at, iaculis eros.`,
    logo: "/images/logos/TECH_VISTA.jpg",
    issue: {
      size: {
        from: 3800,
        to: 3900,
      },
      date: {
        from: "20 Feb 23",
        to: "23 Feb 23",
      },
    },
    price: {
      from: 55,
      to: 65,
    },
    status: 4,
    minAmount: 60000,
    lotSize: 100,
    listedOn: "28 Feb 23",
    listedPrice: 160,
    listingGains: 15,
    urlKey: "tech",
  },
];

const BASE_FE_URL = "http://localhost:3000";

export { tableHeadings, timeline, companies, BASE_FE_URL };
