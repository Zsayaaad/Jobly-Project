const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-mono">
      <div className="w-80 p-6 loader-terminal">
        <div className="flex justify-between items-center mb-4 text-primary-container text-xs font-bold uppercase tracking-widest">
          <span>System_Load</span>
          <span className="animate-blink">_ACTIVE</span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-8 overflow-hidden border-2 bg-zinc-900 border-primary-container">
          <div className="absolute top-0 bottom-0 left-0 flex w-full">
            <div className="w-24 h-full bg-primary-container animate-data-flow" />
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 flex justify-between px-1">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="loader-grid-line" />
            ))}
          </div>
        </div>

        <div className="mt-4 text-white text-[10px] leading-tight">
          <div>{"> FETCHING_CORE_ASSETS..."}</div>
          <div className="opacity-50">{"> SYNCING_PERMISSIONS..."}</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
