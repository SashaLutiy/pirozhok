'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Runner() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");

    return (
        <main className="main-inner">
          {runnerGames ? (
            <CardsListSection id="runner" title="Ранеры" data={runnerGames} />
          ) : (
            <Preloader />
          )}
        </main>
    )
}