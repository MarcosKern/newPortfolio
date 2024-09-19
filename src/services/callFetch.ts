export default async function callFetch(url: string) {
    try {
      const response = await fetch(url);
      const parse = await (await response.json());
      return parse;
    } catch (error) {
      console.error()
    }
  }