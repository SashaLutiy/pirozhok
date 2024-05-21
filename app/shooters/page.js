'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Shooter() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

    return (
        <main className="main-inner">
          {shooterGames ? (
            <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
          ) : (
            <Preloader />
          )}
        </main>
    )
}