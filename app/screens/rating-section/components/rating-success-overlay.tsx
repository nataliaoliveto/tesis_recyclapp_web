interface RatingSuccessOverlayProps {
  show: boolean;
}

export const RatingSuccessOverlay = ({ show }: RatingSuccessOverlayProps) => {
  if (!show) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="p-6 space-y-6 bg-card rounded-lg border shadow-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-green-800">
            ¡Gracias por tu opinión!
          </h3>
          <p className="text-muted-foreground text-center">
            Ya dejaste un comentario anteriormente
          </p>
        </div>
      </div>
    </div>
  );
};
