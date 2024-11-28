interface StoreSuccessOverlayProps {
  show: boolean;
}

export const StoreSuccessOverlay = ({ show }: StoreSuccessOverlayProps) => {
  if (!show) return null;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-3xl">
      <div className="w-full max-w-md p-6 space-y-6 bg-card rounded-lg border shadow-sm">
        <div className="flex flex-col items-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-teal-700"
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
          <h3 className="text-2xl font-semibold tracking-tight">
            ¡Ya sos tienda!
          </h3>
          <p className="text-muted-foreground text-center">
            Ya sos parte de nuestra comunidad de tiendas
          </p>
        </div>
      </div>
    </div>
  );
}; 