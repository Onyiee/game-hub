import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<FetchGamesResponse>("/games");
        setGames(response.data.results);
      } catch (err: any) {
        setError(err.message || "Failed to fetch games");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
