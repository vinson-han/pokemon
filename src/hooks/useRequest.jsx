import useSWR from "swr";
const baseUrl = "https://pokeapi.co/api/v2";

export default function useRequest(path, name) {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name
    ? baseUrl + path + "/" + name + `?limit=20&offset=20`
    : baseUrl + path;

  const { data, error, isLoading } = useSWR(url);

  return { data, error, isLoading };
}
