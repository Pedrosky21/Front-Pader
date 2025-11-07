import React from 'react'

interface LoadingScreenProps{
  message:string,
  show:boolean
}

export const Loading:React.FC<LoadingScreenProps> = ( {message="", show=false}) => {
  return (
    <div>
      {
        show && (
          <div className="fixed inset-0 top-0 left-0 bg-app-background bg-opacity-50 z-30 flex flex-col items-center justify-center gap-40 z-[10000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="white"
                className="bi bi-arrow-repeat animate-spin opacity-100 mb-32"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 2v5h.5a.5.5 0 0 0 .5-.5V3.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5A.5.5 0 0 0 2 2zm12 12v-5h-.5a.5.5 0 0 0-.5.5v3.293l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z"
                />
                <path
                  d="M8 3a5 5 0 0 1 4.546 2.916.5.5 0 1 0 .908-.418A6 6 0 1 0 14 8a.5.5 0 0 0-1 0 5 5 0 1 1-5-5z"
                />
              </svg>
              <p className="absolute text-center text-2xl font-semibold font-inter text-white mt-12">
                {message}
              </p>
          </div>
        )

      }
    </div>
  );
};
