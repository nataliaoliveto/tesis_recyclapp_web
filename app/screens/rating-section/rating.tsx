import { Section } from "@/app/components/section";
import { RatingCarousel } from "./components/rating-carousel";

import { LeaveAComment } from "./components/leave-a-comment";
import { auth } from "@clerk/nextjs/server";
import { useRatingsQuery } from "@/hooks/useRatingsQuery";

export const Rating = async () => {
  const { userId } = await auth();

  return (
    <>
      <Section id="id-rating" className="bg-gray-50 pt-12">
        <div className="flex justify-center flex-col text-gray-700">
          <div className="flex flex-col justify-center items-center space-y-8">
            <h2 className="text-5xl font-semibold text-green-800 text-center">
              ¿Qué opinan de RecyclApp?
            </h2>
            <div className="w-[400px] h-2 bg-yellow-950" />
          </div>

          <RatingCarousel />
        </div>
      </Section>

      {userId && (
        <Section className="bg-gray-50">
          <LeaveAComment />
        </Section>
      )}
    </>
  );
};
