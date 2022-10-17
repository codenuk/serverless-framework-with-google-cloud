// import schema from './schema';
export const handlerPath = (context: string) => {
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`
}

export const hello = {
  handler: `${handlerPath(__dirname)}/handler.hello`,
  events: [
    {
      http: {
        method: "get",
        path: "/hello",
        cors: true,
      },
    },
  ],
};
