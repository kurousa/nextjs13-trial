import { NextApiRequest, NextApiResponse } from "next";

type Todo = {
  title: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  res.status(200).json([
    { title: "task1" },
    { title: "task2" },
    { title: "task3" }
  ])
}