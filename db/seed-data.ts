interface ISeedData {
  entries: ISeedEntry[];
}

interface ISeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: ISeedData = {
  entries: [
    {
      description:
        "Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En-Progreso Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminadas: Commodo veniam aliqua tempor officia officia non laborum.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
