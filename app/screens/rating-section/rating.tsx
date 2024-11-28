"use client";

import { Section } from "@/app/components/section";
import { RatingCarousel } from "./components/rating-carousel";
import { LeaveAComment } from "./components/leave-a-comment";
import { SignInDialog } from "@/app/components/sign-in-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RatingSuccessOverlay } from "./components/rating-success-overlay";
import { useQuery } from "@tanstack/react-query";
import { ratingsApi } from "@/services/api.ratings";

interface RatingProps {
  userId?: string | null;
}

export const Rating = ({ userId }: RatingProps) => {
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  const { data: hasRatingComment } = useQuery({
    queryKey: ["ratings"],
    queryFn: () => ratingsApi.getRatings(),
    enabled: !!userId,
    select: (data) => data.some((rating) => rating.userId === userId),
  });

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

      <Section className="bg-gray-50">
        {userId && !hasRatingComment ? (
          <LeaveAComment userId={userId} />
        ) : (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-green-800 sm:text-4xl">
                ¡Nos interesa tu opinión!
              </h2>
              {hasRatingComment ? (
                <RatingSuccessOverlay show={true} />
              ) : (
                <>
                  <p className="mt-4 text-lg text-green-700">
                    Inicia sesión para dejar tu comentario
                  </p>
                  <SignInDialog
                    open={showSignInDialog}
                    onOpenChange={setShowSignInDialog}
                  >
                    <Button
                      onClick={() => setShowSignInDialog(true)}
                      className="mt-6 px-6 py-3 text-base font-medium bg-green-600 hover:bg-green-700 text-white rounded-md"
                    >
                      Iniciar sesión para comentar
                    </Button>
                  </SignInDialog>
                </>
              )}
            </div>
          </div>
        )}
      </Section>
    </>
  );
};
